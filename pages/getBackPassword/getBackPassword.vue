<template>
	<!-- 忘记密码 -->
	<view class="container_l">
		<view :style="{height:statusBarHeight}"></view>
		<view class="back" @click='back_page'>返回</view>
		<view class="title">找回密码</view>
		<view class="int">
			<input class="inp_" type="text" placeholder="邮箱或手机号码" placeholder-style="color:#C3C3C3;font-size:30rpx;" v-model="phone_email" @focus="phone_in_input">
		     <view class="clear" v-show='phone_in' @click="clear_p"><image src="../../static/image/reset.png" mode=""></image></view>
		</view>
		<button class="next"  @click="next" v-if="allowNext">下一步</button>
		<button class="next_"  v-else>下一步</button>

		<view class="pop" v-if="show">
			<view class="pop_con" v-if="isTop" :style="{bottom:bottom}">
				<view class="pop_t">
					<view>验证码</view>
					<view class="cancel" @click="cancel">取消</view>
				</view>
				<view class="line"></view>
				<view class="pop_p">{{phone_email}}</view>
				<view class="pop_c">
					<input class="pop_i" type="text" :adjust-position="false" @input="code_in" placeholder="请输入验证码" v-model="code" placeholder-style="color:#C3C3C3;font-size:30rpx;">
					<button class="pop_b" @click="getCodeBtn" :disabled="cutdownIng">{{sendBtnText}}</button>
				</view>
				<view class="btn_n1" @click="sure" v-if="allowCode">确认</view>
				<view class="btn_n" v-else>确认</view>
			</view>
			<view v-else>
				<view class="pop_t">
					<view>验证码</view>
					<view class="cancel" @click="cancel">取消</view>
				</view>
				<view class="line"></view>
				<view class="pop_p">{{phone_email}}</view>
				<view class="pop_c">
					<input class="pop_i" type="text" :adjust-position="false" @input="code_in" placeholder="请输入验证码" v-model="code" placeholder-style="color:#C3C3C3;font-size:30rpx;">
					<button class="pop_b" @click="getCodeBtn" :disabled="cutdownIng">{{sendBtnText}}</button>
				</view>
				<view class="btn_n1" @click="sure" v-if="allowCode">确认</view>
				<view class="btn_n" v-else>确认</view>
			</view>
		</view>
		<!-- <tfgg-verify @result='verifyResult' ref="verifyElement"></tfgg-verify> -->
	</view>

</template>

<script>
	var intv;
	// import tfggVerify from "@/components/tfgg-verify/tfgg-verify.vue";
	const cutdownTime = 60;
	const cutdownTime_e = 120;
	var check = require('../../common/utils.js');
	export default {
		data() {
			return {
				phone_email: '',
				show:false,
				code: '',
				phone_in:false,
				cutdownIng: false, // 正在倒计时中，
				cutDownTiemr: '', // 倒计时定时器
				sendBtnText: '获取验证码',
				type:'',
				iten:true,
				statusBarHeight:'',//状态栏高度
				bottom: '',
				isTop: false
			};
		},
		onLoad(e) {
			uni.getSystemInfo({
				success: res=>{
					this.statusBarHeight = res.statusBarHeight + 'px';
				}
			})
		},
		computed: {
			allowNext () {
				return !!(this.phone_email)
			},
			allowCode() {
				return !!(this.code)
			}
		
		},
		components: {
			// "tfgg-verify":tfggVerify
		},
		onBackPress(option) {
			plus.key.hideSoftKeybord();
		},

		methods: {
			/* 校验结果回调函数 */
			verifyResult(res){
				this.show=true;
				this.getCodeBtn()
			},
			verifyFasong(){
				
				this.$refs.verifyElement.show();
			},
			/* 校验插件重置 */
			verifyReset(){
				this.$refs.verifyElement.reset();
			},
			cancel() {
				this.show = false;
				clearInterval(this.cutDownTiemr);
				this.cutdownIng = false;
				this.sendBtnText = '获取验证码';
				this.cutDownTiemr = '';
			},
			back_page(){
				uni.navigateBack({
					delta:1
				})
			},
			code_in(e){
				if(e.detail.value!=""){
					this.iten=false
				}else{
					this.iten=true
				}
			},
			phone_in_input(){
				this.phone_in=true;
				this.isTop = true;
				uni.onKeyboardHeightChange(res => {
					this.bottom = res.height + 'px';
				})
			},
			
			clear_p(){
				this.phone_email="";
				this.phone_in=false;
			},
			next() {
				var flag = check.checkEmail(this.phone_email);
				const myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
				var that=this;
				if (!this.phone_email) {
					uni.showToast({
						title: '请输入邮箱或手机号',
						icon: 'none',
						duration: 2000
					});
					return false;
				}else if(myreg.test(this.phone_email)||flag){
					uni.request({
						url:this.url+'checkuser/',
						method:'POST',
						data:{
							mobile:this.phone_email
						},
						header: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						success(res) {
							if(res.statusCode==200){
								uni.showToast({
									title:'用户不存在',
									icon:"none",
									duration:3000
								})
							}else if(res.statusCode==401){
								that.show=true;
								that.getCodeBtn()
								//that.$refs.verifyElement.show();
							}else if(res.statusCode==400){
								uni.showToast({
									title:'参数错误',
									icon:"none",
									duration:3000
								})
							}
						}
					})
				}
				 else {
					 uni.showToast({
					 	title: '请输入正确邮箱或手机号',
					 	icon: 'none',
					 	duration: 2000
					 });
				}
			},
			getCodeBtn() {
				var flag = check.checkEmail(this.phone_email);
				const myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
				const _this = this;
				if (_this.cutdownIng) return;
				if(myreg.test(this.phone_email)){
					//如果是手机号
					//console.log("手机号找回密码")
					_this.type=1;
					uni.request({
						method: 'POST',
						data: {
							mobile: _this.phone_email
						},
						//手机忘记密码  获取验证码接口
						url: _this.url + 'users/forgot/sms/',
						header: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						success(res) {
							var ocode = res.statusCode;
							if (ocode == 200) {
								let surTime = cutdownTime;
								_this.cutdownIng = true;
								_this.sendBtnText = `${surTime}s`;
								_this.cutDownTiemr = setInterval(() => {
									surTime--;
									_this.sendBtnText = `${surTime}s`;
									if (surTime <= 0) {
										clearInterval(_this.cutDownTiemr);
										_this.cutdownIng = false;
										_this.sendBtnText = '重新获取';
										_this.cutDownTiemr = '';
									}
									
								}, 1000);
							} else if (ocode == 400) {
								uni.showToast({
									title: "发送太频繁，请稍后",
									icon: 'none',
									duration: 3000
								})
							}
						}
					});
				}else if(flag){
					//如果是邮箱
					//console.log("邮箱找回密码")
					_this.type=2;
					uni.request({
						method: 'POST',
						data: {
							mobile: _this.phone_email
						},
						//邮箱忘记密码  获取验证码接口
						url: _this.url + 'users/find/pwd/sms/',
						header: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						success(res) {
							var ocode = res.statusCode;
							if (ocode == 200) {
								let surTime = cutdownTime_e;
								_this.cutdownIng = true;
								_this.sendBtnText = `${surTime}s`;
								_this.cutDownTiemr = setInterval(() => {
									surTime--;
									_this.sendBtnText = `${surTime}s`;
									if (surTime <= 0) {
										clearInterval(_this.cutDownTiemr);
										_this.cutdownIng = false;
										_this.sendBtnText = '重新获取';
										_this.cutDownTiemr = '';
									}
								}, 1000);
							} else if (ocode == 400) {
								uni.showToast({
									title: "发送太频繁，请稍后",
									icon: 'none',
									duration: 3000
								})
							}
						}
					});
				}
				
			},
			sure(){
				var _this = this;
				if (!_this.code) {
					uni.showToast({
						title: '请输入验证码',
						icon: 'none',
						duration: 3000
					})
					return false
				}
				uni.request({
					url: this.url + 'check/code/',
					method: 'POST',
					data: {
						mobile: _this.phone_email,
						code: _this.code
					},
					headers: {
						'Content-Type': 'application/json'
					},
					success: res => {
						if (res.statusCode == 401) {
							uni.showToast({
								title: "验证码错误",
								icon: 'none',
								duration: 3000
							})
							return false
						} else if (res.statusCode == 200) {
							//console.log("验证成功")
							uni.navigateTo({
								url: '../reset_password/reset_password?phone_email=' + _this.phone_email + '&code=' + _this.code +'&type='+_this.type
							})
						}
					},
				})
			}
		}
	};
</script>

<style>
	@import url("../../static/css/main.css");
</style>

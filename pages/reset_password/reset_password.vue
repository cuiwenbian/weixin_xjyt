<template>
	<!-- 设置密码 -->
	<view class="container_l">
		<view :style="{height:statusBarHeight}"></view>
		<view class="back" @click="back_page">返回</view>
		<view class="title">重置密码</view>
		<view>6-16位数字、字母任意</view>
		<view class="int">
			<input v-if='showpwd' class="inp_" type="text" placeholder="设置密码" placeholder-style="color:#C3C3C3;font-size:30rpx;" v-model="password" @focus="password_in_input" @input='getpwd'>
			<input v-else password class="inp_" type="text" placeholder="设置密码" placeholder-style="color:#C3C3C3;font-size:30rpx;" v-model="password" @focus="password_in_input" @input='getpwd'>
		    <view v-show='focusing_has' @click="clearall(1)" class="clear"><image src="../../static/image/reset.png" mode=""></image></view>
		</view>
		<view class="int">
			
			<input v-if='showpwd1' class="inp_" type="text" placeholder="确认密码" placeholder-style="color:#C3C3C3;font-size:30rpx;" v-model="sec_password" @focus="password_in_input1" @input='getpwd_sec'>
			<input v-else password class="inp_" type="text" placeholder="确认密码" placeholder-style="color:#C3C3C3;font-size:30rpx;" v-model="sec_password" @focus="password_in_input1" @input='getpwd_sec'>
		    <view v-show='focusing1_has' @click="clearall(2)" class="clear"><image src="../../static/image/reset.png" mode=""></image></view>
		</view>
		<button class='next' @click="regist" v-if="allowRegist">确认</button>
		<button class='next_' v-else>确认</button>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				code: '',
				phone_email: '',
				password: '',
				sec_password: '',
				type:'',
				focusing:false,
				focusing1:false,
				focusing_has:false,
				focusing1_has:false,
				showpwd:false,
				showpwd1:false,
				statusBarHeight:'',//状态栏高度
			};
		},
		onLoad(option) {
			uni.getSystemInfo({
				success: res=>{
					this.statusBarHeight = res.statusBarHeight + 'px';
				}
			})
			this.code = option.code;
			this.phone_email = option.phone_email;
			this.type=option.type;
			
		},
		computed: {
           allowRegist(){
           	return !!(this.password&&this.sec_password)
           }
		},
		components: {},
		onBackPress(option) {
			plus.key.hideSoftKeybord();
		},

		methods: {
			back_page(){
				uni.navigateBack({
					delta:1
				})
			},
			idshowpwd(){
				this.showpwd=!this.showpwd;
			},
			idshowpwd1(){
				this.showpwd1=!this.showpwd1;
			},
			clearall(e){
				var that=this;
				if(e==1){
					that.password="";
					this.focusing_has=false
					
				}else if(e==2){
					that.sec_password="";
					this.focusing1_has=false
				}
			},
			password_in_input(){
				this.focusing=true
				this.focusing1=false
                this.focusing1_has=false
                if(this.password!=""){
                	this.focusing_has=true
                }
			},
			password_in_input1(){
				this.focusing1=true
				this.focusing=false
				this.focusing_has=false
				if(this.sec_password!=""){
					this.focusing1_has=true
				}
			},
			getpwd(e){
				if(e.detail.value!=""){
					this.focusing_has=true
				}else{
					this.focusing_has=false
				}
			},
			getpwd_sec(e){
				if(e.detail.value!=""){
					this.focusing1_has=true
				}else{
					this.focusing1_has=false
				}
			},
			regist() {
				var _this = this;
				if(!_this.password){
					uni.showToast({
						title:'请输入密码',
						icon:'none',
						duration:3000
					})
					return false
				}
				if(!_this.sec_password){
					uni.showToast({
						title:'请确认密码',
						icon:'none',
						duration:3000
					})
					return false
				}
				var str = /^[a-z0-9]{6,16}$/;
				if (!str.test(_this.password)) {
					uni.showToast({
						title: '密码格式不正确',
						icon: 'none',
						duration: 2000
					});
					return false;
				}
				if(_this.password != _this.sec_password){
					uni.showToast({
						title:'两次密码不一致',
						icon:'none',
						duration:3000
					})
					return false
				}
				
				if (_this.type == 2) {
					//邮箱忘记密码并提交
					uni.request({
						url: this.url + 'users/find/pwd/',
						method: 'POST',
						data: {
							mobile: _this.phone_email,
							code: _this.code,
							password: _this.password,
							sec_password: _this.sec_password
						},
						headers: {
							'Content-Type': 'application/json'
						},
						success: res => {
							if (res.statusCode == 400) {
								uni.showToast({
									title: "验证码错误",
									icon: 'none',
									duration: 3000
								})
							} else if (res.statusCode == 200) {
								uni.showToast({
									title: "邮箱密码重置成功",
									icon: 'none',
									duration: 3000
								})
								uni.reLaunch({
									url:"../login/login"
								})
							}
						},
					})
				} else {
					//手机忘记密码并提交
					uni.request({
						url: this.url + 'users/forgot/change/',
						method: 'POST',
						data: {
							mobile: _this.phone_email,
							code: _this.code,
							password: _this.password,
							sec_password: _this.sec_password
						},
						headers: {
							'Content-Type': 'application/json'
						},
						success: res => {
							if (res.statusCode == 400) {
								uni.showToast({
									title: "验证码错误",
									icon: 'none',
									duration: 3000
								})
							} else if (res.statusCode == 200) {
								uni.showToast({
									title: "手机密码重置成功",
									icon: 'none',
									duration: 3000
								})
								uni.reLaunch({
									url:"../login/login"
								})
							}
						},
					})
				}

			}
		}
	};
</script>

<style>
	@import url("../../static/css/main.css");
</style>

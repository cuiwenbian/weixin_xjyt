<template>
	<!-- 手机注册 -->
	<view class="container_l">
		<view :style="{height:statusBarHeight}"></view>
		<!-- <view class="back" @click="back_page">返回</view> -->
		<view class="title" v-if="isPhone">手机注册</view>
		<view class="title" v-else>邮箱注册</view>
		<view class="int">
			<input class="inp_" :focus="focus" type="text" :placeholder="account+'号'" placeholder-style="color:#C3C3C3;font-size:30rpx;"
			 v-model="account_nums" @focus="account_nums_in_input">
			<view class="clear" v-show='account_nums_in' @click="clear_p">
				<image src="../../static/image/reset.png" mode=""></image>
			</view>
		</view>
		<button class="next" @click="next" v-if="allowNext">下一步</button>
		<button class="next_" v-else>下一步</button>
		<view class="phone_reg" @click='change_account' v-if="isPhone">邮箱注册</view>
		<view class="phone_reg" @click='change_account' v-else>手机注册</view>

		<view class="pop" v-if="show">
			<view class="pop_con" v-if="isTop" :style="{bottom:bottom}">
				<view class="pop_t">
					<view>验证码</view>
					<view class="cancel" @click="cancel">取消</view>
				</view>
				<view class="line"></view>
				<view class="pop_p">{{account_nums}}</view>
				<view class="pop_c">
					<input class="pop_i" type="text" :adjust-position="false" placeholder="验证码" placeholder-style="font-size:30rpx;color:#c3c3c3;"
					 v-model="code">
					<button class="pop_b" @click="getCodeBtn" :disabled="cutdownIng">{{sendBtnText}}</button>
				</view>
				<view class="btn_n1" @click="phone_register" v-if="allowCode">确认</view>
				<view class="btn_n" v-else>确认</view>
			</view>
			<view class="pop_con" v-else>
				<view class="pop_t">
					<view>验证码</view>
					<view class="cancel" @click="cancel">取消</view>
				</view>
				<view class="line"></view>
				<view class="pop_p">{{account_nums}}</view>
				<view class="pop_c">
					<input class="pop_i" type="text" :adjust-position="false"  placeholder="验证码" placeholder-style="font-size:30rpx;color:#c3c3c3;"
					 v-model="code">
					<button class="pop_b" @click="getCodeBtn" :disabled="cutdownIng">{{sendBtnText}}</button>
				</view>
				<view class="btn_n1" @click="phone_register" v-if="allowCode">确认</view>
				<view class="btn_n" v-else>确认</view>
			</view>
		</view>
		<!-- <tfgg-verify @result='verifyResult' ref="verifyElement"></tfgg-verify> -->
	</view>
</template>

<script>
	var intv;
	// import tfggVerify from "@/components/tfgg-verify/tfgg-verify.vue";
	var check = require('../../common/utils.js');
	const cutdownTime_e = 120;
	const cutdownTime = 60;
	export default {
		data() {
			return {
				account_nums: '', //账号
				account: '手机',
				isPhone: true, //是否是手机注册
				show: false,
				code: '', //验证码
				cutdownIng: false, // 正在倒计时中，
				cutDownTiemr: '', // 倒计时定时器
				sendBtnText: '获取验证码',
				disabled: false,
				type_p: 1, //如果是手机注册
				type_e: 2, //如果是邮箱注册
				focus: false,
				account_nums_in: false, //清除按钮是否显示
				isFocus: false, //是否聚焦
				// iten: true,
				statusBarHeight: '', //状态栏高度
				bottom: '',
				isTop: false,
			};
		},
		onLoad(e) {
			uni.getSystemInfo({
				success: res => {
					this.statusBarHeight = res.statusBarHeight + 'px';
				}
			})
		},
		// components: {
		// 	"tfgg-verify": tfggVerify
		// },
		computed: {
			allowNext() {
				return !!(this.account_nums)
			},
			allowCode() {
				return !!(this.code)
			}

		},
		onBackPress(option) {
			plus.key.hideSoftKeybord();
		},
		onUnload() {
			if (intv) {
				clearInterval(intv);
			}
		},
		methods: {
			/* 校验结果回调函数 */
			verifyResult(res) {
				this.show = true;
				this.getCodeBtn()
			},
			verifyFasong() {
				this.$refs.verifyElement.show();
			},
			/* 校验插件重置 */
			verifyReset() {
				this.$refs.verifyElement.reset();
			},
			back_page() {
				uni.navigateBack({
					delta: 1
				})
			},
			cancel() {
				this.show = false;
				clearInterval(this.cutDownTiemr);
				this.cutdownIng = false;
				this.sendBtnText = '获取验证码';
				this.cutDownTiemr = '';
			},
			/* code_in(e) {
				if (e.detail.value != "") {
					this.iten = false
				} else {
					this.iten = true
				}

			}, */
			account_nums_in_input() {
				this.account_nums_in = true;
				this.isTop = true;
				uni.onKeyboardHeightChange(res => {
					console.log(res.height)
					this.bottom = res.height + 'px';
				})
			},

			clear_p() {
				this.account_nums = "";
				this.account_nums_in = false;
			},
			change_account() {
				this.account_nums = "";
				this.isPhone = !this.isPhone
				if (!this.isPhone) {
					this.account = "邮箱"
				} else {
					this.account = "手机"
				}
			},
			next() {
				var that = this;
				if (this.isPhone) {
					const myreg = /^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;
					if (!myreg.test(this.account_nums)) {
						uni.showToast({
							title: '请输入正确的手机号',
							icon: 'none',
							mask: true,
							duration: 2000
						});
						return false;
					}
				} else {
					var flag = check.checkEmail(this.account_nums);
					if (!this.account_nums) {
						uni.showToast({
							title: '请输入邮箱',
							icon: 'none',
							duration: 2000
						});
						return false;
					} else if (!flag) {
						uni.showToast({
							title: '邮箱格式不正确',
							icon: 'none',
							duration: 2000
						});
						return false;
					}
				}
				//判定用户是否已存在
				uni.request({
					url: this.url + 'checkuser/',
					method: 'POST',
					data: {
						mobile: this.account_nums
					},
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					success(res) {
						console.log(res)
						if (res.statusCode == 200) {
							//that.show = true;
							//that.getCodeBtn()
							that.$refs.verifyElement.show();
						} else if (res.statusCode == 400) {
							uni.showToast({
								title: '参数错误',
								icon: "none",
								duration: 3000
							})
						} else if (res.statusCode == 401) {
							uni.showToast({
								title: '用户已存在',
								icon: "none",
								duration: 3000
							})
						}
					}
				})

			},
			getCodeBtn() {
				const _this = this;
				if (_this.cutdownIng) return;
				// console.log(_this.account_nums)
				if (this.isPhone) {
					//手机号请求发送验证码
					uni.request({
						method: 'POST',
						data: {
							mobile: _this.account_nums
						},
						//手机注册  获取验证码接口
						url: _this.url + 'users/regist/sms/',
						header: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						success(res) {
							console.log(res);
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
				} else {
					//邮箱请求发送验证码
					uni.request({
						method: 'POST',
						data: {
							mobile: _this.account_nums
						},
						//短信接口
						url: _this.url + 'users/email/regist/sms/',
						header: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						success(res) {
							//根据code判断
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
			phone_register() {
				var _this = this;
				if (!_this.code) {
					uni.showToast({
						title: '请输入验证码',
						icon: 'none',
						duration: 3000
					})
					return false
				}
				if (this.isPhone) {
					//手机判定验证码是否正确接口
					uni.request({
						url: this.url + 'check/code/',
						method: 'POST',
						data: {
							mobile: _this.account_nums,
							code: _this.code
						},
						headers: {
							'Content-Type': 'application/json'
						},
						success: res => {
							console.log(res);
							if (res.statusCode == 401) {
								uni.showToast({
									title: "验证码错误",
									icon: 'none',
									duration: 3000
								})
								return false
							} else if (res.statusCode == 200) {
								uni.navigateTo({
									url: '../set_password/set_password?phone=' + _this.account_nums + '&code=' + _this.code + '&type=' +
										_this.type_p
								})
							}
						},
					})
				} else {
					//邮箱判定验证码是否正确 接口
					uni.request({
						url: this.url + 'check/code/',
						method: 'POST',
						data: {
							mobile: _this.account_nums,
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
								uni.navigateTo({
									url: '../set_password/set_password?phone=' + _this.account_nums + '&code=' + _this.code + '&type=' + _this.type_e
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

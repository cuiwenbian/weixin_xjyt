<template>
	<view v-if="visibleSync" :class="{ 'uni-drawer--visible': showDrawer }" class="uni-drawer" @touchmove.stop.prevent="clear">
		<view class="uni-drawer__mask" :class="{ 'uni-drawer__mask--visible': showDrawer && mask }" @tap="close('mask')" />
		<view
			class="uni-drawer__content"
			:class="{ 'uni-drawer--right': rightMode, 'uni-drawer--left': !rightMode, 'uni-drawer__content--visible': showDrawer }"
			:style="{ width: drawerWidth + 'px' }"
		>
			<!-- <slot /> -->
			<view style="padding-top:186rpx;padding-left: 30rpx;box-sizing: border-box;">
				<view class="art_time" v-if="token" @click="go_peo">
					<view class="avator_img"><image src="../../static/w-titleBar/avators.png" mode=""></image></view>
					<view class="descc">
						<view class="gg">{{ phone }}</view>
						<view class="tt">欢迎来到星际云通</view>
					</view>
				</view>
				<view v-else class="art_time">
					<view class="descc">
						<view class="gg" @click="goLogin">点击登录</view>
						<view class="tt">欢迎来到星际云通</view>
					</view>
				</view>
				<view class="person_list">
					<view class="person_evelist" @click="go_person">
						<image src="../../static/image/account_icon.png" style="width:39rpx;height:41rpx;" mode=""></image>
						<view>账户安全</view>
					</view>
					<view class="person_evelist" @click="go_address">
						<image src="../../static/image/address_icon.png" style="width:34rpx;height:32rpx;" mode=""></image>
						<view>地址薄</view>
					</view>
					<view class="person_evelist" @click="go_help">
						<image src="../../static/image/help_icon.png" style="width:31rpx;height:34rpx;" mode=""></image>
						<view>帮助中心</view>
					</view>
					<view class="person_evelist" @click="go_aboutus">
						<image src="../../static/image/about_icon.png" style="width:32rpx;height:33rpx;" mode=""></image>
						<view>关于我们</view>
					</view>
				</view>
			</view>
		</view>
		 <Modal v-model="show" title='提示' :text='tips' @cancel='cancel' @confirm='confirm'/>
	</view>
</template>

<script>
/**
 * Drawer 抽屉
 * @description 抽屉侧滑菜单
 * @tutorial https://ext.dcloud.net.cn/plugin?id=26
 * @property {Boolean} mask = [true | false] 是否显示遮罩
 * @property {Boolean} maskClick = [true | false] 点击遮罩是否关闭
 * @property {Boolean} mode = [left | right] Drawer 滑出位置
 * 	@value left 从左侧滑出
 * 	@value right 从右侧侧滑出
 * @property {Number} width 抽屉的宽度 ，仅 vue 页面生效
 * @event {Function} close 组件关闭时触发事件
 */
import Modal from '@/components/x-modal/x-modal'
import {
		debounce
	} from '@/common/utils.js';
export default {
	 components: {Modal},
	name: 'UniDrawer',
	props: {
		/**
		 * 显示模式（左、右），只在初始化生效
		 */
		mode: {
			type: String,
			default: ''
		},
		/**
		 * 蒙层显示状态
		 */
		mask: {
			type: Boolean,
			default: true
		},
		/**
		 * 遮罩是否可点击关闭
		 */
		maskClick: {
			type: Boolean,
			default: true
		},
		/**
		 * 抽屉宽度
		 */
		width: {
			type: Number,
			default: 250
		}
	},
	data() {
		return {
			visibleSync: false,
			showDrawer: false,
			rightMode: false,
			watchTimer: null,
			drawerWidth: 220,
			hasLogin: true,
			token: uni.getStorageSync('token'),
			phone: uni.getStorageSync('phone'),
			show:false,
			tips:''
		};
	},
	
	created() {
		// #ifndef APP-NVUE
		this.drawerWidth = this.width;
		// #endif
		this.rightMode = this.mode === 'right';
	},
	methods: {
		clear() {},
		confirm(){
			this.show=false
		},
		close(type) {
			// fixed by mehaotian 抽屉尚未完全关闭或遮罩禁止点击时不触发以下逻辑
			if ((type === 'mask' && !this.maskClick) || !this.visibleSync) return;
			this._change('showDrawer', 'visibleSync', false);
		},
		open() {
			// fixed by mehaotian 处理重复点击打开的事件
			if (this.visibleSync) return;
			this._change('visibleSync', 'showDrawer', true);
		},
		_change(param1, param2, status) {
			this[param1] = status;
			if (this.watchTimer) {
				clearTimeout(this.watchTimer);
			}
			this.watchTimer = setTimeout(
				() => {
					this[param2] = status;
					this.$emit('change', status);
				},
				status ? 50 : 300
			);
		},
		goLogin() {
			uni.navigateTo({
				url: '../../pages/login/login'
			});
		},
		go_peo(){
			uni.navigateTo({
				url: '../../my/personal/personal'
			});
		},
		go_person() {
			var that=this;
			if(!this.token){
				this.show=true;
				this.tips="请先登录您的账号"
				return
			}else{
				uni.navigateTo({
					url: '../../my/account_security/account_security'
				});
			}
			
		},
		
		linkToTransfer3: debounce(
			function() {
				var that=this;
				uni.request({
					url: this.url + 'walletaddresss/',
					method: 'GET',
					header: {
						Authorization: 'JWT' + ' ' + uni.getStorageSync('token')
					},
					success(res) {
						if (res.statusCode == 400) {
							that.show=true;
							that.tips="用户未实名认证"
							
						}
						if (res.statusCode == 201) {
							that.show=true;
							that.tips="身份认证审核中，请等待"
							
						}
						if (res.statusCode == 200) {
						
							uni.navigateTo({
								url: '../../my/address/address'
							});
						}
						if (res.statusCode == 302) {
							that.show=true;
							that.tips="用户未设置交易密码"
							
						}
					}
				});
			},
			1000,
			true
		),
		go_address: function() {
			var that=this;
			if(!this.token){
				this.show=true;
				this.tips="请先登录您的账号"
				return
			}else{
				this.linkToTransfer3();
			}
			
		},
		go_help() {
			var that=this;
			if(!this.token){
				this.show=true;
				this.tips="请先登录您的账号"
				return
			}else{
				uni.navigateTo({
					url: '../../my/helping/helping'
				});
			}
			
		},
		go_aboutus() {
			var that=this;
			if(!this.token){
				this.show=true;
				this.tips="请先登录您的账号"
				return
			}else{
				uni.navigateTo({
					url: '../../my/about_us/about_us'
				});
			}
			
		}
	}
};
</script>

<style lang="scss" scoped>
// 抽屉宽度
$drawer-width: 220px;

.uni-drawer {
	/* #ifndef APP-NVUE */
	display: block;
	/* #endif */
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: hidden;
	z-index: 9999999 !important;
}
.toast{
	width:360rpx;
	height:30rpx;
	padding:15rpx 20rpx;
	border-radius: 10rpx;
	position: fixed;
	top:50%;
	bottom:50%;
	left:calc(50% - 140rpx);
	right:50%;
	overflow: hidden;
	color:#FFFFFF;
	opacity: .5;
	line-height: 30rpx;
	text-align: center;
	background-color: rgba(0,0,0,.8);
	z-index: 99999999 !important;
	
}
.isHidden{
	display: none;
}
.uni-drawer__content {
	/* #ifndef APP-NVUE */
	display: block;
	/* #endif */
	position: absolute;
	top: 0;
	width: $drawer-width;
	bottom: 0;
	background-color: $uni-bg-color;
	transition: transform 0.3s ease;
}

.uni-drawer--left {
	left: 0;
	/* #ifdef APP-NVUE */
	transform: translateX(-$drawer-width);
	/* #endif */
	/* #ifndef APP-NVUE */
	transform: translateX(-100%);
	/* #endif */
}

.uni-drawer--right {
	right: 0;
	/* #ifdef APP-NVUE */
	transform: translateX($drawer-width);
	/* #endif */
	/* #ifndef APP-NVUE */
	transform: translateX(100%);
	/* #endif */
}

.uni-drawer__content--visible {
	transform: translateX(0px);
}

.uni-drawer__mask {
	/* #ifndef APP-NVUE */
	display: block;
	/* #endif */
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: $uni-bg-color-mask;
	transition: opacity 0.3s;
}

.uni-drawer__mask--visible {
	/* #ifndef APP-NVUE */
	display: block;
	/* #endif */
	opacity: 1;
}
.art_time {
	width: 100%;
	height: 112rpx;
	padding-bottom: 30rpx;
	box-sizing: border-box;
	font-size: 24rpx;
	color: #999999;
	display: flex;
	align-items: center;
}
.avator_img {
	width: 95rpx;
	height: 95rpx;
}
.avator_img > image {
	width: 100%;
	height: 100%;
}
.descc {
	width: 200rpx;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-left: 10rpx;
}
.gg {
	font-size: 30rpx;
	font-weight: 600;
	color: #222222;
}
.tt {
	font-size: 24rpx;
	font-weight: 400;
	color: #b7b7b7;
}
.person_list {
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	margin-top: 123rpx;
}
.person_evelist {
	display: flex;
	align-items: center;
	height: 52rpx;
	margin-bottom: 82rpx;
}
.person_evelist > view {
	margin-left: 30rpx;
	font-size: 28rpx;
	font-weight: 400;
	color: #222222;
	opacity: 0.77;
}
</style>

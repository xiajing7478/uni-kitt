<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="list" v-for="item in arr" :key="item.id">{{item.name}}</view>
		<!-- 跳转普通url -->
		<navigator url="../navigator/navigator?id=80">跳转navigator</navigator>
		<navigator url="/pages/navigator/navigator">跳转navigator</navigator>
		<!-- 跳转tabBar -->
		<navigator url="/pages/message/message" open-type="switchTab">跳转message</navigator>
		<navigator url="/pages/navigator/navigator" open-type="redirect">跳转navigator</navigator>
		
		
		<button @click="goDetail">跳转navigator</button>
		<button @click="goDetailTabBar">跳转message</button>
		
		<test :title="msg" @getNumfromChild="getNumfromChild"></test>
		<p>{{num}}</p>
		
		<testa></testa>
		<testb></testb>
	</view>
</template>

<script>
	import test from '../../components/test.vue'
	import testa from '../../components/a.vue'
	import testb from '../../components/b.vue'
	export default {
		data() {
			return {
				title: 'Hello world',
				msg: 'this is from parent',
				arr: [
					{ id: 1, name: 'a' },
					{ id: 2, name: 'b' },
					{ id: 3, name: 'c' },
					{ id: 4, name: 'd' }
				],
				num: 0
			}
		},
		components: {
			test,
			testa,
			testb
		},
		onLoad() {
			console.log('page is loaded')
		},
		onShow: () => {
			console.log('page is show')
		},
		onReady: () => {
			console.log('page is onReady')
		},
		onHide: () => {
			console.log('page is hide')
		},
		onPullDownRefresh() {
			this.arr.push({ id: 5, name: 'e' })
			console.log('onPullDownRefresh...')
			setTimeout(function () {
					uni.stopPullDownRefresh();
			}, 1000);
		},
		onReachBottom() {
			console.log('页面触底了')
			this.arr = [ ...this.arr, [{ id: 6, name: 'f' }, { id: 7, name: 'g' }, { id: 8, name: 'h' }]]
		},
		methods: {
			goDetail() {
				uni.navigateTo({
					url: '/pages/navigator/navigator'
				})
			},
			goDetailTabBar() {
				uni.switchTab({
					url: '/pages/message/message'
				})
			},
			getNumfromChild(num) {
				this.num = num
			}
		}
	}
</script>

<style lang="scss">
	// @import url('./index.scss');
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>

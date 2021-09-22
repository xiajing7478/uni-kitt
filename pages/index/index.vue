<template>
	<view class="index-wrap">
		<swiper indicator-dots circular interval="3000" autoplay>
			<swiper-item v-for="item in swiperList" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav-item" v-for="(item, index) in navs" :key="index" @click="handleNav(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot-product">
			<view class="tit">推荐商品</view>
				<goods-list :goodList="goodList"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/GoodsList/index.vue'
	export default {
		data() {
			return {
				swiperList: [],
				goodList: [],
				navs: [
					{
						icon: 'iconfont icon-ziyuan',
						title: '黑马超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/aboutUs/aboutUs'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pictures/pictures'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/goods/goods'
					}
				]
			}
		},
		components: {
			goodsList
		},
		onLoad() {
			this.getSwiperList()
			this.getProductInfo()
		},
		methods: {
			async getSwiperList() {
				const res = await this.$myRequest({ url: '/api/getlunbo' })
				this.swiperList = res.message
			},
			async getProductInfo() {
				const res = await this.$myRequest({ url: '/api/getgoods?pageindex=1' })
				this.goodList = res.message
				console.log(this.goodList)
			},
			handleNav(url) {
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style lang="scss">
	.index-wrap {
		swiper {
			width: 750rpx;
			height: 380rpx;
			image {
				width: 100%;
			}
		}
		.nav {
			padding-top: 10rpx;
			display: flex;
			.nav-item {
				width: 25%;
				text-align: center;
				view {
					width: 100rpx;
					height: 100rpx;
					background: $shop-color;
					border-radius: 50rpx;
					margin: 10rpx auto;
					color: #fff;
					font-size: 40rpx;
				}
				.icon-pos {
					display: inline-block;
					padding-top: 32rpx;
				}
				text {
					font-size: 30rpx;
				}
			}
		}
		.hot-product {
			background-color: #eee;
			overflow: hidden;
			margin-top: 10rpx;
			.tit {
				height: 80rpx;
				line-height: 80rpx;
				color: $shop-color;
				text-align: center;
				letter-spacing: 40rpx;
				background-color: #fff;
				margin: 8rpx 0;
			}
		}
	}
</style>

<template>
	<view class="good-detail-wrap">
		<swiper class="swiper" indicator-dots autoplay>
				<swiper-item v-for="(item,index) in swipeList" :key="item.index">
						<image :src="item.img_url"></image>
				</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥{{goodInfo.sell_price}}</text>
				<text>￥{{goodInfo.market_price}}</text>
			</view>
			<view class="good-name">{{goodInfo.title}}</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号: {{goodInfo.goods_no}}</view>
			<view>库存: {{goodInfo.stock_quantity}}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="title">详细信息</view>
			<view id="gobalImg" class="content">
				<rich-text :nodes="goodDetail.content"></rich-text>
			</view>
			<!-- <view class="content">{{goodDetail.content}}</view> -->
		</view>
		<view class="fixedNav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				goodDetail: {},
				goodInfo: {},
				swipeList: [],
				options: [{
							icon: 'headphones',
							text: '客服'
					}, {
							icon: 'shop',
							text: '店铺',
							info: 2,
							infoBackgroundColor:'#007aff',
							infoColor:"red"
					}, {
							icon: 'cart',
							text: '购物车',
							info: 2
					}],
				 buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}]
			}
		},
		onLoad(options) {
			if (options.id) {
				this.getSwipeImages(options.id)
				this.getGoodInfo(options.id)
				this.getGoodsDetail(options.id)
			}
		},
		components: {uniGoodsNav},
		methods: {
			async getSwipeImages(id) {
				const res = await this.$myRequest({
					url: `/api/getthumimages/${id}`
				})
				this.swipeList = res.message
				this.swipeList = [
					{ img_url: 'http://destiny001.gitee.io/image/ban3.jpg' },
					{ img_url: 'http://destiny001.gitee.io/image/ban3.jpg' }
				]
			},
			async getGoodInfo(id) {
				const res = await this.$myRequest({
					url: `/api/goods/getinfo/${id}`
				})
				this.goodInfo = res.message.length > 0 ? res.message[0] : {}
			},
			async getGoodsDetail(id) {
				const res = await this.$myRequest({
					url: `/api/goods/getdesc/${id}`
				})
				this.goodDetail = res.message.length > 0 ? res.message[0] : {}
			},
			onClick(e) {
			 uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			buttonClick() {
				this.options[2].info++
			}
		}
	}
</script>

<style lang="scss">
.good-detail-wrap {
	.swiper {
		width: 750rpx;
		height: 380rpx;
		image {
			width: 100%;
		}
	}
	.box1 {
		padding: 10rpx;
		.price {
			font-size: 35rpx;
			color: $shop-color;
			line-height: 80rpx;
			text:nth-child(2) {
				color: #ccc;
				font-size: 28rpx;
				text-decoration: line-through;
				margin-left: 20rpx;
			}
		}
		.good-name {
			font-size: 30rpx;
			line-height: 60rpx;
		}
	}
	.line {
		height: 10rpx;
		width: 750rpx;
		background-color: $border-color;
	}
	.box2 {
		padding: 0 10px;
		font-size: 30rpx;
		line-height: 70rpx;
	}
	.box3 {
		padding-bottom: 100rpx;
		.title {
			font-size: 30rpx;
			padding-left: 10px;
			border-bottom: 1px solid $border-color;
			line-height: 70rpx;
		}
		.content {
			padding: 10rpx;
			font-size: 28rpx;
			color: #333;
		}
	}
	.fixedNav {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
}
</style>

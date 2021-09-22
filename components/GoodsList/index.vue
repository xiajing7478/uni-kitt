<template>
	<view class="goods-list">
		<view class="goods-item" v-for="item in goodList" :key="item.id" @click="goToDetail(item.id)">
			<image src="http://destiny001.gitee.io/image/ban3.jpg"></image>
			<view class="price">
				<text>￥{{item.sell_price}}</text>
				<text>￥{{item.market_price}}</text>
			</view>
			<view class="name">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			goodList: {
				type: Array,
				default: () => []
			}
		},
		methods: {
			goToDetail(id) {
				uni.navigateTo({
					url: `/pages/goodsDetail/goodsDetail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.goods-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 15rpx;
		.goods-item {
			background-color: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;
			image {
				width: 90%;
				height: 300rpx;
				display: block;
				margin: 0 auto;
			}
			.price {
				color: $shop-color;
				font-size: 36rpx;
				margin: 20rpx 0 5rpx 0;
				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 16rpx;
					text-decoration: line-through;
				}
			}
			.name {
				font-size: 28rpx;
				line-height: 50rpx;
			}
		}
	}
</style>

<template>
	<view class="aboutUs-wrap">
		<image class="img" src='http://www.itcast.cn/2018czydz/images/gywmban.jpg'></image>
		<view class="info">
			<view @click="callPhone">联系电话: 400-618-9090</view>
			<view>地址: 上海市宝山区华夏银行大厦1501室</view>
		</view>
		<map class="map" :longitude="longitude" :scale="scale" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 121.369905,
				latitude: 31.347892,
				scale: 15,
				markers: [
					{
						longitude: 121.369905,
						latitude: 31.347892,
						iconPath: '../../static/hmlogo.png',
						width: 30,
						height:30
					}
				]
			}
		},
		methods: {
			callPhone() {
				uni.makePhoneCall({
					phoneNumber: '400-618-9090'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
// @import url('./about.scss')
.aboutUs-wrap {
	width: 100%;
	.img {
		width: 750rpx;
		height: 320rpx;
	}
	.info {
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view {
			line-height: 80rpx;
			border-bottom: 1px solid $border-color;
		}
	}
	.map {
		width: 750rpx;
		height: 1000rpx;
	}
}
</style>

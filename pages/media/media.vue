<template>
	<view>
		<button type="primary" @click="chooseImg">上传图片</button>
		<view v-if="imgList.length > 0">
			<image v-for="(item, index) in imgList" :key="index" :src="item" @click="prviewImg(item)"></image>
		</view>
		<!-- #ifdef H5 -->
		<view>h5可见</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view>小程序可见</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: []
			}
		},
		onLoad() {
			// #ifdef H5
			console.log('h5')
			// #endif
			// #ifdef MP-WEIXIN
			console.log('小程序')
			// #endif
		},
		methods: {
			chooseImg() {
				uni.chooseImage({
					count: 5,
					success:(res) =>{
						this.imgList = res.tempFilePaths
						console.log('this.imgList', this.imgList)
					}
				})
			},
			prviewImg(currentItem) {
				uni.previewImage({
					current:currentItem,
					urls:this.imgList,
					loop: true,
					indicator: 'number'
				})
			}
		}
	}
</script>

<style>
</style>

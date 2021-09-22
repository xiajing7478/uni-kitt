<template>
	<view class="pic-wrap">
		<scroll-view class="left" scroll-y>
			<view :class="active === index ? 'active': ''" v-for="(item, index) in categoryList" @click="changeCategory(index, item.id)" :key="item.id">{{item.title}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="item in subList" :key="item.id">
				<image @click="previewPic(item.img_url)" src="http://destiny001.gitee.io/image/ban3.jpg"></image>
				<text>{{item.title}}</text>
				<!-- <text>{{item.zhaiyao}}</text> -->
			</view>
			<text class="noData" v-if="subList.length === 0">暂无数据!~</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categoryList: [],
				subList: [],
				active: 0
			}
		},
		onLoad() {
			this.getImgCategory()
		},
		methods: {
			async getImgCategory() {
				const res = await this.$myRequest({
					url: '/api/getimgcategory'
				})
				this.categoryList = res.message || []
				if (this.categoryList.length > 0) {
					this.changeCategory(0, this.categoryList[0].id)
				}
			},
			async changeCategory(active, id) {
				this.active = active
				const res = await this.$myRequest({
					url: `/api/getimages/${id}`
				})
				this.subList = res.message || []
			},
			previewPic(current) {
				const urls = this.subList.map(item => {
					return item.img_url
				})
				uni.previewImage({
					current,
					urls
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}
	.pic-wrap {
		display: flex;
		height: 100%;
		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid $border-color;
			view {
				height: 120rpx;
				line-height: 120rpx;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid $border-color;
			}
			.active {
				background-color: $shop-color;
				color: #fff;
			}
		}
		.right {
			height: 100%;
			width: 530rpx;
			margin: 10rpx auto;
			.item {
				image {
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}
				text {
					line-height: 50rpx;
				}
			}
			.noData {
				display: block;
				text-align: center;
				font-size: 30rpx;
				padding-top: 50rpx;
			}
		}
	}
</style>

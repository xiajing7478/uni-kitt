<template>
	<view class="news-detail-wrap">
		<text class="title">{{newDetail.title}}</text>
		<view class="info">
			<text>发表时间: {{newDetail.add_time | formate}}</text>
			<text>浏览:  {{newDetail.click}}</text>
		</view>
		<!-- v-html="newDetail.content" -->
		<view class="content">
			<rich-text class="rich-content" :nodes="newDetail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newDetail: {}
			}
		},
		methods: {
			async getNewsDetail(id) {
				const res = await this.$myRequest({
					url: `/api/getnew/${id}`
				})
				this.newDetail = res.message.length > 0 ? res.message[0] : {}
			}
		},
		onLoad(options) {
			this.getNewsDetail(options.id)
		}
	}
</script>

<style lang="scss">
	.news-detail-wrap {
		font-size: 30rpx;
		padding: 0 20rpx;
		.title {
			width: 710rpx;
			text-align: center;
			display: block;
			margin: 20rpx 0;
		}
		.info {
			display: flex;
			justify-content: space-between;
			margin: 20rpx 0;
			font-size: 28rpx;
		}
		.content {
			font-size: 26rpx;
			line-height: 50rpx;
			.rich-content {
				image {
					max-width: 750rpx !important;
					min-width: 750rpx !important;
					// width: 100% !important;
				}
				img {
					max-width: 750rpx !important;
					min-width: 750rpx !important;
					// width: 100% !important;
				}
			}
		}
	}
</style>

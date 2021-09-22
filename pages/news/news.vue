<template>
	<view class="news-wrap">
		<view @click="showNewsDetail(item.id)" class="news_items" v-for="item in newsList" :key="item.id">
			<image src="http://destiny001.gitee.io/image/ban3.jpg"></image>
			<view class="right">
				<view class="title">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间: {{item.add_time | formate}}</text>
					<text>浏览: {{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
					newsList: []
			}
		},
		onLoad() {
			this.getNewsList()
		},
		methods: {
			async getNewsList() {
				const res = await this.$myRequest({
					url: '/api/getnewslist'
				})
				this.newsList = res.message
			},
			showNewsDetail(id) {
				uni.navigateTo({
					url: `/pages/newsDetail/newsDetail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.news-wrap {
		.news_items {
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px solid $border-color;
			image {
				min-width: 200rpx;
				max-width: 200rpx;
				height: 150rpx;
			}
			.right {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 15rpx;
				.title {
					font-size: 30rpx;
				}
				.info {
					font-size: 24rpx;
					text:nth-child(2) {
						float: right;
					}
				}
			}
		}
	}
</style>

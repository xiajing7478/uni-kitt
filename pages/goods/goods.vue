<template>
	<view class="product-wrap">
		<goods-list :goodList="productList"></goods-list>
		<view v-if="isMore" class="isOver">----我是有底线的----</view>
	</view>
</template>

<script>
	import GoodsList from '../../components/GoodsList/index.vue'
	export default {
		components: {
			GoodsList
		},
		data() {
			return {
				pageNum: 1,
				productList: [],
				isMore: false
			}
		},
		onLoad() {
			this.getProductList()
		},
		onReachBottom() {
			if (this.productList.length < this.pageNum * 10) {
				this.isMore = true
				return
			}
			this.pageNum++
			this.getProductList()
		},
		onPullDownRefresh() {
			this.pageNum = 1
			this.productList = []
			this.isMore = false
			setTimeout(() => {
				this.getProductList(() => {
					uni.stopPullDownRefresh()
				})
			}, 500)
		},
		methods: {
			async getProductList(callback) {
				const res = await this.$myRequest({
					url: `/api/getgoods?pageindex=${this.pageNum}`
				})
				this.productList = this.productList.concat(res.message)
				callback && callback()
			}
		}
	}
</script>

<style lang="scss">
	.product-wrap {
		background-color: #eee;
		.isOver {
			width: 100%;
			height: 50rpx;
			line-height: 50rpx;
			text-align: center;
			font-size: 28rpx;
		}
	}
</style>

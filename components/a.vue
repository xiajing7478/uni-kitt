<template>
	<view>
		<p>
			这是a组件
			<button type="primary" @click="addNum">修改b组件数据</button>
		</p>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 0
			}
		},
		methods: {
			addNum() {
				uni.$emit('updateNum', 10)
			}
		}
	}
</script>

<style>
</style>

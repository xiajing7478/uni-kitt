<template>
	<view>
		<p>
			这是B组件{{num}}
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
		created() {
			uni.$on('updateNum', (num) => {
				this.num += num
			})
		}
	}
</script>

<style>
</style>

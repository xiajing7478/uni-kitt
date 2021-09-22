<template>
	<view>
		<p>this is test components...</p>
		<p>{{title}}</p>
		<button type="primary" @click="sendNum">给父组件传值</button>
	</view>
</template>

<script>
	export default {
		name: 'test',
		props: {
			title: String
		},
		data() {
			return {
				num: 5
			}
		},
		methods: {
			sendNum() {
				this.$emit('getNumfromChild', this.num)
			}
		}
	}
</script>

<style>
</style>

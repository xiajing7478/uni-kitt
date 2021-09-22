<template>
	<view>
		<view>
			<text>{{info}}</text>
		</view>
		<view>
			<image v-bind:src="url"></image>
		</view>
		<view v-for="(item, index) in arr" :key="index">
			{{item.name}}
		</view>
		<view>
			<button @click="btnHandle($event, 20)">按钮</button>
		</view>
		<view>
			<button @click="getUrl" type="primary">发送get请求</button>
		</view>
		<view>
			<button type="primary" @click="sendLocalStorage">存储数据</button>
		</view>
		<view>
			<button type="primary" @click="getLocalStorage">获取存储数据</button>
		</view>
		<view>
			<button type="default" @click="getStorageInfo">异步获取当前storage的相关信息</button>
		</view>
		<view>
			<button type="default" @click="removeStage">本地缓存中异步移除指定key</button>
		</view>
		<uButton>测试</uButton>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: 'hello msg',
				arr: [
					{ id: 1, name: 'a' },
					{ id: 2, name: 'b' },
					{ id: 3, name: 'c' },
					{ id: 4, name: 'd' }
				],
				url: 'https://pic-test-gjmetal.oss-cn-shanghai.aliyuncs.com/newsv2/1f9d4d48602742ae9dc253ff9806cdc720200218184113.jpg'
			};
		},
		methods: {
			btnHandle(e, num) {
				console.log('cliked', e, num)
			},
			getUrl() {
				uni.request({
				    url: 'https://www.example.com/request', //仅为示例，并非真实接口地址。
				    data: {
				        text: 'uni.request'
				    },
				    header: {
				        'custom-header': 'hello' //自定义请求头信息
				    },
				    success: (res) => {
				        console.log(res.data);
				        this.text = 'request success';
				    }
				});
			},
			sendLocalStorage() {
				// setStorage是一个异步接口, setStorageSync同步接口
				uni.setStorage({
					key: 'storage_key',
					data: 'hello uni-app',
					success: function() {
						console.log('success....')
					}
				})
			},
			getLocalStorage() {
				// getStorage是一个异步接口, getStorageSync同步接口
				uni.getStorage({
					key: 'storage_key',
					success: function(res) {
						console.log(res.data)
					}
				})
			},
			removeStage() {
				uni.removeStorage({
					key: 'storage_key',
					success:function(res){
						console.log(`${res}, success`)
					}
				})
			},
			getStorageInfo() {
				uni.getStorageInfo({
					success:function(res){
						console.log('res', res)
					}
				})
			}
 		}
	}
</script>

<style lang="scss">

</style>

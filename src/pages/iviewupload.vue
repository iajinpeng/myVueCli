<template>
	<div>
	<!--	<div class="demo-upload-list" v-for="item in uploadList">
			<template v-if="item.status === 'finished'">
				<img :src="item.url">
				<div class="demo-upload-list-cover">
					<Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
					<Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
				</div>
			</template>
			<template v-else>
				<Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
			</template>
		</div>
		<Upload
			v-show="uploadList.length < 1"
			ref="upload"
			:show-upload-list="false"
			:default-file-list="defaultList"
			:on-success="handleSuccess"
			:format="['jpg','jpeg','png']"
			:max-size="2048"
			:on-format-error="handleFormatError"
			:on-exceeded-size="handleMaxSize"
			:before-upload="handleBeforeUpload"
			multiple
			type="drag"
			action="//jsonplaceholder.typicode.com/posts/">
			<div class="upload-content">
				<Icon type="ios-plus-outline" size="20"></Icon>
				<br>
				<span>上传照片</span>
			</div>
		</Upload>
		<Modal title="查看图片" v-model="visible">
			<img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
		</Modal>-->
		<br><br><br><br>
		<my-upload style="margin: 0 auto;" desc="上传图片啊" @imagechange="handleImageChange"></my-upload>
		<my-upload style="margin: 0 auto;" desc="上传图片啊" @imagechange="handleImageChange"></my-upload>
	</div>
</template>
<script>
	import MyUpload from '../components/MyUpload'
	export default {
		data () {
			return {
				defaultList: [
//					{
//						'name': 'a42bdcc1178e62b4694c830f028db5c0',
//						'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
//					},
//					{
//						'name': 'bc7521e033abdd1e92222d733590f104',
//						'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
//					}
				],
				imgName: '',
				visible: false,
				uploadList: []
			}
		},
		methods: {
			handleImageChange(e){
				console.log(e);
			},

			/*handleView (name) {
				this.imgName = name;
				this.visible = true;
			},
			handleRemove (file) {
				// 从 upload 实例删除数据
				const fileList = this.$refs.upload.fileList;
				this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
			},
			handleSuccess (res, file) {
				// 因为上传过程为实例，这里模拟添加 url
				file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
				file.name = '7eb99afb9d5f317c912f08b5212fd69a';
			},
			handleFormatError (file) {
				this.$Notice.warning({
					title: '文件格式不正确',
					desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
				});
			},
			handleMaxSize (file) {
				this.$Notice.warning({
					title: '超出文件大小限制',
					desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
				});
			},
			handleBeforeUpload () {
				const check = this.uploadList.length < 5;
				if (!check) {
					this.$Notice.warning({
						title: '最多只能上传 5 张图片。'
					});
				}
				return check;
			}*/
		},
		mounted () {
//			this.uploadList = this.$refs.upload.fileList;
		},
		components: {
			MyUpload
		}
	}
</script>
<style>
	.demo-upload-list{
		display: inline-block;
		width: 60px;
		height: 60px;
		text-align: center;
		line-height: 60px;
		border: 1px solid transparent;
		border-radius: 4px;
		overflow: hidden;
		background: #fff;
		position: relative;
		box-shadow: 0 1px 1px rgba(0,0,0,.2);
		margin-right: 4px;
	}
	.demo-upload-list img{
		width: 100%;
		height: 100%;
	}
	.demo-upload-list-cover{
		display: none;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0,0,0,.6);
	}
	.demo-upload-list:hover .demo-upload-list-cover{
		display: block;
	}
	.demo-upload-list-cover i{
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		margin: 0 2px;
	}

	/*图片上传*/
	.demo-upload-list{
		display: inline-block;
		width: 78px;
		height: 78px;
		line-height: 78px;
		text-align: center;
		border: 1px solid #dddddd;
		border-radius: 3px;
		overflow: hidden;
		background: #fff;
		position: relative;
		/*box-shadow: 0 1px 1px rgba(0,0,0,.2);*/
		margin-right: 8px;
	}
	.demo-upload-list img{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	.demo-upload-list-cover{
		display: none;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0,0,0,.6);
	}
	.demo-upload-list:hover .demo-upload-list-cover{
		display: block;
	}
	.demo-upload-list-cover i{
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		margin: 0 2px;
	}

	.ivu-upload{
		display: inline-block;
	}
	.ivu-upload .ivu-upload-drag{
		border: 1px solid #dddddd;
	}
	.ivu-upload:hover .ivu-upload-drag{
		border-color: #00C8AF;
	}
	.ivu-upload:hover .ivu-upload .upload-content{
		color: #00C8AF;
		transition: color .2s ease;
	}
	.ivu-upload .upload-content{
		width: 78px;
		height: 78px;
		padding-top: 20px;
	}


</style>

<!--上传图片组件,加入剪裁功能-->
<template>
	<div id="demo">
		<div class="container" v-show="panel">
			<div>
				<img id="image" ref="image" :src="url" alt="Picture">
			</div>

			<button type="button" id="button" @click="crop">确定</button>

		</div>

		<div class="upload">
			<img :src="filesrc" v-if="filesrc">
			<div class="list-cover" v-if="filesrc">
				<i class="ivu-icon ivu-icon-ios-eye-outline" @click="modal1 = true"></i>
				<i class="ivu-icon ivu-icon-ios-trash-outline" @click="delImage"></i>
			</div>
			<div class="upload-input" v-else @click="focus">
				<input ref="file" type="file" multiple="multiple" @change="fileChange">
				<i class="ivu-icon ivu-icon-ios-plus-outline"></i>
				<span>{{desc}}</span>
			</div>
		</div>
		<transition name="fade">
			<div class="container mask" v-show="modal1" @click="modal1=false;scale=1">
				<img :src="filesrc" :style="'transform: scale(' + scale + ')'">
			</div>
		</transition>
	</div>

</template>
<script>
	import Cropper from 'cropperjs'
	export default {
		name: 'my-upload',
		data(){
			return {
				filesrc: '',
				modal1: false,

				cropper: '',
				croppable: false,
				panel: false,
				url: '',

				scale: 1,
			}
		},
		props: {
			image: {
				type: String,
				default: ''
			},
			desc: {
				type: String,
				default: '上传图片'
			}
		},
		watch: {
			image(v){
				this.filesrc = v;
			}
		},
		mounted(){
			this.filesrc = this.image;
			//初始化这个裁剪框
			var self = this;
//			var image = document.getElementById('image');
			var image = this.$refs.image;
			this.cropper = new Cropper(image, {
				aspectRatio: 16/9,
//				cropBoxResizable: false,
//				cropBoxMovable: false,
//				autoCropArea: 1,
				viewMode: 1,
				background: false,
				zoomable: true,
				ready: function () {
					self.croppable = true;
				}
			});

			var self = this;
			window.onmousewheel = document.onmousewheel = function (e) {  //IE/Opera/Chrome
				if (!self.modal1) return;
				if (e.wheelDelta) {
					if(e.wheelDelta == 120){
						self.scale += 0.03;
					}
					if(e.wheelDelta == -120){
						self.scale -= 0.03;
					}
				}
			};
			document.addEventListener('DOMMouseScroll', function (e) {  //Firefox
				if (!self.modal1) return;
				if (e.detail) {
					if(e.detail == 3){
						self.scale -= 0.03;
					}
					if(e.detail == -3){
						self.scale += 0.03;
					}
				}
			})
		},
		methods: {
			focus(){
				this.$refs.file.click();
			},
			fileChange(e){
				let files = e.target.files || e.dataTransfer.files;
				if (!files.length) return;
				if(!/image\//.exec(files[0].type)){
					this.$Message.warning('文件格式不对')
					return
				}
				this.panel = true;

				this.url = this.getObjectURL(files[0]);
				//每次替换图片要重新得到新的url
				if (this.cropper) {
					this.cropper.replace(this.url);
				}
				this.panel = true;

			},
			getObjectURL (file) {  //与fileReader的readAsDataUrl()类似, 传入文件返回可预览的url
				var url = null;
				if (window.createObjectURL != undefined) { // basic
					url = window.createObjectURL(file);
				} else if (window.URL != undefined) { // mozilla(firefox)
					url = window.URL.createObjectURL(file);
				} else if (window.webkitURL != undefined) { // webkit or chrome
					url = window.webkitURL.createObjectURL(file);
				}
				return url;
			},
			crop () {
				this.panel = false;
				var croppedCanvas;
				var roundedCanvas;

				if (!this.croppable) {
					return;
				}
				// Crop
				croppedCanvas = this.cropper.getCroppedCanvas();
				// Round
				roundedCanvas = this.getRoundedCanvas(croppedCanvas);

//				this.postImg()
				this.filesrc = roundedCanvas.toDataURL('image/jpeg', 1);
				console.log(this.dataURIToBlob(this.filesrc))
//				this.$emit('imagechange', this.filesrc);
			},
			getRoundedCanvas (sourceCanvas) {

				var canvas = document.createElement('canvas');
				var context = canvas.getContext('2d');
				var width = sourceCanvas.width;
				var height = sourceCanvas.height;

				canvas.width = width;
				canvas.height = height;

				context.imageSmoothingEnabled = true;
				context.drawImage(sourceCanvas, 0, 0, width, height);
				context.globalCompositeOperation = 'destination-in';
				context.beginPath();
//				context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
				context.rect(0, 0, width, height);
				context.fill();

				return canvas;
			},
			dataURIToBlob(dataURI){
				var type = dataURI.match(/data:([^;]+)/)[1];
				var base64 = dataURI.replace(/^[^,]+,/, '');
				var byteString = atob(base64);

				var ia = new Uint8Array(byteString.length);
				for (var i = 0; i < byteString.length; i++) {
					ia[i] = byteString.charCodeAt(i);
				}

				return new Blob([ia], {type: type});
			},
			delImage(){
				var self = this;
				setTimeout(function () {
					self.filesrc = '';
				}, 10);

			},
		},

	}
</script>
<style scoped>
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s
	}
	.fade-enter, .fade-leave-to {
		opacity: 0
	}
	.upload {
		width: 78px;
		height: 78px;
		line-height: 78px;
		text-align: center;
		overflow: hidden;
		background: #fff;
		position: relative;
		margin-right: 8px;
		transition: border-color .2s ease;
		border-radius: 3px;
	}

	.upload:hover .list-cover {
		display: block;
	}

	.upload:hover .upload-input {
		border-color: #00C8AF;
		color: #00C8AF;
	}

	.list-cover {
		display: none;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0, .6);
	}

	.list-cover i {
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		margin: 0 2px;
	}

	input[type='file'] {
		width: 0;
		height: 0;
		opacity: 0;
		z-index: -1;
		position: absolute;
	}

	.upload-input {
		cursor: pointer;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		border: 1px solid #dddddd;
		border-radius: 3px;
		line-height: normal;
		display: flex;
		flex-wrap: wrap;
		align-content: center;
		justify-content: center;
	}

	.upload-input i {
		font-size: 20px;
		margin-bottom: 5px;
	}

	.upload-input span {
		display: block;
		font-size: 14px;
	}

	.upload img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.modal img {
		max-width: 100%;
		display: block;
	}

	.mask {
		background-color: rgba(55, 55, 55, .6) !important;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 0!important;
	}

</style>
<style>
	#demo #button {
		position: absolute;
		right: 10px;
		top: 10px;
		width: 80px;
		height: 40px;
		border: none;
		border-radius: 5px;
		background: white;
	}


	/*图片剪裁*/
	#demo .show {
		width: 100px;
		height: 100px;
		overflow: hidden;
		position: relative;
		border-radius: 50%;
		border: 1px solid #d5d5d5;
	}

	#demo .picture {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	#demo .container {
		z-index: 99;
		position: fixed;
		padding-top: 60px;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 1);
	}

	#demo #image {
		max-width: 100%;
	}

	.cropper-container {
		font-size: 0;
		line-height: 0;

		position: relative;

		-webkit-user-select: none;

		-moz-user-select: none;

		-ms-user-select: none;

		user-select: none;

		direction: ltr;
		-ms-touch-action: none;
		touch-action: none
	}

	.cropper-container img {
		/* Avoid margin top issue (Occur only when margin-top <= -height) */
		display: block;
		min-width: 0 !important;
		max-width: none !important;
		min-height: 0 !important;
		max-height: none !important;
		width: 100%;
		height: 100%;
		image-orientation: 0deg
	}

	.cropper-wrap-box,
	.cropper-canvas,
	.cropper-drag-box,
	.cropper-crop-box,
	.cropper-modal {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.cropper-wrap-box {
		overflow: hidden;
	}

	.cropper-drag-box {
		opacity: 0;
		background-color: #fff;
	}

	.cropper-modal {
		opacity: .5;
		background-color: #000;
	}

	.cropper-view-box {
		display: block;
		overflow: hidden;

		width: 100%;
		height: 100%;

		outline: 1px solid #39f;
		outline-color: rgba(51, 153, 255, 0.75);
	}

	.cropper-dashed {
		position: absolute;

		display: block;

		opacity: .5;
		border: 0 dashed #eee
	}

	.cropper-dashed.dashed-h {
		top: 33.33333%;
		left: 0;
		width: 100%;
		height: 33.33333%;
		border-top-width: 1px;
		border-bottom-width: 1px
	}

	.cropper-dashed.dashed-v {
		top: 0;
		left: 33.33333%;
		width: 33.33333%;
		height: 100%;
		border-right-width: 1px;
		border-left-width: 1px
	}

	.cropper-center {
		position: absolute;
		top: 50%;
		left: 50%;

		display: block;

		width: 0;
		height: 0;

		opacity: .75
	}

	.cropper-center:before,
	.cropper-center:after {
		position: absolute;
		display: block;
		content: ' ';
		background-color: #eee
	}

	.cropper-center:before {
		top: 0;
		left: -3px;
		width: 7px;
		height: 1px
	}

	.cropper-center:after {
		top: -3px;
		left: 0;
		width: 1px;
		height: 7px
	}

	.cropper-face,
	.cropper-line,
	.cropper-point {
		position: absolute;

		display: block;

		width: 100%;
		height: 100%;

		opacity: .1;
	}

	.cropper-face {
		top: 0;
		left: 0;

		background-color: #fff;
	}

	.cropper-line {
		background-color: #39f
	}

	.cropper-line.line-e {
		top: 0;
		right: -3px;
		width: 5px;
		cursor: e-resize
	}

	.cropper-line.line-n {
		top: -3px;
		left: 0;
		height: 5px;
		cursor: n-resize
	}

	.cropper-line.line-w {
		top: 0;
		left: -3px;
		width: 5px;
		cursor: w-resize
	}

	.cropper-line.line-s {
		bottom: -3px;
		left: 0;
		height: 5px;
		cursor: s-resize
	}

	.cropper-point {
		width: 5px;
		height: 5px;

		opacity: .75;
		background-color: #39f
	}

	.cropper-point.point-e {
		top: 50%;
		right: -3px;
		margin-top: -3px;
		cursor: e-resize
	}

	.cropper-point.point-n {
		top: -3px;
		left: 50%;
		margin-left: -3px;
		cursor: n-resize
	}

	.cropper-point.point-w {
		top: 50%;
		left: -3px;
		margin-top: -3px;
		cursor: w-resize
	}

	.cropper-point.point-s {
		bottom: -3px;
		left: 50%;
		margin-left: -3px;
		cursor: s-resize
	}

	.cropper-point.point-ne {
		top: -3px;
		right: -3px;
		cursor: ne-resize
	}

	.cropper-point.point-nw {
		top: -3px;
		left: -3px;
		cursor: nw-resize
	}

	.cropper-point.point-sw {
		bottom: -3px;
		left: -3px;
		cursor: sw-resize
	}

	.cropper-point.point-se {
		right: -3px;
		bottom: -3px;
		width: 20px;
		height: 20px;
		cursor: se-resize;
		opacity: 1
	}

	@media (min-width: 768px) {

		.cropper-point.point-se {
			width: 15px;
			height: 15px
		}
	}

	@media (min-width: 992px) {

		.cropper-point.point-se {
			width: 10px;
			height: 10px
		}
	}

	@media (min-width: 1200px) {

		.cropper-point.point-se {
			width: 5px;
			height: 5px;
			opacity: .75
		}
	}

	.cropper-point.point-se:before {
		position: absolute;
		right: -50%;
		bottom: -50%;
		display: block;
		width: 200%;
		height: 200%;
		content: ' ';
		opacity: 0;
		background-color: #39f
	}

	.cropper-invisible {
		opacity: 0;
	}

	.cropper-bg {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
	}

	.cropper-hide {
		position: absolute;
		display: block;
		width: 0;
		height: 0;
	}

	.cropper-hidden {
		display: none !important;
	}

	.cropper-move {
		cursor: move;
	}

	.cropper-crop {
		cursor: crosshair;
	}

	.cropper-disabled .cropper-drag-box,
	.cropper-disabled .cropper-face,
	.cropper-disabled .cropper-line,
	.cropper-disabled .cropper-point {
		cursor: not-allowed;
	}
</style>


<!--
    ,g$$$$$$$$$$$$$$$P.
   ,g$$P""       """Y$$.".
  ,$$P'              `$$$.
',$$P       ,ggs.     `$$b:
`d$$'     ,$P"'   .    $$$                               ,#.
 $$P      d$'     ,    $$P      ##:          :##        :###:
 $$:      $$.   -    ,d$$'      ##'          `##         `#'
 $$;      Y$b._   _,d$P'    __  ##     __     ##  __      _     __          _
 Y$$.    `.`"Y$$$$P"'     ,####:##  ,######.  ##.#####. :### ,######. ###.####:
 `$$b      "-.__         ,##' `###  ##:  :##  ###' `###  ##' #:   `## `###' `##:
  `Y$$b                  ##    `##  ##    ##  ##'   `##  ##    ___,##  ##:   `##
   `Y$$.                 ##     ##  #######:  ##     ##  ##  .#######  ##'    ##
     `$$b.               ##     ##  ##'       ##     ##  ##  ##'  `##  ##     ##
       `Y$$b.            ##.   ,##  ##        ##    ,##  ##  ##    ##  ##     ##
         `"Y$b._         :#:._,###  ##:__,##  ##:__,##' ,##. ##.__:##. ##     ##
             `""""       `:#### ###  ######'  `######'  #### `#####"## ##     ##
-->

<template>
    <div>
        <p ref="copy"> As of October 2017, this library is a polyfill for the modern Promise-based asynchronous clipboard API.</p>
        <button @click="copy">点击复制上段内容</button>
        <textarea cols="30" rows="10"></textarea>
    </div>
</template>

<script>
    import clipboard from 'clipboard-polyfill'
    export default {
        methods: {
            copy(){
				clipboard.writeText(this.$refs.copy.innerText);
			}
        }
    }
</script>

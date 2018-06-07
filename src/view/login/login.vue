<template>
<div>
<span>{{ msg }}</span><br/>
姓名：
<input type="text" placeholder="请输入用户名"/><br/>
密码：
<input type="password" placeholder="密码"/><br/>
<input type="file" @change="upload" multiple ref="up"/>
<button @click="clickUpload">点击上传</button>
</div>
</template>
<script>
export default{
  data () {
    return {
      msg: 'I am a vue project'
    }
  },
  created () {
  },
  methods: {
    upload () {
      const value = arguments[0]
      console.log(value.target.files)
      const formData = new FormData()
      for (let i = 0; i < value.target.files.length; i++) {
        formData.append('file' + i, value.target.files[i])
        console.log(formData.get('file' + i))
      }
      console.log(formData)
    },
    clickUpload () {
      this.$refs.up.click()
    }
  },
  components: {
  },
  mounted () {
  },
  destroyed () {
  }
}
</script>

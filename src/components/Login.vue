

<template>
  <el-dialog visible center :show-close="false">
    <el-form :model="form" :rules="rules" ref="form">
      <el-form-item label="Screen Name" prop="nickname">
        <el-input v-model="form.nickname" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submit">Sign in</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'login',
  props: ['saveUserinfo'],
  data() {
    return {
      form: {
        nickname: '',
        password: '',
      },
      rules: {
        nickname: [
          { required: true, message: 'Please input screen name', trigger: 'blur' },
          { min: 3, message: 'Invalid screen name', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Please input password', trigger: 'blur' },
          { min: 3, message: 'Invalid password', trigger: 'blur' },
        ],
      }
    }
  },
  methods: {
    submit() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.saveUserinfo(this.form.nickname, this.form.password)
        } else {
          return false
        }
      });
    },
  },
}
</script>

<style scoped>
.statement {
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #e6f7ff;
}
</style>

<template>
  <div class="auth">
    <InputText type="text" v-model="username" placeholder="username" style="width:200px"/>
    <Password v-model="password" :feedback="false" placeholder="password" />
    <PVButton label="Submit" @click="authenticateUser()" style="width: 200px" />
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useCounterStore} from "@/stores/counter";

const username = ref()
const password = ref()
const router = useRouter()
const auth = useCounterStore()

function authenticateUser() {
  console.log(username.value, password.value)
  auth.isAuth = true
  router.push({ name: 'Home' })
}
</script>

<style scoped>
.auth {
  display: flex;
  flex-direction: column;
}
</style>
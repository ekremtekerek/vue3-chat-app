<template>
  <div class="home container">
    <h2>Chat App</h2>
    <div>
      <div v-if="uyeMi">
        <Login @login="chatBasla"/>
        <p>Üye Olmak İçin <span @click="uyeMi=false">Üye Ol</span> Sayfasına Gidiniz</p>
      </div>      
      <div v-else>
        <Register @register="chatBasla"/> 
        <p>Üyeyseniz, Giriş Yapmak İçin <span @click="uyeMi=true">Giriş Yap</span> Sayfasına Gidiniz</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import {ref} from 'vue'
import {useRouter} from 'vue-router'

export default {
  name: 'HomeView',
  components: {
    Register, Login
  },
  setup() {
    const uyeMi = ref(true)
    const router = useRouter();
    const chatBasla = () => {
      router.push({name: 'chat'})
    }

    return {uyeMi,chatBasla}
  }
}
</script>

<style scoped>
  .home {
    text-align: left;
    padding: 20px 50px;
  }
</style>
<template>
  <nav>
    <div>
        <p>Merhaba kullanici_ad</p>
        <p class="email">email_adres ile giriş yaptınız.</p>
        <button @click="cikisYap">Çıkış Yap</button>
    </div>
  </nav>
</template>

<script>
import {auth} from '@/firebase/config'
import {useRouter} from 'vue-router'
export default {
    setup() {
        const router = useRouter()

       const cikisYap = async () => {
            await auth.signOut().then(() => {
                router.push({name:'home'})
            })
       }

       return {cikisYap}
    }
}
</script>

<style>

</style>
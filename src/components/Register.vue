<template>
  <form @submit.prevent="uyeOl">
    <h4>Üyelik</h4>
    <input type="text" placeholder="Kullanıcı Adı Giriniz" v-model="kullaniciAd" required>
    <input type="mail" placeholder="Mail Adresinizi Giriniz" v-model="email" required>
    <input type="password" placeholder="Parolanızı Giriniz" v-model="parola" required>
    <button type="submit">Üye Ol</button>
  </form>
</template>

<script>
import {ref} from 'vue'
export default {
    setup() {
        const kullaniciAd = ref('')
        const email = ref('')
        const parola = ref('')

        const uyeOl = () => {
            console.log(kullaniciAd.value, email.value, parola.value);
        }

        return {uyeOl,kullaniciAd,email,parola}

    }
}
</script>

<style>

</style>
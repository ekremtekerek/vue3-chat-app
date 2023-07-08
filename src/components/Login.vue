<template>
    <form @submit.prevent="girisYap">
        <h4>Giriş Yap</h4>
        <input type="mail" placeholder="Mail Adresinizi Giriniz" v-model="email" required>
        <input type="password" placeholder="Parolanızı Giriniz" v-model="parola" required>
        <button type="submit">Üye Ol</button>
      </form>
</template>

<script>
import {ref} from 'vue'
export default {
    setup() {
        const email = ref('')
        const parola = ref('')

        const girisYap = () => {
           console.log(email.value, parola.value);
        }

        return {email, parola,girisYap}

    }
}
</script>

<style>

</style>
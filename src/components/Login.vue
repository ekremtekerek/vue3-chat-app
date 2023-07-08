<template>
    <form @submit.prevent="girisYap">
        <h4>Giriş Yap</h4>
        <input type="mail" placeholder="Mail Adresinizi Giriniz" v-model="email" required>
        <input type="password" placeholder="Parolanızı Giriniz" v-model="parola" required>
        <button type="submit">Giriş Yap</button>
      </form>
      <div>
        {{ hata }}
      </div>
</template>

<script>
import useLogin from '../composables/useLogin'

import {ref} from 'vue'
export default {
    setup(props,context) {
        const email = ref('')
        const parola = ref('')
        const {hata,login}=useLogin()

        const girisYap = async () => {
           await login(email.value,parola.value);

           if(!hata.value) {
            context.emit('login')
           }

        }

        return {email,hata, parola,girisYap}

    }
}
</script>

<style>

</style>
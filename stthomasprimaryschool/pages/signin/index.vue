<template>
    <div class="login-card rounded-lg flex flex-col shadow-md py-4 px-6 mx-auto">
        <div class="text-center flex justify-center flex-col items-center">
            <h4 v-if="mode == 'login'" class="font-medium text-2xl py-4" @click="mode == 'signup'">Login</h4>
            <h4 v-else class="font-medium text-2xl py-4" @click="mode == 'login'">Sign Up</h4>
        </div>
        <Login />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from '#app';
import { useUsers } from '~/compoosables/users';
import Login from '~/components/forms/Login.vue';

definePageMeta({
    layout: 'login'
});


const username = ref("")
const password = ref("")
const router = useRouter();
const errorrText = ref("");
const showSuccessfullToaster = ref(false)
const showUnsuccessfullToaster = ref(false)
const mode = ref("login")
const sign_up_as = ref("user")


const { login } = useUsers();

const verifyUser = async () => {
    const result = login(username.value, password.value);
    console.log("Dojo");

    if (result.success) {
        console.log('Login successful:', result.user);

        // Save user data to localStorage
        localStorage.setItem('user', JSON.stringify(result.user));

        await router.push('/');
        showSuccessfullToaster.value = true;
        setTimeout(() => {
            showSuccessfullToaster.value = false;
        }, 4000);
    } else {
        errorrText.value = result.message;
        showUnsuccessfullToaster.value = true;
        setTimeout(() => {
            errorrText.value = "";
            showUnsuccessfullToaster.value = false;
        }, 4000);
        console.log(result.message);
    }
};

</script>



<style scoped>
.content {
    height: 100%;
}
</style>

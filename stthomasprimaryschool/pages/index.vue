<template>
    <Header headerMainText="Home" />
    <transition name="navMenu-slide-in">
        <NavMenu v-if="isNavMenuOpen" :user="currentUser" />
    </transition>
    <nuxt-link to="apply">APPLY</nuxt-link>
    <h1>Current User</h1>
    <h1>{{ currentUser }}</h1>
</template>

<script setup>
import Header from '~/components/ui/Header.vue';
import NavMenu from '~/components/ui/NavMenu.vue';
import { defineProps, onMounted } from 'vue';
import { inject } from 'vue'

const isNavMenuOpen = inject('isNavMenuOpen');
const currentUser = ref({})


onMounted(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        console.log('User found in localStorage:', user);

        // Provide the currentUser to other components
        currentUser.value = user;
        provide('currentUser', currentUser.value);
    } else {
        console.log('No user found in localStorage');
    }
});
</script>

<style scoped></style>

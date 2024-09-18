<template>
    <div class="my-full-body flex flex-col">
        <NavBar @toggle-menu="toggleMenu" />
        <div class="main-body flex items-center bg-gray-300">
            <slot :isNavMenuOpen='isNavMenuOpen'></slot>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import NavBar from '~/components/ui/NavBar.vue';
import Footer from '~/components/ui/Footer.vue';
import { provide } from 'vue'


const isNavMenuOpen = ref(false);
const currentUser = ref([{}])

provide('currentUser', currentUser);
provide('isNavMenuOpen', isNavMenuOpen);


const toggleMenu = (isMenuButtonClickedOn) => {
    console.log('clicked in Index', isMenuButtonClickedOn)
    isNavMenuOpen.value = isMenuButtonClickedOn;
};
</script>

<style scoped>
.my-full-body {
    height: 100vh;
}

.main-body {
    flex-grow: 1;
    position: relative;
    max-width: 1200px;
}
</style>

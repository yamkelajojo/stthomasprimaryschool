<template>
    <div class="my-full-body flex flex-col">
        <NavBar @toggle-menu="toggleMenu" />
        <div class="main-body">
            <!-- Pass isNavMenuOpen and gama to the slot -->
            <slot :isNavMenuOpen='isNavMenuOpen' :gama="gama"></slot>
        </div>
        <Footer />
    </div>
</template>
<script setup>
import Header from '~/components/ui/Header.vue';
import NavBar from '~/components/ui/NavBar.vue';
import Footer from '~/components/ui/Footer.vue';
import { provide } from 'vue'


const isNavMenuOpen = ref(false);
const gama = ref("Dzowdzow");

provide(/* key */ 'gama', /* value */ gama.value)


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
}
</style>

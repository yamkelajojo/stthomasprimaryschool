<template v-slot="{ isNavMenuOpen, gama }">
    <Header />
    <p>{{ isNavMenuOpen }}</p>
    <p>{{ gama }}</p>
    <transition name="navMenu-slide-in">
        <NavMenu v-if="isNavMenuOpen" />
    </transition>
</template>

<script setup>
import Header from '~/components/ui/Header.vue';
import NavMenu from '~/components/NavMenu.vue';
</script>

<style scoped></style>

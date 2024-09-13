<template>
    <Header />
    <p>{{ isNavMenuOpen }}</p>
    <p>{{ gama }}</p>
    <p>{{ message }}</p>
    <transition name="navMenu-slide-in">
        <NavMenu v-if="isNavMenuOpen" />
    </transition>
</template>

<script setup>
import Header from '~/components/ui/Header.vue';
import NavMenu from '~/components/NavMenu.vue';
import { defineProps } from 'vue';
import { inject } from 'vue'

const message = inject('gama')

// const props = defineProps({ gama: { type: String, default: () => 'Yamkela' } })

</script>

<style scoped></style>

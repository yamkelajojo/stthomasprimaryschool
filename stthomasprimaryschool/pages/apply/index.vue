<template>
    <div>
        <Header headerMainText="Apply" />
    </div>
    <transition name="navMenu-slide-in">
        <NavMenu v-if="isNavMenuOpen" />
    </transition>
    <div class="my-8">
        <div class="flex items-center justify-between">
            <h4>IMPORTANT DATES</h4>
            <ActionButton>
                Apply Here
            </ActionButton>
        </div>
    </div>

</template>

<script setup>
import ActionButton from '~/components/ui/button/ActionButton.vue';
import Header from '~/components/ui/Header.vue';
import NavMenu from '~/components/ui/NavMenu.vue';
import { inject } from 'vue'


const isNavMenuOpen = inject('isNavMenuOpen');

</script>

<style lang="scss" scoped></style>
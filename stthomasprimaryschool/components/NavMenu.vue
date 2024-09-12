<template>
    <div class="navMenu flex justify-center py-20">
        <div class="left-navMenu-panel mx-auto">
            <ul class="flex font-light flex-col mx-auto text-5xl gap-10">
                <li v-for="navMenuLink in navMenuLinks">{{ navMenuLink }}</li>
            </ul>
        </div>
        <div class="right-navMenu-panel">

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const navMenuLinks = ref(['Enroll Now', 'Book A Tour', 'About Us', 'Learning', 'News', 'Contact Us', 'Follow Us'])
</script>

<style scoped>
.navMenu {
    width: 100%;
    background-color: rgb(231, 237, 237);
    height: 100vh;
}
</style>
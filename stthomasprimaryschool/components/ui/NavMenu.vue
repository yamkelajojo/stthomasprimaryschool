<template>
    <transition name="navMenu-slide-in">
        <div class="navMenu flex justify-center py-20">
            <div class="left-navMenu-panel mx-auto">
                <ul class="flex font-light flex-col mx-auto text-5xl gap-10">
                    <li class="link" v-for="navMenuLink in navMenuLinks"><nuxt-link
                            :to="navMenuLink.link_name == 'apply' ? 'apply' : ''">{{ navMenuLink.name
                            }}</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="right-navMenu-panel">

            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref } from 'vue';
const navMenuLinks = ref([
    { id: 1, name: 'Apply Now', link_name: 'apply' },
    { id: 2, name: 'Book A Tour', link_name: 'book_a_tour' },
    { id: 3, name: 'About Us', link_name: 'about_us' },
    { id: 4, name: 'Learning', link_name: 'learning' },
    { id: 5, name: 'News', link_name: 'news' },
    { id: 6, name: 'Contact Us', link_name: 'contact_us' },
    { id: 7, name: 'Follow Us', link_name: 'follow_us' }
])
</script>

<style scoped>
.navMenu {
    width: 100%;
    background-color: rgb(9, 128, 46);
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
}
</style>
<template>
    <div>
        <div class="header-body">
            <div class="content-overlay flex flex-col justify-center gap-6">
                <div class="flex flex-col gap-2">
                    <p>____</p>
                    <p>StThomas</p>
                </div>
                <h1 class="text-6xl font-semibold">{{ headerMainText }}</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBar from './NavBar.vue';
import { defineProps } from 'vue';

const props = defineProps({
    headerMainText: {
        type: String,
        default: "HeaderMainText"
    }
});

</script>

<style scoped>
.header-body {
    height: 22rem;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/stthomas_kids_in_uniform.jpg');
    position: relative;
    z-index: 1;
}

.content-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    /* text-align: center; */
    background-color: rgba(51, 64, 64, 0.425);
    width: 100%;
    height: 100%;
}

section {
    padding: 20px;
}
</style>

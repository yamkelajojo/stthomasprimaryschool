<template>
    <div>
        <div class="header-body">
            <div class="content-overlay flex items-center">
                <h1>Enrolment Dates and Fees</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBar from './NavBar.vue';
</script>

<style scoped>
.header-body {
    height: 30rem;
    /* Adjust height to fit your design */
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/stthomas_kids_in_uniform.jpg');
    position: relative;
    z-index: 5;
    /* Ensure header is on top */
}

.content-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    /* background-color: aqua; */
    width: 100%;
    height: 100%;
}

h1 {
    font-size: 3rem;
}

section {
    padding: 20px;
}
</style>

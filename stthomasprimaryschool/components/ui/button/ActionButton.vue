<template>
    <button @mouseenter="isHovering = true" @mouseleave="isHovering = false"
        :class="['px-4 py-3 text-gray-50 rounded-xl', isHovering ? 'bg-blue-800' : 'bg-blue-900']">
        <slot />
    </button>
</template>

<script setup>

const isHovering = ref(false)
</script>

<style scoped></style>
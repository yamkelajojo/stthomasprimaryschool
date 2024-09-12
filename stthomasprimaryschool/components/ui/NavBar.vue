<template>
    <nav class="flex justify-between items-center">
        <div class="p-3">
            <MenuButton @toggle-menu="toggleMenu" />
        </div>
        <div class="p-3">
            <img class="logo-image" src="/public/images/fc.png" alt="logo" />
        </div>
        <div class="p-3">
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px"
                fill="#rgb(15 23 42)">
                <path
                    d="M480-480.67q-66 0-109.67-43.66Q326.67-568 326.67-634t43.66-109.67Q414-787.33 480-787.33t109.67 43.66Q633.33-700 633.33-634t-43.66 109.67Q546-480.67 480-480.67ZM160-160v-100q0-36.67 18.5-64.17T226.67-366q65.33-30.33 127.66-45.5 62.34-15.17 125.67-15.17t125.33 15.5q62 15.5 127.28 45.3 30.54 14.42 48.96 41.81Q800-296.67 800-260v100H160Zm66.67-66.67h506.66V-260q0-14.33-8.16-27-8.17-12.67-20.5-19-60.67-29.67-114.34-41.83Q536.67-360 480-360t-111 12.17Q314.67-335.67 254.67-306q-12.34 6.33-20.17 19-7.83 12.67-7.83 27v33.33ZM480-547.33q37 0 61.83-24.84Q566.67-597 566.67-634t-24.84-61.83Q517-720.67 480-720.67t-61.83 24.84Q393.33-671 393.33-634t24.84 61.83Q443-547.33 480-547.33Zm0-86.67Zm0 407.33Z" />
            </svg>
        </div>
    </nav>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import MenuButton from './button/MenuButton.vue';


const isNavMenuOpen = ref(false);

const emits = defineEmits(['toggle-menu'])

const toggleMenu = (isMenuButtonClickedOn) => {
    isNavMenuOpen.value = isMenuButtonClickedOn; // Simply set isMenuOpen based on emitted value
    emits("toggle-menu", isMenuButtonClickedOn)
};

</script>


<style scoped>
.logo-image {
    height: 5rem;
}

nav {
    box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
    position: relative;
    z-index: 10;
}

.badge {
    scale: 0.7
}

.navMenu-slide-in-enter-active,
.navMenu-slide-in-leave-active {
    transition: all 0.5s ease;
}

.navMenu-slide-in-enter-from,
.navMenu-slide-in-leave-to {
    opacity: 0;
    transform: translateX(-500px);
}
</style>
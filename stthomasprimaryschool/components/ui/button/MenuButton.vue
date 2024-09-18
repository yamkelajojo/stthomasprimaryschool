<template>
    <div class="btnWrapper">
        <div class="container" @click="toggleSticks">
            <div :class="['stick', 'stick-1', { open: isOpen, close: !isOpen }]"></div>
            <div :class="['stick', 'stick-2', { open: isOpen, close: !isOpen }]"></div>
            <div :class="['stick', 'stick-3', { open: isOpen, close: !isOpen }]"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const isOpen = ref(false);

const emits = defineEmits(['toggle-menu'])

const toggleSticks = () => {
    if (isOpen.value == false) {
        isOpen.value = true
        emits('toggle-menu', true)
    }
    else {
        isOpen.value = false
        emits('toggle-menu', false)
    }
}
</script>


<style scoped>
.container {
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    cursor: pointer;
}

.stick {
    width: 80px;
    height: 8px;
    border-radius: 4px;
    margin-bottom: 15px;
    background-color: rgb(15 23 42);
    display: inline-block;
}

.stick:last-child {
    margin-bottom: 0px;
}

.stick-1.open {
    animation: stick-1-open .3s ease-out forwards;
}

.stick-2.open {
    animation: stick-2-open .3s linear forwards;
}

.stick-3.open {
    animation: stick-3-open .3s linear forwards;
}

@keyframes stick-1-open {
    0% {
        width: 80px;
    }

    40% {
        background-color: #c9153f;
        width: 8px;
        transform: translate(40px, 0px);
    }

    75%,
    80% {
        width: 8px;
        transform: translate(40px, -50px);
        animation-timing-function: cubic-bezier(0, 1, 1, 1);
    }

    100% {
        background-color: #c9153f;
        width: 8px;
        transform: translate(35px, 46px);
    }
}

@keyframes stick-2-open {
    80% {
        background-color: rgb(15 23 42);
        transform: translate(0px, 0px) rotate(0deg);
    }

    100% {
        background-color: #c9153f;
        transform: translate(8px, 0px) rotate(40deg);
    }
}

@keyframes stick-3-open {
    80% {
        background-color: rgb(15 23 42);
        transform: translate(0px, 0px) rotate(0deg);
    }

    100% {
        background-color: #c9153f;
        transform: translate(8px, -23px) rotate(-40deg);
    }
}

.stick-1.close {
    width: 8px;
    transform: translate(27px, 26px);
    animation: stick-1-close .3s ease-out forwards;
}

.stick-2.close {
    transform: translate(0px, 0px) rotate(40deg);
    animation: stick-2-close .3s ease-out forwards;
}

.stick-3.close {
    transform: translate(0px, -23px) rotate(-40deg);
    animation: stick-3-close .3s ease-out forwards;
}

.btnWrapper {
    scale: 0.30;
}

@keyframes stick-1-close {

    0%,
    70% {
        width: 0px;
    }

    100% {
        width: 80px;
        transform: translate(0, 0);
    }
}

@keyframes stick-2-close {
    0% {
        background-color: #ff1456;
        width: 80px;
    }

    20% {
        background-color: #ff1456;
        width: 8px;
        transform: translate(0, 0px) rotate(40deg);
    }

    40% {
        background-color: #2DFDB9;
        width: 0px;
    }

    65% {
        transform: translate(0, -70px);
        animation-timing-function: cubic-bezier(0, 1, 1, 1);
    }

    80% {
        width: 0px;
    }

    100% {
        width: 80px;
        transform: translate(0, 0px);
    }
}

@keyframes stick-3-close {
    0% {
        background-color: #ff1456;
        width: 80px;
    }

    20% {
        background-color: #ff1456;
        width: 8px;
        transform: translate(0, -23px) rotate(-40deg);
    }

    40% {
        background-color: #2DFDB9;
    }

    65% {
        transform: translate(0, -93px);
        animation-timing-function: cubic-bezier(0, 1, 1, 1);
    }

    90% {
        width: 8px;
    }

    100% {
        width: 80px;
        transform: translate(0, 0px);
    }
}
</style>
<template>
    <div class="flex flex-col items-center justify-center gap-6">
        <div class="identity_div mx-auto">
            <!-- <img :src="user?.username" alt="User Profile Picture"> -->
            <img v-show="user" src="/images/default/user-login-icon-14.png" alt="" class="user-image mx-auto m-8">
            <h4 class="font-semibold text-center text-2xl">{{ user?.username }}</h4>
        </div>

        <div class="flex flex-col gap-8">
            <div class="cred flex gap-6 justify-between items-center">
                <h4 class="text-lg font-semibold">Name:</h4>
                <div class="flex gap-2">
                    <h4 class="text-lg font-normal">{{ user?.first_name }}</h4>
                    <h4 class="text-lg font-normal">{{ user?.last_name }}</h4>
                </div>
            </div>
            <div class="cred flex gap-6 justify-between items-center">
                <h4 class="text-lg font-semibold">Email:</h4>
                <h4 class="text-lg font-normal">{{ user?.email }}</h4>
            </div>
            <div class="cred flex gap-6 justify-between items-center">
                <h4 class="text-lg font-semibold">Location:</h4>
                <h4 class="text-lg font-normal">{{ user?.location }}</h4>
            </div>
            <div class="cred flex gap-6 justify-between items-center">
                <h4 class="text-lg font-semibold">Phone Number:</h4>
                <h4 class="text-lg font-normal">{{ user?.phone_number }}</h4>
            </div>
        </div>
        <div>
            <h3 class="text-3xl font-normal">Cart</h3>
            <div class="cred flex flex-col gap-6 justify-between items-center">
                <h4 class="text-lg font-semibold">Order History:</h4>
                <div v-if="user" class="slider px-2  rounded-sm shadow-">
                    <div v-for="order in user.cart" :key="order.id" class="text-lg font-normal order-wrapper">
                        <div class="shadow-md rounded-md inline-block mr-4" v-for="item in order.items">
                            <img :src="item.imageSrc" alt="food image" class="order-history-items-image">
                            <p class="font-bold text-gray-500 truncate ml-1">{{ item.name }}</p>
                            <p class="font-bold text-md ml-1">R{{ item.price }}</p>
                        </div>
                    </div>
                </div>
                <div v-else>No History</div>
            </div>
        </div>


    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from '#app';

const user = ref(null);
const router = useRouter();

// definePageMeta({
//     layout: 'login'
// });

onMounted(() => {
    console.log(router)
    try {
        const userString = localStorage.getItem('user');
        if (userString) {
            user.value = JSON.parse(userString);
            console.log(user.value);
        } else {
            console.error("No user found in localStorage");
        }
    } catch (error) {
        console.error("Failed to parse user data:", error);
    }
    const slider = document.querySelector('.slider');
    if (slider) {
        slider.addEventListener('wheel', (event) => {
            event.preventDefault();
            slider.scrollLeft += event.deltaY;  // Translate vertical scroll to horizontal
        });
    }
});
</script>

<style>
.user-image {
    max-width: 35%;
}

.order-history-items-image {
    max-width: 7rem;
    height: auto;
}

.slider {
    max-width: 800px;
    /* Allow slider to take full width */
    overflow-x: auto;
    /* Enable horizontal scrolling */
    white-space: nowrap;
    /* Prevent wrapping */
    display: flex;
    /* Ensure items are flexed horizontally */
    /* gap: 1rem; */
    justify-content: space-evenly;
    scroll-behavior: smooth;
    /* Optional: For smooth scrolling */
    box-shadow: 0 4px 1.8rem rgba(33, 33, 33, 0.2);
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
}

.order-wrapper {
    display: inline-flex;
    /* Align order items horizontally */
}

.slider::-webkit-scrollbar {
    height: 5px;
    /* Optional: Customize scrollbar height */
}

.slider::-webkit-scrollbar-thumb {
    background: #c3c3c3;
    /* Optional: Customize scrollbar thumb color */
    border-radius: 15px;
}
</style>

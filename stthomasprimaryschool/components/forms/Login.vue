<template>
    <div>
        <form class="" @submit.prevent="verifyUser">
            <div>
                <div class="flex justify-between items-center border-2 my-6 rounded-md">
                    <input type="text" placeholder="username" id="username" v-model="username"
                        class="h-full py-2 px-2 font-thin">
                    <label for="username" class="flex justify-center px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                            fill="grey">
                            <path
                                d="M480-480.67q-66 0-109.67-43.66Q326.67-568 326.67-634t43.66-109.67Q414-787.33 480-787.33t109.67 43.66Q633.33-700 633.33-634t-43.66 109.67Q546-480.67 480-480.67ZM160-160v-100q0-36.67 18.5-64.17T226.67-366q65.33-30.33 127.66-45.5 62.34-15.17 125.67-15.17t125.33 15.5q62 15.5 127.28 45.3 30.54 14.42 48.96 41.81Q800-296.67 800-260v100H160Zm66.67-66.67h506.66V-260q0-14.33-8.16-27-8.17-12.67-20.5-19-60.67-29.67-114.34-41.83Q536.67-360 480-360t-111 12.17Q314.67-335.67 254.67-306q-12.34 6.33-20.17 19-7.83 12.67-7.83 27v33.33ZM480-547.33q37 0 61.83-24.84Q566.67-597 566.67-634t-24.84-61.83Q517-720.67 480-720.67t-61.83 24.84Q393.33-671 393.33-634t24.84 61.83Q443-547.33 480-547.33Zm0-86.67Zm0 407.33Z" />
                        </svg>
                    </label>
                </div>
                <span class="bg-red-500 font-semibold text-sm">{{ errors.password }}</span>
            </div>

            <div>
                <div class="flex justify-between items-center border-2 border-l-1 my-6 rounded-md ">
                    <input type="password" placeholder="password..." id="password" v-model="password"
                        class="h-full py-2 px-2  font-thin">
                    <label for="password" class="flex justify-center px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
                            fill="grey">
                            <path
                                d="M226.67-80q-27.5 0-47.09-19.58Q160-119.17 160-146.67v-422.66q0-27.5 19.58-47.09Q199.17-636 226.67-636h60v-90.67q0-80.23 56.57-136.78T480.07-920q80.26 0 136.76 56.55 56.5 56.55 56.5 136.78V-636h60q27.5 0 47.09 19.58Q800-596.83 800-569.33v422.66q0 27.5-19.58 47.09Q760.83-80 733.33-80H226.67Zm0-66.67h506.66v-422.66H226.67v422.66ZM480.11-280q32.22 0 55.06-22.52Q558-325.04 558-356.67q0-31-22.95-55.16Q512.11-436 479.89-436t-55.06 24.17Q402-387.67 402-356.33q0 31.33 22.95 53.83 22.94 22.5 55.16 22.5ZM353.33-636h253.34v-90.67q0-52.77-36.92-89.72-36.93-36.94-89.67-36.94-52.75 0-89.75 36.94-37 36.95-37 89.72V-636ZM226.67-146.67v-422.66 422.66Z" />
                        </svg>
                    </label>
                </div>
                <span class="bg-red-500 font-semibold text-sm">{{ errors.password }}</span>

                <div class="w-full flex justify-center py-2">
                    <button class="px-4 py-2 rounded-lg bg-blue-500" id="submit">Submit</button>
                </div>
            </div>


        </form>

        <SuccessfullToaster v-if="showSuccessfullToaster == true" />
        <UnsuccessfullToaster v-if="showUnsuccessfullToaster == true" />
    </div>
</template>

<script setup>
import { useRouter } from '#app';
import { useUsers } from '~/compoosables/users';
import SuccessfullToaster from '~/components/ui/SuccessfullToaster.vue';
import UnsuccessfullToaster from '~/components/ui/UnsuccessfullToaster.vue';
import { provide } from 'vue'

const username = ref("")
const password = ref("")
const router = useRouter();
const errors = ref({});
const showSuccessfullToaster = ref(false)
const showUnsuccessfullToaster = ref(false)
const mode = ref("login")

const { login } = useUsers();

const verifyUser = async () => {
    const result = login(username.value, password.value);
    console.log("Dojo", username.value, password.value);

    if (result.success) {
        console.log("Login successful:", result);
        provide("currentUser", result.user);

    } else {
        errors = result.data;
        showUnsuccessfullToaster.value = true;
        setTimeout(() => {
            errorrText.value = "";
            showUnsuccessfullToaster.value = false;
        }, 4000);
        console.log(result.message);
    }
};

onMounted(() => {
    username.value = null;
    password.value = null;
});


</script>

<style scoped>
input {
    flex-grow: 1;
}
</style>
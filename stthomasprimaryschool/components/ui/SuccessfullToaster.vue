<template>
  <div class="toaster bg-green-500 z-10 flex rounded-lg shadow-xl">
    <div class="sidebar  my-auto">
    </div>
    <div class="message py-4 px-3 bg-slate-100 rounded-r-lg flex gap-3 items-center">
      <span class="iconify" data-icon=""><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960"
          width="40px" fill="#22C55E">
          <path
            d="M480-96q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q63 0 120 19t105 54l-52 52q-37-26-81-39.5T480-792q-130 0-221 91t-91 221q0 130 91 221t221 91q130 0 221-91t91-221q0-21-3-41.5t-8-40.5l57-57q13 32 19.5 67t6.5 72q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm-55-211L264-468l52-52 110 110 387-387 51 51-439 439Z" />
        </svg></span>
        <div>
          <h4 class="font-semibold" style="color: #2a3439;">Successfull</h4>
          <p class="text-grey-500 text-sm" >{{message}}</p>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  message: {
    default: ''
  }
});

</script>

<style>
.toaster {
  position: absolute;
  top: 5%;
  right: 8%;
}

.sidebar {
  min-width: 15%;
  min-height: 100%;
  background-color: blue;
}
</style>
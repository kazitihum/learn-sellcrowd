<template>
  <div class="navbar mb-2 rounded-box flex-col md:flex-row">
    <div class="flex-1 px-2 mx-2 lg:flex-none mb-4 md:mb-0">
      <NuxtLink to="/"><Logo /></NuxtLink>
    </div>
    <div class="justify-center flex-1 hidden px-2 mx-2 lg:flex">
      <div class="flex items-stretch">
        <NuxtLink
          to="#"
          class="btn btn-ghost btn-sm w-44 rounded-full text-tertiary"
        >
          About Company
        </NuxtLink>
        <NuxtLink
          to="#"
          class="btn btn-ghost btn-sm w-44 rounded-full text-tertiary"
        >
          Contact Sales
        </NuxtLink>
      </div>
    </div>
    <div class="flex-none">
      <NuxtLink to="#" class="btn btn-primary w-52 rounded-full"
        >Get Started</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
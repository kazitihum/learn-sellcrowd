<template>
  <div class="navbar mb-2 rounded-box">
    <div class="flex-1 px-2 mx-2 lg:flex-none">
      <NuxtLink to="/"><Logo /></NuxtLink>
    </div>
    <div class="justify-center flex-1 hidden px-2 mx-2 lg:flex">
      <div class="flex items-stretch">
        <a class="btn btn-ghost btn-sm w-44 rounded-full"> About Company </a>
        <a class="btn btn-ghost btn-sm w-44 rounded-full"> Contact Sales </a>
      </div>
    </div>
    <div class="flex-none">
      <button class="btn btn-primary w-52 rounded-full">Get Started</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
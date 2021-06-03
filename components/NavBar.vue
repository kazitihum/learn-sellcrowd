<template>
  <div v-bind:class="$nuxt.$route.path !== '/' ? 'border-bottom' : ''">
    <div class="container mx-auto my-6">
      <div class="navbar mb-2 rounded-box flex-col md:flex-row p-0">
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
          <NuxtLink
            v-if="$nuxt.$route.path === '/'"
            to="/step-1"
            class="btn btn-primary w-44 rounded-full"
            >Get Started</NuxtLink
          >
          <NuxtLink
            v-else
            to="#"
            class="btn btn-outline btn-primary w-44 rounded-full"
            >Save and Exit</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid #eef1f8;
}
</style>
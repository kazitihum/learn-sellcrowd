<template>
  <div class="bg-primary">
    <div class="container mx-auto py-14">
      <div class="flex flex-wrap flex-col sm:flex-row items-center">
        <div
          class="flex flex-1 mb-5 sm:mb-0"
          v-bind:class="$nuxt.$route.path !== '/step-1' ? 'hidden' : ''"
        >
          <img
            class="text-white"
            src="~/assets/icon/info-outline-round.svg"
            alt=""
          />
          <p class="ml-3 text-white max-w-2xl">
            Add as much information as you can here for your new sales team to
            learn about your product and the market. On the next screen, you
            will get to build a sales script.
          </p>
        </div>
        <div
          v-if="$nuxt.$route.path !== '/step-4'"
          class="
            sm:ml-auto
            flex flex-col
            sm:flex-row
            justify-center
            items-center
          "
        >
          <button
            class="
              btn btn-outline btn-white
              w-44
              rounded-full
              border-2 border-white
              text-white
              sm:mr-5
              mb-5
              sm:mb-0
            "
          >
            Ship This Step
          </button>
          <button
            class="
              btn
              text-primary
              hover:text-white
              bg-white
              w-44
              rounded-full
              border-2 border-white
            "
          >
            Next
          </button>
        </div>
        <div
          v-else
          class="
            sm:ml-auto
            flex flex-col
            sm:flex-row
            justify-center
            items-center
          "
        >
          <button
            class="
              btn
              text-primary
              hover:text-white
              bg-white
              w-44
              rounded-full
              border-2 border-white
            "
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
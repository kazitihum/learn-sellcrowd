<template>
  <div class="footer bg-secondary text-white">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row pt-14 sm:pt-20 pb-10">
        <div class="flex-auto mb-5 sm:mb-0 text-center sm:text-left">
          <h5 class="pb-5 opacity-80">Company</h5>
          <ul>
            <li class="font-bold mb-3">
              <NuxtLink to="#">About SellCrowd</NuxtLink>
            </li>
            <li class="font-bold mb-3">
              <NuxtLink to="#">Our Mission</NuxtLink>
            </li>
            <li class="font-bold mb-3">
              <NuxtLink to="#">Contact us</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex-auto mb-5 sm:mb-0 text-center sm:text-left">
          <h5 class="pb-5 opacity-80">Products</h5>
          <ul>
            <li class="font-bold mb-3">
              <NuxtLink to="#">Hire Sales People</NuxtLink>
            </li>
            <li class="font-bold mb-3">
              <NuxtLink to="#">Find Sales Job</NuxtLink>
            </li>
            <li class="font-bold mb-3">
              <NuxtLink to="#">Keyword Tool</NuxtLink>
            </li>
            <li class="font-bold mb-3">
              <NuxtLink to="#">Sales Offer Videos</NuxtLink>
            </li>
            <li class="font-bold mb-3">
              <NuxtLink to="#">Sales Management App</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex-auto mb-5 sm:mb-0 text-center sm:text-left">
          <h5 class="pb-5 opacity-80">Navigation</h5>
          <ul>
            <li class="font-bold mb-3">
              <NuxtLink to="#">How It Works</NuxtLink>
            </li>
            <li class="font-bold mb-3"><NuxtLink to="#">FAQs</NuxtLink></li>
            <li class="font-bold mb-3"><NuxtLink to="#">Blog</NuxtLink></li>
          </ul>
        </div>
        <div class="flex-auto mb-5 sm:mb-0 text-center sm:text-left">
          <h5 class="pb-5 opacity-80">Social</h5>
          <ul>
            <li class="font-bold mb-3"><NuxtLink to="#">Facebook</NuxtLink></li>
            <li class="font-bold mb-3"><NuxtLink to="#">Linkedin</NuxtLink></li>
            <li class="font-bold mb-3"><NuxtLink to="#">Twitter</NuxtLink></li>
            <li class="font-bold mb-3"><NuxtLink to="#">Email</NuxtLink></li>
          </ul>
        </div>
        <div class="flex-auto mb-5 sm:mb-0 text-center sm:text-left">
          <h5 class="pb-5 opacity-80">Links</h5>
          <ul>
            <li class="font-bold mb-3"><NuxtLink to="#">Policies</NuxtLink></li>
            <li class="font-bold mb-3"><NuxtLink to="#">Terms</NuxtLink></li>
          </ul>
        </div>
      </div>
      <div class="copyright text-center pb-14 sm:pb-20">
        <img
          src="~/assets/img/sellcrowd-logo-white.svg"
          class="mx-auto mb-2"
          alt=""
        />
        <p class="opacity-30 text-white">
          Sellcrowd © 2021. All Rights Reserved
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 1024px) {
  .container {
    padding: 0 20px;
  }
}
@media (max-width: 640px) {
  .container {
    padding: 0 20px;
  }
}
</style>
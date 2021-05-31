<template>
  <div>
    <div class="container mx-auto mt-8">
      <NavBar />
    </div>
    <div class="container mx-auto">
      <div id="cover" class="pt-20">
        <div class="text">
          <h1 class="text-center max-w-5xl mx-auto">
            Get real sales pros to contact qualify and convert your leads 24x7
          </h1>
          <div class="subtitle flex items-center justify-center mt-6 text-2xl">
            <svg
              class="mr-3"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7.29 14.29L3.7 10.7C3.31 10.31 3.31 9.68 3.7 9.29C4.09 8.9 4.72 8.9 5.11 9.29L8 12.17L14.88 5.29C15.27 4.9 15.9 4.9 16.29 5.29C16.68 5.68 16.68 6.31 16.29 6.7L8.7 14.29C8.32 14.68 7.68 14.68 7.29 14.29Z"
                fill="#5A698D"
              />
            </svg>
            Over 2,437 sales pros available
          </div>
          <form action="" class="flex items-center justify-center mt-8">
            <input
              type="text"
              placeholder="Your email address"
              class="input input-lg input-bordered rounded-full min-1_3 mr-5 c-shadow"
            />
            <button class="btn btn-lg btn-primary w-52 rounded-full c-shadow-2">
              Get Started
            </button>
          </form>
          <img class="mx-auto -mt-40" src="~/assets/img/home-cover-bg.svg" />
        </div>
      </div>
    </div>
    <div id="four-col-section">
      <div class="container mx-auto">
        <div
          class="grid gap-10 grid-flow-row md:grid-flow-col grid-cols-1 md:grid-cols-4 py-20"
        >
          <div class="content">
            <div
              class="color-box h-64 rounded-3xl w-full flex items-center justify-center text-white font-bold text-3xl"
              style="background: #3c50e0"
            >
              Upload
            </div>
            <h3 class="mt-5 mb-3">Upload Your Leads</h3>
            <p>
              Integrate your landing page to our sales pro network with one line
              of javascript. Grab your code!
            </p>
          </div>
          <div class="content">
            <div
              class="color-box h-64 rounded-3xl w-full flex items-center justify-center text-white font-bold text-3xl"
              style="background: #ff5670"
            >
              Build
            </div>
            <h3 class="mt-5 mb-3">Build Your Script</h3>
            <p>
              Use our sales wizard to upload product info & then design the
              perfect lead qualification & conversion script.
            </p>
          </div>
          <div class="content">
            <div
              class="color-box h-64 rounded-3xl w-full flex items-center justify-center text-white font-bold text-3xl"
              style="background: #fdb400"
            >
              Recruit
            </div>
            <h3 class="mt-5 mb-3">Recruit Sales Pros</h3>
            <p>
              Our network of sales pros begin training themselves in your
              product, then apply when ready.
            </p>
          </div>
          <div class="content">
            <div
              class="color-box h-64 rounded-3xl w-full flex items-center justify-center text-white font-bold text-3xl"
              style="background: #464265"
            >
              Sell!
            </div>
            <h3 class="mt-5 mb-3">Start Selling</h3>
            <p>
              Approve your new sales team then watch us something something
              something sales start rolling in!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.c-shadow {
  box-shadow: 0px 0px 13px rgba(174, 174, 174, 0.25);
}
.c-shadow-2 {
  box-shadow: 0px 7px 13px rgba(60, 80, 224, 0.3);
}
#four-col-section {
  background: url("~/assets/img/4-col-section-line-bg.svg") no-repeat center -500%/100%;
}
</style>

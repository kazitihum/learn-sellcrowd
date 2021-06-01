<template>
  <div>
    <div class="container mx-auto mt-8">
      <NavBar />
    </div>
    <div class="container mx-auto">
      <div id="cover" class="pt-14 sm:pt-20">
        <div class="text">
          <h1 class="text-center max-w-5xl mx-auto">
            Get real sales pros to contact qualify and convert your leads 24x7
          </h1>
          <div
            class="subtitle flex items-center justify-center mt-6 text-base sm:text-2xl"
          >
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
          <form
            action=""
            class="flex flex-col sm:flex-row items-center justify-center mt-8"
          >
            <input
              type="text"
              placeholder="Your email address"
              class="input input-lg input-bordered rounded-full min-1_3 mb-5 sm:mb-0 sm:mr-5 c-shadow"
            />
            <button class="btn btn-lg btn-primary w-52 rounded-full c-shadow-2">
              Get Started
            </button>
          </form>
          <img
            class="mx-auto -mt-10 md:-mt-20 lg:-mt-40"
            width="1200"
            height="760"
            src="~/assets/img/home-cover-bg.svg"
          />
        </div>
      </div>
    </div>
    <div id="four-col__section">
      <div class="container mx-auto">
        <div
          class="grid gap-10 grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-4 py-14 sm:pt-20 sm:pb-24"
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
    <div id="two-col-right-img__section">
      <div class="container mx-auto">
        <div
          class="grid gap-2 sm:gap-10 grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 py-14 sm:pb-24"
        >
          <div class="content">
            <h2 class="text-2xl sm:text-6xl mb-5">
              Even if you have less than 100 leads, we are here for you
            </h2>
            <p class="mb-5">
              Change approaches cloud heading runway and change touchpoints in.
              Win of clickthroughs ballpark forward derive with innovation
              derive grow identify survival.
            </p>
            <NuxtLink to="#" class="btn btn-primary w-52 rounded-full"
              >Get Started</NuxtLink
            >
          </div>
          <div class="content"></div>
        </div>
      </div>
    </div>
    <div id="two-col-left-img__section">
      <div class="container mx-auto">
        <div
          class="grid gap-2 sm:gap-10 grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 py-14 sm:py-24 xl:pt-80 xl:pb-60"
        >
          <div class="content"></div>
          <div class="content">
            <h2 class="text-2xl sm:text-6xl mb-5">
              Getting started is easy in just 3 steps
            </h2>
            <p class="mb-5">
              Change approaches cloud heading runway and change touchpoints in.
              Win of clickthroughs ballpark forward derive with innovation
              derive grow identify survival.
            </p>
            <NuxtLink to="#" class="btn btn-primary w-52 rounded-full"
              >Get Started</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <Footer />
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
#four-col__section {
  background: url("~/assets/img/4-col-section-line-bg.svg") no-repeat center -300%/100%;
}
#two-col-right-img__section {
  background-color: #eef5ff;
  position: relative;
}
#two-col-right-img__section:after {
  content: url("~/assets/img/home-section-3-img.svg");
  display: block;
  height: 100vh;
  width: 100%;
  position: absolute;
  text-align: right;
  right: 0;
  top: -18%;
}
#two-col-left-img__section {
  position: relative;
}
#two-col-left-img__section:after {
  content: url("~/assets/img/home-section-4-img.svg");
  display: block;
  height: 100vh;
  width: 100%;
  position: absolute;
  text-align: left;
  left: 0;
  top: 0;
}
@media (max-width: 1024px) {
  .container {
    padding: 0 20px;
  }
  #two-col-right-img__section:after,
  #two-col-left-img__section:after {
    transform: scale(0.7);
  }
  #two-col-right-img__section:after {
    right: -15%;
    top: -31%;
  }
  #two-col-left-img__section:after {
    left: -15%;
    top: -52%;
  }
}

@media (max-width: 768px) {
  #two-col-right-img__section:after,
  #two-col-left-img__section:after {
    transform: scale(0.6);
  }
  #two-col-right-img__section:after {
    right: -20%;
    top: -23%;
  }
  #two-col-left-img__section:after {
    left: -20%;
    top: -24%;
  }
}

@media (max-width: 640px) {
  #cover img {
    width: 100%;
  }
  #two-col-right-img__section,
  #two-col-left-img__section {
    padding-bottom: 50px;
  }
  #two-col-right-img__section:after,
  #two-col-left-img__section:after {
    content: "";
    transform: none;
    right: 0;
    top: 0;
    left: 0;
    position: relative;
    background: url("~/assets/img/home-section-3-img.svg") no-repeat
      right/contain;
    height: 50vh;
    width: auto;
    margin-top: -50px;
  }
  #two-col-left-img__section:after {
    background: url("~/assets/img/home-section-4-img.svg") no-repeat
      left/contain;
  }
}
</style>

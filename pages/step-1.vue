<template>
  <div>
    <NavBar />

    <div class="container mx-auto w-full h-full pt-14">
      <div class="relative wrap overflow-hidden h-full">
        <div class="flex flex-wrap item-center">
          <div
            class="
              z-20
              flex
              items-center
              order-2
              sm:order-1
              bg-primary
              w-10
              h-10
              mr-5
              rounded
            "
          >
            <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <h1 class="text-3xl order-3 sm:order-2">Upload Your Leads</h1>
          <div
            class="
              flex
              order-1
              sm:order-3
              w-full
              sm:w-auto
              items-center
              ml-auto
              mb-5
              sm:mb-0
            "
          >
            <NuxtLink
              to="step-2"
              class="z-20 flex items-center order-1 w-10 h-10 mr-5 rounded"
              style="background-color: #ff5670"
            >
              <h1 class="mx-auto font-semibold text-lg text-white">2</h1>
            </NuxtLink>
            <NuxtLink
              to="step-3"
              class="z-20 flex items-center order-1 w-10 h-10 mr-5 rounded"
              style="background-color: #fdb400"
            >
              <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
            </NuxtLink>
            <NuxtLink
              to="step-4"
              class="z-20 flex items-center order-1 w-10 h-10 rounded"
              style="background-color: #464265"
            >
              <h1 class="mx-auto font-semibold text-lg text-white">4</h1>
            </NuxtLink>
          </div>
        </div>
        <div
          class="absolute border-opacity-20 border-primary h-full border-r"
          style="left: 20px"
        ></div>

        <!-- ------- Name Your Sales Campaign -------- -->
        <div class="flex items-start w-full mt-14">
          <div
            class="
              z-20
              flex
              items-start
              order-1
              bg-primary
              w-4
              h-4
              mr-8
              ml-3
              mt-3
              rounded-full
            "
          >
            <h1 class="mx-auto font-semibold text-lg text-white"></h1>
          </div>
          <div class="order-2 flex-1">
            <div class="form-control">
              <label class="label">
                <span class="label-text text-secondary"
                  >Name Your Sales Campaign</span
                >
              </label>
              <input
                type="text"
                placeholder="Enter a campaign name"
                class="
                  input
                  bg-cGray
                  w-full
                  max-w-md
                  focus:outline-none
                  focus:ring-1 focus:ring-opacity-100 focus:ring-primary
                "
              />
            </div>
          </div>
        </div>

        <!-- --------- Integrate Lead Source --------- -->
        <div class="flex items-start w-full mt-14">
          <div
            class="
              z-20
              flex
              items-start
              order-1
              bg-primary
              w-4
              h-4
              mr-8
              ml-3
              mt-2
              rounded-full
            "
          >
            <h1 class="mx-auto font-semibold text-lg text-white"></h1>
          </div>
          <div class="flex flex-wrap items-center order-2 mb-3 w-full">
            <div class="order-1 w-full sm:w-auto flex-1">
              <h3 class="font-bold text-xl">Integrate Lead Source</h3>
            </div>
            <div class="order-2 w-full sm:w-auto ml-auto text-secondary">
              choose any one or all
            </div>
            <div
              class="
                order-3
                grid
                gap-5
                grid-flow-row
                sm:grid-flow-col
                grid-cols-1
                sm:grid-cols-3
                w-full
                mt-5
              "
            >
              <div class="border border-cGray rounded-lg p-6">
                <h2
                  class="
                    text-2xl text-tertiary
                    flex flex-wrap
                    items-center
                    mb-5
                  "
                >
                  <img
                    class="mr-3"
                    src="~/assets/icon/terminal.svg"
                    width="30"
                    height="24"
                    alt=""
                  />
                  Integrate your Landing Page
                </h2>
                <p class="text-tertiary mb-5">
                  Add the line of JavaScript code below to any lead capture form
                  on your website to send lead details to our 24x7 sales team.
                </p>
                <div class="rounded-lg p-4 bg-cGray text-tertiary">
                  <div class="overflow-hidden max-h-48">
                    <code class="font-code">
                      <textarea
                        name="javascript"
                        cols="30"
                        rows="10"
                        id="codeToCopy"
                        class="bg-cGray focus:outline-none"
                        readonly
                      >
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-69QJBHQR16"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-69QJBHQR16');
</script>
                      </textarea>
                    </code>
                  </div>
                </div>
                <a
                  href="#"
                  class="mt-3 inline-block text-primary font-bold"
                  v-on:click.prevent="copyCode()"
                >
                  <img
                    src="~/assets/icon/content-copy-round.svg"
                    class="mr-2 inline align-text-bottom"
                    alt=""
                  />Copy Code
                  <span
                    id="copySuccess"
                    class="
                      opacity-0
                      invisible
                      relative
                      left-5
                      transition-all
                      duration-300
                      ease-in-out
                      bg-cGray
                      rounded
                      font-normal
                      pt-1
                      pb-2
                      px-3
                    "
                    >Copyied</span
                  >
                </a>
              </div>
              <div class="border border-cGray rounded-lg p-6">
                <h2
                  class="
                    text-2xl text-tertiary
                    flex flex-wrap
                    items-center
                    mb-5
                  "
                >
                  <img
                    class="mr-3"
                    src="~/assets/icon/user.svg"
                    width="19"
                    height="22"
                    alt=""
                  />
                  Integrate your CRM
                </h2>
                <p class="text-tertiary mb-5">
                  Integrate your CRM by selecting your source of each lead so
                  that our 24x7 sales team has context.
                </p>
                <div class="text-secondary border-t border-cGray px-6 -mx-6">
                  <div class="flex">
                    <label for="crm_provider" class="flex-1 py-3"
                      >CRM Provider</label
                    >
                    <select
                      name="crm_provider"
                      id="crm_provider"
                      class="py-3 focus:outline-none appearance-none w-40 pr-5"
                    >
                      <option value="">Select</option>
                      <option value="hubspot">HubSpot</option>
                    </select>
                  </div>
                  <hr class="border-cGray -mx-6" />
                  <div class="flex">
                    <label for="lead_source" class="flex-1 py-3"
                      >Lead Source</label
                    >
                    <textarea
                      name="lead_source"
                      id="lead_source"
                      class="focus:outline-none text-right pt-3"
                      cols="20"
                      rows="8"
                      placeholder="Enter URL"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div
                class="
                  bg-cGray
                  rounded-lg
                  flex flex-col
                  justify-center
                  items-center
                  text-center
                  p-6
                "
              >
                <img
                  class="mb-5"
                  src="~/assets/icon/file-alt.svg"
                  width="40"
                  height="52"
                  alt=""
                />
                <h2 class="text-2xl text-tertiary mb-3">
                  Add lead capture form
                </h2>
                <p class="text-tertiary text-xl" style="max-width: 260px">
                  Coming soon a new easy way to capture leads on your website
                  24x7.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- ------ Tell Us About Your Product ------- -->
        <div class="flex items-start w-full mt-14">
          <div
            class="
              z-20
              flex
              items-start
              order-1
              bg-primary
              w-4
              h-4
              mr-8
              ml-3
              mt-2
              rounded-full
            "
          >
            <h1 class="mx-auto font-semibold text-lg text-white"></h1>
          </div>
          <div class="flex flex-wrap items-center order-2 mb-3 w-full">
            <div class="order-1 w-full sm:w-auto flex-1">
              <h3 class="font-bold text-xl mb-2">Tell Us About Your Product</h3>
              <p class="opacity-30 text-secondary max-w-2xl">
                Add as much information as you can here for your new sales team
                to learn about your product and the market. On the next screen,
                you will get to build a sales script.
              </p>
            </div>
            <div
              class="
                order-2
                w-full
                sm:w-auto
                mt-3
                sm:mt-0
                ml-auto
                text-secondary
              "
            >
              choose any one or all
            </div>
            <div
              class="
                order-3
                grid
                gap-5
                grid-flow-row
                sm:grid-flow-col
                grid-cols-1
                sm:grid-cols-3
                w-full
                mt-5
              "
            >
              <div
                class="
                  flex flex-col
                  items-start
                  border border-cGray
                  rounded-lg
                  px-6
                  py-6
                "
              >
                <h2
                  class="
                    text-2xl text-tertiary
                    flex flex-wrap
                    items-center
                    mb-5
                  "
                >
                  <img
                    class="mr-3"
                    src="~/assets/icon/terminal.svg"
                    width="30"
                    height="24"
                    alt=""
                  />
                  Upload Product Collateral
                </h2>
                <p class="text-tertiary mb-5">
                  Upload your product collateral and we will extract product
                  information from that.
                </p>
                <button
                  class="
                    btn btn-outline btn-primary
                    rounded-full
                    border-2
                    px-10
                  "
                >
                  Upload File
                </button>
              </div>
              <div
                class="
                  flex flex-col
                  items-start
                  border border-cGray
                  rounded-lg
                  px-6
                  py-6
                "
              >
                <h2
                  class="
                    text-2xl text-tertiary
                    flex flex-wrap
                    items-center
                    mb-5
                  "
                >
                  <img
                    class="mr-3"
                    src="~/assets/icon/user.svg"
                    width="19"
                    height="22"
                    alt=""
                  />
                  Product Knowledge Quiz
                </h2>
                <p class="text-tertiary mb-5">
                  Fill out our product knowledge quiz to capture key product and
                  market info
                </p>
                <button
                  class="
                    btn btn-outline btn-primary
                    rounded-full
                    border-2
                    px-10
                  "
                >
                  Take The Quiz
                </button>
              </div>
              <div
                class="flex flex-col border border-cGray rounded-lg px-6 py-6"
              >
                <h2
                  class="
                    text-2xl text-tertiary
                    flex flex-wrap
                    items-center
                    mb-5
                  "
                >
                  <img
                    class="mr-3"
                    src="~/assets/icon/tasks.svg"
                    width="19"
                    height="22"
                    alt=""
                  />
                  Add Products Manually
                </h2>
                <div
                  class="
                    text-secondary
                    border-t border-b border-cGray
                    px-6
                    -mx-6
                    mt-auto
                    -mb-6
                  "
                >
                  <div class="flex">
                    <label for="product_url" class="flex-1 py-3"
                      >Product URL</label
                    >
                    <input
                      name="product_url"
                      id="product_url"
                      class="focus:outline-none text-right"
                      type="text"
                      placeholder="Enter URL"
                    />
                  </div>
                  <hr class="border-cGray -mx-6" />
                  <div class="flex">
                    <label for="pricing" class="flex-1 py-3">Pricing</label>
                    <input
                      name="pricing"
                      id="pricing"
                      class="focus:outline-none text-right"
                      type="text"
                      placeholder="Enter amount"
                    />
                  </div>
                  <hr class="border-cGray -mx-6" />
                  <div class="flex">
                    <label for="crm_provider" class="flex-1 py-3"
                      >Transaction Process</label
                    >
                    <select
                      name="crm_provider"
                      id="crm_provider"
                      class="py-3 focus:outline-none appearance-none w-40 pr-5"
                    >
                      <option value="">Select</option>
                      <option value="hubspot">HubSpot</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ----- What is the outcome you want? ----- -->
        <div class="flex items-start w-full mt-14">
          <div
            class="
              z-20
              flex
              items-start
              order-1
              bg-primary
              w-4
              h-4
              mr-8
              ml-3
              mt-2
              rounded-full
            "
          >
            <h1 class="mx-auto font-semibold text-lg text-white"></h1>
          </div>
          <div class="flex flex-wrap items-center order-2 mb-14 w-full">
            <div class="order-1 flex-1">
              <div class="flex flex-col">
                <h3 class="font-bold text-xl mb-5">
                  What is the outcome you want?
                </h3>
                <div class="w-full flex flex-row flex-wrap">
                  <label
                    for="meeting"
                    class="btn btn-outline border-cGray hover:bg-cGray"
                  >
                    <div>
                      <input
                        id="meeting"
                        type="radio"
                        name="opt"
                        checked="checked"
                        class="radio"
                        value=""
                      />
                      <span class="radio-mark"></span>
                    </div>
                    <span class="label-text ml-3">Meeting</span>
                  </label>
                  <label
                    for="sales"
                    class="btn btn-outline border-cGray hover:bg-cGray ml-5"
                  >
                    <div>
                      <input
                        id="sales"
                        type="radio"
                        name="opt"
                        class="radio"
                        value=""
                      />
                      <span class="radio-mark"></span>
                    </div>
                    <span class="label-text ml-3">Sales</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="order-2 mt-5 sm:mt-0">
              <div class="alert alert-warning max-w-md">
                <div class="flex-1">
                  <img
                    width="24"
                    height="24"
                    src="~/assets/icon/info-outline-round.svg"
                    alt=""
                  />
                  <label class="ml-2"
                    >Complex or expensive products will require a meeting.
                    Simple or inexpensive products can be sold on the
                    phone</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <StepsFooter />
  </div>
</template>

<script>
export default {
  methods: {
    copyCode() {
      let copyToClip = document.getElementById("codeToCopy");
      copyToClip.select();
      try {
        var successfull = document.execCommand("copy");
        if (successfull === true) {
          var msg = document.querySelector("#copySuccess");
          msg.classList.remove("opacity-0", "invisible", "left-5");
          msg.classList.add("opacity-100", "visible", "left-1");
          setTimeout(() => {
            msg.classList.remove("opacity-100", "visible", "left-1");
            msg.classList.add("opacity-0", "invisible", "left-5");
          }, 3000);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
select {
  background: url("~/assets/icon/chevron-right-round.svg") no-repeat;
  background-position: calc(100% + 5px);
  background-size: 24px;
  text-align-last: right;
  direction: rtl;
}
</style>
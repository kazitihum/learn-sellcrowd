<template>
  <div>
    <NavBar />

    <div class="container mx-auto w-full h-full pt-14">
      <div class="relative wrap overflow-hidden h-full">
        <div class="flex flex-wrap item-center">
          <div class="z-20 flex items-center order-1 sm:order-1">
            <NuxtLink
              to="step-1"
              class="z-20 flex items-center order-1 bg-primary w-10 h-10 mr-5 rounded"
            >
              <h1 class="mx-auto font-semibold text-lg text-white">
                <img src="~/assets/icon/check-round.svg" alt="" />
              </h1>
            </NuxtLink>
            <div
              class="z-20 flex items-center order-2 w-10 h-10 mr-5 rounded"
              style="background-color: #ff5670"
            >
              <h1 class="mx-auto font-semibold text-lg text-white">2</h1>
            </div>
          </div>
          <h1
            class="text-3xl order-3 ml-14 sm:ml-0 -mb-24 mt-5 sm:mt-0 sm:order-2"
          >
            Design Your Sales Script
          </h1>
          <div class="flex order-2 sm:order-3 w-auto items-center ml-auto mb-0">
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
        <div
          class="sidebar-container relative flex flex-col sm:flex-row items-start justify-start h-full mt-28 sm:mt-14"
        >
          <div class="flex flex-1 h-full flex-col mr-0 sm:mr-10">
            <!-- -----------------  Intro ----------------- -->
            <div class="flex flex-1 flex-wrap items-start">
              <div
                class="z-20 flex items-start order-1 bg-primary w-4 h-4 mr-8 ml-3 mt-2 rounded-full"
              >
                <h1 class="mx-auto font-semibold text-lg text-white"></h1>
              </div>
              <div class="order-2 w-full sm:w-auto flex-1">
                <div class="mb-5">
                  <h3 class="font-bold text-xl">Intro</h3>
                  <p class="opacity-30 text-secondary mt-3">
                    Select an intro to greet the customer. Our sales reps will
                    make small talk if they respond, or not, depending on the
                    tone of the customer.
                  </p>
                </div>
                <div class="w-full">
                  <div class="border border-cGray rounded-lg p-3">
                    <div class="form-control">
                      <label class="cursor-pointer label justify-start">
                        <div>
                          <input
                            type="radio"
                            name="opt"
                            checked="checked"
                            class="radio"
                            value=""
                          />
                          <span class="radio-mark"></span>
                        </div>
                        <span class="label-text ml-3 font-bold leading-8"
                          >Hi <code>name</code> it's
                          <code>sales rep name</code> from
                          <code>company name</code> here. How are you doing
                          today?</span
                        >
                      </label>
                    </div>

                    <hr class="border-cGray -mx-3" />

                    <div class="form-control">
                      <label class="cursor-pointer label justify-start">
                        <div>
                          <input
                            type="radio"
                            name="opt"
                            checked=""
                            class="radio"
                            value=""
                          />
                          <span class="radio-mark"></span>
                        </div>
                        <span class="label-text ml-3 font-bold leading-8"
                          >Hi <code>name</code> it's
                          <code>sales rep name</code> here, have i cought you at
                          a bad time?</span
                        >
                      </label>
                    </div>

                    <hr class="border-cGray -mx-3" />

                    <a
                      href="#"
                      class="mt-3 flex items-center justify-center text-primary font-bold"
                      v-on:click.prevent
                      >View More
                      <img src="~/assets/icon/chevron-down-round.svg" alt="" />
                    </a>
                  </div>

                  <button
                    class="btn btn-outline btn-primary rounded-full border-2 px-10 mt-5"
                  >
                    Add Your Own
                  </button>
                </div>
              </div>
            </div>

            <!-- ---------- Nees and Relevence ----------- -->
            <div class="flex flex-1 flex-wrap items-start mt-14">
              <div
                class="z-20 flex items-start order-1 bg-primary w-4 h-4 mr-8 ml-3 mt-2 rounded-full"
              >
                <h1 class="mx-auto font-semibold text-lg text-white"></h1>
              </div>
              <div class="order-2 w-full sm:w-auto flex-1">
                <div class="mb-5">
                  <h3 class="font-bold text-xl">Needs and Relevance</h3>
                  <p class="opacity-30 text-secondary mt-3">
                    The most important part of the pitch. Here our sales reps
                    establish if the customer has a true need for your product.
                    Our sales reps know how to probe, and to ask things like
                    ‘and what makes you say that?’ to uncover true objectives
                    and deflect ‘smoke screen’ answers.
                  </p>
                </div>
                <div class="w-full">
                  <div class="border border-cGray rounded-lg p-3">
                    <div class="form-control">
                      <label class="cursor-pointer label justify-start">
                        <div>
                          <input
                            type="radio"
                            name="opt-2"
                            checked="checked"
                            class="radio"
                            value=""
                          />
                          <span class="radio-mark"></span>
                        </div>
                        <span class="label-text ml-3 font-bold leading-8"
                          >I noticed you
                          <code>action taken by the customer</code> so I wanted
                          to give you a quick call. What made you interested in
                          <code>action taken by the customer</code> today?</span
                        >
                      </label>
                    </div>

                    <hr class="border-cGray -mx-3" />

                    <div class="form-control">
                      <label class="cursor-pointer label justify-start">
                        <div>
                          <input
                            type="radio"
                            name="opt-2"
                            checked=""
                            class="radio"
                            value=""
                          />
                          <span class="radio-mark"></span>
                        </div>
                        <span class="label-text ml-3 font-bold leading-8"
                          >Hi <code>name</code> it's
                          <code>sales rep name</code> here, have i cought you at
                          a bad time?</span
                        >
                      </label>
                    </div>

                    <hr class="border-cGray -mx-3" />

                    <a
                      href="#"
                      class="mt-3 flex items-center justify-center text-primary font-bold"
                      v-on:click.prevent
                      >View More
                      <img src="~/assets/icon/chevron-down-round.svg" alt="" />
                    </a>
                  </div>

                  <button
                    class="btn btn-outline btn-primary rounded-full border-2 px-10 mt-5"
                  >
                    Add Your Own
                  </button>
                </div>
              </div>
            </div>

            <!-- ---------------- Budget ----------------- -->
            <div class="flex flex-1 flex-wrap items-start mt-14">
              <div
                class="z-20 flex items-start order-1 bg-primary w-4 h-4 mr-8 ml-3 mt-2 rounded-full"
              >
                <h1 class="mx-auto font-semibold text-lg text-white"></h1>
              </div>
              <div class="order-2 w-full sm:w-auto flex-1">
                <div class="mb-5">
                  <h3 class="font-bold text-xl">Budget</h3>
                  <p class="opacity-30 text-secondary mt-3">
                    The sales rep will get a sense from the customer of whether
                    they can afford the price of your product
                  </p>
                </div>
                <div class="w-full">
                  <div class="border border-cGray rounded-lg p-3">
                    <div class="form-control">
                      <label class="cursor-pointer label justify-start">
                        <div>
                          <input
                            type="radio"
                            name="opt-3"
                            checked="checked"
                            class="radio"
                            value=""
                          />
                          <span class="radio-mark"></span>
                        </div>
                        <span class="label-text ml-3 font-bold leading-8"
                          >The sales rep will get a sense from the customer of
                          whether they can afford the price of your product
                          <code>lowest price</code> , assuming it ticks all your
                          boxes, is that within your budget?</span
                        >
                      </label>
                    </div>

                    <hr class="border-cGray -mx-3" />

                    <div class="form-control">
                      <label class="cursor-pointer label justify-start">
                        <div>
                          <input
                            type="radio"
                            name="opt-3"
                            checked=""
                            class="radio"
                            value=""
                          />
                          <span class="radio-mark"></span>
                        </div>
                        <span class="label-text ml-3 font-bold leading-8"
                          >Our product only costs <code>price</code> Our product
                          only costs <code>price</code> it's</span
                        >
                      </label>
                    </div>

                    <hr class="border-cGray -mx-3" />

                    <a
                      href="#"
                      class="mt-3 flex items-center justify-center text-primary font-bold"
                      v-on:click.prevent
                      >View More
                      <img src="~/assets/icon/chevron-down-round.svg" alt="" />
                    </a>
                  </div>

                  <button
                    class="btn btn-outline btn-primary rounded-full border-2 px-10 mt-5"
                  >
                    Add Your Own
                  </button>
                </div>
              </div>
            </div>

            <!-- --------------- Authority --------------- -->
            <div class="flex flex-1 flex-wrap items-start mt-14">
              <div
                class="z-20 flex items-start order-1 bg-primary w-4 h-4 mr-8 ml-3 mt-2 rounded-full"
              >
                <h1 class="mx-auto font-semibold text-lg text-white"></h1>
              </div>
              <div class="order-2 w-full sm:w-auto flex-1">
                <div class="mb-5">
                  <h3 class="font-bold text-xl">Authority</h3>
                  <p class="opacity-30 text-secondary mt-3">
                    The sales rep will ask if the person on the phone can
                    authorize the purchase of the product, and get final
                    approval.
                  </p>
                </div>
                <div class="w-full">
                  <div class="border border-cGray rounded-lg p-3">
                    <div class="form-control mb-3">
                      <label class="cursor-pointer label justify-start">
                        <div>
                          <input
                            type="radio"
                            name="opt-4"
                            checked="checked"
                            class="radio"
                            value=""
                          />
                          <span class="radio-mark"></span>
                        </div>
                        <span class="label-text ml-3 font-bold"
                          >Do you need approval from anyone else for this
                          purchase? Or consensus? Are you convinced on a
                          personal level?</span
                        >
                      </label>
                    </div>

                    <hr class="border-cGray -mx-3" />

                    <a
                      href="#"
                      class="mt-3 flex items-center justify-center text-primary font-bold"
                      v-on:click.prevent
                      >View More
                      <img src="~/assets/icon/chevron-down-round.svg" alt="" />
                    </a>
                  </div>

                  <button
                    class="btn btn-outline btn-primary rounded-full border-2 px-10 mt-5"
                  >
                    Add Your Own
                  </button>
                </div>
              </div>
            </div>

            <!-- ---------------- Timing ----------------- -->
            <div class="flex flex-1 flex-wrap items-start mt-14">
              <div
                class="z-20 flex items-start order-1 bg-primary w-4 h-4 mr-8 ml-3 mt-2 rounded-full"
              >
                <h1 class="mx-auto font-semibold text-lg text-white"></h1>
              </div>
              <div class="order-2 w-full sm:w-auto flex-1">
                <div class="mb-5">
                  <h3 class="font-bold text-xl">Timing</h3>
                  <p class="opacity-30 text-secondary mt-3">
                    The sales rep will attempt to identify the timing that a
                    customer is considering purchasing / implementing your
                    product or service.
                  </p>
                </div>
                <div class="w-full">
                  <div class="border border-cGray rounded-lg p-3">
                    <div class="form-control mb-3">
                      <label class="cursor-pointer label justify-start">
                        <div>
                          <input
                            type="radio"
                            name="opt-5"
                            checked="checked"
                            class="radio"
                            value=""
                          />
                          <span class="radio-mark"></span>
                        </div>
                        <span class="label-text ml-3 font-bold"
                          >Is this something you are looking to implement
                          straight away?</span
                        >
                      </label>
                    </div>

                    <hr class="border-cGray -mx-3" />

                    <div class="form-control my-3">
                      <label class="cursor-pointer label justify-start">
                        <div>
                          <input
                            type="radio"
                            name="opt-5"
                            checked="checked"
                            class="radio"
                            value=""
                          />
                          <span class="radio-mark"></span>
                        </div>
                        <span class="label-text ml-3 font-bold"
                          >When are you planning to have this in place by?</span
                        >
                      </label>
                    </div>

                    <hr class="border-cGray -mx-3" />

                    <a
                      href="#"
                      class="mt-3 flex items-center justify-center text-primary font-bold"
                      v-on:click.prevent
                      >View More
                      <img src="~/assets/icon/chevron-down-round.svg" alt="" />
                    </a>
                  </div>

                  <button
                    class="btn btn-outline btn-primary rounded-full border-2 px-10 mt-5"
                  >
                    Add Your Own
                  </button>
                </div>
              </div>
            </div>

            <!-- ----------------- Close ----------------- -->
            <div class="flex flex-1 flex-wrap items-start my-14">
              <div
                class="z-20 flex items-start order-1 bg-primary w-4 h-4 mr-8 ml-3 mt-2 rounded-full"
              >
                <h1 class="mx-auto font-semibold text-lg text-white"></h1>
              </div>
              <div class="order-2 w-full sm:w-auto flex-1">
                <div class="mb-5">
                  <h3 class="font-bold text-xl">Close</h3>
                  <p class="opacity-30 text-secondary mt-3">
                    The sales reps will use the scripting and their sales skills
                    to secure an outcome – qualified meeting or sale won.
                  </p>
                </div>
                <div class="w-full">
                  <div class="border border-cGray rounded-lg p-3">
                    <div class="form-control">
                      <label class="cursor-pointer label justify-start">
                        <div>
                          <input
                            type="radio"
                            name="opt-6"
                            checked="checked"
                            class="radio"
                            value=""
                          />
                          <span class="radio-mark"></span>
                        </div>
                        <span class="label-text ml-3 font-bold leading-8"
                          >This sounds like it will be a great fit for you
                          <code>customer name</code> Can we book in a meeting
                          for tomorrow?</span
                        >
                      </label>
                    </div>

                    <hr class="border-cGray -mx-3" />

                    <div class="form-control mb-3">
                      <label class="cursor-pointer label justify-start">
                        <div>
                          <input
                            type="radio"
                            name="opt-6"
                            checked=""
                            class="radio"
                            value=""
                          />
                          <span class="radio-mark"></span>
                        </div>
                        <span class="label-text ml-3 font-bold leading-8"
                          >Do you have time for a video demo this week so we can
                          show you exactly how our product/service works?</span
                        >
                      </label>
                    </div>

                    <hr class="border-cGray -mx-3" />

                    <div class="form-control">
                      <label class="cursor-pointer label justify-start">
                        <div>
                          <input
                            type="radio"
                            name="opt-6"
                            checked=""
                            class="radio"
                            value=""
                          />
                          <span class="radio-mark"></span>
                        </div>
                        <span class="label-text ml-3 font-bold leading-8"
                          >Would you like to go ahead today with the purchase?
                          The cost is only <code>price</code></span
                        >
                      </label>
                    </div>

                    <hr class="border-cGray -mx-3" />

                    <a
                      href="#"
                      class="mt-3 flex items-center justify-center text-primary font-bold"
                      v-on:click.prevent
                      >View More
                      <img src="~/assets/icon/chevron-down-round.svg" alt="" />
                    </a>
                  </div>

                  <button
                    class="btn btn-outline btn-primary rounded-full border-2 px-10 mt-5"
                  >
                    Add Your Own
                  </button>
                </div>
              </div>
            </div>
          </div>
          <client-only>
            <vue-sticky-sidebar
              v-bind:topSpacing="30"
              v-bind:minWidth="640"
              class="sidebar flex-1 pl-14 sm:pl-0 w-full mb-14 sm:mb-0"
              containerSelector=".sidebar-container"
              innerWrapperSelector=".sidebar__inner"
            >
              <div class="rounded-lg p-4 bg-cGray text-tertiary w-full">
                <h3 class="font-bold text-xl mb-5">Script Preview</h3>
                <textarea
                  name="script"
                  class="w-full text-xl focus:outline-none bg-cGray"
                  readonly
                  rows="15"
                >
Hi John it’s Sam here from <company name>, how are you?

Terrific!

So what made you interested in downloading our ebook today?

Ah, interesting. And is this an area that you have been wanting to improve upon for a while?

Great. Are you in a position to purchase something today if our product is the right fit for you?

Okay, perfect. So is it okay to put down a deposit today? Do you have a credit card ready?
                </textarea>
              </div>
            </vue-sticky-sidebar>
          </client-only>
        </div>
      </div>
    </div>

    <div class="bg-primary">
      <div class="container mx-auto py-14">
        <div class="flex flex-wrap flex-col sm:flex-row items-center">
          <div class="flex flex-1 mb-5 sm:mb-0">
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
          <div class="flex flex-row items-center">
            <button
              class="btn btn-outline btn-white w-44 rounded-full border-2 border-white text-white mr-5"
            >
              Ship This Step
            </button>
            <button
              class="btn btn-outline btn-white w-44 rounded-full border-2 border-white text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spacing: 30,
      responsice: 640,
    };
  },
};
</script>

<style>
code {
  padding: 5px 10px;
  background-color: #eef1f8;
  border-radius: 0.5rem;
}
</style>
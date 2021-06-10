<template>
  <div>
    <NavBar />

    <div class="container mx-auto w-full h-full pt-14">
      <div class="relative wrap overflow-hidden h-full">
        <div class="flex flex-wrap item-center">
          <div class="z-20 flex items-center order-1 sm:order-1">
            <NuxtLink
              to="step-1"
              class="
                z-20
                flex
                items-center
                order-1
                bg-primary
                w-10
                h-10
                mr-5
                rounded
              "
            >
              <h1 class="mx-auto font-semibold text-lg text-white">
                <img src="~/assets/icon/check-round.svg" alt="" />
              </h1>
            </NuxtLink>
            <NuxtLink
              to="step-2"
              class="z-20 flex items-center order-2 w-10 h-10 mr-5 rounded"
              style="background-color: #ff5670"
            >
              <img class="mx-auto" src="~/assets/icon/check-round.svg" alt="" />
            </NuxtLink>
            <div
              class="z-20 flex items-center order-3 w-10 h-10 mr-5 rounded"
              style="background-color: #fdb400"
            >
              <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
          </div>
          <h1
            class="
              text-3xl
              order-3
              ml-14
              sm:ml-0
              -mb-24
              mt-5
              sm:mt-0
              sm:order-2
            "
          >
            Recruit Your Team
          </h1>
          <div class="flex order-2 sm:order-3 w-auto items-center ml-auto mb-0">
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
          class="
            relative
            flex flex-col
            sm:flex-row
            items-start
            justify-start
            h-full
            my-14
            sm:mt-14
          "
        >
          <div class="flex items-start w-full">
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
            <div
              class="
                flex flex-wrap
                justify-start
                items-center
                order-2
                mb-3
                w-full
              "
            >
              <div class="w-full sm:w-auto flex-1 mb-5">
                <h3 class="font-bold text-xl">
                  Select any of our candidates that look suitable
                </h3>
              </div>
              <div
                class="flex flex-wrap flex-col lg:flex-row items-start gap-10"
              >
                <div class="flex-1 border border-cGray rounded-lg">
                  <div
                    class="
                      order-1
                      flex flex-col
                      sm:flex-row
                      flex-wrap
                      w-full
                      box-border
                    "
                  >
                    <div class="content sm:w-1/3">
                      <input
                        id="user-1"
                        type="checkbox"
                        name="users"
                        class="hidden"
                      />
                      <label for="user-1">
                        <div class="text-tertiary p-6 border-cGray">
                          <img
                            class="mb-3"
                            src="~/assets/img/user-1.svg"
                            alt=""
                          />
                          <h4 class="mb-3 font-bold text-xl">Michael</h4>
                          <p class="text-tertiary">
                            25 years of experience in paper sales
                          </p>
                        </div></label
                      >
                    </div>
                    <div class="content sm:w-1/3">
                      <input
                        id="user-2"
                        type="checkbox"
                        name="users"
                        class="hidden"
                      />
                      <label for="user-2">
                        <div class="text-tertiary border-cGray p-6">
                          <img
                            class="mb-3"
                            src="~/assets/img/user-2.svg"
                            alt=""
                          />
                          <h4 class="mb-3 font-bold text-xl">Jim</h4>
                          <p class="text-tertiary">
                            Excellent communication skills
                          </p>
                        </div>
                      </label>
                    </div>
                    <div class="content sm:w-1/3">
                      <input
                        id="user-3"
                        type="checkbox"
                        name="users"
                        class="hidden"
                      />
                      <label for="user-3">
                        <div class="text-tertiary border-cGray p-6">
                          <img
                            class="mb-3"
                            src="~/assets/img/user-3.svg"
                            alt=""
                          />
                          <h4 class="mb-3 font-bold text-xl">Meredith</h4>
                          <p class="text-tertiary">
                            13 years of enterprise sales with Fortune100
                          </p>
                        </div>
                      </label>
                    </div>
                    <div class="content sm:w-1/3">
                      <input
                        id="user-4"
                        type="checkbox"
                        name="users"
                        class="hidden"
                      />
                      <label for="user-4">
                        <div class="text-tertiary border-cGray p-6">
                          <img
                            class="mb-3"
                            src="~/assets/img/user-4.svg"
                            alt=""
                          />
                          <h4 class="mb-3 font-bold text-xl">Dwight</h4>
                          <p class="text-tertiary">
                            For x is and overall diversity generati...
                          </p>
                        </div>
                      </label>
                    </div>
                    <div class="content sm:w-1/3">
                      <input
                        id="user-5"
                        type="checkbox"
                        name="users"
                        class="hidden"
                      />
                      <label for="user-5">
                        <div class="text-tertiary border-cGray p-6">
                          <img
                            class="mb-3"
                            src="~/assets/img/user-5.svg"
                            alt=""
                          />
                          <h4 class="mb-3 font-bold text-xl">Ryan</h4>
                          <p class="text-tertiary">
                            For information via overviews agile...
                          </p>
                        </div>
                      </label>
                    </div>
                    <div class="content sm:w-1/3">
                      <input
                        id="user-6"
                        type="checkbox"
                        name="users"
                        class="hidden"
                      />
                      <label for="user-6">
                        <div class="text-tertiary border-cGray p-6">
                          <img
                            class="mb-3"
                            src="~/assets/img/user-6.svg"
                            alt=""
                          />
                          <h4 class="mb-3 font-bold text-xl">Andrew</h4>
                          <p class="text-tertiary">
                            For table added information ensur...
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <hr class="border-cGray" />

                  <a
                    href="#"
                    class="
                      pt-3
                      flex
                      items-center
                      justify-center
                      text-primary
                      font-bold
                      pb-3
                    "
                    v-on:click.prevent
                    >View More
                    <img src="~/assets/icon/chevron-down-round.svg" alt="" />
                  </a>
                </div>
                <div class="flex-1 w-full order-2">
                  <div class="border border-cGray rounded-lg p-6">
                    <div
                      id="createJobInfo"
                      class="
                        content-1
                        visible
                        opacity-100
                        transition-all
                        duration-300
                        ease-in-out
                      "
                    >
                      <div class="flex flex-col-reverse sm:flex-row">
                        <div class="content flex-1">
                          <p class="text-2xl max-w-xs mb-3">
                            or build a job post to hire more candidates
                          </p>
                          <button
                            v-on:click="createJob()"
                            class="
                              btn btn-outline btn-primary
                              rounded-full
                              border-2
                              px-10
                              mt-5
                            "
                          >
                            Create A Job Post
                          </button>
                        </div>
                        <div class="content mb-3 sm:mb-0">
                          <img src="~/assets/icon/user-group-icon.svg" alt="" />
                        </div>
                      </div>
                    </div>
                    <div
                      id="create_a_job"
                      class="
                        content-2
                        hidden
                        opacity-0
                        transition-all
                        duration-300
                        ease-in-out
                      "
                    >
                      <a
                        href="#"
                        class="pt-3 flex text-primary font-bold pb-3"
                        v-on:click.prevent="backToInfo()"
                        ><img src="~/assets/icon/arrow-back-round.svg" alt="" />
                      </a>
                      <div class="input-1 mb-5">
                        <h3 class="font-bold text-xl mb-3">
                          Name three great things about working at your company
                        </h3>
                        <input
                          type="text"
                          placeholder="1. What makes the company good place to work"
                          class="
                            input
                            bg-cGray
                            w-full
                            text-base
                            focus:outline-none
                            focus:ring-1
                            focus:ring-opacity-100
                            focus:ring-primary
                            mb-3
                          "
                        />
                        <input
                          type="text"
                          placeholder="2. Mention about perks your company offers"
                          class="
                            input
                            bg-cGray
                            w-full
                            text-base
                            focus:outline-none
                            focus:ring-1
                            focus:ring-opacity-100
                            focus:ring-primary
                            mb-3
                          "
                        />
                        <input
                          type="text"
                          placeholder="3. Why the product is good"
                          class="
                            input
                            bg-cGray
                            w-full
                            text-base
                            focus:outline-none
                            focus:ring-1
                            focus:ring-opacity-100
                            focus:ring-primary
                            mb-3
                          "
                        />
                      </div>
                      <div class="input-2 mb-5">
                        <h3 class="font-bold text-xl mb-3">
                          Pick the qualities you most like to see in a
                          salesperson
                        </h3>
                        <div class="flex gap-3 flex-wrap">
                          <label
                            for="tenacious"
                            class="
                              btn btn-outline
                              border-tertiary
                              hover:bg-cGray
                              rounded-full
                            "
                          >
                            <div>
                              <input
                                id="tenacious"
                                type="checkbox"
                                name="opt"
                                checked="checked"
                                class="checkbox"
                                value=""
                              />
                              <span class="checkbox-mark"></span>
                            </div>
                            <span class="label-text capitalize ml-3"
                              >Tenacious</span
                            >
                          </label>
                          <label
                            for="hardworking"
                            class="
                              btn btn-outline
                              border-tertiary
                              hover:bg-cGray
                              rounded-full
                            "
                          >
                            <div>
                              <input
                                id="hardworking"
                                type="checkbox"
                                name="opt"
                                class="checkbox"
                                value=""
                              />
                              <span class="checkbox-mark"></span>
                            </div>
                            <span class="label-text capitalize ml-3"
                              >Hard Working</span
                            >
                          </label>
                          <label
                            for="diligent"
                            class="
                              btn btn-outline
                              border-tertiary
                              hover:bg-cGray
                              rounded-full
                            "
                          >
                            <div>
                              <input
                                id="diligent"
                                type="checkbox"
                                name="opt"
                                class="checkbox"
                                value=""
                              />
                              <span class="checkbox-mark"></span>
                            </div>
                            <span class="label-text capitalize ml-3"
                              >Diligent</span
                            >
                          </label>
                          <label
                            for="stms"
                            class="
                              btn btn-outline
                              border-tertiary
                              hover:bg-cGray
                              rounded-full
                            "
                          >
                            <div>
                              <input
                                id="stms"
                                type="checkbox"
                                name="opt"
                                class="checkbox"
                                value=""
                              />
                              <span class="checkbox-mark"></span>
                            </div>
                            <span class="label-text capitalize ml-3"
                              >Strong Time Management Skills</span
                            >
                          </label>
                          <label
                            for="friendly"
                            class="
                              btn btn-outline
                              border-tertiary
                              hover:bg-cGray
                              rounded-full
                            "
                          >
                            <div>
                              <input
                                id="friendly"
                                type="checkbox"
                                name="opt"
                                class="checkbox"
                                value=""
                              />
                              <span class="checkbox-mark"></span>
                            </div>
                            <span class="label-text capitalize ml-3"
                              >Friendly</span
                            >
                          </label>
                          <label
                            for="sba"
                            class="
                              btn btn-outline
                              border-tertiary
                              hover:bg-cGray
                              rounded-full
                            "
                          >
                            <div>
                              <input
                                id="sba"
                                type="checkbox"
                                name="opt"
                                class="checkbox"
                                value=""
                              />
                              <span class="checkbox-mark"></span>
                            </div>
                            <span class="label-text capitalize ml-3"
                              >Strong Business Acumen</span
                            >
                          </label>
                          <label
                            for="patp"
                            class="
                              btn btn-outline
                              border-tertiary
                              hover:bg-cGray
                              rounded-full
                            "
                          >
                            <div>
                              <input
                                id="patp"
                                type="checkbox"
                                name="opt"
                                class="checkbox"
                                value=""
                              />
                              <span class="checkbox-mark"></span>
                            </div>
                            <span class="label-text capitalize ml-3"
                              >Proven Ability To Prove</span
                            >
                          </label>
                          <label
                            for="organised"
                            class="
                              btn btn-outline
                              border-tertiary
                              hover:bg-cGray
                              rounded-full
                            "
                          >
                            <div>
                              <input
                                id="organised"
                                type="checkbox"
                                name="opt"
                                class="checkbox"
                                value=""
                              />
                              <span class="checkbox-mark"></span>
                            </div>
                            <span class="label-text capitalize ml-3"
                              >Organised</span
                            >
                          </label>
                          <label
                            for="selfmotivated"
                            class="
                              btn btn-outline
                              border-tertiary
                              hover:bg-cGray
                              rounded-full
                            "
                          >
                            <div>
                              <input
                                id="selfmotivated"
                                type="checkbox"
                                name="opt"
                                class="checkbox"
                                value=""
                              />
                              <span class="checkbox-mark"></span>
                            </div>
                            <span class="label-text capitalize ml-3"
                              >Self Motivated</span
                            >
                          </label>
                          <label
                            for="resilient"
                            class="
                              btn btn-outline
                              border-tertiary
                              hover:bg-cGray
                              rounded-full
                            "
                          >
                            <div>
                              <input
                                id="resilient"
                                type="checkbox"
                                name="opt"
                                class="checkbox"
                                value=""
                              />
                              <span class="checkbox-mark"></span>
                            </div>
                            <span class="label-text capitalize ml-3"
                              >Resilient</span
                            >
                          </label>
                        </div>
                      </div>
                      <div class="input-3 mb-5">
                        <h3 class="font-bold text-xl mb-3">
                          Anything else to add about the role or your company?
                        </h3>
                        <textarea
                          placeholder="Type more details to the job post"
                          class="
                            input
                            bg-cGray
                            w-full
                            h-24
                            text-base
                            focus:outline-none
                            focus:ring-1
                            focus:ring-opacity-100
                            focus:ring-primary
                            pt-3
                          "
                        />
                      </div>
                      <div class="ml-auto flex flex-row items-center">
                        <button
                          class="
                            btn btn-outline btn-primary
                            w-44
                            rounded-full
                            border-2
                            mr-5
                          "
                        >
                          Ship This Step
                        </button>
                        <button
                          class="btn btn-primary w-44 rounded-full border-2"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
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
    createJob() {
      let create_a_job = document.getElementById("create_a_job");
      let create_a_job_info = document.getElementById("createJobInfo");
      try {
        if (!create_a_job.classList.contains("visible")) {
          create_a_job.classList.remove("hidden", "opacity-0");
          create_a_job.classList.add("visible", "opacity-100");
          create_a_job_info.classList.remove("visible", "opacity-100");
          create_a_job_info.classList.add("hidden", "opacity-0");
        }
      } catch (err) {
        console.log(err);
      }
    },

    backToInfo() {
      let create_a_job = document.getElementById("create_a_job");
      let create_a_job_info = document.getElementById("createJobInfo");
      try {
        if (create_a_job.classList.contains("visible")) {
          create_a_job.classList.add("hidden", "opacity-0");
          create_a_job.classList.remove("visible", "opacity-100");
          create_a_job_info.classList.add("visible", "opacity-100");
          create_a_job_info.classList.remove("hidden", "opacity-0");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.box-border .content label div {
  border-width: 1px;
  border-style: solid;
  border-left-color: transparent;
  border-bottom-color: transparent;
  height: 100%;
  transition: all 0.2s ease-in-out;
}
.box-border .content:not(:nth-child(3n + 1)) label div {
  margin-left: -1px;
}
.box-border .content:not(:nth-child(-n + 3)) label div {
  margin-top: -1px;
  z-index: -1;
  position: relative;
}
.box-border .content:nth-child(-n + 3) label div {
  border-top-color: transparent;
}
.box-border .content:nth-child(3n) label div {
  border-right-color: transparent;
}
.box-border .content:nth-child(1) label div {
  border-top-left-radius: 0.5rem;
}
.box-border .content:nth-child(3) label div {
  border-top-right-radius: 0.5rem;
}
.box-border .content {
  position: relative;
}
.box-border .content label {
  display: block;
  cursor: pointer;
  height: 100%;
}
.content input:checked + label div {
  border: 1px solid #00005c !important;
  display: block;
}
.content input + label:after {
  content: "";
  width: 24px;
  height: 24px;
  background: url("~/assets/icon/check-circle-round.svg") no-repeat center/cover;
  display: block;
  position: absolute;
  right: 16px;
  top: 16px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
}
.content input:checked + label:after {
  opacity: 1;
}
</style>
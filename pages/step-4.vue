<template>
  <div>
    <NavBar />

    <div class="container mx-auto w-full h-full py-14">
      <div class="relative wrap overflow-hidden h-full">
        <div class="flex flex-wrap item-center mb-10">
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
              <img class="mx-auto" src="~/assets/icon/check-round.svg" alt="" />
            </NuxtLink>
            <NuxtLink
              to="step-2"
              class="z-20 flex items-center order-2 w-10 h-10 mr-5 rounded"
              style="background-color: #ff5670"
            >
              <img class="mx-auto" src="~/assets/icon/check-round.svg" alt="" />
            </NuxtLink>
            <NuxtLink
              to="step-3"
              class="z-20 flex items-center order-3 w-10 h-10 mr-5 rounded"
              style="background-color: #fdb400"
            >
              <img class="mx-auto" src="~/assets/icon/check-round.svg" alt="" />
            </NuxtLink>
            <div
              class="z-20 flex items-center order-4 w-10 h-10 mr-5 rounded"
              style="background-color: #464265"
            >
              <h1 class="mx-auto font-semibold text-lg text-white">4</h1>
            </div>
          </div>
          <h1 class="text-3xl order-2 mt-5 sm:mt-0 leading-normal">
            Interviews and Team Selection
          </h1>
          <div class="flex order-3 w-auto items-center ml-auto mb-0">
            <NuxtLink
              to="#"
              class="btn btn-outline btn-tertiary border-2 w-44 rounded-full"
              >Go To Profile</NuxtLink
            >
          </div>
        </div>

        <div class="border border-cGray rounded-lg p-6 mb-10">
          <div
            class="
              content-1
              visible
              opacity-100
              transition-all
              duration-300
              ease-in-out
            "
          >
            <div class="flex gap-10">
              <div class="content max-w-2xl flex-1">
                <h2 class="text-2xl font-normal mb-3">
                  You have completed all the steps. Now wait for us to find some
                  candidates for the job.
                </h2>
                <p class="text-xl mb-3">
                  We will inform you when we find some candidates that match
                  your job profile, and you can come back here and take some
                  actions.
                </p>
              </div>
              <div class="content ml-auto">
                <img src="~/assets/icon/complete.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="border border-cGray rounded-lg p-6 mb-10">
          <div
            class="
              content-1
              visible
              opacity-100
              transition-all
              duration-300
              ease-in-out
            "
          >
            <div class="flex gap-10">
              <div class="content max-w-2xl flex-1">
                <h2 class="text-2xl font-normal mb-3">
                  Review your applications
                </h2>
                <p class="text-xl mb-3">
                  We have received some applications which you can review and
                  take some actions.
                </p>
              </div>
              <div class="content ml-auto">
                <img src="~/assets/icon/complete.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="w-full sm:w-auto mb-5">
          <h3 class="font-bold text-xl">Job Applications</h3>
        </div>

        <div class="border border-cGray rounded-lg">
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
            <div class="content relative sm:w-1/4">
              <input id="user-1" type="checkbox" name="users" class="hidden" />
              <label for="user-1">
                <div class="text-tertiary p-6 border-cGray">
                  <img class="mb-3" src="~/assets/img/user-7.svg" alt="" />
                  <h4 class="mb-3 font-bold text-xl">Gladys</h4>
                  <p class="text-tertiary mb-3">
                    Will is test operational derive is end workplace grow
                    seamless keepin...
                  </p>
                  <a
                    href=""
                    v-on:click.prevent
                    class="view-profile font-bold text-primary align-middle"
                    >View Profile</a
                  >
                </div></label
              >
              <div class="btn-group gap-3 absolute top-6 right-5 z-20">
                <button class="check relative"></button>
                <button class="delete"></button>
                <button class="more"></button>
              </div>
            </div>
            <div class="content sm:w-1/4">
              <input id="user-2" type="checkbox" name="users" class="hidden" />
              <label for="user-2">
                <div class="text-tertiary border-cGray p-6">
                  <img class="mb-3" src="~/assets/img/user-8.svg" alt="" />
                  <h4 class="mb-3 font-bold text-xl">Claire</h4>
                  <p class="text-tertiary mb-3">
                    Will is test operational derive is end workplace grow
                    seamless keepin...
                  </p>
                  <a
                    href=""
                    v-on:click.prevent
                    class="view-profile font-bold text-primary align-middle"
                    >View Profile</a
                  >
                </div>
              </label>
              <div class="btn-group gap-3 absolute top-6 right-5 z-20">
                <button class="check relative"></button>
                <button class="delete"></button>
                <button class="more"></button>
              </div>
            </div>
            <div class="content sm:w-1/4">
              <input id="user-3" type="checkbox" name="users" class="hidden" />
              <label for="user-3">
                <div class="text-tertiary border-cGray p-6">
                  <img class="mb-3" src="~/assets/img/user-9.svg" alt="" />
                  <h4 class="mb-3 font-bold text-xl">Tanya</h4>
                  <p class="text-tertiary mb-3">
                    Will is test operational derive is end workplace grow
                    seamless keepin...
                  </p>
                  <a
                    href=""
                    v-on:click.prevent
                    class="view-profile font-bold text-primary align-middle"
                    >View Profile</a
                  >
                </div>
              </label>
              <div class="btn-group gap-3 absolute top-6 right-5 z-20">
                <button class="check relative"></button>
                <button class="delete"></button>
                <button class="more"></button>
              </div>
            </div>
            <div class="content sm:w-1/4">
              <input id="user-4" type="checkbox" name="users" class="hidden" />
              <label for="user-4">
                <div class="text-tertiary border-cGray p-6">
                  <img class="mb-3" src="~/assets/img/user-10.svg" alt="" />
                  <h4 class="mb-3 font-bold text-xl">Lily</h4>
                  <p class="text-tertiary mb-3">
                    Will is test operational derive is end workplace grow
                    seamless keepin...
                  </p>
                  <a
                    href=""
                    v-on:click.prevent
                    class="view-profile font-bold text-primary align-middle"
                    >View Profile</a
                  >
                </div>
              </label>
              <div class="btn-group gap-3 absolute top-6 right-5 z-20">
                <button class="check relative"></button>
                <button class="delete"></button>
                <button class="more"></button>
              </div>
            </div>
            <div class="content sm:w-1/4">
              <input id="user-5" type="checkbox" name="users" class="hidden" />
              <label for="user-5">
                <div class="text-tertiary border-cGray p-6">
                  <img class="mb-3" src="~/assets/img/user-11.svg" alt="" />
                  <h4 class="mb-3 font-bold text-xl">Regina</h4>
                  <p class="text-tertiary mb-3">
                    Will is test operational derive is end workplace grow
                    seamless keepin...
                  </p>
                  <a
                    href=""
                    v-on:click.prevent
                    class="view-profile font-bold text-primary align-middle"
                    >View Profile</a
                  >
                </div>
              </label>
              <div class="btn-group gap-3 absolute top-6 right-5 z-20">
                <button class="check relative"></button>
                <button class="delete"></button>
                <button class="more"></button>
              </div>
            </div>
            <div class="content disabled sm:w-1/4">
              <input id="user-6" type="checkbox" name="users" class="hidden" />
              <label for="user-6">
                <div class="text-tertiary border-cGray p-6">
                  <img class="mb-3" src="~/assets/img/user-12.svg" alt="" />
                  <h4 class="mb-3 font-bold text-xl">Jane</h4>
                  <p class="text-tertiary mb-3">
                    Will is test operational derive is end workplace grow
                    seamless keepin...
                  </p>
                  <a
                    href=""
                    v-on:click.prevent
                    class="view-profile font-bold text-primary align-middle"
                    >View Profile</a
                  >
                </div>
              </label>
              <div class="btn-group gap-3 absolute top-6 right-5 z-20">
                <button class="check relative"></button>
                <button class="delete"></button>
                <button class="more"></button>
              </div>
            </div>
            <div class="content disabled sm:w-1/4">
              <input id="user-7" type="checkbox" name="users" class="hidden" />
              <label for="user-7">
                <div class="text-tertiary border-cGray p-6">
                  <img class="mb-3" src="~/assets/img/user-13.svg" alt="" />
                  <h4 class="mb-3 font-bold text-xl">Savannah</h4>
                  <p class="text-tertiary mb-3">
                    Will is test operational derive is end workplace grow
                    seamless keepin...
                  </p>
                  <a
                    href=""
                    v-on:click.prevent
                    class="view-profile font-bold text-primary align-middle"
                    >View Profile</a
                  >
                </div>
              </label>
              <div class="btn-group gap-3 absolute top-6 right-5 z-20">
                <button class="check relative"></button>
                <button class="delete"></button>
                <button class="more"></button>
              </div>
            </div>
            <div class="content sm:w-1/4">
              <input id="user-8" type="checkbox" name="users" class="hidden" />
              <label for="user-8">
                <div class="text-tertiary border-cGray p-6">
                  <img class="mb-3" src="~/assets/img/user-14.svg" alt="" />
                  <h4 class="mb-3 font-bold text-xl">Irma</h4>
                  <p class="text-tertiary mb-3">
                    Will is test operational derive is end workplace grow
                    seamless keepin...
                  </p>
                  <a
                    href=""
                    v-on:click.prevent
                    class="view-profile font-bold text-primary align-middle"
                    >View Profile</a
                  >
                </div>
              </label>
              <div class="btn-group gap-3 absolute top-6 right-5 z-20">
                <button class="check relative"></button>
                <button class="delete"></button>
                <button class="more"></button>
              </div>
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
      </div>
    </div>

    <StepsFooter />
  </div>
</template>

<script>
export default {};
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
.box-border .content:not(:nth-child(4n + 1)) label div {
  margin-left: -1px;
}
.box-border .content:not(:nth-child(-n + 4)) label div {
  margin-top: -1px;
  z-index: -1;
  position: relative;
}
.box-border .content:nth-child(-n + 4) label div {
  border-top-color: transparent;
}
.box-border .content:nth-child(4n) label div {
  border-right-color: transparent;
}
.box-border .content:nth-child(1) label div {
  border-top-left-radius: 0.5rem;
}
.box-border .content:nth-child(4) label div {
  border-top-right-radius: 0.5rem;
}
.box-border .content,
.view-profile {
  position: relative;
}
.box-border .content label {
  display: block;
  cursor: pointer;
  height: 100%;
}
.content:not(.disabled) input:checked + label div {
  border: 1px solid #00005c !important;
  display: block;
}
.content .btn-group .check {
  pointer-events: none;
}
.content.disabled label div > * {
  opacity: 0.2;
}
.content .btn-group .check:after,
.content:not(.disabled) .btn-group .check:after,
.content:not(.disabled) .btn-group .check:hover:after,
.content .btn-group .delete:after,
.content .btn-group .delete:hover:after,
.content .btn-group .more:after,
.content .btn-group .more:hover:after,
.content input:checked ~ .btn-group .check,
.view-profile:after {
  content: "";
  width: 24px;
  height: 24px;
  display: inline-block;
  mask-image: url(~/assets/icon/check-circle-outline-round.svg);
  background-color: #3c50e0;
  transition: all 0.2s ease-in-out;
}
.content .btn-group .check:hover:after,
.content:not(.disabled) input:checked ~ .btn-group .check {
  mask-image: url(~/assets/icon/check-circle-round.svg);
  background-color: #3c50e0;
}
.content.disabled .btn-group .check:after,
.content.disabled input:checked ~ .btn-group .check {
  opacity: 0.2;
  transition: none;
}
.content .btn-group .delete:after {
  mask-image: url(~/assets/icon/cancel-outlined.svg);
  background-color: #ff5670;
}
.content .btn-group .delete:hover:after {
  mask-image: url(~/assets/icon/cancel-round.svg);
  background-color: #ff5670;
}
.content .btn-group .more:after {
  mask-image: url(~/assets/icon/more-vert.svg);
  background-color: #00005c;
}
.content .btn-group .more:hover:after {
  mask-image: url(~/assets/icon/more-vert.svg);
  background-color: #5a698d;
}
.view-profile:after {
  mask-image: url(~/assets/icon/info-outline-round.svg);
  background-color: #3c50e0;
  vertical-align: top;
  margin-left: 5px;
}
</style>
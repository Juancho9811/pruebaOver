<script setup>
import IconAleatory from "@/components/icons/IconAleatory.vue";
import { ref, onMounted } from "vue";

const player = ref(false);
const player1 = ref(false);

const actionOpen = async () => {
  player.value = true;
};

const pruebaOpen = async () => {
  player1.value = true;
};
</script>
<template>
  <div
    v-if="!player && !player1"
    class="bg-[url('./img/fondo.jpg')] max-w-xs bg-cover bg-no-repeat bg-center rounded-xl"
  >
    <div class="multi-bg-example p-5 rounded-xl grid content-end min-h-500">
      <div class="text-white text-4xl pr-20">Enjoy your favorite music</div>
      <div class="flex pt-6 pb-4">
        <button
          @click="actionOpen"
          class="grow text-xs font-semibold rounded-full bg-music-btn-green text-music-text-btn-green py-3"
        >
          Get Started
        </button>
      </div>
      <div class="flex mb-6">
        <button
          @click="pruebaOpen"
          class="grow border-2 border-music-border-btn-green text-xs font-semibold rounded-full bg-music-background text-music-text-border-green py-3"
        >
          Continue with Email
        </button>
      </div>
      <div class="text-music-text-silver text-xs1 text-center px-10">
        By continuing you agree to the Terms of Service & Privacy Policy
      </div>
    </div>
  </div>

  <div
    v-if="player1 == true"
    class="bg-music-background max-w-xs p-6 rounded-xl grid content-end min-h-500 mt-5"
  >
    <div class="flex justify-between items-center">
      <button>
        <icon-start class="text-music-text-silver cursor-pointer"></icon-start>
      </button>
      <icon-heart></icon-heart>
    </div>
    <div>
      <div class="flex justify-center mb-4">
        <img src="../../assets/img/fondo.jpg" class="w-50" />
      </div>
      <div class="text-white text-2xl text-center">Eternal Chains</div>
      <div class="text-music-text-silver text-center">Animal</div>
    </div>
    <div class="mt-10">
      <div class="bg-music-btn-green rounded-xl h-1"></div>
      <div class="flex justify-between mt-2">
        <div class="text-music-text-silver text-xs">2:53</div>
        <div class="text-music-text-silver text-xs">4:47</div>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div class="cursor-pointer">
        <IconAleatory></IconAleatory>
      </div>
      <div class="cursor-pointer"><icon-left></icon-left></div>
      <div class="cursor-pointer"><icon-pause></icon-pause></div>
      <div class="cursor-pointer"><icon-right></icon-right></div>
      <div class="cursor-pointer"><icon-repeat></icon-repeat></div>
    </div>
    <div>
      <div class="text-music-text-silver text-xs text-center mt-6">Lyrics</div>
      <div class="flex justify-center mt-1"><icon-below></icon-below></div>
    </div>
  </div>

  <!-- Contenedor principal -->
  <div
    v-if="player == true"
    class="bg-black max-w-xs rounded-3xl grid content-end min-h-[500px] mt-5 text-white"
  >
    <div class="relative mb-6">
      <div class="rounded-lg p-1 relative overflow-hidden">
        <div
          class="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"
        ></div>
        <img
          src="../../assets/img/fondo-fot.jpg"
          alt="Artist performing on stage"
          class="w-full h-[200px] object-cover brightness-90 rounded-lg"
        />
        <div class="absolute bottom-0 left-0 right-0 z-20 p-4">
          <h1 class="text-3xl font-bold drop-shadow-lg mb-3">Guns and Roses</h1>
          <button
            class="w-2/5 bg-music-btn-green text-music-text-btn-green py-2.5 rounded-full hover:bg-emerald-500 transition font-semibold text-sm"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>

    <div class="px-4 space-y-6 mb-6">
      <div>
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center gap-2">
            <IconMusic></IconMusic>

            <h2 class="text-lg font-bold justify-items-start">Discography</h2>
          </div>
          <button class="text-sm text-music-text-silver">View all</button>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div class="space-y-2">
            <div class="aspect-square rounded-xl p-0.5 overflow-hidden">
              <img
                src="../../assets/img/fondo.jpg"
                alt="Paint It Album Cover"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div class="px-0.5">
              <p class="text-sm font-medium">Paint It</p>
              <p class="text-xs text-music-text-silver">2021</p>
            </div>
          </div>

          <div class="space-y-2">
            <div class="aspect-square rounded-xl p-0.5 overflow-hidden">
              <img
                src="../../assets/img/fondo.jpg"
                alt="Inside Out Album Cover"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div class="px-0.5">
              <p class="text-sm font-medium">Inside Out</p>
              <p class="text-xs text-music-text-silver">2018</p>
            </div>
          </div>

          <div class="space-y-2">
            <div class="aspect-square rounded-xl p-0.5 overflow-hidden">
              <img
                src="../../assets/img/fondo.jpg"
                alt="Ani Album Cover"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div class="px-0.5">
              <p class="text-sm font-medium">Ani</p>
              <p class="text-xs text-music-text-silver">2017</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center gap-2">
            <icon-star></icon-star>

            <h2 class="text-lg font-bold">Popular singles</h2>
          </div>
          <button class="text-sm text-music-text-silver">View all</button>
        </div>

        <div class="space-y-2">
          <div class="flex items-center gap-3 p-2.5 rounded-xl cursor-pointer">
            <div class="rounded-xl p-0.5">
              <img
                src="../../assets/img/fondo.jpg"
                alt="King Of Screens Cover"
                class="w-12 h-12 object-cover rounded-lg"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium">King Of Screens</p>
              <p class="text-xs text-music-text-silver">Single • 2023</p>
            </div>
            <button class="p-1.5 hover:bg-music-btn-green rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>
          </div>

          <div class="flex items-center gap-3 p-2.5 rounded-xl cursor-pointer">
            <div class="rounded-xl p-0.5">
              <img
                src="../../assets/img/fondo.jpg"
                alt="5 Seconds Befores Cover"
                class="w-12 h-12 object-cover rounded-lg"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium truncate">5 Seconds Befores</p>
              <p class="text-xs text-music-text-silver">Single • 2023</p>
            </div>
            <button class="p-1.5 hover:bg-music-btn-green rounded-full">
              <icon-opcion></icon-opcion>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

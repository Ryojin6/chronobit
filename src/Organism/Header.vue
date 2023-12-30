<template>
  <header
    class="custom-transition fixed inset-x-0 z-40 flex w-full flex-shrink-0 items-center justify-between border-black bg-a-charcoal px-3 py-4 lg:px-10"
    :class="[{ open: toggled }, { 'border-b-8': !homepage }]"
  >
    <div
      class="custom-transition bottom-6 left-6 flex w-1/3 items-center space-x-4"
    >
      <AtomIconTwitter
        link="https://twitter.com/ChronoBitNYC"
        class="w-8 text-a-beige hover:text-black md:block"
      />
      <AtomIconDiscord
        link="https://discord.gg/v5dNZGe6"
        class="w-8 text-a-beige hover:text-black md:block"
      />
      <AtomIconLinkedin
        link="https://www.linkedin.com/in/shanimizrahi/"
        class="w-8 text-a-beige hover:text-black md:block"
      />
    </div>
    <div class="w-1/3">
      <g-link
        to="/"
        class="mx-auto block w-16 text-white transition-all duration-300 ease-in-out scrolled:w-64 xl:w-64"
      >
        <svg
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 246.11 56.3"
          class="fill-current stroke-current"
        >
          <g id="Layer_1-2" data-name="Layer 1">
            <g>
              <path
                class="cls-1"
                d="m18.71,36.02c-2.69,0-5.17-.43-7.46-1.29-2.28-.86-4.26-2.08-5.93-3.67-1.67-1.59-2.97-3.46-3.91-5.61-.94-2.15-1.41-4.53-1.41-7.12s.47-4.96,1.41-7.12c.94-2.15,2.24-4.02,3.91-5.61,1.67-1.59,3.64-2.81,5.93-3.67s4.77-1.29,7.46-1.29c3.14,0,5.95.55,8.43,1.65,2.48,1.1,4.54,2.69,6.2,4.76l-6.12,5.54c-1.1-1.29-2.31-2.28-3.62-2.96-1.31-.68-2.78-1.02-4.4-1.02-1.39,0-2.67.23-3.84.68-1.17.45-2.16,1.11-2.99,1.97-.83.86-1.47,1.89-1.94,3.09-.47,1.2-.7,2.53-.7,3.98s.23,2.79.7,3.98c.47,1.2,1.12,2.23,1.94,3.09.83.86,1.82,1.51,2.99,1.97,1.17.45,2.45.68,3.84.68,1.62,0,3.09-.34,4.4-1.02,1.31-.68,2.52-1.67,3.62-2.96l6.12,5.54c-1.65,2.04-3.72,3.62-6.2,4.74-2.48,1.12-5.29,1.68-8.43,1.68Z"
              />
              <polygon
                class="cls-1"
                points="73.81 1.35 73.81 35.31 64.2 35.31 64.2 22.07 51.1 22.07 51.1 35.31 41.5 35.31 41.5 1.35 51.1 1.35 51.1 14.11 64.2 14.11 64.2 1.35 73.81 1.35"
              />
              <path
                class="cls-1"
                d="m108.06,24.62c2.06-.97,3.66-2.33,4.82-4.08,1.22-1.86,1.84-4.07,1.84-6.63s-.62-4.83-1.84-6.72c-1.23-1.89-2.98-3.34-5.22-4.34-2.25-1-4.92-1.51-8.03-1.51h-15.54v33.97h9.61v-9.03h5.24l6.16,9.03h10.28l-7.34-10.7Zm-14.35-1.34l-.51-.53.51-.49v1.02Zm0-14.36h5.33c2.01,0,3.51.43,4.49,1.3.99.88,1.48,2.11,1.48,3.69s-.49,2.76-1.48,3.65c-.98.87-2.48,1.3-4.49,1.3h-5.33v-9.94Z"
              />
              <path
                class="cls-1"
                d="m139.9,36.66c-2.82,0-5.42-.45-7.81-1.36s-4.46-2.19-6.22-3.85c-1.76-1.66-3.13-3.6-4.1-5.82-.97-2.22-1.46-4.65-1.46-7.3s.49-5.09,1.46-7.3c.97-2.22,2.34-4.15,4.1-5.82,1.76-1.66,3.83-2.95,6.22-3.85s4.99-1.36,7.81-1.36,5.46.45,7.83,1.36c2.37.91,4.42,2.19,6.17,3.85,1.74,1.66,3.11,3.6,4.1,5.82s1.49,4.65,1.49,7.3-.5,5.09-1.49,7.33c-.99,2.23-2.36,4.17-4.1,5.82-1.75,1.65-3.8,2.92-6.17,3.83-2.37.91-4.98,1.36-7.83,1.36Zm0-8.26c1.34,0,2.59-.23,3.75-.71,1.16-.47,2.17-1.15,3.02-2.04.86-.89,1.53-1.95,2.01-3.2.49-1.24.73-2.62.73-4.13s-.24-2.93-.73-4.15-1.16-2.28-2.01-3.17-1.86-1.57-3.02-2.04c-1.16-.47-2.41-.71-3.75-.71s-2.59.24-3.75.71c-1.16.47-2.17,1.15-3.02,2.04s-1.53,1.95-2.01,3.17-.73,2.61-.73,4.15.24,2.89.73,4.13c.49,1.24,1.16,2.31,2.01,3.2.86.89,1.86,1.57,3.02,2.04,1.16.47,2.41.71,3.75.71Z"
              />
              <polygon
                class="cls-1"
                points="200.23 1.35 200.23 35.31 192.32 35.31 177.33 17.21 177.33 35.31 167.92 35.31 167.92 1.35 175.82 1.35 190.81 19.45 190.81 1.35 200.23 1.35"
              />
              <path
                class="cls-1"
                d="m227.05,36.17c-2.74,0-5.28-.44-7.6-1.32s-4.34-2.13-6.05-3.75c-1.72-1.62-3.05-3.5-3.99-5.66-.95-2.16-1.42-4.53-1.42-7.11s.47-4.95,1.42-7.11c.95-2.16,2.28-4.04,3.99-5.66,1.72-1.62,3.73-2.87,6.05-3.75s4.85-1.32,7.6-1.32,5.32.44,7.62,1.32c2.3.88,4.3,2.13,6,3.75,1.7,1.62,3.03,3.5,3.99,5.66s1.45,4.53,1.45,7.11-.48,4.96-1.45,7.13c-.96,2.17-2.3,4.06-3.99,5.66-1.7,1.6-3.7,2.84-6,3.72-2.3.88-4.84,1.32-7.62,1.32Zm0-8.04c1.31,0,2.52-.23,3.65-.69,1.13-.46,2.11-1.12,2.94-1.98.83-.86,1.49-1.9,1.96-3.11.47-1.21.71-2.55.71-4.02s-.24-2.85-.71-4.04-1.13-2.22-1.96-3.09-1.81-1.53-2.94-1.98c-1.13-.46-2.34-.69-3.65-.69s-2.52.23-3.65.69c-1.13.46-2.11,1.12-2.94,1.98s-1.49,1.9-1.96,3.09-.71,2.54-.71,4.04.24,2.81.71,4.02c.47,1.21,1.13,2.25,1.96,3.11.83.87,1.81,1.53,2.94,1.98,1.13.46,2.34.69,3.65.69Z"
              />
              <rect
                class="cls-1"
                x=".66"
                y="46.44"
                width="187.45"
                height="9.86"
              />
              <path
                class="cls-1"
                d="m201.38,51.52c-.22-.33-.52-.58-.89-.75-.1-.05-.2-.09-.3-.12.32-.17.58-.4.78-.7.2-.32.31-.7.31-1.15,0-.66-.27-1.19-.79-1.59-.53-.39-1.3-.59-2.31-.59h-3.93v8.4h4.17c1.09,0,1.91-.2,2.46-.6.55-.4.83-.96.83-1.68,0-.49-.11-.9-.33-1.22Zm-5.57-3.68h2.2c.55,0,.97.1,1.26.29.29.19.44.49.44.88s-.15.67-.44.86c-.29.19-.71.29-1.26.29h-2.2v-2.32Zm3.86,5.67c-.31.19-.76.29-1.34.29h-2.52v-2.43h2.52c.58,0,1.03.1,1.34.3.31.19.47.5.47.91s-.16.74-.47.93Z"
              />
              <path class="cls-1" d="m206.31,55.02v-8.4h1.56v8.4h-1.56Z" />
              <path
                class="cls-1"
                d="m214.91,55.02v-7.08h-2.78v-1.32h7.13v1.32h-2.78v7.08h-1.56Z"
              />
            </g>
          </g>
        </svg>
      </g-link>
    </div>

    <div class="z-[999] flex w-1/3 justify-end">
      <button class="focus:outline-none block" @click="toggled = !toggled">
        <AtomIconHamburger :class="[{ open: toggled }, 'homepage']" />
      </button>
    </div>

    <nav>
      <ul class="menu flex flex-col items-center justify-center text-center">
        <AtomMenuItem
          title="Lorem ipsum"
          anchor="/"
          @toggled="toggled = false"
        />
        <AtomMenuItem
          title="Lorem ipsum"
          anchor="/"
          @toggled="toggled = false"
        />
        <AtomMenuItem
          title="Lorem ipsum"
          anchor="/"
          @toggled="toggled = false"
        />
        <AtomMenuItem
          title="Lorem ipsum"
          anchor="/"
          @toggled="toggled = false"
        />
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    homepage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      toggled: false,
      open: false,
    };
  },
};
</script>

<style media="screen">
nav {
  @apply fixed left-0 z-10 h-full w-full overflow-hidden;

  top: -100%;

  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

nav:before {
  content: '';
  @apply absolute inset-0 m-auto h-0 w-full overflow-hidden rounded-full bg-[#1b1b1b];

  padding-bottom: 100%;

  transform: scale(0.04), translateY(9999px);
}

.open nav {
  @apply top-0;
}

.open nav:before {
  animation: menu-animation 0.8s ease-out forwards;
}

ul.menu {
  @apply fixed top-1/2 left-1/2 text-white;
  transform: translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  perspective: 1000;
}

ul.menu a {
  @apply text-center opacity-0;
  transform: translate3d(0, 36px, 0);
}

ul.menu a:before {
  content: '';
  @apply absolute inset-0 left-auto m-auto h-full w-0 overflow-hidden bg-white;

  transition: width 0.14s ease-out;
}

ul.menu a:after {
  @apply absolute right-0 left-0 bottom-0 m-auto overflow-hidden text-gray-800 opacity-0;

  content: attr(data-text);

  transform: translate(-24px, 6px);
  transition: transform 0.1s ease-out, opacity 0.1s ease-out;
}

.open ul.menu a {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
}

.open ul.menu a:nth-child(1) {
  transition-delay: 0.75s;
}

.open ul.menu a:nth-child(2) {
  transition-delay: 0.85s;
}

.open ul.menu a:nth-child(3) {
  transition-delay: 0.95s;
}

.open ul.menu a:nth-child(4) {
  transition-delay: 1.05s;
}

.open ul.menu a:nth-child(5) {
  transition-delay: 1.15s;
}

.open ul.menu a:nth-child(6) {
  transition-delay: 1.25s;
}

.open ul.menu a:nth-child(7) {
  transition-delay: 1.35s;
}

.open ul.menu a:nth-child(8) {
  transition-delay: 1.45s;
}

.open ul.menu a:nth-child(9) {
  transition-delay: 1.55s;
}
.open ul.menu a:nth-child(10) {
  transition-delay: 1.65s;
}
.open ul.menu a:nth-child(11) {
  transition-delay: 1.75s;
}
.open ul.menu a:nth-child(12) {
  transition-delay: 1.85s;
}

.open article {
  transform: scale(0.92);
  transition: transform 0.2s 0.41s ease-out;
}

@keyframes menu-animation {
  0% {
    opacity: 0;
    transform: scale(0.04) translateY(300%);
  }

  40% {
    transform: scale(0.04) translateY(0);
    transition: ease-out;
  }

  40% {
    transform: scale(0.04) translateY(0);
  }

  60% {
    opacity: 1;
    transform: scale(0.02) translateY(0px);
  }

  61% {
    transform: scale(0.04);
  }

  99.9% {
    height: 0;
    padding-bottom: 100%;
    border-radius: 100%;
  }

  100% {
    transform: scale(2);
    height: 100%;
    padding-bottom: 0;
    border-radius: 0;
  }
}
#logo .cls-1 {
  fill: #000;
}
#logo .cls-1,
#logo .cls-2,
#logo .cls-3,
#logo .cls-4 {
  stroke-width: 0px;
}
#logo .cls-2 {
  fill: #000;
}
#logo .cls-3 {
  fill: #fff;
}
#logo .cls-4 {
  fill: #fff;
}
</style>

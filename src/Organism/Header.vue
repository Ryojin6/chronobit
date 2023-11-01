<template>
  <header
    class="custom-transition fixed inset-x-0 z-40 flex w-full flex-shrink-0 items-center justify-between border-black px-3 py-4 scrolled:bg-a-charcoal lg:px-10"
    :class="[{ open: toggled }, { 'border-b-8': !homepage }]"
  >
    <div
      class="custom-transition bottom-6 left-6 flex w-1/3 items-center space-x-4"
    >
      <AtomIconTwitter
        link="#"
        class="w-8 text-a-beige hover:text-black md:block"
      />
      <AtomIconDiscord
        link="#"
        class="w-8 text-a-beige hover:text-black md:block"
      />
      <AtomIconLinkedin
        link="#"
        class="w-8 text-a-beige hover:text-black md:block"
      />
    </div>
    <div class="w-1/3">
      <g-link
        to="/"
        class="mx-auto block w-16 text-white transition-all duration-300 ease-in-out scrolled:w-64 xl:w-64"
      >
        <svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 247.03 55.2"
        >
          <g>
            <path
              class="cls-3"
              d="m93.96,55.11c-29.64,0-59.28-.07-88.91.09C1.14,55.22.02,54.19,0,50.21c-.02-4.12,1.41-4.93,5.18-4.92,59.11.1,118.22.09,177.33,0,3.54,0,5.43.43,5.39,4.79-.04,4.31-1.51,5.13-5.51,5.11-29.47-.17-58.94-.09-88.42-.09Z"
            />
            <path
              class="cls-4"
              d="m178.38,17.9c0,4.26-.16,8.53.05,12.78.2,4.2-2.67,3.23-5.03,3.39-2.64.18-4.42-.13-4.33-3.6.21-8.31.02-16.63.14-24.95.02-1.64-1.08-4.2,1.39-4.7,2.61-.52,5.6-1.28,7.82,1.48,3.54,4.4,7.17,8.74,10.79,13.08.5.59.91,1.41,2.6,1.21,0-4.13.19-8.38-.05-12.61-.25-4.19,2.62-3.28,4.96-3.48,2.69-.23,4.39.22,4.31,3.64-.2,8.31,0,16.63-.11,24.95-.02,1.63,1.13,4.24-1.35,4.69-2.58.47-5.56,1.33-7.81-1.46-4.01-4.99-8.17-9.85-12.26-14.77-.37.12-.73.24-1.1.35Z"
            />
            <path
              class="cls-4"
              d="m115.64,33.46c-6.83,1.95-11.22.22-13.81-5.55-1-2.22-2.79-3.23-5.25-2.72-2.83.59-1.74,3-1.59,4.44.44,4.16-1.72,4.42-5.03,4.52-3.72.12-4.9-.99-4.78-4.76.28-8.3.2-16.61.03-24.91-.06-3.06.98-4.17,4.01-4,5.13.29,10.29-.37,15.41.53,4.75.83,8.57,3.08,10.05,7.82,1.54,4.92.89,9.73-3.45,13.08-2.1,1.63-1.67,2.71-.44,4.39,1.63,2.23,3.1,4.56,4.84,7.15Z"
            />
            <path
              class="cls-4"
              d="m141.7,34.59c-10.75.04-18.71-7.34-18.65-17.3C123.1,7.25,130.99-.06,141.72,0c10.54.06,18.21,7.19,18.33,17.06.12,10.15-7.57,17.49-18.35,17.53Z"
            />
            <path
              class="cls-4"
              d="m228.66.02c10.81.11,18.39,7.29,18.36,17.39-.03,10.03-7.86,17.28-18.57,17.19-10.73-.09-18.49-7.42-18.42-17.41.07-10.01,7.96-17.29,18.62-17.18Z"
            />
            <path
              class="cls-4"
              d="m74.61,17.33c0,3.82.01,7.64,0,11.46-.02,4.79-3.57,7.01-8.1,5.15-.92-.38-1.29-.95-1.35-1.83-.05-.83-.04-1.66-.05-2.49-.15-9-.15-8.89-9.17-8.66-2.75.07-4.03.83-3.76,3.7.14,1.48-.14,3.01.07,4.48.59,4-1.07,5.21-4.97,5.01-2.94-.15-4.56-.46-4.46-4.04.24-8.63.22-17.28.01-25.91-.08-3.35,1.43-3.96,4.21-3.71,2.5.22,5.74-.75,5.21,3.72-.1.82,0,1.66,0,2.49q.02,6.45,6.36,6.45c6.43,0,6.65,0,6.42-7.74-.12-3.97,1.15-5.03,5.04-5.04,3.96-.02,4.82,1.47,4.59,5-.26,3.97-.06,7.97-.06,11.96h.02Z"
            />
            <path
              class="cls-3"
              d="m21.31.03c2.52-.06,5.68.5,8.35,2.28,1.68,1.12,5.38,1.89,3.61,4.7-1.41,2.25-3.49,5.87-7.81,2.31-3.52-2.9-8.94-1.7-11.77,1.52-2.88,3.28-3.04,9.07-.35,12.52,2.75,3.53,7.83,4.31,12.21,2.07,1.37-.7,2.2-2.94,4.62-1.12,4.59,3.46,4.64,5.15-.41,8-6.64,3.74-16.41,2.86-22.06-1.97C2.35,25.76.39,17.94,2.9,11.23,5.6,4.02,12.21-.16,21.31.03Z"
            />
            <path
              class="cls-1"
              d="m94.9,12.55c-.46-2.86.09-4.86,4.01-4.54,3.56.28,7,.58,6.88,5.13-.13,4.62-3.92,4.47-7.26,4.8-4.38.44-3.68-2.56-3.63-5.39Z"
            />
            <path
              class="cls-2"
              d="m141.65,7.9c5.19.05,8.81,3.87,8.85,9.35.04,5.37-3.68,9.41-8.73,9.48-5.39.08-9.16-3.93-9.05-9.61.11-5.5,3.75-9.26,8.94-9.21Z"
            />
            <path
              class="cls-2"
              d="m219.72,17.19c.08-5.54,3.68-9.33,8.85-9.31,5.32.02,9.13,4.2,8.92,9.79-.2,5.34-4.15,9.27-9.16,9.11-5.14-.16-8.69-4.12-8.6-9.59Z"
            />
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

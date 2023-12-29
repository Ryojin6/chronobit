<template>
  <div class="relative w-full">
    <hooper
      ref="carousel"
      class="focus:outline-none h-full"
      :wheel-control="false"
      :infinite-scroll="true"
      :settings="hooperSettings"
      @slide="updateCarousel"
    >
      <slide> <img src="/1.jpg" class="w-full" alt="" /> </slide>
      <slide> <img src="/2.jpg" class="w-full" alt="" /> </slide>
      <slide> <img src="/3.jpg" class="w-full" alt="" /> </slide>
      <slide> <img src="/4.jpg" class="w-full" alt="" /> </slide>
    </hooper>

    <div
      class="md:pin-y-center absolute bottom-0 mx-auto w-full md:bottom-auto"
    >
      <div class="flex items-center justify-between">
        <button @click.prevent="slidePrev">
          <AtomIconNext class="rotate-180 transform" inverted />
        </button>

        <button type="button" @click.prevent="slideNext">
          <AtomIconNext class=" " inverted />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },

  data() {
    return {
      carouselData: 0,

      hooperSettings: {
        itemsToShow: 1,
        autoPlay: true,
        centerMode: true,
        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 1,
          },
          1000: {
            itemsToShow: 1,
            pagination: 'fraction',
          },
        },
      },
    };
  },
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData);
    },
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    },
  },
};
</script>

<style media="screen">
.hooper {
  height: 100%;
}
.hooper-indicator {
  @apply border-2 border-solid border-white bg-transparent;
}
.hooper-pagination {
  @apply py-2;
}
.hooper-indicator:hover,
.hooper-indicator.is-active {
  @apply border-white bg-white;
}
.hooper-indicator {
  @apply h-3 w-3 rounded-full;
}
</style>

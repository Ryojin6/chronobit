<template>
  <div class="bg-[#1b1b1b] font-sans text-xl text-white">
    <a href="#content" class="sr-only text-blue-600 focus:not-sr-only">
      Skip to main content
    </a>
    <AtomIeBanner />

    <div class="relative z-20">
      <OrganismHeader :homepage="homepage" />
      <div id="content" />
      <slot />
    </div>
    <!-- <video
      class="fixed top-0 left-0 z-10 h-full w-full object-cover opacity-50"
      autoplay
      muted
      loop
    >
      <source
        src="https://player.vimeo.com/progressive_redirect/playback/868792896/rendition/1080p/file.mp4?loc=external&signature=212e0af0c6cac27adf77f53fc4151e8c16de0471b967066298e313162c96996e"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video> -->
  </div>
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
      elementVisible: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.elementVisible = false;
    }, 2000);
  },
};
</script>

<template>
  <transition name="fade">
    <div
      v-show="elementVisible"
      class="relative z-50 h-screen w-full overflow-hidden bg-black"
    >
      <!-- <video
        class="absolute top-0 left-0 h-full w-full object-cover"
        autoplay
        muted
        loop
      >
        <source
          src="https://player.vimeo.com/progressive_redirect/playback/868616142/rendition/1080p/file.mp4?loc=external&signature=5d1b50fab49e47454be4b1c06ce5795279265a5b05ee20c55cee260afd93aced"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> -->
      <img src="/fix.svg" alt="" />
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      elementVisible: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.elementVisible = false;
    }, 4000);
  },
};
</script>

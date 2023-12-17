<template>
  <TemplateDefault class="mx-auto overflow-x-hidden" homepage>
    <AtomSection
      bp="large"
      class="relative flex items-center justify-center text-center font-mono font-bold"
      full-width
    >
      <OrganismSlider />
    </AtomSection>
    <AtomSection
      lg="large"
      bp="large"
      class="relative flex items-center justify-center text-center font-mono"
      full-width
    >
      <AtomAnimate>
        <figure class="mx-auto max-w-4xl">
          <blockquote
            class="font-display text-neutral-950 relative text-3xl font-medium tracking-tight sm:text-4xl"
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium quas autem aspernatur possimus deserunt. Mollitia
              iusto pariatur, eum facilis alias officia vero dignissimos, odio
              eius deserunt reprehenderit recusandae provident fuga.
            </p>
          </blockquote>
          <cite> ShaniMiz </cite>
        </figure>
      </AtomAnimate>
    </AtomSection>
    <OrganismPackages />
    <AtomSection
      id="about"
      tp="large"
      bp="large"
      class="bg-lab-navy justify-between text-white md:flex md:space-x-20 xl:space-x-32"
    >
      <div class="md:w-1/3 md:text-left">
        <MoleculeTitle class="md:text-left" title="Loremipsum anamet" />
      </div>
      <div class="space-y-10 text-center md:w-2/3">
        <AtomAnimate
          position="right"
          class="border-lab-orange flex flex-col justify-center space-y-2 border-b border-opacity-50 pb-6 text-8xl text-white md:flex-row md:justify-start md:space-y-0 xl:pb-10 xl:text-9xl 2xl:text-[10rem]"
        >
          <span class="outline">120+</span>
          <span
            class="font-machina text-lab-pink text-2xl uppercase 2xl:text-3xl"
            >Lorem ipsum, dolor sit amet consectetur
          </span>
        </AtomAnimate>
        <AtomAnimate
          position="right"
          class="border-lab-orange flex flex-col justify-center space-y-2 border-b border-opacity-50 pb-6 text-8xl text-white md:flex-row md:justify-start md:space-y-0 xl:pb-10 xl:text-9xl 2xl:text-[10rem]"
        >
          <span class="outline">2m+</span>
          <span
            class="font-machina text-lab-pink text-2xl uppercase 2xl:text-3xl"
            >Lorem ipsum, dolor sit amet consectetur</span
          >
        </AtomAnimate>
        <AtomAnimate
          position="right"
          class="border-lab-orange flex flex-col justify-center space-y-2 border-b border-opacity-50 pb-6 text-8xl text-white md:flex-row md:justify-start md:space-y-0 xl:pb-10 xl:text-9xl 2xl:text-[10rem]"
        >
          <span class="outline">300+</span>
          <span
            class="font-machina text-lab-pink text-2xl uppercase 2xl:text-3xl"
            >Lorem ipsum, dolor sit amet consectetur
          </span>
        </AtomAnimate>
        <AtomAnimate
          position="right"
          class="border-lab-orange flex flex-col justify-center space-y-2 border-b border-opacity-50 pb-6 text-8xl text-white md:flex-row md:justify-start md:space-y-0 xl:pb-10 xl:text-9xl 2xl:text-[10rem]"
        >
          <span class="outline">$20m+</span>
          <span
            class="font-machina text-lab-pink text-2xl uppercase 2xl:text-3xl"
            >Lorem ipsum, dolor sit amet consectetur</span
          >
        </AtomAnimate>
      </div>
    </AtomSection>
    <OrganismTestimonials id="testimonials" class="" />

    <AtomSection id="team" tp="large" bp="large" class="bg-lab-navy">
      <MoleculeTitle title="Who We Are" class="text-white" />
      <AtomInner class="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
        <AtomAnimate
          position="left"
          class="shadow-white bg-lab-navy rounded-3xl font-bold text-white shadow-2xl transition-all duration-1000 ease-in-out xl:p-10"
        >
          <div class="flex flex-col items-center py-10 text-center">
            <div class="mx-auto mb-10 h-48 w-48 rounded-full bg-a-beige" />
            <h4 class="textMedium text-lab-pink">Shani</h4>
            <div class="textSmall pt-4">CEO, Co-Founder</div>
            <AtomIconTwitter
              link="#"
              class="text-lab-pink hover:text-lab-lightpink mt-5"
            />
          </div>
        </AtomAnimate>
        <AtomAnimate
          position="left"
          class="shadow-white bg-lab-navy rounded-3xl font-bold text-white shadow-2xl transition-all duration-1000 ease-in-out xl:p-10"
        >
          <div class="flex flex-col items-center py-10 text-center">
            <div class="mx-auto mb-10 h-48 w-48 rounded-full bg-a-beige" />
            <h4 class="textMedium text-lab-pink">Lala</h4>
            <div class="textSmall pt-4">CTO</div>
            <AtomIconTwitter
              link="#"
              class="text-lab-pink hover:text-lab-lightpink mt-5"
            />
          </div>
        </AtomAnimate>
        <AtomAnimate
          position="left"
          class="shadow-white bg-lab-navy rounded-3xl font-bold text-white shadow-2xl transition-all duration-1000 ease-in-out xl:p-10"
        >
          <div class="flex flex-col items-center py-10 text-center">
            <div class="mx-auto mb-10 h-48 w-48 rounded-full bg-a-beige" />
            <h4 class="textMedium text-lab-pink">Loremipsum</h4>
            <div class="textSmall pt-4">CMO, Partner</div>
            <AtomIconTwitter
              link=""
              class="text-lab-pink hover:text-lab-lightpink mt-5"
            />
          </div>
        </AtomAnimate>
        <AtomAnimate
          position="left"
          class="shadow-white bg-lab-navy rounded-3xl font-bold text-white shadow-2xl transition-all duration-1000 ease-in-out xl:p-10"
        >
          <div class="flex flex-col items-center py-10 text-center">
            <div class="mx-auto mb-10 h-48 w-48 rounded-full bg-a-beige" />
            <h4 class="textMedium text-lab-pink">Ryojin</h4>
            <div class="textSmall pt-4">Head Web Developer</div>
            <AtomIconTwitter link="https://twitter.com/Ryojn6" class="mt-5" />
          </div>
        </AtomAnimate>
      </AtomInner>
    </AtomSection>
    <AtomSection
      tp="large"
      bp="large"
      class="bg-lab-pink flex h-screen items-center justify-center overflow-hidden"
    >
      <AtomInner class="relative">
        <AtomAnimate
          class="relative z-10 mx-auto h-full max-w-5xl"
          position="left"
        >
          <h2 class="textXLarge relative z-10 font-bold uppercase text-black">
            All you <br />have to do
            <span class="font-machina block">is say hey!</span>
          </h2>
          <AtomAnimate class="mt-10 flex w-full items-center space-x-6">
            <a href="#_" class="group relative inline-block text-lg">
              <span
                class="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white"
              >
                <span
                  class="absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3"
                />
                <span
                  class="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180"
                />
                <span class="relative">Discord</span>
              </span>
              <span
                class="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              />
            </a>
            <a href="#_" class="group relative inline-block text-lg">
              <span
                class="relative z-10 block overflow-hidden rounded-lg border-2 border-gray-900 px-5 py-3 font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out group-hover:text-white"
              >
                <span
                  class="absolute inset-0 h-full w-full rounded-lg bg-gray-50 px-5 py-3"
                />
                <span
                  class="ease absolute left-0 -ml-2 h-48 w-48 origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-gray-900 transition-all duration-300 group-hover:-rotate-180"
                />
                <span class="relative">Twitter</span>
              </span>
              <span
                class="absolute bottom-0 right-0 -mb-1 -mr-1 h-12 w-full rounded-lg bg-gray-900 transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              />
            </a>
          </AtomAnimate>
        </AtomAnimate>
        <div
          v-aos
          class="pin-y-center absolute right-10 h-[70rem] w-[70rem] rounded-full transition-all duration-[2000ms] ease-in-out"
          aos-from="opacity-0 shadow-xl"
          aos-to="opacity-100 shadow-none  bg-a-beige"
        >
          <div
            class="pin-center absolute mx-auto h-[35rem] w-[35rem] rounded-full bg-[#1b1b1b]"
          />
        </div>
      </AtomInner>
    </AtomSection>
  </TemplateDefault>
</template>

<script>
import { VueTyper } from '~/vue-typer';

export default {
  components: {
    VueTyper,
  },
  props: {
    homepage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedPopup: '',
      toggle: true,
      isClicked: false,
      mounted: false,
      slogans: ['Builders', 'Traders', 'Web3 Advisor', 'Problem Solvers.'],
      services: [
        {
          image: '/1.svg',
          title: 'Lorem ipsum',
        },
        {
          image: '/1.svg',
          title: 'Lorem ipsum',
        },
        {
          image: '/1.svg',
          title: 'Lorem ipsum',
        },
        {
          image: '/1.svg',
          title: 'Lorem ipsum',
        },
      ],
      whatWeDo: [
        {
          title: 'Lorem ipsum',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Necessitatibus aspernatur, repudiandae numquam praesentium, 
           perspiciatis voluptatum ea ad accusamus nihil hic, optio amet quae 
           reiciendis assumenda quo enim quidem nisi? Quo.`,
        },
        {
          title: 'Lorem ipsum',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Necessitatibus aspernatur, repudiandae numquam praesentium, 
           perspiciatis voluptatum ea ad accusamus nihil hic, optio amet quae 
           reiciendis assumenda quo enim quidem nisi? Quo.`,
        },
        {
          title: 'Lorem ipsum',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Necessitatibus aspernatur, repudiandae numquam praesentium, 
           perspiciatis voluptatum ea ad accusamus nihil hic, optio amet quae 
           reiciendis assumenda quo enim quidem nisi? Quo.`,
        },
        {
          title: 'Lorem ipsum',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Necessitatibus aspernatur, repudiandae numquam praesentium, 
           perspiciatis voluptatum ea ad accusamus nihil hic, optio amet quae 
           reiciendis assumenda quo enim quidem nisi? Quo.`,
        },
        {
          title: 'Lorem ipsum',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Necessitatibus aspernatur, repudiandae numquam praesentium, 
           perspiciatis voluptatum ea ad accusamus nihil hic, optio amet quae 
           reiciendis assumenda quo enim quidem nisi? Quo.`,
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.waitLittleBit = false;
    }, 3000);
    this.mounted = true;
  },
};
</script>

<style>
span.char.custom.typed {
  @apply !font-title !font-black uppercase;
}
.strokeText {
  -webkit-text-fill-color: #1f2223; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: white;
}
.strokeText:hover {
  -webkit-text-fill-color: #fff;
}
.breathIn {
  box-shadow: 0px 1px 1px #f00;
  animation: breathing 3s linear infinite;
}
@keyframes breathing {
  0% {
    box-shadow: 0px 1px 1px #f00;
  }
  50% {
    box-shadow: 0px 1px 25px #f00;
  }
}
#home {
  clip-path: url(#cache);
}

#red {
  fill: none;
  opacity: 0.15;
  stroke: #ce1b5f;
  stroke-width: 12;
  stroke-miterlimit: 10;
  animation: show 4s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

#blue {
  fill: none;
  opacity: 0.15;
  stroke: #06a1c4;
  stroke-width: 12;
  stroke-miterlimit: 10;
  animation: show 4s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

#light-blue {
  fill: none;
  opacity: 0.15;
  stroke: #06a1c4;
  stroke-width: 6;
  stroke-miterlimit: 10;
  stroke-dasharray: 200;
  stroke-dashoffset: 800;
  animation: draw 4s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes show {
  0% {
    opacity: 0.15;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.15;
  }
}
</style>

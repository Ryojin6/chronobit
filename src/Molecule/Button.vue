<template>
  <a href="#" class="btn">
    <svg width="277" height="62">
      <defs>
        <linearGradient id="grad1">
          <stop offset="0%" stop-color="#ff884c " />
          <stop offset="100%" stop-color="#fefdd3" />
        </linearGradient>
      </defs>
      <rect
        x="5"
        y="5"
        rx="25"
        fill="none"
        stroke="url(#grad1)"
        width="266"
        height="50"
      />
    </svg>
    <!--<span>Voir mes réalisations</span>-->
    <span>Learn more</span>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
.btn {
  position: relative;
  display: inline-block;
  width: 277px;
  height: 50px;
  font-size: 1em;
  font-weight: bold;
  line-height: 60px;
  text-align: center;
  text-transform: uppercase;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 17px;
  letter-spacing: 0.045em;
}

.btn svg {
  position: absolute;
  top: 0;
  left: 0;
}

.btn svg rect {
  //stroke: #EC0033;
  stroke-width: 4;
  stroke-dasharray: 353, 0;
  stroke-dashoffset: 0;
  -webkit-transition: all 600ms ease;
  transition: all 600ms ease;
}

.btn span {
  background: rgb(255, 130, 130);

  background: linear-gradient(
    to right,
    rgba(255 136 76) 0%,
    rgb(254 253 211) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefdd3', endColorstr='#ff884c',GradientType=1 );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn:hover svg rect {
  stroke-width: 4;
  stroke-dasharray: 196, 543;
  stroke-dashoffset: 437;
}
</style>

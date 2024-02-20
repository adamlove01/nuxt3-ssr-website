<template>
  <div>
    <div class="terminal">
      <div class="top-bar">
        <div class="image"></div>
      </div>
      <div class="d-flex">
        <div class="body">
          <div class="blue monospace">
            <span class="green">➜</span> <span class="blue"> nuxt3 </span>
            <span class="green">{{ title }}</span>
          </div>

          <div class="blue monospace mt-n1">
            <span class="green">➜</span> <span class="blue"> nuxt3 </span>
            <span class="green"
              >{{ subTitle }}<span class="blink">█</span></span
            >
          </div>
        </div>

        <div class="scroll"><div class="image"></div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  subTitle: {
    type: String,
  },
})
</script>

<style lang="scss" scoped>
@import 'styles.scss';

.terminal {
  display: none;
  background: #010000;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: -2px 12px 44px -11px rgba(11, 38, 71, 0.75);

  .top-bar {
    height: 28px;
    width: 100%;
    background-color: white;

    .image {
      height: 28px;
      background: url(/img/terminal-top-bar.png) top left no-repeat;
      background-size: contain;
    }
  }

  .body {
    padding: 2px 20px 40px 6px;
    font-size: 14px;
    font-weight: 500;

    .green {
      color: #6bf549;
    }
    .blue {
      color: #60b8c6;
    }
  }

  .scroll {
    width: 15px;
    height: auto;
    background-color: white;

    .image {
      height: 28px;
      background: url(/img/terminal-scroll.png) top center no-repeat;
      background-size: contain;
    }
  }
}

.blink {
  animation: blinker 1s step-start infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>

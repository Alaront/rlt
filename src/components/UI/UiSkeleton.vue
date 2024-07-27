<template>
  <div class="skeleton" :style="{ width: width, height: height, borderRadius: radius }"></div>
</template>

<script setup lang="ts">
  interface Props {
    width: string,
    height: string,
    radius: string
  }

  defineProps<Props>()

</script>

<style scoped lang="scss">

@keyframes move-bg {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.skeleton {
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, #3C3C3C 0%, #333333 100%);

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    background: linear-gradient(90deg, rgba(60, 60, 60, 0.09) 0%, #444444 51.04%, rgba(51, 51, 51, 0.2) 100%);
    animation: move-bg 3s infinite;
  }

  .white & {
    background: linear-gradient(90deg, #828181 0%, #8b8686 100%);

    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-100%);
      background: linear-gradient(90deg, rgba(130, 129, 129, 0.47) 0%, #a09797 51.04%, rgba(139, 134, 134, 0.56) 100%);

    }
  }
}


</style>

<template>
  <div class="area">
    <ul :class="['circles', { init, hangup }]">
      <li v-for="i in 13" :key="i"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Random } from './help'

defineOptions({ name: 'Circles' })

const init = ref(false)
const hangup = ref(false)

onMounted(() => {
  document.querySelectorAll<HTMLElement>('.circles li').forEach((li) => {
    // 每轮动画迭代结束时触发，此时方块恰好在透明度 0 的不可见位置，
    // 在此处重排尺寸与位置不会有视觉跳变，也无需定时器去对齐动画时钟
    li.addEventListener('animationiteration', () => {
      const wh = Random(150, 15)
      li.style.width = `${wh}px`
      li.style.height = `${wh}px`
      li.style.left = `${Random(95, 5)}%`
    })
  })
  init.value = true

  document.addEventListener('visibilitychange', () => {
    hangup.value = document.hidden
  })
})
</script>

<style lang="less">
.area {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &.init {
    li {
      animation: animate 25s linear infinite;
    }
  }
  // 浏览器被挂起时暂停动画
  &.hangup {
    li {
      animation-play-state: paused;
    }
  }
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(124,184,235,20%);
  bottom: -160px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
}


.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-duration: 14s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-duration: 29s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-duration: 26s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-duration: 28s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-duration: 32s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-duration: 60s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-duration: 37s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-duration: 11s;
}

.circles li:nth-child(11) {
  left: 10%;
  width: 50px;
  height: 50px;
  animation-duration: 22s;
}

.circles li:nth-child(12) {
  left: 95%;
  width: 60px;
  height: 60px;
  animation-duration: 33s;
}

.circles li:nth-child(13) {
  left: 22%;
  width: 30px;
  height: 30px;
  animation-duration: 44s;
}



@keyframes animate {

  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-120vh) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }

}
</style>

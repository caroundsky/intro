<template>
  <div class="intro-container" h-screen w-screen> 
    <h3 text-center>Hi there，I'm caroundsky 👋</h3>
    <p text-center >
      <strong>Languages and Tools:</strong>
      <span>
        <code style="margin-left: 0.4em"><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" /></code>
        <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" /></code>
        <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png" /></code>
        <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" /></code>
      </span>
    </p>

    <div :class="['skill-list', { init }]" mxa>
      <h2 style="position: relative; left: -12px">Skills:</h2>
      <ul>
        <li class="skill-list-item" v-for="(item, index) in skillList" :key="index">
          <span class="v-mid">{{ item.name }}</span> 
          <p class="v-mid" :style="`--width-percent: ${item.percent}%`" />
        </li>
      </ul>
    </div>

    <div :class="['project-list', { init }]" mxa>
      <h2 style="position: relative; left: -12px">Projects:</h2>
      <!-- <ul>
        <li class="skill-list-item" v-for="(item, index) in skillList" :key="index">
          <span class="v-mid">{{ item.name }}</span> 
          <p class="v-mid" :style="`--width-percent: ${item.percent}%`" />
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const init = ref(false)
const skillList = reactive([
  {
    name: 'CSS3',
    percent: 90
  },
  {
    name: 'JavaScript',
    percent: 80
  },
  {
    name: 'TypeScript',
    percent: 75
  },
  {
    name: 'Vue.js',
    percent: 80
  },
  {
    name: 'Node.js',
    percent: 70
  }
])

onMounted(async () => {
  await nextTick()
  init.value = true
})

</script>

<style lang="less">
.intro-container {
  padding: 0 10px;
  overflow: hidden;
  .skill-list {
    width: 26em;
    &-item {
      margin-bottom: 10px;
      span {
        display: inline-block;
        width: 80px;
        margin-right: 10px;
      }
      p {
        display: inline-block;
        height: 6px;
        width: calc(100% - 90px);
        margin: 0;
        font-size: 0;
        position: relative;
        background-color: #ebeef5;
        border-radius: 100px;
        overflow: hidden;
        &:after {
          content: '';
          position: absolute;
          height: 100%;
          width: 0;
          background: #e6a23c;
          border-radius: 100px;
          transition: ease 1s width;
        }
      }
    }

    &.init {
      .skill-list-item p::after {
        width: var(--width-percent);
      } 
    }
  }

  .project-list {
    width: 48em;
  }
}
</style>

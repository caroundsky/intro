<template>
  <div class="intro-container" h-screen w-screen>
    <img block mxa border-rd-50 alt="caroundsky" src="https://avatars.githubusercontent.com/u/20423068?v=4" width="80" />
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
      <ul>
        <li class="project-list-item" v-for="(item, index) in projectList" :key="index">
          <span class="v-top name" inline-block><a target="_blank" :href="item.link">{{ item.name }}</a></span> 
          <span class="v-top desc" inline-block>{{ item.desc }}</span>
        </li>
      </ul>
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

const projectList = reactive([
  {
    name: 'site-admin-plus：',
    desc: 'Vue2 + Ts + ElementUi 开发的站点容器，采用 iframe 作为子页签展示方案。',
    link: 'https://github.com/caroundsky/site-admin-plus'
  },
  {
    name: 'el-dialog-service：',
    desc: 'ElementUi - dialog 封装的弹窗服务组件(vue2.x)，动态生成窗体实例。',
    link: 'https://caroundsky.github.io/el-dialog-service/'
  },
  {
    name: 'el-plus-dialog-service：',
    desc: 'Element-plus 的 dialog 封装的弹窗服务组件(vue3.x)。',
    link: 'https://github.com/caroundsky/el-plus-dialog-service'
  },
  {
    name: 'vue3-template：',
    desc: 'vue3 + vite 模板库',
    link: 'https://github.com/caroundsky/vue3-template。'
  },
  {
    name: 'vue2-vite-component：',
    desc: 'vue2 + vite 组件模板库',
    link: 'https://github.com/caroundsky/vue2-vite-component。'
  },
])

onMounted(async () => {
  await nextTick()
  init.value = true
})

</script>

<style lang="less">
.intro-container {
  padding: 40px 10px 0;
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
    width: 45em;
    &-item {
      margin-bottom: 15px;
      .name {
        width: 170px;
        text-align: right;
        a {
          position: relative;
          &::before {
            content: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23111827'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'/%3E%3C/svg%3E");
            width: 12px;
            position: absolute;
            display: inline-block;
            left: -16px;
            top: 1px;
            display: none;
          }
          &:hover::before {
            display: block;
          }
        }
      }
      .desc {
        line-height: 1.5;
        color: #555;
        width: calc(100% - 172px);
      }
    }
  }
}
</style>

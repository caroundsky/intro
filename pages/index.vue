<template>
  <div class="intro-container" h-screen w-screen>
    <img block mxa border-rd-50 alt="caroundsky" src="https://avatars.githubusercontent.com/u/20423068?v=4" width="80" />
    <p text-center>
      <a href="mailto:skycq@foxmail.com"><svg style="width: 2.1em; height: auto; margin-right: 15px;" t="1675418075917" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25664" width="200" height="200"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#B3DFFF" p-id="25665"></path><path d="M460.334545 509.44a75.869091 75.869091 0 0 0 103.563637 0l266.705454-250.181818A46.545455 46.545455 0 0 0 814.545455 256H209.454545a46.545455 46.545455 0 0 0-16.756363 3.258182zM857.134545 739.374545A46.545455 46.545455 0 0 0 861.090909 721.454545V302.545455a46.545455 46.545455 0 0 0-4.654545-20.247273l-235.287273 221.090909z" fill="#439DFF" p-id="25666"></path><path d="M595.781818 527.36l-8.145454 7.68a110.778182 110.778182 0 0 1-151.272728 0l-8.145454-7.68L191.534545 764.043636A46.545455 46.545455 0 0 0 209.454545 768h605.09091a46.545455 46.545455 0 0 0 18.618181-3.956364zM167.563636 282.996364A46.545455 46.545455 0 0 0 162.909091 302.545455v418.90909a46.545455 46.545455 0 0 0 3.956364 18.618182l235.985454-236.683636z" fill="#439DFF" p-id="25667"></path></svg></a>
      <a target="_blank" href="https://github.com/caroundsky"><svg style="width: 2.1em; height: auto;" t="1675417463069" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8444" width="200" height="200"><path d="M512 0C229.283787 0 0.142041 234.942803 0.142041 524.867683c0 231.829001 146.647305 428.553077 350.068189 497.952484 25.592898 4.819996 34.976961-11.38884 34.976961-25.294314 0-12.45521-0.469203-45.470049-0.725133-89.276559-142.381822 31.735193-172.453477-70.380469-172.453477-70.380469-23.246882-60.569859-56.816233-76.693384-56.816234-76.693385-46.493765-32.58829 3.540351-31.948468 3.540351-31.948467 51.356415 3.71097 78.356923 54.086324 78.356923 54.086324 45.683323 80.19108 119.817417 57.072162 148.993321 43.593236 4.649376-33.91059 17.915029-57.029508 32.50298-70.167195-113.675122-13.222997-233.151301-58.223843-233.1513-259.341366 0-57.285437 19.919806-104.163095 52.678715-140.846248-5.246544-13.265652-22.820334-66.626844 4.990615-138.884127 0 0 42.996069-14.076094 140.760939 53.787741 40.863327-11.644769 84.627183-17.445825 128.177764-17.6591 43.465272 0.213274 87.271782 6.014331 128.135109 17.6591 97.679561-67.906489 140.59032-53.787741 140.59032-53.787741 27.938914 72.257282 10.407779 125.618474 5.118579 138.884127 32.844219 36.683154 52.593405 83.560812 52.593405 140.846248 0 201.586726-119.646798 245.990404-233.663158 258.957473 18.341577 16.208835 34.721032 48.199958 34.721032 97.210357 0 70.167195-0.639822 126.7275-0.639823 143.960051 0 14.033439 9.213443 30.370239 35.190235 25.209005 203.250265-69.527373 349.769606-266.123484 349.769605-497.867175C1023.857959 234.942803 794.673558 0 512 0" fill="#8cc775" p-id="8445"></path></svg></a>
      
    </p>
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

<template>
  <div class="nav-box">
    <a :href="homeUrl" class="back-link" aria-label="返回首页">← 返回</a>
  </div>
  <div class="exp-container">
    <h1 class="page-title">关于我</h1>

    <section>
      <h2>💻 专业技能</h2>
      <ul class="dot-list">
        <li v-for="(item, index) in skills" :key="index">{{ item }}</li>
      </ul>
    </section>

    <section>
      <h2>👔 工作经历</h2>
      <div class="job-item" v-for="(job, index) in jobs" :key="index">
        <h3 class="job-head">
          <span class="job-company">{{ job.company }}</span>
          <span class="muted job-time">{{ job.time }}</span>
        </h3>
        <p v-if="job.subtitle" class="job-subtitle">{{ job.subtitle }}</p>
        <template v-for="(entry, i) in job.entries" :key="i">
          <p v-if="entry.kind === 'para'" class="desc">{{ entry.text }}</p>
          <div v-else class="points-group">
            <p v-if="entry.title" class="points-title">{{ entry.title }}</p>
            <ul class="dot-list">
              <li v-for="(point, j) in entry.items" :key="j">{{ point }}</li>
            </ul>
          </div>
        </template>
      </div>
    </section>

    <!-- <section>
      <h2>🎓 教育经历 &amp; 证书</h2>
      <div class="edu-item" v-for="(item, index) in education" :key="index">
        <p>
          <strong>{{ item.school }}</strong>
          <span v-if="item.meta" class="muted"> | {{ item.meta }}</span>
        </p>
        <p class="sub">{{ item.desc }}</p>
      </div>
    </section> -->

    <section>
      <h2>🤝 个人评价</h2>
      <ul class="dot-list">
        <li v-for="(item, index) in comments" :key="index">{{ item }}</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
const { baseURL } = useRuntimeConfig().app
const homeUrl = baseURL

useHead({
  title: '关于我',
})

/** 工作经历中的内容块：一段描述，或一组带可选小标题的要点 */
type JobEntry =
  | { kind: 'para'; text: string }
  | { kind: 'points'; title?: string; items: string[] }

const skills = [
  '丰富的项目经验：门户网站、H5、商城项目（C 端）、OA 系统（B 端）均有开发经验',
  '技术栈：ES6+、TS，精通 Vue 开发，熟悉 Angular',
  '工程化：熟悉 vue-cli、vite 等构建工具，搭建过开发模板、组件库；CI/CD：Jenkins',
  '精通响应式布局，擅长 css3 动画交互，对性能优化、seo 有实践',
  '擅长使用 AI 工具，Cursor、Claude、Kimi code 均有实践',
]

const jobs: Array<{ company: string; time: string; subtitle?: string; entries: JobEntry[] }> = [
  {
    company: '棒谷科技有限公司',
    time: '2019.7 – 2026.7',
    entries: [
      {
        kind: 'points',
        title: '【19.7~21.7】公共平台部门：承担 OA 开发，负责站点容器、财务、公共事务、招聘模块',
        items: [
          '重构 OA 站点容器，旧系统为 JQ 产物，采用 vue2+ts 进行重构，规范项目结构、输出相关文档；上线后访问速度与用户体验得到提升，同时极大的增强了可维护性与拓展性；跨部门分享推广后得到一致认可与采用。',
          '参与前端公共组件库的开发和维护，期间完成【弹窗服务】和【文件上传】组件开发。',
          '主导完成公司招聘系统的全程开发迭代。',
        ],
      },
      {
        kind: 'points',
        title: '【21.7~24.7】仓储物流部门，前端组长，4 人团队，主管 5 个系统的迭代与维护工作',
        items: [
          '整改大型物流（TMS）仓库，集成 CI/CD 自动化，摆脱手动打包模式，转为 Jenkins 选项式构建。',
          '过渡仓储系统技术栈（angular -> vue）；采用 Vue CLI 4 构建新系统仓库，迁移重度使用模块，规范项目结构与代码规范。',
          '技术攻关与调研，推动重点旧项目重构，落地 vue3 以及 vue2+vite+ts 项目并抽离为模板库推广使用。',
          '完善物流系统基建，收集常用业务场景控件，组织部门资源进行整合，形成组件库并在内网发布。',
          '需求评审与排期，协调资源分配，设计组员分管系统模式、难点协助；组员内部定期相互 codeReview 并分享。',
        ],
      },
      {
        kind: 'points',
        title: '【24.7~25.7】销售平台，前端组长，3 人团队',
        items: [
          '因人员变动，需要解决需求堆积问题，与产品、开发梳理需求情况，重排优先级，重新划分功能模块负责人，并参与负责开发，2 个月内堆积情况得到缓解，后续消化平稳。',
          '采用 micro-zoe 落地微前端方案，解决销售平台历史技术栈混杂，新功能难以迭代维护的情况，并推广到仓储物流使用。',
        ],
      },
      {
        kind: 'points',
        title: '【25.7~26.7】大前端部门',
        items: [
          '公司组织架构调整，不再细分负责平台，前端人员统合为单一部门，期间工作主要按需求优先度穿插于各业务开发当中，新加入大数据相关业务开发。',
          '使用 Cursor、Claude 进行辅助开发。',
          '参与 AI 开发流程的探索，产品侧、前后端协作流程的更新迭代。',
          '优化大数据站点容器的底层架构，通过 vite-bundle-analyzer 分析构建产物进行重新分包（manualChunks），抽离通用模块、大体积改静态加载，优化后的体积减少 50% 以上，解决白屏问题；通过更换 eslint 依赖解决 vite 巨石应用开发模式热加载过慢问题。',
        ],
      },
    ],
  },
  {
    company: '唯厘科技',
    time: '2018.7 – 2019.7',
    entries: [
      { kind: 'para', text: '职责/成就：主导完成快海购（商城项目）双端的一期开发' },
      {
        kind: 'points',
        title: '项目架构：',
        items: [
          'PC 端的项目构架：多页应用，使用 node 作为中间层进行服务端渲染，选型为 express + pug 结合 vue2 + jq + elementUi 开发。',
          '移动端架构：基于 Nuxt 的 ssr 渲染，ui 框架采用 vant。',
        ],
      },
      {
        kind: 'points',
        title: '痛点和难点：',
        items: [
          'seo 区域划分：根据多页应用 seo 区域决定代码风格。',
          '下单、支付的数据处理。',
          '系统通知：采用事件总线 Bus 的方案来解决不同组件之间的通信。',
          '业务组件的封装：对评论，广告位等复用模块进行抽离。',
          '移动端：选型为 nuxt.js，微信环境、授权登陆与相关支付分别采用中间件和组件抽离的方式实现，基本解除了耦合，业务逻辑更好处理以及维护。',
        ],
      },
    ],
  },
  {
    company: '易点科技',
    time: '2016.9 – 2018.6',
    entries: [
      {
        kind: 'para',
        text: '职责/成就：定制型响应式网站全栈开发，拥有丰富的项目经验，主导过多个竞标展示 demo 站点制作。注重 css3 动效与交互，技术栈为 css3 + es5 + php（TP5）。',
      },
      {
        kind: 'points',
        items: [
          '项目开发初期参与评估技术实现难点，与客户沟通功能模块。',
          '参与切图、动效制作、交互效果、后端开发。',
          '项目测试阶段协助客户做修改以及上线，后期的代码维护。',
          '参与、主持公司内部的技术交流会，推荐新技术使用。',
        ],
      },
      { kind: 'para', text: '以下甄选了一些已上线的项目，均为整站开发：' },
      {
        kind: 'points',
        title: '奇柯集团（响应式）',
        items: [
          '项目难点：动画的衔接问题、logo 的动画演绎、粒子效果。',
          '解决方案：Logo 的演绎采用 canvas 绘图，让 logo 以粒子的形式散开，进而过度到 svg 的粒子动画。粒子部分的动画则与设计师合作，设计师通过 AI 绘图，导出为 svg 格式，前台通过操作 svg 的 dom，通过多次调整，形成「散开—合并—散开」的动画效果，内页交互效果均为自行把握设计。',
        ],
      },
      {
        kind: 'points',
        title: '万家乐（响应式）',
        items: ['参与竞标的提案制作，中标后参与官网建设、产品 H5 专题页的制作、公司内网搭建。'],
      },
    ],
  },
]

const comments = [
  '拥抱开源，在 Github 开源常用组件及工具',
  '项目经验丰富，熟悉业务处理，善于解决问题，能快速融入团队',
  '4 人团队带队经验，对工作尽职尽责，学习、解决问题能力强',
  '沟通能力强，在公司进行过部门轮转，承接主力开发',
]
</script>

<style lang="less">
.exp-container {
  max-width: 46em;
  margin: 0 auto;
  padding: 0 16px 4rem;

  h2 {
    font-size: 1.3rem;
  }

  a {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 0;
      height: 1px;
      background-color: currentColor;
      transition: width ease 0.2s;
    }
    &:hover::after {
      width: 100%;
    }
  }

  .page-title {
    text-align: center;
    letter-spacing: 0.2em;
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  section {
    margin-bottom: 2.4rem;
  }

  .muted {
    color: #57606a;
    font-weight: 400;
  }

  .sub {
    margin: 0.2rem 0 0;
    color: #57606a;
    font-size: 0.9rem;
    line-height: 1.7;
  }

  .desire {
    font-size: 1.05rem;
    font-weight: 500;
    margin: 0.4rem 0 0;
  }

  .dot-list {
    li {
      position: relative;
      padding-left: 1em;
      line-height: 1.7;
      color: #555;
      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: #e6a23c;
      }
    }
  }

  .job-item {
    margin-bottom: 2.2rem;
    &:last-child {
      margin-bottom: 0;
    }
    .job-head {
      margin: 0 0 0.4rem;
      .job-company {
        margin-right: 0.6em;
      }
      .job-time {
        font-size: 0.95rem;
      }
    }
    .job-subtitle {
      margin: 0 0 0.2rem;
      color: #57606a;
      font-size: 0.92rem;
    }
    .desc {
      line-height: 1.7;
      margin: 0.2rem 0;
    }
    .points-group {
      margin-top: 0.2rem;
      .points-title {
        margin: 0.6rem 0 0.1rem;
        font-weight: 500;
        line-height: 1.7;
      }
      .dot-list {
        margin: 0;
      }
    }
  }
}

.nav-box {
  /* 与内容盒同宽居中，细行右对齐贴正文，低调不喧宾夺主 */
  max-width: 46em;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 16px 0.5rem;
}

.back-link {
  font-size: 0.95rem;
  color: #555;
  transition: color 0.2s ease;
  &:hover {
    color: #24292f;
    text-decoration: underline;
  }
}

@media (max-width: 750px) {
  .exp-container {
    h2 {
      text-align: center;
    }
  }
  .back-link {
    font-size: 0.9rem;
  }
}
</style>

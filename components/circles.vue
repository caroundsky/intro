<template>
  <div class="area">
    <ul :class="['circles', { init, hangup }]">
      <li animation-time="25"></li>
      <li animation-time="14"></li>
      <li animation-time="29"></li>
      <li animation-time="18"></li>
      <li animation-time="26"></li>
      <li animation-time="28"></li>
      <li animation-time="32"></li>
      <li animation-time="60"></li>
      <li animation-time="37"></li>
      <li animation-time="11"></li>
      <li animation-time="22"></li>
      <li animation-time="33"></li>
      <li animation-time="44"></li>
    </ul>
  </div>
</template>
<script>
import { Random, getStyle } from './help'

export default {
  name: 'circles',

  setup() {
    const all = [25, 14, 29, 18, 26, 28, 32, 60, 37, 11, 22, 33, 44]
    const init = ref(false)
    const hangup = ref(false)
    let allToHash = {}
    onMounted(async () => {
      await nextTick()
      allToHash = all.reduce((result, cur) => {
        const $el = document.querySelector(`li[animation-time='${cur}']`)
        document.querySelector(':root').style.setProperty(`--cicle-${cur}-width`, `${getStyle($el, 'width')}`)
        document.querySelector(':root').style.setProperty(`--cicle-${cur}-height`, `${getStyle($el, 'height')}`)
        document.querySelector(':root').style.setProperty(`--cicle-${cur}-left`, `${getStyle($el, 'left')}`)

        $el.setAttribute('style',
        `
          width: var(--cicle-${cur}-width);
          height: var(--cicle-${cur}-height);
          left: var(--cicle-${cur}-left)
        `)

        result[cur] = {
          baseNum: cur,
          value: cur,
          fn: function(dom = $el, baseNum = cur) {
            // 生成随机数
            dom.classList.add('stop')
            const wh = Random(15, 150)
            const left = Random(5, 95)
            document.querySelector(':root').style.setProperty(`--cicle-${baseNum}-width`, `${wh}px`)
            document.querySelector(':root').style.setProperty(`--cicle-${baseNum}-height`, `${wh}px`)
            document.querySelector(':root').style.setProperty(`--cicle-${baseNum}-left`, `${left}%`)
            
            setTimeout(() => {
              dom.classList.remove('stop')
            }, 0)
          }
        }
        return result
      }, {})
      init.value = true

      // document.addEventListener('visibilitychange', () => {
      //   if (document.hidden === true) {
      //     // 页面被挂起
      //     hangup.value = true
      //   } else {
      //     // 页面被激活
      //     hangup.value = false
      //   }
      // })

    })
    let sec = 0
    
    // 不用 setTimeout 是因为浏览器切屏时 setTimeout 是不执行的，而 css 动画和 setInterval 是可以后台执行
    setInterval(() => {
      sec++
      if (allToHash[sec]) {
        const { baseNum, value, fn } = allToHash[sec]
        if (Array.isArray(baseNum)) {
          baseNum.forEach((item, index) => {
            setNewHash(item, value, fn[index])
          })
        } else {
          setNewHash(baseNum, value, fn)
        }
        
        if (Array.isArray(fn)) {
          fn.forEach((item, index) => {
            allToHash[sec].fn[index]()
          })
        } else {
          allToHash[sec].fn()
        }
        delete allToHash[sec]
      }
    }, 1000)
    
    function setNewHash(baseNum, value, fn) {
      let newValue = baseNum + value
      // 存在公约数时
      if (allToHash[newValue]) {
        const _baseNum = allToHash[newValue]['baseNum']
        const _fn = allToHash[newValue]['fn']

        allToHash[newValue] = {
          baseNum: Array.isArray(_baseNum) ? [..._baseNum, baseNum] : [_baseNum, baseNum],
          value: newValue,
          fn: Array.isArray(_fn) ? [..._fn, fn] : [_fn, fn],
        }
      } else {

        allToHash[newValue] = {
          baseNum,
          value: newValue,
          fn
        }
      }
    }

    return {
      init,
      hangup
    }
  }
}
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
  &.stop {
    animation: none;
  }
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
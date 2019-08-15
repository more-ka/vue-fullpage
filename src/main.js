// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    bgColor: ['lightblue', 'lightgreen', 'lightgray', 'yellow', '#f44336'],
    currentIndex: 0,
    move: '',
    canWheel: true,
    endCount: 0
  },
  methods: {
    wheelEvent(e) {
      if (!this.canWheel) {
        return
      }
      this.canWheel = false
      if (e.deltaY > 0) {
        if (this.currentIndex === this.bgColor.length - 1) {
          this.canWheel = true
          this.endCount = 0
          return
        }
        this.currentIndex += 1
        this.move = 'down'
      }
      if (e.deltaY < 0) {
        if (this.currentIndex === 0) {
          this.canWheel = true
          this.endCount = 0
          return
        }
        this.currentIndex -= 1
        this.move = 'up'
      }
    },
    end() {
      this.endCount += 1
      if (this.endCount === 2) {
        this.canWheel = true
        this.endCount = 0
      }
    }
  }
})

<template>
  <div class="modal">
    <div class="slides">
      <img class="slide" :src="'static/training/'+which+'/Slide'+currentSlide+'.png'"/>
      <div class="row">
        <el-button icon="el-icon-arrow-left" circle :disabled="currentSlide === 1" @click="prev"></el-button>
        <span>{{currentSlide}} / {{lastSlide}}</span>
        <el-button :type="!isLastSlide ? undefined : 'success'" :icon="!isLastSlide ? 'el-icon-arrow-right' : 'el-icon-d-arrow-right'" circle @click="next"></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slides',
  props: ['which', 'done'],
  data() {
    let lastSlide;

    if (this.which === 0) {
      lastSlide = 9
    } else {
      lastSlide = 10
    }

    return {
      currentSlide: 1,
      lastSlide,
    }
  },
  computed: {
    isLastSlide() {
      return this.currentSlide === this.lastSlide
    },
  },
  methods: {
    prev() {
      if (this.currentSlide === 1) {
        return
      }
      this.currentSlide -= 1
    },
    next() {
      if (this.currentSlide === this.lastSlide) {
        this.done()
        return
      }
      this.currentSlide += 1
    },
  },
}
</script>

<style scoped>
.modal {
  z-index: 5;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slides {
  width: 80vw;
  max-height: 80vw;
  padding: 32px;
  overflow: scroll;
  background-color: white;

  color: #2F2E2E;
  font-size: 14px;

  display: flex;
  flex-direction: column;
}
.slides > .slide {
  flex: 1;
  object-fit: contain;
}
.slides > .row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.slides > .row > button {
  font-size: 14px;
}
</style>

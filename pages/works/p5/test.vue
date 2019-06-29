<template>
  <div class="container border">
    <div id="p5Canvas" class="d-flex justify-content-center"></div>
    <div class="message d-flex justify-content-center">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    const script = function(p5) {
      let speed = 2
      let posX = 0
      p5.setup = _ => {
        p5.createCanvas(500, 500)
        p5.ellipse(p5.width / 2, p5.height / 2, 500, 500)
      }
      p5.draw = _ => {
        p5.background(0)
        const degree = p5.frameCount * 3
        const y = p5.sin(p5.radians(degree)) * 50
        p5.push()
        p5.translate(0, p5.height / 2)
        const r = p5.random(0, 255)
        const g = p5.random(0, 255)
        const b = p5.random(0, 255)
        p5.fill(r, g, b)
        p5.ellipse(posX, y, 50, 50)
        p5.pop()
        posX += speed
        if (posX > p5.width || posX < 0) {
          speed *= -1
        }
      }
    }
    const P5 = require('p5')
    const p5obj = new P5(script) // eslint-disable-line no-unused-vars
  }
}
</script>

<style>
.message {
  color: black;
}
</style>

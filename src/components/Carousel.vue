<template>
  <b-carousel
    id="carousel-fade"
    fade
    indicators
    v-model="slide"
    :interval="2000"
    background="#ababab"
    style="text-shadow: 1px 1px 2px #333;"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <!-- <b-carousel-slide caption="Second Game Slide">
      <template v-slot:img>
        <img
          class="d-block w-100"
          width="1024"
          height="480"
          src="https://rocketgame.io/static/img/shadow13.266f6719.png"
          alt="image slot">
      </template>
    </b-carousel-slide>
    <b-carousel-slide caption="Third Game Slide">
      <template v-slot:img>
        <img
          class="d-block w-100"
          width="1024"
          height="480"
          src="https://rocketgame.io/static/img/shadow14.4dd1d48e.png"
          alt="image slot">
      </template>
    </b-carousel-slide> -->
    <b-carousel-slide caption="Second Game Slide">
      <template v-slot:img>
        <img
          class="d-block w-100"
          width="1024"
          height="480"
          src="https://designzonic.com/download/wp-content/uploads/2020/04/Slider_Download.png"
          alt="image slot">
      </template>
    </b-carousel-slide>
    <b-carousel-slide caption="Third Game Slide">
      <template v-slot:img>
        <img
          class="d-block w-100"
          width="1024"
          height="480"
          src="https://www.elitepredatorx.com/wp-content/uploads/2013/05/elitebanner-1.png"
          alt="image slot">
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="dashboard bg-dark text-white">

    <Carousel class="mb-5" id="main-carousel"/>

    <div class="blur"></div>

    <b-container class="content">
      <b-row class="ml-4 mt-3 hd">
        <h5 class="ml-4">LUCKY GAMES</h5>
      </b-row>
      <LuckyGames/>

      <b-row class="ml-4 mt-3 hd">
        <h5 class="ml-4">SLOTS</h5>
      </b-row>
      <LuckyGames/>
      <LuckyGames/>
    </b-container>

  </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import LuckyGames from '@/components/LuckyGames'

export default {
  name: 'Dashboard',
  components: {
    Carousel,
    LuckyGames
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard .blur {
  background-image: url("https://pngimg.com/uploads/world_map/world_map_PNG28.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
  position:absolute;
  width:100%;
  height:100%;
  margin-top: -2%;
}

.dashboard #main-carousel {
  padding-top: 65px !important;
}

.content .hd {
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-size: 18px;
  color: #fff;
  padding-left: 35px;
  font-weight: 600;
  background: url('https://rocketgame.io/static/img/luckygame.ed903170.png') no-repeat 0 100%;
  background-size: auto 100%;
  margin-bottom: -12px;
}
</style>

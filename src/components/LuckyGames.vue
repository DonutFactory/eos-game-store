<template>
  <div class="games-list">
    <b-col fluid class="p-4">
    <b-row>
    <b-col class="ico">
        <figure class="figure">
            <b-img fluid src="https://rocketgame.io/static/img/bull.86240964.png" alt="image 1"></b-img>
        </figure>
        <h5 class="name">Banker Bull</h5>
    </b-col>
    <b-col class="ico">
        <figure class="figure">
            <b-img fluid src="https://rocketgame.io/static/img/rocketdice.7b639b6e.png" alt="Image 2"></b-img>
        </figure>
        <h5 class="name">Rocket Dice</h5>
    </b-col>
    <b-col class="ico">
        <figure class="figure">
            <b-img fluid src="https://rocketgame.io/static/img/mines.a661efcc.png" alt="Image 3"></b-img>
        </figure>
        <h5 class="name">Mines</h5>
    </b-col>
    <b-col class="ico">
        <figure class="figure">
            <b-img fluid src="https://rocketgame.io/static/img/keno.82c22d60.png" alt="Image 4"></b-img>
        </figure>
        <h5 class="name">Keno</h5>
    </b-col>
    <b-col class="ico">
        <figure class="figure">
            <b-img fluid src="https://rocketgame.io/static/img/dice.e9a0ca46.png" alt="Image 5"></b-img>
        </figure>
        <h5 class="name">Dice</h5>
    </b-col>
    </b-row>
    </b-col>

    <b-col fluid class="p-4">
    <b-row>
    <b-col class="ico">
        <figure class="figure">
            <b-img fluid src="https://rocketgame.io/static/img/plinko.e24861b5.png" alt="Image 1"></b-img>
        </figure>
        <h5 class="name">Flinko</h5>
    </b-col>
    <b-col class="ico">
        <figure class="figure">
            <b-img fluid src="https://rocketgame.io/static/img/hilo.0c6fd696.png" alt="Image 1"></b-img>
        </figure>
        <h5 class="name">Hilo</h5>
    </b-col>
    <b-col class="ico">
        <figure class="figure">
            <b-img fluid src="https://rocketgame.io/static/img/jacks.e2e68295.png" alt="Image 1"></b-img>
        </figure>
        <h5 class="name">Jacks & Better</h5>
    </b-col>
    <b-col class="ico">
        <figure class="figure">
            <b-img fluid src="https://rocketgame.io/static/img/baccarat.87c2cb44.png" alt="Image 1"></b-img>
        </figure>
        <h5 class="name">Baccarat</h5>
    </b-col>
    <b-col class="ico">
        <figure class="figure">
            <b-img fluid src="https://rocketgame.io/static/img/fruitmachine.2d65d0df.png" alt="Image 1"></b-img>
        </figure>
        <h5 class="name">Fruit Slots</h5>
    </b-col>
    </b-row>
    </b-col>
  </div>
</template>

<script>

export default {
  name: 'LuckyGames'
  // data: () => ({
  //   types: ['Places to Be', 'Places to See'],
  //   cards: ['Good', 'Best', 'Finest'],
  //   socials: [
  //     {
  //       icon: 'fab fa-facebook',
  //       color: 'indigo'
  //     },
  //     {
  //       icon: 'fab fa-linkedin',
  //       color: 'cyan darken-1'
  //     },
  //     {
  //       icon: 'fab fa-instagram',
  //       color: 'red lighten-3'
  //     }
  //   ]
  // }),
  // methods: {
  //   getImage () {
  //     const min = 550
  //     const max = 560

  //     return Math.floor(Math.random() * (max - min + 1)) + min
  //   }
  // }
}
</script>

<style scope>
.games-list .ico .name {
  font-weight: 600;
}
</style>

<template>
  <v-app>
    <header class="w-100">
      <TopNav class="mb-5"/>
    </header>
    <v-content>
      <router-view/>
      <SideBar/>
    </v-content>
    <footer class="w-100" style="background-color: #3a434b;">
      <!-- <Footer class="mt-5"/> -->
      <div class="footer-copyright text-center py-3">
        © 2020 Copyright: <a href="#">EOS Game Store</a>
      </div>
    </footer>
  </v-app>
</template>

<script>
import TopNav from '@/components/TopNav'
import SideBar from '@/components/SideBar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    TopNav,
    SideBar,
    Footer
  }
}
</script>

<template>
  <div>
    <b-button v-b-toggle.sidebar>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar" class="bg-dark w-15" aria-label="Sidebar" header shadow>
      <div class="container-fluid h-100">
        <!-- <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">NavBar</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav> -->
          <b-row class="h-100">
            <b-col class="col-12">
              <b-navbar-nav>
                <b-nav-item href="#">VIP</b-nav-item>
                <b-nav-item href="#">Refferal</b-nav-item>
                <b-nav-item href="#">Rank</b-nav-item>

                <b-nav-item-dropdown text="Challenge" id="dropdown-item">
                  <b-dropdown-item href="#">Challenge 1</b-dropdown-item>
                  <b-dropdown-item href="#">Challenge 2</b-dropdown-item>
                  <b-dropdown-item href="#">Challenge 3</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="Ranking" id="dropdown-item">
                  <b-dropdown-item href="#">Rank 1</b-dropdown-item>
                  <b-dropdown-item href="#">Rank 2</b-dropdown-item>
                  <b-dropdown-item href="#">Rank 3</b-dropdown-item>
                  <b-dropdown-item href="#">Rank 4</b-dropdown-item>
                  <b-dropdown-item href="#">Rank 5</b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            <!-- Right aligned nav items -->
            </b-col>
            <b-col class="col-12 mt-auto mb-3">
              <b-navbar-nav class="mt-auto">
                <b-navbar-nav>
                  <b-button variant="info">Sign in</b-button>
                  <b-button variant="outline-info">Register</b-button>
                </b-navbar-nav>
              </b-navbar-nav>
            </b-col>
          </b-row>
      </div>
    </b-sidebar>
  </div>
</template>

<style type="text/css">
#sidebar {
  /*background-color: #061e36 !important;*/
}

.b-sidebar-header .close {
  color: #FFFF !important;
}

/*.b-sidebar-body ul li a {
  color: #fffF !important;
}*/
</style>

<template>
  <div class="top-nav container">
    <b-navbar toggleable="md" fixed="top" type="dark" class="p-2 row" variant="dark">
      <div class="col">
        <div class="row justify-content-between" id="main-s-header">
          <b-navbar-brand href="#">
            <!-- <b-img fluid src="./assets/logo.png" alt="Image 1"></b-img> -->
            <img src="./../assets/logo.png" class="img-fluid w-10">
            EOS Game Store
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="">
              <b-nav-item href="#">
                main-link 1
              </b-nav-item>
              <b-nav-item href="#">
                main-link 2
              </b-nav-item>
              <b-nav-item href="#">
                main-link 3
              </b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#">
                238.0 EOS
              </b-nav-item>
              <b-nav-item href="#" class="text-white">
                VIP3 Phyhamaguchi
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
        <div id="sub-s-header">
          <b-collapse id="nav-collapse" class="row justify-content-between" is-nav>
            <div class="col-md-auto col-sm-12">
              <b-navbar-nav>
                <b-nav-item href="#">
                  sub-link 1
                </b-nav-item>
                <b-nav-item href="#">
                  sub-link 1
                </b-nav-item>
                <b-nav-item href="#">
                  sub-link 1
                </b-nav-item>
              </b-navbar-nav>
            </div>
            <div class="col-md-auto col-sm-12">
              <b-navbar-nav>
                <b-nav-item href="#">
                  sub-link 2
                </b-nav-item>
                <b-nav-item href="#">
                  sub-link 2
                </b-nav-item>
                <b-nav-item href="#">
                  sub-link 2
                </b-nav-item>
              </b-navbar-nav>
            </div>
          </b-collapse>
        </div>
      </div>
    </b-navbar>
  </div>
</template>

<style scoped>
  /* Large scren */
  #main-s-header {
    height: 65px;
    line-height: 65px;
    margin-top: -10px !important;
    padding: 0 20px 0 1.5em;
    background: #3a434b;
    z-index: 2;
  }

  #sub-s-header > .row {
    height: 57px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -moz-justify-content: space-between;
    justify-content: space-between;
    background: #353e46;
    border-bottom: 1px solid #404a52;
    font-size: 13px;
  }
</style>

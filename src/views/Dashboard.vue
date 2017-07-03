<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-6 col-lg-3">
        <div class="social-box facebook">
          <i class="fa fa-facebook"></i>
          <div class="chart-wrapper">
            <social-box-chart-example :data="last7daysFavorites" height="90" v-if="isLoaded"/>
          </div>
          <ul>
            <li>
              <strong>{{facebook.favorites}}</strong>
              <span>favorites</span>
            </li>
            <li>
              <strong>{{facebook.followers}}</strong>
              <span>followers</span>
            </li>
          </ul>
        </div><!--/.social-box-->
      </div><!--/.col-->

      <div class="col-sm-6 col-lg-3">
        <div class="social-box twitter">
          <i class="fa fa-twitter"></i>
          <div class="chart-wrapper">
            <social-box-chart-example :data="[99, 110, 9, 17]" height="90"/>
          </div>
          <ul>
            <li>
              <strong>{{twitter.favorites}}</strong>
              <span>favorites</span>
            </li>
            <li>
              <strong>{{twitter.followers}}</strong>
              <span>followers</span>
            </li>
          </ul>
        </div><!--/.social-box-->
      </div><!--/.col-->
    </div>
  </div>
</template>

<script>
  import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
  import axios from 'axios'

  export default {
    name: 'dashboard',
    components: {
      SocialBoxChartExample
    },
    data: () => ({
      facebook: {},
      twitter: {},
      last7daysFavorites: [],
      isLoaded: false
    }),
    created () {
      axios.get(`http://localhost:8080/facebook/current`)
        .then(response => {
          this.facebook = response.data
        })
      axios.get(`http://localhost:8080/facebook/favorites`)
        .then(response => {
          this.last7daysFavorites = [99, 110, 9, 17]
          this.isLoaded = true
        })
      axios.get(`http://localhost:8080/twitter`)
        .then(response => {
          this.twitter = response.data
        })
    }
  }
</script>

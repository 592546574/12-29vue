<template>
  <div class="content">
    <div class="content-list"  v-for="(item,index) in getTabData2" :key="index">
      <div>
        <a href="###"  >
          <div class="liner"></div>
          <div class="product">1月4日新品放映室</div>
          <div class="week">
            本周严选带来了火锅汤底和颜值锅具，让你在家也能组起火锅趴，还有被时尚杂志pick的明星款耳饰和男式夹克，年底聚会扎推，备好红火美食和新年战袍，老友相见才能不输阵哦~
          </div>
        </a>
        <ul class="list-tab">
          <li >
            <img src="https://yanxuan.nosdn.127.net/10a2fdb71a012ad31732a483180a68d3.png?imageView&quality=65&thumbnail=272y272" width="100%" height="100%">
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/10a2fdb71a012ad31732a483180a68d3.png?imageView&quality=65&thumbnail=272y272" width="100%" height="100%">
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/10a2fdb71a012ad31732a483180a68d3.png?imageView&quality=65&thumbnail=272y272" width="100%" height="100%">
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/10a2fdb71a012ad31732a483180a68d3.png?imageView&quality=65&thumbnail=272y272" width="100%" height="100%">
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/10a2fdb71a012ad31732a483180a68d3.png?imageView&quality=65&thumbnail=272y272" width="100%" height="100%">
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/10a2fdb71a012ad31732a483180a68d3.png?imageView&quality=65&thumbnail=272y272" width="100%" height="100%">
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/10a2fdb71a012ad31732a483180a68d3.png?imageView&quality=65&thumbnail=272y272" width="100%" height="100%">
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/10a2fdb71a012ad31732a483180a68d3.png?imageView&quality=65&thumbnail=272y272" width="100%" height="100%">
          </li>
        </ul>
        <div class="count">
          <i class="icon" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==)" ></i>
          <span>168人看过</span>
        </div>
      </div>


      <a href="###">
        <div class="liner"></div>
        <div class="Net">网易严选首家线下店开业！据说只有累计2万好评的商品，才能在这里展出？</div>
        <div class="pic">
          <img src="https://yanxuan.nosdn.127.net/74d1e456ff5aa2818e8437f830000c37.jpg?imageView&quality=65&thumbnail=690y376" width="100%" height="100%">
        </div>
        <div class="count">
          <i class="icon" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==)" ></i>
          <span>1w人看过</span>
        </div>
      </a>
    </div>
    <div class="liner"></div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['getTabData2'])
    },
    mounted(){
      this.$store.dispatch('getTabData')
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    width 100%
    margin-top 75px
    /*display flex*/
    /*flex-flow nowrap*/
    /*justify-content space-around*/
    .content-list
      background #fff
      margin 5px 0
      box-sizing border-box
      padding 5px 15px
      width 100%
      .Net
        color #333
        line-height 30px
        font-size 18px
      .pic
        height 188px
        width 345px
        margin-bottom 10px
        img
          border-radius 3px
      .count
        color #999
        font-size 12px
        line-height 20px
        margin-top 10px
        margin-bottom 5px
        .icon
          background-size 14px
          width 14px
          height 10px
          display inline-block


      .product
        line-height 40px
        font-size 18px
        color #333
        width 100%
      .week
        font-size 14px
        line-height 20px
        padding-top 5px
        color #7F7F7F
      .list-tab
        justify-content: space-between
        flex-wrap: wrap
        display flex
        margin 10px 0
        li
          height 83px
          background #f4f4f4
          border-radius 3px
          margin-bottom 5px
          width 83px


      .count
          color #999
          font-size 12px
          line-height 20px
          margin-top 10px
          margin-bottom 5px
          .icon
            background-size 14px
            width 14px
            height 10px
            display inline-block


</style>

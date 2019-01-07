<!--传参问题要注意因为是对象所以要.getTabData.result代表遍历的是tabdata下面的result数组-->
<template>
  <div class="content">
    <div class="content-gent" v-for="(tab,index) in getTabData.result" :key="index">
      <a href="###" class="gent">
        <div class="liner"></div>
        <div class="info">
          <div class="list-name">
          <span class="icon">
            <img :src="tab.avatar" width="100%" height="100%">
          </span>
            <span>{{tab.nickname}}</span>
          </div>
          <div class="Net">{{tab.title}}</div>
          <div class="new ellipsis">2019新年福盒，福字春联样样都有</div>
          <div class="count">
            <i class="icon" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==)" ></i>
            <span>168人看过</span>
          </div>
        </div>
        <div class="tpic">
          <img src="https://yanxuan.nosdn.127.net/93986fb79690a05d4c01b7d314cd7b78.jpg?imageView&quality=65&thumbnail=272y272" width="100%" height="100%">
        </div>
      </a>
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
      ...mapState(['getTabData']),
    },
    mounted(){
      this.$store.dispatch('getGetTabData')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    width 100%
    margin-top 75px
    .content-gent
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


      .gent
        display block
        height 170px
      .info
        width 200px
        height 136px
        .list-name
          margin-top 10px
          margin-bottom 10px
          .icon
            height 28px
            width 28px
            img
              border-radius 50%
          span
            color #333
            vertical-align middle
            display inline-block
        .Net
          color #333
          line-height 30px
          font-size 18px
        .new
          width 100%
          white-space nowrap
          overflow hidden
          font-size 14px
          line-height 20px
          color #7f7f7f
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


      .tpic
        height 136px
        width 136px
        position relative
        right -210px
        top -135px
        img
          overflow hidden
          display inline-block
          border-radius 3px

      .liner
        padding 0 15px
        margin-left -15px
        width 100%
        height 10px
        background-color #f4f4f4
</style>

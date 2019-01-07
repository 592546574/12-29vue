<template>
  <div class="content">
    <div class="content-list">
      <a href="###">
        <div class="liner"></div>
        <div class="info">
          <div class="list-name">
          <span class="icon">
            <img src="https://yanxuan.nosdn.127.net/7e697cb70dc66543d5bbe0cb914f16a3.png?imageView&quality=65&thumbnail=56y56" width="100%" height="100%">
          </span>
            <span>网易ceo丁磊</span>
          </div>
          <div class="Net">转发锦鲤，不如回家贴福字</div>
          <div class="new ellipsis">2019新年福盒，福字春联样样都有</div>
          <div class="count">
            <i class="icon" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==)" ></i>
            <span>168人看过</span>
          </div>
        </div>
        <div class="pic">
          <img src="https://yanxuan.nosdn.127.net/93986fb79690a05d4c01b7d314cd7b78.jpg?imageView&quality=65&thumbnail=272y272" width="100%" height="100%">
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
      ...mapState(['RecAuto'])
    },
    mounted(){
      this.$store.dispatch('getRecAuto')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    width 100%
    margin-top 75px
    display flex
    flex-flow nowrap
    justify-content space-around
    .content-list
      background #fff
      margin 5px 0
      box-sizing border-box
      padding 5px 15px
      width 100%
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


      .pic
        height 136px
        width 136px
        position relative
        right -210px
        top -130px
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

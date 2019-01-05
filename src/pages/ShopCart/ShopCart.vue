<template>
  <div class="app">
    <div class="app-m">
      <header class="header">
        <div class="header_min">
          <div class="min">
            <div class="psc">
              <div class="disc">
                <a href="###" class="fam">购物车</a>
                <a href="###" class="disc-ove">领券</a>
              </div>
            </div>
            <div class="msite_title">
              <ul class="title_l">
                <li class="item">
                  <a href="###">
                    <i class="u-icon icon-point-copy"></i>
                    <span class="text">30天无忧退货</span>
                  </a>
                </li>
                <li class="item">
                  <a href="###">
                    <i class="u-icon u-icon-servicePolicy-index"></i>
                    <span class="text">48小时快速退货</span>
                  </a>
                </li>
                <li class="item">
                  <a href="###">
                    <i class="u-icon u-icon-servicePolicy-index"></i>
                    <span class="text">满88元免邮票</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="shop">
              <div class="shop-cart">
                <div class="img" style="background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png)"></div>
                <div class="txt">
                  <div class="login">
                    <div class="txt-login">去添加点什么吧</div>
                    <div class="btn" @click="$router.push(`/login`)">登陆</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div/>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header
    position fixed
    left 0
    top 0
    z-index 10
    width 100%
    .header_min
      width 100%
      background #333
      .min
        background-color #fafafa
        height 50px
        line-height 50px
        text-align center
        box-sizing border-box
        border-bottom 2px solid #d9d9d9
        .psc
          background-color #fff
          position relative
          margin auto
          box-sizing border-box
          padding 0 15px
          border-bottom 2px solid #d9d9d9
          .disc
            line-height 50px
            .disc-ove
              font-size 18px
              color #b4282d
              float right
              padding 0 15px
            .fam
              margin-left 45px
              font-size 18px



        .msite_title
          .title_l
            background #f4f4f4
            width 375px
            height 35px
            display flex
            align-items center
            padding 0 2px
            zoom 1
            font-size 12px
            .item
              float left
              flex 1
              a
                cursor pointer
                vertical-align middle
                display inline-block
                .text
                  display inline-block
                  text-align center
                  line-height 35px
                .u-icon
                  border-radius 50%
                  background yellowgreen
                  width 5px
                  height 5px
                  display inline-block



        .shop
          width 100%
          left 0
          bottom 0
          z-index -1
          background-color #f4f4f4
          text-align center
          top 30px
          position fixed
          .shop-cart
            left 0
            bottom 0
            right 0
            top 50px
            margin auto
            height 300px
            position absolute
            .img
              vertical-align middle
              width 248px
              height 248px
              background-position center center
              background-size 140px
              background-repeat no-repeat
              display inline-block
            .txt
               font-size 14px
            .login
               margin-top -75px
               .txt-login
                  color #999
               .btn
                 margin auto
                 width 245px
                 color #fff
                 background-color #b4282d
</style>

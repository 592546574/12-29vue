<!--调背景图切记background-size 只能用统一得1个px调千万不要用两个-->
<template>
  <div class="app">
    <div class="app-m">
      <header class="header">
        <div class="header_min">
          <div class="min">
            <div class="psc">
              <div class="psc-i">
                <a href="/Msite" class="psc-a">
                  <i class="iconfont icon-shouye2"></i>
                </a>
              </div>
              <div class="disc">
                <a href="###" class="fam">
                  <i class="icon"></i>
                </a>
              </div>
              <div class="copy">
                <a href="">
                  <i class="iconfont icon-sousuo1" @click="$router.push(`/search`)"></i>
                </a>
                <a href="">
                  <i class="iconfont icon-qicheqianlian-1-copy" @click="$router.push(`/ShopCart`)"></i>
                </a>
              </div>
            </div>
            <div class="shop">
              <div class="shop-cart">
                <div class="img" style="background-image: url(//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png)"></div>
                <div class="txt">
                  <div class="login">
                    <div class="btn">
                      <i class="icon" style="background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png)"></i>
                      <span @click="$router.push(`/login`)">手机号码登录</span>
                    </div>
                    <div class="mail main-btn" >
                      <i class="icon icon-btn" style="background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png)"></i>
                      <span @click="$router.push(`/login`)">邮箱账号登录</span>
                    </div>
                    <div class="txt-login">手机号快捷注册></div>
                  </div>
                </div>
                <div class="tab">
                  <div class="wechat">
                    <a href="###" class="wechat-a">
                      <i class="icon" style="background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png)"></i>
                      <span class="wechat-span">微信</span>
                    </a>
                    <a href="###" class="wechat-a">
                      <i class="icon icon-ten" style="background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png)"></i>
                      <span class="wechat-span">QQ</span>
                    </a>
                    <a href="###" class="wechat-a">
                      <i class="icon icon-micr" style="background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png)"></i>
                      <span class="wechat-wei">微博</span>
                    </a>
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
          position relative
          margin auto
          box-sizing border-box
          padding 0 15px
          .psc-i
            float left
            width 23px
            display block
            .psc-a
              display block
              .iconfont
                display block
                font-size 25px
          .disc
            left 50%
            top 0
            width 160px
            height 100%
            line-height 50px
            text-align center
            margin-left -95px
            color #7F7F7F
            position absolute
            .disc-ove
              font-size 20px
              color #b4282d
              font-weight bold
            .fam
              padding 5px 35px
              position absolute
              left 0
              top 0
              bottom 0
              right 0
              margin auto
              .icon
                background-position 0 -77px
                display inline-block
                vertical-align middle
                background-size 100px
                background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png)
                background-repeat no-repeat
                width 189px
                height 38px
          .copy
            width 76px
            float right
            height 100%
            margin-right -5px
            display block
            .iconfont
              padding 5px
              font-size 25px


        .shop
            width 100%
            left 0
            bottom 0
            z-index -1
            background-color #F2F5F4
            text-align center
            top 30px
            position fixed
            .shop-cart
              left 0
              bottom 0
              right 0
              top 10px
              margin auto
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
                margin-top -15px
                .txt-login
                  color #999
                .btn
                  margin auto
                  width 320px
                  color #fff
                  background-color #b4282d
                  .icon
                    vertical-align middle
                    background-repeat no-repeat
                    width 20px
                    height 20px
                    background-size 22px
                    background-position 0px -29px
                    display inline-block
                .mail
                  margin auto
                  width 320px
                  color #fff
                  top 5px
                  margin-top 10px
                  border 1px solid #b4282d
                .main-btn
                  color #b4282d
                  .icon-btn
                    color #b4282d
                    vertical-align middle
                    background-repeat no-repeat
                    width 30px
                    height 30px
                    /*background-size 30px 335px*/
                    background-position 3px 4px
                    background-size 22px
                    display inline-block
              .tab
                height 20px
                position absolute
                left 0
                bottom 70px
                width 100%
                text-align center
                .wechat

                  text-align center
                  display inline-block
                  height 20px
                .wechat-a
                  position relative
                  top -13px
                  height 20px
                  .icon
                    background-color #333
                    //color #333 !important
                    vertical-align middle
                    background-repeat no-repeat
                    width 20px
                    height 20px
                    background-size 20px
                    background-position 0px -125px
                    display inline-block
                    position relative
                    right -19px
                    top -2px
                  .icon-ten
                    vertical-align middle
                    background-repeat no-repeat
                    width 20px
                    height 20px
                    background-size 20px
                    background-position 0px -76px
                    display inline-block
                    position relative
                    right -19px
                    top -2px
                  .icon-micr
                    vertical-align middle
                    background-repeat no-repeat
                    width 20px
                    height 20px
                    background-size 20px
                    background-position 0px -99px
                    display inline-block
                    position relative
                    right -19px
                    top -2px
                  .wechat-span
                    line-height 16px
                    font-size 16px
                    color #7F7F7F
                    border-right 1px solid #979797
                    padding 0 15px
                    height 16px
                  .wechat-wei
                    line-height 16px
                    font-size 16px
                    color #7F7F7F
                    padding 0 15px
                    height 16px
</style>

<template>
  <div>
    <!--//头部-->
    <header>
      <div class="MyHeader">
        <span>
          <a href="/msite" class="logo">网易严选</a>
        </span>
          <input type="text" placeholder="搜索商品，共19918款好物" class="field" @click="$router.push(`/search`)">
          <button class="btn" @click="$router.push(`/login`)">登陆</button>
        </div>
      <div class="header-title">
        <div class="wrapper">
          <ul class="mask">
            <li class="active">
              <a href="###">推荐</a>
            </li>
            <li>
              <a href="###">居家</a>
            </li>
            <li>
              <a href="###">鞋包服饰</a>
            </li>
            <li>
              <a href="###">服装</a>
            </li>
            <li>
              <a href="###">电器</a>
            </li>
            <li>
              <a href="###">洗护</a>
            </li>
            <li>
              <a href="###">饮食</a>
            </li>
            <li>
              <a href="###">餐厨</a>
            </li>
            <li>
              <a href="###">婴童</a>
            </li>
            <li>
              <a href="###">文体</a>
            </li>
            <li>
              <a href="###">超级会员</a>
            </li>
            <span class="geeen"></span>
          </ul>
        </div>
        <div></div>
      </div>
      <div class="msite_nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(focus,index) in focusList" :key="index">
              <img :src="focus.picUrl">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="msite_title">
        <ul class="title_l">
          <li class="item" v-for="(policy,index) in policyDescList" :key="index">
            <a href="###">
              <i class="u-icon u-icon-servicePolicy-index"></i>
              <span class="text">{{policy.desc}}</span>
            </a>
          </li>
        </ul>
      </div>
      <!--content-->
      <div class="content">
        <div class="content_list">
          <div class="list_text">
            <a href="king.schemeUrl" class="list-a" v-for="(king,index) in kingKongList" :key="index">
              <div class="img">
                <img :src="king.picUrl" alt="">
              </div>
              <div class="txt">{{king.text}}</div>
            </a>
          </div>
        </div>
        <div class="liner"></div>
        <div class="module">
          <div class="moduleTitle">
            <span class="moduleTxt">新人专享礼</span>
          </div>
          <div class="module-content">
            <a href="###" class="left">
              <div class="name">新人专享礼包</div>
              <div class="is-left">
                <div class="loay">
                  <img src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" alt="">
                </div>
              </div>
            </a>
            <div class="right">
              <div class="right1" v-for="(activ,index) in indexActivityModule" :key="index">
                <a href="###" class="m-a" style=" background-size: 100% 100%;">
                  <div class="picWrap">
                    <div class="pic_loade">
                      <img :src="activ.picUrl">
                    </div>
                    <div class="count">
                      <div class="line1">￥{{activ.activityPrice}}</div>
                      <div class="lin2">￥{{activ.originPrice}}</div>
                    </div>
                  </div>
                  <div class="cnt">
                    <div class="title">{{activ.title}}</div>
                    <div class="subTitle">{{activ.subTitle}}</div>
                  </div>
                  <div></div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="liner"></div>
        <div class="more">
          <div class="MyMore">
            <div class="left">品牌制造商直供</div>
            <a href="###" class="right">
              <span>更多></span>
              <i class="icon u-icon u-icon-index-titleArrow"></i>
            </a>
          </div>
          <ul class="list">
            <a href="###" class="item" :style="`background-image:url(${list.picUrl});background-size:100% 100%;`"
               v-for="(list,index) in tagList" :key="index">
              <div class="list-item">
                <h4 class="title">{{list.name}}</h4>
                <div>
                  <span class="price">{{list.floorPrice}}元起</span>
                  <i class="newIcon" v-if="list.newOnShelf">上新</i>
                </div>
              </div>
            </a>
          </ul>
        </div>
        <div class="liner"></div>
      </div>
    </header>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data(){
      return{
        scrollX:true,
        click:true
      }
    },
    computed:{
      ...mapState([
        'tagList',
        'focusList',
        'policyDescList',
        'kingKongList',
        'indexActivityModule'
      ])
    },
    watch:{
      focusList(){
        this.$nextTick(() =>{
          new Swiper ('.swiper-container', {
            autoplay:true,
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
      })
    }
  },
    mounted (){
      this.$nextTick(()=>{
        new BScroll('.wrapper',{
          scrollX: true,
          click: true
        })
      })

        this.$store.dispatch(`getTagList`)
      this.$store.dispatch(`getFocusList`)
      this.$store.dispatch(`getPolicyDescList`)
      this.$store.dispatch(`getKingKongList`)
      this.$store.dispatch(`getIndexActivityModule`)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .header
     width 100%
    .MyHeader
      width 100%
      height 45px
      text-align center
      line-height 40px
      .logo
        padding-right 20px
      .field
         background-color #eee
         height 22px
      .btn
         margin-left 10px
         color #b4282d
         border-radius 5px
         border 1px solid #b4282d
         background-color #fff


    .header-title
      width 100%
      .wrapper
        box-sizing border-box
        width 100%
        .mask
          position relative
          float left
          overflow hidden
          width 100%
          height 30px
          li
           display inline-block
           height 25px
           line-height 25px
           padding-left 20px
           a
            color #333
           &.active
             color  red
             a
              color red


          .geeen
            position absolute
            left 19px
            bottom 1px
            width 34px
            height 2px
            display block
            background red
    .msite_nav
      bottom-border-1px(#e4e4e4)
      .swiper-container
        width 100%
        height 100%
      .swiper-wrapper
         width 100%
         height 100%
         img
           width 100%
           height 100%
    .msite_title

      .title_l
        width 375px
        height 35px
        display flex
        align-items center
        padding 0 10px
        zoom 1
        font-size 12px
        .item
          float left
          flex 1
          a
            cursor pointer
            vertical-align middle
            display inline-block
            color #b4282d
            .text
              display inline-block
              text-align center
              line-height 35px
            .u-icon
              display inline-block
              width 16px
              height 16px
              background-image url("http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png")
              background-size 16px 16px
    .content
      .content_list
        width 375px
        height 201px
        .list_text
          width 375px
          height 175px
          .list-a
             float left
             display block
             width 55px
             height 78px
             margin 10px 10px 1px
             .img
              width 55px
              height 55px
              img
               width 55px
               height 55px
               display block
             .txt
               color #333
               margin-top 2px
               font-size 12px
               text-align center

      .liner
        width 375px
        height 10px
        background-color #f4f4f4
      .module
         height 277px
         background #fff
         .moduleTitle
           width 100%
           height 45px
           line-height 45px
           text-align center
           .moduleTxt
             display inline-block
             position relative
            &::before
              content ''
              position absolute
              top 545px
              width 15px
              height 3px
              left 120px
              background #333
            &::after
              content ''
              position absolute
              top 545px
              width 15px
              height 3px
              right  120px
              background #333
      .module-content
         padding-left 15px
         height 217px
         .left
           display block
           width 171px
           height 217px
           background #f9e9cf
           border-radius 2px
           margin-right 2px
           float left
           color #333
           .name
             padding 25px 0 0 35px
           .is-left
             margin 20px auto
             width 100px
             height 100px
             .loay
               width 100px
               height 100px
               img
                 height 100%
                 width 100%
         .right
           float left
           .right1
             background #fbe2d3
             border-radius 3px
             width 171px
             margin-bottom 2px
             height 107px
             .m-a
               height 97px
               display block
               color #333
               width 171px
               float left
               border-radius 1px
               margin 16px 0 0 -6px
               padding 0 1px 1px 21px
               position relative
               font-size 16px
               .picWrap
                 top:-6px
                 position absolute
                 right 83px
                 width 30px
                 height 20px
                 .pic_loade
                   width 100px
                   height 100px
                   img
                     width 100%
                     height auto
                 .count
                   position absolute
                   top 0
                   right -40px
                   width 45px
                   height 35px
                   opacity 0.8
                   background #f59524
                   border-radius 50%
                   padding-top 6px
                   color #fff
                   text-align center
                   .line1
                     font-size 12px
                   .lin2
                     font-size 12px
                     margin-top 3px
                     text-decoration line-through
               .cnt
                 position relative
                 .title
                   font-family PingFangSC-Medium
                   font-size 14px
                 .subTitle
                   color #7f7f7f
                   font-size 12px
                   padding-top 4px
           .right2
             background #ffecc2
             border-radius 4px
             width 171px
             height 107px
             .m-a
               height 97px
               display block
               color #333
               width 171px
               float left
               border-radius 1px
               margin 16px 0 0 -6px
               padding 0 1px 1px 21px
               position relative
               font-size 16px
               .picWrap
                 top:-6px
                 position absolute
                 right 83px
                 width 30px
                 height 20px
                 .pic_loade
                   width 100px
                   height 100px
                   img
                     width 100%
                     height auto
                 .count
                   position absolute
                   top 0
                   right -40px
                   width 45px
                   height 35px
                   opacity 0.8
                   background #f59524
                   border-radius 50%
                   padding-top 6px
                   color #fff
                   text-align center
                   .line1
                     font-size 12px
                   .lin2
                     font-size 12px
                     margin-top 3px
                     text-decoration line-through
               .cnt
                 position relative
                 .title
                   font-family PingFangSC-Medium
                   font-size 14px
                 .subTitle
                   color #7f7f7f
                   font-size 12px
                 .tag
                   display inline-block
                   padding 0 2px
                   height 13px
                   background #cbb693
                   border-radius 2px
                   color #fff
                   font-size 12px
                   line-height 13px
                   text-align center
                   position relative


      .more
         margin-top 5px
         margin-bottom 5px
         padding-bottom 2px
         .MyMore
           height 50px
           line-height 50px
           padding 0 15px
           background #fff
           overflow hidden
           width 100%
           .left
             float left
             font-size 16px
           .right
             display block
             color #333
             font-size 16px
             line-height 50px
             margin-right 25px
             float right
             .u-icon-index-titleArrow
               vertical-align middle
               /*background-image url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAXCAMAAADneDWzAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUdwTIGBgYCAgIKCgoCAgICAgICAgICAgICAgICAgICAgH9/f6rzN9MAAAALdFJOUwByDCFi4cMakMI/UtXynAAAADBJREFUGNNjYGZkYkAADm42JC4z64BxOZEcxcjNzQ7nsHBzM9KdAwwXJA4DAzsSGwBwxAJCMGFI9gAAAABJRU5ErkJggg==)
               background-repeat no-repeat*/
               background-size 100% 100%
               width 5px
               height 5px
               display inline-block



         .list
           position relative
           background #fff
           margin-bottom 5px
           padding 0 3px 3px 6px
           //overflow hidden
           .item
             position relative
             margin 0 -12px 1px 0
             margin-left 10px
             width 171px
             height 130px
             //overflow hidden
             background-color #f4f4f4
             border-radius 5px
             display inline-block
             .list-item
               left 0
               top 0
               padding-top 10px
               width 100%
               z-index 4
               text-align center
               position absolute
               .title
                 white-space normal
                 //overflow hidden
                 color #333
                 font-size 14px
                 line-height 20px
                 margin-bottom 5px
                 text-overflow ellipsis
               .price
                 color #7f7f7f
                 font-size 12px
               .newIcon
                 width 35px
                 height 16px
                 color #fff
                 font-size 13px
                 line-height 16px
                 text-align center
                 background #cbb693
                 border-radius 4px
                 margin-left 3px
                 display inline-block

</style>

<!--for循环如果有多个a标签就在它父级div上直接循环，如果判断type值就用你判断的值v-show然后循环的值然后又type===0/1-->
<template>
  <div class="content">
    <div class="content-list" v-for="(li,index) in list" :key="index">
      <a href="###" v-show="li.type===0">
        <div class="liner"></div>
        <div class="list-name">
          <span class="icon">
            <img :src="li.avatar" width="100%" height="100%">
            <!--<img :src="manual.picUrl" height="100%">-->
          </span>
          <span>{{li.nickname}}</span>
        </div>
        <div class="Net">{{li.title}}</div>
        <div class="pic">
          <img :src="li.picUrl" width="100%" height="100%">
        </div>
        <div class="count">
          <i class="icon" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==)" ></i>
          <span>{{li.readCount}}人看过</span>
        </div>
      </a>
      <a href="###" class="gent" v-show="li.type===1">
        <div class="liner"></div>
        <div class="info">
          <div class="list-name">
          <span class="icon">
            <img :src="li.avatar" width="100%" height="100%">
          </span>
            <span>{{li.nickname}}</span>
          </div>
          <div class="Net ellipsis">{{li.subTitle}}</div>
          <div class="new ellipsis">{{li.title}}</div>
          <div class="count">
            <i class="icon" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==)" ></i>
            <span>{{li.readCount}}人看过</span>
          </div>
        </div>
        <div class="tpic">
          <img :src="li.picUrl" width="100%" height="100%">
        </div>
      </a>
      <a href="###" v-show="li.type===2">
        <div class="liner"></div>
        <div class="product">1月4日新品放映室</div>
        <div class="week">
          本周严选带来了火锅汤底和颜值锅具，让你在家也能组起火锅趴，还有被时尚杂志pick的明星款耳饰和男式夹克，年底聚会扎推，备好红火美食和新年战袍，老友相见才能不输阵哦~
        </div>
        <ul class="list-tab">
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
          <li>
            <img src="https://yanxuan.nosdn.127.net/10a2fdb71a012ad31732a483180a68d3.png?imageView&quality=65&thumbnail=272y272" width="100%" height="100%">
          </li>
        </ul>
        <div class="count">
          <i class="icon" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==)" ></i>
          <span>168人看过</span>
        </div>
      </a>
    </div>
    <div class="liner"></div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  //https://m.you.163.com/topic/static/look/index
  export default {
    computed:{
      ...mapState(['recManual']),
      //将多维数组遍历成一维数组，recManual原数组外层得，topics里面得二维数组list定义得空数组，
      list(){
        const list = []
        this.recManual.forEach(item =>{
          item.topics.forEach(i =>{
            list.push(i)
          })
        })
        return list
      }
    },
    mounted(){
      this.$store.dispatch('getRecManual')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    width 100%
    margin-top 75px
    .content-list
      background #fff
      margin 5px 0
      box-sizing border-box
      padding 5px 15px
      width 100%
      .gent
        display block
        height 170px
      .list-name
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


      .liner
          padding 0 15px
          margin-left -15px
          width 100%
          height 10px
          background-color #f4f4f4
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
        top -130px
        img
          overflow hidden
          display inline-block
          border-radius 3px

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


</style>

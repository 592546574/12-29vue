<template>
  <div class="content">
    <div class="content-list">
      <a href="###" v-for="(li,index) in list" :key="index">
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
          <i class="icon" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR…UMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==)"></i>
          <span>{{li.readCount}}w人看过</span>
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
    display flex
    flex-flow nowrap
    justify-content space-around
    .content-list
      background #fff
      margin 5px 0
      box-sizing border-box
      padding 5px 15px
      width 100%
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
          width 14px
          height 10px
          display inline-block


      .liner
          padding 0 15px
          margin-left -15px
          width 100%
          height 10px
          background-color #f4f4f4
</style>

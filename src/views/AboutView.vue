<template>
  <span>{{}}</span>
</template>

<script>

  import mixin from '../mixins/mixin';
export default {
  name: 'AboutView',

  data: () => ({
  }),
  methods:{
    // async postAdTrafficByKeywords() {
    //   const url = `keywords_data/google/ad_traffic_by_keywords/task_post`;
    //   await this.$http.post(url,
    //     [
    //       {
    //         "language_code" : this.langSelected.language_code,
    //         "location_code" : this.locationSelected.location_code,
    //         "bid" : this.bid,
    //         "match": "exact",
    //         "keywords" : [this.keywords],
    //       }
    //     ],
    //   ).then((res)=>{
    //     this.id = res.data.tasks[0].id
    //   })
    // },
    
  },
  watch:{
  },
  mixins: [mixin],
}
</script>

<style lang="scss">


</style>

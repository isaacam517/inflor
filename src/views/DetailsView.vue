<template>
  <span>{{this.detailsPeople}}</span>
</template>

<script>
  import mixin from '../mixins/mixin';
export default {
  name: 'DetailsView',

  data: () => ({
    url: '',
    detailsPeople: undefined
  }),
  mounted() {
    
    this.url = JSON.parse(localStorage.getItem("detailsUrl"))

    
    },
  methods:{
    getDetails() {
      this.axios
      .get(this.url)
      .then(res => {
        this.detailsPeople = res.data;
      });
    },
  },
  watch:{
    url () {
      this.getDetails()
    }
  },
  mixins: [mixin],
}
</script>

<style lang="scss">


</style>

export default {
   data: () => ({
    baseUlr: 'https://swapi.dev/api/people/',
    peoples: []
   
  }),
  mounted() {
    this.loadPeoples()
  },
   methods: {
    loadPeoples() {

      const url = this.baseUlr
      console.log(url)
      this.axios
      .get(url)
      .then(res => {
        // console.log(res.data)
        this.peoples = res.data;
      });
    },
  },
  watch: {
     baseUlr() {
      if(this.baseUlr != 'nada') {
        this.loadPeoples()
      }
     }
  }
};

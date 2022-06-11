export default {
   data: () => ({
    baseUlr: 'https://swapi.dev/api/people/',
    detailsUrl: '',
    peoples: [],
  }),
  mounted() {
    this.loadPeoples()
  },
   methods: {
    loadPeoples() {
      const url = this.baseUlr
      this.axios
      .get(url)
      .then(res => {
        this.peoples = res.data;
      });
    },
  },
  watch: {
    baseUlr() {
      if(this.baseUlr != 'nada') {
        this.loadPeoples()
      }
    },
    detailsUrl() {
      if(this.detailsUrl != null) {
        localStorage.setItem("detailsUrl", JSON.stringify(this.detailsUrl))
        this.$router.push('/detalhes-do-personagem');
      }
     }
  }
};

<template>
<div class="basket">
    <div class="items">

      <template v-if="detailsPeople">
        <div class="item">
          <div class="photo">
            <img src="" alt="">
          </div>
          <div class="description">NOME : {{this.detailsPeople.name}}</div>
          <div class="description">IDADE : {{this.detailsPeople.birth_year}}</div>
          <div class="description">ALTURA : {{this.detailsPeople.height}}cm</div>
          <div class="description">PESO : {{this.detailsPeople.mass}}kg</div>
          <div class="description">Naves Estelares : {{this.detailsPeople.starships.length}}</div>
          <div v-for="(ship, index) in detailsPeople.starships" :key="index" class="price">
            <button @click="this.startShipUrl=ship">Nave {{index+1}}</button>
          </div>
        </div> 
        <template v-if="detailsOfShip">
          <div class="grand-total"> Detalhes da Nave </div>
          <div class="description">Nome da Nave : {{this.detailsOfShip.name}}</div>
          <div class="description">Capacidade de Carga : {{this.detailsOfShip.cargo_capacity}}</div>
          <div class="description">Tripulação : {{this.detailsOfShip.crew}}</div>
          <div class="description">Comprimento : {{this.detailsOfShip.length}}M</div>
          <div class="description">Passageiros : {{this.detailsOfShip.passengers}}</div>
          <div class="description">Classe : {{this.detailsOfShip.starship_class}}</div>
          <div class="description">Modelo : {{this.detailsOfShip.model}}</div>
          <div class="description">Fabricante : {{this.detailsOfShip.manufacturer}}</div>
          <div class="description">velocidade máxima de atmosfera : {{this.detailsOfShip.max_atmosphering_speed}}Mph</div>
        </template>
        <!-- <template v-else>
          <h4>Carrinho Vazio</h4>
        </template>  -->
      </template>
      <template v-else>
        <h4>.</h4>
      </template>

    </div>
  </div>
</template>

<script>
  import mixin from '../mixins/mixin';
export default {
  name: 'DetailsView',

  data: () => ({
    url: '',
    detailsPeople: undefined,
    startShipUrl: '',
    detailsOfShip: undefined
  }),
  mounted() {
    
    this.url = JSON.parse(localStorage.getItem("detailsUrl"))

    
    },
  methods:{
    getDetails() {
      this.axios
      .get(this.url)
      .then(res => {
        console.log(res.data)
        this.detailsPeople = res.data;
      });
    },
    detailsShip() {
      this.axios
      .get(this.startShipUrl)
      .then(res => {
        console.log(res.data)
        this.detailsOfShip = res.data;
      });
    },
  },
  watch:{
    url () {
      this.getDetails()
    },
    startShipUrl () {
      this.detailsShip()
    },

  },
  mixins: [mixin],
}
</script>

<style lang="scss">

.basket {
  padding: 60px 0;  
  .items {
    max-width: 800px;
    margin: auto;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }

      .quantity-area {
        margin: 8px auto;
        height: 14px;

        button {
          width: 16px;
          height: 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .quantity {

            margin: 0 4px;
        }
      }

      .photo {
        img {
          max-width: 80px;
        }
      }

      .description {
        padding-left: 30px;
        box-sizing: border-box;
        max-width: 50%;

      }

      .price {
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;

        }
      }
    }
      .grand-total {
          font-size: 24px;
          font-weight: bold;
          text-align: right;
          margin-top: 8px;
      }

  }

}

</style>
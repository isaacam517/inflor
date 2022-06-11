<template>
<div class="basket">
    <div class="items">
      <template v-if="detailsPeople">
        <div class="item">
          <div class="people-image" :style="{backgroundImage: 'url(https://picsum.photos/200/300)'}"></div>
          <div class="description"><strong>NOME : </strong> <span class="nome">{{this.detailsPeople.name}}</span> </div>
          <div class="description"><strong>IDADE : </strong> <span>{{this.detailsPeople.birth_year}}</span> </div>
          <div class="description"><strong>ALTURA :  </strong> <span>{{this.detailsPeople.height}}cm</span> </div>
          <div class="description"><strong>PESO : </strong> <span>{{this.detailsPeople.mass}}kg</span> </div>
          <div class="description"><strong>Naves Estelares : </strong> <span>{{this.detailsPeople.starships.length}}</span> </div>
          <div class="ships">
            <span v-for="(ship, index) in detailsPeople.starships" :key="index">
              <button @click="this.startShipUrl=ship">Nave {{index+1}}</button>
            </span>
          </div>
        <template v-if="detailsOfShip">
          <div class="grand-total"> Detalhes da Nave </div>
          <div class="description-ship">Nome da Nave : <span>{{this.detailsOfShip.name}}</span> </div>
          <div class="description-ship">Capacidade de Carga : {{this.detailsOfShip.cargo_capacity}}</div>
          <div class="description-ship">Tripulação : {{this.detailsOfShip.crew}}</div>
          <div class="description-ship">Comprimento : {{this.detailsOfShip.length}}M</div>
          <div class="description-ship">Passageiros : {{this.detailsOfShip.passengers}}</div>
          <div class="description-ship">Classe : {{this.detailsOfShip.starship_class}}</div>
          <div class="description-ship">Modelo : {{this.detailsOfShip.model}}</div>
          <div class="description-ship">Fabricante : {{this.detailsOfShip.manufacturer}}</div>
          <div class="description-ship">velocidade máxima de atmosfera : {{this.detailsOfShip.max_atmosphering_speed}}Mph</div>
        </template>
        </div> 
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
        this.detailsPeople = res.data;
      });
    },
    detailsShip() {
      this.axios
      .get(this.startShipUrl)
      .then(res => {
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
      box-sizing: border-box;  
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      background-color: #DCDCDC;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;

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

      .people-image {
        margin: 20px auto;
        width: 300px;
        height: 200px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }

      .description {
        margin: 8px auto;
        padding-left: 30px;
        box-sizing: border-box;
        span {
          color: red;
          font-size: 16px;
          font-weight: 600;
        }
        span.nome {
          color: red;
          font-size: 20px;
          font-weight: 700;
        }

      }
      .description-ship {
        margin: 5px auto;
        box-sizing: border-box;
        span {
          color: red;
          font-size: 16px;
          font-weight: 600;
        }
      }

      .ships {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        button {
          color: #fff;
          background-color: #4B0082;
          border: 1px solid #4B0082;
          border-radius: 100px;
          font-weight: 400;
          text-align: center;
          margin: 20px 20px;
          padding: 16px 32px;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }
        }

        @media only screen and (max-width: 720px) {
          flex-direction: column;
          flex: 0 0 90%;
        }
      }
    }
      .grand-total {
          font-size: 24px;
          font-weight: bold;
          text-align: center;
          margin-top: 8px;
      }

  }

}

</style>
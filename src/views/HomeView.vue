<template>
  <div class="home">
    <div class="peoples">
      <div 
        v-for="(people, index) in this.peoples.results" :key="index"
        class="people"
        >
        <div class="people-image" :style="{backgroundImage: 'url(https://picsum.photos/200/300)'}">
        </div>
        <h4 class="people-name">{{people.name}}</h4>
        <p >Ano de Nascimento: {{people.birth_year}}</p>
        <button @click="this.detailsUrl=people.url">Detalhes</button>
      </div>
    </div>
    <button v-if="peoples.previous"
      @click="this.baseUlr=peoples.previous"
    >Anterior</button>
    <button v-if="peoples.next"
      @click="this.baseUlr=peoples.next"
    >Próxima</button>
  </div>
</template>

<script>
import mixin from '../mixins/mixin'
export default {
  name: 'HomeView',
  mixins: [mixin]
}
</script>

<style lang="scss">

  .home {

    .peoples {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;


      .people {
        flex: 0 0 18%;
        box-sizing: border-box;  
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 16px;
        margin: 8px;
        height: 350px;

        @media only screen and (max-width: 769px) {
          flex: 0 0 40%;
        }

        @media only screen and (max-width: 640px) {
          flex: 0 0 90%;
        }

        &.inBag {
          border: 1px solid #007bff;
        }
        
        .people-image {
          margin: 20px auto;
          width: 160px;
          height: 140px;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
        h4.people-name {
          font-size: 20px;
          font-weight: bold;
        }

        p {
          margin: 22px auto;
          font-size: 12px;
          max-width: 60%;
          font-weight: normal;
        }

        button {
          color: #fff;
          background-color: #007bff;
          border: 1px solid #007bff;
          border-radius: 100px;
          font-weight: 400;
          text-align: center;
          padding: 8px 16px;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }

          &.remove {
            background-color: transparent;
            border: none;
            color: black;
            text-decoration: underline;
          }
        }
      }
    }

    button {
        color: #fff;
        background-color: #007bff;
        border: 1px solid #007bff;
        border-radius: 100px;
        font-weight: 400;
        text-align: center;
        padding: 8px 16px;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }

        &.remove {
          background-color: transparent;
          border: none;
          color: black;
          text-decoration: underline;
        }
      }
  }

</style>
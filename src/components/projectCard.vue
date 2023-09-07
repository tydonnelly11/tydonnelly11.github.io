<template>
    <div class="card" :class="{ flipped: isFlipped }" @click="flipCard">
      <div class="card-inner">
        <div class="card-front" >
         
          <img :src="`${image}`">
        </div>
        <div class="card-back">
          <div class="content">
          <ul>
            <li v-for="item in list">{{item}}</li>
            <a >{{ github }}</a>
          </ul>

          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "projectCard",
    props: {
      title: String,
      description: String,
      image: String,
      list: Array,
      github: String
    },
    data() {
      return {
        isFlipped: false,
      };
    },
    methods: {
      flipCard() {
        this.isFlipped = !this.isFlipped;
      },
    },
  };
  </script>
  
  <style scoped>
  .content{
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    height: 100%;
  }
  .card {
    width: 100%;
    height: auto;
    perspective: 1000px;
    margin-bottom: 7.5%;

  }
  ul{
    line-height: 2rem;
  }
  ul li{
    font-size: 1rem;
  }
  img{
    height: 100%;
    object-fit: cover;
    border: 1px solid black;
    max-width: 90%;
  }
  
  .card-inner {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
  }
  
  .flipped .card-inner {
    transform: rotateY(180deg);
  }
  

  .card-front {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    object-fit: cover;
    background-repeat: no-repeat;
    transform: rotateY(0deg); 

  }
  
  .card-back {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0e0e0;
    transform: rotateY(-180deg);
    position: absolute;
    top: 0;
  }

  @media screen and (max-width: 720px) {
      ul li{
          font-size: .70rem;
      }
      ul{
        line-height: 1rem;
      }
    }
    
  </style>
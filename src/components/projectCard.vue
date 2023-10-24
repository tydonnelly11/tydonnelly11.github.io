<template>
  <div class="project-container">
    <div class="card" :class="{ flipped: isFlipped }" @click="flipCard">
      <div class="card-inner">
        <div class="card-front" >

         
          <img :src="`${image}`">
        </div>
        <div class="card-back">
          <div class="content">
          <ul>
            <li v-for="item in list">{{item}}</li>
            
          </ul>

          </div>
        </div>
      </div>
    </div>
    <div class="text">
      <h4 :style="{ zIndex: isFlipped ? '-1000' : '0' }">Click Me</h4>
      <a :href="github" target="_blank">
            <button class="button-project">
            <i class="fa-brands fa-square-github fa-2xl">
            </i>
            </button>
            
      </a>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: "projectCard",
    props: {
      
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
 .button-project > i{
  font-size: 2.5rem;
  position: relative;
  left: -2px;
 }
  .project-container{
    display: flex;
    
  }
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

  }
  ul{
    line-height: 2rem;
  }
  ul li{
    font-size: .8rem;
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
  .button-project{
    margin-top: 5%;
    position: relative;
    left: 30px;
    padding: 0;
    top: 7.5px;
    width: 90%;
    height: 115%;
  }

  h4{
    margin: 0;
    position: relative;
    left: 38px;
    color: white;
    bottom : 25px;
  }
  

  .card-front {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1A1A1A;
    object-fit: cover;
    background-repeat: no-repeat;
    transform: rotateY(0deg); 

  }
  
  .card-back {
    width: 90%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0e0e0;
    transform: rotateY(-180deg);
    position: absolute;
    top: 0;
    left: 24px;
  }
  .text{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
  }

  @media screen and (max-width: 720px) {
      ul li{
          font-size: .70rem;
      }
      ul{
        line-height: 1rem;
      }
      .text{
        margin-bottom: 2.5%;
      }
      button{
        padding: 0;
        left: 15px;
        top: 5px;
      }
      .card-back{
        left : 0px;
      }
      .content{
        color: black;
      }
    }
    
  </style>
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
            <li v-for="(item, index) in list" :key="index">{{item}}</li>

          </ul>

          </div>
        </div>
      </div>
    </div>
    <div class="text">
      <span class="flip-hint" :style="{ opacity: isFlipped ? 0 : 1 }">Click to flip</span>
      <a :href="github" target="_blank" @click.stop>
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
  .project-container{
    display: flex;
    flex-direction: column;
    background-color: var(--color-surface);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
    padding: var(--space-3);
    gap: var(--space-2);
  }
  .card {
    width: 100%;
    aspect-ratio: 4 / 3;
    perspective: 1000px;
    cursor: pointer;
    border-radius: var(--radius-sm);
    overflow: hidden;
  }
  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
    border-radius: var(--radius-sm);
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
    background-color: var(--color-surface-alt);
  }

  .card-front img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .card-back {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--accent-projects-soft);
    transform: rotateY(-180deg);
    position: absolute;
    inset: 0;
    padding: var(--space-3);
  }

  .content{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  ul{
    line-height: 1.7rem;
    margin: 0;
    padding-left: 1.1em;
  }
  ul li{
    font-size: .8em;
    color: var(--color-text);
    list-style-position: inside;
  }

  .text{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 var(--space-1);
  }

  .flip-hint{
    color: var(--color-text-muted);
    font-size: 0.85rem;
    transition: opacity 0.3s ease;
  }

  .button-project{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border-radius: var(--radius-pill);
    background-color: var(--accent-projects-soft);
    border: none;
  }

  .button-project > i{
    font-size: 1.3rem;
    color: var(--color-text);
  }

  @media screen and (max-width: 720px) {
      ul li{
          font-size: .70rem;
      }
      ul{
        line-height: 1.3rem;
      }
  }

  </style>

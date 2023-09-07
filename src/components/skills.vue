<template>
    <div class="skill-row">
        <div class="skill-card">
            <img src="/html.svg">
            <p>HTML</p>
        </div>
        <div class="skill-card">

            <img src="/css.png">
            <p>CSS</p>
        </div>
        <div class="skill-card">
            <img src="/vuejs.png">
            <p>Vue.JS</p>
        </div>
        <div class="skill-card">
            
            <img src="/git.png">
            <p>GitHub</p>
        </div>
        </div>
        <div class="skill-row">
        <div class="skill-card">
            <img src="/mysql.png" class="mysql-img">
            <p>MySQL</p>
        </div>
        <div class="skill-card">
            <img src="/python.png">
            <p>Python</p>
        </div>
        <div class="skill-card">
            <img src="/docker.png">
            <p>Docker</p>
        </div>
        <div class="skill-card">
            <img src="/react.png" class="react-img" >
            <p>React</p>
        </div>
        </div>  


</template>

<script>
export default{
    name: 'skills',

}
</script>

<style scoped>

.exp{
    width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
}
.exp:hover{
    box-shadow: 0 0 10px 5px #00f;
}
img{
    max-height: 150px;    
    max-width: 150px;
}
.skill-row{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.skill-card{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
}

p{
    color: whitesmoke;
    font-size: 1.25rem;
}

@media screen and (max-width: 720px) {
    .skill-row{
        flex-direction: column;
        align-items: center;
    }
    p{
        text-align: center;
    }
    
}
</style>
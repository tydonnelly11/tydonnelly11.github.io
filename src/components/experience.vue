<template>
    <div class="exp-container">
        <h1 class="exp-title">{{title}}</h1>
        <p class="exp-company">{{company}}</p>
        <p class="exp-date">{{date}}</p>
        <ul class="exp-list">
            <li v-for="item in list">{{item}}</li>
        </ul>
    </div>


</template>

<script>
export default{
    name: 'experienceCard',
    props: {
        title: String,
        company: String,
        date: String,
        list: Array
    }

}

</script>

<style scoped>
.exp-container{
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
}
.exp-title{
    color: white;
    font-size: 2.25rem;
    margin: 0;
}
.exp-company{
    color: white;
    margin-bottom: 0;
}

.exp-date{
    color: white;
    margin-bottom: 0;
}
.exp-list{
    color: white;
    list-style: ➔;
}
</style>
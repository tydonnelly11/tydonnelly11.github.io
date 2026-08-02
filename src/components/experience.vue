<template>
    <div class="exp-container">
        <h1 class="exp-title">{{title}}</h1>
        <p class="exp-company">{{company}}</p>
        <p class="exp-date">{{date}}</p>
        <ul class="exp-list">
            <li v-for="(item, index) in list" :key="index">{{item}}</li>
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
    height: 100%;
    padding: var(--space-4);
    background-color: var(--color-surface);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    border-top: 4px solid var(--accent-experience);
}
.exp-title{
    color: var(--color-text);
    font-size: 1.6rem;
    margin: 0;
}
.exp-company{
    color: var(--color-text);
    font-weight: 500;
    margin-bottom: 0;
}

.exp-date{
    color: var(--color-text-muted);
    margin-bottom: 0;
}
.exp-list{
    color: var(--color-text);
    list-style: ➔;
}
</style>
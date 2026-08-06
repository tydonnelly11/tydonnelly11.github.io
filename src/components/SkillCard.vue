<template>
    <div class="skill-card">
        <img :src="icon" :alt="label">
        <p>{{ label }}</p>
    </div>
</template>

<script>
export default {
    name: 'SkillCard',
    props: {
        icon: { type: String, required: true },
        label: { type: String, required: true },
    },
}
</script>

<style scoped>
.skill-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--space-2);
    text-align: center;
}

img{
    max-height: 64px;
    max-width: 64px;
}

p{
    color: var(--color-text);
    font-size: 1rem;
    margin: 0;
}
</style>

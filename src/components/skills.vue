<template>
    <div class="skills-card">
        <div class="skills-grid">
            <SkillCard v-for="skill in skillsList" :key="skill.label" :icon="skill.icon" :label="skill.label" />
        </div>
    </div>

</template>

<script>
import SkillCard from './SkillCard.vue';

export default{
    name: 'skills',
    components: {
        SkillCard,
    },
    data() {
        return {
            skillsList: [
                { icon: '/html.svg', label: 'HTML' },
                { icon: '/css.png', label: 'CSS' },
                { icon: '/vuejs.png', label: 'Vue.JS' },
                { icon: '/git.png', label: 'GitHub' },
                { icon: '/mysql.png', label: 'MySQL' },
                { icon: '/javascript.png', label: 'JavaScript' },
                { icon: '/docker.png', label: 'Docker' },
                { icon: '/react.png', label: 'React' },
                { icon: '/python.png', label: 'Python' },
                { icon: '/openqm.png', label: 'OpenQM' },
            ],
        };
    },
}
</script>

<style scoped>

.skills-card{
    padding: var(--space-5);
    background-color: var(--color-surface);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    border-top: 4px solid var(--accent-skills);
}

.skills-grid{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: var(--space-4);
}

@media screen and (max-width: 720px) {
    .skills-grid{
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>

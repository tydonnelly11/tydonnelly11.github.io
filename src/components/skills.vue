<template>
    <div class="skills-card">
        <div class="skills-grid">
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
                <img src="/Java.png">
                <p>Java</p>
            </div>
            <div class="skill-card">
                <img src="/git.png">
                <p>GitHub</p>
            </div>
            <div class="skill-card">
                <img src="/mysql.png" class="mysql-img">
                <p>MySQL</p>
            </div>
            <div class="skill-card">
                <img src="/javascript.png">
                <p>JavaScript</p>
            </div>
            <div class="skill-card">
                <img src="/spring-boot-logo.png">
                <p>SpringBoot</p>
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
    </div>

</template>

<script>
export default{
    name: 'skills',

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

img{
    max-height: 64px;
    max-width: 64px;
}

.skills-grid{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: var(--space-4);
}

.skill-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--space-2);
    text-align: center;
}

p{
    color: var(--color-text);
    font-size: 1rem;
    margin: 0;
}

@media screen and (max-width: 720px) {
    .skills-grid{
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>



<template>
    <div class="navbar">
        <p @click="scrollToSection('aboutme')">About Me</p>
        <p @click="scrollToSection('experience')">Experience</p>
        <p @click="scrollToSection('projects')">Projects</p>
        <p @click="scrollToSection('skills')">Skills</p>
    </div>
<div class="top-level-container">
    
    <div ref='aboutme' >
        <br><br>
        <h1 class="about-me-h1">About me</h1>
        <aboutme/>
    </div>
    <div class="experience-container" ref="experience">
        <br>
        <h1>Experience</h1>
        <experienceCard :title="'Software Developer'" :date="'July-August 2023'" :company="'Forge Tech Custom Steel'" :list=listExperienceOne></experienceCard>
        <experienceCard :title="'Software Engineering Intern'" :date="'June-August 2022'" :company="'Auctane'" :list=listExperienceTwo></experienceCard>
    </div>
<div class="project-container" ref='projects'>
    <br>
    <h1>Projects</h1>
    <div class="card-container">
        <div class="row" >
        <projectCard :image="'/superfrogscheduler.jpg'" :list="listProjectOne" :github="'https://github.com/jhmejia/superfrog-scheduler'"/>
        <projectCard :image="'/bookmanager.jpg'" :list="listProjectTwo"  :github="'https://github.com/tydonnelly11/book-manager'"/>
    </div>
    <!-- <div class="row" >
        <projectCard :image="'/bookmanager.jpg'"/>
        <projectCard :image="'/superfrogscheduler.jpg'"/>
    </div> -->
    </div>
</div>
<div class="skills-container" ref='skills'>
    <h1>Skills</h1>
    <div class="skill-format">
    <skills></skills>
    </div>
</div>
</div>
</template>

<script>
import aboutme from './aboutme.vue';
import experienceCard from './experience.vue';
import projectCard from './projectCard.vue'
import skills from './skills.vue';
export default {
    name: 'Homepage',
    data(){
        return{
            listProjectOne: [
            "Collaborated with a team of four to engineer a comprehensive scheduling system for the renowned school mascot, Superfrog.",
            "Developed intuitive forms for seamless appointment creation and modification, ensuring consistent database interaction.",
            "Employed a Vue.js frontend with Springboot backend",
            

            ],
            listExperienceTwo :[
                "Spearheaded the design and implementation of a dynamic warehouse dashboard leveraging React, HTML, and CSS.",
                "Engineered a user-friendly dashboard layout, integrating flexible graphs and charts that update in real-time with database changes."

            ],
            listExperienceOne: ['Collaborated with clients, converting their specifications into modern and responsive websites.', 
            'Employed a tech stack including HTML, CSS, Vue.js, and several AWS services for site development.', 
            'Deployed at https://forgetechsteel.com/'],
            listProjectTwo: ['A locally hosted book database using MySQL and Python', 
            'Implemented the ability to search by book title, author, ISBN, Publisher, year of publication and price', 
            'Allows for the creation of new books, deletion of existing books, and updating of existing books.',
            ]
        }
    },
    components: {
        projectCard,
        experienceCard,
        aboutme,
        skills
    },
    methods: {
    scrollToSection(targetSection) {
      const target = this.$refs[targetSection]; 
      target.scrollIntoView({ behavior: 'smooth' }); // Scrolls smoothly to the section

    }
    }
}

</script>

<style scoped>
.about-me-h1{
    margin: 0;
}

.skills-container{
    display: flex;
    flex-direction: column;
    width: 95%;
    margin-top: 5%;
    margin-bottom: 7.5%;
}
.navbar{
    width: 100%;
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 0;
    justify-content: space-evenly;
    background-color: black;
    z-index: 9999;

}

.navbar > p{
    color: white;
}
.project-container{
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 5%;

}
.card-container{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    gap: 20%;
    align-items: center;
}

.top-level-container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 90%;
}
h1{
    color: white;
}
.row{
    display: flex;
    justify-content: space-between;
}
.skill-format{
    display: flex;
    flex-direction: column;
}

@media screen and (max-width: 720px){
    .card-container{
        flex-direction: column;
        gap: 5%;
    }
    .row{
        flex-direction: column;
        gap: 5%;
    }

   
    .skill-format{
        flex-direction: row;
        justify-content: space-around;
    }
}
    

</style>
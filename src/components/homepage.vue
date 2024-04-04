

<template>
    <div class="navbar">
        <p @click="scrollToSection('aboutme')">About Me</p>
        <p @click="scrollToSection('experience')">Experience</p>
        <p @click="scrollToSection('projects')">Projects</p>
        <p @click="scrollToSection('education')">Education</p>

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
        <experienceCard :title="'Software Developer Intern'" :date="'July-August 2023'" :company="'Forge Tech Custom Steel'" :list=listExperienceOne></experienceCard>
        <experienceCard :title="'Software Engineering Intern'" :date="'June-August 2022'" :company="'Auctane'" :list=listExperienceTwo></experienceCard>
    </div>
    
<div class="project-container" ref='projects'>
    <br>
    <h1>Projects</h1>
    <div class="card-container">
        <div class="row" >
        <projectCard :github="'https://github.com/tydonnelly11/superfrog-scheduler'" 
                     :image="'/superfrog.jpg'" 
                     :list="listProjectOne" 
                     />
        <projectCard
                    :image="'/loading.jpg'"
                    :list="listProjectThree"
                    :github="'https://github.com/tydonnelly11/pet-frontend'"
        ></projectCard>
        </div>
        <div class="row" :style='"width: 100%"'>
            
            <projectCard
                :image="'/oldF1Logo.webp'"
                :list="listProjectTwo"
                :github="'https://github.com/tydonnelly11/f1-news-aggregation-app'"
                :style="'width : 50%;'"
                />
                <projectCard v-if="false"
                :image="'/background-img.jpg'"
                :list="listProjectTwo"
                :github="'https://github.com/tydonnelly11/f1-news-aggregation-app'"
                :style="'display: none'"></projectCard>

        </div>
    </div>
    
    </div>

<div class="education-container" ref='education'>
    <br><br><br>
    <h1 :style="{margin: '0', position: 'relative', left: '-4px'}" >Education</h1>
    <education></education>
</div>
<div class="skills-container" ref='skills'>
    <br>
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
import education from './education.vue';
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
                "Spearheaded the design and implementation of a dynamic dashboard for warehouses utilizing React, HTML, and CSS for frontend and Express.js for the backend framework.",
                "Contributed to the design of a SQL database for fast and seamless CRUD operations.",
                "Engineered a user-friendly dashboard layout following the scrum methodology, integrating flexible graphs and charts that update in real-time with shipping data entered by warehouse workers."


            ],
            listExperienceOne: ['Worked with the company, converting their specifications into a modern and responsive Single Page Application, which increased user engagement and led to a 50% rise in user contacts compared to the old website.',
            'Employed a tech stack including HTML, CSS, Vue.js, for the frontend and several AWS Cloud services including Route 53, Lambda, Amazon SES, API Gateway for deployment and backend operations.',
            'Implemented and managed CI/CD pipelines using GitHub Actions, ensuring seamless code integration, automated testing, and deployment to the production environment.'],
            listProjectTwo: ["Developed a dynamic Single Page Application (SPA) using React and TypeScript, specifically designed to aggregate and display Formula 1 news, providing the users with up-to-date content.",
            'Utilized an advanced GPT AI model via AI21\'s Summarize API to generate concise summaries of news articles, posts are then saved to a Postgres database hosted and deployed on Vercel'
            ],
            listProjectThree: ['A web application that allows streamlines the process for TCU senior design students to submit class specific forms',
            'Implemented a Vue.js frontend with a Java SpringBoot backend that saves and retrieves data from a MySQL database',
            'This is currently a work in progress, we expect to have the MVP done before new years with the final product to be released in Q2 2024']

        }
    },
    components: {
        projectCard,
        experienceCard,
        aboutme,
        skills,
        education
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
}
.education-container{
    margin-bottom: 2.5%;
}
.navbar{
    width: 100%;
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 0;
    justify-content: space-evenly;
    background-color: #1A1A1A;
    z-index: 9999;

}

.navbar > p{
    color: white;
}
.project-container{
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;

}
.card-container{
    display: flex;
    flex-direction: column;
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
    margin-bottom: 5%;
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
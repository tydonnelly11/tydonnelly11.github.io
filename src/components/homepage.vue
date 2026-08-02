<template>
  <div class="homepage-root">
    <div class="navbar">
        <p @click="scrollToSection('aboutme')">About Me</p>
        <p @click="scrollToSection('experience')">Experience</p>
        <p @click="scrollToSection('projects')">Projects</p>
        <p @click="scrollToSection('education')">Education</p>
        <p @click="scrollToSection('skills')">Skills</p>
    </div>
<div class="top-level-container">

    <section class="bento-section" ref="aboutme">
        <GradientBlob accent="about" size="420px" top="-10%" left="-8%" />
        <h2 class="section-label">About me</h2>
        <div class="section-content">
            <aboutme/>
        </div>
    </section>

    <section class="bento-section" ref="experience">
        <GradientBlob accent="experience" size="440px" top="0%" left="70%" />
        <h2 class="section-label">Experience</h2>
        <div class="section-content experience-grid">
            <experienceCard :title="'Software Engineer 1'" :date="'June,2024-Present'" :company="'Local Government Solutions'" :list=listExperienceOne></experienceCard>
            <experienceCard :title="'Software Engineering Intern'" :date="'June-August 2022'" :company="'Auctane'" :list=listExperienceTwo></experienceCard>
        </div>
    </section>

    <section class="bento-section" ref="projects">
        <GradientBlob accent="projects" size="460px" top="-5%" left="-10%" />
        <h2 class="section-label">Projects</h2>
        <div class="section-content projects-grid">
            <projectCard :github="'https://github.com/tydonnelly11/superfrog-scheduler'"
                         :image="'/superfrog.jpg'"
                         :list="listProjectOne"
                         />
            <projectCard
                    :image="'/oldF1Logo.webp'"
                    :list="listProjectTwo"
                    :github="'https://github.com/tydonnelly11/f1-news-aggregation-app'"
                    />
        </div>
    </section>

    <section class="bento-section" ref="education">
        <GradientBlob accent="education" size="440px" top="0%" left="75%" />
        <h2 class="section-label">Education</h2>
        <div class="section-content">
            <education></education>
        </div>
    </section>

    <section class="bento-section" ref="skills">
        <GradientBlob accent="skills" size="420px" top="-8%" left="-8%" />
        <h2 class="section-label">Skills</h2>
        <div class="section-content">
            <skills></skills>
        </div>
    </section>

</div>
  </div>
</template>

<script>
import aboutme from './aboutme.vue';
import experienceCard from './experience.vue';
import projectCard from './projectCard.vue'
import skills from './skills.vue';
import education from './education.vue';
import GradientBlob from './GradientBlob.vue';
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
            listExperienceOne: ['Built a data integration with re:SearchTX, resulting in our company being the only CMS vendor to meet the state-mandated deadline.',
            'Developed a document gallery and viewer using HTML/CSS/JavaScript with features that streamlined clerk workflow, reducing document packet assembly time.',
            'Built a config-driven rendering engine that auto-generates result displays from each app\'s record setup, minimizing custom UI code across apps',
            'Developed a feature using HTML/JS/CSS & Python that allows users to dynamically insert signatures and other images in .docx files reducing time spent manually signing legal documents',
            ],
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
        education,
        GradientBlob
    },
    mounted() {
        const sections = this.$el.querySelectorAll('.bento-section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        sections.forEach((el) => observer.observe(el));
        this.sectionObserver = observer;
    },
    beforeUnmount() {
        if (this.sectionObserver) {
            this.sectionObserver.disconnect();
        }
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
.homepage-root{
    width: 100%;
}

.navbar{
    width: 100%;
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 0;
    height: var(--nav-height);
    align-items: center;
    justify-content: space-evenly;
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--color-border);
    z-index: 9999;
}

.navbar > p{
    color: var(--color-text);
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s ease;
}
.navbar > p:hover{
    color: var(--accent-experience);
}

.top-level-container{
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto var(--space-6);
}

.bento-section{
    position: relative;
    overflow: hidden;
    padding: var(--space-7) 0;
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
    scroll-margin-top: var(--nav-height);
}
.bento-section.is-visible{
    opacity: 1;
    transform: translateY(0);
}

.section-label{
    position: relative;
    z-index: 1;
    font-size: 2.25rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: var(--color-text);
    margin: 0 0 var(--space-4);
}

.section-content{
    position: relative;
    z-index: 1;
}

.experience-grid{
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-4);
    align-items: stretch;
}

.projects-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-4);
}

@media screen and (max-width: 720px){
    .experience-grid,
    .projects-grid{
        grid-template-columns: 1fr;
    }
    .section-label{
        font-size: 1.75rem;
    }
}

</style>
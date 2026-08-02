<template>
    <div class="container">
        <!-- <img src="tinylogo.png" alt="Profile Picture" class="profile-image"> -->
        <h1>Ty Donnelly</h1>
        <p>Software Engineer 1 @ Local Government Solutions</p>
        <div class="contact-info">

            <a href="mailto:tydonnelly11@gmail.com">
                <button>
                    <i class="fa-solid fa-square-envelope fa-2xl"></i>
                </button>
            </a>
            <a href="https://www.linkedin.com/in/ty-donnelly-a07488247/" target="_blank">
                <button>
                    <i class="fa-brands fa-linkedin fa-2xl" ></i>
                </button>
            </a>
            <a href="https://github.com/tydonnelly11" target="_blank">
            <button>
            <i class="fa-brands fa-square-github fa-2xl">
            </i>
            </button>

            </a>
        </div>
        <div class="resume-row">
            <a href="/waterform.pdf" download target="_blank" rel="noopener">
                <button class="resume-button">
                    <i class="fa-solid fa-file-arrow-down"></i>
                    Resume
                </button>
            </a>
        </div>
    </div>

</template>

<script>
export default{
    name: 'aboutme',

}

</script>

<style scoped>
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: var(--space-5);
    background-color: var(--color-surface);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    border-top: 4px solid var(--accent-about);
    text-align: center;
    color: var(--color-text);
}

h1 {
    font-size: 36px;
    margin: 0;
}

p {
    font-size: 18px;
    line-height: 1.6;
    color: var(--color-text-muted);
}

.contact-info {
    margin-top: var(--space-4);
    display: flex;
    flex-direction: row;
    gap: var(--space-3);
    justify-content: center;
}

.contact-info a {
    display: flex;
}

.contact-info button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    padding: 0;
    border-radius: var(--radius-pill);
    background-color: var(--accent-about-soft);
    border: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact-info button:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
}

.contact-info i {
    color: var(--color-text);
    font-size: 1.5em;
}

/* .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 20px auto;
    background: url('placeholder-image.jpg') center/cover;
    border: 4px solid #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
} */

.resume-row{
    margin-top: var(--space-4);
    display: flex;
    justify-content: center;
}

.resume-button{
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: 0.7em 1.4em;
    border-radius: var(--radius-pill);
    background-color: var(--color-text);
    color: var(--color-surface);
    border: none;
    font-weight: 500;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.resume-button:hover{
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
}
</style>

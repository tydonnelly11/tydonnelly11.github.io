<template>
    <div class="container">
        <div class="container">
        <!-- <img src="tinylogo.png" alt="Profile Picture" class="profile-image"> -->
        <h1>Ty Donnelly</h1>
        <p>Computer Science Student at Texas Christian University</p>
        <p>
            I am a computer science student with a minor in economics currently studying at Texas Christian University, 
            I have gained valuable knowledge and experience in various programming languages and technologies.
        </p>
        <div class="contact-info">
            <a href="mailto:johndoe@example.com">tydonnelly11@gmail.com</a>
            <a href="https://www.linkedin.com/in/johndoe" target="_blank">https://www.linkedin.com/in/ty-donnelly-a07488247/</a>
            <a href="https://github.com/johndoe" target="_blank">https://github.com/tydonnelly11</a>
        </div>
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
            padding: 20px;
            background-color: black;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            text-align: center;
            color: white;
        }

        h1 {
            font-size: 36px;
            
            margin: 0;
        }

        p {
            font-size: 18px;
            line-height: 1.6;
            
        }

        .profile-image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin: 20px auto;
            background: url('placeholder-image.jpg') center/cover;
            border: 4px solid #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .contact-info {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            line-height: 1.75rem;
        }

        .contact-info a {
            text-decoration: none;
            color: #007bff;
            margin: 0 10px;
        }

        .contact-info a:hover {
            text-decoration: underline;
        }
</style>

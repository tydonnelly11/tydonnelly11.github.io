<template>
    <div class="container">
        <div class="container">
        <!-- <img src="tinylogo.png" alt="Profile Picture" class="profile-image"> -->
        <h1>Ty Donnelly</h1>
        <p>Computer Science Student at Texas Christian University</p>
        <p>
            Software Engineer seeking fulltime employment after graduation (May 2024)
            
        </p>
        <div class="contact-info">

            <a href="mailto:tydonnelly11@gmail.com">
                <button>
                    <i :style="{position: 'relative', left: '-1.5px', color: '#1a1a1a'}" class="fa-solid fa-square-envelope fa-2xl"></i>
                </button>
            </a>
            <a href="https://www.linkedin.com/in/ty-donnelly-a07488247/" target="_blank">
                <button>
                    <i :style="{position: 'relative', left: '-1.5px', color: '#1a1a1a'}" class="fa-brands fa-linkedin fa-2xl" ></i>
                </button>
            </a>
            <a href="https://github.com/tydonnelly11" target="_blank">
            <button>
            <i :style="{position: 'relative', left: '-1.5px', color: '#1a1a1a'}" class="fa-brands fa-square-github fa-2xl">
            </i>
            </button>
            
            </a>
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
i{
    position: relative; left: -1.5px;

}
.icon::before{
    content: "\f0e1"
}
.container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #1A1A1A;
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
        button{
            border-radius: 0;
            border: 0px solid black;
            padding: 0;
            padding-inline: 0;
            padding-block: 0;
            font-size: 2.35em;
            font-weight: 500;
            font-family: inherit;
            cursor: pointer;
            transition: border-color 0.25s;
            width: 95%;
            position: relative;

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

        .contact-info {
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            line-height: 1.75rem;
            justify-content: center;
        
        }

        .contact-info a {
           
            margin: 0 10px;
        }

        .contact-info a:hover {
            text-decoration: underline;
        }
</style>

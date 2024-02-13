<template>
    <div class="container">
        <div class="title">
        <h2>
            Texas Christian University
        </h2>
        <h4 class="degree-title">Computer Science Major</h4>
        <h4 class="degree-title">Economics Minor</h4>
        </div>
        <div class="classes-container">
            <div :style="{'margin-right': '10px'}">
            <h4 class="h4-course">Currently Taking</h4>
            <ul>
                <li class="taking-elem">Software Engineering</li>
                <li class="taking-elem">OOP and Design Patterns</li>
                <li class="taking-elem">Computer System Fundamentals</li>
            </ul>
        </div>
        <div class="completed">
            <h4 class="h4-course">Completed</h4>
            <ul class="course-list">
                

                <li>Computer and Network Security</li>
                <li>Data Mining and Visualization</li>
                <li>Web Technologies</li>

                <li>Analysis of Algorithms</li>
                <li>Database Systems</li>
                <li>Computer Ogranization</li>

                <li>Programming Language Concepts</li>
                <li>Data Structures</li>
                <li>Unix/Linux System Admin</li>
            </ul>
            </div> 
        </div>

    </div>


</template>

<script>
export default{
    name: 'education',
}

</script>

<style scoped>
ul{
    padding: 0;
}

li{
    color: white;
    line-height: 1.60rem;
    position: relative;
    list-style-type: none;


}

.taking-elem{
    left: -15px;

}

.course-list > li::before {
  content: ""; 
  position: absolute; 
  top: 5px; 
  width: 3px;
  height: 6px;
  left: -15px;
  border: solid whitesmoke;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.classes-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    position: relative;
    left: 15px;

}

.course-list{
    columns: 3;
}

.completed{
    width :80%;

}


.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #1A1A1A;

}
h2{
    color: white;
    margin: 0;
}
h3{
    color: white;
    margin: 0;
}
h4{
    color: white;
    margin: 0;
    margin-bottom: 1%;
}
.degree-title{
    margin-bottom: 0;
}
.h4-course{
    margin-top: 0;
    margin-bottom: 0;
    left: -15px;
    position: relative;
}

.title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    margin-bottom: 2.5%;
    align-items: flex-end;
    border-bottom: 1px solid white;
}

@media screen and (max-width: 720px){
    .title{
        flex-direction: column;
        width: 100%;
    }
    .classes-container{
        flex-direction: column;
    }
    .classes{
        margin-bottom: 5%;
    }
}
    

</style>
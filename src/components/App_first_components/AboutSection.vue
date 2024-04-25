<template>
    <!-- Start About Section -->
    <section class="about_me_area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-md-12">
                    <img :src="imgPath" class="about_me_img mx-auto d-block">
                </div>
                <div class="col-lg-6 col-md-12 col-md-12 text-center my-auto">
                    <h3 class="display-4 about_me_title">About Me</h3>
                    <p class="about_me_content">A tech enthusiast with a curiosity for all things digital. <br> passionate about coding, analyzing data, and creating awesome software. <br> With a knack for problem-solving and a hunger for learning.</p>
                    <p class="about_me_content">Always exploring new ideas and techniques to improve my skills. <br> If you have an idea, ping up!</p>
                    <a href="https://drive.google.com/file/d/1f2KaTpgFrAzFvZvfRRcaUj9eYR910oLy/view?usp=sharing"><button type="button" class="btn resume_button">Resume</button></a>
                </div>
            </div>
        </div>
    </section>
    <!-- End About Section -->
</template>

<script>
export default{
    data(){
        return{
            imgPath:require('@/assets/img/v872batch9-nunny-10a.jpg')
        }
    }

}
</script>

<style>
/*Start About Me Area*/
.about_me_area{
    padding-top: 7%;
    padding-bottom: 7%;
    /* border: 2px solid black; */
}
/* .about_me_area .container .row .col{
    border: 2px solid black;
} */
.about_me_title{
    font-family: "Alumni Sans", sans-serif;
    font-weight: bold;
    margin-bottom: 20px;
}
.about_me_img{
    height: 500px;
}
.resume_button{
    border: 2px solid black;
    background-color: black;
    color: #f8f8f8;
    font-family: "Noto Sans JP", sans-serif;
    margin-top: 10px;
}
.resume_button:hover{
    border: 2px solid black;
    background-color: #f8f8f8;
    color: black;
}
/*End About Me Area*/
@media screen and (max-width: 724px) {
    /*Start About Me Area*/
    .about_me_area{
        padding-top: 12%;
        padding-bottom: 12%;
    }
    .about_me_title{
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .about_me_img{
        height: 300px;
    }
    .about_me_content{
        font-size: 15px;
    }
    /*End About Me Area*/
}
</style>
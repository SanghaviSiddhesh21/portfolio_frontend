<template>
    <!-- Start Domain Area -->
    <section class="domain_area">
        <div class="container">
            <h3 class="display-4 domain_area_title text-center">Domain</h3>
            <div class="row domain_area_content">
                <div class="col-lg-6 col-md-12 col-sm-12 my-auto d-none d-md-block">
                    <div class="row">
                        <div class="col card-col">
                            <div class="card" style="width: 30%;">
                                <div class="card-body">
                                    <h5 class="card-title domain-title">Web Dev.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col card-col">
                            <div class="card" style="width: 55%;">
                                <div class="card-body">
                                    <h5 class="card-title domain-title">Machnine Learning</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col card-col card_col_1">
                            <div class="card margin-center" style="width: 100%;">
                                <div class="card-body">
                                    <h5 class="card-title domain-title">Automation</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col card-col card_col_1">
                            <div class="card margin-center" style="width: 100%;">
                                <div class="card-body">
                                    <h5 class="card-title domain-title">Finance</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col card-col card_col_1">
                            <div class="card margin-center" style="width: 100%;">
                                <div class="card-body">
                                    <h5 class="card-title domain-title">Web Design</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 d-block d-md-none small_screen_domain">
                    <div class="row">
                        <div class="col card-col">
                            <div class="card" style="width: 97%;">
                                <div class="card-body">
                                    <h5 class="card-title domain-title">Web Dev.</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col card-col">
                            <div class="card" style="width: 97%;">
                                <div class="card-body">
                                    <h5 class="card-title domain-title">Web Design</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col card-col">
                            <div class="card margin-center" style="width: 97%;">
                                <div class="card-body">
                                    <h5 class="card-title domain-title">Automation</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col card-col">
                            <div class="card margin-center" style="width: 97%;">
                                <div class="card-body">
                                    <h5 class="card-title domain-title">Finance</h5>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div class="row">
                        <div class="col card-col card_col_1">
                            <div class="card margin-center" style="width: 100%;">
                                <div class="card-body">
                                    <h5 class="card-title domain-title">Machine Learning</h5>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <img :src="imgPath" alt="" class="domain_img mx-auto d-block">
                </div>
            </div>
        </div>
    </section>
    <!-- End Domain Area -->
</template>

<script>
export default{
    data(){
        return{
            imgPath:require('@/assets/img/vec_sep_32_040-removebg-preview.png')
        }
    }
}

</script>


<style>
/*Start domain Area*/
.domain_area{
    padding-top: 7%;
    padding-bottom: 7%;
}
.domain_area_title{
    font-family: "Alumni Sans", sans-serif;
    font-weight: bold;
    margin-bottom: 60px;
    margin-left: 2%;
}
.domain_area_content{
    margin-left: 2%;
}
.card-col{
    padding: 0;
    margin-top: 1%;
    transition: transform 0.4s ease;
}
.domain_img{
    height: 350px;
}
.card_col_1{
    margin-right: 10px;
}
.card-col:hover{
    transform: scale(1.04);
}
.domain-title{
    font-family: "Alumni Sans", sans-serif;
    font-weight: normal;
}
/*End domain Area*/
@media screen and (max-width: 724px) {
    /*Start Domain Area*/
    .domain_area{
        padding-top: 12%;
        padding-bottom: 12%;
    }
    .domain_img{
        margin-top: 25px;
        height: 300px;
    }
    .project_tech{
        width: 15% !important;
        margin-top: 5%;
        margin-bottom: 5%;
    }
    /*End Domain Area*/
}
</style>
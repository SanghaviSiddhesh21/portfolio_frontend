<template>
    <!-- Start Technology Section -->
    <section class="technology_area">
        <div class="container">
            <h3 class="display-4 technology_area_title">Tech Stack</h3>
            <div class="row">
                <div class="col-lg-1 col-md-3 col-sm-3 col_tech_custom" v-for="brand in techStackList" :key="brand.name">
                    <div class="single-brand">
                        <img :src="brand.imgPathTech" alt="Brand1">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Technology Section -->
</template>

<script>
export default{
    data(){
        return{
            techStackList:[
                {
                    'name':'html',
                    'imgPathTech':require('@/assets/img/technology_icon/html.svg')
                },
                {
                    'name':'css',
                    'imgPathTech':require('@/assets/img/technology_icon/css.svg')
                },
                {
                    'name':'bootstrap',
                    'imgPathTech':require('@/assets/img/technology_icon/bootstrap.svg')
                },
                {
                    'name':'javascript',
                    'imgPathTech':require('@/assets/img/technology_icon/javascript.svg')
                },
                {
                    'name':'vue',
                    'imgPathTech':require('@/assets/img/technology_icon/vue.svg')
                },
                {
                    'name':'postgresql',
                    'imgPathTech':require('@/assets/img/technology_icon/postgresql.svg')
                },
                {
                    'name':'sqlite',
                    'imgPathTech':require('@/assets/img/technology_icon/sqlite.svg')
                },
                {
                    'name':'python',
                    'imgPathTech':require('@/assets/img/technology_icon/python.svg')
                },
                {
                    'name':'numpy',
                    'imgPathTech':require('@/assets/img/technology_icon/numpy.svg')
                },
                {
                    'name':'pandas',
                    'imgPathTech':require('@/assets/img/technology_icon/pandas.svg')
                },
                {
                    'name':'scikitLearn',
                    'imgPathTech':require('@/assets/img/technology_icon/scikit-learn.svg')
                },
                {
                    'name':'flask',
                    'imgPathTech':require('@/assets/img/technology_icon/flask.svg')
                },
                {
                    'name':'linux',
                    'imgPathTech':require('@/assets/img/technology_icon/linux.svg')
                },
                {
                    'name':'php',
                    'imgPathTech':require('@/assets/img/technology_icon/php.svg')
                },
                {
                    'name':'celery',
                    'imgPathTech':require('@/assets/img/technology_icon/celery.svg')
                }
            ]
        }
    }
}
</script>


<style>
/* Start Technology Area*/
.technology_area{
    padding-top: 7%;
    padding-bottom: 7%;
}
.technology_area_title{
    font-family: "Alumni Sans", sans-serif;
    font-weight: bold;
    margin-bottom: 80px;
}
/* .col_tech_custom{
    width: auto;
} */

.single-brand{
    /* border: 1px solid var(--border-color); */
    text-align: center;
    padding-right: 1rem;
    padding-bottom: 3rem;
    margin: 0rem 0rem;
    width: auto;
    height: auto;
    cursor: pointer;
    transition: transform 0.4s ease;
}
.single-brand>img{
    width: 50%;
}
.single-brand:hover{
    /* box-shadow: var(--box-shadow); */
    transform: scale(1.2);
}
/* .single-brand:hover>img{
    filter: brightness(0.15);
} */
/* End Technology Area*/
@media screen and (max-width: 724px) {
    /*Start Technology Area*/
    .technology_area{
        padding-top: 12%;
        padding-bottom: 12%;
    }
    .technology_area_title{
        text-align: center;
        margin-left: 0;
        margin-bottom: 40px;
    }
    .single-brand>img{
        width: 50%;
    }
    .row{
        align-items: center;
        justify-content: center;
        align-content: center;
    }
    /*End Technology Area*/
}
@media screen and (max-width: 500px){
    .single-brand>img{
        width: 50%;
    }
    .single-brand{
        width: 75px;
    }
    .row>*{
        width: auto;
    }
    .small_screen_domain{
        width: 90%;
    }
}

</style>
<template>
    <!-- Start Banner Section -->
        <section class="banner_area">
            <div class="container">
                <p class="text-lowercase text-center banner_main_0"><span class="fs-3">&#x1F44B;</span>, my name is siddhesh.<br></p>
                <p class="text-center banner_main_1 my-0">Developer</p>
                <p class="text-center banner_main_2 my-0">& Data Scientist</p>
            </div>
        </section>
    <!-- End Banner Section -->
</template>


<script>
export default{

}
</script>

<style>
/*Start Banner Area*/
.banner_area{
    padding-top: 7%;
    padding-bottom: 7%;
    /* border: 2px solid black; */
}
.banner_main_0{
    margin-bottom: 4%;
    font-size: 20px;
    font-family: "Noto Sans JP", sans-serif;
}
.banner_main_1{
    font-family: "Alumni Sans", sans-serif;
    font-size: 170px;
    font-weight: bold;
    line-height: 82px;
}
.banner_main_2{
    font-family: "Londrina Shadow", sans-serif;
    font-size: 150px;
}
/*End Banner Area*/
/*End Navbar Section*/
@media screen and (max-width: 724px) {
    /*Start Banner Section*/
    .banner_area{
        padding-top: 12%;
        padding-bottom: 12%;
    }
    .banner_main_0{
        margin-bottom: 2%;
        font-size: 15px;
    }
    .banner_main_1{
        font-size: 85px;
        line-height: 70px;
    }
    .banner_main_2{
        font-size: 75px;
        line-height: 70px;
    }
    /*End Banner Section*/
}
</style>
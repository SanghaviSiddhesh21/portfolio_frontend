<template>
    <!-- <link rel="stylesheet" href="../src/assets/css/all.min.css"> -->
    <!-- Start Footer Area -->
    <footer class="footer_area">
        <div class="container">
            <div class="social text-center">
                <h5 class="text-uppercase">Follow me</h5>
                <!-- <a href=""><i class="fab fa-facebook"></i></a> -->
                <a href="https://www.instagram.com/siddhesh._.21?igsh=MWM4NDJkeW1nNnRtZA=="><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/siddhesh-sanghavi-a44a47222/"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/SanghaviSiddhesh21"><i class="fab fa-github"></i></a>
                <!-- <a href=""><i class="fab fa-facebook"></i></a> -->
            </div>
            <div class="copyrights text-center">
                <p class="para">
                    Copyright ©siddheshsanghavi | All rights reserved
                </p>
            </div>
        </div>
    </footer>
    <!-- End Footer Area -->
</template>

<script>
export default{
    data(){
        return{
            // fontAwesomePath:require('@/assets/css/all.min.css')
        }
    }
}

</script>

<style>
/*Start Footer Area*/
.footer_area{
    padding-top: 7%;
}
.social a{
    color: black;
    margin: 0 10px;
}
.social a:hover{
    color: #0d6efd;
}
/*End Footer Area*/
@media screen and (max-width: 724px) {
    /*Start Footer Section*/
    .footer_area{
        padding-top: 12%;
    }
    /*End Footer Section*/
}
</style>
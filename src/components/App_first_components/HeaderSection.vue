<template>
    <!-- Start Header -->
    <section class="header_area">
        <nav class="navbar navbar-expand-lg navbar_custom">
            <div class="container">
                <a class="navbar-brand navbar_heading" href="#">Siddhesh.Portfolio</a>
                <button class="navbar-toggler header_button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item mx-3" v-for="link in header_links" :key="link.name">
                        <a class="nav-link navbar_tabs" :href="link.href">{{ link.name }}</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </section>
    <!-- End Header --> 
</template>

<script>
export default{
    data(){
        return{
            header_links:[
                {
                    name:'About',
                    href:'#'
                },
                {
                    name:'Skillset',
                    href:'#'
                },
                {
                    name:'Portfolio',
                    href:'#'
                },
                {
                    name:'Contact',
                    href:'#'
                }
            ]
        };
    }
}
</script>

<style>
/*Start Navbar Section*/
.header_area{
    padding-top: 2px;
    font-family: "Noto Sans JP", sans-serif;
    /* border: 2px solid black; */
}
.navbar_heading{
    font-family: "Alumni Sans", sans-serif;
    font-weight: bold;
    font-size: 35px;
}
.navbar_tabs{
    font-family: "Noto Sans JP", sans-serif;
}
.navbar_tabs:hover{
    color: black;
    /* text-decoration: underline;
    text-decoration-color: black; */
    /* font-weight: 490; */
}
/*End Navbar Section*/
@media screen and (max-width: 724px) {
    /*Start Navbar Section*/
    .header_button{
        padding-left: 0;
        padding-right: 0;
    }
    /*End Navbar Section*/
}
</style>
<template>
    <!-- Start Contact Form-->
    <section class="contact_area">
        <div class="container form_responsiveness_lg_md">
            <div class="contact_area_header_section">
                <h3 class="display-4 contact_area_title">Say Hello.</h3><span class="contact_area_subtitle">Feel free to drop an email anytime.</span>
                <div class="alert alert-dark error_div" role="alert" v-if="contactFormError">
                    <i class="bi bi-x-lg close_icon" @click="closeError"></i>
                    {{ contactFormError }}       
                </div>
            </div>
            <form>
                <div class="contact_area_body form_responsiveness_lg_md d-none d-sm-block">
                    <div class="row">
                        <div class="col contact_col_specific">
                            <input type="text" id="fname" name="fname" class="contact_text" placeholder="Name" autocomplete="false" v-model="contactdata.name">
                        </div>
                        <div class="col contact_col">
                            <input type="text" id="fname" name="fname" class="contact_text" placeholder="Email Address" v-model="contactdata.emailAddress">
                        </div>
                    </div>
                    <div class="row row_custom_class_contact_form_small_devices">
                        <input type="text" id="fname" name="fname" class="contact_text" placeholder="Message subject" v-model="contactdata.emailSubject">
                    </div>
                    <div class="row row_custom_class_contact_form_small_devices">
                        <input type="text" id="fname" name="fname" class="contact_text" placeholder="Message body" v-model="contactdata.emailMessage">
                    </div>
                    <button type="button" class="btn contact_button" @click.prevent="onSubmit()">Send</button>
                </div>

                <div class="contact_area_body form_responsiveness_sm d-block d-sm-none">
                    <div class="row">
                        <input type="text" id="fname" name="fname" class="contact_text" placeholder="Name" autocomplete="false" v-model="contactdata.name">
                    </div>
                    <div class="row">
                        <input type="text" id="fname" name="fname" class="contact_text" placeholder="Email Address" v-model="contactdata.emailAddress">
                    </div>
                    <div class="row">
                        <input type="text" id="fname" name="fname" class="contact_text" placeholder="Message subject" v-model="contactdata.emailSubject">
                    </div>
                    <div class="row">
                        <input type="text" id="fname" name="fname" class="contact_text" placeholder="Message body" v-model="contactdata.emailMessage">
                    </div>
                    <button type="button" class="btn contact_button" @click.prevent="onSubmit()">Send</button>
                </div>

            </form>
        </div>
    </section>
    <!-- End Contact Form -->
</template>


<script>
export default{
    data(){
        return{
            contactdata: {
                name:'',
                emailAddress:'',
                emailSubject:'',
                emailMessage:''
            },
            contactFormError:''
        }
    },
    methods: {
        async onSubmit() {
            if(this.validateName(this.contactdata.name)){
                if(this.isValidEmail(this.contactdata.emailAddress)){
                    if(this.validateSubject(this.contactdata.emailSubject)){
                        if(this.validateMessage(this.contactdata.emailMessage)){
                            try {
                                // Prepare data for submission
                                const requestData = {
                                    name: this.contactdata.name,
                                    emailAddress: this.contactdata.emailAddress,
                                    emailSubject: this.contactdata.emailSubject,
                                    emailMessage: this.contactdata.emailMessage
                                };
                                // Make API request
                                const response =  await fetch('https://portfolio-backend-three-omega.vercel.app/newMailLogger', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(requestData)
                                    }
                                );

                                // Handle API response
                                if (response.ok) {
                                    const responseData = await response.json();
                                    // Handle success response
                                    console.log('API response:', responseData);
                                    this.contactdata.name="";
                                    this.contactdata.emailAddress="",
                                    this.contactdata.emailSubject="",
                                    this.contactdata.emailMessage=""
                                } else {
                                    // Handle error response
                                    const errorData = await response.json();
                                    console.error('API error:', errorData);
                                    this.contactFormError=errorData.error;
                                }

                            } catch (error) {
                                console.error('An error occurred while submitting the form:', error);
                                this.contactFormError=error;
                            }
                        }
                    }
                }
            }
        },
        isValidEmail(email) {
            // Regular expression to validate email address
            const emailRegex = /^[a-zA-Z][^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(emailRegex.test(email)){
                return true;
            }else{
                this.contactFormError='Error: Incorrect Email Address.';
                return false;
            }
        },
        validateSubject(emailsubject) {
            const subject = emailsubject.trim();
            if (subject.length < 15) {
                this.contactFormError='Error: Subject Length Should be greater than 15 charachters.';
                return false;
            }

            let alphaCount = 0;
            let numericCount = 0;
            let specialCount = 0;

            for (let char of subject) {
                if (/[a-zA-Z]/.test(char)) {
                alphaCount++;
                } else if (/[0-9]/.test(char)) {
                numericCount++;
                } else if (!/\s/.test(char)) {
                specialCount++;
                }
            }

            if (numericCount / alphaCount >= 0.5 || specialCount > 5) {
                this.contactFormError='Error: Too many numerical charachters in the subject.';
                return false;
            } else {
                return true;
            }
        },
        validateName(name) {
            name = name.trim();
            const regex = /^[a-zA-Z\s]+$/; // Allow alphabetical characters and spaces
            if (regex.test(name)) {
                // Name is valid
                return true;
            } else {
                // Name contains non-alphabetical characters or is empty
                this.contactFormError = 'Error: Name must only contain alphabetical characters and spaces, and not be empty';
                return false;
            }
        },
        validateMessage(emailMessage) {
            const message = emailMessage.trim();
            if (!message) {
                // Message is empty
                this.contactFormError='Error: Message should not be blank.';
                return false;
            }

            // Check if message length is at most 50 characters
            if (message.length > 300) {
                this.contactFormError='Error: Message Length should not be greater than 300 charachters.';
                return false;

            }

            // Count the number of alphabetical characters, numeric characters, and special characters
            let alphaCount = 0;
            let numericSpecialCount = 0;

            for (let char of message) {
                if (/[a-zA-Z]/.test(char)) {
                    alphaCount++;
                } else if (/[\d\s\W]/.test(char)) {
                    numericSpecialCount++;
                }
            }
            // console.log(alphaCount)
            // console.log(numericSpecialCount)
            // Check if the proportion of numeric + special characters is less than the proportion of alphabetical characters
            if (numericSpecialCount / alphaCount >= 0.5) {
                this.contactFormError='Error: Too many numerical and special charachters.';
                return false;
            } else {
                return true;
            }
        },
        closeError(){
            this.contactFormError='';
        }
    }
}
</script>


<style>
/*Start Contact Area*/
.contact_area{
    padding-top: 7%;
}
.contact_area_header_section{
    margin-bottom: 40px;
}
.contact_area_title{
    font-family: "Alumni Sans", sans-serif;
    font-weight: bold;
    display: inline;
}
.contact_area_subtitle{
    font-family: "Noto Sans JP", sans-serif;
    margin-left: 2%;
}
.contact_text{
    border: none;
    background-color: #f8f8f8; 
    border-bottom: solid 1px #000;
    width: 100%;
    padding-left: 0;
}
.contact_text:focus{
    border: 0;
    border-bottom: solid 1px #000;
    outline: none;
    background-color: #f8f8f8; 
}
.contact_area_body{
    font-family: "Noto Sans JP", sans-serif;
    margin-top: 40px;
}
.contact_area_body>.row{
    margin-bottom: 5%;
    width: 50%;
}
.contact_col{
    margin: 0px;
    padding: 0;
    margin-left: 8px;
}
.contact_col_specific{
    margin-right: 50px;
    padding: 0;
}
.contact_button{
    border: 2px solid black;
    background-color: black;
    color: #f8f8f8;
    font-family: "Noto Sans JP", sans-serif;
}
.contact_button:hover{
    border: 2px solid black;
    background-color: #f8f8f8;
    color: black;
}
.error_div{
    width: 60%;
    border: 0.10px solid black;
    margin-bottom: 0;
    margin-top: 10px;
    font-weight: bold;
}
.close_icon:hover{
    cursor: pointer;
}
/*End Contact Area*/
@media screen and (max-width: 724px) {
    /*Start Contact Area*/
    .contact_area{
        padding-top: 12%;
        padding-bottom: 12%;

    }
    .contact_area_title{
        margin-left: 0;
    }
    .contact_area_header_section{
        margin-bottom: 40px;
    }
    .contact_area_body{
        margin-left: 0;
        margin-top: 0;
    }
    .contact_area_body>.row{
        width: 100%;
        margin-left: 2px;
        margin-right: 2px;
    }
    .contact_button{
        margin-top: 10px;
        margin-left: 41%;
    }
    .error_div{
        width: 100%;
        font-size: smaller;
    }
    /*End Contact Area*/
}
</style>
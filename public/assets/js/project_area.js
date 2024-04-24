document.addEventListener('DOMContentLoaded', function() {
    // Create the div you want to load dynamically
    var dynamicallyLoadedDiv = document.createElement('div');
    
    dynamicallyLoadedDiv.innerHTML = `
    <div class="container">
        <h3 class="display-4 projects_area_title text-center">Projects</h3>
        <div class="carousel-container owl-carousel">
            <div class="card margin-center card_custom_project">
                <div class="card-body">
                    <h5 class="card-title text-center">Text Sentiment Analysis</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        <div class="row project_all_tech">                                   
                            <img src="./assets/img/technology_icon/python.svg" class="project_tech">
                            <img src="./assets/img/technology_icon/pandas.svg" class="project_tech">
                            <img src="./assets/img/technology_icon/scikit-learn.svg" class="project_tech">
                        </div>
                    </h6>
                    <p class="card-text">Created ML models to predict the positive or negative sentiment on a review text<br>(Ranked 26/780 on Kaggle).</p>
                    <a href="https://github.com/SanghaviSiddhesh21/Movie_Reviews_Sentiment_Analysis" class="project_github_link"><i class="fab fa-github"></i></a>
                </div>
            </div>
            <div class="card margin-center card_custom_project">
                <div class="card-body">
                    <h5 class="card-title text-center">Auto-syncing Option Chain</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        <div class="row project_all_tech">                                 
                            <img src="./assets/img/technology_icon/flask.svg" class="project_tech">  
                            <img src="./assets/img/technology_icon/sqlite.svg" class="project_tech">
                            <img src="./assets/img/technology_icon/node-js.svg" class="project_tech">
                            <img src="./assets/img/technology_icon/bootstrap.svg" class="project_tech">
                        </div>
                    </h6>
                    <p class="card-text">Real time updating version of the option-chain taking input from continuous fetching stream of data.</p>
                    <a href="https://github.com/SanghaviSiddhesh21/option-chain" class="project_github_link"><i class="fab fa-github"></i></a>
                </div>
            </div>
            <div class="card margin-center card_custom_project">
                <div class="card-body">
                    <h5 class="card-title text-center">Project Colab. Web App</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        <div class="row project_all_tech">     
                            <img src="./assets/img/technology_icon/flask.svg" class="project_tech">
                            <img src="./assets/img/technology_icon/sqlite.svg" class="project_tech">
                            <img src="./assets/img/technology_icon/celery.svg" class="project_tech">
                            <img src="./assets/img/technology_icon/bootstrap.svg" class="project_tech">
                        </div>
                    </h6>
                    <p class="card-text">Project management web application for effective colaboration of task and role based filtering.</p>
                    <a href="https://github.com/SanghaviSiddhesh21/KanGo-ProjectManagementWebApplication" class="project_github_link"><i class="fab fa-github"></i></a>
                </div>
            </div>
            <div class="card margin-center card_custom_project">
                <div class="card-body">
                    <h5 class="card-title text-center">BlogLite Web App</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        <div class="row project_all_tech">                                 
                            <img src="./assets/img/technology_icon/flask.svg" class="project_tech">  
                            <img src="./assets/img/technology_icon/sqlite.svg" class="project_tech">
                            <img src="./assets/img/technology_icon/vue.svg" class="project_tech">
                            <img src="./assets/img/technology_icon/bootstrap.svg" class="project_tech">
                            <img src="./assets/img/technology_icon/celery.svg" class="project_tech">
                        </div>
                    </h6>
                    <p class="card-text">A social media web app for posting, following, and managing indiviuals timelines with analytics</p>
                    <a href="https://github.com/SanghaviSiddhesh21/BlogLite" class="project_github_link"><i class="fab fa-github"></i></a>
                </div>
            </div>
            <div class="card margin-center card_custom_project">
                <div class="card-body">
                    <h5 class="card-title text-center">Task Optimizer Web App</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        <div class="row project_all_tech">                                 
                            <img src="./assets/img/technology_icon/flask.svg" class="project_tech">  
                            <img src="./assets/img/technology_icon/sqlite.svg" class="project_tech">
                            <img src="./assets/img/technology_icon/vue.svg" class="project_tech">
                            <img src="./assets/img/technology_icon/bootstrap.svg" class="project_tech">
                            <img src="./assets/img/technology_icon/celery.svg" class="project_tech">
                        </div>
                    </h6>
                    <p class="card-text">Based on Kanban methodology, this web app lets user to plan their task effectively along with analytics</p>
                    <a href="https://github.com/SanghaviSiddhesh21/KanBan_using_api" class="project_github_link"><i class="fab fa-github"></i></a>
                </div>
            </div>
            <div class="card margin-center card_custom_project">
                <div class="card-body">
                    <h5 class="card-title text-center">Messaging Application</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        <div class="row project_all_tech">                                 
                            <img src="./assets/img/technology_icon/php.svg" class="project_tech">  
                            <img src="./assets/img/technology_icon/postgresql.svg" class="project_tech">
                            <img src="./assets/img/technology_icon/bootstrap.svg" class="project_tech">
                        </div>
                    </h6>
                    <p class="card-text">A secured messaging app which lets you connect and have control over who can share your messages with others.</p>
                    <a href="" class="project_github_link"><i class="fab fa-github"></i></a>
                </div>
            </div>
            <div class="card margin-center card_custom_project">
                <div class="card-body">
                    <h5 class="card-title text-center">Self Quantifying Web App</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        <div class="row project_all_tech">                                 
                            <img src="./assets/img/technology_icon/flask.svg" class="project_tech">  
                            <img src="./assets/img/technology_icon/sqlite.svg" class="project_tech">
                            <img src="./assets/img/technology_icon/bootstrap.svg" class="project_tech">
                        </div>
                    </h6>
                    <p class="card-text">A project which lets user keep track of their calories, wealth and fitness all at one place, and self-evaluate with analytics.</p>
                    <a href="https://github.com/SanghaviSiddhesh21/SelfQuantifyingWebApplication" class="project_github_link"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    </div> `;

    // Find the placeholder div
    var placeholderDiv = document.getElementById('project_section');

    // Insert the dynamically loaded div after the placeholder div
    placeholderDiv.parentNode.insertBefore(dynamicallyLoadedDiv, placeholderDiv.nextSibling);
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      dots:true,
      margin:10,
      responsiveClass:true,
      dots: true,
      nav: false,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          400:{
              items:1,
              nav:true
          },
          1000:{
              items:3,
              nav:true,
              loop:false
          }
      }
    });
    
});
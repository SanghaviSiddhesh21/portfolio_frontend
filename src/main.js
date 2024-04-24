import { createApp } from 'vue'

// First app installation and mounting

import App_first from './App_first.vue'

import HeaderSection from './components/App_first_components/HeaderSection.vue';
import BannerSection from './components/App_first_components/BannerSection.vue'
import AboutSection from './components/App_first_components/AboutSection.vue';
import TechStackArea from './components/App_first_components/TechStackArea.vue';


const app_first = createApp(App_first)

app_first.component('header-section',HeaderSection);
app_first.component('banner-section',BannerSection);
app_first.component('about-section',AboutSection);
app_first.component('tech-stack-area',TechStackArea);

app_first.mount('#app_first')

// Second app installation and mounting

import App_second from './App_second.vue'

import DomainArea from './components/App_second_components/DomainArea.vue';
import ContactArea from './components/App_second_components/ContactArea.vue';
import FooterArea from './components/App_second_components/FooterArea.vue';

const app_second = createApp(App_second)

app_second.component('domain-area',DomainArea);
app_second.component('contact-area',ContactArea);
app_second.component('footer-area',FooterArea);

app_second.mount('#app_second')

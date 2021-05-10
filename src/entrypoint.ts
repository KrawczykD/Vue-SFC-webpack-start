import appData from './app/appData'
import appMounted from './app/appMounted'
import appMethods from './app/appMethods'

import footercomponent  from './components/footer/footer-component.vue'
import headercomponent  from './components/header/header-component.vue'
import maincomponent from './components/main/main-component.vue'


let registerVueApp = ()=>{
    var app = new Vue({
        el: '#vueApp',
        data: appData,
        mounted: appMounted,
        methods : appMethods,
        components: {
            'footer-component' : footercomponent,
            'header-component' : headercomponent,
            'main-component': maincomponent,
        }
    })

    return app
}

var vueApp = registerVueApp();
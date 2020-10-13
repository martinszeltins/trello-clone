import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import './plugins/fontawesome'
import AppButton from './components/AppButton'

Vue.component('AppButton', AppButton)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

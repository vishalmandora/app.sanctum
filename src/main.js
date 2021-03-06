import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Store from './vuex'

Vue.config.productionTip = false

new Vue({
    router,
    store: Store,
    render: h => h(App)
}).$mount('#app')

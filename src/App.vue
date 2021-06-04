<script>
import appData from './app/appData'
import appMethods from './app/appMethods'
import appMounted from './app/appMounted'
import maincomponent from './components/main/main-component.vue'
import footercomponent from './components/footer/footer-component.vue'
import headercomponent from './components/header/header-component.vue'

// import testservice from './services/testservice'

export default {
    data: appData,
    mounted: appMounted,
    methods: appMethods,

    components: {
        'main-component':maincomponent,
        'footer-component': footercomponent,
        'header-component': headercomponent,

    }

}


</script>

<style>

</style>

<template>
    <div>
    <div>App {{test}}</div>
    This is text from main component : <main-component> This is text from slot12!!</main-component>
    This is a main component without slot<main-component></main-component>
    This is header component<header-component></header-component>
    <button @click="testFun">on click</button>
    </div>
</template>
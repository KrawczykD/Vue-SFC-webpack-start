<script>
import appData from './app/appData'
import appMethods from './app/appMethods'
import appMounted from './app/appMounted'
import maincomponent from './components/main/main-component.vue'

// import testservice from './services/testservice'

export default {
    data: appData,
    mounted: appMounted,
    methods: appMethods,

    components: {
        'main-component':maincomponent,

    }

}


</script>

<style>

</style>

<template>
    <div>
        <main-component></main-component>
    </div>
</template>
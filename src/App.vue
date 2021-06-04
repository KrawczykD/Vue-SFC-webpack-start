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
        <b-button type="button" class="btn btn-primary" v-if="!isBookingPageOpened" v-on:click="toggleBookingOpen()">Book Tickets</b-button>
        <main-component class="d-flex" v-bind:togglebookingopen="toggleBookingOpen" v-else></main-component>
    </div>
</template>
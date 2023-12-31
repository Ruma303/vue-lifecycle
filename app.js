const App = Vue.createApp({
    data() {
        return { message: 'Ciao!' };
    },
    beforeCreate() { console.log('beforeCreate'); },
    created() { console.log('created'); },
    beforeMount() { console.log('beforeMount'); },
    mounted() { console.log('mounted'); },
    beforeUpdate() { console.log('beforeUpdate'); },
    updated() { console.log('updated'); },
    beforeUnmount() { console.log('beforeUnmount'); },
    unmounted() { console.log('unmounted'); }
}).mount("#app");


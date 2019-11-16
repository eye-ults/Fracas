<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>



<script>
export default {
    data() {
        return {
            title: 'Formal Fracas'
        }
    }
}
</script>



<style scoped>
    header {
        background-color: #0BFDE6;
        padding: 2em 0 1em;
    }
    h1 {
        margin: 0;
        text-align: center;
    }
</style>
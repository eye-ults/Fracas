<template>
    <footer>
        <p>{{ copyright }}</p>
    </footer>
</template>



<script>
export default {
    data() {
        return {
            copyright: 'Copyright 2019 - Spencer Ailts (eye-ults)'
        }
    }
}
</script>



<style scoped>
    footer {
        padding: 1em;
    }
    p {
        color: #FFEA00;
        background: #03D2BF;
        text-align: center;
        padding: 1em;
    }
</style>
<template>
    <div id='register'>
        <h2>Please Sign-up! :)</h2>
        <form>
            <div id="form-header">
                <slot name="form-header"></slot>
            </div>
            <div id="form-fields">
                <slot name="form-fields"></slot>
            </div>
            <div id="form-controls">
                <slot name="form-controls"></slot>
            </div>
            <div id="useful-links">
                <ul>
                    <li><a href="#">link 1</a></li>
                    <li><a href="#">link 2</a></li>
                    <li><a href="#">link 3</a></li>
                    <li><a href="#">link 4</a></li>
                </ul>
            </div>
        </form>
    </div>
</template>



<script>
export default {
    data() {
        return {

        }
    }
}
</script>



<style scoped>
    #register {
        background: #34495D;
        padding: 5em 20px;
        box-sizing: border-box;
        text-align: center;
    }
    #textinput {
        padding: 0 20px;
        box-sizing: border-box;
        text-align: center;
        
    }
    h1 {
        padding: .25em 0;
    }
    button{
        height: 2em;
        width: 6em;
    }
    input {
        font-size:2em;
        text-align: center;
        margin: .5em auto;
    }
    ul {
        display: flex;
        text-align: center;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    li {
        padding: 15px;
        margin: 10px;
    }
</style>
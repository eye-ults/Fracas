<template>
  <div id="app">
    <app-header></app-header>
    <app-form>
      <div slot="form-header">
        <h3>this is title form</h3>
        <p>info on form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="First Name" required/>
        <input type="text" placeholder="Last Name" required/>
        <input type="text" placeholder="E-Mail" required/>
        <input type="text" placeholder="Username"/>
        <!--<input type="password placeholder="password" required/>-->
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit"> Submit</button>
      </div>
    </app-form>
    <!--<app-signup></app-signup>-->
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from './components/header.vue'
import formHelper from './components/formHelper.vue'
// import signUp from './components/signUp.vue'
import footer from './components/footer.vue'
export default {
  components: {
    'app-header': header,
    'app-form': formHelper,
    // 'app-signup': signUp,
    'app-footer': footer
  },
  data() {
    return {

    }
  }
}
</script>
<style>
    html {
      height: 100vh;
      width:100%;
      font-size: 16px;
      font-family: 'Open Sans', sans-serif;
    }
    #app {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }
    #register {
      flex: 1;
    }
    h1 {
      color: #34495D;
      font-size: 4em;
      text-align: center;
      margin: 0;
    }
    h2 {
        font-size: 3em;
        text-align: center;
        color: #0BFDE6;
        margin: 0;
        padding: .5em;
    }

</style>

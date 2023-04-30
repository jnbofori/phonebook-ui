<template>
  <div id="app">
    <h2>Phone Book App</h2>
    <div class="flex flex-row justify-between items-center mt-3">
      <h4>Contacts</h4>
      <button class="btn btn-primary" @click="goToAddContact">+ Add Contact</button>
    </div>
    <Contacts :contacts="contacts"/>
  </div>
</template>

<script>
  import Contacts from '../components/Contacts';
  import axios from 'axios';

  export default {
    name: 'Home',
    components: {
      Contacts
    },
    data() {
      return {
        contacts: []
      }
    },
    async created() {
      const response = await axios.get('contacts', {
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      });
      this.contacts = response.data;
      console.log(this.contacts)
    },
    methods: {
      goToAddContact(){
        this.$router.push('/add-contact');
      }
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover {
    background: #666;
  }

</style>

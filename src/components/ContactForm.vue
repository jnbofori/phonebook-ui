<template>
  <form @submit.prevent="addIssue">
      <div class="form-group">
          <label>First name</label>
          <input type="text" class="form-control" v-model="firstName" placeholder="first name"/>
      </div>

      <div class="form-group">
          <label>Last name</label>
          <input type="text" class="form-control" v-model="lastName" placeholder="last name"/>
      </div>

      <div class="form-group">
          <label>Phone Number</label>
          <input type="text" class="form-control" v-model="phoneNumber" placeholder="phone number"/>
      </div>

      <button class="btn btn-primary btn-block">Submit</button>
  </form>
</template>

<script>
  import axios from "axios";

  export default {
      name: "AddContact",
      props: ["contactData"],
      data() {
          return {
              firstName: '',
              lastName: '',
              phoneNumber: ''
          }
      },
      watch: {
        contactData: {
          handler(value){
            if (value){
              this.firstName = value.firstName;
              this.lastName = value.lastName;
              this.phoneNumber = value.phoneNumber
            }
          },
          deep: true,
          immediate: true
        },
      },
      methods: {
        async addIssue() {
          if (!this.contactData) {
            axios.post('contacts', {
                firstName: this.firstName,
                lastName: this.lastName,
                phoneNumber: this.phoneNumber
            }).then(() => {
                this.$router.push('/')
            });
          } else {
            axios.put(`contacts/${this.contactData._id}`, {
                firstName: this.firstName,
                lastName: this.lastName,
                phoneNumber: this.phoneNumber
            }).then(() => {
                this.$router.push('/')
            });
          }
        }
      }
  }
</script>


<style scoped>

</style>
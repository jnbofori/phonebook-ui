<template>
  <div class="contact-item" @click="handleClick">
    <div>{{ contact.firstName }} {{ contact.lastName }}</div>
    <div>{{contact.phoneNumber}}</div>
    <div class="text-danger" @click="deleteContact">Delete</div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
      name: "contactItem",
      props: ["contact"],
      methods: {
          handleClick() {
              this.$router.push(`/update-contact/${this.contact._id}`);
          },
          deleteContact(){
            axios.delete(`contacts/${this.contact._id}`).then(() => {
                  this.$router.push('/')
              });
          }
      }
  }
</script>

<style scoped>
  .contact-item {
      padding: 10px;
      border-bottom: 1px #ccc dotted;
      text-align: left;
      cursor: pointer;
  }

  small {
      font-size: 12px;
      margin-top: -100px;
      padding-top: 0px;
  }
</style>
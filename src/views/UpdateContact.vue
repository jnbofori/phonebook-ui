<template>
  <div class="about">
    <ContactForm :contactData="contactData" />
  </div>
</template>

<script>
  import axios from "axios";

  import ContactForm from "../components/ContactForm";
  export default {
    name: 'Update-Contact',
    components: {ContactForm},
    data() {
          return {
            contactData: {}
          }
      },
    async mounted() {
      const contactId = this.$route.params.contactId;
      const response = await axios.get(`contacts/${contactId}`);
      this.contactData = response.data;
      console.log(this.contactData)
    },
  }
</script>
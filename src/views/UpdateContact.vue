<template>
  <div class="about">
    <ContactForm :contactData="contact" />
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
          contact: {}
        }
      },
    async created() {
      const contactId = this.$route.params.contactId;
      axios.get(`contacts/${contactId}`).then((response) => {
        this.contact = response.data;
      });
    },
  }
</script>
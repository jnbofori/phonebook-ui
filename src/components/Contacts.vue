<template>
  <div>
      <div v-bind:key="contact.id" v-for="contact in contacts">
          <ContactItem :contact="contact"/>
      </div>
  </div>
</template>

<script>
  import ContactItem from "./ContactItem";
  export default {
      name: "Contacts",
      components: {ContactItem},
      props: ["contacts"],
  }
</script>

<style scoped>

</style>
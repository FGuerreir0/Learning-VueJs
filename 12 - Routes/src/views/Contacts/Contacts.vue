<template>
  <div>
    <ContactsList />
    <router-view></router-view>
  </div>
</template>

<script>
import ContactsList from '../../components/Contacts/ContactList';

export default {
  components: {
    ContactsList,
  },
};
</script>

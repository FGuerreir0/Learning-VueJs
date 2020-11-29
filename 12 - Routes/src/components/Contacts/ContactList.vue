<template>
  <div>
    <h3 class="font-weight-light">Contacts</h3>

    <ul class="list-group" v-if="contacts.length > 0">
      <ItemListContacts
        class="list-group-item"
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
      />
    </ul>

    <p v-else>No results found</p>

    <button class="btn btn-secondary mt-4 b-4" @click="handleReturn">Return</button>
  </div>
</template>

<script>
import ItemListContacts from './ItemListContacts.vue';

export default {
  components: {
    ItemListContacts,
  },
  data() {
    return {
      contacts: [
        { id: 1, name: 'Isaac Newton', email: 'isaac@hotmail.com' },
        { id: 2, name: 'Albert Einstein', email: 'einstein@hotmail.com' },
        { id: 3, name: 'Stephen Hawking', email: 'hawking@hotmail.com' },
      ],
    };
  },
  methods: {
    handleReturn() {
      this.$router.back();
    },
  },
};
</script>

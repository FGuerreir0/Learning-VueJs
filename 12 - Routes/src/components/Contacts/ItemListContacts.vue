<template>
  <li>
    <span>{{ contact.name }}</span>

    <!-- FORMA SIMPLES DE PASSAR UM PARAMETRO <router-link :to="`/contacts/${contact.id}`" class="btn btn-info btn-sm float-right"
      >Details</router-link -->

    <!-- ROTA NOMEADA -->
    <router-link
      :to="{ name: 'contactRoute', params: { id: contact.id } }"
      class="btn btn-info btn-sm float-right"
      >Details</router-link
    >
  </li>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

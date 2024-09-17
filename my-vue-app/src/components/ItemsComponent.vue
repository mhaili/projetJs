<template>
  <div>
    <h1>Items List</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }} (Quantity: {{ item.quantity }})</li>
    </ul>

    <h2>Ajouter un nouvel article</h2>
    <button @click="addItem">Ajouter un article</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: []
    };
  },
  async created() {
    try {
      // Requête GET pour récupérer les items depuis le backend
      const response = await axios.get('http://localhost:3000/api/items');
      this.items = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async addItem() {
      const newItem = { id: this.items.length + 1, name: 'Nouvel Article', quantity: 3 };
      try {
        // Requête POST pour ajouter un nouvel item
        await axios.post('http://localhost:3000/api/add-item', newItem);
        this.items.push(newItem);  // Ajouter l'item localement après succès
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 5px 0;
}
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #339966;
}
</style>

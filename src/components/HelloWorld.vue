<template>
  <div>
    <input
      v-model="abc"
      type="text"
    >
    <p>{{ abc }}</p>
    <p
      v-for="(dog, index) in todos"
      :key="index"
    >
      {{ index + 1 }}. {{ dog }}
    </p>

    <button
      type="button"
      class="p-3 bg-red-500"
      @click="addNewTask(abc)"
    >
      additem
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'

export default defineComponent({
  setup() {
    const abc= ref('')
    const todos = ref([
      'Buy coffee',
      'Workout',
      'Bath',
    ])
    function addNewTask(def: string) {
      todos.value.push(def)
    }

    return {
todos,
abc,
addNewTask,

    }
  },
})
</script>

<style>
.prose a {
  @apply text-gray-900 underline !important;
}
</style>

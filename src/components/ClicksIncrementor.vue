<template>
  <div>
    <p>
      Number of clicks is {{ dog }}
    </p>
    <input
      v-model="incValue"
      type="number"
    >
    <button
      type="button"
      class="p-3 bg-red-500"
      @click="handleIncrement(incValue)"
    >
      Increase
    </button>
    <button
      type="button"
      class="p-3 bg-orange-400"
      @click="handleDecrement(incValue)"
    >
      Decrease
    </button>
    <p>
      The number of clicks is {{ parity }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  setup() {
    const dog = ref(5)
    const incValue = ref(0)

    const parity = computed(() => {
      return dog.value%2 === 1? 'Odd': 'Even'
    })

    function handleIncrement(abc: number) {
      dog.value += abc
    }
    function handleDecrement(pqr: number) {
      dog.value -= pqr
    }

    return {
      dog,
      handleIncrement,
      handleDecrement,
      incValue,
      parity,

    }
  },
})
</script>

<style>
.prose a {
  @apply text-gray-900 underline !important;
}
</style>

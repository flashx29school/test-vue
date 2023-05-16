<template>
  <div
      @click="emits('cardClick', personData)"
      :class="cardClass"
  >
    <ul>
      <li>
        Name: {{ personData.name }}
      </li>
      <li>
        Email: {{ personData.email }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  personData: { type: Object, default: () => {}},
})

const emits = defineEmits(['cardClick'])

const cardClass = computed(() => `card-${props.personData.gen}`)
</script>

<style scoped>
.card-masculin {
  border: 1px solid blue;
  margin-top: 20px;
}

.card-feminin {
  border: 1px solid red;
  margin-top: 20px;
}
</style>
<template>
  <div>
    Selected person: {{ person  }}
    <OrganizersCard
      v-for="(person, idx) in items"
      :key="idx"
      :person-data="person"
      @card-click="cardClick($event)"
    />
  </div>
</template>

<script setup lang="ts">
import OrganizersCard from "@/components/OrganizersCard.vue";
import {ref} from "vue";

interface Person {
  name: string
  email: object
  gen: number
}

let person = ref({})

function cardClick($event: Person): boolean {
  console.log('PARENT CARD CLICK:', $event)
  person.value = $event
  return false
}

const items = ref([
  {
    name: "Name 1",
    email: "email@yahoo.com",
    gen: 'masculin',
  },
  {
    name: "Name 2",
    email: "email2@yahoo.com",
    gen: 'feminin'
  },
  {
    name: "Name 3",
    email: "email3@yahoo.com",
    gen: 'masculin'
  },
  {
    name: "Name 4",
    email: "email4@yahoo.com",
    gen: 'feminin'
  }
])
</script>
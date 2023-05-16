<template>
  <div class="layout">
    <h1 class="header">Header</h1>
    <div class="current-route">
      <h1>Current Route: {{ route.name }}</h1>
      <h1>Current Path: {{ route.path }}</h1>
    </div>
    <div class="navbar">
        <MenuBar :model="navBarItems">
          <template #item="route">
            <router-link
                class="navbar-item"
                :to="route.item.path"
            >
              {{ route.item.name }}
            </router-link>
          </template>
        </MenuBar>
    </div>
    <div class="content">
      <slot />
    </div>
    <div class="footer">
      <h1>Footer</h1>
      <slot name="links" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";

const route = useRoute()
const router = useRouter()
const navBarItems = ref<any>([])

onMounted(() => {
  navBarItems.value = router.options.routes
      .filter((route) => route?.props?.key === 'app-bar')
})
</script>

<style scoped>
.navbar-item {
  margin-left: 5px;
}

.layout {
  height: 100vh;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 150px 100px 1fr 200px;
  grid-template-areas: "h h" "b b" "m c" "f f";
}

.header {
  grid-area: h;
}

.current-route {
  grid-area: b;
}

.navbar {
  grid-area: m;
}

.content {
  grid-area: c;
}

.footer {
  grid-area: f;
}
</style>
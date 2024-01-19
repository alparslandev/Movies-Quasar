<template>
  <q-page class="window-height window-width column justify-top items-center">
    <SearchMovie class="q-ma-md" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import SearchMovie from 'src/components/SearchMovie.vue'

export default defineComponent({
  name: 'IndexPage',

  components: {
    SearchMovie
  }
})
</script>

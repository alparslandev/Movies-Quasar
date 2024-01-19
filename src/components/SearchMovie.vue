<template>
  <q-input
    outlined
    bottom-slots
    v-model="text"
    label="Movie Name"
    counter
    maxlength="32"
    :dense="dense"
  >
    <template v-slot:append>
      <q-icon
        v-if="text !== ''"
        name="close"
        @click="text = ''"
        class="cursor-pointer"
      />
      <q-icon name="search" />
    </template>

    <template v-slot:hint> Field hint </template>
  </q-input>
</template>
<script>
import { ref } from 'vue'
import { movieApi } from 'boot/axios'
import { useQuasar } from 'quasar'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SearchBar',

  setup(query, page, year = 0) {
    const $q = useQuasar()
    const data = ref(null)

    function loadData() {
      movieApi
        .get('/search/movie', {
          params: {
            query: query,
            page: page,
            year: year,
            include_adult: true
          }
        })
        .then((response) => {
          data.value = response.data
        })
        .catch(() => {})
    }

    return { data, loadData }
  }
})
</script>

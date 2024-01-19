<template>
  <div id="searchbar">
    <input type="text" v-model="search" />
  </div>
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
            include_adult: true,
          },
        })
        .then((response) => {
          data.value = response.data
        })
        .catch(() => {})
    }

    return { data, loadData }
  },
})
</script>

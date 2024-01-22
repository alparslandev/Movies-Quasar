<template>
  <q-input outlined bottom-slots v-model="text" counter maxlength="32">
    <template v-slot:append>
      <q-icon
        v-if="text !== ''"
        name="close"
        @click="text = ''"
        class="cursor-pointer"
      />
      <q-icon name="search" />
    </template>

    <template v-slot:hint>Movie Name </template>
  </q-input>
</template>
<script>
import { ref, onMounted } from 'vue'
import { movieApi } from 'boot/axios'
import { useQuasar } from 'quasar'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SearchBar',

  setup() {
    const $q = useQuasar()
    const data = ref(null)

    function loadData() {
      movieApi
        .get('/search/movie', {
          params: {
            query: 'God',
            page: 1,
            year: 0,
            include_adult: true
          }
        })
        .then((response) => {
          data.value = response.data
          $q.notify('fdjksş')
        })
        .catch(() => {
          $q.notify({
            color: 'positive',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem'
          })
        })
    }

    // Load data when component is mounted
    onMounted(() => {
      loadData()
    })

    return { data, loadData }
  }
})
</script>

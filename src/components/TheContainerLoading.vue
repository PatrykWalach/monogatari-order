<template>
  <v-container fill-height>
    <TheContainerHeader />
    <v-row :dense="$vuetify.breakpoint.xsOnly">
      <v-col cols="6" sm="4" lg="3" :key="id" v-for="id of ids">
        <TheGridLoadingCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import TheGridLoadingCard from './TheGridLoadingCard.vue'
import TheContainerHeader from './TheContainerHeader.vue'

import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'TheContainer',

  props: { ids: [Array, Number] },

  components: { TheGridLoadingCard, TheContainerHeader },
})
</script>

<template>
  <v-container fill-height>
    <TheContainerHeader />

    <v-row :dense="$vuetify.breakpoint.xsOnly">
      <v-col cols="6" sm="4" lg="3" v-for="media of media" :key="media.id">
        <TheGridCard :media="media" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import TheGridCard from './TheGridCard.vue'
import TheContainerHeader from './TheContainerHeader.vue'

import { defineComponent } from '@vue/composition-api'

import { gql } from 'apollo-boost'
import { TheGridCardFragments } from './TheGridCard.vue'

export const TheContainerFragments = {
  media: gql`
    fragment TheContainer_media on Media {
      id
      ...TheGridCard_media
    }
    ${TheGridCardFragments.media}
  `,
}

export default defineComponent({
  name: 'TheContainer',

  props: { media: Array },

  components: {
    TheGridCard,
    TheContainerHeader,
  },
})
</script>

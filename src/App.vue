<template>
  <v-app>
    <v-content class="the-app">
      <keep-alive>
        <ErrorWrapper v-if="error">
          <ErrorFetch :message="error.message" :refetch="refetch" />
        </ErrorWrapper>
        <TheContainerLoading :ids="SERIES_IDS" v-else-if="loading" />
        <TheContainer v-else :media="media" />
      </keep-alive>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import TheContainer from './components/TheContainer.vue'
import TheContainerLoading from './components/TheContainerLoading.vue'
import ErrorFetch from './components/ErrorFetch.vue'
import ErrorWrapper from './components/ErrorWrapper.vue'

import { defineComponent } from '@vue/composition-api'
import { useResult, useQuery } from '@vue/apollo-composable'
import { TheContainerFragments } from './components/TheContainer.vue'
import { gql } from 'apollo-boost'

const SERIES_IDS = [
  5081,
  11597,
  15689,
  17074,
  20593,
  20918,
  21262,
  9260,
  21399,
  21400,
  21520,
  21745,
  100815,
]

const TheAppQuery = gql`
  query TheAppQuery($idIn: [Int]) {
    Page {
      media(id_in: $idIn, sort: START_DATE) {
        id
        ...TheContainer_media
      }
    }
  }
  ${TheContainerFragments.media}
`

export default defineComponent({
  name: 'App',

  components: {
    TheContainer,
    TheContainerLoading,
    ErrorFetch,
    ErrorWrapper,
  },

  setup() {
    const { result, loading, refetch, error } = useQuery(TheAppQuery, {
      idIn: SERIES_IDS,
    })

    const media = useResult(result, [], data => data.Page.media || [])

    return { media, SERIES_IDS, loading, refetch, error }
  },
})
</script>

<style lang="scss" scoped>
.the-app {
  background-image: linear-gradient(
    to right bottom,
    #710f92,
    #673aaf,
    #5657c9,
    #3e71e0,
    #0e89f2
  );
}
</style>
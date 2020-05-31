<template>
  <v-app>
    <v-content class="the-app">
      <keep-alive>
        <ErrorWrapper v-if="error">
          <ErrorFetch :message="error.message" :refetch="refetch" />
        </ErrorWrapper>
        <TheContainerLoading :ids="ids" v-else-if="loading" />
        <TheContainer v-else :media="media" />
      </keep-alive>
    </v-content>
    <TheFooter />
  </v-app>
</template>

<script lang="ts">
import TheContainer from './components/TheContainer.vue'
import TheFooter from './components/TheFooter.vue'
import TheContainerLoading from './components/TheContainerLoading.vue'
import ErrorFetch from './components/ErrorFetch.vue'
import ErrorWrapper from './components/ErrorWrapper.vue'

import { defineComponent, computed, ref } from '@vue/composition-api'
import { useResult, useQuery } from '@vue/apollo-composable'
import { TheContainerFragments } from './components/TheContainer.vue'
import { gql } from 'apollo-boost'

import {
  TheAppQuery as QueryResult,
  TheAppQueryVariables as QueryVariables,
} from './__generated__/TheAppQuery'

const ORDERS = {
  RELEASE: [
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
  ],
  NOVEL: [
    5081,
    9260,
    21399,
    21400,
    11597,
    15689,
    17074,
    20593,
    20918,
    21520,
    21262,
    21745,
    100815,
  ],
  VERTICAL: [
    9260,
    21399,
    21400,
    5081,
    11597,
    15689,
    17074,
    20593,
    20918,
    21520,
    21262,
    21745,
    100815,
  ],
}
type Order = keyof typeof ORDERS
const TheAppQuery = gql`
  query TheAppQuery($idIn: [Int]) {
    Page {
      media(id_in: $idIn, sort: ID) {
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
    TheFooter,
    TheContainer,
    TheContainerLoading,
    ErrorFetch,
    ErrorWrapper,
  },

  setup() {
    const activeOrder = ref<Order>('NOVEL')

    const ids = computed(() => ORDERS[activeOrder.value])

    const { result, loading, refetch, error } = useQuery<
      QueryResult,
      QueryVariables
    >(TheAppQuery, {
      idIn: ids.value,
    })

    const unsortedMedia = useResult(result, [], data => data.Page?.media || [])

    const media = computed(() =>
      ids.value.map(id => unsortedMedia.value.find(media => media?.id === id)),
    )

    return { media, ids, loading, refetch, error }
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

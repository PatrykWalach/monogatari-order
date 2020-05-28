<template>
  <v-list-item-subtitle
    class="text-truncate caption"
    :style="{ display: 'flex' }"
  >
    <v-rating
      readonly
      dense
      half-increments
      color="orange"
      background-color="orange"
      :value="rating"
      class="mr-2"
      size="18"
    />
    <span v-text="more" />
  </v-list-item-subtitle>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import { useNumber } from '@/hooks'
import gql from 'graphql-tag'

import { MediaItemRatings_media } from './__generated__/MediaItemRatings_media'

export const MediaItemRatingsFragments = {
  media: gql`
    fragment MediaItemRatings_media on Media {
      id
      meanScore
      popularity
    }
  `,
}

export interface Props {
  media: MediaItemRatings_media
}

export default defineComponent<Readonly<Props>>({
  props: {
    media: {
      required: true,
      type: Object,
    },
  },

  setup(props) {
    const meanScore = computed(() => props.media.meanScore || 0)

    const rating = computed(() => Math.round(meanScore.value / 10) / 2)

    const reviews = useNumber(() => props.media.popularity || 0)
    const more = computed(() => `${meanScore.value}% (${reviews.value})`)
    return { more, rating }
  },
})
</script>

<template>
  <v-img v-on="$listeners" v-bind="$attrs" :lazy-src="lazySrc" :src="src">
    <slot></slot>
  </v-img>
</template>

<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import gql from 'graphql-tag'

import { MediaCardCover_media } from './__generated__/MediaCardCover_media'

export const MediaCardCoverFragments = {
  media: gql`
    fragment MediaCardCover_media on Media {
      id
      coverImage {
        medium
        extraLarge
      }
    }
  `,
}

export interface Props {
  media: MediaCardCover_media
}

export default defineComponent<Readonly<Props>>({
  inheritAttrs: false,

  props: {
    media: {
      required: true,
      type: Object,
    },
  },

  setup(props) {
    const src = computed(() => props.media.coverImage?.extraLarge || '')
    const lazySrc = computed(() => props.media.coverImage?.medium || '')

    return { src, lazySrc }
  },
})
</script>

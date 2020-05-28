<template>
  <div class="overline text-truncate">
    <span v-for="{ id, name } in media.studios.nodes" :key="id" class="mr-2"
      >{{ name }}
    </span>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag'
import { defineComponent } from '@vue/composition-api'

import { MediaItemOverline_media } from './__generated__/MediaItemOverline_media'

export const MediaItemOverlineFragments = {
  media: gql`
    fragment MediaItemOverline_media on Media {
      id
      studios(isMain: true) {
        nodes {
          id
          name
        }
      }
    }
  `,
}

export interface Props {
  media: MediaItemOverline_media
}

export default defineComponent<Readonly<Props>>({
  props: {
    media: { required: true, type: Object },
  },
})
</script>

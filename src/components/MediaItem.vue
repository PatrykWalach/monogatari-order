<template>
  <v-list-item selectable>
    <v-list-item-content>
      <MediaItemOverline v-if="media.studios.nodes.length" :media="media" />
      <MediaItemTitle :style="{ whiteSpace: 'unset' }" :media="media" />
      <MediaItemRatings :media="media" />
      <MediaItemSubtitle :media="media" />
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import MediaItemOverline from './MediaItemOverline.vue'
import MediaItemRatings from './MediaItemRatings.vue'
import MediaItemSubtitle from './MediaItemSubtitle.vue'
import MediaItemTitle from './MediaItemTitle.vue'

import gql from 'graphql-tag'
import { defineComponent } from '@vue/composition-api'
import { MediaItemOverlineFragments } from './MediaItemOverline.vue'
import { MediaItemRatingsFragments } from './MediaItemRatings.vue'
import { MediaItemSubtitleFragments } from './MediaItemSubtitle.vue'
import { MediaItemTitleFragments } from './MediaItemTitle.vue'

import { MediaItem_media } from './__generated__/MediaItem_media'

export const MediaItemFragments = {
  media: gql`
    fragment MediaItem_media on Media {
      id
      description

      ...MediaItemOverline_media
      ...MediaItemRatings_media
      ...MediaItemSubtitle_media
      ...MediaItemTitle_media
    }

    ${MediaItemOverlineFragments.media}
    ${MediaItemRatingsFragments.media}
    ${MediaItemSubtitleFragments.media}
    ${MediaItemTitleFragments.media}
  `,
}

export interface Props {
  media: MediaItem_media
}

export default defineComponent<Readonly<Props>>({
  components: {
    MediaItemOverline,
    MediaItemRatings,
    MediaItemSubtitle,
    MediaItemTitle,
  },

  props: {
    media: {
      required: true,
      type: Object,
    },
  },
})
</script>

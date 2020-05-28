<template>
  <v-menu
    max-width="240"
    offset-x
    open-on-hover
    :close-on-content-click="false"
  >
    <template #activator="{on,attrs}">
      <v-card
        flat
        v-on="on"
        v-bind="attrs"
        color="transparent"
        :href="media.siteUrl"
        target="_blank"
        rel="nofollow"
      >
        <v-sheet :style="{ overflow: 'hidden' }">
          <MediaCardCover :aspect-ratio="9 / 14" :media="media" />
        </v-sheet>

        <v-list-item>
          <v-list-item-content>
            <MediaItemTitle :style="{ whiteSpace: 'unset' }" :media="media" />
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </template>
    <v-card color="secondary">
      <MediaItem :media="media" />
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import MediaCardCover from './MediaCardCover.vue'
import MediaItemTitle from './MediaItemTitle.vue'
// import MediaItemSubtitle from './MediaItemSubtitle.vue'
import MediaItem from './MediaItem.vue'

import gql from 'graphql-tag'
import { defineComponent } from '@vue/composition-api'
import { MediaCardCoverFragments } from './MediaCardCover.vue'
import { MediaItemFragments } from './MediaItem.vue'
import { MediaItemTitleFragments } from './MediaItemTitle.vue'

export const TheGridCardFragments = {
  media: gql`
    fragment TheGridCard_media on Media {
      id
      ...MediaCardCover_media
      ...MediaItem_media
      ...MediaItemTitle_media
      siteUrl
    }
    ${MediaCardCoverFragments.media}
    ${MediaItemFragments.media}
    ${MediaItemTitleFragments.media}
  `,
}

export default defineComponent({
  props: {
    media: { required: true, type: Object },
  },

  components: {
    MediaCardCover,
    MediaItem,
    MediaItemTitle,
  },
})
</script>

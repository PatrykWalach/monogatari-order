<template>
  <RenderlessSubtitle :media="media" v-slot="{ subtitle }">
    <v-list-item-subtitle
      class="text-capitalize"
      :style="{ alignItems: 'center' }"
      v-text="subtitle"
    />
  </RenderlessSubtitle>
</template>

<script lang="ts">
import RenderlessSubtitle from './RenderlessSubtitle.vue'
import { RenderlessSubtitleFragments } from './RenderlessSubtitle.vue'

import { defineComponent } from '@vue/composition-api'
import gql from 'graphql-tag'

import { MediaItemSubtitle_media } from './__generated__/MediaItemSubtitle_media'

export const MediaItemSubtitleFragments = {
  media: gql`
    fragment MediaItemSubtitle_media on Media {
      id
      ...RenderlessSubtitle_media
    }
    ${RenderlessSubtitleFragments.media}
  `,
}

export interface Props {
  media: MediaItemSubtitle_media
}

export default defineComponent<Readonly<Props>>({
  components: { RenderlessSubtitle },

  props: {
    media: { required: true, type: Object },
  },
})
</script>

<template>
  <RenderlessTitle :media="media" v-slot="{ title }">
    <v-list-item-title
      class="flex title font-weight-black text-uppercase"
      :title="title"
      v-text="title"
      v-bind="$attrs"
    />
  </RenderlessTitle>
</template>

<script lang="ts">
import RenderlessTitle from './RenderlessTitle.vue'

import gql from 'graphql-tag'
import { defineComponent } from '@vue/composition-api'
import { RenderlessTitleFragments } from './RenderlessTitle.vue'

import { MediaItemTitle_media } from './__generated__/MediaItemTitle_media'

export const MediaItemTitleFragments = {
  media: gql`
    fragment MediaItemTitle_media on Media {
      id
      ...RenderlessTitle_media
    }
    ${RenderlessTitleFragments.media}
  `,
}

export interface Props {
  media: MediaItemTitle_media
}

export default defineComponent<Readonly<Props>>({
  inheritAttrs: false,

  components: { RenderlessTitle },

  props: {
    media: { required: true, type: Object },
  },
})
</script>

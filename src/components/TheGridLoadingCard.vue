<template>
  <v-card flat color="transparent">
    <v-responsive :aspect-ratio="9 / 14">
      <v-skeleton-loader
        type="image"
        height="100%"
        class="media-card-cover--loading"
      />
    </v-responsive>
    <v-list-item>
      <v-list-item-content>
        <MediaItemLoadingTitle />
        <MediaItemLoadingSubtitle />
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
<script lang="ts">
import MediaItemLoadingTitle from './MediaItemLoadingTitle.vue'
import MediaItemLoadingSubtitle from './MediaItemLoadingSubtitle.vue'

import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: {
    MediaItemLoadingSubtitle,
    MediaItemLoadingTitle,
  },
})
</script>

<style lang="scss" scoped>
.media-card-cover--loading {
  & ::v-deep .v-skeleton-loader__image.v-skeleton-loader__bone {
    height: 100%;
  }
}
</style>

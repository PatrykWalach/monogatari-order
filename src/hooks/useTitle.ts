import { Ref, computed } from '@vue/composition-api'
import { useComputedCallback } from './'

import { useTitle_media } from './__generated__/useTitle_media'

export const useTitle = (
  value: Ref<useTitle_media> | (() => useTitle_media),
) => {
  const media = useComputedCallback(value)

  return computed(() => media.value.title?.userPreferred || '')
}

import gql from 'graphql-tag'

useTitle.fragments = {
  media: gql`
    fragment useTitle_media on Media {
      id
      title {
        userPreferred
      }
    }
  `,
}

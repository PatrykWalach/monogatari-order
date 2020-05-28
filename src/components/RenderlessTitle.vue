<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import { useTitle } from '@/hooks'
import gql from 'graphql-tag'

import { RenderlessTitle_media } from './__generated__/RenderlessTitle_media'

export const RenderlessTitleFragments = {
  media: gql`
    fragment RenderlessTitle_media on Media {
      id
      ...useTitle_media
    }
    ${useTitle.fragments.media}
  `,
}

interface Props {
  media: RenderlessTitle_media
}

export default defineComponent<Readonly<Props>>({
  props: { media: { required: true, type: Object } },

  setup(props, { slots }) {
    const title = useTitle(() => props.media)

    const scopedVariables = computed(() => ({
      title: title.value,
    }))

    return () => slots.default(scopedVariables.value).shift() || null
  },
})
</script>

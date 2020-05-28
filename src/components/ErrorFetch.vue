<template>
  <ErrorMessage
    title="Check your internet connection and try again"
    subtitle="We couldn`t connect to the server."
    actionText="Try again"
    :error="message"
    :action="refetch"
  />
</template>
<script lang="ts">
import ErrorMessage from './ErrorMessage.vue'

import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: { ErrorMessage },

  props: {
    refetch: { required: true, type: Function },
    message: { required: true, type: String },
  },
})
</script>

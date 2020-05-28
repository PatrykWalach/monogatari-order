<template>
  <v-card flat color="transparent" class="text-center">
    <slot name="icon" v-if="$scopedSlots.icon"></slot>
    <v-icon large v-else>
      {{ icon }}
    </v-icon>

    <slot
      name="title"
      v-if="$scopedSlots.title"
      v-bind="{ styles: titleStyles }"
    />
    <VCardTitle v-else v-bind="titleStyles" v-text="title" />

    <slot
      name="subtitle"
      v-if="$scopedSlots.subtitle"
      v-bind="{ styles: subtitleStyles }"
    />
    <VCardSubtitle
      v-else-if="subtitle"
      v-bind="subtitleStyles"
      v-text="subtitle"
    />

    <slot
      name="action"
      v-if="$scopedSlots.action"
      v-bind="{ styles: actionStyles }"
    />
    <v-card-actions v-else-if="action" v-bind="actionStyles">
      <v-btn :loading="actionLoading" @click="action" color="accent" text>{{
        actionText
      }}</v-btn>
    </v-card-actions>

    <VCardText v-if="error" v-text="computedError" />
  </v-card>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export interface ErrorMessageProps {
  icon?: string
  title: string
  subtitle?: string
  action?: Function
  actionText?: string
  error?: string
}

export default defineComponent({
  props: {
    icon: { type: String, default: ' mdi-emoticon-neutral-outline' },
    title: { required: true, type: String },
    subtitle: String,
    action: Function,
    actionText: String,
    error: String,
    actionLoading: Boolean,
  },

  setup(props) {
    const computedError = computed(
      () => `The error is: "${props.error}", in case you need it.`,
    )
    const sharedStyles = {
      class: 'd-flex justify-center',
      style: { wordBreak: 'unset' },
    }
    const subtitleStyles = {
      ...sharedStyles,
      class: 'title ' + sharedStyles.class,
    }
    const titleStyles = {
      ...sharedStyles,
      class: 'display-1 ' + sharedStyles.class,
    }
    const actionStyles = {
      class: 'justify-center',
    }

    return {
      computedError,
      subtitleStyles,
      titleStyles,
      actionStyles,
    }
  },
})
</script>

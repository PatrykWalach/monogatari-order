import { Ref, computed } from '@vue/composition-api'
import { useComputedCallback } from './'

export const useIntl = () => {
  const { format: formatNumber } = new Intl.NumberFormat('en-US', {
    compactDisplay: 'short',
    notation: 'compact',
  } as Intl.NumberFormatOptions)

  return { formatNumber }
}

export const useNumber = (value: Ref<number> | (() => number)) => {
  const number = useComputedCallback(value)

  const { formatNumber } = useIntl()

  return computed(() => formatNumber(number.value))
}

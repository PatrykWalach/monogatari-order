import { Ref, computed, isRef } from '@vue/composition-api'

export type ComputedCallback<T> = Ref<T> | (() => T) | T

export const useComputedCallback = <T>(value: ComputedCallback<T>): Ref<T> =>
  value instanceof Function
    ? computed(value)
    : isRef(value)
    ? value
    : computed(() => value)

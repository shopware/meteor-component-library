declare module 'vue' {
  // eslint-disable-next-line vue/prefer-import-from-vue
  import { CompatVue } from '@vue/runtime-dom'
  const Vue: CompatVue
  export default Vue
  // eslint-disable-next-line vue/prefer-import-from-vue
  export * from '@vue/runtime-dom'
  const { configureCompat } = Vue
  export { configureCompat }
}

declare module 'v-click-outside';
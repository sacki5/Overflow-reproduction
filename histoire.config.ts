import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [HstVue()],
  setupFile: 'histoire.setup.ts',
  vite: (config, env) => {
    config.base = env.mode === 'build' ? '/fried-tofu/' : '/'
  },
})

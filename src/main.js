/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import '@/scss/main.scss'
import '@/scss/inputimg.sass'

// -立刻執行 function
(async () => {
  const app = createApp(App)

  await registerPlugins(app)

  app.mount('#app')
})()

import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import { empresa } from './src/data/empresa'

function datosKalcos({ verificacionMeta }: { verificacionMeta: string }): Plugin {
  return {
    name: 'kalcos-datos',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replace('%FACEBOOK_DOMAIN_VERIFICATION%', verificacionMeta),
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const verificacionMeta = env.VITE_FACEBOOK_DOMAIN_VERIFICATION || empresa.metaVerificacionDominio || 'PENDIENTE'

  return {
    plugins: [react(), datosKalcos({ verificacionMeta })],
  }
})
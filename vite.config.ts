import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import { datosFaltantes, empresa, MODO_MAQUETA } from './src/data/empresa'

function datosKalcos({ verificacionMeta }: { verificacionMeta: string }): Plugin {
  return {
    name: 'kalcos-datos',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replace('%FACEBOOK_DOMAIN_VERIFICATION%', verificacionMeta),
    },
  }
}
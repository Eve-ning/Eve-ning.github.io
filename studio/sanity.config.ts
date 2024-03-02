import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {markdownSchema} from 'sanity-plugin-markdown'
import {tags} from 'sanity-plugin-tags'
import './custom.css'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'website',
  title: "Evening's Website",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool(), markdownSchema(), tags()],
  schema: {
    types: schemaTypes,
  },
})

// MarkdownInputCustomPreview.tsx
import {MarkdownInput, MarkdownInputProps} from 'sanity-plugin-markdown'
import {marked} from 'marked'
import {useMemo} from 'react'
import mermaid from 'mermaid'
import markedKatex from 'marked-katex-extension'

mermaid.initialize({
  theme: 'neutral',
})
marked.use(markedKatex({displayMode: true, output: 'mathml'}))
const renderer = new marked.Renderer()

renderer.code = function (code, language) {
  if (code.match(/^sequenceDiagram/) || code.match(/^graph/)) {
    return '<pre class="mermaid bg-transparent grid justify-items-center">' + code + '</pre>'
  } else {
    return '<pre class="bg-transparent"><code>' + code + '</code></pre>'
  }
}

export function CustomMarkdownInput(props: MarkdownInputProps) {
  const reactMdeProps: MarkdownInputProps['reactMdeProps'] = useMemo(() => {
    return {
      options: {
        previewRender: (markdownText) => {
          return marked.parse(markdownText, {renderer})
        },
      },
    }
  }, [])

  return <MarkdownInput {...props} reactMdeProps={reactMdeProps} />
}

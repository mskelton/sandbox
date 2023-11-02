import { renderToReadableStream } from "react-dom/server"
import { Menu } from "./Menu.js"

function App() {
  return (
    <body>
      <Menu />
    </body>
  )
}

Bun.serve({
  port: 3001,
  async fetch() {
    const stream = await renderToReadableStream(<App />)

    return new Response(stream, {
      headers: { "Content-Type": "text/html" },
    })
  },
})

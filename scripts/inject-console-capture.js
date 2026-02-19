const fs = require('fs')
const path = require('path')

const buildDir = path.join(process.cwd(), 'out')
const scriptTag = '<script src="/dashboard-console-capture.js"></script>'

function injectScript(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  if (content.includes(scriptTag)) return
  const updated = content.replace('</head>', `${scriptTag}</head>`)
  fs.writeFileSync(filePath, updated)
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(fullPath)
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      injectScript(fullPath)
    }
  })
}

if (fs.existsSync(buildDir)) {
  walk(buildDir)
}
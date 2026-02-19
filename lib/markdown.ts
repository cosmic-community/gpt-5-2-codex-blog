import { marked } from 'marked'

export function renderMarkdown(content?: string): string {
  if (!content) return ''
  const parsed = marked.parse(content, { async: false }) // Changed: ensure sync parse and capture union result
  return typeof parsed === 'string' ? parsed : '' // Changed: guard against Promise return type
}
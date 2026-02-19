# Cosmic Writers Journal

![App Preview](https://imgix.cosmicjs.com/9430c570-0dd7-11f1-af80-2fcbe4ec62b4-photo-1509395176047-4a66953fd231-1771535497838.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive blog experience that showcases posts, authors, and categories from your Cosmic bucket with clean typography, intuitive navigation, and editorial-grade layouts.

## Features
- Home page with featured post highlight
- Dedicated post pages with markdown rendering
- Author profiles with related posts
- Category landing pages with descriptions
- Responsive design with Tailwind CSS
- Cosmic SDK integration with connected objects

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=69977ab8b2ee9424dc1b5022&clone_repository=69977d7b36718579e047dd47)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "A blog with posts, authors, and categories"

### Code Generation Prompt

> "Based on the content model I created for "A blog with posts, authors, and categories", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Cosmic SDK
- Marked (Markdown rendering)

## Getting Started

### Prerequisites
- Bun installed globally
- A Cosmic bucket with posts, authors, and categories

### Installation
```bash
bun install
bun run dev
```

## Cosmic SDK Examples
```ts
import { cosmic } from '@/lib/cosmic'

export async function getPosts() {
  const response = await cosmic.objects
    .find({ type: 'posts' })
    .props(['id', 'title', 'slug', 'metadata', 'created_at'])
    .depth(1)

  return response.objects
}
```

## Cosmic CMS Integration
This app uses the Cosmic SDK with server-side data fetching. Connected objects (authors and categories) are retrieved using `.depth(1)` so related data is available without extra requests. Learn more in the Cosmic docs: https://www.cosmicjs.com/docs

## Deployment Options
- Vercel (recommended for Next.js)
- Netlify (static export if required)

Remember to set your Cosmic environment variables in your hosting platform dashboard.
<!-- README_END -->
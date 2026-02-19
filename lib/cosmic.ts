import { createBucketClient } from '@cosmicjs/sdk'
import type { Author, Category, CosmicResponse, Post } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string
})

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export async function getPosts(): Promise<Post[]> {
  try {
    const response = (await cosmic.objects
      .find({ type: 'posts' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)) as CosmicResponse<Post>

    return response.objects.sort((a, b) => {
      const dateA = new Date(a.created_at || '').getTime()
      const dateB = new Date(b.created_at || '').getTime()
      return dateB - dateA
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch posts')
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const response = await cosmic.objects.findOne({ type: 'posts', slug }).depth(1)
    return response.object as Post
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch post')
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const response = (await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)) as CosmicResponse<Category>
    return response.objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch categories')
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const response = await cosmic.objects.findOne({ type: 'categories', slug }).depth(1)
    return response.object as Category
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch category')
  }
}

export async function getAuthors(): Promise<Author[]> {
  try {
    const response = (await cosmic.objects
      .find({ type: 'authors' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)) as CosmicResponse<Author>
    return response.objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch authors')
  }
}

export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  try {
    const response = await cosmic.objects.findOne({ type: 'authors', slug }).depth(1)
    return response.object as Author
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch author')
  }
}

export async function getPostsByCategoryId(categoryId: string): Promise<Post[]> {
  try {
    const response = (await cosmic.objects
      .find({ type: 'posts', 'metadata.category': categoryId })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)) as CosmicResponse<Post>

    return response.objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch category posts')
  }
}

export async function getPostsByAuthorId(authorId: string): Promise<Post[]> {
  try {
    const response = (await cosmic.objects
      .find({ type: 'posts', 'metadata.author': authorId })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)) as CosmicResponse<Post>

    return response.objects
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch author posts')
  }
}
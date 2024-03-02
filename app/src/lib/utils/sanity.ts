import type {PortableTextBlock} from '@portabletext/types'
import {createClient} from '@sanity/client'
import type {ImageAsset, Slug} from '@sanity/types'
import groq from 'groq'

import {
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_PROJECT_ID
} from '$env/static/public'

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
    throw new Error('Did you forget to run sanity init --env?')
}

export const client = createClient({
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: PUBLIC_SANITY_DATASET,
    useCdn: false, // `false` if you want to ensure fresh data
    apiVersion: '2023-03-20' // date of setup
})

export async function getPosts(): Promise<Post[]> {
    return await client.fetch(
        groq`*[_type == "blogPost" && defined(slug.current)] | order(_createdAt desc)`
    )
}


export async function getGalleryImages(): Promise<GalleryImage[]> {
    return await client.fetch(
        groq`*[_type == "galleryImage"]{..., image{asset->{url}}}`
    )
}

export async function getPost(slug: string): Promise<Post> {
    return await client.fetch(groq`*[_type == "blogPost" && slug.current == $slug][0]`, {
        slug
    })
}

export async function getExpPosts(): Promise<ExpPost[]> {
    return await client.fetch(
        groq`*[_type == "expPost"] | order(dateTo desc)`
    )
}

export interface GalleryImage {
    _type: 'galleryImage';
    _createdAt: string;
    image: ImageAsset;
    name: string;
    desc: string;
}

export interface Post {
    _type: 'blogPost';
    _createdAt: string;
    title?: string;
    slug: Slug;
    excerpt?: string;
    mainImage?: ImageAsset;
    body: PortableTextBlock[];
}

export interface ExpPost {
    _type: 'expPost';
    _createdAt: string;
    title: string;
    dateFrom: string;
    dateTo: string;
    tags: { label: string, value: string }[];
    links: string[];
    summary: string;
    body: PortableTextBlock[];
}

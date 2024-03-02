import {error} from '@sveltejs/kit'
import type {PageLoad} from './$types'
import {getExpPosts} from '$lib/utils/sanity'

export const ssr = false

export const load = (async ({params}) => {
    const posts = await getExpPosts()
    if (posts) return {posts}

    throw error(404, 'Not found')
}) satisfies PageLoad

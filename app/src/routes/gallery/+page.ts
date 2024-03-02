import {error} from '@sveltejs/kit'
import type {PageLoad} from './$types'
import {getGalleryImages} from '$lib/utils/sanity'

export const ssr = false

export const load = (async ({params}) => {
    const ims = await getGalleryImages()
    if (ims) return {ims}

    throw error(404, 'Not found')
}) satisfies PageLoad

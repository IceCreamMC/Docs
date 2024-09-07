import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

import mdx from '@astrojs/mdx';

import vue from '@astrojs/vue';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'IceCreamMC Docs',
        social: {
            github: 'https://github.com/IceCreamMC',
            discord: 'https://discord.icecreammc.xyz',
        },
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Installation', slug: 'guides/installation' },
                    { label: 'Migration', slug: 'guides/migration' },
                    { label: 'Requirements', slug: 'guides/requirements'}
                ],
            },
        ],
        }), mdx(), vue(), react(), tailwind(), robotsTxt()],
});
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
                label: 'First Steps',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Installation', slug: 'first-steps/installation' },
                    { label: 'Migration', slug: 'first-steps/migration' },
                    { label: 'Requirements', slug: 'first-steps/requirements'},
                    { label: 'Running Your Server', slug: 'first-steps/running-your-server'},
                    { label: 'Whats next', slug: 'first-steps/next-steps'}
                ],
            },
        ],
        }), mdx(), vue(), react(), tailwind(), robotsTxt()],
});
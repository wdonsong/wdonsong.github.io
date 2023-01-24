import { defineConfig } from "vitepress"
import sidebar from "./sidebar";

export default defineConfig({
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    lang: 'zh-CN',
    title: 'WdonSpace',
    description: 'Collection by a learning-driven developer.',
    base: '/',
    lastUpdated: true,
    markdown: {
        theme: 'material-palenight',
        lineNumbers: true
    },
    // titleTemplate: ' WdonSpace',
    themeConfig: {
        // logo: '/favicon.ico',
        outline: 'deep',
        nav: [
            { text: "🔥 前端", link: "/frontend/" },

            { text: "🗒️ 备忘录", link: "/memo/" },
        ],
        socialLinks: [],
        sidebar,
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2023-PRESENT Wdon",
        },
        editLink: {
            pattern: 'https://github.com/wdonsong/wdonsong.github.io/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        }
    }
})
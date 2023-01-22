import { defineConfig } from "vitepress"

export default defineConfig({
    lang: 'zh-CN',
    title: 'WdonSpace',
    description: 'Collection by a learning-driven developer.',
    base: '/',
    lastUpdated: true,
    markdown: {
        theme: 'material-palenight',
        lineNumbers: true
    },
    titleTemplate: 'Site',
    themeConfig: {
        // logo:'/',
        nav: [
            { text: "🔥 前端", link: "/frontend/" },

            { text: "🗒️ 备忘录", link: "/memo/" },
        ],
        socialLinks: [],
        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2023-PRESENT Wdon",
        },

    }
})

module.exports = {
    title: 'I-SHOULD.COM',
    description: 'EVERYTHIGN YOU NEED, BASICALLY TO ME 😄.',
    head: [
        // ['link', { rel: 'icon', href: 'logo.png' }],
    ],
    themeConfig: {
        // logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Introduction', link: '/introduction/' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        sidebar: [{
                title: 'Introduction',
                collapsable: false,
                children: [
                    '/introduction/',
                    '/introduction/download',
                    '/introduction/installation',
                    '/introduction/getting-started',
                ]
            },
            {
                title: 'Components',
                collapsable: false,
                // children: [
                //     '/components/',
                //     '/components/go-route',
                // ]
            },
        ],
        smoothScroll: true,
        nextLinks: true,
        prevLinks: true,
    },
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/nprogress',
        '@vuepress/medium-zoom',
        '@vuepress/back-to-top',
        '@vuepress/last-updated'
    ],
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             '@src': 'public/'
    //         }
    //     }
    // }
}

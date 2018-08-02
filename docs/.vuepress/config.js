module.exports = {
    title: "测试文档",
    themeConfig: {
        nav: [
            {
                text: '规范',
                items: [
                    { text: 'JavaScript', link: '/JavaScript/' },
                    { text: 'Vue', link: '/Vue/' }
                ]
            },
            {
                text: '博文',
                link: '/blog/',
            },
        ],
        sidebar: {
            '/JavaScript/': [
                '',
                'getting-started',
                'basic-config',
            ],
            '/Vue/': [
                '',
                'getting-started',
                'basic-config',
            ]
        }

    }
}
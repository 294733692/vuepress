module.exports = {
    title: "测试文档",   //首页名称
    description: "this is test",  // 首页描述
    themeConfig: {
        repo: '294733692',  //假定Github。也可以是完整的Gitlab网址
        nav: [
            {
                text: '规范',
                items: [
                    { text: 'JavaScript', link: '/whole/JavaScript/' },
                    { text: 'Vue', link: '/whole/Vue/' }
                ]
            },
            {
                text: '博文',
                link: '/whole/blog/',
            },
            {
                text: 'project',
                link: '/whole/project/'
            },
            {
                text: '工具函数',
                link: '/whole/methods/'
            },
            // 侧边栏分组
            // sidebar: [
            //     {
            //         title: 'Group 1',
            //         collapsable: false,
            //         children: [
            //             '/'
            //         ]
            //     },
            //     {
            //         title: 'Group 2',
            //         children: [ /* ... */]
            //     }
            // ]
        ],
        sidebar: {
            '/whole/JavaScript/': [
                '策略模式',
                '工厂模式',
            ],
            '/whole/Vue/': [
                '',
                'getting-started',
                'basic-config',
            ],
            '/whole/blog/': [
                ''
            ],
            '/whole/project/': [
                ''
            ],
            '/whole/methods/':[
                ''
            ]
        }

    }
}
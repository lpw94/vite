export default {
    // 站点级选项
    title: '前端技术',
    description: 'ES6, JavaScript, typyscript, vue2, vue3, react, HTML技术学习。',
    // 主题相关配置
    themeConfig: {
        logo: '/logo.png',
        nav: [{ text: '个人简历', link: '/blog/' }],
        sidebar: [
            {
              text: 'js技术',
              items: [
                { text: 'JavaScript响应式原理', link: '/js1' },
                { text: 'JavaScript对象继承', link: '/js2' },
                { text: 'typescript中泛型的使用方式', link: '/js3' },
                { text: '闭包函数', link: '/js4' },
                { text: 'JavaScript对象属性', link: '/js5' },
                { text: 'Markdown使用教程', link: '/js6' },
              ]
            }
          ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan woge'
        }
    }
  }
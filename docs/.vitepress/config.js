import { defineConfig } from 'vitepress'
import navData from './nav.js'
export default defineConfig({
  // ...
  // 站点级选项
  title: '前端技术',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  description: 'ES6, JavaScript, typyscript, vue2, vue3, react, HTML技术学习。',
  // 主题相关配置
  themeConfig: {
      // logo: '/logo.png',
      nav: navData,
      sidebar: [
        {
          text: 'js文档',
          items: [
            { text: 'JavaScript响应式原理', link: '/artcle/index' },
            { text: 'JavaScript对象继承', link: '/artcle/js2' },
            { text: 'typescript中泛型的使用方式', link: '/artcle/js3' },
            { text: '闭包函数', link: '/artcle/js4' },
            { text: 'JavaScript对象属性', link: '/artcle/js5' },
            { text: 'Markdown使用教程', link: '/artcle/js6' },
          ]
        }
      ],
      footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2019-present Evan woge'
      }
  }
})
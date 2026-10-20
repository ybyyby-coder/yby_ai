const e={name:"墨染青衫",avatar:"https://picsum.photos/200/200?random=100",bio:"全栈开发者 / 技术写作者 / 开源爱好者",description:"热爱技术，热爱生活。专注于前端开发与用户体验设计，喜欢用代码创造美好的数字体验。",location:"上海，中国",email:"hello@moranqingshan.dev",github:"https://github.com",wechat:"moranqingshan"},t=[{name:"前端开发",count:12},{name:"后端技术",count:8},{name:"设计灵感",count:5},{name:"生活随笔",count:7},{name:"开源项目",count:4}],o=["Vue.js","React","TypeScript","Node.js","CSS","Python","Docker","Git","性能优化","设计模式","微服务","算法"],a=[{id:1,title:"Vue 3 组合式 API 深度解析：从入门到实战",summary:"本文将深入探讨 Vue 3 组合式 API 的设计理念、核心概念以及在实际项目中的最佳实践，帮助你快速掌握这一革命性的开发模式。",cover:"https://picsum.photos/800/400?random=1",category:"前端开发",tags:["Vue.js","TypeScript"],date:"2024-01-15",readTime:"12 分钟",content:`
## 前言

Vue 3 的组合式 API（Composition API）是 Vue 框架的一次重大革新。它不仅仅是一种新的 API 风格，更是一种全新的代码组织方式。

## 为什么需要组合式 API？

在 Vue 2 的选项式 API 中，当组件逻辑变得复杂时，相关的代码会被分散到不同的选项中。比如，一个搜索功能的代码可能分散在 data、computed、methods、watch 等多个地方。这使得代码难以理解和维护。

组合式 API 通过将相关逻辑组织在一起，解决了这个问题。

## 核心概念

### ref 与 reactive

\`ref\` 用于创建基本类型的响应式数据，\`reactive\` 用于创建对象类型的响应式数据。

### computed 与 watch

计算属性和侦听器在组合式 API 中同样重要，它们帮助我们处理数据的派生和副作用。

### 生命周期钩子

Vue 3 将生命周期钩子改为了 \`onMounted\`、\`onUpdated\`、\`onUnmounted\` 等函数式调用方式。

## 自定义 Hook

组合式 API 最强大的特性之一是自定义 Hook（组合函数）。我们可以将可复用的逻辑提取为独立的函数，在不同组件中共享。

## 总结

组合式 API 让 Vue 3 的代码更加灵活、可复用和易于测试。它特别适合中大型项目的开发。
    `},{id:2,title:"CSS Grid 布局完全指南：打造现代响应式网页",summary:"CSS Grid 是目前最强大的 CSS 布局系统。本文将通过大量实际案例，带你全面掌握 Grid 布局的各项特性。",cover:"https://picsum.photos/800/400?random=2",category:"前端开发",tags:["CSS","设计模式"],date:"2024-01-10",readTime:"10 分钟",content:`
## CSS Grid 简介

CSS Grid 是一个二维布局系统，它让我们可以同时处理行和列。与 Flexbox 不同，Grid 天生就是为二维布局设计的。

## 基础概念

### 网格容器与网格项目

通过 \`display: grid\` 将元素变为网格容器，其直接子元素自动成为网格项目。

### 定义行与列

使用 \`grid-template-columns\` 和 \`grid-template-rows\` 定义网格的行列结构。\`fr\` 单位是 Grid 的精髓，它代表可用空间的一个比例。

## 实用技巧

### 响应式布局

结合 \`auto-fill\` 和 \`minmax()\`，我们可以用一行代码实现响应式网格：

\`grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))\`

### 对齐方式

Grid 提供了强大的对齐控制，包括 \`justify-items\`、\`align-items\`、\`place-items\` 等属性。

## 总结

CSS Grid 是现代网页布局的基石，掌握它将大大提升你的布局能力。
    `},{id:3,title:"Node.js 微服务架构实践：从单体到分布式",summary:"分享一个真实项目从单体架构迁移到微服务架构的完整过程，包括技术选型、服务拆分、通信方案等核心问题。",cover:"https://picsum.photos/800/400?random=3",category:"后端技术",tags:["Node.js","微服务","Docker"],date:"2024-01-05",readTime:"15 分钟",content:`
## 为什么要微服务？

随着业务的增长，单体应用变得越来越难以维护。代码耦合度高、部署困难、团队协作效率低下等问题日益突出。

## 服务拆分策略

### 按业务领域拆分

我们采用领域驱动设计（DDD）的思想，将业务划分为用户服务、订单服务、支付服务、通知服务等独立模块。

### 数据隔离

每个微服务拥有独立的数据库，通过事件驱动的方式保持数据一致性。

## 技术选型

- 服务框架：Nest.js
- 消息队列：RabbitMQ
- 服务发现：Consul
- 容器化：Docker + Kubernetes
- API 网关：Kong

## 总结

微服务不是银弹，需要根据团队规模和业务复杂度来决定是否采用。
    `},{id:4,title:"设计灵感：2024 年值得关注的 UI 设计趋势",summary:"回顾过去一年最引人注目的 UI 设计趋势，从新拟态到玻璃态，从动效设计到无障碍设计，探索未来设计方向。",cover:"https://picsum.photos/800/400?random=4",category:"设计灵感",tags:["设计模式","CSS"],date:"2023-12-28",readTime:"8 分钟",content:`
## 玻璃态设计（Glassmorphism）

玻璃态设计通过模糊背景和半透明效果，创造出类似毛玻璃的视觉效果。这种设计风格在 Apple 的产品中被大量使用。

## 3D 元素的融合

随着 WebGL 和 Three.js 的普及，越来越多的网站开始融入 3D 元素，为用户带来沉浸式的交互体验。

## 微交互动效

精心设计的微交互能够显著提升用户体验。按钮的悬停效果、页面切换动画、加载状态提示等细节都值得用心打磨。

## 无障碍设计

无障碍设计不再是可选项，而是必备项。确保网站对所有用户友好，包括色觉障碍、运动障碍等群体。

## 总结

好的设计不仅要美观，更要实用和包容。
    `},{id:5,title:"TypeScript 高级类型体操：让你的代码更安全",summary:"深入理解 TypeScript 的类型系统，掌握条件类型、映射类型、模板字面量类型等高级特性，编写更安全的代码。",cover:"https://picsum.photos/800/400?random=5",category:"前端开发",tags:["TypeScript","Vue.js"],date:"2023-12-20",readTime:"14 分钟",content:`
## 类型体操是什么？

类型体操是指利用 TypeScript 类型系统的高级特性，编写复杂类型定义的过程。它能让编译器帮你做更多的类型检查。

## 条件类型

条件类型类似于 JavaScript 中的三元表达式：\`T extends U ? X : Y\`。它是构建复杂类型的基础。

## 映射类型

映射类型可以基于已有类型创建新类型，类似于对象的遍历操作。

## 模板字面量类型

TypeScript 4.1 引入的模板字面量类型，让我们可以在类型层面进行字符串操作。

## 实用工具类型

掌握内置工具类型如 Partial、Required、Pick、Omit、Record 等，能大幅提升开发效率。

## 总结

类型体操虽然有一定学习曲线，但它能让你的代码更加健壮和可维护。
    `},{id:6,title:"周末露营记：在山水间寻找内心的宁静",summary:"远离城市的喧嚣，带上帐篷和好心情，来一场说走就走的露营之旅。记录这次难忘的户外体验。",cover:"https://picsum.photos/800/400?random=6",category:"生活随笔",tags:["生活"],date:"2023-12-15",readTime:"6 分钟",content:`
## 出发前的准备

选了一个天气晴朗的周末，约上三五好友，驱车前往郊外的山谷。提前准备好了帐篷、睡袋、炊具和各种食材。

## 搭建营地

到达目的地后，我们选了一块平坦的草地开始搭建营地。搭帐篷、生火、准备晚餐，一切都井然有序。

## 星空下的晚餐

当夜幕降临，我们在篝火旁享用美食，抬头便是满天繁星。城市的霓虹灯远不及这自然的星光璀璨。

## 清晨的鸟鸣

第二天清晨，被鸟鸣声唤醒。推开帐篷，薄雾笼罩着山谷，阳光穿过树叶洒下斑驳的光影。

## 感悟

生活不只有代码和 deadline，还有诗和远方。偶尔放慢脚步，感受自然的美好，让心灵得到真正的休憩。
    `},{id:7,title:"Docker 容器化部署前端应用最佳实践",summary:"从 Dockerfile 编写到多阶段构建，从 Nginx 配置到 CI/CD 集成，全面讲解前端应用的容器化部署方案。",cover:"https://picsum.photos/800/400?random=7",category:"后端技术",tags:["Docker","Node.js","性能优化"],date:"2023-12-08",readTime:"11 分钟",content:`
## 为什么选择 Docker？

Docker 能够确保应用在任何环境中都能一致地运行，解决了"在我机器上能跑"的经典问题。

## 多阶段构建

使用多阶段构建可以显著减小镜像体积。在构建阶段安装所有依赖并编译代码，在运行阶段只复制必要的产物。

## Nginx 配置

使用 Nginx 作为静态文件服务器，配置 gzip 压缩、缓存策略和 SPA 路由支持。

## CI/CD 集成

将 Docker 构建集成到 CI/CD 流程中，实现代码提交后自动构建、测试和部署。

## 总结

容器化是现代前端工程化不可或缺的一环，值得每个前端开发者深入学习。
    `},{id:8,title:"开源项目实战：从零开发一个 Vue 组件库",summary:"分享开发一个企业级 Vue 3 组件库的完整过程，包括项目搭建、组件设计、文档生成、自动化测试和发布流程。",cover:"https://picsum.photos/800/400?random=8",category:"开源项目",tags:["Vue.js","TypeScript","设计模式"],date:"2023-12-01",readTime:"18 分钟",content:`
## 项目规划

开发一个组件库需要考虑很多方面：API 设计、主题定制、文档系统、测试覆盖、版本管理等。

## 项目搭建

使用 Vite + TypeScript 搭建开发环境，配置 Monorepo 管理多个包。

## 组件设计原则

- 遵循 Vue 3 的组合式 API 风格
- 提供完善的 TypeScript 类型定义
- 支持主题定制（CSS 变量）
- 支持国际化
- 完善的无障碍支持

## 文档系统

使用 VitePress 搭建文档站点，每个组件都配有详细的 API 文档和在线示例。

## 自动化测试

使用 Vitest 进行单元测试，使用 Cypress 进行 E2E 测试，确保组件质量。

## 总结

开源不仅是分享代码，更是分享思想和理念。希望这个项目能帮助到更多的开发者。
    `}];export{e as a,a as b,t as c,o as t};

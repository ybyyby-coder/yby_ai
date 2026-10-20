export const CATEGORIES = [
  { key: 'all', label: '全部', desc: '本站所有编程教程与架构实践' },
  { key: 'frontend', label: '前端工程', desc: 'Vue / 构建工具 / 工程规范' },
  { key: 'backend', label: '后端服务', desc: 'API 设计 / 认证与安全' },
  { key: 'arch', label: '架构设计', desc: '高并发 / 服务治理 / 容量规划' },
  { key: 'data', label: '数据存储', desc: 'MySQL / Redis / 消息队列' },
  { key: 'ops', label: '云原生运维', desc: 'Kubernetes / 可观测性' }
]

const list = [
  {
    id: 1, slug: 'vue3-composition-practice', category: 'frontend', level: '中级',
    title: 'Vue3 组合式 API 实战：从 Options API 平滑迁移',
    summary: '以博客文章列表页为例，拆解 setup、ref、computed 与自定义 Hook 的边界划分，给出可直接落地的迁移步骤。',
    author: '林墨白', date: '2024-05-18', readTime: 14, likes: 486, views: 12890,
    cover: 'https://picsum.photos/seed/vue3-composition/720/460',
    tags: ['Vue 3', '组合式 API', '重构'], featured: true,
    blocks: [
      { type: 'text', content: '组合式 API 最大的收益不是语法糖，而是「逻辑按关注点聚合」。Options API 里一个列表页的状态被拆到 data、computed、methods、watch 四处，跨文件跳转成本高；setup 让我们能把分页、筛选、请求三类状态分别封装成独立函数。' },
      { type: 'sub', content: '一、先划分状态边界，再写代码' },
      { type: 'text', content: '动手迁移前，先把页面状态按「是否会驱动渲染」「是否可被复用」做一次二维分类：可复用且驱动渲染的抽成 useXxx，仅本地 UI 状态保留在组件内。' },
      { type: 'code', lang: 'js', content: 'export function useArticleQuery(source) {\n  const keyword = ref("")\n  const category = ref("all")\n  const page = ref(1)\n  const list = computed(() => source.filter(match(category, keyword)))\n  const paged = computed(() => list.value.slice((page.value - 1) * 9, page.value * 9))\n  return { keyword, category, page, list, paged }\n}' },
      { type: 'sub', content: '二、响应式失焦的三类常见坑' },
      { type: 'list', items: ['解构 props 会丢失响应性，需要 toRefs 或 computed 中转', 'watchEffect 依赖收集容易引入意外订阅，优先显式 watch', '大量只读列表使用 shallowRef 可显著减少 Proxy 开销'] },
      { type: 'quote', content: '迁移不是把 Options 逐行搬到 setup，而是重新回答「这个页面有几个独立逻辑单元」。' }
    ]
  },
  {
    id: 2, slug: 'vite-build-optimization', category: 'frontend', level: '进阶',
    title: 'Vite 构建提速：把首屏产物压到 200KB 以内',
    summary: '从依赖预构建、代码分割、Tree Shaking 校验到 CDN 缓存策略，一次完整的构建优化实录与指标对比。',
    author: '周予安', date: '2024-06-02', readTime: 11, likes: 372, views: 9420,
    cover: 'https://picsum.photos/seed/vite-speed/720/460',
    tags: ['Vite', '性能优化', '构建'], featured: true,
    blocks: [
      { type: 'text', content: '优化前先建立基线。用可视化分析拿到产物占比后，发现首屏 62% 的体积来自未被拆分的编辑器组件与未做按需引入的图标库。' },
      { type: 'sub', content: '一、路由级分割 + 组件级懒加载' },
      { type: 'code', lang: 'js', content: 'const routes = [\n  { path: "/arch", component: () => import("./pages/ArchitecturePage.vue") },\n  { path: "/article/:id", component: () => import("./pages/ArticlePage.vue") }\n]' },
      { type: 'sub', content: '二、依赖预构建与缓存命中' },
      { type: 'text', content: '把体积大但变更频率低的依赖显式加入 optimizeDeps.include，可避免冷启动时的连锁重新预构建；生产侧通过 contenthash 让 CDN 长期缓存生效。' },
      { type: 'table', head: ['优化项', '优化前', '优化后'], rows: [['首屏 JS', '742 KB', '186 KB'], ['构建耗时', '96 s', '34 s'], ['LCP', '3.4 s', '1.6 s']] }
    ]
  },
  {
    id: 3, slug: 'api-gateway-design', category: 'backend', level: '中级',
    title: 'API 网关设计入门：统一入口背后的六项职责',
    summary: '以技术博客场景为例，讲清网关如何做路由转发、鉴权、限流、协议转换、日志埋点与灰度分流。',
    author: '陈叙', date: '2024-04-27', readTime: 16, likes: 528, views: 15360,
    cover: 'https://picsum.photos/seed/api-gateway/720/460',
    tags: ['网关', '鉴权', '限流'], featured: true,
    blocks: [
      { type: 'text', content: '很多团队把网关理解成「反向代理 + 一点鉴权」，但真正让它有价值的是把横切关注点集中收口：客户端只关心业务语义，非功能性策略由基础设施承担。' },
      { type: 'sub', content: '一、六项核心职责' },
      { type: 'list', items: ['路由与协议转换：HTTP 到 gRPC / WebSocket 的统一收口', '身份认证：JWT 校验、Token 刷新与设备指纹绑定', '流量治理：令牌桶限流、熔断降级与优先级队列', '可观测性：TraceId 注入、访问日志与指标上报', '安全控制：CORS、防重放、IP 黑白名单', '灰度能力：按用户标签或权重路由到不同服务版本'] },
      { type: 'code', lang: 'yaml', content: 'routes:\n  - path: /api/article/**\n    upstream: article-service\n    plugins: [auth, rateLimit]\n    rateLimit:\n      strategy: token-bucket\n      qps: 800\n  - path: /api/comment/**\n    upstream: comment-service\n    plugins: [auth, audit]' },
      { type: 'quote', content: '网关的复杂度应该来自业务需要，而不是自我实现。足够小的时候，一层反向代理就够用了。' }
    ]
  },
  {
    id: 4, slug: 'mysql-to-sharding', category: 'data', level: '进阶',
    title: 'MySQL 单表五千万行之后的拆分路线',
    summary: '从索引与慢查询治理开始，经历读写分离、冷热分离，最后才是分库分表——一条被验证过的演进顺序。',
    author: '苏见微', date: '2024-06-20', readTime: 18, likes: 611, views: 18720,
    cover: 'https://picsum.photos/seed/mysql-sharding/720/460',
    tags: ['MySQL', '分库分表', '容量规划'], featured: true,
    blocks: [
      { type: 'text', content: '文章表是博客系统最先撑不住的结构：内容字段大、写多读多、检索条件复杂。但拆表之前，请确认前面三步的红利已经吃干。' },
      { type: 'sub', content: '一、四步演进顺序' },
      { type: 'list', items: ['第一步：索引重构与字段裁剪，正文单独拆到扩展表', '第二步：读写分离，读流量下沉到只读副本并处理主从延迟', '第三步：冷热分层，一年前的文章归档到低成本存储', '第四步：按 article_id 哈希分片，用户维度用基因法冗余分片键'] },
      { type: 'code', lang: 'sql', content: 'CREATE TABLE article (\n  id BIGINT UNSIGNED PRIMARY KEY,\n  author_id BIGINT UNSIGNED NOT NULL,\n  title VARCHAR(200) NOT NULL,\n  status TINYINT NOT NULL DEFAULT 0,\n  INDEX idx_author_status (author_id, status, id)\n) ENGINE = InnoDB;' },
      { type: 'text', content: '分片键选择比中间件选型更重要。博客场景下按作者分片，能让「我的文章」列表始终单片命中，代价是详情页需要冗余一份按 id 的路由索引。' }
    ]
  },
  {
    id: 5, slug: 'comment-feed-mq', category: 'arch', level: '高级',
    title: '用消息队列重构评论与通知链路',
    summary: '评论写入如何不阻塞发布主流程，同时保证通知、风控、统计三条异步链路最终一致。',
    author: '陈叙', date: '2024-07-08', readTime: 15, likes: 402, views: 11080,
    cover: 'https://picsum.photos/seed/mq-comment/720/460',
    tags: ['消息队列', '最终一致', '异步任务'], featured: false,
    blocks: [
      { type: 'text', content: '一次评论提交，在同步实现里要串行完成落库、敏感词过滤、作者通知、热度统计四件事，P99 很容易冲到 1.2s。拆分之后主流程只做落库与投递。' },
      { type: 'sub', content: '一、本地消息表 + 补偿重投' },
      { type: 'list', items: ['落库与消息记录在同一事务内完成，避免消息丢失', '投递成功后回写状态，失败由补偿任务定时扫描重投', '消费端以 commentId 做幂等键，重复投递不会重复通知'] },
      { type: 'code', lang: 'java', content: '@KafkaListener(topics = "comment.created")\npublic void onComment(CommentEvent e) {\n    if (dedup.seen("comment", e.getCommentId())) return;\n    riskService.audit(e);\n    notifyService.pushAuthor(e.getArticleId(), e.getContent());\n    statService.incrCommentCount(e.getArticleId());\n}' },
      { type: 'table', head: ['链路', '改造前 P99', '改造后 P99'], rows: [['评论提交', '1.20 s', '96 ms'], ['通知触达', '同步阻塞', '异步 800 ms 内']] }
    ]
  },
  {
    id: 6, slug: 'cdn-render-static', category: 'arch', level: '高级',
    title: '把博客详情静态化：CDN 与增量渲染的取舍',
    summary: 'SSR、SSG、增量静态化三种方案在内容型站点上的真实运维成本对比，以及缓存失效的几种姿势。',
    author: '周予安', date: '2024-07-22', readTime: 13, likes: 356, views: 9860,
    cover: 'https://picsum.photos/seed/cdn-ssr/720/460',
    tags: ['CDN', 'SSR', '缓存'], featured: false,
    blocks: [
      { type: 'text', content: '内容型站点的读放大极为夸张：一篇文章被阅读一万次，编辑可能只有三次。既然变更稀疏，就不该每次请求都回源渲染。' },
      { type: 'sub', content: '一、缓存分层与失效' },
      { type: 'list', items: ['边缘节点缓存 HTML，浏览器缓存静态资源，源站只处理未命中', '文章发布走主动刷新而非等待 TTL 自然过期', '评论等动态内容通过客户端二次请求注入，避免污染静态缓存'] },
      { type: 'quote', content: '静态化的难点从来不是怎么生成，而是怎么保证用户看到的是最新版。' }
    ]
  },
  {
    id: 7, slug: 'k8s-zero-downtime', category: 'ops', level: '中级',
    title: 'Kubernetes 滚动发布零停机实践',
    summary: '就绪探针、preStop、优雅下线与连接排空，一次灰度发布踩坑复盘。',
    author: '苏见微', date: '2024-08-05', readTime: 10, likes: 288, views: 7420,
    cover: 'https://picsum.photos/seed/k8s-rollout/720/460',
    tags: ['Kubernetes', '发布', '可观测'], featured: false,
    blocks: [
      { type: 'text', content: '502 的根因几乎都指向同一个问题：Pod 被终止时上游的服务发现列表还没更新，请求依然被投递过来。' },
      { type: 'code', lang: 'yaml', content: 'spec:\n  template:\n    spec:\n      containers:\n        - name: article-service\n          lifecycle:\n            preStop:\n              exec:\n                command: ["sh", "-c", "sleep 8"]\n          readinessProbe:\n            httpGet:\n              path: /healthz\n              port: 8080' },
      { type: 'sub', content: '二、发布 checklist' },
      { type: 'list', items: ['preStop sleep 覆盖 endpoint 摘除传播时间', '应用层监听 SIGTERM 后停止接收新请求并排空连接池', 'maxUnavailable 设为 0，用 maxSurge 扩容换取可用性'] }
    ]
  },
  {
    id: 8, slug: 'redis-cache-consistency', category: 'data', level: '中级',
    title: 'Redis 缓存与数据库一致性该怎么做',
    summary: '旁路缓存、延迟双删、订阅 binlog 三种方案的适用边界与失败场景分析。',
    author: '林墨白', date: '2024-08-19', readTime: 12, likes: 445, views: 13240,
    cover: 'https://picsum.photos/seed/redis-cache/720/460',
    tags: ['Redis', '缓存', '一致性'], featured: false,
    blocks: [
      { type: 'text', content: '先接受一个结论：在没有任何额外约束的前提下，缓存与数据库做不到严格一致，只能把不一致窗口压缩到业务可接受的范围。' },
      { type: 'sub', content: '一、方案对比' },
      { type: 'table', head: ['方案', '复杂度', '不一致窗口', '适用场景'], rows: [['先更新库再删缓存', '低', '毫秒级', '多数读多写少'], ['延迟双删', '中', '毫秒级', '并发读写冲突明显'], ['订阅 binlog', '高', '秒级', '多缓存集群 / 异构存储']] },
      { type: 'code', lang: 'js', content: 'async function updateArticle(id, data) {\n  await db.article.update({ where: { id }, data })\n  await cache.del("article:" + id)\n  setTimeout(() => cache.del("article:" + id), 500)\n}' }
    ]
  },
  {
    id: 9, slug: 'lint-and-ci-gate', category: 'frontend', level: '初级',
    title: '前端工程规范：用流水线守住代码底线',
    summary: '规则集如何分级、增量检查怎么做、怎样避免规范沦为流水线红灯制造机。',
    author: '周予安', date: '2024-09-03', readTime: 8, likes: 198, views: 5360,
    cover: 'https://picsum.photos/seed/eslint-ci/720/460',
    tags: ['工程规范', 'CI', '协作'], featured: false,
    blocks: [
      { type: 'text', content: '规范的目的是降低协作摩擦，不是制造仪式感。把规则分成阻塞类和提示类，只有安全与正确性问题才允许让流水线失败。' },
      { type: 'list', items: ['阻塞类：未定义变量、疑似空指针、危险 API 调用', '提示类：命名风格、复杂度、可访问性建议', '增量检查：仅对本次改动的文件运行严格规则'] }
    ]
  },
  {
    id: 10, slug: 'ddd-bounded-context', category: 'arch', level: '高级',
    title: '领域驱动设计落地：博客系统的限界上下文划分',
    summary: '内容、用户、互动、搜索、通知五个上下文的边界识别与防腐层写法。',
    author: '陈叙', date: '2024-09-17', readTime: 20, likes: 523, views: 14180,
    cover: 'https://picsum.photos/seed/ddd-context/720/460',
    tags: ['DDD', '微服务', '建模'], featured: false,
    blocks: [
      { type: 'text', content: '判断上下文边界的经验法则：同一个词在两个团队口中含义不同，那里就存在边界。比如「文章」在内容侧指正文与版本，在搜索侧只是一份可检索的文档投影。' },
      { type: 'sub', content: '一、五个上下文' },
      { type: 'list', items: ['内容上下文：草稿、版本、发布状态机', '用户上下文：账号、身份、权限与个人设置', '互动上下文：评论、回复、点赞、举报', '搜索上下文：倒排索引与分词策略', '通知上下文：模板、渠道、触达策略'] },
      { type: 'quote', content: '服务拆分的正确答案不是一个表一个服务，而是一个上下文一个服务。' }
    ]
  },
  {
    id: 11, slug: 'observability-trace', category: 'ops', level: '中级',
    title: '可观测性起步：日志、指标、链路三件套',
    summary: '从一次线上超时排查出发，说明 TraceId 如何贯穿网关、服务与数据库。',
    author: '苏见微', date: '2024-10-09', readTime: 12, likes: 267, views: 8140,
    cover: 'https://picsum.photos/seed/trace-obs/720/460',
    tags: ['Trace', '监控', '告警'], featured: false,
    blocks: [
      { type: 'text', content: '三件套各自回答不同的问题：日志回答发生了什么，指标回答影响了多少请求，链路回答慢在哪一环。只上其中之一，排查都会卡在半路。' },
      { type: 'code', lang: 'js', content: 'app.use(async (ctx, next) => {\n  const traceId = ctx.get("X-Trace-Id") || genId()\n  ctx.set("X-Trace-Id", traceId)\n  ctx.state.traceId = traceId\n  logger.info({ traceId, path: ctx.path }, "request.in")\n  await next()\n})' },
      { type: 'list', items: ['网关生成 TraceId，所有下游日志必须携带该字段', '指标只看趋势，定位到具体请求要回到链路', '告警阈值按业务 SLO 设定，而不是机器负载'] }
    ]
  },
  {
    id: 12, slug: 'jwt-refresh-token', category: 'backend', level: '中级',
    title: 'JWT 与 Refresh Token 的安全实践',
    summary: '双令牌如何轮换、被盗后如何失效，以及为什么不要把权限塞进载荷。',
    author: '林墨白', date: '2024-10-24', readTime: 9, likes: 331, views: 10250,
    cover: 'https://picsum.photos/seed/jwt-security/720/460',
    tags: ['安全', '认证', '登录态'], featured: false,
    blocks: [
      { type: 'text', content: 'Access Token 的作用只是短期证明，有效期建议控制在 15 分钟以内；真正需要被严格控制的是 Refresh Token 的存储与轮换。' },
      { type: 'list', items: ['Refresh Token 存 HttpOnly + Secure Cookie，不暴露给页面脚本', '每次刷新即作废旧令牌，检测到重放立刻吊销整条令牌家族', '权限、角色等易变信息实时查服务端，不写入令牌载荷'] }
    ]
  }
]

export const ARTICLES = list

export function getArticle(id) {
  const num = Number(id)
  return list.find((item) => item.id === num || item.slug === id) || list[0]
}

export function relatedArticles(id, limit = 3) {
  const current = getArticle(id)
  const same = list.filter((i) => i.id !== current.id && i.category === current.category)
  const rest = list.filter((i) => i.id !== current.id && i.category !== current.category)
  return [...same, ...rest].slice(0, limit)
}

export const COMMENTS = {
  1: [
    { name: '阿泽', role: '前端工程师', date: '2024-05-20', likes: 42, content: '把状态按是否可复用分类这个思路很实用，我们组照着重构了三个后台页面，跨文件跳转明显少了。' },
    { name: 'Momo', role: '全栈开发', date: '2024-05-21', likes: 18, content: '想问下 shallowRef 用在列表上，如果条目内部字段会变，是不是还要手动触发更新？' },
    { name: '林墨白', role: '作者', date: '2024-05-21', likes: 35, content: '是的，shallowRef 只追踪引用变化。内部字段会变的话更适合直接返回新的数组引用。' }
  ],
  3: [
    { name: '半斤', role: '后端架构', date: '2024-04-29', likes: 61, content: '网关复杂度应来自业务需要这句建议贴在工位上，见过太多过度设计的网关了。' },
    { name: 'Kite', role: '运维', date: '2024-05-01', likes: 27, content: '补充一点：网关插件最好支持热更新，不然每次改限流阈值都要发版，压力很大。' }
  ],
  4: [
    { name: '老王师傅', role: 'DBA', date: '2024-06-22', likes: 48, content: '基因法那段讲得清楚，之前在「我的文章」查询上被跨片 JOIN 折磨了半年。' },
    { name: 'Echo', role: '后端开发', date: '2024-06-24', likes: 22, content: '正文拆扩展表确实香，但详情页会多一次查询，最好在同一层里合并返回。' }
  ],
  5: [
    { name: '青柠', role: '后端开发', date: '2024-07-10', likes: 31, content: '本地消息表比事务消息更容易落地，我们小团队直接选了这条路。' }
  ]
}

export const SERVICES = [
  { name: 'API 网关', desc: '统一入口、鉴权、限流与流量染色，隔离内外网络。', metric: '800 QPS', load: 82 },
  { name: '文章内容服务', desc: '草稿、版本、发布状态机与正文存储，读写分离。', metric: '320 QPS', load: 64 },
  { name: '评论互动服务', desc: '评论、回复、点赞与举报，写入走异步队列削峰。', metric: '210 QPS', load: 47 },
  { name: '用户中心服务', desc: '账号、订阅关系、权限与个人设置。', metric: '150 QPS', load: 38 },
  { name: '搜索服务', desc: '倒排索引与分词，接收内容服务发出的文档投影。', metric: '95 QPS', load: 29 },
  { name: '消息通知服务', desc: '站内信、邮件与回调触达，支持重试与去重。', metric: '60 QPS', load: 21 }
]

export const TECH_STACK = [
  { name: 'Vue 3 + Vite', field: '前端框架', note: '组合式 API、按需构建、极速冷启动' },
  { name: 'Node.js', field: 'BFF 层', note: '接口聚合、服务端渲染与静态化' },
  { name: 'Spring Cloud', field: '业务服务', note: '内容、评论、用户、搜索四大领域' },
  { name: 'MySQL', field: '主存储', note: '分库分表与冷热归档' },
  { name: 'Redis', field: '缓存', note: '文章详情、榜单与会话状态' },
  { name: 'Elasticsearch', field: '检索', note: '全文搜索与标签聚合' },
  { name: 'Kafka', field: '消息总线', note: '评论、通知、统计的异步链路' },
  { name: 'Kubernetes', field: '容器编排', note: '滚动发布与弹性伸缩' }
]

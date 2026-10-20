const cover = (seed) => `https://picsum.photos/seed/${seed}/900/560`

export const CATEGORIES = [
  { key: 'frontend', name: '前端工程', desc: '组件化、构建工具与性能优化' },
  { key: 'backend', name: '后端开发', desc: '服务治理、数据存储与并发模型' },
  { key: 'arch', name: '系统架构', desc: '分布式、缓存与高可用设计' },
  { key: 'data', name: '数据与算法', desc: '检索、消息与算法实践' },
  { key: 'devops', name: '云原生运维', desc: '容器、可观测性与交付流水线' }
]

export const catName = (key) => (CATEGORIES.find((c) => c.key === key) || {}).name || key

export const articles = [
  {
    id: 1,
    title: 'Vue3 组合式 API：从 setup 到自定义 Hook 的演进',
    summary: '响应式原语、逻辑复用与副作用管理，是组合式 API 的三块基石。用四个真实场景讲清如何把散落的逻辑收敛成可测试的函数。',
    category: 'frontend', tags: ['Vue3', '组合式API', '逻辑复用'], level: '中级',
    author: '林可', date: '2024-03-18', readTime: 12, likes: 842, views: 15400, cover: cover('vue3-composition'),
    blocks: [
      { type: 'text', content: '选项式 API 的问题不在于写法，而在于「同一个功能的代码被拆到四个地方」。当组件膨胀到几百行，维护者需要在 data、computed、methods 与 watch 之间反复横跳，认知成本随之指数级上升。' },
      { type: 'sub', content: '一、响应式原语的选择' },
      { type: 'text', content: 'ref 与 reactive 的差异常被简化为「类型不同」，实际关键是解构会丢失响应性。对需要整体传递的对象状态用 reactive，对需要解构、作为返回值或基本类型的用 ref，是最稳妥的约定。' },
      { type: 'code', content: "import { ref, computed, watchEffect } from 'vue'\n\nexport function usePagination(total, size = 10) {\n  const page = ref(1)\n  const pages = computed(() => Math.max(1, Math.ceil(total.value / size)))\n\n  watchEffect(() => {\n    if (page.value > pages.value) page.value = pages.value\n  })\n\n  return { page, pages, size }\n}" },
      { type: 'sub', content: '二、自定义 Hook 的三个约定' },
      { type: 'list', items: ['入参优先接受 ref，避免传入普通值造成状态失联', '返回值是一个扁平对象，命名与响应式语义保持一致', '副作用必须在 onUnmounted 中可逆，防止内存泄漏'] },
      { type: 'quote', content: '判断一个 Hook 是否合格，只需看它能否在不依赖组件实例的情况下被单独测试。' },
      { type: 'table', head: ['方案', '复用粒度', '调试成本', '适用场景'], rows: [['mixin', '低', '高', '历史项目'], ['组合式 Hook', '高', '低', '新项目首选'], ['Pinia', '全局', '中', '跨页面共享'], ['插件', '中', '中', '全局指令与注入']] }
    ]
  },
  {
    id: 2,
    title: 'Vite 构建优化实践：把首屏体积压到 180KB',
    summary: '依赖预构建、manualChunks 分包、资源压缩与预加载，四步把中后台项目首屏 JS 从 1.2MB 降到 180KB 的完整记录。',
    category: 'frontend', tags: ['Vite', '性能优化', '构建'], level: '进阶',
    author: '周叙', date: '2024-03-02', readTime: 15, likes: 1230, views: 23800, cover: cover('vite-build'),
    blocks: [
      { type: 'text', content: '首屏体积不是玄学，它可以拆解成三个可测量的部分：框架运行时、第三方依赖和业务代码。优化顺序应当是「先量、再拆、后砍」。' },
      { type: 'code', content: 'npx vite-bundle-visualizer\n# 输出 treemap，按 gzip 后体积排序，前 10 个模块通常占总量 80%' },
      { type: 'sub', content: '分包策略' },
      { type: 'list', items: ['框架层（vue、vue-router）单独 chunk，长期缓存命中率高', '图表、富文本等重组件按路由懒加载，不进入 vendor', '公共 UI 组件保留在 vendor，避免重复打包'] },
      { type: 'quote', content: '分包的收益不来自「拆得多」，而来自「缓存得久」。一个稳定的 vendor-core 比五个小 chunk 更有价值。' }
    ]
  },
  {
    id: 3,
    title: '分布式缓存一致性：从 Cache Aside 到延迟双删',
    summary: '缓存与数据库的一致性问题没有银弹。对比六种常见策略的失败场景，并给出基于延迟双删与 binlog 订阅的落地方案。',
    category: 'arch', tags: ['缓存', '一致性', '分布式'], level: '高级',
    author: '陈屿', date: '2024-02-24', readTime: 18, likes: 1610, views: 31200, cover: cover('cache-consistency'),
    blocks: [
      { type: 'text', content: '在并发写入下，任何「先更新数据库再操作缓存」的顺序都存在窗口期。理解一致性问题的第一步，是接受「无法绝对一致，只能收敛到最终一致」。' },
      { type: 'sub', content: '一、四种策略的失败窗口' },
      { type: 'table', head: ['策略', '写流程', '主要风险', '一致性等级'], rows: [['Cache Aside', '先更 DB 再删缓存', '删失败导致脏读', '弱'], ['Read/Write Through', '缓存层代理写 DB', '依赖缓存可用性', '中'], ['Write Behind', '异步刷盘', '进程崩溃丢数据', '低'], ['延迟双删', '删-写-延迟再删', '延迟时间难标定', '较高']] },
      { type: 'code', content: 'public void updateItem(Item item) {\n    redis.del(key(item.getId()));\n    itemMapper.update(item);\n    scheduler.schedule(\n        () -> redis.del(key(item.getId())),\n        Math.max(readReplicaLag, 500), TimeUnit.MILLISECONDS);\n}' },
      { type: 'sub', content: '二、更工程化的做法：订阅 binlog' },
      { type: 'text', content: '把缓存失效从业务代码剥离，由 Canal 监听 binlog 后投递消息队列，消费端统一执行删除。写路径只剩一次数据库操作，代价是引入新的运维组件。' },
      { type: 'quote', content: '缓存架构的复杂度最终都会转移到监控上——没有失效延迟与命中率指标，任何一致性方案都是盲目的。' }
    ]
  },
  {
    id: 4,
    title: '微服务拆分实战：从单体到领域驱动的过渡期设计',
    summary: '拆分不是为了时髦，而是为了让团队并行交付。记录一个订单系统拆为五个服务的全过程，包括踩过的分布式事务坑。',
    category: 'arch', tags: ['微服务', 'DDD', '拆分'], level: '高级',
    author: '陈屿', date: '2024-01-30', readTime: 20, likes: 980, views: 19600, cover: cover('microservice-split'),
    blocks: [
      { type: 'text', content: '拆分的正确驱动力是「发布节奏冲突」与「扩容需求不一致」。如果两个模块总是同时改、同时出问题，它们本就该待在一起。' },
      { type: 'list', items: ['用事件风暴列出所有业务事件，按聚合根聚类', '统计耦合度：跨模块调用超过 15 次的边界必须重画', '数据归属优先：一张表只能有一个服务拥有写权限'] },
      { type: 'table', head: ['服务', '拥有的数据', '对外契约', '峰值 QPS'], rows: [['订单服务', 'order / order_item', 'gRPC + 事件', '3200'], ['库存服务', 'stock / stock_lock', 'REST', '5100'], ['支付服务', 'payment / refund', '异步回调', '900'], ['用户服务', 'user / address', 'REST', '4000']] },
      { type: 'sub', content: '过渡期的双写与影子读' },
      { type: 'text', content: '拆分不能一刀切。我们的做法是老单体继续写、新服务异步追平，用影子读对比两边结果，差异率连续一周低于 0.01% 才切换流量入口。' },
      { type: 'quote', content: '分布式事务不是被解决的，而是被设计掉的。能用事件最终一致的场景，就不要引入 Saga 的复杂度。' }
    ]
  },
  {
    id: 5,
    title: 'Go 并发模型：从 goroutine 泄漏到上下文传播',
    summary: 'goroutine 便宜不等于可以乱开。通过 pprof 定位泄漏、用 errgroup 收敛错误、用 context 统一取消信号。',
    category: 'backend', tags: ['Go', '并发', '性能'], level: '进阶',
    author: '苏航', date: '2024-02-11', readTime: 14, likes: 1345, views: 26700, cover: cover('go-concurrency'),
    blocks: [
      { type: 'text', content: '一次内存告警排查下来，问题只是少了一行 defer 的 cancel。Go 的并发很简单，简单到容易忽略「每个 goroutine 都是一笔负债」。' },
      { type: 'sub', content: '泄漏的三种典型形态' },
      { type: 'list', items: ['向无人消费的 channel 写入，goroutine 永久阻塞', 'range 一个永不关闭的 channel', '等待外部响应但没有超时，context 未传递'] },
      { type: 'code', content: "func fetchAll(ctx context.Context, urls []string) ([]Result, error) {\n    g, ctx := errgroup.WithContext(ctx)\n    out := make([]Result, len(urls))\n    for i, u := range urls {\n        i, u := i, u\n        g.Go(func() error {\n            r, err := httpGet(ctx, u)\n            if err != nil { return err }\n            out[i] = r\n            return nil\n        })\n    }\n    return out, g.Wait()\n}" },
      { type: 'quote', content: 'runtime.NumGoroutine() 应该出现在监控面板上，并设置合理的告警阈值。' }
    ]
  },
  {
    id: 6,
    title: 'MySQL 索引失效的 11 种场景与执行计划解读',
    summary: 'EXPLAIN 各字段含义、最左前缀为什么失效、覆盖索引如何省掉一次回表，用真实慢查询逐个演示。',
    category: 'backend', tags: ['MySQL', '索引', 'SQL优化'], level: '中级',
    author: '苏航', date: '2024-01-16', readTime: 16, likes: 1520, views: 28900, cover: cover('mysql-index'),
    blocks: [
      { type: 'text', content: '索引失效很少因为一条魔法 SQL，绝大多数情况是隐式类型转换和函数包裹导致的。' },
      { type: 'list', items: ['对索引列使用函数：DATE(created_at) = ...', '隐式类型转换：varchar 列与数字比较', '前导模糊匹配：LIKE 百分号开头', '违反最左前缀：跳过联合索引第一列', 'OR 连接了非索引列，数据选择性过低被优化器放弃'] },
      { type: 'code', content: "EXPLAIN FORMAT=JSON\nSELECT o.id, o.amount FROM orders o\nWHERE o.user_id = 1024 AND o.status = 'PAID'\n  AND o.created_at >= '2024-01-01'\nORDER BY o.created_at DESC LIMIT 20;\n-- 建议索引：(user_id, status, created_at)" },
      { type: 'table', head: ['type', '含义', '量级', '是否需要优化'], rows: [['const / eq_ref', '主键或唯一索引命中', '行', '否'], ['ref', '非唯一等值', '十/百', '否'], ['range', '范围扫描', '百/千', '视情况'], ['index', '全索引扫描', '万', '是'], ['ALL', '全表扫描', '十万+', '必须']] }
    ]
  },
  {
    id: 7,
    title: 'Kubernetes 滚动更新与优雅下线：一次线上抖动复盘',
    summary: 'readiness、preStop、TerminationGracePeriod 三者配置不当，会造成发布期间 3% 的请求返回 502。',
    category: 'devops', tags: ['K8s', '发布', '可观测'], level: '进阶',
    author: '何汀', date: '2024-02-06', readTime: 13, likes: 760, views: 14300, cover: cover('k8s-rollout'),
    blocks: [
      { type: 'text', content: '发布窗口内的 502 通常不是应用崩溃，而是「Pod 已从 Service 摘除但连接未排空」与「Endpoint 更新晚于容器终止信号」之间的时间差。' },
      { type: 'list', items: ['应用监听 SIGTERM，停止接收新请求并等待存量请求处理完', 'preStop 中 sleep 5s，给 kube-proxy 同步转发规则的时间', 'TerminationGracePeriodSeconds 大于最长请求耗时', 'readinessProbe 使用独立的 /ready 接口反映依赖健康度'] },
      { type: 'code', content: "lifecycle:\n  preStop:\n    exec:\n      command: [\"sleep\", \"5\"]\nreadinessProbe:\n  httpGet:\n    path: /ready\n    port: 8080\nterminationGracePeriodSeconds: 45" },
      { type: 'quote', content: '优雅下线本质是并发问题：容器终止、Endpoint 摘除、上游连接关闭，这三条链路必须假设为任意顺序。' }
    ]
  },
  {
    id: 8,
    title: 'TypeScript 类型体操入门：用条件类型写安全的 API',
    summary: '不必追求晦涩，映射类型与条件类型足够让接口返回值在编译期就对得上号。',
    category: 'frontend', tags: ['TypeScript', '类型', 'API'], level: '中级',
    author: '林可', date: '2023-12-28', readTime: 11, likes: 1180, views: 22100, cover: cover('ts-types'),
    blocks: [
      { type: 'text', content: '类型体操的价值不是炫技，而是把接口文档变成编译器可验证的约束，让「改字段」这件事不再靠人肉搜索。' },
      { type: 'code', content: "type ApiOf<S extends Record<string, any>> = {\n  [K in keyof S]: S[K] extends (...args: any[]) => Promise<infer R>\n    ? (params?: R) => Promise<{ data: R | null; error?: string }>\n    : never\n}" },
      { type: 'list', items: ['infer 提取返回值类型，避免手写两份定义', 'satisfies 校验对象形状同时保留窄类型', '用 as const 让字符串字面量参与联合推导'] },
      { type: 'quote', content: '如果一个类型定义需要注释才能读懂，那它应该被拆成两个更小的类型别名。' }
    ]
  },
  {
    id: 9,
    title: '消息队列削峰的边界：什么时候 Kafka 反而更糟',
    summary: '异步化能扛住流量，却会牺牲实时性与一致性。三个真实反例说明「不该用 MQ」的场景。',
    category: 'data', tags: ['Kafka', '消息', '架构取舍'], level: '高级',
    author: '陈屿', date: '2024-01-08', readTime: 15, likes: 690, views: 13800, cover: cover('kafka-peak'),
    blocks: [
      { type: 'text', content: '把所有写操作都塞进消息队列是一种偷懒。引入 MQ 意味着你要额外回答三个问题：重复消费怎么办、顺序丢了怎么办、积压了怎么办。' },
      { type: 'list', items: ['强实时反馈：库存扣减、支付结果需要立即返回', '复杂条件查询：用户需要读到刚写入的数据', '短流程小事务：链路本就 20ms，异步反而增加端到端延迟'] },
      { type: 'table', head: ['指标', '同步写', 'MQ 异步写', '备注'], rows: [['P99 延迟', '45ms', '30ms + 消费延迟', '取决于消费者能力'], ['吞吐上限', '受 DB 连接数限制', '受分区数限制', '可水平扩展'], ['失败影响', '请求直接失败', '可能静默丢消息', '需重试与死信'], ['一致性', '强一致', '最终一致', '需幂等设计']] },
      { type: 'quote', content: '异步化的真正成本不在架构，而在排障：一次线上问题需要横跨生产者、Broker、消费者三段链路定位。' }
    ]
  },
  {
    id: 10,
    title: '前端可观测性：把报错率从 2.4% 降到 0.3% 的三十天',
    summary: '采集什么、上报多少、如何在不影响体验的前提下拿到有价值的堆栈与用户行为路径。',
    category: 'frontend', tags: ['监控', '错误', '体验'], level: '中级',
    author: '周叙', date: '2023-12-14', readTime: 12, likes: 940, views: 17500, cover: cover('fe-observability'),
    blocks: [
      { type: 'text', content: '没有 source map 的前端报错日志只是噪声。整个可观测性的起点，是把压缩后的堆栈还原成可读位置。' },
      { type: 'list', items: ['JS 异常与 Promise 拒绝，附带最近 20 条用户操作', '资源加载失败：CDN、图片与第三方脚本', '接口错误：区分网络错误与业务错误码', 'Web Vitals：LCP / INP / CLS 按路由维度聚合'] },
      { type: 'code', content: "window.addEventListener('unhandledrejection', (e) => {\n  const hash = simpleHash(String(e.reason?.stack))\n  if (quota.consume(hash)) return  // 同类错误限流\n  send({ type: 'rejection', stack: e.reason?.stack, actions: recentActions() })\n})" },
      { type: 'quote', content: '上报要限流：一个死循环触发的错误能在五分钟内吃掉你整天的采集预算。' }
    ]
  },
  {
    id: 11,
    title: 'ES 倒排索引与向量检索：混合召回的工程实现',
    summary: '关键词精确匹配 + 语义向量召回，用 RRF 融合排序，兼顾准确性与覆盖率。',
    category: 'data', tags: ['Elasticsearch', '检索', '向量'], level: '高级',
    author: '何汀', date: '2024-02-19', readTime: 17, likes: 1100, views: 20400, cover: cover('es-hybrid'),
    blocks: [
      { type: 'text', content: '纯 BM25 会在同义词与错别字上失手，纯向量又容易丢失精确匹配。混合召回不是两个结果的简单相加，排序融合才是难点。' },
      { type: 'code', content: "def rrf(lists, k=60):\n    score = {}\n    for rank, doc_list in enumerate(lists):\n        for pos, doc_id in enumerate(doc_list):\n            score[doc_id] = score.get(doc_id, 0) + 1 / (k + pos + 1)\n    return sorted(score.items(), key=lambda x: -x[1])" },
      { type: 'table', head: ['召回方式', '优势', '劣势', '权重建议'], rows: [['BM25', '精确匹配、可解释', '语义鸿沟', '0.5'], ['向量 ANN', '语义泛化', '专业词表现差', '0.35'], ['同义词扩展', '覆盖别名', '词表维护成本', '0.15']] }
    ]
  },
  {
    id: 12,
    title: 'Rust 生命周期入门：借用检查器到底在保护什么',
    summary: '把生命周期看作「作用域的命名」而不是语法怪物，从三个编译器报错开始理解所有权模型。',
    category: 'backend', tags: ['Rust', '所有权', '生命周期'], level: '进阶',
    author: '苏航', date: '2023-11-27', readTime: 13, likes: 870, views: 16200, cover: cover('rust-lifetime'),
    blocks: [
      { type: 'text', content: '生命周期标注不会改变任何变量的存活时间，它只是把「谁比谁活得久」这件事写给编译器看，让它在编译期做一次逻辑校验。' },
      { type: 'code', content: 'fn longest<' + "'" + 'a>(x: &' + "'" + 'a str, y: &' + "'" + 'a str) -> &' + "'" + 'a str {\n    if x.len() > y.len() { x } else { y }\n}' },
      { type: 'sub', content: '三条实用规则' },
      { type: 'list', items: ['返回值引用必须来自参数之一，否则直接返回所有权', '结构体持有引用时，生命周期标注是整体存活时间的下界', '优先用 clone 换取可读性，证明性能瓶颈之后再优化'] },
      { type: 'quote', content: '如果一段代码必须靠 unsafe 才能通过借用检查，多半是设计问题，而不是语法问题。' }
    ]
  }
]

export const getArticle = (id) => articles.find((a) => a.id === Number(id))

export const relatedArticles = (article, limit = 3) =>
  articles
    .filter((a) => a.id !== article.id)
    .sort(
      (a, b) =>
        (b.category === article.category) - (a.category === article.category) || b.likes - a.likes
    )
    .slice(0, limit)

export const AUTHORS = [
  { name: '林可', role: '前端负责人', focus: '组件体系 / 类型工程', avatar: 'https://picsum.photos/seed/author-linke/200/200', articles: 42 },
  { name: '陈屿', role: '架构师', focus: '分布式 / 数据一致性', avatar: 'https://picsum.photos/seed/author-chenyu/200/200', articles: 56 },
  { name: '苏航', role: '后端工程师', focus: 'Go / 数据库性能', avatar: 'https://picsum.photos/seed/author-suhang/200/200', articles: 38 },
  { name: '何汀', role: 'SRE', focus: 'K8s / 可观测性', avatar: 'https://picsum.photos/seed/author-heting/200/200', articles: 29 },
  { name: '周叙', role: '工程效能', focus: '构建 / 监控', avatar: 'https://picsum.photos/seed/author-zhouxu/200/200', articles: 33 }
]

export const STATS = [
  { label: '原创教程', value: '480+', suffix: '篇' },
  { label: '架构案例图', value: '1260', suffix: '张' },
  { label: '周活跃读者', value: '58k', suffix: '人' },
  { label: '技术专题', value: '32', suffix: '个' }
]

export const ROADMAPS = [
  { title: '前端工程化路线', desc: '从模块打包到 CI 交付的完整链路', steps: ['ESM 与模块规范', 'Vite 原理与插件', '构建产物优化', '灰度发布与监控'], hours: '约 32 小时', color: '#2563eb' },
  { title: '高并发后端路线', desc: '扛住流量洪峰需要的五层能力', steps: ['线程与协程模型', '连接池与超时', '缓存与限流', '消息异步化', '容量压测'], hours: '约 46 小时', color: '#06b6d4' },
  { title: '架构设计路线', desc: '以取舍为核心的系统思维训练', steps: ['领域建模', '一致性模型', '服务边界划分', '容灾与降级'], hours: '约 54 小时', color: '#7c3aed' }
]

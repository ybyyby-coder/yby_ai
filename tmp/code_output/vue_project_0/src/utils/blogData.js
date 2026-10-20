import LOGO_IMG from '@/assets/logo.svg'
import ARCH_IMG from '@/assets/architecture.svg'

const cover = (seed) => `https://picsum.photos/seed/${seed}/900/560`
export { LOGO_IMG, ARCH_IMG, cover }

export const NAV_LINKS = [
  { path: '/', label: '首页' },
  { path: '/tutorials', label: '编程教程' },
  { path: '/architecture', label: '系统架构' },
  { path: '/author', label: '创作者中心' },
  { path: '/about', label: '关于我们' }
]

export const STATS = [
  { value: '1,280+', label: '原创技术文章' },
  { value: '96', label: '体系化专栏' },
  { value: '42万', label: '月度读者' },
  { value: '4.9', label: '读者满意度' }
]

export const CATEGORIES = [
  { key: 'frontend', name: '前端工程', color: 'teal', count: 328, desc: 'Vue / React / 构建工具 / 性能优化' },
  { key: 'backend', name: '后端开发', color: 'amber', count: 296, desc: 'Java / Go / Node / 微服务治理' },
  { key: 'arch', name: '系统架构', color: 'violet', count: 214, desc: '高并发、分布式、领域建模' },
  { key: 'data', name: '数据与云原生', color: 'teal', count: 187, desc: 'K8s / 数据仓库 / 消息中间件' },
  { key: 'algo', name: '算法与基础', color: 'amber', count: 155, desc: '数据结构、操作系统、网络' },
  { key: 'quality', name: '稳定性与质量', color: 'violet', count: 120, desc: '测试、可观测性、容量治理' }
]

export const TUTORIALS = [
  {
    id: 't01',
    title: 'Vue3 组合式 API 从入门到实战：ref、reactive 与生命周期',
    category: '前端工程',
    level: '入门',
    minutes: 18,
    author: '林亦舟',
    date: '2024-06-18',
    students: 12840,
    rating: 4.9,
    tags: ['Vue3', 'Composition API'],
    summary: '用一个真实的购物车需求串起 setup 语法糖、响应式原语与组件拆分时机，带你写出第一份可维护的组合式代码。',
    cover: cover('vue3-composition')
  },
  {
    id: 't02',
    title: 'Vite 工程化实战：多环境配置、分包与部署优化',
    category: '前端工程',
    level: '进阶',
    minutes: 24,
    author: '陈牧野',
    date: '2024-06-12',
    students: 9320,
    rating: 4.8,
    tags: ['Vite', '工程化'],
    summary: '从 base 路径到 manualChunks，把构建产物体积压下去 42%，并解决 hash 路由在子路径部署下的白屏问题。',
    cover: cover('vite-build')
  },
  {
    id: 't03',
    title: 'Spring Boot 3 + MyBatis 实战：从连接池参数到慢 SQL 治理',
    category: '后端开发',
    level: '进阶',
    minutes: 32,
    author: '苏晓禾',
    date: '2024-06-05',
    students: 8110,
    rating: 4.7,
    tags: ['Spring Boot', 'MySQL'],
    summary: '以订单查询接口为样本，演示如何用 HikariCP 参数、索引设计与执行计划分析，把 P99 从 1.8s 降到 210ms。',
    cover: cover('springboot-mysql')
  },
  {
    id: 't04',
    title: 'Go 并发编程：goroutine 泄漏排查与 context 的正确用法',
    category: '后端开发',
    level: '高级',
    minutes: 26,
    author: '郑观澜',
    date: '2024-05-28',
    students: 6480,
    rating: 4.9,
    tags: ['Go', '并发'],
    summary: '三个线上真实案例复盘：忘记关闭 channel、遗漏 context 取消、errgroup 误用，附完整 pprof 火焰图分析过程。',
    cover: cover('go-concurrency')
  },
  {
    id: 't05',
    title: 'Kubernetes 入门到排障：一次 Pod 反复重启的完整定位',
    category: '数据与云原生',
    level: '进阶',
    minutes: 21,
    author: '何砚清',
    date: '2024-05-20',
    students: 7250,
    rating: 4.8,
    tags: ['K8s', '运维'],
    summary: '从 events、探针配置到 OOMKilled，梳理一条清晰的排障链路，并给出资源配额与 HPA 的推荐实践。',
    cover: cover('k8s-pod')
  },
  {
    id: 't06',
    title: '手写一个 LRU 缓存：从 LeetCode 146 到 Redis 淘汰策略',
    category: '算法与基础',
    level: '入门',
    minutes: 15,
    author: '顾明轩',
    date: '2024-05-14',
    students: 11020,
    rating: 4.9,
    tags: ['算法', 'Redis'],
    summary: '用双向链表 + 哈希表实现 O(1) 读写，再对比 Redis 近似 LRU 的采样设计，理解工程与理论的取舍。',
    cover: cover('lru-cache')
  }
]

export const ARTICLES = [
  {
    id: 'a01',
    title: '高并发电商系统拆解：从秒杀流量削峰到最终一致性',
    category: '系统架构',
    feature: true,
    minutes: 28,
    author: '苏晓禾',
    date: '2024-06-20',
    views: 48210,
    likes: 3126,
    tags: ['高并发', '秒杀', 'MQ'],
    summary: '一次大促背后至少藏着七层流量削减。本文把网关限流、本地缓存、Redis 预扣、MQ 异步下单到对账补偿逐层拆开讲。',
    cover: cover('ecommerce-arch')
  },
  {
    id: 'a02',
    title: '微服务拆分避坑指南：领域边界比技术栈更重要',
    category: '系统架构',
    feature: true,
    minutes: 22,
    author: '郑观澜',
    date: '2024-06-16',
    views: 33840,
    likes: 2418,
    tags: ['DDD', '微服务'],
    summary: '把单体拆成十几个服务不难，难的是三年后还能说清每个服务的边界。从限界上下文出发谈服务粒度与数据归属。',
    cover: cover('microservice-ddd')
  },
  {
    id: 'a03',
    title: '分布式事务的四种解法：2PC、TCC、SAGA 与本地消息表',
    category: '系统架构',
    feature: false,
    minutes: 25,
    author: '陈牧野',
    date: '2024-06-11',
    views: 27560,
    likes: 1982,
    tags: ['事务', '一致性'],
    summary: '没有银弹。按业务容忍度、性能要求与实现成本三个维度，对比四种主流方案的适用场景与失败模式。',
    cover: cover('distributed-tx')
  },
  {
    id: 'a04',
    title: '可观测性落地：TraceID 如何贯穿网关、服务与消息队列',
    category: '稳定性专栏',
    feature: false,
    minutes: 19,
    author: '何砚清',
    date: '2024-06-07',
    views: 21030,
    likes: 1644,
    tags: ['SkyWalking', '链路追踪'],
    summary: '跨线程、跨进程、跨消息队列的上下文传递是最容易出错的环节，本文给出可直接复用的 Java 与 Go 实现。',
    cover: cover('observability')
  },
  {
    id: 'a05',
    title: '数据库读写分离的隐性坑：主从延迟导致的脏读',
    category: '数据架构',
    feature: false,
    minutes: 16,
    author: '林亦舟',
    date: '2024-06-02',
    views: 19870,
    likes: 1420,
    tags: ['MySQL', '读写分离'],
    summary: '写完立刻读，为什么会读到旧数据？拆解 Binlog 复制链路，并总结强制走主库、会话一致性三种工程做法。',
    cover: cover('mysql-replica')
  },
  {
    id: 'a06',
    title: '缓存一致性方案选型：旁路、双写与订阅 Binlog 的对比',
    category: '数据架构',
    feature: false,
    minutes: 21,
    author: '顾明轩',
    date: '2024-05-27',
    views: 24500,
    likes: 1830,
    tags: ['Redis', 'Canal'],
    summary: '延迟双删到底靠不靠谱？结合真实压测数据给出不同一致性要求下的推荐组合与兜底策略。',
    cover: cover('cache-consistency')
  }
]

export const ROADMAP = [
  { stage: '第一阶段', weeks: '第 1-4 周', theme: '语言与工具链', items: ['TypeScript 基础与类型体操入门', 'Vue3 组合式 API 与响应式原理', 'Vite 工程化与调试技巧'] },
  { stage: '第二阶段', weeks: '第 5-9 周', theme: '服务端与数据', items: ['Node/Go 服务开发与接口设计', 'MySQL 索引、事务与慢查询优化', 'Redis 数据结构与缓存策略'] },
  { stage: '第三阶段', weeks: '第 10-14 周', theme: '分布式与云原生', items: ['消息队列与分布式事务', 'Kubernetes 部署与弹性伸缩', '服务治理、熔断与限流'] },
  { stage: '第四阶段', weeks: '第 15-18 周', theme: '架构与工程视野', items: ['领域驱动设计与服务拆分', '高并发系统设计与容量评估', '可观测性与稳定性建设'] }
]

export const AUTHORS = [
  { name: '苏晓禾', role: '电商架构负责人', avatar: 'https://picsum.photos/seed/author-su/200/200', articles: 86, fans: 42800, tags: ['高并发', 'DDD'] },
  { name: '郑观澜', role: 'Go 基础架构师', avatar: 'https://picsum.photos/seed/author-zheng/200/200', articles: 74, fans: 36100, tags: ['Go', '微服务'] },
  { name: '林亦舟', role: '前端技术专家', avatar: 'https://picsum.photos/seed/author-lin/200/200', articles: 102, fans: 51200, tags: ['Vue3', '性能优化'] },
  { name: '何砚清', role: 'SRE 团队负责人', avatar: 'https://picsum.photos/seed/author-he/200/200', articles: 58, fans: 28400, tags: ['K8s', '可观测'] }
]

export const STEPS = [
  { title: '注册与实名认证', desc: '填写基础资料，绑定手机号，完成作者认证后即可进入创作后台。', days: '约 5 分钟' },
  { title: '选题与大纲提交', desc: '从选题池认领方向，或自主提交大纲，编辑团队会在一个工作日内反馈。', days: '1 个工作日' },
  { title: '撰写与初审', desc: '支持 Markdown 与代码片段，编辑从准确性、可读性、结构三方面给出批注。', days: '3-7 天' },
  { title: '发布与推荐', desc: '通过后进入首页推荐队列，按读者行为做二次分发，并生成阅读数据看板。', days: '持续' },
  { title: '收益与结算', desc: '阅读激励、专栏订阅分成与企业委托三档收益，按月结算并附明细账单。', days: '每月 10 日' }
]

export const EARNINGS = [
  { name: '流量激励', base: '¥30 / 千字', note: '按有效阅读时长折算，原创首发额外加成 20%' },
  { name: '专栏订阅', base: '分成 70%', note: '付费专栏收益作者拿七成，平台承担分发成本' },
  { name: '企业委托', base: '¥800 - ¥3000 / 篇', note: '由技术出版社或企业方发起的定向约稿' },
  { name: '签约作者', base: '年度补贴', note: '年更 24 篇以上可升级为签约作者，享额外权益' }
]

export const FAQS = [
  { q: '没有技术写作经验可以投稿吗？', a: '可以。我们会指派一位编辑进行一对一辅导，从选题、结构到代码示例逐段打磨，前两篇通常修改 3-5 轮。' },
  { q: '文章允许使用 AI 辅助写作吗？', a: '允许使用 AI 做资料整理与润色，但核心观点、代码验证与踩坑复盘必须来自真实实践。发布时需在文末声明辅助范围。' },
  { q: '如何保证代码示例可复现？', a: '提交时请附上依赖版本与最小复现仓库链接。编辑会在干净环境中运行一次，无法复现的示例会被要求补充说明。' },
  { q: '被拒绝的稿件还能再投吗？', a: '当然。编辑会给出具体的修改建议，按建议重写后重新提交，通过率会明显提升；同一选题保留 30 天认领优先级。' },
  { q: '稿费什么时候发放？', a: '每月 10 日结算上一个自然月的收益，扣除相应税费后统一发放至绑定账户，账单明细可在创作后台导出。' }
]

export const ARTICLES_FULL = [...ARTICLES, ...TUTORIALS.map((t) => ({
  id: t.id,
  title: t.title,
  category: t.category,
  feature: false,
  minutes: t.minutes,
  author: t.author,
  date: t.date,
  views: t.students * 2,
  likes: Math.round(t.students * 0.12),
  tags: t.tags,
  summary: t.summary,
  cover: t.cover
}))]

export function findPost(id) {
  const tutorial = TUTORIALS.find((t) => t.id === id)
  const article = ARTICLES.find((a) => a.id === id)
  return tutorial || article || null
}

export function articleBody(post) {
  return [
    {
      h: '一、问题背景',
      p: `${post.summary} 在我们近期参与的四个项目里，几乎每一支团队都踩过同一类坑：方案设计阶段讨论得很充分，但缺少一份可以持续演进的书面架构说明，等到人员轮换后，当初的取舍理由就彻底丢失了。`,
      code: null
    },
    {
      h: '二、核心设计与拆解',
      p: '我们把整体链路拆成接入层、应用层、数据层与治理层四段。接入层负责认证、限流与协议转换；应用层按业务域纵向切分，避免跨域事务；数据层用缓存与消息队列做读写解耦；治理层补齐指标、日志与链路追踪。',
      code: `# 关键指标基线（压测环境 32C64G × 6）\nqps_peak        : 42,000\np99_latency_ms  : 180\nerror_rate      : 0.03%\ncache_hit_ratio : 94.6%`
    },
    {
      h: '三、落地中的三个关键取舍',
      p: '第一，我们放弃了强一致，选择最终一致加对账补偿，换来核心链路 3 倍的吞吐提升。第二，服务粒度刻意保持保守，先合并再拆分，而不是一开始就拆到最小单元。第三，所有中间件版本统一由平台组锁定，业务团队不再自行升级，代价是灵活性下降，收益是故障定位时间缩短了一半以上。',
      code: `@SentinelResource(value = "orderCreate", blockHandler = "onBlock")\npublic Result create(OrderCmd cmd) {\n    // 1. 本地缓存校验库存，拦截明显无效的请求\n    // 2. Redis 原子扣减，失败直接返回排队\n    // 3. 扣减成功发送 MQ，由订单服务异步落库\n    return mqProducer.sendAsync(new OrderMsg(cmd));\n}`
    },
    {
      h: '四、效果数据与复盘',
      p: '新方案在连续两次大促中保持稳定：核心接口 P99 从 1.8s 降至 210ms，故障平均恢复时间从 26 分钟缩短到 7 分钟。复盘时最值得记录的教训是——容量评估必须提前锁定降级开关的演练时间，否则真正出事时没人敢按下那个按钮。',
      code: null
    },
    {
      h: '五、小结',
      p: '架构不是选最先进的技术，而是在约束条件下做可解释的取舍，并把这些取舍写下来、测出来、演练出来。希望这份拆解能帮你在下一次方案评审时，多问自己一句：这个决策，三年后的同事能看懂吗？',
      code: null
    }
  ]
}

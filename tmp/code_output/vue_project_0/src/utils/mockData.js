import { reactive } from 'vue'

const ROLES = ['超级管理员', '运营专员', '数据分析师', '客户经理', '财务审计', '访客']
const DEPTS = ['技术中心', '产品运营部', '数据智能部', '市场增长部', '客户成功部', '职能支持部']
const CITIES = ['杭州', '北京', '上海', '深圳', '成都', '西安', '武汉', '南京']
const CHANNELS = ['官网注册', '渠道合作', '活动拉新', '老客推荐', '企业采购']

const SURNAMES = ['陈', '林', '黄', '张', '李', '王', '刘', '赵', '周', '吴', '徐', '孙', '马', '朱', '胡', '郭', '何', '高', '罗', '郑']
const GIVEN = ['嘉宁', '若涵', '明轩', '思远', '雨桐', '泽宇', '婉清', '亦航', '曼琪', '承泽', '书瑶', '博文', '昕玥', '子墨', '佳宜', '皓宸', '芷若', '衍青', '南舟', '沐言']

function pad(n) { return String(n).padStart(2, '0') }

function dateStr(offsetDay) {
  const d = new Date(2026, 0, 1)
  d.setDate(d.getDate() + offsetDay)
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function buildUsers() {
  const list = []
  for (let i = 0; i < 48; i++) {
    const name = SURNAMES[i % SURNAMES.length] + GIVEN[(i * 7) % GIVEN.length]
    const joinOffset = -((i * 23) % 700) - 20
    const lastOffset = -((i * 5) % 26)
    const active = i % 6 !== 3
    list.push({
      id: 10001 + i,
      account: `ys_${String(10001 + i).slice(1)}`,
      name,
      email: `user${10001 + i}@yunshu-tech.com`,
      phone: `1${(3 + (i % 5))}${String(30000000 + i * 1234567).slice(0, 8)}`,
      role: ROLES[i % ROLES.length],
      dept: DEPTS[(i * 3) % DEPTS.length],
      city: CITIES[(i * 5) % CITIES.length],
      channel: CHANNELS[i % CHANNELS.length],
      status: active ? (i % 9 === 0 ? '锁定' : '正常') : '停用',
      joinDate: dateStr(joinOffset),
      lastLogin: dateStr(lastOffset),
      orders: (i * 13) % 96,
      amount: 8000 + ((i * 37) % 46) * 1500,
      loginCount: 40 + ((i * 29) % 300),
      pinyin: name
    })
  }
  return list
}

export const store = reactive({
  users: buildUsers(),
  roles: [
    { id: 1, name: '超级管理员', code: 'SUPER_ADMIN', members: 3, desc: '拥有平台全部功能与数据权限，可管理角色与系统参数', perms: ['用户全量读写', '角色与权限配置', '数据导出', '系统参数设置', '审计日志查看'], color: '#1668dc', createdAt: '2023-01-06' },
    { id: 2, name: '运营专员', code: 'OPERATOR', members: 26, desc: '负责日常用户运营、活动配置与内容维护', perms: ['用户读写', '活动配置', '数据看板查看', '工单处理'], color: '#0fbfc4', createdAt: '2023-02-14' },
    { id: 3, name: '数据分析师', code: 'ANALYST', members: 14, desc: '专注业务指标分析、报表制作与数据建模', perms: ['数据看板查看', '报表导出', '模型管理', '只读用户档案'], color: '#7c5cff', createdAt: '2023-05-22' },
    { id: 4, name: '客户经理', code: 'ACCOUNT_MGR', members: 19, desc: '维护企业客户档案、跟进商机与服务续约', perms: ['客户读写', '商机录入', '合同查看', '服务工单'], color: '#f59e0b', createdAt: '2023-08-11' },
    { id: 5, name: '财务审计', code: 'FIN_AUDIT', members: 7, desc: '核对结算数据、出具审计报表并管控预算', perms: ['结算数据查看', '审计日志', '发票管理', '预算审批'], color: '#16a34a', createdAt: '2024-03-04' },
    { id: 6, name: '访客', code: 'GUEST', members: 132, desc: '仅可浏览公开看板与帮助文档，无编辑权限', perms: ['公开看板查看'], color: '#8894a6', createdAt: '2023-01-06' }
  ],
  permMatrix: {
    columns: ['用户查看', '用户编辑', '数据导出', '角色配置', '系统设置'],
    rows: [
      { role: '超级管理员', cells: [true, true, true, true, true] },
      { role: '运营专员', cells: [true, true, false, false, false] },
      { role: '数据分析师', cells: [true, false, true, false, false] },
      { role: '客户经理', cells: [true, true, false, false, false] },
      { role: '财务审计', cells: [true, false, true, false, false] },
      { role: '访客', cells: [false, false, false, false, false] }
    ]
  },
  activities: [
    { id: 1, user: '林若涵', action: '新增了企业客户档案', target: '杭州数擎科技', time: '2026-01-01 09:42', type: 'create' },
    { id: 2, user: '周书瑶', action: '导出了月度活跃用户报表', target: '2025-12 报表', time: '2026-01-01 08:17', type: 'export' },
    { id: 3, user: '陈嘉宁', action: '调整了角色权限', target: '数据分析师', time: '2025-12-31 21:05', type: 'role' },
    { id: 4, user: '徐皓宸', action: '处理了服务工单', target: 'TK-20881', time: '2025-12-31 17:33', type: 'ticket' },
    { id: 5, user: '黄思远', action: '停用了异常账号', target: 'ys_20043', time: '2025-12-31 14:20', type: 'risk' },
    { id: 6, user: '吴亦航', action: '发布了新版数据看板', target: '增长分析 v3', time: '2025-12-30 19:48', type: 'publish' }
  ],
  overview: {
    totalUsers: 12846,
    activeToday: 3127,
    newThisWeek: 486,
    retention: 92.4,
    revenue: 846.2,
    conversion: 6.8,
    apiCalls: 1240,
    uptime: 99.98
  },
  trend7: [
    { label: '周一', value: 2410 }, { label: '周二', value: 2680 }, { label: '周三', value: 3120 },
    { label: '周四', value: 2890 }, { label: '周五', value: 3340 }, { label: '周六', value: 2760 }, { label: '周日', value: 3127 }
  ],
  revenue12: [
    { label: '1月', value: 428 }, { label: '2月', value: 386 }, { label: '3月', value: 512 }, { label: '4月', value: 561 },
    { label: '5月', value: 598 }, { label: '6月', value: 642 }, { label: '7月', value: 618 }, { label: '8月', value: 702 },
    { label: '9月', value: 748 }, { label: '10月', value: 791 }, { label: '11月', value: 812 }, { label: '12月', value: 846 }
  ]
}

export function distBy(key) {
  const map = {}
  store.users.forEach((u) => {
    const k = u[key]
    map[k] = (map[k] || 0) + 1
  })
  return Object.entries(map).map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value)
}

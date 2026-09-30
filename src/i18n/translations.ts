import type { Locale } from './config';

const serviceMeta = [
  { icon: 'checkup', image: '/images/services/smile.jpg' },
  { icon: 'cleaning', image: '/images/services/smile.jpg' },
  { icon: 'whitening', image: '/images/services/whitening.jpg' },
  { icon: 'aligner', image: '/images/services/aligners.jpg' },
  { icon: 'implant', image: '/images/services/implant.jpg' },
  { icon: 'kids', image: '/images/services/kids.jpg' },
  { icon: 'rootcanal', image: '/images/services/root-canal.jpg' },
  { icon: 'crown', image: '/images/services/veneers.jpg' },
] as const;

const locationMeta = [
  {
    id: 'central',
    phone: '+852 2XXX XXXX',
    address: {
      'zh-hant': '香港中環皇后大道中 88 號勵精中心 12 樓 1203 室',
      'zh-hans': '香港中环皇后大道中 88 号励精中心 12 楼 1203 室',
      en: 'Room 1203, 12/F, Lai Ching Centre, 88 Queen’s Road Central, Central, Hong Kong',
    },
  },
  {
    id: 'tst',
    phone: '+852 2XXX XXXX',
    address: {
      'zh-hant': '九龍尖沙咀廣東道 30 號新港中心 2 座 8 樓 806 室',
      'zh-hans': '九龙尖沙咀广东道 30 号新港中心 2 座 8 楼 806 室',
      en: 'Room 806, 8/F, Tower 2, Silvercord, 30 Canton Road, Tsim Sha Tsui, Kowloon',
    },
  },
] as const;

type Dict = {
  meta: { title: string; description: string };
  brand: { nameZh: string };
  a11y: {
    skip: string;
    home: string;
    mainNav: string;
    mobileNav: string;
    openMenu: string;
    closeMenu: string;
    footer: string;
    footerNav: string;
    stats: string;
    langSwitch: string;
  };
  nav: { href: string; label: string }[];
  cta: {
    whatsapp: string;
    whatsappConsult: string;
    whatsappNow: string;
    whatsappAsk: string;
    whatsappFaq: string;
    bookClinic: (district: string) => string;
    viewServices: string;
  };
  whatsappMessage: string;
  hero: {
    badge: string;
    headlineBefore: string;
    headlineMiddle: string;
    headlineAccent: string;
    body: string;
    note: string;
  };
  stats: { value: string; label: string }[];
  services: {
    eyebrow: string;
    title: string;
    body: string;
    unsure: string;
    askTeam: string;
    items: { title: string; description: string }[];
  };
  whyUs: {
    eyebrow: string;
    title: string;
    body: string;
    waitingAlt: string;
    consultAlt: string;
    waitingCaption: string;
    consultCaption: string;
    items: { title: string; description: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    body: string;
    steps: { step: string; title: string; description: string }[];
  };
  locations: {
    eyebrow: string;
    title: string;
    body: string;
    clinicSuffix: string;
    hoursShort: string;
    items: {
      district: string;
      name: string;
      hours: string[];
    }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    body: string;
    items: { question: string; answer: string }[];
  };
  banner: {
    title: string;
    body: string;
    note: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    copyright: string;
    disclaimer: string;
  };
};

const zhHant: Dict = {
  meta: {
    title: 'Apex Oral Care 卓峰口腔護理｜香港專業牙科診所',
    description:
      'Apex Oral Care 卓峰口腔護理提供專業、透明、安心的牙科服務：一般牙科、牙齒美白、隱形矯齒、植牙及兒童齒科。立即透過 WhatsApp 預約諮詢。',
  },
  brand: { nameZh: '卓峰口腔護理' },
  a11y: {
    skip: '跳至主要內容',
    home: 'Apex Oral Care 首頁',
    mainNav: '主選單',
    mobileNav: '手機選單',
    openMenu: '開啟選單',
    closeMenu: '關閉選單',
    footer: '頁尾資訊',
    footerNav: '頁尾選單',
    stats: '診所數據',
    langSwitch: '選擇語言',
  },
  nav: [
    { href: '#services', label: '診療服務' },
    { href: '#why-us', label: '我們的理念' },
    { href: '#process', label: '就診流程' },
    { href: '#locations', label: '診所位置' },
    { href: '#faq', label: '常見問題' },
  ],
  cta: {
    whatsapp: 'WhatsApp 預約',
    whatsappConsult: 'WhatsApp 預約諮詢',
    whatsappNow: '立即 WhatsApp 預約',
    whatsappAsk: '直接問問我們的牙醫團隊',
    whatsappFaq: '還有疑問？WhatsApp 我們',
    bookClinic: (district) => `預約${district}診所`,
    viewServices: '了解診療服務',
  },
  whatsappMessage: '你好，我想預約 Apex Oral Care 的牙科諮詢。',
  hero: {
    badge: '香港註冊牙醫・中環及尖沙咀應診',
    headlineBefore: '讓每一次微笑，',
    headlineMiddle: '都源自',
    headlineAccent: '安心與信任',
    body: '我們相信，好的牙科治療由清晰溝通開始。在 Apex Oral Care，你會先了解自己的口腔狀況與每個方案的費用，然後在沒有壓力的環境下，作出最適合自己的決定。',
    note: '首次諮詢免費・療程前提供書面報價・絕無隱藏收費',
  },
  stats: [
    { value: '15+', label: '年臨床經驗' },
    { value: '20,000+', label: '服務人次' },
    { value: '98%', label: '病人滿意度' },
    { value: '2', label: '間診所地點' },
  ],
  services: {
    eyebrow: '診療服務',
    title: '照顧你每一階段的口腔需要',
    body: '由日常檢查到複雜修復，我們以同一標準對待：清晰解釋、溫柔手法、合理收費。',
    unsure: '不確定自己需要哪種治療？',
    askTeam: '直接問問我們的牙醫團隊',
    items: [
      {
        title: '全面口腔檢查',
        description:
          '由註冊牙醫進行詳細檢查，配合數碼 X 光評估，及早發現蛀牙、牙周問題與其他隱患。',
      },
      {
        title: '專業洗牙及牙周護理',
        description: '溫和去除牙石與牙菌膜，並提供個人化的牙周護理建議，守護牙齦健康。',
      },
      {
        title: '牙齒美白',
        description: '採用安全有效的美白方案，按牙齒狀況調整療程強度，自然提亮笑容。',
      },
      {
        title: '隱形矯齒',
        description: '近乎隱形的牙箍設計，舒適貼服，讓你在日常生活中低調地改善牙齒排列。',
      },
      {
        title: '植牙修復',
        description: '以數碼技術規劃植牙位置，為缺失牙齒提供穩固、外觀自然的長遠修復方案。',
      },
      {
        title: '兒童齒科',
        description: '以耐心及鼓勵方式照顧小朋友，建立良好的護齒習慣，讓看牙變成輕鬆經驗。',
      },
      {
        title: '杜牙根（根管治療）',
        description: '盡力保留受感染或受損的天然牙齒，舒緩痛楚，恢復正常咀嚼功能。',
      },
      {
        title: '牙冠及牙橋',
        description: '為脆弱或缺損的牙齒度身訂造修復體，兼顧耐用度與自然外觀。',
      },
    ],
  },
  whyUs: {
    eyebrow: '我們的理念',
    title: '為甚麼病人選擇信任我們',
    body: '牙科治療關乎健康，也關乎信任。這四個承諾，是我們每天堅持的標準。',
    waitingAlt: '明亮舒適的診所等候區',
    consultAlt: '牙醫與病人溫柔溝通',
    waitingCaption: '診所等候區',
    consultCaption: '牙醫諮詢情景',
    items: [
      {
        title: '收費透明，絕無隱藏',
        description:
          '療程開始前提供清晰的書面報價，逐項列明費用。未有共識前，絕不進行額外治療。',
      },
      {
        title: '不痛優先的溫柔治療',
        description:
          '我們重視你的感受，採用細緻麻醉技術與輕柔手法，讓怕痛的病人也能安心接受治療。',
      },
      {
        title: '嚴謹消毒與感染控制',
        description: '所有器械均經高溫高壓消毒，診間遵循嚴格感染控制流程，保障每一位病人安全。',
      },
      {
        title: '真誠建議，不硬銷療程',
        description: '只推薦你真正需要的治療。我們會解釋每個方案的利弊，決定權永遠在你手上。',
      },
    ],
  },
  process: {
    eyebrow: '就診流程',
    title: '四個簡單步驟，輕鬆開始',
    body: '由預約到跟進，每一步都清晰透明，讓你安心掌握整個療程。',
    steps: [
      {
        step: '01',
        title: 'WhatsApp 預約',
        description: '透過 WhatsApp 告訴我們你的需要，我們會盡快回覆並安排合適時間。',
      },
      {
        step: '02',
        title: '詳細檢查評估',
        description: '牙醫細心檢查口腔狀況，必要時配合影像檢查，全面了解問題所在。',
      },
      {
        step: '03',
        title: '講解方案與報價',
        description: '以易明方式講解治療選項、步驟及費用，你同意後才開始治療。',
      },
      {
        step: '04',
        title: '治療與跟進',
        description: '完成治療後提供護理指引，並按需要安排覆診，跟進恢復情況。',
      },
    ],
  },
  locations: {
    eyebrow: '診所位置',
    title: '港九兩區，方便你就診',
    body: '兩間診所均鄰近港鐵站，環境寧靜舒適，讓你在繁忙日程中也能輕鬆安排檢查。',
    clinicSuffix: '診所',
    hoursShort: '星期一至五 10:00–19:30\n星期六 09:30–17:00',
    items: [
      {
        district: '中環',
        name: 'Apex Oral Care 中環診所',
        hours: [
          '星期一至五：上午 10:00 – 晚上 7:30',
          '星期六：上午 9:30 – 下午 5:00',
          '星期日及公眾假期：休息',
        ],
      },
      {
        district: '尖沙咀',
        name: 'Apex Oral Care 尖沙咀診所',
        hours: [
          '星期一至五：上午 10:00 – 晚上 7:30',
          '星期六：上午 9:30 – 下午 5:00',
          '星期日及公眾假期：休息',
        ],
      },
    ],
  },
  faq: {
    eyebrow: '常見問題',
    title: '你想知道的，我們如實回答',
    body: '找不到你的問題？歡迎直接透過 WhatsApp 查詢。',
    items: [
      {
        question: '第一次到診需要準備甚麼？',
        answer:
          '只需帶備身份證明文件即可。如你過往有牙科 X 光片、病歷或正在服用的藥物清單，歡迎一併帶來，有助牙醫更全面了解你的口腔及身體狀況。',
      },
      {
        question: '我很怕看牙醫，你們有甚麼方法幫我放鬆？',
        answer:
          '你並不孤單，很多病人都有類似感受。我們會先耐心聆聽你的擔憂，解釋每個步驟，並採用溫和的麻醉技術。治療期間你可以隨時舉手示意休息，節奏由你掌握。',
      },
      {
        question: '治療費用如何計算？會否有額外收費？',
        answer:
          '檢查後我們會提供書面治療計劃及逐項收費明細，在你清楚同意前不會開始任何收費療程。如治療中途發現新情況，亦會先與你商討再作決定。',
      },
      {
        question: '小朋友幾多歲應該第一次看牙醫？',
        answer:
          '一般建議小朋友在長出第一顆乳齒後，或約一歲左右進行首次口腔檢查。早期檢查有助預防蛀牙，也讓孩子從小習慣牙科環境，減少日後的恐懼。',
      },
      {
        question: '洗牙會令牙齒變得敏感或牙縫變大嗎？',
        answer:
          '洗牙是清除牙石及牙菌膜，並不會傷害牙齒本身。部分人洗牙後短暫感到敏感，是因為原本被牙石覆蓋的牙根暴露出來，通常數天內會自然舒緩。牙縫「變大」的感覺，其實是清走發炎腫脹的牙石後，回復牙齒本來的狀態。',
      },
      {
        question: '你們接受哪些付款方式？',
        answer:
          '我們接受現金、Visa、Mastercard、銀聯、AlipayHK 及 WeChat Pay。部分療程可安排分期付款，詳情歡迎透過 WhatsApp 查詢。',
      },
    ],
  },
  banner: {
    title: '是時候好好照顧你的牙齒了',
    body: '無論是例行檢查，還是困擾已久的牙齒問題，都歡迎與我們聊聊。首次諮詢免費，沒有任何壓力。',
    note: '辦公時間內，我們通常於 30 分鐘內回覆',
  },
  footer: {
    tagline: '以專業、透明與同理心，守護你和家人的口腔健康。中環及尖沙咀應診。',
    quickLinks: '快速連結',
    copyright: '© {year} Apex Oral Care 卓峰口腔護理。版權所有。',
    disclaimer: '本網站資訊僅供參考，不能取代專業牙醫診斷。',
  },
};

const zhHans: Dict = {
  meta: {
    title: 'Apex Oral Care 卓峰口腔护理｜香港专业牙科诊所',
    description:
      'Apex Oral Care 卓峰口腔护理提供专业、透明、安心的牙科服务：一般牙科、牙齿美白、隐形矫齿、植牙及儿童齿科。立即通过 WhatsApp 预约咨询。',
  },
  brand: { nameZh: '卓峰口腔护理' },
  a11y: {
    skip: '跳至主要内容',
    home: 'Apex Oral Care 首页',
    mainNav: '主菜单',
    mobileNav: '手机菜单',
    openMenu: '打开菜单',
    closeMenu: '关闭菜单',
    footer: '页脚信息',
    footerNav: '页脚菜单',
    stats: '诊所数据',
    langSwitch: '选择语言',
  },
  nav: [
    { href: '#services', label: '诊疗服务' },
    { href: '#why-us', label: '我们的理念' },
    { href: '#process', label: '就诊流程' },
    { href: '#locations', label: '诊所位置' },
    { href: '#faq', label: '常见问题' },
  ],
  cta: {
    whatsapp: 'WhatsApp 预约',
    whatsappConsult: 'WhatsApp 预约咨询',
    whatsappNow: '立即 WhatsApp 预约',
    whatsappAsk: '直接问问我们的牙医团队',
    whatsappFaq: '还有疑问？WhatsApp 我们',
    bookClinic: (district) => `预约${district}诊所`,
    viewServices: '了解诊疗服务',
  },
  whatsappMessage: '你好，我想预约 Apex Oral Care 的牙科咨询。',
  hero: {
    badge: '香港注册牙医・中环及尖沙咀应诊',
    headlineBefore: '让每一次微笑，',
    headlineMiddle: '都源自',
    headlineAccent: '安心与信任',
    body: '我们相信，好的牙科治疗由清晰沟通开始。在 Apex Oral Care，你会先了解自己的口腔状况与每个方案的费用，然后在没有压力的环境下，作出最适合自己的决定。',
    note: '首次咨询免费・疗程前提供书面报价・绝无隐藏收费',
  },
  stats: [
    { value: '15+', label: '年临床经验' },
    { value: '20,000+', label: '服务人次' },
    { value: '98%', label: '病人满意度' },
    { value: '2', label: '间诊所地点' },
  ],
  services: {
    eyebrow: '诊疗服务',
    title: '照顾你每一阶段的口腔需要',
    body: '由日常检查到复杂修复，我们以同一标准对待：清晰解释、温柔手法、合理收费。',
    unsure: '不确定自己需要哪种治疗？',
    askTeam: '直接问问我们的牙医团队',
    items: [
      {
        title: '全面口腔检查',
        description:
          '由注册牙医进行详细检查，配合数码 X 光评估，及早发现蛀牙、牙周问题与其他隐患。',
      },
      {
        title: '专业洗牙及牙周护理',
        description: '温和去除牙石与牙菌膜，并提供个人化的牙周护理建议，守护牙龈健康。',
      },
      {
        title: '牙齿美白',
        description: '采用安全有效的美白方案，按牙齿状况调整疗程强度，自然提亮笑容。',
      },
      {
        title: '隐形矫齿',
        description: '近乎隐形的牙箍设计，舒适贴服，让你在日常生活中低调地改善牙齿排列。',
      },
      {
        title: '植牙修复',
        description: '以数码技术规划植牙位置，为缺失牙齿提供稳固、外观自然的长远修复方案。',
      },
      {
        title: '儿童齿科',
        description: '以耐心及鼓励方式照顾小朋友，建立良好的护齿习惯，让看牙变成轻松经验。',
      },
      {
        title: '根管治疗',
        description: '尽力保留受感染或受损的天然牙齿，舒缓痛楚，恢复正常咀嚼功能。',
      },
      {
        title: '牙冠及牙桥',
        description: '为脆弱或缺损的牙齿度身订造修复体，兼顾耐用度与自然外观。',
      },
    ],
  },
  whyUs: {
    eyebrow: '我们的理念',
    title: '为什么病人选择信任我们',
    body: '牙科治疗关乎健康，也关乎信任。这四个承诺，是我们每天坚持的标准。',
    waitingAlt: '明亮舒适的诊所等候区',
    consultAlt: '牙医与病人温柔沟通',
    waitingCaption: '诊所等候区',
    consultCaption: '牙医咨询情景',
    items: [
      {
        title: '收费透明，绝无隐藏',
        description: '疗程开始前提供清晰的书面报价，逐项列明费用。未有共识前，绝不进行额外治疗。',
      },
      {
        title: '不痛优先的温柔治疗',
        description:
          '我们重视你的感受，采用细致麻醉技术与轻柔手法，让怕痛的病人也能安心接受治疗。',
      },
      {
        title: '严谨消毒与感染控制',
        description: '所有器械均经高温高压消毒，诊间遵循严格感染控制流程，保障每一位病人安全。',
      },
      {
        title: '真诚建议，不硬销疗程',
        description: '只推荐你真正需要的治疗。我们会解释每个方案的利弊，决定权永远在你手上。',
      },
    ],
  },
  process: {
    eyebrow: '就诊流程',
    title: '四个简单步骤，轻松开始',
    body: '由预约到跟进，每一步都清晰透明，让你安心掌握整个疗程。',
    steps: [
      {
        step: '01',
        title: 'WhatsApp 预约',
        description: '通过 WhatsApp 告诉我们你的需要，我们会尽快回复并安排合适时间。',
      },
      {
        step: '02',
        title: '详细检查评估',
        description: '牙医细心检查口腔状况，必要时配合影像检查，全面了解问题所在。',
      },
      {
        step: '03',
        title: '讲解方案与报价',
        description: '以易明方式讲解治疗选项、步骤及费用，你同意后才开始治疗。',
      },
      {
        step: '04',
        title: '治疗与跟进',
        description: '完成治疗后提供护理指引，并按需要安排复诊，跟进恢复情况。',
      },
    ],
  },
  locations: {
    eyebrow: '诊所位置',
    title: '港九两区，方便你就诊',
    body: '两间诊所均邻近港铁站，环境宁静舒适，让你在繁忙日程中也能轻松安排检查。',
    clinicSuffix: '诊所',
    hoursShort: '星期一至五 10:00–19:30\n星期六 09:30–17:00',
    items: [
      {
        district: '中环',
        name: 'Apex Oral Care 中环诊所',
        hours: [
          '星期一至五：上午 10:00 – 晚上 7:30',
          '星期六：上午 9:30 – 下午 5:00',
          '星期日及公众假期：休息',
        ],
      },
      {
        district: '尖沙咀',
        name: 'Apex Oral Care 尖沙咀诊所',
        hours: [
          '星期一至五：上午 10:00 – 晚上 7:30',
          '星期六：上午 9:30 – 下午 5:00',
          '星期日及公众假期：休息',
        ],
      },
    ],
  },
  faq: {
    eyebrow: '常见问题',
    title: '你想知道的，我们如实回答',
    body: '找不到你的问题？欢迎直接通过 WhatsApp 查询。',
    items: [
      {
        question: '第一次到诊需要准备什么？',
        answer:
          '只需带备身份证明文件即可。如你过往有牙科 X 光片、病历或正在服用的药物清单，欢迎一并带来，有助牙医更全面了解你的口腔及身体状况。',
      },
      {
        question: '我很怕看牙医，你们有什么方法帮我放松？',
        answer:
          '你并不孤单，很多病人都有类似感受。我们会先耐心聆听你的担忧，解释每个步骤，并采用温和的麻醉技术。治疗期间你可以随时举手示意休息，节奏由你掌握。',
      },
      {
        question: '治疗费用如何计算？会否有额外收费？',
        answer:
          '检查后我们会提供书面治疗计划及逐项收费明细，在你清楚同意前不会开始任何收费疗程。如治疗中途发现新情况，亦会先与你商讨再作决定。',
      },
      {
        question: '小朋友几岁应该第一次看牙医？',
        answer:
          '一般建议小朋友在长出第一颗乳齿后，或约一岁左右进行首次口腔检查。早期检查有助预防蛀牙，也让孩子从小习惯牙科环境，减少日后的恐惧。',
      },
      {
        question: '洗牙会令牙齿变得敏感或牙缝变大吗？',
        answer:
          '洗牙是清除牙石及牙菌膜，并不会伤害牙齿本身。部分人洗牙后短暂感到敏感，是因为原本被牙石覆盖的牙根暴露出来，通常数天内会自然舒缓。牙缝「变大」的感觉，其实是清走发炎肿胀的牙石后，回复牙齿本来的状态。',
      },
      {
        question: '你们接受哪些付款方式？',
        answer:
          '我们接受现金、Visa、Mastercard、银联、AlipayHK 及 WeChat Pay。部分疗程可安排分期付款，详情欢迎通过 WhatsApp 查询。',
      },
    ],
  },
  banner: {
    title: '是时候好好照顾你的牙齿了',
    body: '无论是例行检查，还是困扰已久的牙齿问题，都欢迎与我们聊聊。首次咨询免费，没有任何压力。',
    note: '办公时间内，我们通常于 30 分钟内回复',
  },
  footer: {
    tagline: '以专业、透明与同理心，守护你和家人的口腔健康。中环及尖沙咀应诊。',
    quickLinks: '快速链接',
    copyright: '© {year} Apex Oral Care 卓峰口腔护理。版权所有。',
    disclaimer: '本网站信息仅供参考，不能取代专业牙医诊断。',
  },
};

const en: Dict = {
  meta: {
    title: 'Apex Oral Care | Professional Dental Clinic in Hong Kong',
    description:
      'Apex Oral Care offers gentle, transparent dental care in Hong Kong — check-ups, whitening, clear aligners, implants and children’s dentistry. Book via WhatsApp.',
  },
  brand: { nameZh: '卓峰口腔護理' },
  a11y: {
    skip: 'Skip to main content',
    home: 'Apex Oral Care home',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    footer: 'Footer',
    footerNav: 'Footer navigation',
    stats: 'Clinic highlights',
    langSwitch: 'Choose language',
  },
  nav: [
    { href: '#services', label: 'Services' },
    { href: '#why-us', label: 'Why us' },
    { href: '#process', label: 'How it works' },
    { href: '#locations', label: 'Locations' },
    { href: '#faq', label: 'FAQ' },
  ],
  cta: {
    whatsapp: 'Book on WhatsApp',
    whatsappConsult: 'WhatsApp consultation',
    whatsappNow: 'Book on WhatsApp now',
    whatsappAsk: 'Ask our dental team',
    whatsappFaq: 'Still have questions? WhatsApp us',
    bookClinic: (district) => `Book ${district}`,
    viewServices: 'View services',
  },
  whatsappMessage: 'Hi, I’d like to book a dental consultation at Apex Oral Care.',
  hero: {
    badge: 'HK-registered dentists · Central & Tsim Sha Tsui',
    headlineBefore: 'Every smile begins with',
    headlineMiddle: '',
    headlineAccent: 'trust and care',
    body: 'We believe great dental care starts with clear communication. At Apex Oral Care, you’ll understand your oral health and every option’s cost first — then decide, pressure-free.',
    note: 'Complimentary first consult · Written quotes · No hidden fees',
  },
  stats: [
    { value: '15+', label: 'Years of experience' },
    { value: '20,000+', label: 'Patient visits' },
    { value: '98%', label: 'Satisfaction rate' },
    { value: '2', label: 'Clinic locations' },
  ],
  services: {
    eyebrow: 'Services',
    title: 'Care for every stage of oral health',
    body: 'From routine check-ups to complex restorations, we keep the same standard: clear explanations, gentle care, fair pricing.',
    unsure: 'Not sure which treatment you need?',
    askTeam: 'Ask our dental team directly',
    items: [
      {
        title: 'Comprehensive check-up',
        description:
          'A registered dentist examines your mouth in detail, with digital X-rays when needed, to catch cavities, gum issues and other concerns early.',
      },
      {
        title: 'Scaling & gum care',
        description:
          'Gentle removal of tartar and plaque, plus personalised gum-care advice to protect long-term oral health.',
      },
      {
        title: 'Teeth whitening',
        description:
          'Safe, effective whitening tailored to your teeth for a naturally brighter smile.',
      },
      {
        title: 'Clear aligners',
        description:
          'Nearly invisible aligners that fit comfortably so you can straighten your teeth discreetly day to day.',
      },
      {
        title: 'Dental implants',
        description:
          'Digitally planned implant placement for a stable, natural-looking long-term replacement of missing teeth.',
      },
      {
        title: 'Children’s dentistry',
        description:
          'Patient, encouraging care that helps kids build healthy habits and feel at ease at the dentist.',
      },
      {
        title: 'Root canal treatment',
        description:
          'Preserve infected or damaged natural teeth where possible, relieve pain and restore comfortable chewing.',
      },
      {
        title: 'Crowns & bridges',
        description:
          'Custom restorations for weakened or missing teeth that balance durability with a natural look.',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Our promise',
    title: 'Why patients trust us',
    body: 'Dental care is about health — and trust. These four commitments guide us every day.',
    waitingAlt: 'Bright, comfortable clinic waiting area',
    consultAlt: 'Dentist speaking gently with a patient',
    waitingCaption: 'Waiting area',
    consultCaption: 'Consultation',
    items: [
      {
        title: 'Transparent pricing',
        description:
          'You’ll receive a clear written quote before treatment begins. We never add procedures without your agreement.',
      },
      {
        title: 'Gentle, comfort-first care',
        description:
          'We listen carefully and use refined anaesthesia and soft technique so anxious patients can feel safer.',
      },
      {
        title: 'Strict infection control',
        description:
          'Instruments are sterilised under high heat and pressure. Every room follows rigorous infection-control protocols.',
      },
      {
        title: 'Honest advice, no hard sell',
        description:
          'We only recommend what you truly need, explain the pros and cons of each option, and leave the decision with you.',
      },
    ],
  },
  process: {
    eyebrow: 'How it works',
    title: 'Four simple steps to get started',
    body: 'From booking to follow-up, every step stays clear so you stay in control.',
    steps: [
      {
        step: '01',
        title: 'WhatsApp booking',
        description: 'Tell us what you need on WhatsApp — we’ll reply promptly and arrange a time.',
      },
      {
        step: '02',
        title: 'Thorough assessment',
        description:
          'Your dentist carefully examines your mouth and uses imaging when needed to understand the full picture.',
      },
      {
        step: '03',
        title: 'Plan & quote',
        description:
          'We explain options, steps and fees in plain language. Treatment starts only after you agree.',
      },
      {
        step: '04',
        title: 'Treatment & follow-up',
        description:
          'After care, you’ll get clear home instructions and reviews when needed to track recovery.',
      },
    ],
  },
  locations: {
    eyebrow: 'Locations',
    title: 'Two clinics, easy to reach',
    body: 'Both clinics are near MTR stations — calm, comfortable spaces that fit into a busy schedule.',
    clinicSuffix: ' clinic',
    hoursShort: 'Mon–Fri 10:00–19:30\nSat 09:30–17:00',
    items: [
      {
        district: 'Central',
        name: 'Apex Oral Care Central',
        hours: [
          'Mon–Fri: 10:00 am – 7:30 pm',
          'Saturday: 9:30 am – 5:00 pm',
          'Sunday & public holidays: Closed',
        ],
      },
      {
        district: 'Tsim Sha Tsui',
        name: 'Apex Oral Care Tsim Sha Tsui',
        hours: [
          'Mon–Fri: 10:00 am – 7:30 pm',
          'Saturday: 9:30 am – 5:00 pm',
          'Sunday & public holidays: Closed',
        ],
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straightforward answers to common questions',
    body: 'Can’t find what you need? Message us on WhatsApp anytime.',
    items: [
      {
        question: 'What should I bring to my first visit?',
        answer:
          'Just bring ID. If you have previous dental X-rays, records or a list of medications, bring those too — they help us understand your oral and overall health more fully.',
      },
      {
        question: 'I’m nervous about dentists. How do you help?',
        answer:
          'You’re not alone. We listen first, explain each step, and use gentle anaesthesia. You can raise your hand to pause anytime — you set the pace.',
      },
      {
        question: 'How are fees calculated? Are there surprise charges?',
        answer:
          'After assessment we provide a written plan with itemised fees. Paid treatment never starts without your clear consent. If something new appears mid-treatment, we discuss it with you first.',
      },
      {
        question: 'When should children have their first dental visit?',
        answer:
          'Usually after the first baby tooth appears, or around age one. Early visits help prevent cavities and help children feel comfortable with dental care.',
      },
      {
        question: 'Does scaling make teeth sensitive or create gaps?',
        answer:
          'Scaling removes tartar and plaque — it doesn’t harm enamel. Temporary sensitivity can happen when covered roots are cleaned; it usually settles in a few days. A “wider gap” feeling is often just swollen tissue returning to normal after tartar is removed.',
      },
      {
        question: 'Which payment methods do you accept?',
        answer:
          'We accept cash, Visa, Mastercard, UnionPay, AlipayHK and WeChat Pay. Instalments may be available for some treatments — ask us on WhatsApp.',
      },
    ],
  },
  banner: {
    title: 'It’s time to take care of your smile',
    body: 'Whether you need a routine check-up or help with a long-standing concern, we’re here to talk. First consultation is complimentary — no pressure.',
    note: 'We usually reply within 30 minutes during clinic hours',
  },
  footer: {
    tagline:
      'Professional, transparent and empathetic care for you and your family. Clinics in Central and Tsim Sha Tsui.',
    quickLinks: 'Quick links',
    copyright: '© {year} Apex Oral Care. All rights reserved.',
    disclaimer: 'Information on this website is for reference only and is not a substitute for professional dental advice.',
  },
};

export const translations: Record<Locale, Dict> = {
  'zh-hant': zhHant,
  'zh-hans': zhHans,
  en,
};

export type Translation = Dict;

export function useTranslations(locale: Locale) {
  return translations[locale] ?? translations['zh-hant'];
}

export function getWhatsAppUrl(locale: Locale) {
  const t = useTranslations(locale);
  return `https://wa.me/852XXXXXXXX?text=${encodeURIComponent(t.whatsappMessage)}`;
}

export function getServices(locale: Locale) {
  const t = useTranslations(locale);
  return t.services.items.map((item, i) => ({
    ...item,
    icon: serviceMeta[i].icon,
    image: serviceMeta[i].image,
  }));
}

export function getLocations(locale: Locale) {
  const t = useTranslations(locale);
  return t.locations.items.map((item, i) => ({
    ...item,
    phone: locationMeta[i].phone,
    address: locationMeta[i].address[locale],
  }));
}

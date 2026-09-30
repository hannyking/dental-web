// Central place for site-wide constants.
export const WHATSAPP_URL =
  'https://wa.me/852XXXXXXXX?text=' +
  encodeURIComponent('你好，我想預約 Apex Oral Care 的牙科諮詢。');

export const NAV_ITEMS = [
  { href: '#services', label: '診療服務' },
  { href: '#why-us', label: '我們的理念' },
  { href: '#process', label: '就診流程' },
  { href: '#locations', label: '診所位置' },
  { href: '#faq', label: '常見問題' },
];

export const SERVICES = [
  {
    title: '全面口腔檢查',
    description:
      '由註冊牙醫進行詳細檢查，配合數碼 X 光評估，及早發現蛀牙、牙周問題與其他隱患。',
    icon: 'checkup',
    image: '/images/services/smile.jpg',
  },
  {
    title: '專業洗牙及牙周護理',
    description:
      '溫和去除牙石與牙菌膜，並提供個人化的牙周護理建議，守護牙齦健康。',
    icon: 'cleaning',
    image: '/images/services/smile.jpg',
  },
  {
    title: '牙齒美白',
    description:
      '採用安全有效的美白方案，按牙齒狀況調整療程強度，自然提亮笑容。',
    icon: 'whitening',
    image: '/images/services/whitening.jpg',
  },
  {
    title: '隱形矯齒',
    description:
      '近乎隱形的牙箍設計，舒適貼服，讓你在日常生活中低調地改善牙齒排列。',
    icon: 'aligner',
    image: '/images/services/aligners.jpg',
  },
  {
    title: '植牙修復',
    description:
      '以數碼技術規劃植牙位置，為缺失牙齒提供穩固、外觀自然的長遠修復方案。',
    icon: 'implant',
    image: '/images/services/implant.jpg',
  },
  {
    title: '兒童齒科',
    description:
      '以耐心及鼓勵方式照顧小朋友，建立良好的護齒習慣，讓看牙變成輕鬆經驗。',
    icon: 'kids',
    image: '/images/services/kids.jpg',
  },
  {
    title: '杜牙根（根管治療）',
    description:
      '盡力保留受感染或受損的天然牙齒，舒緩痛楚，恢復正常咀嚼功能。',
    icon: 'rootcanal',
    image: '/images/services/root-canal.jpg',
  },
  {
    title: '牙冠及牙橋',
    description:
      '為脆弱或缺損的牙齒度身訂造修復體，兼顧耐用度與自然外觀。',
    icon: 'crown',
    image: '/images/services/veneers.jpg',
  },
];

export const STATS = [
  { value: '15+', label: '年臨床經驗' },
  { value: '20,000+', label: '服務人次' },
  { value: '98%', label: '病人滿意度' },
  { value: '2', label: '間診所地點' },
];

export const WHY_US = [
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
    description:
      '所有器械均經高溫高壓消毒，診間遵循嚴格感染控制流程，保障每一位病人安全。',
  },
  {
    title: '真誠建議，不硬銷療程',
    description:
      '只推薦你真正需要的治療。我們會解釋每個方案的利弊，決定權永遠在你手上。',
  },
];

export const PROCESS_STEPS = [
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
];

export const LOCATIONS = [
  {
    district: '中環',
    name: 'Apex Oral Care 中環診所',
    address: '香港中環皇后大道中 88 號勵精中心 12 樓 1203 室',
    hours: [
      '星期一至五：上午 10:00 – 晚上 7:30',
      '星期六：上午 9:30 – 下午 5:00',
      '星期日及公眾假期：休息',
    ],
    phone: '+852 2XXX XXXX',
  },
  {
    district: '尖沙咀',
    name: 'Apex Oral Care 尖沙咀診所',
    address: '九龍尖沙咀廣東道 30 號新港中心 2 座 8 樓 806 室',
    hours: [
      '星期一至五：上午 10:00 – 晚上 7:30',
      '星期六：上午 9:30 – 下午 5:00',
      '星期日及公眾假期：休息',
    ],
    phone: '+852 2XXX XXXX',
  },
];

export const FAQS = [
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
];

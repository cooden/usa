/* 美国文化地图 · 内容数据（纯静态，无外部依赖） */
window.US_CULTURE = {
  regions: {
    northeast: { name: '东北部', en: 'Northeast', color: '#4368e0', desc: '港口、金融与老牌学院' },
    midwest: { name: '中西部', en: 'Midwest', color: '#9e6a0b', desc: '五大湖、工厂与农田' },
    south: { name: '南部', en: 'South', color: '#d04627', desc: '爵士、烧烤与民权运动' },
    west: { name: '西部', en: 'West', color: '#0b8a76', desc: '荒野、移民与太平洋岸' }
  },

  states: {
    ME: {
      name: '缅因州', en: 'Maine', region: 'northeast', title: '灯塔与龙虾之州',
      tags: ['海事', '龙虾', '森林'], city: '波特兰 / 阿卡迪亚',
      music: '船歌与民谣', food: '龙虾卷', landmark: '阿卡迪亚国家公园',
      figure: '亨利·朗费罗',
      desc: '海岸线上多是岩石和松林，冬天很长。阿卡迪亚国家公园的海岸公路经过几座仍在使用的灯塔，波特兰的码头清晨卸龙虾。'
    },
    NH: {
      name: '新罕布什尔州', en: 'New Hampshire', region: 'northeast', title: '花岗岩之州',
      tags: ['枫糖', '初选', '白山'], city: '曼彻斯特 / 康科德',
      music: '乡村与民谣', food: '枫糖浆与苹果酒', landmark: '华盛顿山',
      figure: '丹尼尔·韦伯斯特',
      desc: '白山山脉横穿北部，秋天糖枫林变色。这里每四年办一次全国最早的总统初选，全州人口约 140 万。'
    },
    VT: {
      name: '佛蒙特州', en: 'Vermont', region: 'northeast', title: '绿山之州',
      tags: ['枫糖', '农场', '秋叶'], city: '伯灵顿',
      music: '民谣与独立音乐', food: '枫糖与切达奶酪', landmark: '绿山国家森林',
      figure: '罗伯特·弗罗斯特',
      desc: '以小镇和农场为主，没有大城市。枫糖产量全美第一，十月的红叶季是全年最忙的时候。'
    },
    MA: {
      name: '马萨诸塞州', en: 'Massachusetts', region: 'northeast', title: '清教徒与学院之城',
      tags: ['学院', '独立战争', '文学'], city: '波士顿 / 剑桥',
      music: '波士顿交响乐团', food: '新英格兰蛤蜊浓汤', landmark: '自由之路',
      figure: '艾米莉·狄金森',
      desc: '波士顿是殖民地时期的老城，自由之路串起独立战争遗址。查尔斯河对岸是哈佛和 MIT，学生占了剑桥不少人口。'
    },
    RI: {
      name: '罗德岛州', en: 'Rhode Island', region: 'northeast', title: '海洋之州',
      tags: ['港口', '工业革命', '豪宅'], city: '普罗维登斯 / 纽波特',
      music: '独立摇滚与民谣', food: '炸鱿鱼与约翰尼蛋糕', landmark: '纽波特悬崖步道',
      figure: 'H.P. 洛夫克拉夫特',
      desc: '美国面积最小的州。工业革命最早从波塔基特的水力磨坊开始，纽波特的悬崖步道旁是 19 世纪富豪的夏季别墅。'
    },
    CT: {
      name: '康涅狄格州', en: 'Connecticut', region: 'northeast', title: '宪法之州',
      tags: ['耶鲁', '保险业', '文学'], city: '纽黑文 / 哈特福德',
      music: '古典与爵士', food: '汉堡包（Louis’ Lunch）', landmark: '耶鲁大学',
      figure: '马克·吐温',
      desc: '纽黑文的耶鲁大学和哈特福德的保险公司是老牌产业。马克·吐温在哈特福德住了十几年，写下《汤姆·索亚历险记》。'
    },
    NY: {
      name: '纽约州', en: 'New York', region: 'northeast', title: '移民之城',
      tags: ['移民', '百老汇', '爵士'], city: '纽约市 / 布法罗',
      music: '爵士、嘻哈与百老汇', food: '纽约披萨与贝果', landmark: '自由女神像',
      figure: '沃尔特·惠特曼',
      desc: '纽约市的地铁里能听到上百种语言，哈莱姆的爵士俱乐部和下东区的餐馆挤在曼哈顿。往北是布法罗和伊利运河的旧航线。'
    },
    NJ: {
      name: '新泽西州', en: 'New Jersey', region: 'northeast', title: '花园之州',
      tags: ['发明', '海岸', '工业'], city: '纽瓦克 / 特伦顿',
      music: '辛纳屈与斯普林斯汀', food: '猪肉卷（Taylor ham）', landmark: '大西洋城木板路',
      figure: '托马斯·爱迪生',
      desc: '夹在纽约和费城之间，常被当作过路州。爱迪生在门洛帕克的实验室、泽西海岸的木板路和斯普林斯汀的歌都出自这里。'
    },
    PA: {
      name: '宾夕法尼亚州', en: 'Pennsylvania', region: 'northeast', title: '自由钟之州',
      tags: ['独立', '阿米什', '钢铁'], city: '费城 / 匹兹堡',
      music: '费城灵魂乐', food: '费城芝士牛排', landmark: '独立厅',
      figure: '本杰明·富兰克林',
      desc: '费城的独立厅签署过《独立宣言》和宪法。往西是阿米什人的农场、匹兹堡的钢铁厂旧址，以及去工业化后的老工业城。'
    },

    OH: {
      name: '俄亥俄州', en: 'Ohio', region: 'midwest', title: '摇滚之州',
      tags: ['摇滚', '航空', '工业'], city: '克利夫兰 / 哥伦布',
      music: '摇滚（摇滚名人堂）', food: '辛辛那提辣椒', landmark: '摇滚名人堂',
      figure: '莱特兄弟',
      desc: '莱特兄弟在代顿开自行车店，后来造出第一架飞机。克利夫兰的摇滚名人堂由贝聿铭设计，五大湖的工厂带曾养活整片地区。'
    },
    IN: {
      name: '印第安纳州', en: 'Indiana', region: 'midwest', title: '十字路口之州',
      tags: ['赛车', '工业', '文学'], city: '印第安纳波利斯',
      music: '乡村与蓝调', food: '猪里脊三明治', landmark: '印第安纳波利斯赛车场',
      figure: '库尔特·冯内古特',
      desc: '印第安纳波利斯每年 5 月举办 500 英里赛车，赛道建于 1909 年。北部加里的钢厂曾供应全美，冯内古特在印第安纳波利斯长大。'
    },
    IL: {
      name: '伊利诺伊州', en: 'Illinois', region: 'midwest', title: '蓝调之州',
      tags: ['蓝调', '建筑', '66号公路'], city: '芝加哥',
      music: '芝加哥蓝调', food: '深盘披萨', landmark: '云门与威利斯大厦',
      figure: '欧内斯特·海明威',
      desc: '芝加哥是蓝调插电的地方，也是 66 号公路的起点。密歇根湖畔有云门和威利斯大厦，冬天风很大。'
    },
    MI: {
      name: '密歇根州', en: 'Michigan', region: 'midwest', title: '汽车之城',
      tags: ['汽车', '摩城', '五大湖'], city: '底特律 / 安娜堡',
      music: '摩城之声（Motown）', food: '康尼热狗与樱桃', landmark: '麦基诺大桥',
      figure: '亨利·福特',
      desc: '底特律的汽车流水线在 20 世纪改变了制造业，去工业化后城市人口大幅下降。摩城唱片从这里走向全美。'
    },
    WI: {
      name: '威斯康星州', en: 'Wisconsin', region: 'midwest', title: '奶制品之州',
      tags: ['奶酪', '啤酒', '北欧'], city: '密尔沃基 / 麦迪逊',
      music: '波尔卡与民谣', food: '奶酪凝乳', landmark: '密歇根湖岸',
      figure: '弗兰克·劳埃德·赖特',
      desc: '德国和北欧移民带来了啤酒厂、奶酪作坊和波尔卡乐队。赖特的塔里耶森建在威斯康星的河谷里。'
    },
    MN: {
      name: '明尼苏达州', en: 'Minnesota', region: 'midwest', title: '万湖之州',
      tags: ['北欧', '音乐', '湖泊'], city: '明尼阿波利斯 / 圣保罗',
      music: '王子（Prince）与民谣', food: '热菜（hotdish）', landmark: '苏必利尔湖',
      figure: '鲍勃·迪伦',
      desc: '明尼苏达有一万多个湖泊，冬天结冰后可以上冰钓鱼。迪伦和 Prince 都在这一带长大。'
    },
    IA: {
      name: '爱荷华州', en: 'Iowa', region: 'midwest', title: '玉米带之心',
      tags: ['农业', '党团会议', '绘画'], city: '得梅因',
      music: '乡村与民谣', food: '玉米与猪排', landmark: '得梅因州议会大厦',
      figure: '格兰特·伍德',
      desc: '玉米和大豆是主要作物，得梅因每四年办一次总统初选。格兰特·伍德的《美国哥特式》画的是一栋爱荷华农舍。'
    },
    MO: {
      name: '密苏里州', en: 'Missouri', region: 'midwest', title: '西部门户',
      tags: ['爵士', '文学', '66号公路'], city: '堪萨斯城 / 圣路易斯',
      music: '堪萨斯城爵士', food: '堪萨斯城烧烤', landmark: '圣路易斯拱门',
      figure: '马克·吐温',
      desc: '密苏里河和密西西比河在圣路易斯附近汇合，大拱门是西进的门户。堪萨斯城的爵士俱乐部营业到凌晨。'
    },
    ND: {
      name: '北达科他州', en: 'North Dakota', region: 'midwest', title: '和平花园之州',
      tags: ['草原', '原住民', '荒野'], city: '法戈 / 俾斯麦',
      music: '民谣与达科他鼓乐', food: '野牛汉堡', landmark: '西奥多·罗斯福国家公园',
      figure: '西奥多·罗斯福',
      desc: '人口不到 80 万，草原上风很大。罗斯福 1880 年代在这里经营牧场，后来设立了西奥多·罗斯福国家公园。'
    },
    SD: {
      name: '南达科他州', en: 'South Dakota', region: 'midwest', title: '拉什莫尔之州',
      tags: ['原住民', '黑山', '西部'], city: '苏福尔斯 / 拉皮德城',
      music: '苏族鼓乐', food: '野牛肉干', landmark: '拉什莫尔山',
      figure: '疯马（Crazy Horse）',
      desc: '黑山是苏族的圣地。拉什莫尔山的总统头像 1927 年动工、1941 年完工；往南的疯马雕像至今仍未完成。'
    },
    NE: {
      name: '内布拉斯加州', en: 'Nebraska', region: 'midwest', title: '玉米壳之州',
      tags: ['农业', '草原', '橄榄球'], city: '奥马哈 / 林肯',
      music: '乡村', food: '伦伯格奶酪与牛排', landmark: '内布拉斯加沙丘',
      figure: '威拉·凯瑟',
      desc: '奥马哈是铁路和保险城市，西部是沙丘和草原。威拉·凯瑟的小说写的就是这里的移民农场。'
    },
    KS: {
      name: '堪萨斯州', en: 'Kansas', region: 'midwest', title: '向日葵之州',
      tags: ['农业', '民权', '航空'], city: '威奇托 / 托皮卡',
      music: '乡村与摇摆', food: '烧烤与向日葵籽', landmark: '弗林特山',
      figure: '阿梅莉亚·埃尔哈特',
      desc: '龙卷风走廊穿过中部，小麦产量全美第一。布朗诉教育委员会案从托皮卡的一所小学开始。'
    },

    DE: {
      name: '特拉华州', en: 'Delaware', region: 'south', title: '第一州',
      tags: ['历史', '海岸', '杜邦'], city: '威尔明顿 / 多佛',
      music: '摇滚与爵士', food: '蟹饼', landmark: '里霍博斯海滩',
      figure: '杜邦家族',
      desc: '1787 年第一个批准宪法的州。威尔明顿一带的杜邦化工厂曾是美国最大的火药产地，南部是海滩。'
    },
    MD: {
      name: '马里兰州', en: 'Maryland', region: 'south', title: '老战线之州',
      tags: ['蓝蟹', '港口', '文学'], city: '巴尔的摩 / 安纳波利斯',
      music: '巴尔的摩俱乐部舞曲', food: '蓝蟹与蟹饼', landmark: '切萨皮克湾',
      figure: '埃德加·爱伦·坡',
      desc: '切萨皮克湾把州切成两半，蓝蟹是夏季的主食。巴尔的摩的排屋和爱伦·坡的故居都在港口附近。'
    },
    DC: {
      name: '华盛顿特区', en: 'Washington, D.C.', region: 'south', title: '联邦之城',
      tags: ['博物馆', '爵士', '政治'], city: '华盛顿',
      music: 'Go-go 与爵士', food: '半烟香肠', landmark: '林肯纪念堂',
      figure: '杜克·艾灵顿',
      desc: '联邦政府所在地，主要博物馆大多免费。本地音乐是 Go-go，一种在街头和俱乐部里发展起来的打击乐。'
    },
    VA: {
      name: '弗吉尼亚州', en: 'Virginia', region: 'south', title: '老自治领',
      tags: ['建国', '蓝草', '烟草'], city: '里士满 / 阿灵顿',
      music: '蓝草音乐（发源地）', food: '乡村火腿与花生', landmark: '蒙蒂塞洛',
      figure: '托马斯·杰斐逊',
      desc: '八位美国总统出生在这里，蒙蒂塞洛是杰斐逊设计的庄园。蓝草音乐沿谢南多厄河谷传播。'
    },
    WV: {
      name: '西弗吉尼亚州', en: 'West Virginia', region: 'south', title: '山岳之州',
      tags: ['阿巴拉契亚', '煤矿', '民歌'], city: '查尔斯顿',
      music: '阿巴拉契亚民谣', food: '意式辣肠卷', landmark: '新河峡谷',
      figure: '约翰·丹佛（《乡路带我回家》）',
      desc: '全境在阿巴拉契亚山里，煤矿曾是主要产业。新河峡谷有激流，矿工的歌成了乡村音乐的源头之一。'
    },
    NC: {
      name: '北卡罗来纳州', en: 'North Carolina', region: 'south', title: '焦油踵之州',
      tags: ['蓝草', '民权', '烟草'], city: '夏洛特 / 阿什维尔',
      music: '蓝草与老时光音乐', food: '烤猪肉与醋酱', landmark: '大雾山国家公园',
      figure: '妮娜·西蒙',
      desc: '阿什维尔是民谣和蓝草音乐的聚集地，研究三角园集中了大学和制药公司。东部是烟草农场。'
    },
    SC: {
      name: '南卡罗来纳州', en: 'South Carolina', region: 'south', title: '棕榈之州',
      tags: ['古拉', '低地', '海岸'], city: '查尔斯顿 / 哥伦比亚',
      music: '古拉与灵歌', food: '低地煮虾', landmark: '查尔斯顿历史区',
      figure: '古拉·吉奇人',
      desc: '查尔斯顿保留了殖民时期的排屋和旧奴隶市场。低地地区的古拉文化留下了编篮、语言和灵歌。'
    },
    GA: {
      name: '佐治亚州', en: 'Georgia', region: 'south', title: '桃之州',
      tags: ['民权', '嘻哈', '南方'], city: '亚特兰大 / 萨凡纳',
      music: '亚特兰大嘻哈与 R&B', food: '炸鸡与桃子馅饼', landmark: '马丁·路德·金国家历史公园',
      figure: '马丁·路德·金',
      desc: '亚特兰大是马丁·路德·金的故乡，也是亚特兰大嘻哈的录音室所在地。南部农业以桃子、花生为主。'
    },
    FL: {
      name: '佛罗里达州', en: 'Florida', region: 'south', title: '阳光之州',
      tags: ['古巴', '拉美', '湿地'], city: '迈阿密 / 奥兰多',
      music: '萨尔萨与拉丁流行', food: '古巴三明治', landmark: '大沼泽地国家公园',
      figure: '海明威（基韦斯特）',
      desc: '迈阿密的小哈瓦那是古巴移民社区，咖啡馆供应浓缩咖啡。南部是大沼泽地，夏天湿热多雨。'
    },
    KY: {
      name: '肯塔基州', en: 'Kentucky', region: 'south', title: '蓝草之州',
      tags: ['赛马', '威士忌', '蓝草'], city: '路易维尔 / 列克星敦',
      music: '蓝草音乐', food: '炸鸡与德比派', landmark: '猛犸洞国家公园',
      figure: '穆罕默德·阿里',
      desc: '波本威士忌要在新的烧焦橡木桶里陈年，酒厂多集中在路易维尔以南。五月第一个周六举办肯塔基德比。'
    },
    TN: {
      name: '田纳西州', en: 'Tennessee', region: 'south', title: '志愿者之州',
      tags: ['乡村音乐', '蓝调', '威士忌'], city: '纳什维尔 / 孟菲斯',
      music: '乡村音乐与孟菲斯蓝调', food: '纳什维尔辣鸡与孟菲斯烧烤', landmark: '格雷斯兰（猫王故居）',
      figure: '埃尔维斯·普雷斯利',
      desc: '纳什维尔是乡村音乐的录音中心，孟菲斯是蓝调和摇滚的发源地之一。猫王的格雷斯兰在孟菲斯。'
    },
    AL: {
      name: '阿拉巴马州', en: 'Alabama', region: 'south', title: '民权之州',
      tags: ['民权', '航天', '灵魂乐'], city: '伯明翰 / 蒙哥马利 / 亨茨维尔',
      music: '马斯尔肖尔斯灵魂乐', food: '白酱烧烤', landmark: '伯明翰民权区',
      figure: '罗莎·帕克斯',
      desc: '蒙哥马利的公交抵制是民权运动的转折点。亨茨维尔的火箭项目把阿波罗送上月球。'
    },
    MS: {
      name: '密西西比州', en: 'Mississippi', region: 'south', title: '蓝调之州',
      tags: ['蓝调', '三角洲', '文学'], city: '杰克逊 / 克拉克斯代尔',
      music: '三角洲蓝调', food: '三角洲塔马利与炸鲶鱼', landmark: '61 号蓝调公路',
      figure: 'B.B. King',
      desc: '密西西比三角洲是蓝调的发源地，61 号公路串起克拉克斯代尔的琴行和十字路口。棉花种植曾是这个州的全部经济。'
    },
    AR: {
      name: '阿肯色州', en: 'Arkansas', region: 'south', title: '自然之州',
      tags: ['蓝调', '乡村', '温泉'], city: '小石城 / 温泉城',
      music: '乡村与蓝调', food: '奶酪蘸酱与炸鲶鱼', landmark: '温泉国家公园',
      figure: '约翰尼·卡什',
      desc: '奥扎克山地的温泉和溪流，温泉城是国家公园。克林顿在小石城起步，约翰尼·卡什出生在阿肯色。'
    },
    LA: {
      name: '路易斯安那州', en: 'Louisiana', region: 'south', title: '狂欢之州',
      tags: ['爵士', '卡真', '狂欢节'], city: '新奥尔良 / 拉斐特',
      music: '爵士乐与柴迪科', food: '秋葵汤与小龙虾', landmark: '新奥尔良法国区',
      figure: '路易斯·阿姆斯特朗',
      desc: '新奥尔良的法国区每天有铜管乐队演出。卡真和克里奥尔菜来自阿卡迪亚移民和本地黑人的厨房。'
    },
    OK: {
      name: '俄克拉何马州', en: 'Oklahoma', region: 'south', title: '原住民与公路之州',
      tags: ['原住民', '66号公路', '乡村'], city: '俄克拉何马城 / 塔尔萨',
      music: '伍迪·格思里与乡村', food: '洋葱汉堡', landmark: '66 号公路（塔尔萨段）',
      figure: '伍迪·格思里',
      desc: '39 个原住民部落的总部设在俄克拉何马。俄克拉何马城到塔尔萨的 66 号公路经过尘暴区的旧址。'
    },
    TX: {
      name: '德克萨斯州', en: 'Texas', region: 'south', title: '孤星之州',
      tags: ['牛仔', '烧烤', '拉丁'], city: '奥斯汀 / 休斯敦 / 圣安东尼奥',
      music: '奥斯汀现场音乐与得州摇摆', food: '德州烧烤与早餐塔可', landmark: '阿拉莫',
      figure: '威利·纳尔逊',
      desc: '面积和人口都排全美第二。奥斯汀的现场音乐演出密度很高，西部是沙漠和边境城市埃尔帕索。'
    },

    MT: {
      name: '蒙大拿州', en: 'Montana', region: 'west', title: '大天空之州',
      tags: ['牛仔', '荒野', '原住民'], city: '比灵斯 / 博兹曼',
      music: '乡村与牛仔民谣', food: '野牛牛排与越橘', landmark: '冰川国家公园',
      figure: '查理·罗素',
      desc: '落基山以东的大草原，人口密度全美倒数。冰川国家公园和黑脚族保留地都在西部。'
    },
    ID: {
      name: '爱达荷州', en: 'Idaho', region: 'west', title: '土豆之州',
      tags: ['农业', '山野', '文学'], city: '博伊西 / 太阳谷',
      music: '乡村与独立民谣', food: '土豆与鳟鱼', landmark: '太阳谷',
      figure: '海明威（终老于太阳谷）',
      desc: '蛇河切割出深峡谷，马铃薯产量全美第一。海明威 1961 年在凯彻姆去世。'
    },
    WY: {
      name: '怀俄明州', en: 'Wyoming', region: 'west', title: '平等之州',
      tags: ['黄石', '牛仔', '荒野'], city: '夏延 / 杰克逊',
      music: '牛仔民谣', food: '野牛肉与越橘', landmark: '黄石国家公园',
      figure: '水牛比尔',
      desc: '人口全美最少，约 58 万。黄石国家公园 1872 年设立，是世界第一座国家公园。'
    },
    CO: {
      name: '科罗拉多州', en: 'Colorado', region: 'west', title: '百年之州',
      tags: ['滑雪', '精酿', '山岳'], city: '丹佛 / 博尔德',
      music: '民谣与独立摇滚', food: '绿辣椒与精酿啤酒', landmark: '派克峰',
      figure: '约翰·丹佛',
      desc: '丹佛海拔 1609 米，落基山的雪线在城西。精酿啤酒厂数量全美前列，绿辣椒是本地菜的主料。'
    },
    NM: {
      name: '新墨西哥州', en: 'New Mexico', region: 'west', title: '迷人之州',
      tags: ['普韦布洛', '西班牙', '辣椒'], city: '圣菲 / 阿尔伯克基',
      music: '西班牙裔民谣与普韦布洛鼓', food: '绿辣椒炖菜', landmark: '陶斯普韦布洛',
      figure: '乔治亚·奥基弗',
      desc: '圣菲的土坯建筑和陶斯普韦布洛是普韦布洛人和西班牙殖民者留下的。绿辣椒挂在门口晾晒。'
    },
    AZ: {
      name: '亚利桑那州', en: 'Arizona', region: 'west', title: '大峡谷之州',
      tags: ['纳瓦霍', '沙漠', '公路'], city: '菲尼克斯 / 图森',
      music: '纳瓦霍与墨西哥民谣', food: '索诺拉热狗与纳瓦霍炸面包', landmark: '大峡谷国家公园',
      figure: '纳瓦霍族',
      desc: '大峡谷深约 1.6 公里，岩层记录了近 20 亿年。纳瓦霍保留地占州面积四分之一左右，织毯和银饰是传统手工艺。'
    },
    UT: {
      name: '犹他州', en: 'Utah', region: 'west', title: '蜂巢之州',
      tags: ['摩门', '红岩', '滑雪'], city: '盐湖城',
      music: '摩门大教堂合唱团', food: '果冻沙拉与炸酱（fry sauce）', landmark: '锡安与拱门国家公园',
      figure: '布莱根·杨',
      desc: '1847 年摩门教徒在盐湖谷定居，盐湖城是教会总部。南部是锡安和拱门的红岩峡谷。'
    },
    NV: {
      name: '内华达州', en: 'Nevada', region: 'west', title: '银之州',
      tags: ['拉斯维加斯', '沙漠', '娱乐'], city: '拉斯维加斯 / 里诺',
      music: '拉斯维加斯秀场与乡村', food: '自助餐与虾鸡尾酒', landmark: '拉斯维加斯大道',
      figure: '霍华德·休斯',
      desc: '拉斯维加斯大道集中了赌场和秀场，州内大部分土地归联邦政府。雷诺和卡森城是另一片旧城。'
    },
    WA: {
      name: '华盛顿州', en: 'Washington', region: 'west', title: '常青之州',
      tags: ['垃圾摇滚', '咖啡', '原住民'], city: '西雅图 / 塔科马',
      music: '垃圾摇滚（Grunge）', food: '咖啡与三文鱼', landmark: '雷尼尔山',
      figure: '吉米·亨德里克斯',
      desc: '西雅图多雨，咖啡和垃圾摇滚从这里出名。雷尼尔山海拔 4392 米，萨利什人的独木舟赛仍在普吉特湾举行。'
    },
    OR: {
      name: '俄勒冈州', en: 'Oregon', region: 'west', title: '海狸之州',
      tags: ['独立', '精酿', '户外'], city: '波特兰 / 尤金',
      music: '独立摇滚', food: '甜甜圈与精酿啤酒', landmark: '火山口湖',
      figure: '肯·凯西',
      desc: '波特兰的餐车和独立书店很多，威拉米特河谷种黑皮诺。州内大部分土地是森林，火山口湖是全美最深的湖。'
    },
    CA: {
      name: '加利福尼亚州', en: 'California', region: 'west', title: '金州',
      tags: ['好莱坞', '科技', '冲浪'], city: '洛杉矶 / 旧金山 / 圣迭戈',
      music: '西海岸嘻哈与冲浪摇滚', food: '墨西哥卷与酸面包', landmark: '金门大桥',
      figure: '约翰·斯坦贝克',
      desc: '从淘金热开始，移民不断涌入。好莱坞、硅谷和中央谷的农场经济都在这个州，山火和干旱也年年出现。'
    },
    AK: {
      name: '阿拉斯加州', en: 'Alaska', region: 'west', title: '最后的边疆',
      tags: ['原住民', '极光', '荒野'], city: '安克雷奇 / 朱诺',
      music: '因纽特鼓乐与民谣', food: '帝王蟹与三文鱼', landmark: '德纳里山',
      figure: '杰克·伦敦（克朗代克淘金）',
      desc: '面积全美最大，人口约 73 万。德纳里山海拔 6190 米，原住民语言有 20 多种。'
    },
    HI: {
      name: '夏威夷州', en: 'Hawaii', region: 'west', title: '阿罗哈之州',
      tags: ['波利尼西亚', '冲浪', '火山'], city: '檀香山 / 希洛',
      music: '夏威夷滑音吉他', food: '夏威夷饭与芋泥', landmark: '夏威夷火山国家公园',
      figure: '杜克·卡哈纳莫库',
      desc: '由 8 个主要岛屿和众多小岛组成，1959 年成为第 50 个州。滑音吉他和冲浪是本地文化。'
    }
  },

  corridors: [
    {
      id: 'blues', name: '蓝调与灵魂之路', en: 'Blues & Soul Highway',
      states: ['MS', 'LA', 'TN', 'MO', 'IL', 'AL'],
      desc: '从密西西比三角洲的十字路口出发，沿 61 号公路北上孟菲斯，再随北方移民进入芝加哥。'
    },
    {
      id: 'route66', name: '66 号公路', en: 'Route 66',
      states: ['IL', 'MO', 'KS', 'OK', 'TX', 'NM', 'AZ', 'CA'],
      desc: '1926 年通车的 66 号公路从芝加哥到圣莫尼卡，穿过八个州。1985 年退役后，部分路段成了旅游路线。'
    },
    {
      id: 'appalachia', name: '阿巴拉契亚民谣线', en: 'Appalachian Songline',
      states: ['WV', 'VA', 'NC', 'TN', 'KY'],
      desc: '英国和苏格兰移民的民歌在阿巴拉契亚山里保留了旧世界的调子，后来演变成蓝草和乡村音乐。'
    },
    {
      id: 'pacific', name: '太平洋岸线', en: 'Pacific Edge',
      states: ['WA', 'OR', 'CA', 'HI'],
      desc: '从西雅图的咖啡与垃圾摇滚，到波特兰的独立音乐，再到加州和夏威夷的冲浪文化。'
    },
    {
      id: 'newengland', name: '新英格兰文脉', en: 'New England Letters',
      states: ['ME', 'NH', 'VT', 'MA', 'RI', 'CT'],
      desc: '殖民地时期建立的学院、教堂和小镇，孕育了爱默生、狄金森、霍桑和马克·吐温。'
    },
    {
      id: 'borderlands', name: '西语边境文化', en: 'Borderlands',
      states: ['TX', 'NM', 'AZ', 'CA', 'CO', 'NV'],
      desc: '从德州到加州的边境地带，西班牙语地名、土坯建筑和墨西哥饮食沿美墨边境分布。'
    }
  ],
  // 主要城市标注（地图坐标系，与 us-paths.js 一致）
  majorCities: [
    { name: '纽约', en: 'New York', x: 886.8, y: 192.4 },
    { name: '洛杉矶', en: 'Los Angeles', x: 69.0, y: 345.3 },
    { name: '芝加哥', en: 'Chicago', x: 631.0, y: 244.3 },
    { name: '休斯顿', en: 'Houston', x: 475.6, y: 553.2 },
    { name: '费城', en: 'Philadelphia', x: 848.1, y: 234.1 },
    { name: '凤凰城', en: 'Phoenix', x: 209.6, y: 396.2 },
    { name: '达拉斯', en: 'Dallas', x: 440.4, y: 486.5 },
    { name: '旧金山', en: 'San Francisco', x: 44.5, y: 263.8 },
    { name: '西雅图', en: 'Seattle', x: 105.2, y: 30.9 },
    { name: '丹佛', en: 'Denver', x: 330.0, y: 283.8 },
    { name: '波士顿', en: 'Boston', x: 914.3, y: 166.8 },
    { name: '亚特兰大', en: 'Atlanta', x: 743.0, y: 430.0 }
  ]
};

/* 美国文化地图 · 内容数据（纯静态，无外部依赖） */
window.US_CULTURE = {
  regions: {
    northeast: { name: '东北部', en: 'Northeast', color: '#7C9CFF', desc: '港口、学院与移民的起点' },
    midwest: { name: '中西部', en: 'Midwest', color: '#F4B860', desc: '五大湖、玉米带与工厂的节拍' },
    south: { name: '南部', en: 'South', color: '#FF7D5C', desc: '爵士、烧烤与民权的记忆' },
    west: { name: '西部', en: 'West', color: '#3FD0B4', desc: '荒野、淘金与太平洋的风' }
  },

  states: {
    ME: {
      name: '缅因州', en: 'Maine', region: 'northeast', title: '灯塔与龙虾之州',
      tags: ['海事', '龙虾', '森林'], city: '波特兰 / 阿卡迪亚',
      music: '船歌与民谣', food: '龙虾卷', landmark: '阿卡迪亚国家公园',
      figure: '亨利·朗费罗',
      desc: '大西洋的雾、花岗岩海岸与松林。捕龙虾的小船清晨出海，灯塔在礁石上已经守了几个世纪。'
    },
    NH: {
      name: '新罕布什尔州', en: 'New Hampshire', region: 'northeast', title: '花岗岩之州',
      tags: ['枫糖', '初选', '白山'], city: '曼彻斯特 / 康科德',
      music: '乡村与民谣', food: '枫糖浆与苹果酒', landmark: '华盛顿山',
      figure: '丹尼尔·韦伯斯特',
      desc: '每四年，全国的目光先落在这里；其余时候，只有白山的雪线和糖枫林安静地变色。'
    },
    VT: {
      name: '佛蒙特州', en: 'Vermont', region: 'northeast', title: '绿山之州',
      tags: ['枫糖', '农场', '秋叶'], city: '伯灵顿',
      music: '民谣与独立音乐', food: '枫糖与切达奶酪', landmark: '绿山国家森林',
      figure: '罗伯特·弗罗斯特',
      desc: '小镇、谷仓与十月的红叶。这里把“慢生活”过成了一种地方政治，也把农场守成了风景。'
    },
    MA: {
      name: '马萨诸塞州', en: 'Massachusetts', region: 'northeast', title: '清教徒与学院之城',
      tags: ['学院', '独立战争', '文学'], city: '波士顿 / 剑桥',
      music: '波士顿交响乐团', food: '新英格兰蛤蜊浓汤', landmark: '自由之路',
      figure: '艾米莉·狄金森',
      desc: '从“五月花”到哈佛与 MIT，美国最古老的书卷气和最锋利的思想都挤在这条查尔斯河两岸。'
    },
    RI: {
      name: '罗德岛州', en: 'Rhode Island', region: 'northeast', title: '海洋之州',
      tags: ['港口', '工业革命', '豪宅'], city: '普罗维登斯 / 纽波特',
      music: '独立摇滚与民谣', food: '炸鱿鱼与约翰尼蛋糕', landmark: '纽波特悬崖步道',
      figure: 'H.P. 洛夫克拉夫特',
      desc: '美国工业革命从这条小河起步；纽波特的镀金时代豪宅一字排开，面朝大西洋。'
    },
    CT: {
      name: '康涅狄格州', en: 'Connecticut', region: 'northeast', title: '宪法之州',
      tags: ['耶鲁', '保险业', '文学'], city: '纽黑文 / 哈特福德',
      music: '古典与爵士', food: '汉堡包（Louis’ Lunch）', landmark: '耶鲁大学',
      figure: '马克·吐温',
      desc: '康涅狄格河畔的学院、保险与老钱；马克·吐温在这里写下了密西西比河的童年。'
    },
    NY: {
      name: '纽约州', en: 'New York', region: 'northeast', title: '移民之城',
      tags: ['移民', '百老汇', '爵士'], city: '纽约市 / 布法罗',
      music: '爵士、嘻哈与百老汇', food: '纽约披萨与贝果', landmark: '自由女神像',
      figure: '沃尔特·惠特曼',
      desc: '八百种语言挤在同一座地铁里。哈莱姆的爵士、下东区的饺子与百老汇的灯光同时亮着。'
    },
    NJ: {
      name: '新泽西州', en: 'New Jersey', region: 'northeast', title: '花园之州',
      tags: ['发明', '海岸', '工业'], city: '纽瓦克 / 特伦顿',
      music: '辛纳屈与斯普林斯汀', food: '猪肉卷（Taylor ham）', landmark: '大西洋城木板路',
      figure: '托马斯·爱迪生',
      desc: '被纽约的阴影遮住，却贡献了爱迪生的灯泡、泽西海岸的木板路和摇滚乐最嘶哑的嗓门。'
    },
    PA: {
      name: '宾夕法尼亚州', en: 'Pennsylvania', region: 'northeast', title: '自由钟之州',
      tags: ['独立', '阿米什', '钢铁'], city: '费城 / 匹兹堡',
      music: '费城灵魂乐', food: '费城芝士牛排', landmark: '独立厅',
      figure: '本杰明·富兰克林',
      desc: '《独立宣言》在此签署；向西是阿米什的马车、德国移民的农场与匹兹堡不灭的钢炉。'
    },

    OH: {
      name: '俄亥俄州', en: 'Ohio', region: 'midwest', title: '摇滚之州',
      tags: ['摇滚', '航空', '工业'], city: '克利夫兰 / 哥伦布',
      music: '摇滚（摇滚名人堂）', food: '辛辛那提辣椒', landmark: '摇滚名人堂',
      figure: '莱特兄弟',
      desc: '莱特兄弟在这里造自行车，然后造飞机；克利夫兰把摇滚乐供进了博物馆。'
    },
    IN: {
      name: '印第安纳州', en: 'Indiana', region: 'midwest', title: '十字路口之州',
      tags: ['赛车', '工业', '文学'], city: '印第安纳波利斯',
      music: '乡村与蓝调', food: '猪里脊三明治', landmark: '印第安纳波利斯赛车场',
      figure: '库尔特·冯内古特',
      desc: '五月的印地 500 让全城听见引擎；加里的钢厂与冯内古特的黑色幽默同样有名。'
    },
    IL: {
      name: '伊利诺伊州', en: 'Illinois', region: 'midwest', title: '蓝调之州',
      tags: ['蓝调', '建筑', '66号公路'], city: '芝加哥',
      music: '芝加哥蓝调', food: '深盘披萨', landmark: '云门与威利斯大厦',
      figure: '欧内斯特·海明威',
      desc: '密西西比河上的蓝调顺着铁路北上，在芝加哥插电；66 号公路也从这里出发。'
    },
    MI: {
      name: '密歇根州', en: 'Michigan', region: 'midwest', title: '汽车之城',
      tags: ['汽车', '摩城', '五大湖'], city: '底特律 / 安娜堡',
      music: '摩城之声（Motown）', food: '康尼热狗与樱桃', landmark: '麦基诺大桥',
      figure: '亨利·福特',
      desc: '流水线改变了世界，也改变了这座城的命运；摩城的节拍至今仍在底特律的空气里回响。'
    },
    WI: {
      name: '威斯康星州', en: 'Wisconsin', region: 'midwest', title: '奶制品之州',
      tags: ['奶酪', '啤酒', '北欧'], city: '密尔沃基 / 麦迪逊',
      music: '波尔卡与民谣', food: '奶酪凝乳', landmark: '密歇根湖岸',
      figure: '弗兰克·劳埃德·赖特',
      desc: '德国与北欧移民把啤酒馆、奶酪和波尔卡搬到这里，赖特的草原学派也在此生长。'
    },
    MN: {
      name: '明尼苏达州', en: 'Minnesota', region: 'midwest', title: '万湖之州',
      tags: ['北欧', '音乐', '湖泊'], city: '明尼阿波利斯 / 圣保罗',
      music: '王子（Prince）与民谣', food: '热菜（hotdish）', landmark: '苏必利尔湖',
      figure: '鲍勃·迪伦',
      desc: '冰湖、桑拿与路德教的小镇；迪伦和 Prince 都从这里走出去，改写了流行乐。'
    },
    IA: {
      name: '爱荷华州', en: 'Iowa', region: 'midwest', title: '玉米带之心',
      tags: ['农业', '党团会议', '绘画'], city: '得梅因',
      music: '乡村与民谣', food: '玉米与猪排', landmark: '得梅因州议会大厦',
      figure: '格兰特·伍德',
      desc: '《美国哥特式》的背景就在这里：一排玉米、一座白房子和一张严肃的脸。'
    },
    MO: {
      name: '密苏里州', en: 'Missouri', region: 'midwest', title: '西部门户',
      tags: ['爵士', '文学', '66号公路'], city: '堪萨斯城 / 圣路易斯',
      music: '堪萨斯城爵士', food: '堪萨斯城烧烤', landmark: '圣路易斯拱门',
      figure: '马克·吐温',
      desc: '密苏里河与密西西比河在此交汇。堪萨斯城的爵士吹到深夜，拱门则一直望向西部。'
    },
    ND: {
      name: '北达科他州', en: 'North Dakota', region: 'midwest', title: '和平花园之州',
      tags: ['草原', '原住民', '荒野'], city: '法戈 / 俾斯麦',
      music: '民谣与达科他鼓乐', food: '野牛汉堡', landmark: '西奥多·罗斯福国家公园',
      figure: '西奥多·罗斯福',
      desc: '风穿过草原。罗斯福在这里学会骑马，也学会思考荒野；冬夜的极光落在麦田上。'
    },
    SD: {
      name: '南达科他州', en: 'South Dakota', region: 'midwest', title: '拉什莫尔之州',
      tags: ['原住民', '黑山', '西部'], city: '苏福尔斯 / 拉皮德城',
      music: '苏族鼓乐', food: '野牛肉干', landmark: '拉什莫尔山',
      figure: '疯马（Crazy Horse）',
      desc: '黑山是苏族的圣山；石头上的四张总统脸与山那头的疯马雕像遥遥相对。'
    },
    NE: {
      name: '内布拉斯加州', en: 'Nebraska', region: 'midwest', title: '玉米壳之州',
      tags: ['农业', '草原', '橄榄球'], city: '奥马哈 / 林肯',
      music: '乡村', food: '伦伯格奶酪与牛排', landmark: '内布拉斯加沙丘',
      figure: '威拉·凯瑟',
      desc: '西行移民的车辙还留在草原上，凯瑟笔下的小镇在麦浪里沉默而倔强。'
    },
    KS: {
      name: '堪萨斯州', en: 'Kansas', region: 'midwest', title: '向日葵之州',
      tags: ['农业', '民权', '航空'], city: '威奇托 / 托皮卡',
      music: '乡村与摇摆', food: '烧烤与向日葵籽', landmark: '弗林特山',
      figure: '阿梅莉亚·埃尔哈特',
      desc: '龙卷风走廊的中心，也是布朗诉教育委员会案的起点；埃尔哈特从这里飞向大西洋。'
    },

    DE: {
      name: '特拉华州', en: 'Delaware', region: 'south', title: '第一州',
      tags: ['历史', '海岸', '杜邦'], city: '威尔明顿 / 多佛',
      music: '摇滚与爵士', food: '蟹饼', landmark: '里霍博斯海滩',
      figure: '杜邦家族',
      desc: '第一个批准宪法的州，如今是海滩公路、化学工业与免税购物的混合体。'
    },
    MD: {
      name: '马里兰州', en: 'Maryland', region: 'south', title: '老战线之州',
      tags: ['蓝蟹', '港口', '文学'], city: '巴尔的摩 / 安纳波利斯',
      music: '巴尔的摩俱乐部舞曲', food: '蓝蟹与蟹饼', landmark: '切萨皮克湾',
      figure: '埃德加·爱伦·坡',
      desc: '切萨皮克湾的蓝蟹、巴尔的摩的排屋与爱伦·坡的乌鸦，一起构成这片水岸的性情。'
    },
    DC: {
      name: '华盛顿特区', en: 'Washington, D.C.', region: 'south', title: '联邦之城',
      tags: ['博物馆', '爵士', '政治'], city: '华盛顿',
      music: 'Go-go 与爵士', food: '半烟香肠', landmark: '林肯纪念堂',
      figure: '杜克·艾灵顿',
      desc: '纪念碑与博物馆排成一条轴线；在国会山之外，Go-go 的鼓点才是本地真正的声音。'
    },
    VA: {
      name: '弗吉尼亚州', en: 'Virginia', region: 'south', title: '老自治领',
      tags: ['建国', '蓝草', '烟草'], city: '里士满 / 阿灵顿',
      music: '蓝草音乐（发源地）', food: '乡村火腿与花生', landmark: '蒙蒂塞洛',
      figure: '托马斯·杰斐逊',
      desc: '八位总统从这片烟草与丘陵中走出；蓝草的班卓琴顺着谢南多厄河谷一路流传。'
    },
    WV: {
      name: '西弗吉尼亚州', en: 'West Virginia', region: 'south', title: '山岳之州',
      tags: ['阿巴拉契亚', '煤矿', '民歌'], city: '查尔斯顿',
      music: '阿巴拉契亚民谣', food: '意式辣肠卷', landmark: '新河峡谷',
      figure: '约翰·丹佛（《乡路带我回家》）',
      desc: '“几乎天堂”的西弗吉尼亚：矿工的歌、峡谷的白水与山间的小教堂。'
    },
    NC: {
      name: '北卡罗来纳州', en: 'North Carolina', region: 'south', title: '焦油踵之州',
      tags: ['蓝草', '民权', '烟草'], city: '夏洛特 / 阿什维尔',
      music: '蓝草与老时光音乐', food: '烤猪肉与醋酱', landmark: '大雾山国家公园',
      figure: '妮娜·西蒙',
      desc: '阿什维尔的民谣、研究三角园的实验室与烤猪的醋香，共存于同一片山麓。'
    },
    SC: {
      name: '南卡罗来纳州', en: 'South Carolina', region: 'south', title: '棕榈之州',
      tags: ['古拉', '低地', '海岸'], city: '查尔斯顿 / 哥伦比亚',
      music: '古拉与灵歌', food: '低地煮虾', landmark: '查尔斯顿历史区',
      figure: '古拉·吉奇人',
      desc: '查尔斯顿的彩虹排屋与古拉文化的语言、编篮与歌声，共同保留着非洲裔的记忆。'
    },
    GA: {
      name: '佐治亚州', en: 'Georgia', region: 'south', title: '桃之州',
      tags: ['民权', '嘻哈', '南方'], city: '亚特兰大 / 萨凡纳',
      music: '亚特兰大嘻哈与 R&B', food: '炸鸡与桃子馅饼', landmark: '马丁·路德·金国家历史公园',
      figure: '马丁·路德·金',
      desc: '从金博士的教堂到亚特兰大的录音室，南方黑人文化在这里既古老又最前沿。'
    },
    FL: {
      name: '佛罗里达州', en: 'Florida', region: 'south', title: '阳光之州',
      tags: ['古巴', '拉美', '湿地'], city: '迈阿密 / 奥兰多',
      music: '萨尔萨与拉丁流行', food: '古巴三明治', landmark: '大沼泽地国家公园',
      figure: '海明威（基韦斯特）',
      desc: '加勒比与拉美的门户：小哈瓦那的咖啡、珊瑚礁与永远潮湿的夏天。'
    },
    KY: {
      name: '肯塔基州', en: 'Kentucky', region: 'south', title: '蓝草之州',
      tags: ['赛马', '威士忌', '蓝草'], city: '路易维尔 / 列克星敦',
      music: '蓝草音乐', food: '炸鸡与德比派', landmark: '猛犸洞国家公园',
      figure: '穆罕默德·阿里',
      desc: '波本桶在石灰岩洞里陈化，五月第一个星期六全城为赛马停下；阿里也出生于此。'
    },
    TN: {
      name: '田纳西州', en: 'Tennessee', region: 'south', title: '志愿者之州',
      tags: ['乡村音乐', '蓝调', '威士忌'], city: '纳什维尔 / 孟菲斯',
      music: '乡村音乐与孟菲斯蓝调', food: '纳什维尔辣鸡与孟菲斯烧烤', landmark: '格雷斯兰（猫王故居）',
      figure: '埃尔维斯·普雷斯利',
      desc: '一条州界之内，东边是纳什维尔的吉他形天际线，西边是孟菲斯的比尔街。'
    },
    AL: {
      name: '阿拉巴马州', en: 'Alabama', region: 'south', title: '民权之州',
      tags: ['民权', '航天', '灵魂乐'], city: '伯明翰 / 蒙哥马利 / 亨茨维尔',
      music: '马斯尔肖尔斯灵魂乐', food: '白酱烧烤', landmark: '伯明翰民权区',
      figure: '罗莎·帕克斯',
      desc: '蒙哥马利的公交抵制改变了美国；亨茨维尔的火箭把人类送上了月球。'
    },
    MS: {
      name: '密西西比州', en: 'Mississippi', region: 'south', title: '蓝调之州',
      tags: ['蓝调', '三角洲', '文学'], city: '杰克逊 / 克拉克斯代尔',
      music: '三角洲蓝调', food: '三角洲塔马利与炸鲶鱼', landmark: '61 号蓝调公路',
      figure: 'B.B. King',
      desc: '棉花田、十字路口与一把滑棒吉他——密西西比三角洲是蓝调的发源地。'
    },
    AR: {
      name: '阿肯色州', en: 'Arkansas', region: 'south', title: '自然之州',
      tags: ['蓝调', '乡村', '温泉'], city: '小石城 / 温泉城',
      music: '乡村与蓝调', food: '奶酪蘸酱与炸鲶鱼', landmark: '温泉国家公园',
      figure: '约翰尼·卡什',
      desc: '奥扎克山地的溪流与温泉；克林顿的政治起点与卡什的家乡都在这里。'
    },
    LA: {
      name: '路易斯安那州', en: 'Louisiana', region: 'south', title: '狂欢之州',
      tags: ['爵士', '卡真', '狂欢节'], city: '新奥尔良 / 拉斐特',
      music: '爵士乐与柴迪科', food: '秋葵汤与小龙虾', landmark: '新奥尔良法国区',
      figure: '路易斯·阿姆斯特朗',
      desc: '铜管乐从杰克逊广场的黄昏吹到深夜，卡真与克里奥尔的味道在锅里翻滚。'
    },
    OK: {
      name: '俄克拉何马州', en: 'Oklahoma', region: 'south', title: '原住民与公路之州',
      tags: ['原住民', '66号公路', '乡村'], city: '俄克拉何马城 / 塔尔萨',
      music: '伍迪·格思里与乡村', food: '洋葱汉堡', landmark: '66 号公路（塔尔萨段）',
      figure: '伍迪·格思里',
      desc: '39 个原住民族群的家园，也是“尘暴”年代西行之路最让人心碎的一段。'
    },
    TX: {
      name: '德克萨斯州', en: 'Texas', region: 'south', title: '孤星之州',
      tags: ['牛仔', '烧烤', '拉丁'], city: '奥斯汀 / 休斯敦 / 圣安东尼奥',
      music: '奥斯汀现场音乐与得州摇摆', food: '德州烧烤与早餐塔可', landmark: '阿拉莫',
      figure: '威利·纳尔逊',
      desc: '牛仔帽、墨西哥湾与边境的西班牙语；奥斯汀自称“世界现场音乐之都”。'
    },

    MT: {
      name: '蒙大拿州', en: 'Montana', region: 'west', title: '大天空之州',
      tags: ['牛仔', '荒野', '原住民'], city: '比灵斯 / 博兹曼',
      music: '乡村与牛仔民谣', food: '野牛牛排与越橘', landmark: '冰川国家公园',
      figure: '查理·罗素',
      desc: '落基山以东的最后一片大草原，牛群、冰川与黑脚族的营地共享同一片天空。'
    },
    ID: {
      name: '爱达荷州', en: 'Idaho', region: 'west', title: '土豆之州',
      tags: ['农业', '山野', '文学'], city: '博伊西 / 太阳谷',
      music: '乡村与独立民谣', food: '土豆与鳟鱼', landmark: '太阳谷',
      figure: '海明威（终老于太阳谷）',
      desc: '蛇河的峡谷、马铃薯田与无尽的荒野；海明威选择在太阳谷度过最后的秋天。'
    },
    WY: {
      name: '怀俄明州', en: 'Wyoming', region: 'west', title: '平等之州',
      tags: ['黄石', '牛仔', '荒野'], city: '夏延 / 杰克逊',
      music: '牛仔民谣', food: '野牛肉与越橘', landmark: '黄石国家公园',
      figure: '水牛比尔',
      desc: '全美人口最少的州，却拥有世界上第一座国家公园与最狂野的牛仔竞技。'
    },
    CO: {
      name: '科罗拉多州', en: 'Colorado', region: 'west', title: '百年之州',
      tags: ['滑雪', '精酿', '山岳'], city: '丹佛 / 博尔德',
      music: '民谣与独立摇滚', food: '绿辣椒与精酿啤酒', landmark: '派克峰',
      figure: '约翰·丹佛',
      desc: '一英里高的城市、落基山的雪线与精酿酒吧；墨西哥裔的绿辣椒在同一口锅里。'
    },
    NM: {
      name: '新墨西哥州', en: 'New Mexico', region: 'west', title: '迷人之州',
      tags: ['普韦布洛', '西班牙', '辣椒'], city: '圣菲 / 阿尔伯克基',
      music: '西班牙裔民谣与普韦布洛鼓', food: '绿辣椒炖菜', landmark: '陶斯普韦布洛',
      figure: '乔治亚·奥基弗',
      desc: '土坯房、辣椒挂串与沙漠的光；普韦布洛、西班牙与墨西哥三种传统在此交叠。'
    },
    AZ: {
      name: '亚利桑那州', en: 'Arizona', region: 'west', title: '大峡谷之州',
      tags: ['纳瓦霍', '沙漠', '公路'], city: '菲尼克斯 / 图森',
      music: '纳瓦霍与墨西哥民谣', food: '索诺拉热狗与纳瓦霍炸面包', landmark: '大峡谷国家公园',
      figure: '纳瓦霍族',
      desc: '大峡谷的岩层像一本打开的地质书；纳瓦霍的织毯与银饰把沙漠染成颜色。'
    },
    UT: {
      name: '犹他州', en: 'Utah', region: 'west', title: '蜂巢之州',
      tags: ['摩门', '红岩', '滑雪'], city: '盐湖城',
      music: '摩门大教堂合唱团', food: '果冻沙拉与炸酱（fry sauce）', landmark: '锡安与拱门国家公园',
      figure: '布莱根·杨',
      desc: '1847 年摩门教徒在此定居；红岩峡谷、盐滩与合唱团的歌声构成高原的三重奏。'
    },
    NV: {
      name: '内华达州', en: 'Nevada', region: 'west', title: '银之州',
      tags: ['拉斯维加斯', '沙漠', '娱乐'], city: '拉斯维加斯 / 里诺',
      music: '拉斯维加斯秀场与乡村', food: '自助餐与虾鸡尾酒', landmark: '拉斯维加斯大道',
      figure: '霍华德·休斯',
      desc: '沙漠里不夜的城市，霓虹、秀场与婚礼教堂；离开大道就是空旷盆地与火人节。'
    },
    WA: {
      name: '华盛顿州', en: 'Washington', region: 'west', title: '常青之州',
      tags: ['垃圾摇滚', '咖啡', '原住民'], city: '西雅图 / 塔科马',
      music: '垃圾摇滚（Grunge）', food: '咖啡与三文鱼', landmark: '雷尼尔山',
      figure: '吉米·亨德里克斯',
      desc: '雨林、咖啡与西雅图的垃圾摇滚；萨利什人的独木舟与波音、亚马逊同在水边。'
    },
    OR: {
      name: '俄勒冈州', en: 'Oregon', region: 'west', title: '海狸之州',
      tags: ['独立', '精酿', '户外'], city: '波特兰 / 尤金',
      music: '独立摇滚', food: '甜甜圈与精酿啤酒', landmark: '火山口湖',
      figure: '肯·凯西',
      desc: '波特兰的独立书店、餐车与精酿；“别让俄勒冈变成加州”是这里最著名的口头禅。'
    },
    CA: {
      name: '加利福尼亚州', en: 'California', region: 'west', title: '金州',
      tags: ['好莱坞', '科技', '冲浪'], city: '洛杉矶 / 旧金山 / 圣迭戈',
      music: '西海岸嘻哈与冲浪摇滚', food: '墨西哥卷与酸面包', landmark: '金门大桥',
      figure: '约翰·斯坦贝克',
      desc: '淘金热、好莱坞与硅谷：美国梦在这里被拍成电影，也被写进代码。'
    },
    AK: {
      name: '阿拉斯加州', en: 'Alaska', region: 'west', title: '最后的边疆',
      tags: ['原住民', '极光', '荒野'], city: '安克雷奇 / 朱诺',
      music: '因纽特鼓乐与民谣', food: '帝王蟹与三文鱼', landmark: '德纳里山',
      figure: '杰克·伦敦（克朗代克淘金）',
      desc: '极光、冰川与八种原住民语言；淘金者的雪橇痕迹仍留在山口。'
    },
    HI: {
      name: '夏威夷州', en: 'Hawaii', region: 'west', title: '阿罗哈之州',
      tags: ['波利尼西亚', '冲浪', '火山'], city: '檀香山 / 希洛',
      music: '夏威夷滑音吉他', food: '夏威夷饭与芋泥', landmark: '夏威夷火山国家公园',
      figure: '杜克·卡哈纳莫库',
      desc: '草裙、滑音吉他与“阿罗哈精神”；火山仍在生长，冲浪在这里从王室运动变成世界语言。'
    }
  },

  corridors: [
    {
      id: 'blues', name: '蓝调与灵魂之路', en: 'Blues & Soul Highway',
      states: ['MS', 'LA', 'TN', 'MO', 'IL', 'AL'],
      desc: '从三角洲的十字路口出发，沿 61 号公路北上孟菲斯，再一路唱进芝加哥。'
    },
    {
      id: 'route66', name: '66 号公路', en: 'Route 66',
      states: ['IL', 'MO', 'KS', 'OK', 'TX', 'NM', 'AZ', 'CA'],
      desc: '“母亲之路”从芝加哥直达圣莫尼卡，横穿八个州，也横穿整个二十世纪。'
    },
    {
      id: 'appalachia', name: '阿巴拉契亚民谣线', en: 'Appalachian Songline',
      states: ['WV', 'VA', 'NC', 'TN', 'KY'],
      desc: '班卓琴与山歌沿着阿巴拉契亚山脊流传，煤矿、教堂与木屋是它的和声。'
    },
    {
      id: 'pacific', name: '太平洋岸线', en: 'Pacific Edge',
      states: ['WA', 'OR', 'CA', 'HI'],
      desc: '咖啡、垃圾摇滚、冲浪与科技公司，一同朝向太平洋的风。'
    },
    {
      id: 'newengland', name: '新英格兰文脉', en: 'New England Letters',
      states: ['ME', 'NH', 'VT', 'MA', 'RI', 'CT'],
      desc: '从“五月花”到爱默生、狄金森与马克·吐温，美国的书页从这里翻开。'
    },
    {
      id: 'borderlands', name: '西语边境文化', en: 'Borderlands',
      states: ['TX', 'NM', 'AZ', 'CA', 'CO', 'NV'],
      desc: '绿辣椒、土坯房与西班牙语地名，构成一条从德州延伸到加州的边境文化带。'
    }
  ]
};

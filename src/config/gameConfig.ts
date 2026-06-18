import type { GameConfig } from '../types/game'

export const gameConfig: GameConfig = {
  title: '恋爱物语',
  initialResources: 100,
  maxActionsPerDay: 3,
  daysPerWeek: 7,
  maxAffinity: 100,
  minAffinity: -50,
  maxMood: 100,
  minMood: 0,
  moodDecayPerDay: 5,
  affinityDecayPerDay: 1,
  timeSlots: ['morning', 'afternoon', 'evening', 'night'],

  characters: [
    {
      id: 'linxiaoyu',
      name: '林小雨',
      avatar: '🌸',
      description: '温柔善良的图书馆管理员，喜欢读书和花草',
      personality: '温柔内向，有些害羞，但对喜欢的事物非常热情',
      favoriteGifts: ['flower', 'book', 'tea'],
      dislikedGifts: ['alcohol', 'game_console'],
      chatTopics: [
        { topic: '文学', affinity: 3 },
        { topic: '花草', affinity: 3 },
        { topic: '天气', affinity: 1 },
        { topic: '游戏', affinity: -1 },
        { topic: '运动', affinity: 0 }
      ],
      baseAffinity: 10,
      baseMood: 60,
      unlocked: true
    },
    {
      id: 'sufei',
      name: '苏菲',
      avatar: '🔥',
      description: '活泼开朗的咖啡馆女老板，热爱烘焙',
      personality: '热情外向，有点毒舌但内心温柔',
      favoriteGifts: ['coffee', 'dessert', 'game_console'],
      dislikedGifts: ['flower', 'book'],
      chatTopics: [
        { topic: '美食', affinity: 3 },
        { topic: '游戏', affinity: 3 },
        { topic: '天气', affinity: 1 },
        { topic: '文学', affinity: -1 },
        { topic: '运动', affinity: 2 }
      ],
      baseAffinity: 5,
      baseMood: 70,
      unlocked: true
    },
    {
      id: 'yeqing',
      name: '叶青',
      avatar: '🌙',
      description: '神秘的转学生，总是独来独往',
      personality: '冷静寡言，似乎藏着很多秘密',
      favoriteGifts: ['book', 'tea', 'music_box'],
      dislikedGifts: ['dessert', 'alcohol'],
      chatTopics: [
        { topic: '文学', affinity: 2 },
        { topic: '音乐', affinity: 3 },
        { topic: '天气', affinity: 0 },
        { topic: '游戏', affinity: 1 },
        { topic: '运动', affinity: -1 }
      ],
      baseAffinity: 0,
      baseMood: 50,
      unlocked: false,
      hidden: true,
      unlockCondition: 'unlock_yeqing'
    }
  ],

  gifts: [
    { id: 'flower', name: '鲜花', price: 30, icon: '🌹', description: '一束美丽的鲜花' },
    { id: 'book', name: '小说', price: 25, icon: '📚', description: '一本畅销小说' },
    { id: 'tea', name: '茶叶', price: 40, icon: '🍵', description: '上等的茶叶礼盒' },
    { id: 'coffee', name: '咖啡豆', price: 35, icon: '☕', description: '精品咖啡豆' },
    { id: 'dessert', name: '甜点', price: 20, icon: '🍰', description: '精致的手工甜点' },
    { id: 'game_console', name: '游戏机', price: 80, icon: '🎮', description: '最新款掌上游戏机' },
    { id: 'alcohol', name: '红酒', price: 60, icon: '🍷', description: '一瓶高档红酒' },
    { id: 'music_box', name: '音乐盒', price: 50, icon: '🎵', description: '精致的八音盒' }
  ],

  cards: [
    { id: 'linxiaoyu_common_1', name: '图书馆的邂逅', characterId: 'linxiaoyu', rarity: 'common', image: '📖', description: '第一次在图书馆见到小雨的场景', unlockCondition: 'meet_linxiaoyu' },
    { id: 'linxiaoyu_rare_1', name: '花田中', characterId: 'linxiaoyu', rarity: 'rare', image: '🌻', description: '小雨在花田中微笑的样子', unlockCondition: 'linxiaoyu_affinity_40' },
    { id: 'linxiaoyu_epic_1', name: '雨中伞', characterId: 'linxiaoyu', rarity: 'epic', image: '☂️', description: '一起在雨中撑伞回家', unlockCondition: 'linxiaoyu_affinity_70' },
    { id: 'linxiaoyu_legendary_1', name: '告白', characterId: 'linxiaoyu', rarity: 'legendary', image: '💝', description: '樱花树下的告白', unlockCondition: 'linxiaoyu_affinity_100' },
    { id: 'sufei_common_1', name: '咖啡馆的相遇', characterId: 'sufei', rarity: 'common', image: '☕', description: '第一次走进苏菲的咖啡馆', unlockCondition: 'meet_sufei' },
    { id: 'sufei_rare_1', name: '烘焙时光', characterId: 'sufei', rarity: 'rare', image: '🧁', description: '苏菲教你做蛋糕', unlockCondition: 'sufei_affinity_40' },
    { id: 'sufei_epic_1', name: '深夜游戏', characterId: 'sufei', rarity: 'epic', image: '🎮', description: '一起打游戏到深夜', unlockCondition: 'sufei_affinity_70' },
    { id: 'sufei_legendary_1', name: '夕阳下的吻', characterId: 'sufei', rarity: 'legendary', image: '🌅', description: '咖啡馆关门前的浪漫时刻', unlockCondition: 'sufei_affinity_100' },
    { id: 'yeqing_common_1', name: '月下身影', characterId: 'yeqing', rarity: 'common', image: '🌙', description: '月光下独自散步的叶青', unlockCondition: 'meet_yeqing' },
    { id: 'yeqing_rare_1', name: '琴音缭绕', characterId: 'yeqing', rarity: 'rare', image: '🎹', description: '叶青弹奏钢琴的样子', unlockCondition: 'yeqing_affinity_40' }
  ],

  events: [
    {
      id: 'intro_linxiaoyu',
      title: '图书馆的邂逅',
      description: '你在图书馆寻找一本书时，一位温柔的女生帮你找到了它。她叫林小雨，是这里的管理员。',
      characterId: 'linxiaoyu',
      triggerCondition: { minDay: 1, maxDay: 1, timeOfDay: 'morning' },
      choices: [
        {
          id: 'thankful',
          text: '道谢并和她聊聊天',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 5, moodChange: 10 }],
          addCardId: 'linxiaoyu_common_1'
        },
        {
          id: 'hurry',
          text: '道谢后匆匆离开',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 2 }]
        }
      ],
      once: true,
      priority: 100
    },
    {
      id: 'intro_sufei',
      title: '咖啡馆的偶遇',
      description: '你走进一家新开的咖啡馆，热情的女老板苏菲立刻迎了上来。"欢迎光临！今天想来点什么？"',
      characterId: 'sufei',
      triggerCondition: { minDay: 1, maxDay: 2, timeOfDay: 'afternoon' },
      choices: [
        {
          id: 'coffee',
          text: '点一杯招牌咖啡',
          effects: [{ characterId: 'sufei', affinityChange: 5, moodChange: 10 }],
          resourceChange: -10,
          addCardId: 'sufei_common_1'
        },
        {
          id: 'dessert',
          text: '点一份甜点尝尝',
          effects: [{ characterId: 'sufei', affinityChange: 7, moodChange: 15 }],
          resourceChange: -20
        }
      ],
      once: true,
      priority: 99
    },
    {
      id: 'rainy_day_1',
      title: '突如其来的暴雨',
      description: '天空突然下起了大雨，你看到林小雨站在屋檐下，似乎没带伞。',
      characterId: 'linxiaoyu',
      triggerCondition: { minDay: 3, timeOfDay: 'evening', minAffinity: 20, characterId: 'linxiaoyu' },
      choices: [
        {
          id: 'share_umbrella',
          text: '把伞借给她',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 15, moodChange: 20 }]
        },
        {
          id: 'wait_together',
          text: '陪她等雨停',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 10, moodChange: 10 }]
        },
        {
          id: 'leave',
          text: '假装没看到走开',
          effects: [{ characterId: 'linxiaoyu', affinityChange: -5, moodChange: -10 }]
        }
      ],
      once: true,
      priority: 90
    },
    {
      id: 'cafe_late_night',
      title: '深夜咖啡馆',
      description: '你路过咖啡馆，发现灯还亮着。苏菲一个人在店里，看起来有些疲惫。',
      characterId: 'sufei',
      triggerCondition: { minDay: 5, timeOfDay: 'night', minAffinity: 30, characterId: 'sufei' },
      choices: [
        {
          id: 'help',
          text: '进去帮帮忙',
          effects: [{ characterId: 'sufei', affinityChange: 12, moodChange: 15 }],
          resourceChange: -5
        },
        {
          id: 'company',
          text: '点杯咖啡陪陪她',
          effects: [{ characterId: 'sufei', affinityChange: 8, moodChange: 10 }],
          resourceChange: -15
        },
        {
          id: 'ignore',
          text: '不打扰她了',
          effects: [{ characterId: 'sufei', affinityChange: -3 }]
        }
      ],
      once: true,
      priority: 85
    },
    {
      id: 'mysterious_girl',
      title: '神秘的转学生',
      description: '在公园的角落里，你看到一个安静的女生独自坐在长椅上。她似乎注意到了你，微微点了点头。',
      characterId: 'yeqing',
      triggerCondition: { minDay: 7, minAffinity: 40 },
      choices: [
        {
          id: 'approach',
          text: '上前打招呼',
          effects: [
            { characterId: 'yeqing', affinityChange: 5 },
            { characterId: 'linxiaoyu', affinityChange: -3 },
            { characterId: 'sufei', affinityChange: -3 }
          ],
          unlockCharacterId: 'yeqing',
          addCardId: 'yeqing_common_1'
        },
        {
          id: 'leave_quietly',
          text: '悄悄离开',
          effects: []
        }
      ],
      once: true,
      priority: 80
    },
    {
      id: 'birthday_surprise_1',
      title: '小雨的生日',
      description: '你想起今天是林小雨的生日，要准备什么惊喜吗？',
      characterId: 'linxiaoyu',
      triggerCondition: { minDay: 14, minAffinity: 50, characterId: 'linxiaoyu' },
      choices: [
        {
          id: 'big_surprise',
          text: '准备一个大惊喜',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 25, moodChange: 30 }],
          resourceChange: -50
        },
        {
          id: 'small_gift',
          text: '送一个小礼物',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 10, moodChange: 15 }],
          resourceChange: -20
        },
        {
          id: 'forget',
          text: '算了，假装不知道',
          effects: [{ characterId: 'linxiaoyu', affinityChange: -10, moodChange: -20 }]
        }
      ],
      once: true,
      priority: 95
    },
    {
      id: 'conflict_1',
      title: '两人的邀约',
      description: '林小雨和苏菲同时邀请你周末出去，你该怎么办？',
      triggerCondition: { minDay: 10, minAffinity: 35 },
      choices: [
        {
          id: 'choose_xiaoyu',
          text: '答应小雨',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: 10, moodChange: 15 },
            { characterId: 'sufei', affinityChange: -8, moodChange: -10 }
          ]
        },
        {
          id: 'choose_sufei',
          text: '答应苏菲',
          effects: [
            { characterId: 'sufei', affinityChange: 10, moodChange: 15 },
            { characterId: 'linxiaoyu', affinityChange: -8, moodChange: -10 }
          ]
        },
        {
          id: 'reject_both',
          text: '都拒绝，说有事',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: -3 },
            { characterId: 'sufei', affinityChange: -3 }
          ]
        },
        {
          id: 'suggest_together',
          text: '建议三个人一起',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: -2 },
            { characterId: 'sufei', affinityChange: -2 }
          ]
        }
      ],
      once: true,
      priority: 88
    },
    {
      id: 'recovery_linxiaoyu',
      title: '沉默的图书馆',
      description: '林小雨已经好几天没和你说一句话了。今天你去图书馆还书，她接过书时甚至没看你一眼。你注意到她的眼眶有些微红……',
      characterId: 'linxiaoyu',
      triggerCondition: { minDay: 5, maxAffinity: 10, characterId: 'linxiaoyu', isRecovery: true },
      choices: [
        {
          id: 'apologize_sincerely',
          text: '诚恳地道歉，说"我做得不好，对不起"',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 12, moodChange: 8 }],
          nextEventId: 'recovery_linxiaoyu_accept'
        },
        {
          id: 'write_letter',
          text: '写一封信夹在书里还给她',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 8, moodChange: 5 }],
          nextEventId: 'recovery_linxiaoyu_letter'
        },
        {
          id: 'give_space',
          text: '默默离开，给她空间',
          effects: [{ characterId: 'linxiaoyu', affinityChange: -2, moodChange: -5 }]
        }
      ],
      once: true,
      priority: 70
    },
    {
      id: 'recovery_linxiaoyu_accept',
      title: '小雨的眼泪',
      description: '林小雨终于抬起头看着你，眼里闪着泪光。"你终于说了……"她深吸一口气，"其实我一直在等你说这句话。"',
      characterId: 'linxiaoyu',
      triggerCondition: { requiredFlags: [], characterId: 'linxiaoyu' },
      choices: [
        {
          id: 'hold_hands',
          text: '轻轻握住她的手，说"以后不会再让你等了"',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 15, moodChange: 20 }],
          addCardId: 'linxiaoyu_rare_1'
        },
        {
          id: 'promise_change',
          text: '承诺会改，请求她再给一次机会',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 10, moodChange: 12 }]
        }
      ],
      once: true,
      priority: 70
    },
    {
      id: 'recovery_linxiaoyu_letter',
      title: '夹在书里的回信',
      description: '第二天你再去图书馆时，发现桌上有一本书，里面夹着一封信。是林小雨的笔迹："你的信我看了……放学后，花坛见。"',
      characterId: 'linxiaoyu',
      triggerCondition: { characterId: 'linxiaoyu' },
      choices: [
        {
          id: 'go_to_flowerbed',
          text: '准时赴约',
          effects: [{ characterId: 'linxiaoyu', affinityChange: 18, moodChange: 15 }],
          addCardId: 'linxiaoyu_rare_1'
        },
        {
          id: 'too_nervous',
          text: '犹豫不决，最终没去',
          effects: [{ characterId: 'linxiaoyu', affinityChange: -5, moodChange: -10 }]
        }
      ],
      once: true,
      priority: 70
    },
    {
      id: 'recovery_sufei',
      title: '冷清的咖啡馆',
      description: '苏菲的咖啡馆里今天冷冷清清。她看到你进来，只是面无表情地擦着杯子。"你还有脸来啊？"语气虽然带刺，但你听出她声音里有一丝颤抖。',
      characterId: 'sufei',
      triggerCondition: { minDay: 5, maxAffinity: 10, characterId: 'sufei', isRecovery: true },
      choices: [
        {
          id: 'order_patiently',
          text: '安静坐下点杯咖啡，不急不躁',
          effects: [{ characterId: 'sufei', affinityChange: 10, moodChange: 8 }],
          nextEventId: 'recovery_sufei_warm'
        },
        {
          id: 'help_cleanup',
          text: '主动帮忙收拾店里的东西',
          effects: [{ characterId: 'sufei', affinityChange: 14, moodChange: 10 }],
          nextEventId: 'recovery_sufei_sweet'
        },
        {
          id: 'argue_back',
          text: '不服气地反驳她',
          effects: [{ characterId: 'sufei', affinityChange: -8, moodChange: -15 }]
        }
      ],
      once: true,
      priority: 70
    },
    {
      id: 'recovery_sufei_warm',
      title: '咖啡的温度',
      description: '苏菲给你端来一杯咖啡，虽然嘴上还在嘟囔"才不是特意给你做的"，但杯子上面画着一个歪歪扭扭的笑脸。你喝了一口，是她最拿手的特调。',
      characterId: 'sufei',
      triggerCondition: { characterId: 'sufei' },
      choices: [
        {
          id: 'thank_sincerely',
          text: '笑着说"这是我喝过最好喝的咖啡"',
          effects: [{ characterId: 'sufei', affinityChange: 15, moodChange: 18 }],
          addCardId: 'sufei_rare_1'
        },
        {
          id: 'ask_forgive',
          text: '认真地说"对不起，以前是我不好"',
          effects: [{ characterId: 'sufei', affinityChange: 12, moodChange: 12 }]
        }
      ],
      once: true,
      priority: 70
    },
    {
      id: 'recovery_sufei_sweet',
      title: '甜蜜的和解',
      description: '苏菲看着你笨手笨脚地收拾桌椅，嘴角终于忍不住微微上扬。"行了行了，别越帮越忙了！"她塞给你一块刚出炉的蛋糕，"这可是最后的了，别浪费。"',
      characterId: 'sufei',
      triggerCondition: { characterId: 'sufei' },
      choices: [
        {
          id: 'share_cake',
          text: '提议一起分享这块蛋糕',
          effects: [{ characterId: 'sufei', affinityChange: 18, moodChange: 20 }],
          addCardId: 'sufei_rare_1'
        },
        {
          id: 'praise_cake',
          text: '大口吃掉并使劲夸赞',
          effects: [{ characterId: 'sufei', affinityChange: 12, moodChange: 15 }]
        }
      ],
      once: true,
      priority: 70
    },
    {
      id: 'recovery_yeqing',
      title: '月光下的背影',
      description: '叶青在公园的长椅上，背对着你。月光洒在她身上，她似乎在低声哼着一首旋律。你走近时，她头也没回："我以为你不会再来了。"',
      characterId: 'yeqing',
      triggerCondition: { minDay: 10, maxAffinity: 5, characterId: 'yeqing', isRecovery: true },
      choices: [
        {
          id: 'sit_quietly',
          text: '安静地坐在她旁边，什么都不说',
          effects: [{ characterId: 'yeqing', affinityChange: 10, moodChange: 8 }],
          nextEventId: 'recovery_yeqing_melody'
        },
        {
          id: 'ask_about_song',
          text: '问她哼的是什么曲子',
          effects: [{ characterId: 'yeqing', affinityChange: 8, moodChange: 10 }],
          nextEventId: 'recovery_yeqing_melody'
        },
        {
          id: 'try_explain',
          text: '急着解释自己为什么冷落了她',
          effects: [{ characterId: 'yeqing', affinityChange: -3, moodChange: -5 }]
        }
      ],
      once: true,
      priority: 70
    },
    {
      id: 'recovery_yeqing_melody',
      title: '未完的旋律',
      description: '沉默了许久，叶青终于开口："这首曲子……是我妈妈教我的。她说，如果你在乎一个人，即使不说出来，旋律也会传达。"她轻轻弹了弹长椅扶手，仿佛那里有一架看不见的钢琴。',
      characterId: 'yeqing',
      triggerCondition: { characterId: 'yeqing' },
      choices: [
        {
          id: 'listen_silently',
          text: '安静地听她继续哼唱',
          effects: [{ characterId: 'yeqing', affinityChange: 15, moodChange: 12 }],
          addCardId: 'yeqing_rare_1'
        },
        {
          id: 'hum_along',
          text: '试着跟着哼唱',
          effects: [{ characterId: 'yeqing', affinityChange: 12, moodChange: 15 }]
        }
      ],
      once: true,
      priority: 70
    },
    {
      id: 'recovery_resources',
      title: '意外的转机',
      description: '你正在为手头的拮据发愁时，一个穿着考究的人走过来："年轻人，我观察你很久了。你看起来是个认真的人——我这儿有个短期兼职，报酬丰厚，你有没有兴趣？"',
      triggerCondition: { minDay: 3, maxResources: 30, isRecovery: true },
      choices: [
        {
          id: 'accept_job',
          text: '接受兼职机会',
          effects: [],
          resourceChange: 60,
          nextEventId: 'recovery_resources_consequence'
        },
        {
          id: 'decline_job',
          text: '婉拒，觉得来路不明',
          effects: [],
          resourceChange: 0
        },
        {
          id: 'ask_details',
          text: '先问清楚是什么工作',
          effects: [],
          nextEventId: 'recovery_resources_detail'
        }
      ],
      once: true,
      priority: 75
    },
    {
      id: 'recovery_resources_consequence',
      title: '兼职的代价',
      description: '兼职工作比想象中辛苦，你忙了一整天才完成。虽然赚到了钱，但角色们发现你一整天都不在，似乎有些在意……',
      choices: [
        {
          id: 'explain_work',
          text: '解释自己最近在努力赚钱',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: 5, moodChange: 3 },
            { characterId: 'sufei', affinityChange: 5, moodChange: 3 }
          ]
        },
        {
          id: 'treat_friends',
          text: '用赚来的钱请她们吃东西',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: 8, moodChange: 10 },
            { characterId: 'sufei', affinityChange: 8, moodChange: 10 }
          ],
          resourceChange: -30
        },
        {
          id: 'keep_quiet',
          text: '什么都不说，默默把钱收好',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: -2 },
            { characterId: 'sufei', affinityChange: -2 }
          ]
        }
      ],
      once: true,
      priority: 70
    },
    {
      id: 'recovery_resources_detail',
      title: '兼职的真相',
      description: '"其实是帮一个老朋友打理花店，"那人笑了笑，"最近店里人手不够。工资日结，绝不拖欠。"听起来是份靠谱的工作。',
      choices: [
        {
          id: 'accept_flower_shop',
          text: '接受花店兼职',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: 5, moodChange: 5 }
          ],
          resourceChange: 45
        },
        {
          id: 'still_decline',
          text: '还是婉拒了',
          effects: []
        }
      ],
      once: true,
      priority: 70
    },
    {
      id: 'crisis_double',
      title: '风雨飘摇',
      description: '代币见底，身边的人都对你冷淡……你独自坐在公园的长椅上，看着夕阳西下。这时，一个意想不到的人朝你走了过来——"嘿，你还好吗？"',
      triggerCondition: { minDay: 8, maxResources: 20, isRecovery: true },
      choices: [
        {
          id: 'open_up',
          text: '倾诉最近的困境',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: 8, moodChange: 10 },
            { characterId: 'sufei', affinityChange: 8, moodChange: 10 }
          ],
          resourceChange: 25,
          nextEventId: 'crisis_double_warmth'
        },
        {
          id: 'say_fine',
          text: '"没事，我很好"',
          effects: [],
          resourceChange: 10
        }
      ],
      once: true,
      priority: 95
    },
    {
      id: 'crisis_double_warmth',
      title: '温暖的回应',
      description: '你把心里话说了出来。那个人拍了拍你的肩膀："谁都有低谷的时候，重要的是别放弃。"接着，几个人围了过来——她们不知道什么时候出现的，但眼神里都带着关切。',
      choices: [
        {
          id: 'accept_help',
          text: '感激地接受大家的帮助',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: 12, moodChange: 15 },
            { characterId: 'sufei', affinityChange: 12, moodChange: 15 }
          ],
          resourceChange: 35
        },
        {
          id: 'self_reliant',
          text: '道谢，但表示想靠自己站起来',
          effects: [
            { characterId: 'linxiaoyu', affinityChange: 5, moodChange: 8 },
            { characterId: 'sufei', affinityChange: 5, moodChange: 8 }
          ],
          resourceChange: 15
        }
      ],
      once: true,
      priority: 90
    }
  ],

  actions: [
    { type: 'chat', name: '聊天', icon: '💬', description: '和角色聊聊天，增进感情', energyCost: 1 },
    { type: 'gift', name: '送礼', icon: '🎁', description: '送礼物给角色，效果因人而异', energyCost: 1 },
    { type: 'work', name: '打工', icon: '💼', description: '辛苦工作赚取代币', energyCost: 2 }
  ],

  workRewards: { min: 15, max: 35 }
}

export default gameConfig

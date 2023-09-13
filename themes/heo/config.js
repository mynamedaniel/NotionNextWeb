const CONFIG = {
  HOME_BANNER_ENABLE: true,

  SITE_CREATE_TIME: '2023-04-15', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://xuzheblog.com' },
    { title: '欢迎下载iOS应用：心事便利店', url: 'https://apps.apple.com/us/app/%E5%BF%83%E4%BA%8B%E4%BE%BF%E5%88%A9%E5%BA%97/id6463860072' }
  ],

  // 英雄区(首页顶部大卡)
  HERO_TITLE_1: '数据',
  HERO_TITLE_2: '与生活',
  HERO_TITLE_3: 'XUZHEBLOG.COM',
  HERO_TITLE_4: '经典好文',
  HERO_TITLE_5: '数据分析师的自我修养',
  HERO_TITLE_LINK: 'https://www.xuzheblog.com/article/340027af-0364-46f5-b2a3-f7807ada37aa',

  // 英雄区显示三个置顶分类
  HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门文章' },
  HERO_CATEGORY_3: { title: '实用教程', url: '/tag/实用教程' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HERO_RECOMMEND_POST_TAG: '必看精选',
  HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: true, // 推荐文章排序，为`true`时将强制按最后修改时间倒序

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 Cookiepapa',
    '📊 数据分析师',
    '💻 独立开发者',
    '👶 前全职奶爸',
    '🐶 铲屎官X2',
    '🏋️‍♀️ 棒铃爱好者',
    '📖 终身学习者',
    '😋 保守主义者',
    '🌲 长期主义者',
  ],
  INFO_CARD_URL: 'https://xuzheblog.com', // 个人资料底部按钮链接

  // 用户技能图标
  GROUP_ICONS: [
    {
      title_1: 'Python',
      img_1: '/images/heo/20235c0731cd4c0c95fc136a8db961fdf963071502.webp',
      color_1: '#ffffff',
      title_2: 'Swift',
      img_2: '/images/heo/202328bbee0b314297917b327df4a704db5c072402.webp',
      color_2: '#eb6840'
    },
    {
      title_1: 'Sql',
      img_1: '/images/heo/sql.webp',
      color_1: '#ffffff',
      title_2: 'Tableau',
      img_2: '/images/heo/tableau.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Pandas',
      img_1: '/images/heo/pandas.webp',
      color_1: '#ffffff',
      title_2: 'Scikit-learn',
      img_2: '/images/heo/scikit-learn.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'HuggingFace',
      img_1: '/images/heo/huggingface.webp',
      color_1: '#ffffff',
      title_2: 'MongoDB',
      img_2: '/images/heo/mongodb.webp',
      color_2: '#ffffff'
    },
    {
      title_1: 'Hadoop',
      img_1: '/images/heo/hadoop.webp',
      color_1: '#ffffff',
      title_2: 'Canva',
      img_2: '/images/heo/canva.webp',
      color_2: '#ffffff'
    }
  ],

  SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  SOCIAL_CARD_TITLE_1: '交流频道',
  SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  SOCIAL_CARD_TITLE_3: '点击加入社群',
  SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  MENU_INDEX: true, // 显示首页
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: true, // 显示搜索

  POST_LIST_COVER: true, // 列表显示文章封面
  POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  POST_LIST_SUMMARY: true, // 文章摘要
  POST_LIST_PREVIEW: false, // 读取文章预览
  POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  ARTICLE_RECOMMEND: true, // 文章关联推荐

  WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  WIDGET_ANALYTICS: false, // 显示统计卡
  WIDGET_TO_TOP: true,
  WIDGET_TO_COMMENT: true, // 跳到评论区
  WIDGET_DARK_MODE: true, // 夜间模式
  WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG

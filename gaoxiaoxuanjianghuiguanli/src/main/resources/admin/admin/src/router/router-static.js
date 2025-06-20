import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dangqianqingkuang from '@/views/modules/dangqianqingkuang/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import gongsi from '@/views/modules/gongsi/list'
    import news from '@/views/modules/news/list'
    import xuanjianghui from '@/views/modules/xuanjianghui/list'
    import xuanjianghuiCollection from '@/views/modules/xuanjianghuiCollection/list'
    import xuanjianghuiYuyue from '@/views/modules/xuanjianghuiYuyue/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryDangqianqingkuang from '@/views/modules/dictionaryDangqianqingkuang/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryGongsi from '@/views/modules/dictionaryGongsi/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryXianxia from '@/views/modules/dictionaryXianxia/list'
    import dictionaryXuanjianghui from '@/views/modules/dictionaryXuanjianghui/list'
    import dictionaryXuanjianghuiCollection from '@/views/modules/dictionaryXuanjianghuiCollection/list'
    import dictionaryXuanjianghuiYesno from '@/views/modules/dictionaryXuanjianghuiYesno/list'
    import dictionaryXueyuan from '@/views/modules/dictionaryXueyuan/list'
    import dictionaryZhuanye from '@/views/modules/dictionaryZhuanye/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryDangqianqingkuang',
        name: '就业状态',
        component: dictionaryDangqianqingkuang
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryGongsi',
        name: '企业类型',
        component: dictionaryGongsi
    }
    ,{
        path: '/dictionaryNews',
        name: '公告信息类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryXianxia',
        name: '线下面试',
        component: dictionaryXianxia
    }
    ,{
        path: '/dictionaryXuanjianghui',
        name: '宣讲会类型',
        component: dictionaryXuanjianghui
    }
    ,{
        path: '/dictionaryXuanjianghuiCollection',
        name: '收藏表类型',
        component: dictionaryXuanjianghuiCollection
    }
    ,{
        path: '/dictionaryXuanjianghuiYesno',
        name: '审核状态',
        component: dictionaryXuanjianghuiYesno
    }
    ,{
        path: '/dictionaryXueyuan',
        name: '学院',
        component: dictionaryXueyuan
    }
    ,{
        path: '/dictionaryZhuanye',
        name: '专业',
        component: dictionaryZhuanye
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dangqianqingkuang',
        name: '就业情况',
        component: dangqianqingkuang
      }
    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '论坛',
        component: forum
      }
    ,{
        path: '/gongsi',
        name: '企业',
        component: gongsi
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/xuanjianghui',
        name: '宣讲会',
        component: xuanjianghui
      }
    ,{
        path: '/xuanjianghuiCollection',
        name: '宣讲会收藏',
        component: xuanjianghuiCollection
      }
    ,{
        path: '/xuanjianghuiYuyue',
        name: '宣讲会报名',
        component: xuanjianghuiYuyue
      }
    ,{
        path: '/yonghu',
        name: '学生',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;

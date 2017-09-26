import Vue from 'vue'
import Router from 'vue-router'

import Account from '../components/account/account.vue'
import DiscoverMusic from '../components/discoverMusic/discoverMusic.vue'
import MyMusic from '../components/myMusic/myMusic.vue'
import HotMusic from '../components/discoverMusic/hotMusic.vue'
import RecommendedMusic from '../components/discoverMusic/recommendedMusic'

Vue.use(Router)

const routes = [{
  path: '/account',
  name: 'Account',
  component: Account
},
{
  path: '/discoverMusic',
  name: 'DiscoverMusic',
  component: DiscoverMusic,
  redirect: '/discoverMusic/recommendedMusic',
  children: [
    {
      path: '/discoverMusic/recommendedMusic',
      component: RecommendedMusic
    },
    {
      path: '/discoverMusic/hotMusic',
      component: HotMusic
    }
  ]
},
{
  path: '/myMusic',
  name: 'MyMusic',
  component: MyMusic
}
]

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: routes,
  linkActiveClass: 'active'
})

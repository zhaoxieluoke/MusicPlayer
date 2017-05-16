import Vue from 'vue'
import Router from 'vue-router'
import pop from '@/components/pop'
import rock from '@/components/rock'
import eltrc from '@/components/eltrc'
Vue.use(Router)

const User = {
  template: `
    <div class="user">
      
      <router-view></router-view>
    </div>
  `
}



export default new Router({
  routes: [
    { path: '/music/:id', component: User,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        { path: '', component: User },
        { path: 'pop', component: pop },
				
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        { path: 'rock', component: rock },

        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        { path: 'eltrc', component: eltrc }
      ]
    }
  ]
})

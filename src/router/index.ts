import { createRouter, createWebHistory } from 'vue-router'

import SigninView from '@/views/Authentication/SigninView.vue'
import SignupView from '@/views/Authentication/SignupView.vue'
import CalendarView from '@/views/CalendarView.vue'
import BasicChartView from '@/views/Charts/BasicChartView.vue'
import ECommerceView from '@/views/Dashboard/ECommerceView.vue'
import ClientsList from '@/views/Clients/ClientsList.vue'
import AddClient from '@/views/Clients/AddClient.vue'
import InTransit from '@/views/Deliveries/InTransit.vue'
import AddDelivery from '@/views/Deliveries/AddDelivery.vue'
import Pending from '@/views/Deliveries/Pending.vue'
import Delivered from '@/views/Deliveries/Delivered.vue'
import FormElementsView from '@/views/Forms/FormElementsView.vue'
import FormLayoutView from '@/views/Forms/FormLayoutView.vue'
import SettingsView from '@/views/Pages/SettingsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import TablesView from '@/views/TablesView.vue'
import AlertsView from '@/views/UiElements/AlertsView.vue'
import ButtonsView from '@/views/UiElements/ButtonsView.vue'

const routes = [
  {
    path: '/deliveries/intransit',
    name: 'inTransit',
    component: InTransit,
    meta: {
      title: 'InTransit'
    }
  },
  {
    path: '/deliveries/pending',
    name: 'pending',
    component: Pending,
    meta: {
      title: 'Pending Deliveries'
    }
  },
  {
    path: '/deliveries/delivered',
    name: 'delivered',
    component: Delivered,
    meta: {
      title: 'Delivered Items'
    }
  },
  {
    path: '/deliveries/add',
    name: 'addDelivery',
    component: AddDelivery,
    meta: {
      title: 'Add Delivery Form'
    }
  },

  {
    path: '/clients/list',
    name: 'clientsList',
    component: ClientsList,
    meta: {
      title: 'Clients List'
    }
  },
  {
    path: '/clients/add',
    name: 'addClient',
    component: AddClient,
    meta: {
      title: 'Add Client'
    }
  },
  {
    path: '/',
    name: 'eCommerce',
    component: ECommerceView,
    meta: {
      title: 'eCommerce Dashboard'
    }
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView,
    meta: {
      title: 'Calendar'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/forms/form-elements',
    name: 'formElements',
    component: FormElementsView,
    meta: {
      title: 'Form Elements'
    }
  },
  {
    path: '/forms/form-layout',
    name: 'formLayout',
    component: FormLayoutView,
    meta: {
      title: 'Form Layout'
    }
  },
  {
    path: '/tables',
    name: 'tables',
    component: TablesView,
    meta: {
      title: 'Tables'
    }
  },
  {
    path: '/pages/settings',
    name: 'settings',
    component: SettingsView,
    meta: {
      title: 'Settings'
    }
  },
  {
    path: '/charts/basic-chart',
    name: 'basicChart',
    component: BasicChartView,
    meta: {
      title: 'Basic Chart'
    }
  },
  {
    path: '/ui-elements/alerts',
    name: 'alerts',
    component: AlertsView,
    meta: {
      title: 'Alerts'
    }
  },
  {
    path: '/ui-elements/buttons',
    name: 'buttons',
    component: ButtonsView,
    meta: {
      title: 'Buttons'
    }
  },
  {
    path: '/auth/signin',
    name: 'signin',
    component: SigninView,
    meta: {
      title: 'Signin'
    }
  },
  {
    path: '/auth/signup',
    name: 'signup',
    component: SignupView,
    meta: {
      title: 'Signup'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Prota Holdings App`
  next()
})

export default router

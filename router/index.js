import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/dashboard.vue'
import BalanceSheet from '../views/BalanceSheet.vue'
import ProfitLoss from '../views/ProfitLoss.vue'
import Rolling12 from '../views/Rolling12.vue'
import Cashflow from '../views/Cashflow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/balance-sheet',
    name: 'BalanceSheet',
    component: BalanceSheet
  },
  {
    path: '/profit-loss',
    name: 'ProfitLoss',
    component: ProfitLoss
  },
  {
    path: '/rolling-12',
    name: 'Rolling12',
    component: Rolling12
  },
  {
    path: '/cashflow',
    name: 'Cashflow',
    component: Cashflow
  }
]

const router = new VueRouter({
  routes
})

export default router
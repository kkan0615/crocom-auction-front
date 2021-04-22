import { RouteRecordRaw } from 'vue-router'
import { ProductStatusType } from '@/interfaces/model/product/status'
import GeneralLayout from '@/layouts/General/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: 'product',
    name: 'ProductLayout',
    component: GeneralLayout,
    redirect: { name: 'ProductList', query: { status: 'hot' as ProductStatusType } },
    children: [
      {
        path: 'list',
        name: 'ProductList',
        component: () => import('@/views/Home/index.vue')
      },
    ],
  },
]

export default routes
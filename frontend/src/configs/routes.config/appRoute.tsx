import { lazy } from 'react'
import { APP_PREFIX_PATH, WEB_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'
import sideNavRoutes from './sideNavRoutes'

const appRoute: Routes = [
    ...sideNavRoutes,
   
    {
        key: 'app.addartist',
        path: `${APP_PREFIX_PATH}/casestudies/add`,
        component: lazy(() => import('@/views/app/CaseStudy/CaseStudyNew')),
        authority: [ADMIN, USER],
        meta: {
            layout: 'classic'
        }
    },
    {
        key: 'app.editartist',
        path: `${APP_PREFIX_PATH}/casestudies/edit/:id`,
        component: lazy(() => import('@/views/app/CaseStudy/CaseStudyEdit')),
        authority: [ADMIN, USER],
        meta: {
            layout: 'classic'
        }
    },
    {
        key: 'app.artists',
        path: `${APP_PREFIX_PATH}/casestudies`,
        component: lazy(() => import('@/views/app/CaseStudy/CaseStudyList')),
        authority: [ADMIN, USER],
        meta: {
            layout: 'classic'
        }
    },

    {
        key: 'app.dashboard',
        path: `${APP_PREFIX_PATH}/dashboard`,
        component: lazy(() => import('@/views/app/dashboard/Dashboard')),
        authority: [ADMIN, USER],
        meta: {
            layout: 'classic'
        }
    },
]

export default appRoute

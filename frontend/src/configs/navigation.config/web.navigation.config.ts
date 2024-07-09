import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'
import { WEB_PREFIX_PATH } from '@/constants/route.constant'

// const webNavigationConfig: NavigationTree[] = [
//     {
//         key: 'web.home',
//         path: `${WEB_PREFIX_PATH}/home`,
//         title: 'Home',
//         translateKey: 'nav.home',
//         icon: '',
//         type: NAV_ITEM_TYPE_ITEM,
//         authority: [],
//         subMenu: [],
//     },
//     {
//         key: 'web.offer',
//         path: '',
//         title: 'We Offer',
//         translateKey: 'nav.offer.offer',
//         icon: '',
//         type: NAV_ITEM_TYPE_COLLAPSE,
//         authority: [],
//         subMenu: [
//             {
//                 key: 'nav.offer.websolutions',
//                 path: `${WEB_PREFIX_PATH}/offer/websolutions`,
//                 title: 'Web Solutions',
//                 translateKey: 'nav.offer.websolution',
//                 icon: '',
//                 iconSrc: '/img/web/icons/webDevelopment.png',
//                 type: NAV_ITEM_TYPE_ITEM,
//                 authority: [],
//                 subMenu: [],
//             },
//             {
//                 key: 'nav.offer.mobility',
//                 path: `${WEB_PREFIX_PATH}/offer/mobility`,
//                 title: 'Mobility',
//                 translateKey: 'nav.offer.mobility',
//                 icon: '',
//                 iconSrc: '/img/web/icons/mobility.png',

//                 type: NAV_ITEM_TYPE_ITEM,
//                 authority: [],
//                 subMenu: [],
//             },
//             {
//                 key: 'nav.offer.digitalmarketing',
//                 path: `${WEB_PREFIX_PATH}/offer/digitalmarketing`,
//                 title: 'Digital Marketing',
//                 translateKey: 'nav.offer.digitalmarketing',
//                 icon: '',
//                 iconSrc: '/img/web/icons/digitalMarketing.png',
//                 type: NAV_ITEM_TYPE_ITEM,
//                 authority: [],
//                 subMenu: [],
//             },
//             {
//                 key: 'nav.offer.design',
//                 path: `${WEB_PREFIX_PATH}/offer/design`,
//                 title: 'Design',
//                 translateKey: 'nav.offer.design',
//                 icon: '',
//                 iconSrc: '/img/web/icons/desiging.png',

//                 type: NAV_ITEM_TYPE_ITEM,
//                 authority: [],
//                 subMenu: [],
//             },
//             {
//                 key: 'nav.offer.branding',
//                 path: `${WEB_PREFIX_PATH}/offer/branding`,
//                 title: 'Branding',
//                 translateKey: 'nav.offer.branding',
//                 icon: '',
//                 iconSrc: '/img/web/icons/branding.png',

//                 type: NAV_ITEM_TYPE_ITEM,
//                 authority: [],
//                 subMenu: [],
//             },
//             {
//                 key: 'nav.offer.buisnessintelligence',
//                 path: `${WEB_PREFIX_PATH}/offer/buisnessintelligence`,
//                 title: 'Buisness Intelligence',
//                 translateKey: 'nav.offer.buisnessintelligence',
//                 icon: '',
//                 iconSrc: '/img/web/icons/businessIntelligence.png',

//                 type: NAV_ITEM_TYPE_ITEM,
//                 authority: [],
//                 subMenu: [],
//             },
//         ],
//     },
//     {
//         key: 'web.engines',
//         path: '',
//         title: 'Engines',
//         translateKey: 'nav.engines.engines',
//         icon: '',
//         type: NAV_ITEM_TYPE_COLLAPSE,
//         authority: [],
//         subMenu: [
//             {
//                 key: 'nav.engines.maxxscoretm',
//                 path: 'https://maxxscore.com',
//                 title: 'MaxxScore',
//                 translateKey: 'nav.engines.maxxscoretm',
//                 icon: '',
//                 iconSrc: '/img/web/icons/maxxScore.png',
//                 isExternalLink:true,
//                 type: NAV_ITEM_TYPE_ITEM,
//                 authority: [],
//                 subMenu: [],
//             },
//             {
//                 key: 'nav.engines.maxxcampaigntm',
//                 path: 'https://maxxcampaign.net',
//                 title: 'MaxxCampaign',
//                 translateKey: 'nav.engines.maxxcampaigntm',
//                 icon: '',
//                 iconSrc: '/img/web/icons/maxxCampaign.png',
//                 isExternalLink:true,
//                 type: NAV_ITEM_TYPE_ITEM,
//                 authority: [],
//                 subMenu: [],
//             },
//             {
//                 key: 'nav.engines.mxxtrxtm',
//                 path: 'https://mxxtrx.com',
//                 title: 'MxxTrx',
//                 translateKey: 'nav.engines.mxxtrxtm',
//                 icon: '',
//                 iconSrc: '/img/web/icons/maxxTrx.png',
//                 isExternalLink:true,
//                 type: NAV_ITEM_TYPE_ITEM,
//                 authority: [],
//                 subMenu: [],
//             },
//             {
//                 key: 'nav.engines.maxxresponsetm',
//                 path: 'https://maxxresponse.com',
//                 title: 'MaxxResponse',
//                 translateKey: 'nav.engines.maxxresponsetm',
//                 icon: '',
//                 iconSrc: '/img/web/icons/maxxResponse.png',
//                 isExternalLink:true,
//                 type: NAV_ITEM_TYPE_ITEM,
//                 authority: [],
//                 subMenu: [],
//             },
//             {
//                 key: 'nav.engines.maxxifitm',
//                 path: 'https://maxxifi.com',
//                 title: 'MaxxiFi',
//                 translateKey: 'nav.engines.maxxifitm',
//                 icon: '',
//                 iconSrc: '/img/web/icons/maxxIfi.png',
//                 isExternalLink:true,
//                 type: NAV_ITEM_TYPE_ITEM,
//                 authority: [],
//                 subMenu: [],
//             },
//         ],
//     },
//     {
//         key: 'web.company',
//         path: '',
//         title: 'Company',
//         translateKey: 'nav.company.company',
//         icon: '',
//         type: NAV_ITEM_TYPE_COLLAPSE,
//         authority: [],
//         subMenu: [
//             {
//                 key: 'nav.company.aboutus',
//                 path: `${WEB_PREFIX_PATH}/company/aboutus`,
//                 title: 'About Us',
//                 translateKey: 'nav.company.aboutus',
//                 icon: '',
//                 iconSrc: '/img/web/icons/about.png',
//                 type: NAV_ITEM_TYPE_ITEM,
//                 authority: [],
//                 subMenu: [],
//             },
//             {
//                 key: 'nav.company.blog',
//                 path: `${WEB_PREFIX_PATH}/company/blog`,
//                 title: 'Blog',
//                 translateKey: 'nav.company.blog',
//                 icon: '',
//                 iconSrc: '/img/web/icons/blog.png',
//                 type: NAV_ITEM_TYPE_ITEM,
//                 authority: [],
//                 subMenu: [],
//             },
//         ],
//     },
//     {
//         key: 'web.catalogue',
//         path: '',
//         title: 'Catalogue',
//         translateKey: 'nav.catalogue.catalogue',
//         icon: '',
//         type: NAV_ITEM_TYPE_COLLAPSE,
//         authority: [],
//         subMenu: [
//             {
//                 key: 'nav.catalogue.projectsandpods',
//                 path: `${WEB_PREFIX_PATH}/catalogue/projectsandpods`,
//                 title: 'Projects & Pods',
//                 translateKey: 'nav.catalogue.projectsandpods',
//                 icon: '',
//                 iconSrc: '/img/web/icons/projectPod.png',
//                 type: NAV_ITEM_TYPE_ITEM,
//                 authority: [],
//                 subMenu: [],
//             },
//             {
//                 key: 'nav.catalogue.pricing',
//                 path: `${WEB_PREFIX_PATH}/catalogue/pricing`,
//                 title: 'Pricing',
//                 iconSrc: '/img/web/icons/pricing.png',
//                 translateKey: 'nav.catalogue.pricing',
//                 icon: '',
//                 type: NAV_ITEM_TYPE_ITEM,
//                 authority: [],
//                 subMenu: [],
//             },
//         ],
//     },
//     {
//         key: 'web.user',
//         path: 'sign-in',
//         title: 'Sign In',
//         translateKey: 'nav.user.user',
//         icon: '',
//         type: NAV_ITEM_TYPE_ITEM,
//         authority: [],
//         subMenu: [],
//     },
// ]



const webNavigationConfig: NavigationTree[] = [
    {
        key: 'aboutus',
        path: '/web/aboutus',
        title: 'About Us',
        translateKey: 'nav.aboutus',
        icon: 'aboutus',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'services',
        path: '/web/services',
        title: 'Services',
        translateKey: 'nav.services',
        icon: 'services',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'casestudies',
        path: '/web/casestudies',
        title: 'Case Studies',
        translateKey: 'nav.casestudies',
        icon: 'casestudies',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'portfolio',
        path: '/web/portfolio',
        title: 'Portfolio',
        translateKey: 'nav.portfolio',
        icon: 'portfolio',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'insights',
        path: '/web/insights',
        title: 'Insights',
        translateKey: 'nav.insights',
        icon: 'insights',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'contactus',
        path: '/web/contactus',
        title: 'Contact Us',
        translateKey: 'nav.contactus',
        icon: 'contactus',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    // {
    //     key: 'collapseMenu',
    //     path: '/web',
    //     title: 'Collapse Menu',
    //     translateKey: 'nav.collapseMenu.collapseMenu',
    //     icon: 'collapseMenu',
    //     type: NAV_ITEM_TYPE_COLLAPSE,
    //     authority: [],
    //     subMenu: [
    //         {
    //             key: 'collapseMenu.item1',
    //             path: '/web/collapse-menu-item-view-1',
    //             title: 'Collapse menu item 1',
    //             translateKey: 'nav.collapseMenu.item1',
    //             icon: '',
    //             type: NAV_ITEM_TYPE_ITEM,
    //             authority: [],
    //             subMenu: [],
    //         },
    //         {
    //             key: 'collapseMenu.item2',
    //             path: '/web/collapse-menu-item-view-2',
    //             title: 'Collapse menu item 2',
    //             translateKey: 'nav.collapseMenu.item2',
    //             icon: '',
    //             type: NAV_ITEM_TYPE_ITEM,
    //             authority: [],
    //             subMenu: [],
    //         },
    //     ],
    // },
    // {
    //     key: 'groupMenu',
    //     path: '/web',
    //     title: 'Group Menu',
    //     translateKey: 'nav.groupMenu.groupMenu',
    //     icon: '',
    //     type: NAV_ITEM_TYPE_TITLE,
    //     authority: [],
    //     subMenu: [
    //         {
    //             key: 'groupMenu.single',
    //             path: '/web/group-single-menu-item-view',
    //             title: 'Group single menu item',
    //             translateKey: 'nav.groupMenu.single',
    //             icon: 'groupSingleMenu',
    //             type: NAV_ITEM_TYPE_ITEM,
    //             authority: [],
    //             subMenu: [],
    //         },
    //         {
    //             key: 'groupMenu.collapse',
    //             path: '/web',
    //             title: 'Group collapse menu',
    //             translateKey: 'nav.groupMenu.collapse.collapse',
    //             icon: 'groupCollapseMenu',
    //             type: NAV_ITEM_TYPE_COLLAPSE,
    //             authority: [],
    //             subMenu: [
    //                 {
    //                     key: 'groupMenu.collapse.item1',
    //                     path: '/web/group-collapse-menu-item-view-1',
    //                     title: 'Menu item 1',
    //                     translateKey: 'nav.groupMenu.collapse.item1',
    //                     icon: '',
    //                     type: NAV_ITEM_TYPE_ITEM,
    //                     authority: [],
    //                     subMenu: [],
    //                 },
    //                 {
    //                     key: 'groupMenu.collapse.item2',
    //                     path: '/web/group-collapse-menu-item-view-2',
    //                     title: 'Menu item 2',
    //                     translateKey: 'nav.groupMenu.collapse.item2',
    //                     icon: '',
    //                     type: NAV_ITEM_TYPE_ITEM,
    //                     authority: [],
    //                     subMenu: [],
    //                 },
    //             ],
    //         },
    //     ],
    // },
]

export default webNavigationConfig

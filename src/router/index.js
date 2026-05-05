import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomePage.vue'),
        meta: { title: 'SYCOBE – IT & Telecom Solutions' }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutPage.vue'),
        meta: { title: 'About Us – SYCOBE' }
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('../views/ProjectsPage.vue'),
        meta: { title: 'Projects – SYCOBE' }
    },
    {
        path: '/services',
        name: 'Services',
        component: () => import('../views/ServicesPage.vue'),
        meta: { title: 'Services – SYCOBE' }
    },
    {
        path: '/services/:slug',
        name: 'ServiceDetail',
        component: () => import('../views/ServiceDetailPage.vue'),
        meta: { title: 'Service – SYCOBE' }
    },
    {
        path: '/contact',
        name: 'Contatct',
        component: () => import('../views/ContactPage.vue'),
        meta: { title: 'Contact – SYCOBE' }
    },
    {
        path: '/partenaires',
        name: 'Partenaires',
        component: () => import('../views/PartnairePage.vue'),
        meta: { title: 'Partenaires – SYCOBE' }
    },
    {
        path: '/references',
        name: 'References',
        component: () => import('../views/ReferencePage.vue'),
        meta: { title: 'References – SYCOBE' }
    },
    {
        path: '/mikrotik',
        name: 'Mikrotik',
        component: () => import('../views/MicrotikPage.vue'),
        meta: { title: 'Produits Microtik – SYCOBE' }
    },
    {
        path: '/mikrotik/:slug',
        name: 'Miktrotik Product',
        component: () => import('../views/MicrotikProductDetailPage.vue'),
        meta: { title: 'Produit Microtik – SYCOBE' }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFoundPage.vue'),
        meta: { title: '404 – SYCOBE' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition
        if (to.hash) return { el: to.hash, behavior: 'smooth' }
        return { top: 0, behavior: 'smooth' }
    }
})

router.afterEach((to) => {
    document.title = to.meta.title || 'SYCOBE'
})

export default router
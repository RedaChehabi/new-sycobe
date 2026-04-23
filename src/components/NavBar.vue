<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-slate-700 backdrop-blur-md border-b border-slate-700 shadow-sm">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">

      <RouterLink to="/" class="flex items-center transition-transform hover:scale-105 duration-300">
        <img src="/logo.png" alt="SYCOBE" class="h-12 w-auto" />
      </RouterLink>

      <NavigationMenu class="hidden md:flex">
        <NavigationMenuList class="gap-1">

          <NavigationMenuItem>
            <NavigationMenuLink as-child>
              <RouterLink to="/" :class="[navigationMenuTriggerStyle(), 'bg-transparent hover:bg-sky-700 text-white-700 hover:text-slate-950']">
                Accueil
              </RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink as-child>
              <RouterLink to="/about" :class="[navigationMenuTriggerStyle(), 'bg-transparent hover:bg-gray-50 text-white-700 hover:text-sky-600']">
                Présentation
              </RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger class="bg-transparent hover:bg-gray-50 text-white-700 hover:text-sky-600">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-[320px] gap-2 p-3 bg-white rounded-xl shadow-xl border border-gray-100">
                <li v-for="service in services" :key="service.title">
                  <NavigationMenuLink as-child>
                    <RouterLink
                      :to="`/services/${service.slug}`"
                      class="flex items-center gap-4 p-3 rounded-lg hover:bg-sky-50 transition-colors group"
                    >
                      <div>
                        <p class="text-gray-800 font-semibold text-sm group-hover:text-sky-600 transition-colors">
                          {{ service.title }}
                        </p>
                      </div>
                    </RouterLink>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink as-child>
              <RouterLink to="/projects" :class="[navigationMenuTriggerStyle(), 'bg-transparent hover:bg-gray-50 text-white-700 hover:text-sky-600']">
                Réalisation
              </RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink as-child>
              <RouterLink to="/mikrotik" :class="[navigationMenuTriggerStyle(), 'bg-transparent hover:bg-gray-50 text-white-700 hover:text-sky-600']">
                MikroTik
              </RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem class="ml-2">
            <NavigationMenuLink as-child>
              <RouterLink to="/contact" class="inline-flex h-9 items-center justify-center rounded-md bg-sky-700 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-700">
                Contact
              </RouterLink>
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      <button
        @click="mobileOpen = !mobileOpen"
        class="md:hidden text-gray-600 hover:text-sky-600 hover:bg-gray-100 p-2 rounded-lg transition-colors focus:outline-none"
      >
        <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

    </div>

    <transition name="slide">
      <div
        v-if="mobileOpen"
        class="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1 shadow-lg overflow-y-auto max-h-[calc(100vh-80px)]"
      >
        <RouterLink
          to="/"
          @click="mobileOpen = false"
          class="block px-3 py-3 text-sm font-medium text-gray-700 rounded-md hover:text-sky-600 hover:bg-gray-50 transition-colors"
        >
          Accueil
        </RouterLink>
        <RouterLink
          to="/about"
          @click="mobileOpen = false"
          class="block px-3 py-3 text-sm font-medium text-gray-700 rounded-md hover:text-sky-600 hover:bg-gray-50 transition-colors"
        >
          Présentation
        </RouterLink>

        <div class="px-3">
          <button
            @click="servicesOpen = !servicesOpen"
            class="w-full flex items-center justify-between text-sm font-medium text-gray-700 py-3 rounded-md hover:text-sky-600 transition-colors"
          >
            Services
            <svg class="w-4 h-4 transition-transform text-gray-400" :class="{ 'rotate-180': servicesOpen }" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div v-if="servicesOpen" class="flex flex-col gap-1 pl-4 pb-2 border-l-2 border-gray-100 ml-2">
            <RouterLink
              v-for="service in services"
              :key="service.title"
              :to="`/services/${service.slug}`"
              @click="mobileOpen = false; servicesOpen = false"
              class="flex items-center gap-3 text-sm text-gray-600 py-2.5 hover:text-sky-600 transition-colors"
            >
              <span class="text-lg">{{ service.icon }}</span>
              {{ service.title }}
            </RouterLink>
          </div>
        </div>

        <RouterLink
          to="/projects"
          @click="mobileOpen = false"
          class="block px-3 py-3 text-sm font-medium text-gray-700 rounded-md hover:text-sky-600 hover:bg-gray-50 transition-colors"
        >
          Réalisation
        </RouterLink>
        
        <RouterLink
          to="/mikrotik"
          @click="mobileOpen = false"
          class="block px-3 py-3 text-sm font-medium text-gray-700 rounded-md hover:text-sky-600 hover:bg-gray-50 transition-colors"
        >
          MikroTik
        </RouterLink>
        
        <div class="mt-4 pt-4 border-t border-gray-100">
          <RouterLink
            to="/contact"
            @click="mobileOpen = false"
            class="flex w-full justify-center px-4 py-2.5 rounded-lg bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 transition-colors shadow-sm"
          >
            Contact
          </RouterLink>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export default {
  name: 'NavBar',
  components: {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  },
  data() {
    return {
      mobileOpen: false,
      servicesOpen: false,
      services: [
        {
          slug: 'reseau-telecom',
          title: 'Réseau Télécom',
        },
        {
          slug: 'reseau-informatique',
          title: 'Réseau Informatique',
        },
        {
          slug: 'formations',
          title: 'Formations',
        },
        {
          slug: 'developpement',
          title: 'Développement',
        },
      ],
      produits: [
        {
          icon: '/Mt_logo.png',
          to: '/products/mikrotik',
          slug: 'mikrotik',
          title: 'MikroTik',
          desc: 'Routeurs & équipements réseau',
        }
      ],
    }
  },
  methods: {
    navigationMenuTriggerStyle,
  },
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active { transition: all 0.3s ease-in-out; }
.slide-enter-from,
.slide-leave-to { opacity: 0; transform: translateY(-10px); }
</style>
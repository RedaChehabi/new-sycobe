<template>
  <div class="bg-white min-h-screen pt-28 pb-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <Breadcrumbs class="mb-8" />

      <div class="mb-16">
        <h1 class="text-5xl font-black text-slate-900 mb-4">Produits MikroTik</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        <RouterLink
          v-for="product in products"
          :key="product.slug"
          :to="`/mikrotik/${product.slug}`"
          class="group flex flex-col bg-white border border-slate-100 shadow-sm rounded-2xl overflow-hidden hover:border-sky-300 transition-all duration-300 hover:-translate-y-1"
        >
          <div class="w-full h-56 overflow-hidden bg-slate-50 flex items-center justify-center">
            <img
              :src="product.image"
              :alt="product.titre"
              class="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div class="flex flex-col flex-grow p-6">
            <div class="mb-3">
              <span class="text-xs px-2.5 py-1 rounded-full bg-cyan-400/10 text-sky-600 font-medium border border-cyan-400/20">
                MikroTik
              </span>
            </div>
            <h2 class="text-slate-900 font-bold text-xl mb-3">{{ product.titre }}</h2>
            <p class="text-slate-500 text-sm leading-relaxed flex-grow line-clamp-3">
              {{ product.desc }}
            </p>
            <div class="flex items-center gap-1 mt-5 text-sky-600 text-sm font-semibold">
              Voir le produit
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
export default {
  name: 'MikroTikPage',
  components :{
    Breadcrumbs
  },
  data() {
    return {
      products: [
        {
          slug: 'cloud-core-router',
          image: '/produits/CCR1016-12G/1.webp',
          titre: 'Cloud Core Router',
          desc: "1U rackmount, 12x Gigabit Ethernet, LCD, 16 cores x 1.2GHz CPU, 2GB RAM, 17.8mpps fastpath, Up to 12Gbit/s throughput, RouterOS L6, Dual PSU",
        },
        {
          slug: 'routerboard-rb951ui-2hnd',
          image: '/produits/RB951Ui-2HnD/1.webp',
          titre: 'Routerboard RB951UI-2HND',
          desc: "2.4GHz AP with five Ethernet ports and PoE output on port 5. It has a 600MHz CPU, 128MB RAM and a USB port.",
        },
        {
          slug: 'routerboard-sxt-5ndr2-lite5',
          image: '/produits/SXT-Lite5/1.webp',
          titre: 'Routerboard SXT-5NDR2 LITE5',
          desc: "16dBi integrated CPE/Backbone, 5GHz dual chain, 600MHz CPU",
        },
        {
          slug: 'routerboard-rb2011uias-rm',
          image: '/produits/RB2011UiAS-RM/1.webp',
          titre: 'Routerboard RB2011UIAS-RM',
          desc: "1U rackmount, 5xEthernet, 5xGigabit Ethernet, USB, LCD, PoE out on port 10, 600MHz CPU, 128MB RAM, RouterOS L5",
        },
      ],
    }
  },
}
</script>
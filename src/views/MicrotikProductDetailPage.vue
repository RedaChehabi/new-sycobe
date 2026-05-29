<template>
  <div class="bg-white min-h-screen pt-28 pb-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <RouterLink
        to="/mikrotik"
        class="inline-flex items-center gap-2 text-slate-400 hover:text-sky-600 text-sm mb-10 transition-colors"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
        </svg>
        Retour aux produits MikroTik
      </RouterLink>

      <div v-if="!product" class="rounded-2xl bg-white border border-slate-100 shadow-sm p-10 text-center">
        <div class="w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-3xl mx-auto mb-5">
          📦
        </div>
        <h2 class="text-2xl font-black text-white mb-2">Produit introuvable</h2>
        <p class="text-slate-400 mb-8 max-w-xl mx-auto">
          Ce produit n'existe pas ou a été retiré. Consultez notre catalogue MikroTik.
        </p>
        <RouterLink
          to="/mikrotik"
          class="px-7 py-3.5 rounded-lg bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition-colors"
        >
          Voir tous les produits
        </RouterLink>
      </div>

      <template v-else>

        <div class="grid lg:grid-cols-2 gap-12 items-start mb-16">

          <div>
            <h1 class="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
              {{ product.titre }}
            </h1>

            <p class="text-slate-600 text-lg leading-relaxed mb-8">
              {{ product.desc }}
            </p>
            <div v-if="product.specs && product.specs.length" class="mb-10">
              <h3 class="text-slate-700 font-bold text-sm uppercase tracking-widest mb-4">
                Caractéristiques
              </h3>
              <ul class="flex flex-col gap-3">
                <li
                  v-for="spec in product.specs"
                  :key="spec"
                  class="flex items-start gap-3 text-slate-600 text-sm"
                >
                  <span class="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg class="w-3 h-3 text-sky-600" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  {{ spec }}
                </li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col gap-4">

            <div class="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden flex items-center justify-center p-6">
              <transition name="fade-img" mode="out-in">
                <img
                  :key="activeImage"
                  :src="product.image[activeImage]"
                  :alt="`${product.titre} - image ${activeImage + 1}`"
                  class="w-full max-h-80 object-contain"
                />
              </transition>
            </div>

            <div v-if="product.image.length > 1" class="flex gap-3 flex-wrap">
              <button
                v-for="(img, i) in product.image"
                :key="i"
                @click="activeImage = i"
                :class="[
                  'w-20 h-20 rounded-xl border-2 overflow-hidden flex items-center justify-center bg-white transition-all duration-200 p-1',
                  activeImage === i
                    ? 'border-sky-500 shadow-md shadow-sky-100'
                    : 'border-slate-100 hover:border-sky-300'
                ]"
              >
                <img
                  :src="img"
                  :alt="`thumbnail ${i + 1}`"
                  class="w-full h-full object-contain"
                />
              </button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'

const ALL_PRODUCTS = [
  {
    slug: 'cloud-core-router',
    image: [
      '/produits/CCR1016-12G/1.webp',
      '/produits/CCR1016-12G/2.webp'
    ],
    titre: 'Cloud Core Router',
    desc: "Le CCR1016-12G est un routeur de qualité industrielle conçu pour les environnements exigeant un débit extrêmement élevé. Équipé d'un processeur Tilera 16 cœurs et de 12 ports Gigabit Ethernet, il est capable de traiter des millions de paquets par seconde. Idéal pour les FAI, les grandes entreprises et les opérateurs télécom qui ont besoin d'un routage performant et fiable. La nouvelle version r2 intègre 2 Go de RAM, un port USB standard et une double alimentation pour une redondance accrue.",
    specs: [
      'Processeur : Tilera Tile-Gx16 — 16 cœurs à 1,2 GHz',
      'RAM : 2 Go DDR3',
      'Stockage : 1 Go NAND flash',
      'Ports : 12 × Gigabit Ethernet',
      'Port série : RJ45',
      'Port USB : 1 × USB 2.0',
      'Alimentation : Double alimentation redondante (PSU)',
      'Débit : jusqu\'à 12 Mpps (millions de paquets/seconde)',
      'Format : Rack 1U',
      'OS : MikroTik RouterOS (Licence L6)',
      'Température : 0°C à +50°C',
    ],
  },
  {
    slug: 'routerboard-rb951ui-2hnd',
    image: [
      '/produits/RB951Ui-2HnD/1.webp'
    ],
    titre: 'Routerboard RB951UI-2HND',
    desc: "Le RB951Ui-2HnD est un point d'accès sans fil SOHO polyvalent, idéal pour les petits bureaux et les déploiements réseau simples. Il est équipé d'un processeur Atheros de nouvelle génération offrant une puissance de traitement accrue par rapport aux modèles précédents. Il dispose de cinq ports Ethernet, d'un port USB 2.0 pour le partage de périphériques, et d'un point d'accès WiFi 2,4 GHz haute puissance avec antennes intégrées. Le port n°5 est équipé d'une fonction PoE permettant d'alimenter d'autres appareils compatibles avec la même tension que celle appliquée au routeur.",
    specs: [
      'Processeur : Atheros AR9344 — 600 MHz',
      'RAM : 128 Mo DDR2',
      'Stockage : 128 Mo NAND flash',
      'Ports Ethernet : 5 × 10/100 Mbps',
      'WiFi : 2,4 GHz 802.11b/g/n — 2 antennes intégrées',
      'Puissance WiFi : jusqu\'à 30 dBm',
      'Port USB : 1 × USB 2.0',
      'PoE sortant : sur port n°5 (même tension que l\'alimentation, max 500 mA)',
      'Alimentation : 8–30V DC (jack) ou PoE entrant sur port n°1',
      'OS : MikroTik RouterOS (Licence L4)',
      'Température : -20°C à +70°C',
    ],
  },
  {
    slug: 'routerboard-sxt-5ndr2-lite5',
    image: [
      '/produits/SXT-Lite5/1.webp',
      '/produits/SXT-Lite5/2.webp',
      '/produits/SXT-Lite5/3.webp',
      '/produits/SXT-Lite5/4.webp'
    ],
    titre: 'Routerboard SXT-5NDR2 LITE5',
    desc: "Le SXT Lite5 est un équipement sans fil extérieur 5 GHz compact, économique et haute puissance. Il est conçu pour les liaisons Point à Point (PtP) et Point à MultiPoint (PtMP) en milieu outdoor. Son antenne intégrée de 16 dBi et sa puissance d'émission élevée lui permettent d'atteindre des portées impressionnantes tout en maintenant une excellente qualité de signal. Le boîtier résistant aux intempéries le rend adapté aux déploiements en extérieur dans des conditions difficiles. Il est alimenté via PoE passif ce qui simplifie son installation en hauteur.",
    specs: [
      'Processeur : Atheros AR9344 — 600 MHz',
      'RAM : 64 Mo DDR2',
      'Stockage : 16 Mo flash',
      'Fréquence : 5 GHz (5150–5875 MHz)',
      'Standard WiFi : 802.11a/n',
      'Antenne intégrée : 16 dBi gain',
      'Puissance TX : jusqu\'à 30 dBm',
      'Portée maximale : jusqu\'à 15 km (PtP)',
      'Port Ethernet : 1 × 10/100 Mbps avec PoE passif entrant',
      'Boîtier : Outdoor IP66 — résistant aux intempéries',
      'Alimentation : PoE passif 8–30V DC',
      'OS : MikroTik RouterOS (Licence L3)',
      'Température : -30°C à +70°C',
    ],
  },
  {
    slug: 'routerboard-rb2011uias-rm',
    image: [
      '/produits/RB2011UiAS-RM/1.webp',
      '/produits/RB2011UiAS-RM/2.webp'
    ],
    titre: 'Routerboard RB2011UIAS-RM',
    desc: "La RB2011UiAS-RM est une plateforme de routage multiports économique et polyvalente, conçue pour une utilisation en rack dans les salles serveurs et datacenters. Elle combine 5 ports Gigabit Ethernet et 5 ports Fast Ethernet, un port SFP pour fibre optique, un port USB et un écran LCD tactile pour la configuration locale. Elle fonctionne sous RouterOS — le système d'exploitation de MikroTik — qui offre routage dynamique, hotspot, pare-feu, MPLS, VPN, QoS avancée et bien plus. La licence L5 incluse offre des fonctionnalités étendues par rapport aux modèles d'entrée de gamme. Le port n°10 est équipé d'une fonction PoE sortant.",
    specs: [
      'Processeur : Atheros AR9344 — 600 MHz',
      'RAM : 128 Mo DDR2',
      'Stockage : 128 Mo NAND flash',
      'Ports Gigabit : 5 × Gigabit Ethernet (10/100/1000)',
      'Ports Fast Ethernet : 5 × Fast Ethernet (10/100)',
      'Port SFP : 1 × SFP (module non inclus)',
      'Port USB : 1 × USB 2.0',
      'Port série : RJ45',
      'Écran : LCD tactile intégré',
      'PoE sortant : sur port n°10 (même tension, max 500 mA)',
      'Format : Rack 1U avec boîtier inclus',
      'Alimentation : Bloc secteur inclus',
      'OS : MikroTik RouterOS (Licence L5)',
      'Température : -20°C à +70°C',
      'SFP recommandés : S-85DLC05D, S-31DLC20D, S-35/53LC20D',
    ],
  },
]

export default {
  name: 'ProductDetailPage',
  components :{
    Breadcrumbs
  },
  data() {
    return {
      activeImage: 0,
    }
  },
  computed: {
    slug() {
      return String(this.$route.params.slug || '').toLowerCase()
    },
    product() {
      return ALL_PRODUCTS.find(p => p.slug === this.slug) || null
    },
    relatedProducts() {
      return ALL_PRODUCTS.filter(p => p.slug !== this.slug)
    },
  },
  watch: {
    slug() {
      this.activeImage = 0
    },
  },
}
</script>
<style scoped>
.fade-img-enter-active,
.fade-img-leave-active {
  transition: opacity 0.2s ease;
}
.fade-img-enter-from,
.fade-img-leave-to {
  opacity: 0;
}
</style>
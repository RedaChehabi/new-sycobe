<template>
  <div class="bg-slate-50 min-h-screen pt-28 pb-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <Breadcrumbs class="mb-8" />

      <div class="mb-16">
        <h1 class="text-5xl font-black text-slate-900 mb-4">Solutions IT & Télécom</h1>
        <p class="text-slate-500 text-lg max-w-2xl">
          Des solutions complètes : étude, déploiement, sécurisation et maintenance,
          adaptées à la taille et aux besoins de votre organisation.
        </p>
      </div>

      <div class="flex flex-col gap-6 mb-20">
        <RouterLink
          v-for="(service, i) in services"
          :key="service.slug"
          :to="`/services/${service.slug}`"
          class="group grid lg:grid-cols-2 gap-0 bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden hover:border-sky-200 hover:shadow-md transition-all duration-300"
        >
          <div class="p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div
                class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
                :class="service.badgeBg + ' ' + service.badgeText"
              >
                {{ service.title }}
              </div>

              <h2 class="text-2xl font-black text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">
                {{ service.heading }}
              </h2>
              <p class="text-slate-500 text-sm leading-relaxed mb-6">
                {{ service.desc }}
              </p>

              <ul class="grid sm:grid-cols-2 gap-2 mb-8">
                <li
                  v-for="item in service.bullets"
                  :key="item"
                  class="flex items-center gap-2 text-slate-600 text-sm"
                >
                  <span
                    class="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                    :class="service.checkBg"
                  >
                    <svg class="w-2.5 h-2.5" :class="service.checkColor" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  {{ item }}
                </li>
              </ul>
            </div>

            <div class="flex items-center gap-2 text-sky-700 text-sm font-bold">
              Voir le détail
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>

          <div
            class="w-full h-64 lg:h-auto overflow-hidden flex items-center justify-center"
            :class="[service.iconBg, i % 2 === 0 ? 'lg:order-last' : 'lg:order-first']"
          >
            <img
              v-if="service.image"
              :src="service.image"
              :alt="service.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
export default {
  name: 'ServicesPage',
  components:{
    Breadcrumbs
  },
  data() {
    return {
      services: [
        {
          slug: 'reseau-telecom',
          title: 'Réseau Télécom',
          heading: 'Infrastructure Télécom de bout en bout',
          image: '/service/reseau-telecom.jpg',
          badgeBg: 'bg-cyan-50',
          badgeText: 'text-cyan-700',
          iconBg: 'bg-cyan-50',
          checkBg: 'bg-cyan-100',
          checkColor: 'text-cyan-600',
          desc: "SYCOBE vous offre des services complets en réseau télécom : TV, Internet, téléphonie mobile, RNIS, VSAT et liaisons FH. Notre équipe assure le déploiement et la maintenance d'infrastructures télécom à l'échelle nationale.",
          bullets: [
            'Réseau TV & téléphonie mobile',
            'VSAT & liaisons FH',
            'Drive test & optimisation radio',
            'Traitement de CDR & RA',
            'Audit télécom & reporting',
          ],
        },
        {
          slug: 'reseau-informatique',
          title: 'Réseau Informatique',
          heading: 'Réseaux fiables et sécurisés',
          image: '/service/reseau-informatique.jpg',
          badgeBg: 'bg-blue-50',
          badgeText: 'text-blue-700',
          iconBg: 'bg-blue-50',
          checkBg: 'bg-blue-100',
          checkColor: 'text-blue-600',
          desc: "Mise en place des réseaux IP et vente de matériel IT : routeurs, switches, BLR, points d'accès, serveurs, pilons, mâts et imprimantes.",
          bullets: [
            "Réseaux IP & Data Centre",
            "Routeurs & switches",
            "BLR & points d'accès",
            "Firewall & VPN",
            "Audit informatique"
          ]
        },
        {
          slug: 'formations',
          title: 'Formations',
          heading: 'Montée en compétences de vos équipes',
          image: '/service/Formation.jpg',
          badgeBg: 'bg-green-50',
          badgeText: 'text-green-700',
          iconBg: 'bg-green-50',
          checkBg: 'bg-green-100',
          checkColor: 'text-green-600',
          desc: "SYCOBE dispose d'un staff de formateurs expérimentés et de partenaires reconnus dans la sous-région. Les formations sont adaptées à vos équipes et dispensées en présentiel.",
          bullets: [
            'Langages de programmation',
            'Suite Office & bureautique',
            'Administration réseau',
            'Sécurité informatique',
            'Gestion de projets IT',
          ],
        },
        {
          slug: 'developpement',
          title: 'Développement',
          heading: 'Applications sur mesure pour votre métier',
          image: '/service/developpement.jpg',
          badgeBg: 'bg-purple-50',
          badgeText: 'text-purple-700',
          iconBg: 'bg-purple-50',
          checkBg: 'bg-purple-100',
          checkColor: 'text-purple-600',
          desc: "Développement d'applications pour opérateurs télécoms, écoles, facultés, cabinets médicaux, sociétés de manutention, pêche et transport. Systèmes de facturation et solution GED.",
          bullets: [
            "Applications métier sur mesure",
            "Systèmes de facturation SMS",
            "Solution GED",
            "J2EE, PHP, MySQL, Oracle",
            "Maintenance & évolution",
          ]
        },
      ],
    }
  },
}
</script>
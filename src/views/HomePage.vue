<template>
  <div class="bg-white min-h-screen">

    <section class="relative min-h-screen flex items-center bg-gradient-to-br from-sky-900 via-sky-800 to-blue-900 overflow-hidden">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div class="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 class="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Votre Partenaire<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
              Technologique
            </span>
          </h1>

          <p class="text-blue-100 text-lg leading-relaxed mb-10 max-w-xl">
            Depuis 2001, SYCOBE développe une expertise solide dans les domaines
            de l'informatique et des télécommunications au service des entreprises
            et institutions de Mauritanie.
          </p>

          <div class="flex flex-wrap gap-4">
            <RouterLink
              to="/services"
              class="px-7 py-3.5 rounded-lg bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition-colors"
            >
              Nos Services
            </RouterLink>
            <RouterLink
              to="/about"
              class="px-7 py-3.5 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              En savoir plus
            </RouterLink>
          </div>
        </div>

        <div class="hidden lg:flex items-center justify-center">
          <div class="relative w-full max-w-lg">
            <div class="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-3xl"></div>
            <img
              src="/hero-network.jpg"
              alt="Réseau informatique"
              class="relative w-full rounded-3xl object-cover shadow-2xl"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
            />
            <div class="hidden w-full aspect-square rounded-3xl bg-white/5 border border-white/10 items-center justify-center">
              <div class="grid grid-cols-2 gap-4 p-8 w-full">
                <div v-for="card in heroCards" :key="card.title"
                  class="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm"
                >
                  <p class="text-white font-bold text-sm">{{ card.title }}</p>
                  <p class="text-blue-300 text-xs mt-1">{{ card.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <div class="text-center mb-14">
          <p class="text-sky-600 text-xs font-bold tracking-widest uppercase mb-3">Ce Que Nous Faisons</p>
          <h2 class="text-4xl font-black text-slate-900 mb-4">Nos Solutions</h2>
          <p class="text-slate-500 max-w-xl mx-auto">
            Des solutions technologiques complètes adaptées aux besoins de votre entreprise.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            v-for="(service, i) in services"
            :key="service.title"
            @click="activeService = i"
            :class="[
              'px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200',
              activeService === i
                ? 'bg-sky-700 text-white shadow-lg shadow-sky-700/30'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-sky-300 hover:text-sky-700'
            ]"
          >
            {{ service.title }}
          </button>
        </div>

        <transition name="fade-up" mode="out-in">
          <div
            :key="activeService"
            class="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl border border-slate-100 shadow-sm p-8 lg:p-12"
          >
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5" :class="services[activeService].badgeBg">
                <span class="text-sm font-semibold" :class="services[activeService].badgeText">
                  {{ services[activeService].title }}
                </span>
              </div>
              <h3 class="text-3xl font-black text-slate-900 mb-4">{{ services[activeService].heading }}</h3>
              <p class="text-slate-500 leading-relaxed mb-6">{{ services[activeService].desc }}</p>
              <ul class="flex flex-col gap-2 mb-8">
                <li
                  v-for="item in services[activeService].items"
                  :key="item"
                  class="flex items-center gap-3 text-slate-600 text-sm"
                >
                  <span class="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <svg class="w-3 h-3 text-sky-600" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  {{ item }}
                </li>
              </ul>
              <RouterLink
                to="/services"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-700 text-white font-semibold hover:bg-sky-600 transition-colors text-sm"
              >
                En savoir plus →
              </RouterLink>
            </div>

            <div class="flex items-center justify-center">
              <div
                class="w-full rounded-2xl overflow-hidden"
                :class="services[activeService].iconBg"
              >
                <img
                  :src="services[activeService].image"
                  :alt="services[activeService].title"
                  class="w-full h-72 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <section class="bg-white py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <div class="flex items-center justify-between mb-12">
          <div>
            <p class="text-sky-600 text-xs font-bold tracking-widest uppercase mb-2">Équipements</p>
            <h2 class="text-3xl font-black text-slate-900">Produits MikroTik</h2>
          </div>
          <RouterLink
            to="/mikrotik"
            class="hidden md:inline-flex items-center gap-1 text-sky-600 text-sm font-semibold hover:underline"
          >
            Voir tout →
          </RouterLink>
        </div>

        <div class="grid lg:grid-cols-2 gap-8 items-center">

          <!-- Left: product list -->
          <div class="flex flex-col gap-3">
            <button
              v-for="(product, i) in mikrotikProducts"
              :key="product.name"
              @click="activeProduct = i"
              :class="[
                'flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-200',
                activeProduct === i
                  ? 'bg-sky-50 border-sky-300 shadow-sm'
                  : 'bg-white border-slate-100 hover:border-sky-200 hover:bg-slate-50'
              ]"
            >
              <div class="w-14 h-14 rounded-xl bg-white border border-slate-100 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm">
                <img :src="product.image" :alt="product.name" class="w-full h-full object-contain p-2" />
              </div>
              <div class="flex-grow">
                <p class="font-bold text-slate-900 text-sm">{{ product.name }}</p>
                <p class="text-slate-500 text-xs mt-0.5">MikroTik</p>
              </div>
              <svg
                class="w-4 h-4 transition-transform flex-shrink-0"
                :class="activeProduct === i ? 'text-sky-600 translate-x-0' : 'text-slate-300'"
                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <!-- Right: active product detail -->
          <transition name="fade-up" mode="out-in">
            <div :key="activeProduct" class="rounded-3xl border border-slate-100 bg-slate-50 p-8 flex flex-col gap-6">
              <div class="w-full aspect-video bg-white rounded-2xl border border-slate-100 flex items-center justify-center overflow-hidden shadow-sm">
                <img
                  :src="mikrotikProducts[activeProduct].image"
                  :alt="mikrotikProducts[activeProduct].name"
                  class="w-full h-full object-contain p-6"
                />
              </div>
              <div>
                <span class="text-xs text-sky-600 font-bold uppercase tracking-widest">MikroTik</span>
                <h3 class="text-xl font-black text-slate-900 mt-1 mb-2">{{ mikrotikProducts[activeProduct].name }}</h3>
                <p class="text-slate-500 text-sm leading-relaxed">{{ mikrotikProducts[activeProduct].desc }}</p>
              </div>
              <RouterLink
                :to="`/mikrotik/${mikrotikProducts[activeProduct].slug}`"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-700 text-white font-semibold text-sm hover:bg-sky-600 transition-colors w-fit"
              >
                Voir le produit →
              </RouterLink>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">

        <div class="flex items-center justify-between mb-12">
          <div>
            <p class="text-sky-600 text-xs font-bold tracking-widest uppercase mb-2">Réalisations</p>
            <h2 class="text-3xl font-black text-slate-900">Nos Derniers Projets</h2>
          </div>
          <RouterLink
            to="/projects"
            class="hidden md:inline-flex items-center gap-1 text-sky-600 text-sm font-semibold hover:underline"
          >
            Voir tout →
          </RouterLink>
        </div>

        <div class="grid lg:grid-cols-2 gap-8 items-center">
          <transition name="fade-up" mode="out-in">
            <div :key="activeProject" class="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <div class="w-full aspect-video overflow-hidden">
                <img
                  :src="projects[activeProject].image"
                  :alt="projects[activeProject].name"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="p-6">
                <span class="text-xs text-sky-600 font-bold uppercase tracking-widest">{{ projects[activeProject].category }}</span>
                <h3 class="text-xl font-black text-slate-900 mt-1 mb-2">{{ projects[activeProject].name }}</h3>
                <p class="text-slate-500 text-sm leading-relaxed">{{ projects[activeProject].desc }}</p>
                <div class="flex flex-wrap gap-2 mt-4">
                  <span
                    v-for="tag in projects[activeProject].tags"
                    :key="tag"
                    class="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 text-xs font-medium border border-sky-100"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </transition>

          <div class="flex flex-col gap-3">
            <button
              v-for="(project, i) in projects"
              :key="project.name"
              @click="activeProject = i"
              :class="[
                'flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-200',
                activeProject === i
                  ? 'bg-sky-50 border-sky-300 shadow-sm'
                  : 'bg-white border-slate-100 hover:border-sky-200 hover:bg-slate-50'
              ]"
            >
              <div class="w-16 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100">
                <img :src="project.image" :alt="project.name" class="w-full h-full object-cover" />
              </div>
              <div class="flex-grow">
                <p class="font-bold text-slate-900 text-sm">{{ project.name }}</p>
                <p class="text-slate-500 text-xs mt-0.5">{{ project.category }}</p>
              </div>
              <svg
                class="w-4 h-4 flex-shrink-0 transition-colors"
                :class="activeProject === i ? 'text-sky-600' : 'text-slate-300'"
                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-sky-800 py-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 class="text-white font-black text-4xl mb-3">Prêt à démarrer ?</h3>
          <p class="text-blue-200 text-lg">Contactez notre équipe pour trouver la solution adaptée à votre entreprise.</p>
        </div>
        <RouterLink
          to="/contact"
          class="flex-shrink-0 px-8 py-4 rounded-xl bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition-colors text-lg"
        >
          Contactez-nous →
        </RouterLink>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      activeService: 0,
      activeProduct: 0,
      activeProject: 0,
      services: [
        {
          title: 'Réseau Télécom',
          image: '/service/reseau-telecom.jpg',
          iconBg: 'bg-cyan-50',
          badgeBg: 'bg-cyan-50',
          badgeText: 'text-cyan-700',
          heading: 'Infrastructure Télécom de bout en bout',
          desc: "SYCOBE dispose d'une expérience éprouvée dans le déploiement et la maintenance d'infrastructures télécom en Mauritanie.",
          items: [
            'Installation du matériel télécom',
            'Drive test & analyse de couverture',
            'VSAT & liaisons FH',
            'Traitement de CDR & RA',
            'Audit télécom',
          ],
        },
        {
          title: 'Réseau Informatique',
          image: '/service/reseau-informatique.jpg',
          iconBg: 'bg-blue-50',
          badgeBg: 'bg-blue-50',
          badgeText: 'text-blue-700',
          heading: 'Réseaux fiables et sécurisés',
          desc: "Conception, déploiement et maintenance de réseaux informatiques adaptés à vos besoins opérationnels.",
          items: [
            'Étude & conception LAN/WAN',
            'Câblage structuré',
            'Wifi ADSL & haut débit',
            'Firewall & VPN',
            'Audit sécurité réseau',
          ],
        },
        {
          title: 'Formations',
          image: '/service/Formation.jpg',
          iconBg: 'bg-green-50',
          badgeBg: 'bg-green-50',
          badgeText: 'text-green-700',
          heading: 'Montée en compétences de vos équipes',
          desc: "SYCOBE dispose d'un staff de formateurs expérimentés et de partenaires reconnus dans la sous-région.",
          items: [
            'Langages de programmation',
            'Suite Office & productivité',
            'Administration réseau',
            'Sécurité informatique',
            'Gestion de projets IT',
          ],
        },
        {
          title: 'Développement',
          image: '/service/developpement.jpg',
          iconBg: 'bg-purple-50',
          badgeBg: 'bg-purple-50',
          badgeText: 'text-purple-700',
          heading: 'Applications sur mesure pour votre métier',
          desc: "Développement d'applications web et métier avec les technologies les plus adaptées à votre contexte.",
          items: [
            'Applications web J2EE & PHP',
            'Bases de données MySQL & Oracle',
            'Solutions Visual Basic',
            'Systèmes de gestion métier',
            'Intégration & API',
          ],
        },
      ],
      mikrotikProducts: [
        {
          slug: 'routerboard-rb951ui-2hnd',
          image: '/produits/RB951Ui-2HnD/1.png',
          name: 'Routerboard RB951Ui-2HND',
          desc: "2.4GHz AP with five Ethernet ports and PoE output on port 5. It has a 600MHz CPU, 128MB RAM and a USB port.",
        },
        {
          slug: 'routerboard-rb2011uias-rm',
          image: '/produits/RB2011UiAS-RM/1.png',
          name: 'Routerboard RB2011UiAS-RM',
          desc: "1U rackmount, 5xEthernet, 5xGigabit Ethernet, USB, LCD, PoE out on port 10, 600MHz CPU, 128MB RAM, RouterOS L5",
        },
        {
          slug: 'cloud-core-router',
          image: '/produits/CCR1016-12G/1.png',
          name: 'Cloud Core Router',
          desc: "1U rackmount, 12x Gigabit Ethernet, LCD, 16 cores x 1.2GHz CPU, 2GB RAM, 17.8mpps fastpath, Up to 12Gbit/s throughput, RouterOS L6, Dual PSU",
        },
        {
          slug: 'routerboard-sxt-5ndr2-lite5',
          image: '/produits/SXT-Lite5/1.png',
          name: 'Routerboard SXT-5NDR2 Lite5',
          desc: "16dBi integrated CPE/Backbone, 5GHz dual chain, 600MHz CPU",
        },
      ],
      projects: [
        {
          image: '/projects/SaharaPeche.png',
          name: 'Sahara Pêche',
        },
        {
          image: '/projects/saharaPaie.png',
          name: 'SAHARA PAIE'
        },
        {
          image: '/projects/Saharamedic.png',
          name: 'SAHARAMEDIC'
        },
        {
          image: '/projects/SaharaScolar.png',
          name: 'SAHARA SCOLAR',
        },
      ],
    }
  },
}
</script>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.25s ease;
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
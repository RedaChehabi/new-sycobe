<template>
    <div class="bg-slate-50 min-h-screen pt-28 pb-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <Breadcrumbs class="mb-8" />

        <div class="mb-16">
          <h1 class="text-5xl font-black text-slate-900 mb-4">Partenaires</h1>
          <p class="text-slate-500 text-lg max-w-2xl">
            SYCOBE s'appuie sur un réseau de partenaires technologiques reconnus
            et a réalisé des projets pour de nombreuses organisations en Mauritanie et dans la sous-région.
          </p>
        </div>
  
        <div class="mb-20">
          <h2 class="text-2xl font-black text-slate-900 mb-8">Nos Partenaires</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              v-for="partner in partners"
              :key="partner.name"
              class="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:border-sky-200 hover:shadow-md transition-all duration-200"
            >
              <p class="text-slate-900 font-bold text-sm">{{ partner.name }}</p>
              <p class="text-sky-600 text-xs mt-1">{{ partner.domain }}</p>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  import Breadcrumbs from '@/components/Breadcrumbs.vue';
  export default {
    name: 'PartnairePage',
    components: {
      Breadcrumbs
    },
    data() {
      return {
        partners: [
          { name: 'INOCOD',            domain: 'Développement & Programmation' },
          { name: 'SSC',               domain: 'Audit Système d\'Information' },
          { name: 'MikroTik',          domain: 'Équipements Wireless' },
          { name: 'Teltonika',         domain: 'Équipements Wireless' },
          { name: 'LigoWave',          domain: 'Équipements Wireless' },
          { name: 'mCarbon',           domain: 'VAS' },
          { name: 'U2opia',            domain: 'VAS' },
          { name: 'ITS',               domain: 'Infrastructures & Serveurs' },
          { name: 'INOVAR',            domain: 'VAS' },
          { name: 'Trusted Advisors',  domain: 'Formation' },
          { name: 'ControlCall',       domain: 'VAS' },
          { name: 'ESTEL-TELECOMS',    domain: 'Recharge Électronique' },
          { name: 'Mazma',             domain: 'E-Recharge' },
          { name: 'NEW TIC MALI',      domain: 'Network' },
          { name: 'JazNetwork',        domain: 'Facturation FAI' },
          { name: 'Fraudbuster',       domain: 'OTT Fraude' },
          { name: 'LATRO',             domain: 'SIMBOX Fraude' },
          { name: 'Zimbra',            domain: 'Messagerie Électronique' },
        ],
      }
    },
  }
  </script>
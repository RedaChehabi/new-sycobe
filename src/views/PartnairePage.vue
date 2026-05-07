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
              class="bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-sky-200 hover:shadow-md transition-all duration-200 flex items-center gap-4 p-5"
            >
              <div class="w-16 h-12 flex-shrink-0 flex items-center justify-center">
                <img
                  v-if="partner.logo"
                  :src="partner.logo"
                  :alt="partner.name"
                  class="max-h-10 max-w-[60px] object-contain"
                />
                <div
                  v-else
                  class="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-sky-600 font-black text-sm">{{ partner.name.charAt(0) }}</span>
                </div>
              </div>

              <div>
                <p class="text-slate-900 font-bold text-sm">{{ partner.name }}</p>
                <p class="text-sky-600 text-xs mt-0.5">{{ partner.domain }}</p>
              </div>
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
          { name: 'INOCOD',            domain: 'Développement & Programmation' , logo :'/logos/partenaires/inocod.png' },
          { name: 'SSC',               domain: 'Audit Système d\'Information' , logo :'/logos/partenaires/SSC.png' },
          { name: 'MikroTik',          domain: 'Équipements Wireless' , logo :'/logos/partenaires/Mikrotik.png'},
          { name: 'Teltonika',         domain: 'Équipements Wireless' , logo :'/logos/partenaires/TELTONIKA.png'},
          { name: 'LigoWave',          domain: 'Équipements Wireless' , logo :'/logos/partenaires/ligowave.png'},
          { name: 'mCarbon',           domain: 'VAS' , logo :'/logos/partenaires/M-Carbon.png'},
          { name: 'U2opia',            domain: 'VAS' , logo :'/logos/partenaires/u2opia.png'},
          { name: 'ITS',               domain: 'Infrastructures & Serveurs' , logo :'/logos/partenaires/ITS.png'},
          { name: 'INOVAR',            domain: 'VAS' , logo :'/logos/partenaires/inovar.png'},
          { name: 'Trusted Advisors',  domain: 'Formation' , logo :'/logos/partenaires/Trusted_Advisors.png'},
          { name: 'ControlCall',       domain: 'VAS' , logo :'/logos/partenaires/ControlCall.png'},
          { name: 'ESTEL-TELECOMS',    domain: 'Recharge Électronique' , logo :'/logos/partenaires/Estel.png'},
          { name: 'Mazma',             domain: 'E-Recharge' , logo :'/logos/partenaires/mamza.png'},
          { name: 'NEW TIC MALI',      domain: 'Network' , logo :'/logos/partenaires/NEW_TIC_MALI.jpg'},
          { name: 'JazNetwork',        domain: 'Facturation FAI' },
          { name: 'Fraudbuster',       domain: 'OTT Fraude' , logo :'/logos/partenaires/FraudBuster.png'},
          { name: 'LATRO',             domain: 'SIMBOX Fraude' , logo :'/logos/partenaires/LATRO.png'},
          { name: 'Zimbra',            domain: 'Messagerie Électronique' , logo :'/logos/partenaires/Zimbra.png'},
        ],
      }
    },
  }
  </script>
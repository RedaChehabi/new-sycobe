<template>
    <div class="bg-slate-50 min-h-screen pt-28 pb-24">
      <div class="max-w-7xl mx-auto px-6 lg:px-10">
        <Breadcrumbs class="mb-8" />

        <div class="mb-16">
          <h1 class="text-5xl font-black text-slate-900 mb-4">Références</h1>
          <p class="text-slate-500 text-lg max-w-2xl">
            SYCOBE s'appuie sur un réseau de partenaires technologiques reconnus
            et a réalisé des projets pour de nombreuses organisations en Mauritanie et dans la sous-région.
          </p>
        </div>
  
        <div class="mb-20">
          <h2 class="text-2xl font-black text-slate-900 mb-8">Nos Références Clients</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              v-for="client in clients"
              :key="client.name"
              class="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:border-sky-200 transition-all duration-200"
            >
              <p class="text-slate-900 font-bold text-sm">{{ client.name }}</p>
              <p class="text-slate-400 text-xs mt-1">{{ client.sector }}</p>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  import Breadcrumbs from '@/components/Breadcrumbs.vue';
  export default {
    name: 'ReferencePage',
    components: {
      Breadcrumbs
    },
    data() {
      return {
        clients: [
          { name: 'Faculté de Médecine',      sector: 'Enseignement supérieur' },
          { name: 'Faculté des Sciences et Techniques', sector: 'Enseignement supérieur' },
          { name: 'Mauritel',                 sector: 'Télécom' },
          { name: 'Chinguitel',               sector: 'Télécom' },
          { name: 'Mattel',                   sector: 'Télécom' },
          { name: 'ARE',                      sector: 'Régulation' },
          { name: 'CNAM',                     sector: 'Sécurité sociale' },
          { name: 'SNIM',                     sector: 'Industrie minière' },
          { name: 'SMAGEC',                   sector: 'Gestion' },
          { name: 'SOMIR',                    sector: 'Industrie' },
          { name: 'INSP',                     sector: 'Santé publique' },
          { name: 'ONSER',                    sector: 'Services' },
          { name: 'OPM',                      sector: 'Services' },
          { name: 'MCP',                      sector: 'Services' },
          { name: 'SETP',                     sector: 'Services' },
          { name: 'TADAMOUN TELECOM',         sector: 'Télécom' },
          { name: 'EAZITEL - GIBRALTAR',      sector: 'Télécom' },
          { name: 'GOLDLAND',                 sector: 'Commerce' },
          { name: 'COMMECA',                  sector: 'Commerce' },
          { name: 'RIDHA FREE ZONE',          sector: 'Zone franche' },
          { name: 'Hotel T\'Feila',           sector: 'Hôtellerie' },
          { name: 'CSS',                      sector: 'Services' },
          { name: 'CSA Bassiknou',            sector: 'Santé' },
          { name: 'Écoles Privées',           sector: 'Éducation' },
          { name: 'Cabinets Médicaux',        sector: 'Santé' },
        ],
      }
    },
  }
  </script>
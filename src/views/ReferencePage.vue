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
              class="bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-sky-200 transition-all duration-200 flex items-center gap-4 p-5"
            >
              <div class="w-16 h-12 flex-shrink-0 flex items-center justify-center">
                <img
                  v-if="client.logo"
                  :src="client.logo"
                  :alt="client.name"
                  class="max-h-10 max-w-[60px] object-contain"
                />
                <div
                  v-else
                  class="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-slate-500 font-black text-sm">{{ client.name.charAt(0) }}</span>
                </div>
              </div>

              <div>
                <p class="text-slate-900 font-bold text-sm">{{ client.name }}</p>
                <p class="text-slate-400 text-xs mt-0.5">{{ client.sector }}</p>
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
    name: 'ReferencePage',
    components: {
      Breadcrumbs
    },
    data() {
      return {
        clients: [
          { name: 'Faculté de Médecine',      sector: 'Enseignement supérieur' , logo: '/logos/clients/UNA.png' },
          { name: 'Faculté des Sciences et Techniques', sector: 'Enseignement supérieur' , logo: '/logos/clients/UNA.png' },
          { name: 'Mauritel',                 sector: 'Télécom' , logo: '/logos/clients/mauritel.png' },
          { name: 'Chinguitel',               sector: 'Télécom' , logo: '/logos/clients/Chinguitel.png' },
          { name: 'Mattel',                   sector: 'Télécom' , logo: '/logos/clients/mattel.jpg' },
          { name: 'ARE',                      sector: 'Régulation' , logo: '/logos/clients/are.jpg' },
          { name: 'CNAM',                     sector: 'Sécurité sociale' , logo: '/logos/clients/cnam.jpg' },
          { name: 'SNIM',                     sector: 'Industrie minière' , logo: '/logos/clients/snim.jpg' },
          { name: 'SMAGEC',                   sector: 'Gestion'  , logo:'/logos/clients/Smagec.png'},
          { name: 'SOMIR',                    sector: 'Industrie' , logo: '/logos/clients/somir.png' },
          { name: 'INSP',                     sector: 'Santé publique' , logo: '/logos/clients/INSP.jpg' },
          { name: 'ONSER',                    sector: 'Services' , logo: '/logos/clients/onser.jpg' },
          { name: 'OPM',                      sector: 'Services' , logo: '/logos/clients/OPM.jpg' },
          { name: 'MCP',                      sector: 'Services' , logo: '/logos/clients/MCP.png'  },
          { name: 'SETP',                     sector: 'Services' , logo: '/logos/clients/SEPT.png' },
          { name: 'TADAMOUN TELECOM',         sector: 'Télécom'  , logo :'/logos/clients/TADAMOUN_TELECOM.jpg'},
          { name: 'EAZITEL - GIBRALTAR',      sector: 'Télécom'  },
          { name: 'GOLDLAND',                 sector: 'Commerce'  },
          { name: 'COMMECA',                  sector: 'Commerce' , logo: '/logos/clients/comeca.png' },
          { name: 'RIDHA FREE ZONE',          sector: 'Zone franche' },
          { name: 'Hotel T\'Feila',           sector: 'Hôtellerie'  },
          { name: 'CSS',                      sector: 'Services' , logo: '/logos/clients/CSS.png' },
          { name: 'CSA Bassiknou',            sector: 'Santé' , logo: '/logos/clients/CSA.jpg' },
          { name: 'Écoles Privées',           sector: 'Éducation'  },
          { name: 'Cabinets Médicaux',        sector: 'Santé'  },
        ],
      }
    },
  }
  </script>
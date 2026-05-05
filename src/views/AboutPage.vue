<template>
  <div class="bg-slate-50 min-h-screen pt-28 pb-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <Breadcrumbs class="mb-8" />

      <div class="mb-16">
        <p class="text-sky-600 text-xs font-bold tracking-widest uppercase mb-4">À Propos de Nous</p>
        <h1 class="text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
          Expertise IT & Télécoms<br/>au cœur de la Mauritanie
        </h1>
        <p class="text-slate-500 text-lg leading-relaxed max-w-2xl">
          SYCOBE est une société spécialisée dans le domaine d'informatique & télécoms, la vente du matériel IT et les prestations d'IT,
          et plus particulièrement l'infrastructure, O&M, les réseaux IP et le développement des solutions.
          Nous assurons et effectuons les interventions dans des conditions très critiques pour garder le bon fonctionnement des équipements.
        </p>
        <div class="mt-6 h-px bg-slate-800 max-w-2xl"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="rounded-2xl bg-white border border-slate-100 shadow-sm p-6"
        >
          <p class="text-slate-900 font-black text-4xl mb-2">{{ stat.value }}</p>
          <p class="text-slate-600 text-sm leading-relaxed">{{ stat.label }}</p>
        </div>
      </div>

      <div class="mb-16">
        <p class="text-slate-600 text-lg leading-relaxed">
          SYCOBE est une société du domaine TIC depuis 2001.
          Le service de vente a été ajouté au domaine d'activités en 2016. 
          Créée par un expert du domaine TIC avec une expérience de plus de 20 ans dans le secteur TIC et Télécoms, 
          SYCOBE dispose d'un staff de 4 ingénieurs d'informatique. 
          Siège social : Teyarett — Nouakchott (Route Corona). Un représentant à Nouadhibou.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-4 mb-16">
        <div
          v-for="domain in domains"
          :key="domain.title"
          class="rounded-2xl bg-white border border-slate-100 hover:border-sky-200 transition-all duration-300 hover:-translate-y-1 p-6"
        >
          <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4" :class="domain.bg">
            <component :is="domain.icon" class="w-5 h-5" :class="domain.color" />
          </div>
          <h3 class="text-slate-900 font-bold text-base mb-2">{{ domain.title }}</h3>
          <p class="text-slate-600 text-sm leading-relaxed">{{ domain.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import {
  Monitor,
  Wifi,
  ShieldCheck,
  Users,
} from 'lucide-vue-next'

export default {
  name: 'AboutPage',
  components: {
    Monitor,
    Wifi,
    ShieldCheck,
    Users,
    Breadcrumbs
  },
  data() {
    return {
      stats: [
        { value: '2001', label: "Année de création" },
        { value: '2016', label: "Ajout service de vente" },
        { value: '4',    label: "Ingénieurs informatique" }
      ],
      domains: [
      {
          icon: 'Monitor',
          bg: 'bg-blue-500/10',
          color: 'text-blue-400',
          title: 'Infrastructure & O&M',
          desc: "Mise en place et maintenance des infrastructures IT et Télécoms. Interventions dans des conditions critiques pour garantir le bon fonctionnement des équipements.",
        },
        {
          icon: 'Wifi',
          bg: 'bg-cyan-500/10',
          color: 'text-cyan-400',
          title: 'Réseaux IP & Data Centre',
          desc: "Déploiement de réseaux IP, gestion de parcs Datacenter, réseaux IT et Télécoms.",
        },
        {
          icon: 'ShieldCheck',
          bg: 'bg-emerald-500/10',
          color: 'text-emerald-400',
          title: 'Vente de Matériel IT',
          desc: "Vente de matériel IT : routeurs, switches, BLR, points d'accès, serveurs, pilons, mâts, imprimantes, etc.",
        },
        {
          icon: 'Users',
          bg: 'bg-purple-500/10',
          color: 'text-purple-400',
          title: 'Développement de Solutions',
          desc: "Développement d'applications pour opérateurs télécoms, écoles, facultés, cabinets médicaux, sociétés de manutention, pêche et transport.",
        }
      ]
    }
  },
}
</script>
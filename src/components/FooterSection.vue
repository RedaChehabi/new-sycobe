<template>
  <footer class="bg-slate-700 border-t border-slate-700" aria-label="Footer">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-16">

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">

        <div class="col-span-2 md:col-span-3 lg:col-span-1">
          <RouterLink to="/">
            <img src="/logo.png" alt="SYCOBE" class="h-12 w-auto mb-4" />
          </RouterLink>
          <p class="text-slate-400 text-sm leading-relaxed max-w-xs">
            Société du domaine TIC depuis 2001. Siège : Teyarett, Nouakchott.
          </p>
        </div>

        <div>
          <p class="text-white text-xs font-bold tracking-widest uppercase mb-5">Solutions</p>
          <ul class="flex flex-col gap-3">
            <li v-for="link in columns.solutions" :key="link.label">
              <RouterLink
                :to="link.to"
                class="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <p class="text-white text-xs font-bold tracking-widest uppercase mb-5">MikroTik</p>
          <ul class="flex flex-col gap-3">
            <li v-for="link in columns.mikrotik" :key="link.label">
              <RouterLink
                :to="link.to"
                class="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <p class="text-white text-xs font-bold tracking-widest uppercase mb-5">Projets</p>
          <ul class="flex flex-col gap-3">
            <li v-for="link in columns.projets" :key="link.label">
              <RouterLink
                :to="link.to"
                class="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <p class="text-white text-xs font-bold tracking-widest uppercase mb-5">Entreprise</p>
          <ul class="flex flex-col gap-3">
            <li v-for="link in columns.entreprise" :key="link.label">
              <RouterLink
                :to="link.to"
                class="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

      </div>

      <div class="pt-8 border-t border-emerald-900 flex flex-col md:flex-row items-center justify-between gap-4">

          <a
          href="https://mr.linkedin.com/company/sycobe"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          class="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-sky-800 border border-emerald-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
        >
          <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5C3.88 3.5 3 4.4 3 5.5s.88 2 1.98 2h.02C6.1 7.5 7 6.6 7 5.5S6.1 3.5 5 3.5h-.02ZM3.5 21h3V9h-3v12ZM9 9h2.9v1.64h.04c.4-.76 1.4-1.56 2.88-1.56 3.08 0 3.65 2.02 3.65 4.65V21h-3v-5.52c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92V21H9V9Z"/>
          </svg>
        </a>

        <p class="text-slate-500 text-sm">
          © {{ currentYear }} SYCOBE Sarl. Tous droits réservés.
        </p>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  },
  data() {
    return {
      columns: {
        solutions: [
          { label: 'Réseau Télécom',      to: '/services/reseau-telecom' },
          { label: 'Réseau Informatique', to: '/services/reseau-informatique' },
          { label: 'Formations',          to: '/services/formations' },
          { label: 'Développement',       to: '/services/developpement' },
        ],
        mikrotik: [
          { label: 'Cloud Core Router',        to: '/mikrotik/cloud-core-router' },
          { label: 'Routerboard RB951Ui-2HND', to: '/mikrotik/routerboard-rb951ui-2hnd' },
          { label: 'Routerboard RB2011',       to: '/mikrotik/routerboard-rb2011uias-rm' },
          { label: 'SXT-5NDR2 Lite5',          to: '/mikrotik/routerboard-sxt-5ndr2-lite5' },
        ],
        projets: [
          { label: 'Sahara Pêche',  to: '/projects' },
          { label: 'SAHARA PAIE',   to: '/projects' },
          { label: 'SAHARAMEDIC',   to: '/projects' },
          { label: 'SAHARA SCOLAR', to: '/projects' },
        ],
        entreprise: [
          { label: 'Présentation',       to: '/about' },
          { label: 'Services',  to: '/services' },
          { label: 'Projets',       to: '/projects' },
          { label: 'Contact',       to: '/contact' },
          { label: 'Partenaires',  to: '/partenaires' },
          { label: 'Références',  to: '/references' },
        ],
      }
    }
  }
}
</script>
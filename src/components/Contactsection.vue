<template>
  <section id="contact">
    <div class="grid lg:grid-cols-2 gap-10 items-start">

      <div class="flex flex-col gap-8">

        <div class="flex flex-col gap-4">
          <div v-for="info in contactInfo" :key="info.label" class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-lg bg-white border border-slate-100 shadow-sm flex items-center justify-center flex-shrink-0 text-lg">
              {{ info.icon }}
            </div>
            <div>
              <p class="text-slate-400 text-xs mb-0.5">{{ info.label }}</p>
              <p class="text-slate-900 text-sm font-medium">{{ info.value }}</p>
            </div>
          </div>
        </div>

        <div class="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
          <p class="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Contact direct</p>
          <div class="flex flex-col gap-2 text-sm">
            <div class="flex items-center gap-2">
              <span class="text-slate-400 w-16 flex-shrink-0">CEO</span>
              <span class="text-slate-900 font-medium">Mohamed El Moctar SEPTY</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-slate-400 w-16 flex-shrink-0">Email</span>
              <a href="mailto:septy@sycobe.mr" class="text-sky-600 hover:underline">septy@sycobe.mr</a>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-slate-400 w-16 flex-shrink-0">Mobile</span>
              <a href="tel:+22236311477" class="text-slate-900 hover:text-sky-600 transition-colors">+222 36 31 14 77</a>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-slate-400 w-16 flex-shrink-0">Info</span>
              <a href="mailto:info@sycobe.mr" class="text-sky-600 hover:underline">info@sycobe.mr</a>
            </div>
          </div>
        </div>

      </div>

      <Card class="bg-white border-slate-100 shadow-sm">
        <CardContent class="pt-6">
          <div v-if="submitted" class="flex flex-col items-center justify-center text-center py-12">
            <div class="w-16 h-16 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-4xl mb-4">✅</div>
            <h3 class="text-slate-900 font-bold text-xl mb-2">Message envoyé !</h3>
            <p class="text-slate-500 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
            <button @click="submitted = false" class="mt-6 text-sky-600 text-sm hover:underline">
              Envoyer un autre message
            </button>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="flex flex-col gap-4">

            <div class="grid sm:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <label class="text-slate-600 text-xs font-medium">Société / Organisation</label>
                <Input
                  v-model="form.company"
                  required
                  placeholder="Votre société"
                  class="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-400"
                />
              </div>
              <div class="flex flex-col gap-1.5">
                <label class="text-slate-600 text-xs font-medium">Email</label>
                <Input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  class="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-400"
                />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <label class="text-slate-600 text-xs font-medium">Objet</label>
              <Input
                v-model="form.subject"
                required
                placeholder="Objet de votre demande"
                class="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-400"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <label class="text-slate-600 text-xs font-medium">Message</label>
              <Textarea
                v-model="form.message"
                required
                :rows="5"
                placeholder="Décrivez votre projet ou votre besoin..."
                class="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-sky-400 resize-none"
              />
            </div>

            <Button
              type="submit"
              :disabled="sending"
              class="w-full bg-sky-700 text-white font-bold hover:bg-sky-600 h-12"
            >
              <svg v-if="sending" class="w-4 h-4 animate-spin mr-2" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
              </svg>
              {{ sending ? 'Envoi en cours...' : 'Envoyer →' }}
            </Button>

          </form>
        </CardContent>
      </Card>

    </div>
  </section>
</template>

<script>
import { Button }   from '@/components/ui/button'
import { Input }    from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'

export default {
  name: 'ContactSection',
  components: {
    Button, Input, Textarea,
    Card, CardContent,
  },
  data() {
    return {
      submitted: false,
      sending: false,
      form: { company: '', email: '', subject: '', message: '' },
      contactInfo: [
        { icon: '📍', label: 'Adresse', value: 'Teyarett-Nouakchott, Mauritanie' },
        { icon: '✉️', label: 'Email',   value: 'info@sycobe.mr' },
        { icon: '📞', label: 'Tél',     value: '+222 36 31 14 77' },
      ],
    }
  },
  methods: {
    async handleSubmit() {
      this.sending = true
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        this.submitted = true
        this.form = { company: '', email: '', subject: '', message: '' }
      } finally {
        this.sending = false
      }
    }
  }
}
</script>
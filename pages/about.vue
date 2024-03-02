<template>
  <div>
    <SectionText
      :imageRight="`/img/cityscape_${session.theme}.jpg`"
      :title="$t('about.who.title')"
      :text="$t('about.who.text')"
    />
    <SectionText
      :imageLeft="`/img/cityscape_${session.theme}.jpg`"
      :background-image="`/img/bg_sky_${session.theme}.jpg`"
      :title="$t('about.what.title')"
      :text="$t('about.what.text')"
    />
    <SectionTeamIcons
      :heroTitle="$t('about.team.heroTitle')"
      :cards="$tm('about.team.cards')"
    />
  </div>
</template>

<script setup>
useHead({ title: pageHead('about') })
const session = useSessionStore()
</script>

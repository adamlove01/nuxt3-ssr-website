<template>
  <div>
    <SectionHero
      :background-image="`/img/bg_retro_80s_city_${session.theme}.jpg`"
    />

    <SectionTechnology
      :title="$t('index.technology.title')"
      :sub-title="$t('index.technology.subTitle')"
      :button-text="$t('index.technology.buttonText')"
      :background-color="session.theme === 'dark' ? '' : 'bg-my-off-white'"
      :cards="$tm('index.technology.cards')"
    />

    <SectionBenefitsIcons
      :title="$t('index.benefitsIcons.title')"
      :sub-title="$t('index.benefitsIcons.subTitle')"
      :cards="$tm('index.benefitsIcons.cards')"
      :background-image="`/img/bg_sky_${session.theme}.jpg`"
    />

    <SectionBenefits
      :title="$t('index.benefits.title')"
      :sub-title="$t('index.benefits.subTitle')"
      :cards="$tm('index.benefits.cards')"
      :background-image="`/img/bg_geometric_${session.theme}.jpg`"
    />
  </div>
</template>

<script setup>
useHead({ title: pageHead('home') })
const session = useSessionStore()
</script>

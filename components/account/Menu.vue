<script setup lang="ts">
const config = useRuntimeConfig()
const items = {
  /* disconnect: {
    icon: { name: 'disconnect' },
    label: 'Disconnect',
  }, */
  /* web3VueNuxtProjects: {
    icon: { name: 'vue' },
    label: 'Vue web3 projects',
    link: 'https://github.com/toniengelhardt/web3-vue-and-nuxt-projects',
    external: true,
  }, */
  settings: {
    icon: { name: 'settings' },
    label: 'Settings',
    link: '/settings',
  },
  repotracker: {
    icon: { name: 'repotracker' },
    label: 'Repo Insights',
    link: 'https://repo-tracker.com/r/gh/toniengelhardt/merklin',
    external: true,
  },
  plausible: {
    icon: { name: 'plausible' },
    label: 'Analytics',
    link: 'https://plausible.io/app.merklin.xyz',
    external: true,
  },
  github: {
    icon: { name: 'github' },
    label: 'Contribute',
    title: 'MΞTADATA repository on GitHub',
    link: config.public.repoUrl,
    external: true,
  },
  twitter: {
    icon: { name: 'twitter' },
    label: 'Twitter',
    external: true,
  },
  discord: {
    icon: { name: 'discord' },
    label: 'Discord',
    external: true,
  },
}
</script>

<template>
  <Menu
    orientation="left"
    :toggle-icon="{ name: 'menu', size: '1.4rem' }"
    toggle-class="btn-transparent"
  >
    <MenuItem v-slot="{ active }">
      <ObscureToggle :class="[active ? 'bg-element' : undefined]" @click.prevent />
    </MenuItem>
    <MenuItem v-slot="{ active }">
      <ThemeToggle :class="[active ? 'bg-element' : undefined]" @click.prevent />
    </MenuItem>
    <MenuItem :item="items.settings" />
    <MenuDivider />
    <MenuItem :item="items.github" />
    <MenuItem :item="items.repotracker" />
    <MenuItem :item="items.plausible" />
    <!-- <MenuItem :item="items.web3VueNuxtProjects" /> -->
    <!-- <MenuItem :item="items.twitter" />
    <MenuItem :item="items.discord" /> -->
  </Menu>
</template>

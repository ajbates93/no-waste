<script setup lang="ts">

const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
}

</script>

<template>
  <header class="py-5 dark:text-white max-w-screen-xl mx-auto flex items-center justify-end text-lg gap-7 font-semibold">
    <nav class="flex justify-end items-center gap-5 text-xl font-mono w-full">
      <NuxtLink to="/" class="dark:text-gray-200 mr-auto">Home</NuxtLink>
      <NuxtLink to="/recipes" class="dark:text-gray-200 border-r dark:border-custNavyLight pr-4">Recipes</NuxtLink>
      <NuxtLink to="/mission" class="dark:text-gray-200">About</NuxtLink>
      <a @click="toggleColorMode" class="cursor-pointer" target="_blank">
        <Icon name="iconoir-sun-light" class="text-yellow-400" size="1.5rem" />
      </a>
    </nav>
  </header>
</template>

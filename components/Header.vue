<script setup lang="ts">

const colorMode = useColorMode()
// const activeColorMode = ref<string>()
const activeColorMode = useState('activeColorMode', () => colorMode.preference)

const toggleColorMode = () => {
  colorMode.forced = true
  colorMode.preference = activeColorMode.value === 'light' ? 'dark' : 'light'
  activeColorMode.value = colorMode.preference
  console.log('acm: ', activeColorMode.value)
  console.log('cm: ', colorMode.preference)
}

activeColorMode.value = colorMode.preference

</script>

<template>
  <header class="py-5 dark:text-white max-w-screen-xl mx-auto flex items-center justify-end text-lg gap-7 font-semibold">
    <nav class="flex justify-end items-center gap-5 text-xl w-full">
      <NuxtLink to="/" class="dark:text-gray-200 mr-auto"><span class="bg-custGreen text-white px-0.5">N</span>o <span class="bg-custOrange text-white px-0.5 ml-0.5">W</span>aste <span class="bg-custPurple text-white px-0.5 ml-0.5">H</span>ere</NuxtLink>
      <NuxtLink to="/recipes" class="dark:text-gray-200 border-r dark:border-custNavyLight pr-4">Recipes</NuxtLink>
      <NuxtLink to="/mission" class="dark:text-gray-200 border-r dark:border-custNavyLight pr-4">About</NuxtLink>
      <a @click="toggleColorMode" class="cursor-pointer" target="_blank">
        <Icon name="iconoir-sun-light" class="text-yellow-400" size="1.5rem" />
      </a>
    </nav>
  </header>
</template>

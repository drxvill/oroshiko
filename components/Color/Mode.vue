<script lang="ts" setup>
const colorMode = useColorMode();

const mode = computed({
    get() {
        return colorMode.value === "dark"
    },
    set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
    }
});
</script>

<template>
    <ClientOnly>
        <UButton :icon="mode ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="white" variant="ghost"
            aria-label="Theme" @click="mode = !mode" />
    </ClientOnly>
</template>
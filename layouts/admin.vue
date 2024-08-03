<script lang="ts" setup>
const pocketbase = usePocketbase();
const toast = useToast();

function onLogout() {
    toast.add({ title: "Goodbye!", description: "It's sad to see you go!" });
    pocketbase.authStore.clear();
    navigateTo("/");
}
</script>

<template>
    <NuxtPage>
        <div class="flex justify-end items-center p-4">
            <UButton icon="i-heroicons-arrow-left-start-on-rectangle-16-solid" label="Logout" color="red" variant="soft"
                @click="onLogout" />
        </div>
        <slot />
        <UNotifications />
    </NuxtPage>
</template>

<style>
* {
    @apply font-outfit
}
</style>
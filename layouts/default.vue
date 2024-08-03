<template>
    <NuxtLoadingIndicator />
    <Header />
    <slot />
    <UNotifications />
</template>

<style>
* {
    @apply font-outfit
}
</style>
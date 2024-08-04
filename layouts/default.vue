<template>
    <NuxtLoadingIndicator />
    <Header />
    <slot />
    <Footer />
    <UNotifications />
</template>

<style>
* {
    @apply font-outfit
}
</style>
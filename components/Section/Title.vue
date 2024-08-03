<script lang="ts" setup>
const { title, description } = defineProps(["title", "description"]);
</script>

<template>
    <div class="flex flex-col justify-start gap-1 mx-4">
        <p class="text-xl font-bold uppercase">{{ title }}</p>
        <p class="text-base font-normal opacity-75">{{ description }}</p>
    </div>
</template>
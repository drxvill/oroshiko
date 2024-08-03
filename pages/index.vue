<script lang="ts" setup>
const pocketbase = usePocketbase();

const { data } = await useAsyncData("news", async () => {
    return await pocketbase.collection("news").getFullList()
});
</script>

<template>
    <div class="space-y-4 my-4">
        <SectionTitle title="Latest News"
            description="Stay up to date on the latest anime and manga news straight out of Japan." />
        <SectionCards :posts="data" :sidebar="false" />
    </div>
</template>
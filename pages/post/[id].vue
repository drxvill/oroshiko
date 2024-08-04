<script lang="ts" setup>
const { id } = useRoute().params
const pocketbase = usePocketbase();

const { data } = await useAsyncData("post", async () => {
    const [post, posts] = await Promise.all([
        await pocketbase.collection("news").getOne(id as string),
        await pocketbase.collection("news").getFullList({ sort: "-created" })
    ])
    return { post, posts }
});
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-[auto,24rem] my-8 gap-4">
        <UContainer class="space-y-4">
            <div class="flex items-center gap-2">
                <div v-for="tag in data?.post.tags" class="flex items-center gap-2">
                    <UButton :label="tag" variant="soft" />
                </div>
            </div>
            <p class="text-2xl font-bold">{{ data?.post.title }}</p>
            <p class="text-lg font-normal opacity-85">{{ data?.post.description }}</p>
            <div class="flex items-center gap-2">
                <UAvatar :alt="data?.post.author" size="md" />
                <p class="text-primary text-base font-medium">{{ data?.post.author }}</p>
            </div>
            <UDivider />
            <NuxtImg :src="data?.post.cover" :alt="data?.post.title" format="webp" quality="80" sizes="100vw"
                placeholder width="100" height="100"
                class="w-full h-fit rounded-sm object-cover transition-transform group-hover:scale-110" />
            <div v-html="data?.post.content" class="flex flex-col" />
            <UDivider />
        </UContainer>
        <div class="space-y-4">
            <SectionTitle title="Latest News"
                description="Stay up to date on the latest anime and manga news straight out of Japan." />
            <SectionCards :posts="data?.posts" :sidebar="true" />
        </div>
    </div>
</template>
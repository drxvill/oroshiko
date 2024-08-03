<script lang="ts" setup>
const { posts, sidebar } = defineProps(["posts", "sidebar"]);
</script>

<template>
    <div v-if="posts.length > 0">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-4" v-if="sidebar !== true">
            <UButton v-for="post in posts" :to="`/post/${post.id}`" color="white" size="lg"
                class="block group space-y-2">
                <div class="w-full h-44 rounded-md overflow-hidden">
                    <NuxtImg :src="post.cover" :alt="post.title" format="webp" quality="80" sizes="100vw" placeholder
                        width="100" height="100"
                        class="w-full h-full rounded-md object-cover transition-transform group-hover:scale-110" />
                </div>
                <p class="text-lg font-medium line-clamp-2">{{ post.title }}</p>
                <p class="font-light opacity-75 line-clamp-2">{{ post.description }}</p>
                <p class="text-primary font-normal">{{ post.author }}</p>
            </UButton>
        </div>
        <div class="grid grid-cols-1 gap-2 mx-4" v-else>
            <UButton v-for="post in posts" :to="`/post/${post.id}`" color="white" size="md">
                <NuxtImg :src="post.cover" :alt="post.title" format="webp" quality="80" sizes="100vw" placeholder
                    width="100" height="100" class="w-36 md:w-44 lg:w-40 rounded-md object-cover" />
                <div class="flex flex-col">
                    <p class="text-lg font-medium line-clamp-2">{{ post.title }}</p>
                    <p class="font-light opacity-75 line-clamp-2">{{ post.description }}</p>
                </div>
            </UButton>
        </div>
    </div>
    <div class="flex justify-center items-center h-80" v-else>
        <p class="text-xl font-bold">No Posts Yet</p>
    </div>
</template>
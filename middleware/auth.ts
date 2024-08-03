import { usePocketbase } from "@/composables/Pocketbase";

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (process.server) return;
    const pocketbase = usePocketbase();
    const isLoggedIn = await pocketbase.authStore.isValid
    if (!isLoggedIn) {
        return navigateTo("/auth");
    }
});
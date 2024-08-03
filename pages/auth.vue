<script lang="ts" setup>
import Joi from "joi";
import type { FormSubmitEvent } from "#ui/types";

definePageMeta({ layout: "auth" });

const pocketbase = usePocketbase();
const toast = useToast();

const loading = ref(false);

const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
});

const state = reactive({
    username: undefined,
    password: undefined
});

async function onSubmit(event: FormSubmitEvent<any>) {
    loading.value = true
    await pocketbase.collection("users").authWithPassword(event.data.username, event.data.password)
        .then(() => {
            loading.value = false
            toast.add({ title: "Success", description: "Successfully logged in!" });
            navigateTo("/panel");
        })
        .catch(() => {
            loading.value = false
            toast.add({ title: "Error", description: "Please verify your credentials!" });
        })
}
</script>

<template>
    <div class="flex flex-col justify-center items-center gap-8 h-screen">
        <p class="text-2xl font-bold">Authentication</p>
        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
            <UFormGroup name="username" label="Username" size="lg" required>
                <UInput type="text" placeholder="Username" icon="i-heroicons-at-symbol-16-solid"
                    v-model="state.username" />
            </UFormGroup>
            <UFormGroup name="password" label="Password" size="lg" required>
                <UInput type="password" placeholder="•••••••••••••" icon="i-heroicons-shield-exclamation-16-solid"
                    v-model="state.password" />
            </UFormGroup>
            <UButton type="submit" icon="i-heroicons-arrow-left-end-on-rectangle-16-solid"
                :label="loading ? 'Authenticating' : 'Authenticate'" variant="soft" size="lg" block
                :loading="loading" />
        </UForm>
        <UButton to="https://github.com/drxvill" target="_blank" label="Github" color="white" variant="ghost" />
    </div>
</template>
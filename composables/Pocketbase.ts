import PocketBase from "pocketbase";

export const usePocketbase = () => {
    const config = useRuntimeConfig();
    const pb = new PocketBase(config.public.POCKETBASE as string);
    return pb as PocketBase
}
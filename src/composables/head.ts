import { useHead } from '@vueuse/head';

export const useMeta = (data: any) => {
    return useHead({ ...data, title: `${data.title} | starter` });
};

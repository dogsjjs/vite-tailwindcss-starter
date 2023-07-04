<template>
	<div class="main-section antialiased relative font-ali text-sm font-normal">
		<component v-bind:is="appLayout"></component>
	</div>
</template>

<script lang="ts" setup>
import appLayout from '@/layouts/app-layout.vue';
import { useMeta } from '@/composables/head';
useMeta({ title: 'vite-tailwindcss' });
</script>
@/composables/head
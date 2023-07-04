<template>
	<div class="w-full flex justify-center items-center min-h-screen bg-gradient-to-t from-[#a65fe0] to-[#1079ae]">
		<div class="text-center p-5 font-semibold">
			<h2 class="text-[50px] md:text-[80px] leading-none mb-8 font-bold">404</h2>
			<p class="text-base">这里是无人的领地...</p>
			<router-link to="/" class="btn btn-primary mt-10 w-max mx-auto">返回</router-link>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { useMeta } from '@/composables/head';
useMeta({ title: '404' });
</script>
@/composables/head
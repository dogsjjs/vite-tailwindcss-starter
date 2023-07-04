<template>
  <div
    class="w-full flex flex-col gap-5 justify-center items-center min-h-screen bg-gradient-to-t from-[#a65fe0] to-[#1079ae]">
    <div class="panel w-[1000px] h-[500px] flex flex-col justify-between">
      <div class="flex text-center items-center justify-between">
        <div class="space-y-3">
          <button class="btn btn-sm btn-success" type="button">
            <Icon icon="heroicons:tag" class="w-5 h-5 mr-1" />
            add
          </button>
          <button class="btn btn-primary" type="button">
            <Icon icon="heroicons:tag" class="w-5 h-5 mr-1" />
            update
          </button>
          <button class="btn btn-lg btn-danger" type="button">
            <Icon icon="heroicons:tag" class="w-5 h-5 mr-1" />
            remove
          </button>
          <button class="btn btn-sm btn-outline-success" type="button">
            <Icon icon="heroicons:tag" class="w-5 h-5 mr-1" />
            add
          </button>
          <button class="btn btn-outline-primary" type="button">
            <Icon icon="heroicons:tag" class="w-5 h-5 mr-1" />
            update
          </button>
          <button class="btn btn-lg btn-outline-danger" type="button">
            <Icon icon="heroicons:tag" class="w-5 h-5 mr-1" />
            remove
          </button>
          <a class="btn btn-dark flex items-center justify-center rounded-full w-10 h-10 p-0" target="_blank"
            href="https://github.com/dogsjjs">
            <Icon icon="ant-design:github-filled" class="w-5 h-5" />
          </a>
        </div>
        <div class="space-y-3 flex flex-col">
          <span class="text-md text-primary">123</span>
          <span class="text-base">123</span>
          <span class="text-lg text-secondary">123</span>
          <span class="text-xl text-success">123</span>
          <span class="text-2xl text-danger">123</span>
          <span class="text-3xl text-warning">123</span>
          <span class="text-4xl text-info">123</span>
        </div>
        <div class="space-y-3 flex flex-col dark:text-white-light">
          <span class="text-md">123</span>
          <span class="text-base">123</span>
          <span class="text-lg">123</span>
          <span class="text-xl">123</span>
          <span class="text-2xl">123</span>
          <span class="text-3xl">123</span>
          <span class="text-4xl">123</span>
        </div>
        <div class="flex items-center justify-center">
          <blockquote
            class="w-full overflow-hidden h-full text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]">
            <div class="flex items-start mb-3">
              <p class="not-italic text-[#515365] text-sm dark:text-white-light m-0">
                君子求诸己，小人求诸人。
              </p>
            </div>
            <small
              class="w-full not-italic text-xs text-[#777] block before:w-3 before:h-[1px] before:bg-[#777] before:inline-block before:opacity-50 before:relative before:-top-1 ltr:before:mr-1 rtl:before:ml-1">
              孔子<cite class="italic">《论语·卫灵公》</cite></small>
            <div class="relative">
              <div class="absolute -bottom-12 ltr:-right-12 rtl:-left-12 w-24 h-24">
                <Icon icon="bx:text" class="text-primary opacity-20 w-full h-full" />
              </div>
            </div>
          </blockquote>
        </div>
      </div>

      <div class="dark:text-white text-center flex flex-col items-center justify-center gap-2">
        <div class="flex gap-3">
          <a class="btn flex items-center justify-center rounded-full w-10 h-10 p-0" target="_blank"
            href="https://tailwindcss.com/">
            <Icon icon="devicon:tailwindcss" class="w-5 h-5" />
          </a>
          <a class="btn flex items-center justify-center rounded-full w-10 h-10 p-0" target="_blank"
            href="https://vitejs.dev/">
            <Icon icon="devicon:vitejs" class="w-5 h-5" />
          </a>
        </div>
        <span>© {{ new
          Date().getFullYear() }}. 爱来自瓷器 by haowen.
        </span>
      </div>
    </div>
    <div>
      <a href="javascript:;" v-show="appStore.theme === 'light'"
        class="flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
        @click="appStore.toggleTheme('dark')">
        <Icon icon="heroicons:moon" class="w-5 h-5" />
      </a>
      <a href="javascript:;" v-show="appStore.theme === 'dark'"
        class="flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
        @click="appStore.toggleTheme('light')">
        <Icon icon="heroicons:sun" class="w-5 h-5" />
      </a>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useMeta } from '@/composables/head';
import { useAppStore } from '@/stores/index';
useMeta({ title: 'Index' });
const appStore = useAppStore();
</script>
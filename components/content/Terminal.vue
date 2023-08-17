<template>
  <VTermynal class="terminal" lazy forward-button restart-button>
    <VtInput>git clone git@github.com:decentfox/freeauth-api.git</VtInput>
    <VtText :line-delay="0">Cloning into 'freeauth-api'...</VtText>
    <VtProgress :progress-length="36" />
    <VtInput>cd freeauth-api</VtInput>
    <VtInput>make setup</VtInput>
    <VtText :line-delay="0">Installing...</VtText>
    <VtProgress :progress-length="36" />
    <VtText>
      <span class="text-green-500">All set!</span>
      Run `make dev` to start a uvicorn dev server on port 5001.
    </VtText>
    <VtInput>make dev</VtInput>
    <VtText>
      <span class="text-green-500">INFO</span>
      Uvicorn running on <span class="text-blue-500">http://0.0.0.0:5001</span> (Press CTRL+C to quit)
    </VtText>
    <VtText>
      <span class="text-green-500">INFO</span>
      Application startup complete.
    </VtText>
  </VTermynal>
</template>

<script setup lang="ts">
import { VTermynal, VtInput, VtProgress, VtText } from '@lehoczky/vue-termynal';
</script>

<style lang="ts" scoped>
css({
  '.terminal': {
    fontSize: '0.875rem;',
    padding: '55px 18px 25px',
    width: 'inherit',

    '.vt__line': {
      whiteSpace: 'inherit'
    }
  }
});
</style>

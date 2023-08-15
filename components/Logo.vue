<template>
  <div style="width: 120px; height: 28px" />
</template>

<style lang="ts" scoped>
css({
  div: {
    backgroundImage: 'url("/logo.png")',
    backgroundSize: '120px 28px',
    '@dark': {
      backgroundImage: 'url("/logo-dark.png")'
    }
  }
});
</style>

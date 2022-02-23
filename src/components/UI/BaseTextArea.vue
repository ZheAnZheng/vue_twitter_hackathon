<template>
  <form action="">
    <textarea name="" id="" placeholder="有什麼新鮮事？"></textarea>
  </form>
</template>

<script>
export default {
  name: 'BaseTextArea',
}
</script>

<style lang="scss" scoped>
textarea {
  padding: 3% 0 0 10%;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  border-bottom-width: 0.6rem;
  border-color: var(--share-border-color);
  resize: none;
  font-size: 1rem;
  height: 10rem;
  width: 100%;
  &::placeholder {
    font-size: 1rem;
    color: var(--share-placeholder-color);
  }
}
</style>
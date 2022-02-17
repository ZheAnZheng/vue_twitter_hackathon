<template>
  <form>
    <div v-for="item in formItems" :key="item.id" class="input-group">
      <label :for="item.name">{{ item.name }}</label>
      <input :id="item.name"/>
    </div>
  </form>
</template>
<script>
export default {
  props: {
    formItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
form{
    width: 100%;
    flex:2;
    margin-bottom:40px;
}
.input-group {
  width: 100%;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  label {
    display: block;
    font-size: 15px;
    color: var(--mute-color);
  }
  input {
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    border: 0px;
    border-bottom: 2px solid var(--mute-color);
  }
}
@media screen and (min-width: 450px) {
  .input-group {
    margin-bottom: 30px;
  }
}
</style>

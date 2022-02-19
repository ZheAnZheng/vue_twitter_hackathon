<template>
  <button :class="[modeStyle, positionStyle]" @click="handleClick">
    <slot></slot>
  </button>
</template>
<script>
//API說明
//mode     接受action actionOutline 預設default
//position 接受right 預設center
//透過@handleClick觸發事件
//slot則是按鍵文字
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: "default",
    },
    position: {
      type: String,
      required: false,
      default: "center",
    },
  },
  computed: {
    modeStyle() {
      if (this.mode === "action") {
        return "action";
      } else if (this.mode === "actionOutline") {
        return "actionOutline";
      } else {
        return "default";
      }
    },
    positionStyle() {
      if (this.position === "right") {
        return "positionRight";
      } else {
        return "";
      }
    },
  },
  methods: {
    handleClick() {
      this.$emit("handleClick");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/extends.scss";
.action {
  @extend %button-style;
  background-color: var(--primary-color);
  color: var(--white-text-color);
}
.actionOutline {
  @extend %button-style;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}
.default {
  @extend %button-style;
  background-color: rgba(0, 0, 0, 0);
  color: var(--blue-text-color);
}
.positionRight {
  display: inline;
  width: max-content;
  float: right;
}
.positionRight {
  @extend %button-style;
  color: var(--blue-text-color);
}
</style>

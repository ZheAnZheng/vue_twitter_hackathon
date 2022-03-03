<template>
  <div class="theme-toggle">
    <div>夜間模式</div>
    <div class="swtich-road" :class="{ 'switch-on': isSwitchOn }">
      <div class="switch-ball" @click="toggleSwitch"></div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const themeColor = localStorage.getItem("THEME_KEY");
    if (themeColor) {
      this.themeMode = themeColor;
      this.isSwitchOn = themeColor === "dark" ? true : false;
    }
  },
  data() {
    return {
      isSwitchOn: false,
      themeMode: "light",
    };
  },
  methods: {
    toggleSwitch() {
      this.isSwitchOn = !this.isSwitchOn;
      if (this.themeMode === "light") {
        this.themeMode = "dark";
        this.turnTheme(this.themeMode);
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        this.themeMode = "light";
        this.turnTheme(this.themeMode);
      }
      this.saveTheme();
    },
    turnTheme(mode) {
      document.documentElement.setAttribute("data-theme", mode);
    },
    saveTheme() {
      localStorage.setItem("THEME_KEY", this.themeMode);
    },
  },
};
</script>
<style lang="scss" scoped>
.theme-toggle {
  width: 100%;
  &:nth-of-type(1) {
    cursor: default;
  }
  .swtich-road {
    position: relative;
    width: 100px;
    height: 30px;
    border-radius: 100px;
    box-shadow: inset 1px 1px 4px 0 rgba(0, 0, 0, 0.3);
    &::before {
      content: "";
      display: inline-block;
      z-index: 50;
      width: 30%;
      border-radius: 100px;
      height: 30px;
      transition: all 0.2s ease;
      background: var(--primary-color);
    }
    &.switch-on::before {
      width: 100%;
    }
    &.switch-on .switch-ball {
      left: 70%;
    }
  }
  .switch-ball {
    display: inline-block;
    position: absolute;
    width: 30px;
    height: 30px;
    left: 0;
    border-radius: 50%;
    background-color: var(--white-text-color);
    transition: all 0.2s;
    z-index: 100;
    box-shadow: inset -1px -1px 3px 0 rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
}
</style>

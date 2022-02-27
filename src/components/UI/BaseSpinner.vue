<template>
  <div class="spinner">
    <div class="ball-box">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@mixin setDelay() {
  $delay: -0.04s;
  @for $i from 1 through 8 {
    &:nth-child(#{$i}) {
      animation-delay: $delay;
    }
    $delay: $delay - 0.04s;
  }
}
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
}
.ball-box {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    animation: ball-rolling 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--primary-color);
      margin: -4px 0 0 -4px;
    }
    @include setDelay();
    &:nth-child(1)::after {
      top: 63px;
      left: 63px;
    }
    &:nth-child(2)::after {
      top: 68px;
      left: 56px;
    }
    &:nth-child(3)::after {
      top: 71px;
      left: 48px;
    }
    &:nth-child(4)::after {
      top: 72px;
      left: 40px;
    }
    &:nth-child(5)::after {
      top: 71px;
      left: 32px;
    }
    &:nth-child(6)::after {
      top: 68px;
      left: 24px;
    }
    &:nth-child(7)::after {
      top: 63px;
      left: 17px;
    }
    &:nth-child(8)::after {
      top: 56px;
      left: 12px;
    }
  }
}

@keyframes ball-rolling {
  0% {
    transform: rotate(0deg);
    opacity: 0.5;
  }
  100% {
    transform: rotate(360deg);
    opacity: 0.8;
  }
}
</style>

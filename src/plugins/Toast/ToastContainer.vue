<template>
  <transition-group
    name="toast"
    tag="div"
    class="container"
    :style="{ 'pointer-events': $root.toasts.length > 0 ? 'all' : 'none' }"
  >
    <div
      class="toast-item-container v-application"
      v-for="i in $root.toasts"
      :key="i.id"
      :style="{
        color: i.color
      }"
      @click="handleClick"
    >
      <div class="toast-item" :style="i.style">
        {{ i.msg }}
      </div>
    </div>
  </transition-group>
</template>

<script>
export default {
  methods: {
    handleClick() {
      // this.$toast.success("hhh");
      // console.log("click");
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin portrait() {
  @media (max-width: 50rem) {
    @content;
  }
}

$spacing: 0.6em;
$slot-height: 1.4em+2 * $spacing;

.container {
  // Customize this
  right: 0;
  bottom: 0;

  max-width: 25em;
  width: 100%;

  padding: 3 * $spacing;

  @include portrait {
    max-width: 100vw;
    width: 100%;
    padding: $spacing/2;
  }

  position: fixed;
  // border: 1px solid red;
  z-index: 1000;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.toast-item-container {
  width: 100%;
  // border: 1px solid red;
  position: relative;
  box-sizing: border-box;
  height: $slot-height + 2 * $spacing;
  transition: transform 0.2s;

  &:hover {
    transform: scale(0.97);
  }
}
.toast-item {
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - #{2 * $spacing});
  height: calc(100% - #{2 * $spacing});
}
.toast-item {
  padding: $spacing 1.3 * $spacing;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;

  overflow: hidden;
  white-space: nowrap;
  border-radius: 0.3em;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1),
    0px 4px 5px 0px rgba(0, 0, 0, 0.07), 0px 1px 10px 0px rgba(0, 0, 0, 0.06) !important;
}

.toast-enter-active {
  transition: height 1s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.2s,
    transform 1s cubic-bezier(0.23, 1, 0.32, 1);
}
.toast-leave-active {
  transition: height 1s cubic-bezier(0.23, 1, 0.32, 1) 0.9s,
    opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.2s,
    transform 1s cubic-bezier(0.23, 1, 0.32, 1);
}

.toast-enter,
.toast-leave-to {
  opacity: 0;
  height: 0;
  transform: translateX(1em);
}
</style>

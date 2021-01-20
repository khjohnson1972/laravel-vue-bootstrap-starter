<template>
    <div
        v-if="shown"
        class="alert rounded-0 mb-3 alert-dismissible fade show"
        role="alert"
        :class="status"
    >
        <span
            class="font-weight-bold mr-2"
        >{{ alert.title }}</span>
        <span>{{ alert.message }}</span>
        <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
        >
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
export default {
  props: {
    alert: {
      type: Object,
      default: () => {}
    }
  },
  computed: {

    shown: function () {
      return this.alert.title || this.alert.message
    },

    status: function () {
      if (['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(this.alert.context)) {
        return 'alert-' + this.alert.context
      }

      return 'alert-info'
    }
  }
}
</script>

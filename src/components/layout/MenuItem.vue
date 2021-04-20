<template>
  <v-list-item
    v-bind:class="{ darkItem: isDark }"
    style="margin: 0; border-radius: 0; padding-bottom: 8px"
  >
    <v-list-item-icon>
      <button button @click="clicked">
        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-img
              v-bind="attrs"
              v-on="on"
              :src="icon"></v-img>
          </template>
          <span>{{ $t('title') }}</span>
        </v-tooltip>
      </button>
    </v-list-item-icon>
  </v-list-item>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    icon: {
      required: true,
      type: String
    },
    iconActive: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    isDark: {
      required: false,
      type: Boolean,
      default: false
    },
    clicked: { type: Function, required: false }
  }
}
</script>

<style lang="stylus" scoped>
  .darkItem
    background-color #207199
</style>

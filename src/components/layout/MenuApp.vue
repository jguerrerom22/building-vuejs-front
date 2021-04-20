<template>
  <div>
    <v-card>
      <v-navigation-drawer permanent class="nav-drawer">
        <div>

          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img :src="require('@/assets/img/logo.png')"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list dense nav class="p-0">
            <MenuItem
              v-for="item in menu.items"
              :key="item.title"
              :icon="item.icon"
              :iconActive="item.icon"
              :title="item.title"
              :isDark="item.isDark"
              :clicked="openChilds"
            />
          </v-list>

          <div class="footer-nav-drawer">
            <v-list dense nav class="p-0">
              <MenuItem
                v-for="item in menu.footerItems"
                :key="item.title"
                :icon="item.icon"
                :iconActive="item.icon"
                :title="item.title"
                :isDark="item.isDark"
                :clicked="openChilds"
              />
            </v-list>
          </div>

        </div>

      </v-navigation-drawer>

      <!-- Submenu -->
      <v-navigation-drawer
        v-model="drawer"
        v-if="subMenu.length>0"
        absolute
        temporary
        hide-overlay
        @transitionend="cerrar"
        class="sub-nav-drawer"
      >
        <v-list dense>
          <v-list-item
            v-for="item in subMenu"
            :key="item.title"
            link
          >
            <v-list-item-content>
              <v-list-item-title style="color: #FFF">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/footer/AuthFooter'
import MenuItem from '@/components/layout/MenuItem'

export default {
  components: { Footer, MenuItem },
  data () {
    return {
      drawer: null,
      subMenu: [],
      menu: {
        items: [
          {
            title: 'Dashboard',
            icon: require('@/assets/img/icons/icon_home.png'),
            isDark: true,
            active: false
          },
          {
            title: 'Edificios',
            icon: require('@/assets/img/icons/icon_building.png'),
            isDark: true,
            active: false,
            subMenu: [
              { title: 'Edificio 1' },
              { title: 'Edificio 2' },
              { title: 'Edificio 3' }
            ]
          },
          {
            title: 'Comunicación',
            icon: require('@/assets/img/icons/icon_communication.png'),
            isDark: false,
            active: false,
            subMenu: [
              { title: 'Uno a uno' },
              { title: 'Todos' }
            ]
          },
          {
            title: 'Espacios',
            icon: require('@/assets/img/icons/icon_calendar.png'),
            isDark: false,
            active: false
          },
          {
            title: 'Residentes',
            icon: require('@/assets/img/icons/icon_resident.png'),
            isDark: false,
            active: false
          }
        ],
        footerItems: [
          {
            title: 'Perfil',
            icon: require('@/assets/img/icons/icon_profile.png'),
            isDark: true,
            active: false
          },
          {
            title: 'Log out',
            icon: require('@/assets/img/icons/icon_exit.png'),
            isDark: true,
            active: false
          }
        ]
      },
      right: null
    }
  },
  methods: {
    openChilds (item) {
      this.subMenu = item.subMenu
      console.log('antes', this.drawer)
      if (this.drawer === true) {
        return false
      } else {
        this.drawer = !this.drawer
      }
      console.log('despues', this.drawer)
      /*
      this.items.map(x => (x.active = false))
      // this.drawer = false
      this.subMenu = []
      // console.log(item)
      // this.drawer = true
      if (item.subMenu && item.subMenu.length > 0) {
        this.subMenu = item.subMenu
        if (this.drawer === true) {
          this.drawer = false
        } else {
          this.drawer = true
        }
      }
      */
      // if (item.subMenu && item.subMenu.length > 0) {
      //   this.subMenu = item.subMenu
      //   item.active = true
      //   console.log(this.subMenu)
      //   this.drawer = true
      // }

      // // this.drawer = !this.drawer
      // console.log(this.drawer)
    },
    cerrar () {
      // if (this.drawer === true) {
      //   this.drawer = true
      // }
      // // this.drawer = !this.drawer
      // console.log(this.drawer)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .nav-drawer
    height 97vh !important
    width 53px !important
    background-color #3B95B8 !important
    border-radius 0 !important
    position relative !important

  .footer-nav-drawer
    bottom 0
    position fixed

  .sub-nav-drawer
    left 52px
    background-color #3B95B8
    box-shadow none
    height calc(100vh - 24px)
    border-radius 0
</style>

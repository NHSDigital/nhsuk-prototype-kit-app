import { Component } from '/nhsuk-frontend/nhsuk-frontend.min.js'

export class NativeHeader extends Component {
  static moduleName = 'app-native-header'

  constructor($root) {
    super($root)
    window.addEventListener('scroll', this.onScroll.bind(this), { passive: true })
  }

  onScroll() {
    this.$root.classList.toggle('stuck', window.scrollY > 0)
  }
}

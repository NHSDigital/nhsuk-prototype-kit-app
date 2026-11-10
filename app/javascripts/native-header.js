class NativeHeader {
  static moduleName = 'app-native-header'

  constructor($root) {
    this.$root = $root
    window.addEventListener('scroll', this.onScroll.bind(this), { passive: true })
  }

  onScroll() {
    this.$root.classList.toggle('stuck', window.scrollY > 0)
  }
}

document.querySelectorAll(`[data-module="${NativeHeader.moduleName}"]`).forEach(($root) => {
  new NativeHeader($root)
})

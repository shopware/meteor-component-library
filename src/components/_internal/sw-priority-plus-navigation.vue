<script>
function getWidth(el) {
  const styles = window.getComputedStyle(el)
  const margin = parseFloat(styles['marginLeft']) +
    parseFloat(styles['marginRight'])

  return Math.ceil(el.offsetWidth + margin)
}

export default {
  name: 'PriorityPlusMenu',

  props: {
    list: {
      type: Array,
      required: true,
      default () { return [] }
    },
    offsetFactor: {
      type: Number,
      default: 2.0
    }
  },

  data () {
    return {
      accumItemWidths: []
    }
  },

  computed: {
    mainItems () {
      return this.list.filter((item) => !item.hidden)
    },

    moreItems () {
      return this.list.filter((item) => item.hidden)
    },

    hasHiddenItems () {
      return !!this.moreItems.length
    }
  },

  beforeCreate () {
    this.$options.propsData.list.forEach((item) => {
      this.$set(item, 'hidden', false)
    })
  },

  async mounted () {
    await this.$nextTick()

    this.storeItemWidths()
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },

  beforeUpdate () {
    this.handleResize()
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    storeItemWidths () {
      let sum = 0
      const els = Array.prototype.slice.call(this.$el.children || [])
      this.list.forEach((item, index) => {
        this.$set(item, 'width', getWidth(els[index]))
        sum += item.width
        this.$set(this.accumItemWidths, index, sum)
      })
    },

    getContainerWidth () {
      let offset = 0

      if (this.hasHiddenItems) {
        const els = Array.prototype.slice.call(this.$el.children || [])
        const el = els[els.length - 1]
        els && el && ( offset = getWidth(el) * this.offsetFactor )
      }

      return this.$el.offsetWidth - offset
    },

    getLastVisibleItemIndex () {
      let index = 0
      const containerWidth = this.getContainerWidth()

      while (index < this.accumItemWidths.length) {
        if (this.accumItemWidths[index] > containerWidth) {
          index--
          break
        }
        index++
      }

      return index
    },

    async handleResize () {
      await this.$nextTick()

      const lastVisibleItemIndex = this.getLastVisibleItemIndex()

      this.list.forEach((item, index) => {
        const hidden = index > lastVisibleItemIndex
        this.$set(item, 'hidden', hidden)
      })
    }
  },

  render () {
    return this.$scopedSlots.default({
      mainItems: this.mainItems,
      moreItems: this.moreItems
    })
  }
}
</script>
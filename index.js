var app = new Vue({
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    description: '“A pair of warm, fuzzy socks”',
    selectedVariant: 0,
    imageAlt: 'A pair of socks',
    linkHref: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding',
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green.png',
        variantQuantity: 10,
        variantOnSale: 1
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue.png',
        variantQuantity: 0,
        variantOnSale: 0
      },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      this.cart -= 1;
    },
    updateProduct(index){
      this.selectedVariant = index
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    imageSrc() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock(){
      return this.variants[this.selectedVariant].variantQuantity
    },
    onSale(){
      return this.variants[this.selectedVariant].variantOnSale
    }
  }
})
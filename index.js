var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: '“A pair of warm, fuzzy socks”',
    imageSrc: './assets/vmSocks-green.png',
    imageAlt: 'A pair of socks',
    linkHref: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding',
    inStock: false,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green.png'
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue.png'
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
    updateProduct(variantImage){
      this.imageSrc = variantImage
    },

  }
})
Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div class="product">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <a :href="linkHref" :title="imageAlt">
      <img :src="imageSrc" :alt="imageAlt" width="400" height="400">
    </a>
    <p v-if="inStock">In Stock</p>
    <p v-else :class="{ outOfStockText: !inStock }">
      Out Of Stock
    </p>
    <p>{{ sale }}</p>
    <p>Shipping: {{ shipping }}</p>
    <product-details :details="details"></product-details>
    <div  class="color_box"
          v-for="(variant, index) in variants" 
          :key="variant.variantId"
          :style="{ backgroundColor: variant.variantColor }"
          @mouseover="updateProduct(index)"
          >
    </div>
    <ul>
      <li v-for="size in sizes">{{ size }}</li>
    </ul>
    <button v-on:click="addToCart" 
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }"
            >
            Add to Cart
    </button>
    <button v-on:click="removeFromCart"
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }"
            >
            Remove from Cart
    </button>
  </div>
  `,
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      description: '“A pair of warm, fuzzy socks”',
      selectedVariant: 0,
      imageAlt: 'A pair of socks',
      linkHref: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding',
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [{
          variantId: 2234,
          variantColor: 'green',
          variantImage: './assets/vmSocks-green.png',
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: './assets/vmSocks-blue.png',
          variantQuantity: 0,
        },
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      onSale: true,
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
    },
    updateProduct(index) {
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
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    sale() {
      if (this.onSale) {
        return this.brand + ' ' + this.product + ' are on sale!'
      }
      return this.brand + ' ' + this.product + ' are not on sale'
    },
    shipping() {
      if (this.premium) {
        return "Free"
      }
      return 2.99
    }
  }
})

Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    removeProduct(id) {
      this.cart.pop(id)
    }
  }
})
var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: '“A pair of warm, fuzzy socks”',
    imageSrc: './assets/vmSocks-green.png',
    imageAlt: 'A pair of socks',
    linkHref: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding',
    inStock: true,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green'
      },
      {
        variantId: 2235,
        variantColor: 'blue'
      },
    ],
    sizes: ['S', 'M', 'L', 'XL']
  }
})
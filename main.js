var app = new Vue({
  el: ".tomatos-block, .middle-text , .contant-contact",
  data: {
    products: [
      {
        id: "greip1",
        title: "Pink grapefruit",
        image: "greip1.png",
        shortText: "Short description 1",
        desc: "Full description",
      },
      {
        id: "greip2",
        title: "White grapefruit",
        image: "greip2.png",
        shortText: "Short description 2",
        desc: "Full description",
      },
      {
        id: "greip3",
        title: "Ruby red grapefruit",
        image: "greip3.png",
        shortText: "Short description 3",
        desc: "Full description",
      },
      {
        id: "greip4",
        title: "Star ruby grapefruit",
        image: "greip4.png",
        shortText: "Short description 4",
        desc: "Full description",
      },
      {
        id: "greip5",
        title: "Oroblanco grapefruit",
        image: "greip5.png",
        shortText: "Short description 5",
        desc: "Full description",
      },
      {
        id: "greip6",
        title: "Marsh red grapefruit",
        image: "greip6.png",
        shortText: "Short description 6",
        desc: "Full description",
      },
    ],
    product: [],
    btnVisible: false,
    cart: [],
    contactFields: [],
    order: 0,
  },
  mounted: function () {
    this.getProduct();
    this.checkInCart();
    this.getCart();
  },
  methods: {
    getProduct: function () {
      var id = window.location.hash.replace("#", "");
      for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id === id) {
          this.product = this.products[i];
          break;
        }
      }
    },
    addToCart: function (id) {
      var cart = [];
      if (window.localStorage.getItem("cart")) {
        cart = window.localStorage.getItem("cart").split(",");
      }
      if (cart.indexOf(String(id))) {
        cart.push(id);
        window.localStorage.setItem("cart", cart.join());
        this.btnVisible = true;
      }
    },
    checkInCart() {
      if (
        this.product &&
        this.product.id &&
        window.localStorage
          .getItem("cart")
          .split(",")
          .indexOf(String(this.product.id)) != -1
      )
        this.btnVisible = true;
    },
    getCart() {
      if (window.localStorage.getItem("cart") != null) {
        if (this.products != null && this.products.length > 0) {
          for (let i in this.products) {
            if (
              this.products[i] != null &&
              this.products[i].id != null &&
              window.localStorage
                .getItem("cart")
                .split(",")
                .indexOf(String(this.products[i].id)) != -1
            )
              this.cart.push(this.products[i]);
          }
        }
      }
    },
    removeFromCart(id) {
      let cart = [];
      if (window.localStorage.getItem("cart") != null) {
        cart = window.localStorage.getItem("cart").split(",");
      }
      if (cart.indexOf(String(id)) != -1) {
        cart.splice(cart.indexOf(String(id)), 1);
        window.localStorage.setItem("cart", cart.join(","));
        this.cart = [];
        this.getCart();
      }
    },
    makeOrder() {
      this.cart = [];
      window.localStorage.setItem("cart", "");
      this.order = 1;
    },
  },
});

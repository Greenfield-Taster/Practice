var app = new Vue({
  el: ".tomatos-block, .middle-text",
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
        image: "greip5.png",
        shortText: "Short description 6",
        desc: "Full description",
      },
    ],
    product: [],
    btnVisible: false,
  },
  mounted: function () {
    this.getProduct();
  },
  // methods: {
  //   getProduct: function () {
  //     if (window.location.hash != null) {
  //       let id = window.location.hash.replace("#", "");
  //       if (this.products != null && this.products.lenght > 0) {
  //         for (let i in this.products) {
  //           if (
  //             this.products[i] != null &&
  //             this.products[i].id != null &&
  //             this.products[i].id == id
  //           )
  //             this.product = this.products[i];
  //         }
  //       }
  //     }
  //   },
  // },
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
  },
});


/* new Vue({
    el: "#app",
    data: {
      isChecked: false,
      list: [],
      typeList: [
        {
          name: "1",
          count: 1,
          price: 500,
          src: "https://goo.gl/sx49fZ",
          height: 30
        },
        {
          name: "2",
          count: 1,
          price: 600,
          src: "https://goo.gl/wuSrxR",
          height: 50
        },
        {
          name: "3",
          count: 1,
          price: 700,
          src: "https://goo.gl/cZxFFp",
          height: 40
        }
      ]
    },
    methods: {
      deleteOne(index) {
        this.list[index].count--;
      },
      addOne(index) {
        this.list[index].count++;
      },
      getAllProduct() {
        this.list = !this.isChecked ? this.typeList : [];
      },
      checkAll() {
        this.list.length == this.typeList.length - 1
          ? (this.isChecked = true)
          : (this.isChecked = false);
      }
    },
    computed: {
      tatalPrice() {
        let price = 0;
        this.list.forEach((item, index) => {
          if (!/^\+?[1-9][0-9]*$/.test(item.count)) {
            this.list[index].count = 1;
          }
          price = price + item.price * item.count;
        });
        return price;
      }
    }
  }); */
  
import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'เมล็ดกาแฟโคลัมเบีย', img: 'https://image.makewebeasy.net/makeweb/m_1920x0/ptdiLL6vH/Product/IMG_1951.jpg', price: 220 },
    { name: 'เมล็ดกาแฟคั่ว อาราบิก้า100%', img: 'https://th-test-11.slatic.net/p/538a13ac29ca7a7b3a02e00ec25b7583.jpg', price: 180 },
    { name: 'เมล็ดกาแฟคั่วบด', img: 'https://th-live.slatic.net/p/eceefd163c63dde71142ee5df1501571.jpg', price: 360 },
    { name: 'เมล็ดกาแฟยูนนาน', img: 'https://www.linlin.in.th/wp-content/uploads/chinese-coffee-pack.jpg', price: 1440 },
    { name: 'มูสเค้ก ชาเขียว', img: 'https://talk.mthai.com/storage/uploads/2019/04/26/254b8c6f2af3e2250d900a8afe50521c.jpeg', price: 290 },
    { name: 'แพนเค้ก ชาเขียว', img: 'https://image.sistacafe.com/images/uploads/content_image/image/753945/1536462276-Matcha_Green_Tea_Pancakes1_resized_b1b23f1f-4e23-47ea-a1d1-c7518ac97153_1200x.jpg', price: 199 },
    { name: 'ช็อคโกแล็ตลาวา', img: 'https://www.makro.co.th/imgadmins/img_detail_food/th/135217.jpg', price: 125 },
    { name: 'เค้กชาเขียว', img: 'https://www.thaicity.co.th/uploads/kitchen/20201117/adefgpx16789.jpg', price: 180 },


  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});

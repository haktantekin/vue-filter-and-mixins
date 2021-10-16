export const productMixin = {
    data(){
        return{
          products: ["Monitör","Klavye","Masa","Kitap","Şişe", "Hard Disk"],
          searchText:''
        }
      },
      computed:{
        filtered(){
          return this.products.filter((element) =>{
            return element.match(this.searchText);
          })
        }
      }
}

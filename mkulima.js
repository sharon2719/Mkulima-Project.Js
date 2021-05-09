class Mkulima{
    constructor(){
        this.farms=[];
        this.products=[];
        this.orders=[];
        this.vendor=[];
    }
    addFarm(farmId,name,farmer,phone,address){
        return this.farms.push({farmId,name,farmer,phone,address});
    }
    removeFarm(farmId){
        let farm=this.farms.find(farm => farm.farmId === farmId);
        return delete this.farms[farm];
    }
    updateFarm(farmId,name,farmer,phone,address){
      var farmUpdates={farmId,name,phone,address};
      this.farms.farmId=farmId;
      this.farms.name=name;
      this.farms.famer=farmer;
      this.farms.phone=phone;
      this.farms.address=address;
      return farmUpdates;
    }
    getFarm(farmId){
        let farm=this.farms.find(farm => farm.farmId === farmId);
        return farm;
    }
    addProduct(productId,name,price){
        return this.products.push({productId,name,price});

    }
    removeProduct(productId){
        let item=this.products.find(product => product.productId === productId);
        return delete this.products[item];
    }
    updateProduct(productId,name,price){
       
       this.products.productId=productId;
       this.products.name=name;
       this.products.price=price;
       var productUpdate={productId,name,price};
       return productUpdate;
    }
    getProduct(productId){
        let product=this.products.find(product => product.productId === productId);
        return product;
    }
    printProducts(){
        for (let good of this.products){
            console.log(`${good.name}:${good.price}`);
        }
    }
   
    calculateOrderCost(productId,quantity){
      let items=this.products.find(items=>items.productId===productId);
      return items.price*quantity;
    }
    addVendor(id,storename,phoneNumber){
        return this.vendor.push({id,storename,phoneNumber});
    }


}
let mkulima=new Mkulima();
console.log(mkulima.addFarm(801,"KenFarm","Peter",254724567453,"Nakuru"));
console.log(mkulima.addFarm(786,"Laminin","John",254713456238,"Laikipia"))
console.log(mkulima.addFarm(561,"Delamare","Lord Delamare",254112678654,"Naivasha"));
console.log(mkulima.removeFarm(801));
console.log(mkulima.updateFarm(901,"Fresha","Rita",254721345672,"Thika"));
console.log(mkulima.getFarm(561));

console.log(mkulima.addProduct(675,"Cheese",1500));
console.log(mkulima.addProduct(221,"Bananas",250));
console.log(mkulima.addProduct(555,"Mutton",400));
console.log(mkulima.removeProduct(675));
console.log(mkulima.updateProduct(111,"Bananas",250));
console.log(mkulima.getProduct(555));
mkulima.printProducts();
console.log(mkulima.calculateOrderCost(555,3));
console.log(mkulima.addVendor(256788,"Zucchini Stores",254722345678));




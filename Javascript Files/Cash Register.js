var cashRegister =  {
    total: 0,
    add: function(itemCost)  {
      this.total += itemCost;
      this.lastTransaction = itemCost;
    },
    scan: function(item,quantity)  {
      switch(item)  {
      case 'eggs':this.add(0.75 * quantity);break;
      case 'milk':this.add(1.40 * quantity);break;
      case 'butter':this.add(1.20 * quantity);break;
      case 'bread':this.add(1.85 * quantity);break;
      case 'yoghurt':this.add(0.65 * quantity);break;
      }
    },
      //return true;
    voidLastTransaction: function()  {
      this.total -= this.lastTransaction;
    }

};

cashRegister.scan('eggs', 2);
cashRegister.scan('milk', 2);
cashRegister.scan('butter', 1);

cashRegister.voidLastTransaction();
cashRegister.scan('butter', 0);
console.log('The total cost is: £' + cashRegister.total.toFixed(2));

(function() {
    'use strict'

    class Box {
        constructor(item) {
            this.myItem = item;
        }

        open() {
            console.log("宝箱を開いた。" + this.myItem + "を手に入れた。");
        }
    }

    class JewelryBox extends Box {
        constructor(item) {
            super(item);
        }

        look() {
            console.log("宝箱はキラキラと輝いている");
        }
    }

    var box = new Box("鋼鉄の剣");
    box.open();

    var jewelrybox = new JewelryBox("魔法の指輪");
    jewelrybox.look();
    jewelrybox.open();

})();

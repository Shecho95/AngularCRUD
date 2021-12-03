"use strict";(self.webpackChunkshop4less=self.webpackChunkshop4less||[]).push([[494],{494:(U,Z,n)=>{n.r(Z),n.d(Z,{ProductsModule:()=>h});var p=n(19),c=n(27),t=n(865),s=n(334),i=n(10);let g=(()=>{class o{constructor(e){this.productsService=e}ngOnInit(){}addNewProduct(e){console.log(e.value);let r={id:11,categoryid:e.value.product_category,productname:e.value.product_name,description:e.value.product_description,rating:e.value.product_rating,price:e.value.product_price,productimg:"",isavailable:1,color:e.value.product_color,reviews:e.value.product_category};console.log(r),this.productsService.createProduct(r).subscribe(a=>{console.log(a)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-create-product"]],decls:73,vars:0,consts:[[1,"bg-light","mb-2"],[3,"submit"],["addProductForm","ngForm"],[1,"form-row"],[1,"col-md-6","mb-3"],["for","validationServer01"],["type","text","value","Enter Product Name","required","","name","product_name","ngModel","",1,"form-control"],["for","validationServer02"],["type","text","required","","name","product_category","ngModel","",1,"form-control"],["for","validationServer03"],["type","text","placeholder","Enter Product Description","required","","name","product_description","ngModel","",1,"form-control"],["required","","name","product_rating","ngModel","",1,"custom-select"],["selected","","value",""],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["type","text","value","Enter Product Name","required","","name","product_color","ngModel","",1,"form-control"],["required","","name","product_available","ngModel","",1,"custom-select"],["value","0"],["type","text","value","Enter Product Name","required","","name","product_price","ngModel","",1,"form-control"],["required","","name","product_reviews","ngModel","",1,"custom-select"],["type","submit",1,"btn","btn-primary"]],template:function(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"h2",0),t._uU(1,"Add New Product"),t.qZA(),t.TgZ(2,"form",1,2),t.NdJ("submit",function(){t.CHM(a);const d=t.MAs(3);return r.addNewProduct(d)}),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"label",5),t._uU(7,"Product Name"),t.qZA(),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",4),t.TgZ(10,"label",7),t._uU(11,"Category Id"),t.qZA(),t._UZ(12,"input",8),t.qZA(),t.qZA(),t.TgZ(13,"div",3),t.TgZ(14,"div",4),t.TgZ(15,"label",9),t._uU(16,"Description"),t.qZA(),t.TgZ(17,"textarea",10),t._uU(18,"        "),t.qZA(),t.qZA(),t.TgZ(19,"div",4),t.TgZ(20,"label"),t._uU(21,"Rating"),t.qZA(),t.TgZ(22,"select",11),t.TgZ(23,"option",12),t._uU(24,"Choose..."),t.qZA(),t.TgZ(25,"option",13),t._uU(26,"1"),t.qZA(),t.TgZ(27,"option",14),t._uU(28,"2"),t.qZA(),t.TgZ(29,"option",15),t._uU(30,"3"),t.qZA(),t.TgZ(31,"option",16),t._uU(32,"4"),t.qZA(),t.TgZ(33,"option",17),t._uU(34,"5"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(35,"div",3),t.TgZ(36,"div",4),t.TgZ(37,"label",5),t._uU(38,"Product Color"),t.qZA(),t._UZ(39,"input",18),t.qZA(),t.TgZ(40,"div",4),t.TgZ(41,"label",7),t._uU(42,"Is Avaiable"),t.qZA(),t.TgZ(43,"select",19),t.TgZ(44,"option",12),t._uU(45,"Choose..."),t.qZA(),t.TgZ(46,"option",13),t._uU(47,"Yes"),t.qZA(),t.TgZ(48,"option",20),t._uU(49,"No"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(50,"div",3),t.TgZ(51,"div",4),t.TgZ(52,"label",5),t._uU(53,"Product Price"),t.qZA(),t._UZ(54,"input",21),t.qZA(),t.TgZ(55,"div",4),t.TgZ(56,"label",7),t._uU(57,"Reviews"),t.qZA(),t.TgZ(58,"select",22),t.TgZ(59,"option",12),t._uU(60,"Choose..."),t.qZA(),t.TgZ(61,"option",13),t._uU(62,"1"),t.qZA(),t.TgZ(63,"option",14),t._uU(64,"2"),t.qZA(),t.TgZ(65,"option",15),t._uU(66,"23/option> "),t.qZA(),t.TgZ(67,"option",16),t._uU(68,"4"),t.qZA(),t.TgZ(69,"option",17),t._uU(70,"5"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(71,"button",23),t._uU(72,"Submit form"),t.qZA(),t.qZA()}},directives:[i._Y,i.JL,i.F,i.Fj,i.Q7,i.JJ,i.On,i.EJ,i.YN,i.Kr],styles:[""]}),o})(),m=(()=>{class o{constructor(e,r){this.activatedRoute=e,this.productsService=r,this.productId=0,this.c1="c1"}ngOnInit(){this.activatedRoute.params.subscribe(e=>{this.productId=e.id}),this.productsService.viewProduct(this.productId).subscribe(e=>{this.productDetails=e})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.gz),t.Y36(s.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-view-product"]],decls:19,vars:7,consts:[[1,"card","mt-4","mb-4"],["alt","","width","900","height","200",1,"card-img-top","img-fluid",3,"src"],[1,"card-body"],[1,"card-title"],[3,"href"],[1,"card-text"],[1,"text-warning"],["ngClass","c2"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"div",2),t.TgZ(3,"h3",3),t._uU(4),t.qZA(),t.TgZ(5,"a",4),t._uU(6,"Update Product"),t.qZA(),t._uU(7," | "),t.TgZ(8,"a",4),t._uU(9,"Delete Product"),t.qZA(),t.TgZ(10,"h4"),t._uU(11),t.qZA(),t.TgZ(12,"p",5),t._uU(13),t.qZA(),t.TgZ(14,"span",6),t._uU(15),t.qZA(),t._uU(16," 4.0 stars "),t.qZA(),t.qZA(),t.TgZ(17,"div",7),t._uU(18,"this is c1"),t.qZA()),2&e&&(t.xp6(1),t.s9C("src",r.productDetails.productImg,t.LSH),t.xp6(3),t.Oqu(r.productDetails.productname),t.xp6(1),t.MGl("href","products/update-product/",r.productDetails.id,"",t.LSH),t.xp6(3),t.MGl("href","products/delete-product/",r.productDetails.id,"",t.LSH),t.xp6(3),t.hij("$",r.productDetails.price,""),t.xp6(2),t.Oqu(r.productDetails.description),t.xp6(2),t.Oqu(r.productDetails.rating))},directives:[p.mk],styles:[".c1[_ngcontent-%COMP%]{background-color:#ffc}.c2[_ngcontent-%COMP%]{background-color:red}"]}),o})();function A(o,u){if(1&o&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t.TgZ(2,"a",4),t._UZ(3,"img",5),t.qZA(),t.TgZ(4,"div",6),t.TgZ(5,"h4",7),t.TgZ(6,"a",8),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"h5"),t._uU(9),t.qZA(),t.TgZ(10,"p",9),t._uU(11),t.qZA(),t.qZA(),t.TgZ(12,"div",10),t.TgZ(13,"small",11),t._uU(14),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const e=u.$implicit;t.xp6(3),t.s9C("src",e.productImg,t.LSH),t.xp6(3),t.MGl("routerLink","product/",e.id,""),t.xp6(1),t.Oqu(e.productname),t.xp6(2),t.hij("$",e.price,""),t.xp6(2),t.Oqu(e.description),t.xp6(3),t.hij("",e.rating," Stars")}}function T(o,u){if(1&o&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t.TgZ(2,"a",4),t._UZ(3,"img",5),t.qZA(),t.TgZ(4,"div",6),t.TgZ(5,"h4",7),t.TgZ(6,"a",8),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"h5"),t._uU(9),t.qZA(),t.TgZ(10,"p",9),t._uU(11),t.qZA(),t.qZA(),t.TgZ(12,"div",10),t.TgZ(13,"small",11),t._uU(14),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const e=u.$implicit;t.xp6(3),t.s9C("src",e.productImg,t.LSH),t.xp6(3),t.MGl("routerLink","product/",e.id,""),t.xp6(1),t.Oqu(e.productName),t.xp6(2),t.hij("$",e.price,""),t.xp6(2),t.Oqu(e.description),t.xp6(3),t.hij("",e.rating," Stars")}}const v=[{path:"",component:(()=>{class o{constructor(e){this.productsService=e}ngOnInit(){this.productsService.getAllProducts().subscribe(e=>{this.productList=e})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-view-all-products"]],decls:2,vars:1,consts:[[1,"row"],["class","col-lg-4 col-md-6 mb-4",4,"ngFor","ngForOf"],[1,"col-lg-4","col-md-6","mb-4"],[1,"card","h-100"],["href","#"],["alt","",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[3,"routerLink"],[1,"card-text"],[1,"card-footer"],[1,"text-muted"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t.YNc(1,A,15,6,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",r.productList))},directives:[p.sg,c.yS],styles:[""]}),o})()},{path:"create-product",component:g},{path:"category/:id",component:(()=>{class o{constructor(e,r){this.activatedRoute=e,this.productsService=r}ngOnInit(){this.activatedRoute.params.subscribe(e=>{console.log(e),this.searchCategory=e.id,console.log(this.searchCategory),this.productsService.searchCategoryProducts(this.searchCategory).subscribe(r=>{console.log(r),this.productList=r})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.gz),t.Y36(s.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-view-all-products-by-category"]],decls:4,vars:1,consts:[[1,"row"],["class","col-lg-4 col-md-6 mb-4",4,"ngFor","ngForOf"],[1,"col-lg-4","col-md-6","mb-4"],[1,"card","h-100"],["href","#"],["alt","",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[3,"routerLink"],[1,"card-text"],[1,"card-footer"],[1,"text-muted"]],template:function(e,r){1&e&&(t.TgZ(0,"h2"),t._uU(1,"Showing Category Results"),t.qZA(),t.TgZ(2,"div",0),t.YNc(3,T,15,6,"div",1),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngForOf",r.productList))},directives:[p.sg,c.yS],styles:[""]}),o})()},{path:"search",component:(()=>{class o{constructor(e){this.activatedRoute=e,this.searchDate=""}ngOnInit(){this.activatedRoute.queryParams.subscribe(e=>{this.searchDate=e.date})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-view-all-products-by-date"]],decls:93,vars:1,consts:[[1,"row"],[1,"col-lg-4","col-md-6","mb-4"],[1,"card","h-100"],["href","#"],["src","http://placehold.it/700x400","alt","",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"card-footer"],[1,"text-muted"]],template:function(e,r){1&e&&(t.TgZ(0,"h2"),t._uU(1),t.qZA(),t.TgZ(2,"div",0),t.TgZ(3,"div",1),t.TgZ(4,"div",2),t.TgZ(5,"a",3),t._UZ(6,"img",4),t.qZA(),t.TgZ(7,"div",5),t.TgZ(8,"h4",6),t.TgZ(9,"a",3),t._uU(10,"Item One"),t.qZA(),t.qZA(),t.TgZ(11,"h5"),t._uU(12,"$24.99"),t.qZA(),t.TgZ(13,"p",7),t._uU(14,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"),t.qZA(),t.qZA(),t.TgZ(15,"div",8),t.TgZ(16,"small",9),t._uU(17,"\u2605 \u2605 \u2605 \u2605 \u2606"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",1),t.TgZ(19,"div",2),t.TgZ(20,"a",3),t._UZ(21,"img",4),t.qZA(),t.TgZ(22,"div",5),t.TgZ(23,"h4",6),t.TgZ(24,"a",3),t._uU(25,"Item Two"),t.qZA(),t.qZA(),t.TgZ(26,"h5"),t._uU(27,"$24.99"),t.qZA(),t.TgZ(28,"p",7),t._uU(29,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet."),t.qZA(),t.qZA(),t.TgZ(30,"div",8),t.TgZ(31,"small",9),t._uU(32,"\u2605 \u2605 \u2605 \u2605 \u2606"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"div",1),t.TgZ(34,"div",2),t.TgZ(35,"a",3),t._UZ(36,"img",4),t.qZA(),t.TgZ(37,"div",5),t.TgZ(38,"h4",6),t.TgZ(39,"a",3),t._uU(40,"Item Three"),t.qZA(),t.qZA(),t.TgZ(41,"h5"),t._uU(42,"$24.99"),t.qZA(),t.TgZ(43,"p",7),t._uU(44,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"),t.qZA(),t.qZA(),t.TgZ(45,"div",8),t.TgZ(46,"small",9),t._uU(47,"\u2605 \u2605 \u2605 \u2605 \u2606"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(48,"div",1),t.TgZ(49,"div",2),t.TgZ(50,"a",3),t._UZ(51,"img",4),t.qZA(),t.TgZ(52,"div",5),t.TgZ(53,"h4",6),t.TgZ(54,"a",3),t._uU(55,"Item Four"),t.qZA(),t.qZA(),t.TgZ(56,"h5"),t._uU(57,"$24.99"),t.qZA(),t.TgZ(58,"p",7),t._uU(59,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"),t.qZA(),t.qZA(),t.TgZ(60,"div",8),t.TgZ(61,"small",9),t._uU(62,"\u2605 \u2605 \u2605 \u2605 \u2606"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(63,"div",1),t.TgZ(64,"div",2),t.TgZ(65,"a",3),t._UZ(66,"img",4),t.qZA(),t.TgZ(67,"div",5),t.TgZ(68,"h4",6),t.TgZ(69,"a",3),t._uU(70,"Item Five"),t.qZA(),t.qZA(),t.TgZ(71,"h5"),t._uU(72,"$24.99"),t.qZA(),t.TgZ(73,"p",7),t._uU(74,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet."),t.qZA(),t.qZA(),t.TgZ(75,"div",8),t.TgZ(76,"small",9),t._uU(77,"\u2605 \u2605 \u2605 \u2605 \u2606"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(78,"div",1),t.TgZ(79,"div",2),t.TgZ(80,"a",3),t._UZ(81,"img",4),t.qZA(),t.TgZ(82,"div",5),t.TgZ(83,"h4",6),t.TgZ(84,"a",3),t._uU(85,"Item Six"),t.qZA(),t.qZA(),t.TgZ(86,"h5"),t._uU(87,"$24.99"),t.qZA(),t.TgZ(88,"p",7),t._uU(89,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"),t.qZA(),t.qZA(),t.TgZ(90,"div",8),t.TgZ(91,"small",9),t._uU(92,"\u2605 \u2605 \u2605 \u2605 \u2606"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.hij(" Showing Search Results by Date: ",r.searchDate,""))},styles:[""]}),o})()},{path:"delete-product/:id",component:(()=>{class o{constructor(e,r){this.activatedRoute=e,this.productsService=r,this.productId=0}ngOnInit(){this.activatedRoute.params.subscribe(e=>{this.productId=e.id,this.productsService.deleteProduct(this.productId).subscribe(r=>{console.log("Deleted product")})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.gz),t.Y36(s.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-delete-product"]],decls:4,vars:1,template:function(e,r){1&e&&(t.TgZ(0,"p"),t._uU(1,"delete-product works!"),t.qZA(),t.TgZ(2,"p"),t._uU(3),t.qZA()),2&e&&(t.xp6(3),t.hij("Product Id: ",r.productId,""))},styles:[""]}),o})()},{path:"product/:id",component:m},{path:"update-product/:id",component:(()=>{class o{constructor(e,r){this.activatedRoute=e,this.productsService=r,this.productId=0}ngOnInit(){this.activatedRoute.params.subscribe(e=>{this.productId=e.id,this.productsService.viewProduct(this.productId).subscribe(r=>{this.productDetails=r,console.log(this.productDetails)})})}updateProduct(e){console.log(e),this.productsService.updateProduct(this.productId,{id:e.value.id,categoryId:e.value.categoryId,productName:e.value.productName,description:e.value.description,rating:e.value.product_rating,price:e.value.product_price,productImg:"",isAvailable:1,color:e.value.product_color,reviews:e.value.product_category}).subscribe(a=>{console.log(a)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.gz),t.Y36(s.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-update-product"]],decls:73,vars:5,consts:[[1,"bg-light","mb-2"],[3,"submit"],["updateProductForm","ngForm"],[1,"form-row"],[1,"col-md-6","mb-3"],["for","validationServer01"],["type","text","required","","name","productName","ngModel","",1,"form-control",3,"ngModel","ngModelChange"],["for","validationServer02"],["type","text","required","","name","categoryId","ngModel","",1,"form-control",3,"ngModel","ngModelChange"],["for","validationServer03"],["type","text","placeholder","Enter Product Description","required","","name","description","ngModel","",1,"form-control",3,"ngModel","ngModelChange"],["required","","name","product_rating","ngModel","",1,"custom-select"],["selected","","value",""],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],["type","text","value","Enter Product Name","required","","name","product_color","ngModel","",1,"form-control",3,"ngModel","ngModelChange"],["required","","name","product_available","ngModel","",1,"custom-select"],["value","0"],["type","text","value","Enter Product Name","required","","name","product_price","ngModel","",1,"form-control",3,"ngModel","ngModelChange"],["required","","name","product_reviews","ngModel","",1,"custom-select"],["type","submit",1,"btn","btn-primary"]],template:function(e,r){if(1&e){const a=t.EpF();t.TgZ(0,"h2",0),t._uU(1,"Update Product"),t.qZA(),t.TgZ(2,"form",1,2),t.NdJ("submit",function(){t.CHM(a);const d=t.MAs(3);return r.updateProduct(d)}),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"label",5),t._uU(7,"Product Name"),t.qZA(),t.TgZ(8,"input",6),t.NdJ("ngModelChange",function(d){return r.productDetails.productname=d}),t.qZA(),t.qZA(),t.TgZ(9,"div",4),t.TgZ(10,"label",7),t._uU(11,"Category Id"),t.qZA(),t.TgZ(12,"input",8),t.NdJ("ngModelChange",function(d){return r.productDetails.categoryid=d}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",3),t.TgZ(14,"div",4),t.TgZ(15,"label",9),t._uU(16,"Description"),t.qZA(),t.TgZ(17,"textarea",10),t.NdJ("ngModelChange",function(d){return r.productDetails.description=d}),t._uU(18,"        "),t.qZA(),t.qZA(),t.TgZ(19,"div",4),t.TgZ(20,"label"),t._uU(21,"Rating"),t.qZA(),t.TgZ(22,"select",11),t.TgZ(23,"option",12),t._uU(24,"Choose..."),t.qZA(),t.TgZ(25,"option",13),t._uU(26,"1"),t.qZA(),t.TgZ(27,"option",14),t._uU(28,"2"),t.qZA(),t.TgZ(29,"option",15),t._uU(30,"3"),t.qZA(),t.TgZ(31,"option",16),t._uU(32,"4"),t.qZA(),t.TgZ(33,"option",17),t._uU(34,"5"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(35,"div",3),t.TgZ(36,"div",4),t.TgZ(37,"label",5),t._uU(38,"Product Color"),t.qZA(),t.TgZ(39,"input",18),t.NdJ("ngModelChange",function(d){return r.productDetails.color=d}),t.qZA(),t.qZA(),t.TgZ(40,"div",4),t.TgZ(41,"label",7),t._uU(42,"Is Avaiable"),t.qZA(),t.TgZ(43,"select",19),t.TgZ(44,"option",12),t._uU(45,"Choose..."),t.qZA(),t.TgZ(46,"option",13),t._uU(47,"Yes"),t.qZA(),t.TgZ(48,"option",20),t._uU(49,"No"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(50,"div",3),t.TgZ(51,"div",4),t.TgZ(52,"label",5),t._uU(53,"Product Price"),t.qZA(),t.TgZ(54,"input",21),t.NdJ("ngModelChange",function(d){return r.productDetails.price=d}),t.qZA(),t.qZA(),t.TgZ(55,"div",4),t.TgZ(56,"label",7),t._uU(57,"Reviews"),t.qZA(),t.TgZ(58,"select",22),t.TgZ(59,"option",12),t._uU(60,"Choose..."),t.qZA(),t.TgZ(61,"option",13),t._uU(62,"1"),t.qZA(),t.TgZ(63,"option",14),t._uU(64,"2"),t.qZA(),t.TgZ(65,"option",15),t._uU(66,"23/option> "),t.qZA(),t.TgZ(67,"option",16),t._uU(68,"4"),t.qZA(),t.TgZ(69,"option",17),t._uU(70,"5"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(71,"button",23),t._uU(72,"Update Product"),t.qZA(),t.qZA()}2&e&&(t.xp6(8),t.Q6J("ngModel",r.productDetails.productname),t.xp6(4),t.Q6J("ngModel",r.productDetails.categoryid),t.xp6(5),t.Q6J("ngModel",r.productDetails.description),t.xp6(22),t.Q6J("ngModel",r.productDetails.color),t.xp6(15),t.Q6J("ngModel",r.productDetails.price))},directives:[i._Y,i.JL,i.F,i.Fj,i.Q7,i.JJ,i.On,i.EJ,i.YN,i.Kr],styles:[""]}),o})()}];let _=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.Bz.forChild(v)],c.Bz]}),o})(),h=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.ez,i.u5,_]]}),o})()}}]);
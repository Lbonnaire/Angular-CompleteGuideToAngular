import{a as D}from"./chunk-5S2S5UOJ.js";import{a as O,b as C}from"./chunk-7HPNCYCM.js";import{a as T,c as j,d as A,f as q,h as Q,i as R,j as $,o as G,r as H,t as P}from"./chunk-N5PPFZF3.js";import{E as l,F as g,K as f,M as b,N as r,O as s,P as h,Q as v,S as a,T as _,V as I,W as d,X as E,Z as w,ba as M,ca as V,da as F,ga as L,ha as N,p as y,s as S,t as x,ua as k,w as p,x as u,za as U}from"./chunk-PY2CLCYS.js";var Z=["f"];function ee(n,e){if(n&1){let c=v();r(0,"button",12),a("click",function(){p(c);let t=_();return u(t.onDeleteItem())}),d(1,"Delete"),s()}}var B=(()=>{let e=class e{constructor(i){this.slService=i,this.editMode=!1}ngOnInit(){this.subscription=this.slService.startedEditing.subscribe(i=>{this.editedItemIndex=i,this.editMode=!0,this.editedItem=this.slService.getIngredient(i),this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}onSubmit(i){let t=i.value,o=new O(t.name,t.amount);this.editMode?this.slService.updateIngredient(this.editedItemIndex,o):this.slService.addIngredient(o),this.editMode=!1,this.slForm.reset()}ngOnDestroy(){this.subscription.unsubscribe()}onDeleteItem(){this.onClear(),this.slService.deleteIngredient(this.editedItemIndex),this.slForm.reset(),this.editMode=!1}onClear(){this.slForm.reset(),this.editMode=!1}};e.\u0275fac=function(t){return new(t||e)(g(C))},e.\u0275cmp=S({type:e,selectors:[["app-shopping-list-edit"]],viewQuery:function(t,o){if(t&1&&V(Z,5),t&2){let m;M(m=F())&&(o.slForm=m.first)}},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(t,o){if(t&1){let m=v();r(0,"div",0)(1,"div",1)(2,"form",2,3),a("ngSubmit",function(){p(m);let W=I(3);return u(o.onSubmit(W))}),r(4,"div",0)(5,"div",4)(6,"label",5),d(7,"Name"),s(),h(8,"input",6),s(),r(9,"div",7)(10,"label",5),d(11,"Amount"),s(),h(12,"input",8),s()(),r(13,"div",0)(14,"div",1)(15,"button",9),d(16),s(),b(17,ee,2,0,"button",10),r(18,"button",11),a("click",function(){return o.onClear()}),d(19,"Clear"),s()()()()()()}if(t&2){let m=I(3);l(15),f("disabled",!m.valid),l(1),E(o.editMode?"Update":"Add"),l(1),f("ngIf",o.editMode)}},dependencies:[N,R,T,$,j,A,G,H,Q,q]});let n=e;return n})();function ie(n,e){if(n&1){let c=v();r(0,"a",4),a("click",function(){let o=p(c).index,m=_();return u(m.onEditItem(o))}),d(1),s()}if(n&2){let c=e.$implicit;l(1),w(" ",c.name," (",c.amount,") ")}}var J=(()=>{let e=class e{constructor(i,t){this.slService=i,this.loggingService=t}ngOnInit(){this.ingredients=this.slService.getIngredients(),this.igChangeSub=this.slService.ingredientAdded.subscribe(i=>{this.ingredients=i}),this.loggingService.printLog("Hello from ShoppingListComponent in ngOnInit")}ngOnDestroy(){this.igChangeSub.unsubscribe()}onEditItem(i){this.slService.startedEditing.next(i)}};e.\u0275fac=function(t){return new(t||e)(g(C),g(D))},e.\u0275cmp=S({type:e,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor:pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,o){t&1&&(r(0,"div",0)(1,"div",1),h(2,"app-shopping-list-edit")(3,"hr"),r(4,"ul",2),b(5,ie,2,2,"a",3),s()()()),t&2&&(l(5),f("ngForOf",o.ingredients))},dependencies:[L,B]});let n=e;return n})();var ue=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=x({type:e}),e.\u0275inj=y({imports:[k.forChild([{path:"",component:J}]),U,P]});let n=e;return n})();export{ue as ShoppingModule};

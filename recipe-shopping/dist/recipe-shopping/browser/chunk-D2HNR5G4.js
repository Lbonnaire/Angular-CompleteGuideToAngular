import{a as v,b as te}from"./chunk-7COBIBSO.js";import{b as re}from"./chunk-7HPNCYCM.js";import{a as ee}from"./chunk-2U7C6UGE.js";import{a as ne,b as S,c as oe,d as ce,e as A,g as y,i as pe,k as se,l as me,m as ae,n as le,s as de,u as ue}from"./chunk-N5PPFZF3.js";import{A as x,E as a,F as s,H as M,K as d,M as E,N as c,O as o,P as m,Q as H,S as h,T as X,U as B,V as J,W as p,X as O,Y as L,Z as K,_ as Q,aa as W,g as V,ga as I,j as U,o as k,oa as g,p as j,pa as Y,qa as f,r as b,ra as Z,s as u,sa as T,t as N,ua as F,va as ie,w as $,x as z,za as fe}from"./chunk-PY2CLCYS.js";var xe=i=>[i],ve=(()=>{let e=class e{constructor(r,t,n){this.recipeService=r,this.router=t,this.route=n,this.recipeSelected=new M}ngOnInit(){this.recipes=this.recipeService.getRecipes()}};e.\u0275fac=function(t){return new(t||e)(s(v),s(f),s(g))},e.\u0275cmp=u({type:e,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},outputs:{recipeSelected:"recipeSelected"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(t,n){t&1&&(c(0,"a",0)(1,"div",1)(2,"h4",2),p(3),o(),c(4,"p",3),p(5),o(),c(6,"span",4),m(7,"img",5),o()()()),t&2&&(d("routerLink",W(5,xe,n.index)),a(3),O(n.recipe.name),a(2),O(n.recipe.description),a(2),B("alt",n.recipe.name),d("src",n.recipe.imagePath,x))},dependencies:[Z,T]});let i=e;return i})();function Ie(i,e){if(i&1&&m(0,"app-recipe-item",4),i&2){let C=e.$implicit,r=e.index;d("recipe",C)("index",r)}}var ge=(()=>{let e=class e{constructor(r,t,n){this.recipeService=r,this.router=t,this.route=n,this.recipeForwarded=new M}ngOnInit(){this.recipes=this.recipeService.getRecipes(),this.recChangedSub=this.recipeService.recipeChanged.subscribe(r=>{this.recipes=r})}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.recChangedSub.unsubscribe()}};e.\u0275fac=function(t){return new(t||e)(s(v),s(f),s(g))},e.\u0275cmp=u({type:e,selectors:[["app-recipe-list"]],outputs:{recipeForwarded:"recipeForwarded"},decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(t,n){t&1&&(c(0,"div",0)(1,"div",1)(2,"button",2),h("click",function(){return n.onNewRecipe()}),p(3," New Recipe "),o()()(),m(4,"hr"),c(5,"div",0)(6,"div",1),E(7,Ie,1,2,"app-recipe-item",3),o()()),t&2&&(a(7),d("ngForOf",n.recipes))},dependencies:[I,ve]});let i=e;return i})();var Se=(()=>{let e=class e{constructor(r,t,n){this.recipeService=r,this.router=t,this.route=n}ngOnInit(){}};e.\u0275fac=function(t){return new(t||e)(s(v),s(f),s(g))},e.\u0275cmp=u({type:e,selectors:[["app-recipe"]],features:[Q([])],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(t,n){t&1&&(c(0,"div",0)(1,"div",1),m(2,"app-recipe-list"),o(),c(3,"div",2),m(4,"router-outlet"),o()())},dependencies:[Y,ge]});let i=e;return i})();function Fe(i,e){if(i&1&&(c(0,"li",11),p(1),o()),i&2){let C=e.$implicit;a(1),K(" ",C.name," - ",C.amount," ")}}var Re=(()=>{let e=class e{constructor(r,t,n,l){this.slService=r,this.router=t,this.route=n,this.recService=l}ngOnInit(){this.route.params.subscribe(r=>{this.id=+r.id,this.recipe=this.recService.getRecipe(this.id)})}onSelectToShoppingList(){this.slService.addIngredients(this.recipe.ingredients),console.log("sending: "+this.recipe.ingredients)}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteRecipe(){this.recService.deleteRecipe(this.id),this.router.navigate([""])}};e.\u0275fac=function(t){return new(t||e)(s(re),s(f),s(g),s(v))},e.\u0275cmp=u({type:e,selectors:[["app-recipe-detail"]],decls:30,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",3,"src","alt"],["appDropdown","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],["routerLinkActive","active",2,"cursor","pointer",3,"click"],[2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(t,n){t&1&&(c(0,"div",0)(1,"div",1),m(2,"img",2),o()(),c(3,"div",0)(4,"div",1),p(5),o()(),c(6,"div",0)(7,"div",1)(8,"div",3)(9,"button",4),p(10,"Manage Recipe"),m(11,"span",5),o(),c(12,"ul",6)(13,"li")(14,"a",7),h("click",function(){return n.onSelectToShoppingList()}),p(15,"To Shopping List"),o()(),c(16,"li")(17,"a",8),h("click",function(){return n.onEditRecipe()}),p(18,"Edit Recipe"),o()(),c(19,"li")(20,"a",8),h("click",function(){return n.onDeleteRecipe()}),p(21,"Delete Recipe"),o()()()()()(),c(22,"div",0)(23,"div",1),p(24),o()(),c(25,"div",0)(26,"div",1)(27,"ul",9),E(28,Fe,2,2,"li",10),o(),p(29,"> "),o()()),t&2&&(a(2),d("src",n.recipe.imagePath,x)("alt",n.recipe.name),a(3),L(" ",n.recipe.name," "),a(19),L(" ",n.recipe.description," "),a(4),d("ngForOf",n.recipe.ingredients))},dependencies:[T,ie,I]});let i=e;return i})();var Ce=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-recipes-home"]],decls:2,vars:0,template:function(t,n){t&1&&(c(0,"p"),p(1,"Please select a recipe!"),o())}});let i=e;return i})();function _e(i,e){if(i&1){let C=H();c(0,"div",18)(1,"div",19),m(2,"input",20),o(),c(3,"div",21),m(4,"input",22),o(),c(5,"div",21)(6,"div",23),h("click",function(){let n=$(C).index,l=X();return z(l.onDeleteIngredient(n))}),p(7,"X"),o()()()}if(i&2){let C=e.index;d("formGroupName",C)}}var P=(()=>{let e=class e{constructor(r,t,n){this.route=r,this.recService=t,this.router=n,this.editMode=!1}ngOnInit(){this.route.params.subscribe(r=>{this.id=+r.id,this.editMode=r.id!=null,console.log(this.editMode),this.initForm()})}initForm(){let r="",t="",n="",l=new de([]);if(this.editMode){let w=this.recService.getRecipe(this.id);if(r=w.name,t=w.imagePath,n=w.description,w.ingredients)for(let q of w.ingredients)l.push(new A({name:new y(q.name,S.required),amount:new y(q.amount,[S.required,S.pattern(/^[1-9]+[0-9]*$/)])}))}this.recipeForm=new A({name:new y(r,S.required),imagePath:new y(t,S.required),description:new y(n,S.required),ingredients:l})}get controls(){return this.recipeForm.get("ingredients").controls}onSubmit(){this.editMode?this.recService.updateRecipe(this.id,this.recipeForm.value):this.recService.addRecipe(this.recipeForm.value),this.editMode=!1,this.router.navigate(["../"],{relativeTo:this.route})}onCancel(){this.editMode=!1,this.router.navigate(["../"],{relativeTo:this.route})}onAddIngredient(){this.recipeForm.get("ingredients").push(new A({name:new y(null,S.required),amount:new y(null,[S.required,S.pattern(/^[1-9]+[0-9]*$/)])}))}onDeleteIngredient(r){this.recipeForm.get("ingredients").removeAt(r)}};e.\u0275fac=function(t){return new(t||e)(s(g),s(v),s(f))},e.\u0275cmp=u({type:e,selectors:[["app-recipe-edit"]],decls:37,vars:4,consts:[[1,"row"],[1,"col-cs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"col-xs-12"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"img-responsive",3,"src"],["for","description"],["type","text","id","description","formControlName","description","rows","6",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"row",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control",2,"margin","top 10px"],[1,"col-xs-2"],["type","text","formControlName","amount",1,"form-control"],["type","button ",1,"btn","btn-danger",3,"click"]],template:function(t,n){if(t&1&&(c(0,"div",0)(1,"div",1)(2,"form",2),h("ngSubmit",function(){return n.onSubmit()}),c(3,"div",0)(4,"div",1)(5,"button",3),p(6,"Save"),o(),c(7,"button",4),h("click",function(){return n.onCancel()}),p(8,"Cancel"),o()()(),c(9,"div",0)(10,"div",5)(11,"div",6)(12,"label",7),p(13,"Name "),o(),m(14,"input",8),o()()(),c(15,"div",0)(16,"div",5)(17,"div",6)(18,"label",9),p(19,"Image URL "),o(),m(20,"input",10,11),o()()(),c(22,"div",0)(23,"div",5),m(24,"img",12),o()(),c(25,"div",0)(26,"div",5)(27,"div",6)(28,"label",13),p(29,"Description "),o(),m(30,"textarea",14),o()()(),c(31,"div",0)(32,"div",15),E(33,_e,8,1,"div",16),o(),m(34,"hr"),c(35,"button",17),h("click",function(){return n.onAddIngredient()}),p(36,"Add Ingredient"),o()()()()()),t&2){let l=J(21);a(2),d("formGroup",n.recipeForm),a(3),d("disabled",!n.recipeForm.valid),a(19),d("src",l.value,x),a(9),d("ngForOf",n.controls)}},dependencies:[I,pe,ne,oe,ce,se,le,me,ae],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]});let i=e;return i})();var ye=(()=>{let e=class e{constructor(r,t){this.authService=r,this.router=t}canActivate(r,t){return this.authService.user.pipe(U(1),V(n=>n?!0:this.router.createUrlTree(["/auth"])))}};e.\u0275fac=function(t){return new(t||e)(b(ee),b(f))},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var G=(()=>{let e=class e{constructor(r,t){this.recService=r,this.dataStorageServ=t}resolve(r,t){let n=this.recService.getRecipes();return n.length===0?this.dataStorageServ.fetchRecipes():n}};e.\u0275fac=function(t){return new(t||e)(b(v),b(te))},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var De=[{path:"",component:Se,canActivate:[ye],children:[{path:"",component:Ce},{path:"new",component:P},{path:":id",component:Re,resolve:[G]},{path:":id/edit",component:P,resolve:[G]}]}],be=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=N({type:e}),e.\u0275inj=j({imports:[F.forChild(De),F]});let i=e;return i})();var Ct=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=N({type:e}),e.\u0275inj=j({imports:[F,fe,ue,be]});let i=e;return i})();export{Ct as RecipesModule};

(this["webpackJsonpsanti-app"]=this["webpackJsonpsanti-app"]||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),r=c(36),i=c.n(r),s=(c(43),c(6)),j=c(10),o=(c(44),c(31)),l=c(11),d=c(2),b=Object(n.createContext)(),O=function(){return Object(n.useContext)(b)},u=function(e){var t=e.children,c=Object(n.useState)([]),a=Object(l.a)(c,2),r=a[0],i=a[1];return Object(d.jsx)(b.Provider,{value:{cartList:r,addToCart:function(e){var t=r.find((function(t){return t.id===e.id}));t?(t.cantidad=t.cantidad+e.cantidad,i(Object(o.a)(r))):i([].concat(Object(o.a)(r),[e]))},removeItemCart:function(e){i(r.filter((function(t){return t.id!==e})))},cleanCart:function(){i([])},calculateTotalPriece:function(){return r.reduce((function(e,t){return e+t.precio*t.cantidad}),0)},cantProdAcum:function(){return r.reduce((function(e,t){return e+t.cantidad}),0)}},children:t})},x=c(22),h=function(){var e=(0,O().cantProdAcum)();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("header",{children:[Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)(s.b,{to:"/inicio",children:Object(d.jsxs)("div",{className:"boxLogo",children:[Object(d.jsx)(x.a,{className:"icons"}),Object(d.jsx)("p",{className:"word",children:"Let's"}),Object(d.jsx)("p",{children:"Toast"})]})}),Object(d.jsx)("ul",{className:"boxNavbar",children:Object(d.jsxs)("div",{className:"navbarMain",children:[Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/inicio",children:"Inicio"})}),Object(d.jsxs)("li",{children:[Object(d.jsx)(s.b,{to:"/categoria",children:"Productos"}),Object(d.jsxs)("ul",{className:"subNavbarMain",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/categoria/Vinos",children:"Vinos"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/categoria/Vermuts",children:"Vermuts"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/categoria/Vodkas",children:"Vodkas"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/categoria/Gins",children:"Gins"})})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/categoria/Licores",children:"Licores"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/categoria/Whiskys",children:"Whiskys"})}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/categoria/Champagnes",children:"Champagne"})})]})]})]}),Object(d.jsx)("li",{children:Object(d.jsx)(s.b,{to:"/",children:"Contacto"})})]})}),Object(d.jsx)(s.b,{to:"/cart",children:Object(d.jsxs)("div",{className:"boxCartWidget",children:[Object(d.jsx)(x.b,{className:"icons"}),Object(d.jsx)("label",{children:e})]})})]}),Object(d.jsx)(s.b,{to:"/inicio",children:Object(d.jsx)("div",{className:"containerBtn",children:Object(d.jsx)("button",{className:"btnGoHome",children:"IR AL HOME"})})})]})})},m=c(17),p=(c(50),function(e){var t=e.prod;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"containerCard",children:Object(d.jsxs)("div",{className:"boxCard",children:[Object(d.jsx)(s.b,{to:"/detalle/".concat(t.id),children:Object(d.jsx)("img",{src:t.img,alt:"Imagenes de bebidas",className:"imgCard"})}),Object(d.jsx)("h4",{className:"titleH4",children:t.nombre}),Object(d.jsx)(s.b,{to:"/detalle/".concat(t.id),children:Object(d.jsxs)("button",{className:"learnMore btnLearnMore",children:[Object(d.jsx)("span",{"aria-hidden":"true",className:"circle",children:Object(d.jsx)("span",{className:"icon arrow"})}),Object(d.jsx)("span",{className:"buttonText",children:"VER MAS"})]})})]})})})}),f=(c(51),Object(n.memo)((function(e){var t=e.products;return console.log(t),Object(d.jsx)("div",{className:"containerGeneralCard",children:t.map((function(e){return Object(d.jsx)(p,{prod:e},e.id)}))})}))),v=c(26),g=(c(35),v.a.initializeApp({apiKey:"AIzaSyCCNzJjx622MNPKih4KFcTqYN2dpTuQ2a0",authDomain:"santi-app-e-commerce-react-js.firebaseapp.com",projectId:"santi-app-e-commerce-react-js",storageBucket:"santi-app-e-commerce-react-js.appspot.com",messagingSenderId:"394319657290",appId:"1:394319657290:web:73df90773d861591ff69b3"})),N=function(){return v.a.firestore(g)},C=function(e){var t=Object(n.useState)(!0),c=Object(l.a)(t,2),a=c[0],r=c[1],i=Object(j.f)().categoria,s=Object(n.useState)([]),o=Object(l.a)(s,2),b=o[0],O=o[1];return Object(n.useEffect)((function(){var e=N();(i?e.collection("items").where("categoria","==",i).get():e.collection("items").get()).then((function(e){return O(e.docs.map((function(e){return Object(m.a)({id:e.id},e.data())})))})).catch((function(e){return alert("Error: ".concat(e))})).finally((function(){return r(!1)}))}),[i]),Object(d.jsx)(d.Fragment,{children:a?Object(d.jsx)("div",{className:"containerLoading",children:Object(d.jsxs)("div",{className:"lds-ellipsis",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})}):Object(d.jsx)(f,{products:b})})},S=(c(57),function(e){var t=e.initial,c=e.stock,a=e.onAdd,r=Object(n.useState)(t),i=Object(l.a)(r,2),j=i[0],o=i[1],b=Object(n.useState)(!0),O=Object(l.a)(b,2),u=O[0],x=O[1],h=function(){return Object(d.jsx)("button",{className:"btnGeneral",onClick:function(){1===j?alert("Se han agregado ".concat(j," producto al carrito")):alert("Se han agregado ".concat(j," productos al carrito"))},children:"Agregar al carrito"})},m=function(){return Object(d.jsx)("button",{className:"btnGeneral",children:"Ir a mi carrito"})};return Object(d.jsxs)("div",{className:"containerItemCount",children:[Object(d.jsxs)("div",{className:"containerBtnRemoveAdd",children:[Object(d.jsx)("button",{className:"btnCount",onClick:function(){if(j===t)return t;o(j-1)},children:"-"}),Object(d.jsx)("div",{className:"countBox",children:Object(d.jsx)("p",{children:j})}),Object(d.jsx)("button",{className:"btnCount",onClick:function(){if(j===c)return c;o(j+1)},children:"+"})]}),Object(d.jsx)("div",{onClick:function(){a(j),o(0),x(!1)},children:u?Object(d.jsx)(h,{}):Object(d.jsxs)(s.b,{to:"/cart",children:["  ",Object(d.jsx)(m,{}),"  "]})})]})}),I=(c(58),function(e){var t=e.productDetail,c=Object(n.useState)(1),a=Object(l.a)(c,2),r=a[0],i=a[1],j=O().addToCart;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"containerDetail",children:[Object(d.jsx)("img",{className:"imgDetail",src:t.img,alt:"Imagen de ".concat(t.nombre)}),Object(d.jsxs)("div",{className:"textDetailBox",children:[Object(d.jsx)("h4",{children:t.categoria}),Object(d.jsx)("hr",{}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:t.nombre})}),Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:t.detalle})}),Object(d.jsx)("p",{children:Object(d.jsxs)("b",{children:["$",t.precio]})}),Object(d.jsxs)("p",{children:["Averigua todos los tragos que podes armar con unos ricos",Object(d.jsx)("i",{children:Object(d.jsx)("a",{href:t.link,target:"en_blank",children:t.categoria})})]}),Object(d.jsxs)("p",{children:["Encontra los mejores precios en ",Object(d.jsx)(s.b,{to:"/",children:Object(d.jsx)("i",{children:Object(d.jsx)("b",{children:"Let's Toast"})})})]}),Object(d.jsx)("hr",{}),Object(d.jsx)(S,{initial:r,stock:t.stock,onAdd:function(e){i(e),j(Object(m.a)(Object(m.a)({},t),{},{cantidad:e}))}})]})]})})}),k=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!0),i=Object(l.a)(r,2),s=i[0],o=i[1],b=Object(j.f)().id;return Object(n.useEffect)((function(){N().collection("items").doc(b).get().then((function(e){return a(Object(m.a)({id:e.id},e.data()))})).catch((function(e){return alert("Error: ".concat(e))})).finally((function(){return o(!1)}))}),[b]),Object(d.jsx)(d.Fragment,{children:s?Object(d.jsx)("div",{className:"containerLoading",children:Object(d.jsxs)("div",{className:"lds-ellipsis",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})}):Object(d.jsx)(I,{productDetail:c})})},E=function(e){var t=e.prod;return console.log(t),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"containerCard",children:Object(d.jsxs)("div",{className:"boxCard",children:[Object(d.jsx)(s.b,{to:"/detalle/".concat(t.id),children:Object(d.jsx)("img",{src:t.img,alt:"Imagenes de bebidas",className:"imgCard"})}),Object(d.jsx)("h4",{className:"titleH4",children:t.nombre}),Object(d.jsx)(s.b,{to:"/detalle/".concat(t.id),children:Object(d.jsxs)("button",{className:"learnMore btnLearnMore",children:[Object(d.jsx)("span",{"aria-hidden":"true",className:"circle",children:Object(d.jsx)("span",{className:"icon arrow"})}),Object(d.jsx)("span",{className:"buttonText",children:"VER MAS"})]})})]})})})},y=(c(59),Object(n.memo)((function(e){var t=e.products;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"mainTitle",children:"LO MAS VENDIDO"}),Object(d.jsx)("div",{className:"containerGeneralCart",children:t.map((function(e){return Object(d.jsx)(E,{prod:e},e.id)}))})]})}))),L=function(e){var t=Object(n.useState)(!0),c=Object(l.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)([]),s=Object(l.a)(i,2),j=s[0],o=s[1];return Object(n.useEffect)((function(){N().collection("items").where("inicio","==","inicio").get().then((function(e){return o(e.docs.map((function(e){return Object(m.a)({id:e.id},e.data())})))})).catch((function(e){return alert("Error: ".concat(e))})).finally((function(){return r(!1)}))}),[]),Object(d.jsx)(d.Fragment,{children:a?Object(d.jsx)("div",{className:"containerLoading",children:Object(d.jsxs)("div",{className:"lds-ellipsis",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})}):Object(d.jsx)(y,{products:j})})},T=c(25),A=(c(60),function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],r=O(),i=r.cartList,j=r.removeItemCart,o=r.cleanCart,b=r.calculateTotalPriece,u=Object(n.useState)({nombre:"",telefono:"",email:""}),h=Object(l.a)(u,2),p=h[0],f=h[1],v=Object(n.useState)("activo"),g=Object(l.a)(v,2),C=g[0],S=g[1];return console.log(p),Object(d.jsxs)("div",{className:"containerCart",children:[i.length?Object(d.jsx)("div",{className:"containerBtnCleanCart",children:Object(d.jsx)("button",{className:"btnCleanCart",onClick:function(){return S("desactivado"),void o()},children:"Vaciar carrito"})}):""===c?Object(d.jsxs)("div",{className:"containerEmptyCart",children:[Object(d.jsx)("h3",{children:"Carrito de compras"}),Object(d.jsx)("p",{children:"Ups! El carrito esta vacio :("}),Object(d.jsx)("p",{children:"Ve a ver nuestros productos"}),Object(d.jsx)(s.b,{to:"/categoria",children:Object(d.jsx)("button",{className:"btnSeeProd",children:"Ver productos"})})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Gracias por tu compra"}),Object(d.jsxs)("p",{children:["Tu codigo de compras es: ",c]})]}),Object(d.jsxs)("table",{className:"containerTable",children:[Object(d.jsxs)("thead",{className:C,children:[Object(d.jsx)("th",{children:"Imagen"}),Object(d.jsx)("th",{children:"Nombre"}),Object(d.jsx)("th",{children:"Cantidad"}),Object(d.jsx)("th",{children:"Preio"}),Object(d.jsx)("th",{children:"Borrar"})]}),i.map((function(e){return Object(d.jsxs)("tr",{className:"containerCartDetail",children:[Object(d.jsx)("td",{className:"tdImg",children:Object(d.jsx)("img",{className:"imgCartDetail",src:e.img,alt:"Imagen de ".concat(e.nombre)})}),Object(d.jsx)("td",{className:"tdNombre",children:e.nombre}),Object(d.jsx)("td",{className:"tdCant",children:e.cantidad}),Object(d.jsxs)("td",{className:"tdPrecio",children:["$",e.precio]}),Object(d.jsx)("td",{className:"tdIcon",children:Object(d.jsx)(x.c,{onClick:function(){return j(e.id)},className:"iconDelet"})})]},e.id)}))]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"containerForm",children:[Object(d.jsx)("h3",{children:"Completar los datos para finalizar la compra"}),Object(d.jsxs)("label",{children:["Total ",Object(d.jsxs)("span",{children:["$",b()]})]}),Object(d.jsxs)("form",{onChange:function(e){f(Object(m.a)(Object(m.a)({},p),{},Object(T.a)({},e.target.name,e.target.value)))},onSubmit:function(e){e.preventDefault();var t={};t.buyer=p,t.total=b(),t.items=i.map((function(e){return{id:e.id,nombre:e.nombre,precio:e.precio}})),N().collection("orders").add(t).then((function(e){return a(e.id)})).catch((function(e){return alert("Error:",e)})).finally((function(){return o()}))},className:"formCart",children:[Object(d.jsx)("input",{type:"text",name:"nombre",placeholder:"Ingrese su nombre completo",value:p.nombre}),Object(d.jsx)("input",{type:"number",name:"telefono",placeholder:"Ingrese su numero de telefono",value:p.telefono}),Object(d.jsx)("input",{type:"email",name:"email",placeholder:"Ingrese su email (ejemplo@gmail.com)",value:p.email}),Object(d.jsx)("button",{children:"Comprar"})]})]})]})});var D=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(u,{children:Object(d.jsxs)(s.a,{children:[Object(d.jsx)(h,{}),Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{excat:!0,path:"/inicio",component:L}),Object(d.jsx)(j.a,{excat:!0,path:"/categoria/:categoria",component:C}),Object(d.jsx)(j.a,{exact:!0,path:"/detalle/:id",component:k}),Object(d.jsx)(j.a,{exact:!0,path:"/cart",component:A})]})]})})})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.d163155f.chunk.js.map
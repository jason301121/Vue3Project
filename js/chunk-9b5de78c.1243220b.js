(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b5de78c"],{"057f":function(t,e,r){var i=r("fc6a"),c=r("241c").f,n={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return c(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==n.call(t)?a(t):c(i(t))}},2532:function(t,e,r){"use strict";var i=r("23e7"),c=r("5a34"),n=r("1d80"),o=r("577e"),a=r("ab13");i({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~o(n(this)).indexOf(o(c(t)),arguments.length>1?arguments[1]:void 0)}})},"428f":function(t,e,r){var i=r("da84");t.exports=i},"44e7":function(t,e,r){var i=r("861d"),c=r("c6b6"),n=r("b622"),o=n("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==c(t))}},"466d":function(t,e,r){"use strict";var i=r("d784"),c=r("825a"),n=r("50c4"),o=r("577e"),a=r("1d80"),s=r("8aa5"),l=r("14c3");i("match",(function(t,e,r){return[function(e){var r=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,r):new RegExp(e)[t](o(r))},function(t){var i=c(this),a=o(t),u=r(e,i,a);if(u.done)return u.value;if(!i.global)return l(i,a);var d=i.unicode;i.lastIndex=0;var f,b=[],p=0;while(null!==(f=l(i,a))){var h=o(f[0]);b[p]=h,""===h&&(i.lastIndex=s(a,n(i.lastIndex),d)),p++}return 0===p?null:b}]}))},"4de4":function(t,e,r){"use strict";var i=r("23e7"),c=r("b727").filter,n=r("1dde"),o=n("filter");i({target:"Array",proto:!0,forced:!o},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},"593f":function(t,e,r){"use strict";r.r(e);r("a4d3"),r("e01a");var i=r("7a23"),c={class:"container"},n={class:"row px-1"},o={class:""},a=Object(i["h"])("i",{class:"bi bi-arrow-left"},null,-1),s=[a],l={class:"fw-bolder"},u={class:"breadcrumb"},d={class:"breadcrumb-item"},f=Object(i["j"])("首頁"),b={class:"breadcrumb-item"},p=Object(i["j"])("全部商品"),h={class:"breadcrumb-item active","aria-current":"page"},v={class:"col-md-7 col-12 mb-2 text-center"},g=["src","alt"],y={class:"col-md-5 product_detail_word"},O={class:"display-4 fw-bold"},j={class:"product_detail_description my-3"},m={class:"product_detail_content"},w=Object(i["h"])("hr",null,null,-1),_={class:"d-flex flex-column fw-bold"},x={key:0,class:"fs-5"},S={key:1,class:"fs-3"},P={key:2,class:"fs-3 text-danger"},k={class:"d-flex"},$={class:"d-flex circle_input w-100"},q=["disabled"],A=Object(i["h"])("i",{class:"bi bi-dash-circle"},null,-1),I=[A],C=Object(i["h"])("i",{class:"bi bi-plus-circle"},null,-1),E=[C],T=Object(i["i"])('<div class="row my-5"><div class="col-12"><h2 class="fw-bolder"><i class="bi bi-exclamation-circle"></i> 購物須知</h2></div><div class="col-12 product_detail_align py-3 lh-lg d-flex align-middle"><ol class="my-3 ms-2"><li>農產品因受天氣影響價格，若價格有大幅度異動出貨前會進行告知義務。</li><li>產品顏色可能會因網頁呈現與拍攝畫質產生色差，圖片僅供參考，商品依實際供貨樣式為準。</li><li>加入買菜＋宅配官方line以便訂購完成時確認金額及配送時間。</li><li>蔬菜、海鮮、肉品為每日新鮮進貨,每批生長期樣式、大小不一定，出貨以實際商品為主。</li></ol></div></div>',1),K={class:"row my-3"},L=Object(i["h"])("h2",{class:"fw-bolder"},[Object(i["h"])("i",{class:"bi bi-search"}),Object(i["j"])(" 你可能也喜歡")],-1);function N(t,e,r,a,A,C){var N=Object(i["H"])("router-link"),D=Object(i["H"])("ProductSwiper");return Object(i["A"])(),Object(i["g"])("div",c,[Object(i["h"])("div",n,[Object(i["h"])("div",o,[Object(i["h"])("a",{href:"#",onClick:e[0]||(e[0]=Object(i["U"])((function(){return C.goBack&&C.goBack.apply(C,arguments)}),["prevent"])),class:"fw-bold display-2"},s),Object(i["h"])("nav",l,[Object(i["h"])("ol",u,[Object(i["h"])("li",d,[Object(i["k"])(N,{to:"/",class:"text-decoration-none"},{default:Object(i["S"])((function(){return[f]})),_:1})]),Object(i["h"])("li",b,[Object(i["k"])(N,{to:"/product",class:"text-decoration-none"},{default:Object(i["S"])((function(){return[p]})),_:1})]),Object(i["h"])("li",h,Object(i["K"])(A.product_detail.title),1)])])]),Object(i["h"])("div",v,[Object(i["h"])("img",{src:A.product_detail.imageUrl,alt:A.product_detail.title,class:"product_detail_img"},null,8,g)]),Object(i["h"])("div",y,[Object(i["h"])("h1",O,Object(i["K"])(A.product_detail.title),1),Object(i["h"])("p",j,Object(i["K"])(A.product_detail.description),1),Object(i["h"])("p",m,Object(i["K"])(A.product_detail.content),1),w,Object(i["h"])("div",_,[A.product_detail.origin_price!==A.product_detail.price?(Object(i["A"])(),Object(i["g"])("del",x,"原價 : $ "+Object(i["K"])(t.$filters.currency(A.product_detail.origin_price)),1)):(Object(i["A"])(),Object(i["g"])("p",S,"$ "+Object(i["K"])(t.$filters.currency(A.product_detail.origin_price)),1)),A.product_detail.origin_price!==A.product_detail.price?(Object(i["A"])(),Object(i["g"])("p",P,"特價 : $ "+Object(i["K"])(t.$filters.currency(A.product_detail.price)),1)):Object(i["f"])("",!0)]),Object(i["h"])("div",k,[Object(i["h"])("div",$,[Object(i["h"])("button",{disabled:1==A.qty,type:"button",class:"circle_input_btn",onClick:e[1]||(e[1]=Object(i["U"])((function(t){return C.editqty(A.qty-1)}),["prevent"]))},I,8,q),Object(i["T"])(Object(i["h"])("input",{type:"number",class:"text-center fw-bold border-0","onUpdate:modelValue":e[2]||(e[2]=function(t){return A.qty=t}),min:"1"},null,512),[[i["O"],A.qty]]),Object(i["h"])("button",{type:"button",class:"circle_input_btn",onClick:e[3]||(e[3]=Object(i["U"])((function(t){return C.editqty(A.qty+1)}),["prevent"]))},E),Object(i["h"])("button",{type:"button",class:"product_detail_btn fw-bold text-nowrap",onClick:e[4]||(e[4]=function(){return C.addCart&&C.addCart.apply(C,arguments)})},"加入購物車")])])])]),T,Object(i["h"])("div",K,[L,Object(i["k"])(D,{data:A.filter_product_list,onGoToProduct:C.goDetail},null,8,["data","onGoToProduct"])])])}r("99af"),r("4de4"),r("caad"),r("2532"),r("c740"),r("a434"),r("ac1f"),r("466d");var D=r("36f6"),J={data:function(){return{product_detail:{},qty:1,category:"",allProducts:[],filter_product_list:[],favoriteList:[],product_id:""}},components:{ProductSwiper:D["a"]},methods:{getProductDetail:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jason-api","/product/").concat(this.$route.params.id);this.$http.get(e).then((function(e){t.product_detail=e.data.product,t.getProductAll()}))},getProductAll:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("jason-api","/products/all");this.$http.get(e).then((function(e){t.allProducts=e.data.products,t.filter_product_list=t.allProducts.filter((function(e){return e.category===t.product_detail.category&&e.id!==t.product_detail.id}))}))},goBack:function(){this.$router.go(-1)},editqty:function(t){this.qty=t},addCart:function(){var t=this,e=this.product_detail.id,r=this.qty;this.$store.dispatch("carts/addCart",{id:e,qty:r}),setTimeout((function(){t.$swal({title:"已加入購物車",icon:"success"})}),1e3),this.qty=1},goDetail:function(t){this.$router.push("/productdetail/".concat(t))},getFavorite:function(){var t=localStorage.getItem("favorite")||"[]";this.favoriteList=JSON.parse(t)},addFavorite:function(t){if(this.favoriteList.includes(t.id)){var e=this.favoriteList.findIndex((function(e){return e===t.id}));this.favoriteList.splice(e,1),this.$swal({title:"從我的收藏移除",icon:"success"})}else this.favoriteList.push(t.id),this.$swal({title:"已加入我的收藏",icon:"success"});var r=JSON.stringify(this.favoriteList);localStorage.setItem("favorite",r),this.getFavorite()}},watch:{$route:function(t,e){t.fullPath.match("/productdetail/")&&this.getProductDetail()}},created:function(){this.getProductDetail()}};J.render=N;e["default"]=J},"5a34":function(t,e,r){var i=r("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},"746f":function(t,e,r){var i=r("428f"),c=r("5135"),n=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});c(e,t)||o(e,t,{value:n.f(t)})}},a434:function(t,e,r){"use strict";var i=r("23e7"),c=r("23cb"),n=r("a691"),o=r("50c4"),a=r("7b0b"),s=r("65f0"),l=r("8418"),u=r("1dde"),d=u("splice"),f=Math.max,b=Math.min,p=9007199254740991,h="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var r,i,u,d,v,g,y=a(this),O=o(y.length),j=c(t,O),m=arguments.length;if(0===m?r=i=0:1===m?(r=0,i=O-j):(r=m-2,i=b(f(n(e),0),O-j)),O+r-i>p)throw TypeError(h);for(u=s(y,i),d=0;d<i;d++)v=j+d,v in y&&l(u,d,y[v]);if(u.length=i,r<i){for(d=j;d<O-i;d++)v=d+i,g=d+r,v in y?y[g]=y[v]:delete y[g];for(d=O;d>O-i+r;d--)delete y[d-1]}else if(r>i)for(d=O-i;d>j;d--)v=d+i-1,g=d+r-1,v in y?y[g]=y[v]:delete y[g];for(d=0;d<r;d++)y[d+j]=arguments[d+2];return y.length=O-i+r,u}})},a4d3:function(t,e,r){"use strict";var i=r("23e7"),c=r("da84"),n=r("d066"),o=r("c430"),a=r("83ab"),s=r("4930"),l=r("d039"),u=r("5135"),d=r("e8b5"),f=r("861d"),b=r("d9b5"),p=r("825a"),h=r("7b0b"),v=r("fc6a"),g=r("a04b"),y=r("577e"),O=r("5c6c"),j=r("7c73"),m=r("df75"),w=r("241c"),_=r("057f"),x=r("7418"),S=r("06cf"),P=r("9bf2"),k=r("d1e7"),$=r("9112"),q=r("6eeb"),A=r("5692"),I=r("f772"),C=r("d012"),E=r("90e3"),T=r("b622"),K=r("e538"),L=r("746f"),N=r("d44e"),D=r("69f3"),J=r("b727").forEach,F=I("hidden"),U="Symbol",B="prototype",M=T("toPrimitive"),R=D.set,G=D.getterFor(U),H=Object[B],Q=c.Symbol,V=n("JSON","stringify"),W=S.f,z=P.f,X=_.f,Y=k.f,Z=A("symbols"),tt=A("op-symbols"),et=A("string-to-symbol-registry"),rt=A("symbol-to-string-registry"),it=A("wks"),ct=c.QObject,nt=!ct||!ct[B]||!ct[B].findChild,ot=a&&l((function(){return 7!=j(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var i=W(H,e);i&&delete H[e],z(t,e,r),i&&t!==H&&z(H,e,i)}:z,at=function(t,e){var r=Z[t]=j(Q[B]);return R(r,{type:U,tag:t,description:e}),a||(r.description=e),r},st=function(t,e,r){t===H&&st(tt,e,r),p(t);var i=g(e);return p(r),u(Z,i)?(r.enumerable?(u(t,F)&&t[F][i]&&(t[F][i]=!1),r=j(r,{enumerable:O(0,!1)})):(u(t,F)||z(t,F,O(1,{})),t[F][i]=!0),ot(t,i,r)):z(t,i,r)},lt=function(t,e){p(t);var r=v(e),i=m(r).concat(pt(r));return J(i,(function(e){a&&!dt.call(r,e)||st(t,e,r[e])})),t},ut=function(t,e){return void 0===e?j(t):lt(j(t),e)},dt=function(t){var e=g(t),r=Y.call(this,e);return!(this===H&&u(Z,e)&&!u(tt,e))&&(!(r||!u(this,e)||!u(Z,e)||u(this,F)&&this[F][e])||r)},ft=function(t,e){var r=v(t),i=g(e);if(r!==H||!u(Z,i)||u(tt,i)){var c=W(r,i);return!c||!u(Z,i)||u(r,F)&&r[F][i]||(c.enumerable=!0),c}},bt=function(t){var e=X(v(t)),r=[];return J(e,(function(t){u(Z,t)||u(C,t)||r.push(t)})),r},pt=function(t){var e=t===H,r=X(e?tt:v(t)),i=[];return J(r,(function(t){!u(Z,t)||e&&!u(H,t)||i.push(Z[t])})),i};if(s||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?y(arguments[0]):void 0,e=E(t),r=function(t){this===H&&r.call(tt,t),u(this,F)&&u(this[F],e)&&(this[F][e]=!1),ot(this,e,O(1,t))};return a&&nt&&ot(H,e,{configurable:!0,set:r}),at(e,t)},q(Q[B],"toString",(function(){return G(this).tag})),q(Q,"withoutSetter",(function(t){return at(E(t),t)})),k.f=dt,P.f=st,S.f=ft,w.f=_.f=bt,x.f=pt,K.f=function(t){return at(T(t),t)},a&&(z(Q[B],"description",{configurable:!0,get:function(){return G(this).description}}),o||q(H,"propertyIsEnumerable",dt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:Q}),J(m(it),(function(t){L(t)})),i({target:U,stat:!0,forced:!s},{for:function(t){var e=y(t);if(u(et,e))return et[e];var r=Q(e);return et[e]=r,rt[r]=e,r},keyFor:function(t){if(!b(t))throw TypeError(t+" is not a symbol");if(u(rt,t))return rt[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),i({target:"Object",stat:!0,forced:!s,sham:!a},{create:ut,defineProperty:st,defineProperties:lt,getOwnPropertyDescriptor:ft}),i({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),i({target:"Object",stat:!0,forced:l((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(h(t))}}),V){var ht=!s||l((function(){var t=Q();return"[null]"!=V([t])||"{}"!=V({a:t})||"{}"!=V(Object(t))}));i({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var i,c=[t],n=1;while(arguments.length>n)c.push(arguments[n++]);if(i=e,(f(e)||void 0!==t)&&!b(t))return d(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!b(e))return e}),c[1]=e,V.apply(null,c)}})}Q[B][M]||$(Q[B],M,Q[B].valueOf),N(Q,U),C[F]=!0},ab13:function(t,e,r){var i=r("b622"),c=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[c]=!1,"/./"[t](e)}catch(i){}}return!1}},b727:function(t,e,r){var i=r("0366"),c=r("44ad"),n=r("7b0b"),o=r("50c4"),a=r("65f0"),s=[].push,l=function(t){var e=1==t,r=2==t,l=3==t,u=4==t,d=6==t,f=7==t,b=5==t||d;return function(p,h,v,g){for(var y,O,j=n(p),m=c(j),w=i(h,v,3),_=o(m.length),x=0,S=g||a,P=e?S(p,_):r||f?S(p,0):void 0;_>x;x++)if((b||x in m)&&(y=m[x],O=w(y,x,j),t))if(e)P[x]=O;else if(O)switch(t){case 3:return!0;case 5:return y;case 6:return x;case 2:s.call(P,y)}else switch(t){case 4:return!1;case 7:s.call(P,y)}return d?-1:l||u?u:P}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},c740:function(t,e,r){"use strict";var i=r("23e7"),c=r("b727").findIndex,n=r("44d2"),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{findIndex:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),n(o)},caad:function(t,e,r){"use strict";var i=r("23e7"),c=r("4d64").includes,n=r("44d2");i({target:"Array",proto:!0},{includes:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},e01a:function(t,e,r){"use strict";var i=r("23e7"),c=r("83ab"),n=r("da84"),o=r("5135"),a=r("861d"),s=r("9bf2").f,l=r("e893"),u=n.Symbol;if(c&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(f,u);var b=f.prototype=u.prototype;b.constructor=f;var p=b.toString,h="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;s(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=p.call(t);if(o(d,t))return"";var r=h?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),i({global:!0,forced:!0},{Symbol:f})}},e538:function(t,e,r){var i=r("b622");e.f=i}}]);
//# sourceMappingURL=chunk-9b5de78c.1243220b.js.map
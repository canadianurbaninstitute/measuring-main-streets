import{S as N,i as b,s as D,k as o,a as G,q as S,l as f,m as q,h,c as V,r as A,E as k,n as r,b as F,F as d,u as H,G as E}from"./index.f35560ff.js";import{b as C}from"./paths.0d53465c.js";function M(n){let e,a,l,s,m,t,_,u,v;return{c(){e=o("a"),a=o("div"),l=o("div"),s=o("img"),t=G(),_=o("h4"),u=S(n[2]),this.h()},l(c){e=f(c,"A",{href:!0,class:!0});var i=q(e);a=f(i,"DIV",{class:!0});var g=q(a);l=f(g,"DIV",{class:!0});var I=q(l);s=f(I,"IMG",{src:!0,alt:!0,class:!0}),I.forEach(h),t=V(g),_=f(g,"H4",{class:!0});var y=q(_);u=A(y,n[2]),y.forEach(h),g.forEach(h),i.forEach(h),this.h()},h(){k(s.src,m=n[1])||r(s,"src",m),r(s,"alt","card"),r(s,"class","svelte-e0yoqr"),r(l,"class","card-img"),r(_,"class","svelte-e0yoqr"),r(a,"class","card svelte-e0yoqr"),r(e,"href",v=C+n[0]),r(e,"class","svelte-e0yoqr")},m(c,i){F(c,e,i),d(e,a),d(a,l),d(l,s),d(a,t),d(a,_),d(_,u)},p(c,[i]){i&2&&!k(s.src,m=c[1])&&r(s,"src",m),i&4&&H(u,c[2]),i&1&&v!==(v=C+c[0])&&r(e,"href",v)},i:E,o:E,d(c){c&&h(e)}}}function j(n,e,a){let{link:l}=e,{cardImage:s}=e,{streetName:m}=e;return n.$$set=t=>{"link"in t&&a(0,l=t.link),"cardImage"in t&&a(1,s=t.cardImage),"streetName"in t&&a(2,m=t.streetName)},[l,s,m]}class B extends N{constructor(e){super(),b(this,e,j,M,D,{link:0,cardImage:1,streetName:2})}}export{B as C};
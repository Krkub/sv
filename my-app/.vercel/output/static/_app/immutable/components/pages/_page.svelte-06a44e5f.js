import{S as Ye,i as we,s as Ue,e as W,b as F,B as Ee,h as c,J as qe,k as m,q as _,l as d,m as h,r as u,E as n,a as v,c as S,n as R,K as Be,u as b}from"../../chunks/index-267f67aa.js";function Ae(s,e,t){const o=s.slice();return o[3]=e[t],o}function Ie(s){let e,t=s[0].reservations,o=[];for(let a=0;a<t.length;a+=1)o[a]=Ce(Ae(s,t,a));let l=null;return t.length||(l=Oe()),{c(){for(let a=0;a<o.length;a+=1)o[a].c();e=W(),l&&l.c()},l(a){for(let i=0;i<o.length;i+=1)o[i].l(a);e=W(),l&&l.l(a)},m(a,i){for(let f=0;f<o.length;f+=1)o[f].m(a,i);F(a,e,i),l&&l.m(a,i)},p(a,i){if(i&3){t=a[0].reservations;let f;for(f=0;f<t.length;f+=1){const g=Ae(a,t,f);o[f]?o[f].p(g,i):(o[f]=Ce(g),o[f].c(),o[f].m(e.parentNode,e))}for(;f<o.length;f+=1)o[f].d(1);o.length=t.length,!t.length&&l?l.p(a,i):t.length?l&&(l.d(1),l=null):(l=Oe(),l.c(),l.m(e.parentNode,e))}},d(a){qe(o,a),a&&c(e),l&&l.d(a)}}}function Oe(s){let e,t;return{c(){e=m("div"),t=_("You do not have any reservations")},l(o){e=d(o,"DIV",{});var l=h(e);t=u(l,"You do not have any reservations"),l.forEach(c)},m(o,l){F(o,e,l),n(e,t)},p:Ee,d(o){o&&c(e)}}}function Te(s){let e,t,o,l,a;return{c(){e=m("form"),t=m("input"),l=v(),a=m("input"),this.h()},l(i){e=d(i,"FORM",{action:!0,method:!0});var f=h(e);t=d(f,"INPUT",{type:!0}),l=S(f),a=d(f,"INPUT",{type:!0}),f.forEach(c),this.h()},h(){R(t,"type","hidden"),t.value=o=s[3].id,R(a,"type","submit"),a.value="Are you sure you want to cancel",R(e,"action","/?/cancel"),R(e,"method","post")},m(i,f){F(i,e,f),n(e,t),n(e,l),n(e,a)},p(i,f){f&1&&o!==(o=i[3].id)&&(t.value=o)},d(i){i&&c(e)}}}function Ce(s){var ke,ye;let e,t,o,l,a,i,f=s[3].total+"",g,X,k,Z,Y=s[3].rooms.hotels.city.name+"",J,$,y,x,w=s[3].rooms.hotels.name+"",K,ee,P,te,U=s[3].rooms.hotels.stars+"",M,le,A,ae,q=s[3].rooms.room_type.name+"",j,ne,I,se,B=s[3].rooms.room_number+"",z,oe,O,re,D=((ke=s[3].start_date)==null?void 0:ke.toISOString().substring(0,10))+"",G,ie,T,fe,H=((ye=s[3].end_date)==null?void 0:ye.toISOString().substring(0,10))+"",L,_e,E,ue,ce,Q,pe,Ne;function Re(){return s[2](s[3])}let p=s[1]===s[3].id&&Te(s);return{c(){e=m("div"),t=m("span"),o=_("Your reservation:"),l=v(),a=m("span"),i=_("Total:"),g=_(f),X=v(),k=m("span"),Z=_("City:"),J=_(Y),$=v(),y=m("span"),x=_("Hotel name:"),K=_(w),ee=v(),P=m("span"),te=_("Stars:"),M=_(U),le=v(),A=m("span"),ae=_("Room type:"),j=_(q),ne=v(),I=m("span"),se=_("Room number:"),z=_(B),oe=v(),O=m("span"),re=_("Start date:"),G=_(D),ie=v(),T=m("span"),fe=_("End date:"),L=_(H),_e=v(),E=m("button"),ue=_("Cancel"),ce=v(),p&&p.c(),Q=v(),this.h()},l(N){e=d(N,"DIV",{class:!0});var r=h(e);t=d(r,"SPAN",{});var V=h(t);o=u(V,"Your reservation:"),V.forEach(c),l=S(r),a=d(r,"SPAN",{});var C=h(a);i=u(C,"Total:"),g=u(C,f),C.forEach(c),X=S(r),k=d(r,"SPAN",{});var me=h(k);Z=u(me,"City:"),J=u(me,Y),me.forEach(c),$=S(r),y=d(r,"SPAN",{});var de=h(y);x=u(de,"Hotel name:"),K=u(de,w),de.forEach(c),ee=S(r),P=d(r,"SPAN",{});var he=h(P);te=u(he,"Stars:"),M=u(he,U),he.forEach(c),le=S(r),A=d(r,"SPAN",{});var ve=h(A);ae=u(ve,"Room type:"),j=u(ve,q),ve.forEach(c),ne=S(r),I=d(r,"SPAN",{});var Se=h(I);se=u(Se,"Room number:"),z=u(Se,B),Se.forEach(c),oe=S(r),O=d(r,"SPAN",{});var be=h(O);re=u(be,"Start date:"),G=u(be,D),be.forEach(c),ie=S(r),T=d(r,"SPAN",{});var ge=h(T);fe=u(ge,"End date:"),L=u(ge,H),ge.forEach(c),_e=S(r),E=d(r,"BUTTON",{class:!0});var Pe=h(E);ue=u(Pe,"Cancel"),Pe.forEach(c),ce=S(r),p&&p.l(r),Q=S(r),r.forEach(c),this.h()},h(){R(E,"class","svelte-cw4c7o"),R(e,"class","flex svelte-cw4c7o")},m(N,r){F(N,e,r),n(e,t),n(t,o),n(e,l),n(e,a),n(a,i),n(a,g),n(e,X),n(e,k),n(k,Z),n(k,J),n(e,$),n(e,y),n(y,x),n(y,K),n(e,ee),n(e,P),n(P,te),n(P,M),n(e,le),n(e,A),n(A,ae),n(A,j),n(e,ne),n(e,I),n(I,se),n(I,z),n(e,oe),n(e,O),n(O,re),n(O,G),n(e,ie),n(e,T),n(T,fe),n(T,L),n(e,_e),n(e,E),n(E,ue),n(e,ce),p&&p.m(e,null),n(e,Q),pe||(Ne=Be(E,"click",Re),pe=!0)},p(N,r){var V,C;s=N,r&1&&f!==(f=s[3].total+"")&&b(g,f),r&1&&Y!==(Y=s[3].rooms.hotels.city.name+"")&&b(J,Y),r&1&&w!==(w=s[3].rooms.hotels.name+"")&&b(K,w),r&1&&U!==(U=s[3].rooms.hotels.stars+"")&&b(M,U),r&1&&q!==(q=s[3].rooms.room_type.name+"")&&b(j,q),r&1&&B!==(B=s[3].rooms.room_number+"")&&b(z,B),r&1&&D!==(D=((V=s[3].start_date)==null?void 0:V.toISOString().substring(0,10))+"")&&b(G,D),r&1&&H!==(H=((C=s[3].end_date)==null?void 0:C.toISOString().substring(0,10))+"")&&b(L,H),s[1]===s[3].id?p?p.p(s,r):(p=Te(s),p.c(),p.m(e,Q)):p&&(p.d(1),p=null)},d(N){N&&c(e),p&&p.d(),pe=!1,Ne()}}}function De(s){var o;let e,t=((o=s[0])==null?void 0:o.reservations)&&Ie(s);return{c(){t&&t.c(),e=W()},l(l){t&&t.l(l),e=W()},m(l,a){t&&t.m(l,a),F(l,e,a)},p(l,[a]){var i;(i=l[0])!=null&&i.reservations?t?t.p(l,a):(t=Ie(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:Ee,o:Ee,d(l){t&&t.d(l),l&&c(e)}}}function He(s,e,t){let{data:o}=e,l=-1;const a=i=>t(1,l=i.id);return s.$$set=i=>{"data"in i&&t(0,o=i.data)},[o,l,a]}class Fe extends Ye{constructor(e){super(),we(this,e,He,De,Ue,{data:0})}}export{Fe as default};
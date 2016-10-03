!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n.topojson={})}(this,function(n){"use strict";function t(){}function r(n){if(!n)return t;var r,e,o=n.scale[0],i=n.scale[1],u=n.translate[0],f=n.translate[1];return function(n,t){t||(r=e=0),n[0]=(r+=n[0])*o+u,n[1]=(e+=n[1])*i+f}}function e(n){if(!n)return t;var r,e,o=n.scale[0],i=n.scale[1],u=n.translate[0],f=n.translate[1];return function(n,t){t||(r=e=0);var c=(n[0]-u)/o|0,a=(n[1]-f)/i|0;n[0]=c-r,n[1]=a-e,r=c,e=a}}function o(n,t){for(var r,e=n.length,o=e-t;o<--e;)r=n[o],n[o++]=n[e],n[e]=r}function i(n,t){for(var r=0,e=n.length;e>r;){var o=r+e>>>1;n[o]<t?r=o+1:e=o}return r}function u(n,t){return"GeometryCollection"===t.type?{type:"FeatureCollection",features:t.geometries.map(function(t){return f(n,t)})}:f(n,t)}function f(n,t){var r={type:"Feature",id:t.id,properties:t.properties||{},geometry:c(n,t)};return null==t.id&&delete r.id,r}function c(n,t){function e(n,t){t.length&&t.pop();for(var r,e=l[0>n?~n:n],i=0,u=e.length;u>i;++i)t.push(r=e[i].slice()),s(r,i);0>n&&o(t,u)}function i(n){return n=n.slice(),s(n,0),n}function u(n){for(var t=[],r=0,o=n.length;o>r;++r)e(n[r],t);return t.length<2&&t.push(t[0].slice()),t}function f(n){for(var t=u(n);t.length<4;)t.push(t[0].slice());return t}function c(n){return n.map(f)}function a(n){var t=n.type;return"GeometryCollection"===t?{type:t,geometries:n.geometries.map(a)}:t in h?{type:t,coordinates:h[t](n)}:null}var s=r(n.transform),l=n.arcs,h={Point:function(n){return i(n.coordinates)},MultiPoint:function(n){return n.coordinates.map(i)},LineString:function(n){return u(n.arcs)},MultiLineString:function(n){return n.arcs.map(u)},Polygon:function(n){return c(n.arcs)},MultiPolygon:function(n){return n.arcs.map(c)}};return a(t)}function a(n,t){function r(t){var r,e=n.arcs[0>t?~t:t],o=e[0];return n.transform?(r=[0,0],e.forEach(function(n){r[0]+=n[0],r[1]+=n[1]})):r=e[e.length-1],0>t?[r,o]:[o,r]}function e(n,t){for(var r in n){var e=n[r];delete t[e.start],delete e.start,delete e.end,e.forEach(function(n){o[0>n?~n:n]=1}),f.push(e)}}var o={},i={},u={},f=[],c=-1;return t.forEach(function(r,e){var o,i=n.arcs[0>r?~r:r];i.length<3&&!i[1][0]&&!i[1][1]&&(o=t[++c],t[c]=r,t[e]=o)}),t.forEach(function(n){var t,e,o=r(n),f=o[0],c=o[1];if(t=u[f])if(delete u[t.end],t.push(n),t.end=c,e=i[c]){delete i[e.start];var a=e===t?t:t.concat(e);i[a.start=t.start]=u[a.end=e.end]=a}else i[t.start]=u[t.end]=t;else if(t=i[c])if(delete i[t.start],t.unshift(n),t.start=f,e=u[f]){delete u[e.end];var s=e===t?t:e.concat(t);i[s.start=e.start]=u[s.end=t.end]=s}else i[t.start]=u[t.end]=t;else t=[n],i[t.start=f]=u[t.end=c]=t}),e(u,i),e(i,u),t.forEach(function(n){o[0>n?~n:n]||f.push([n])}),f}function s(n){return c(n,l.apply(this,arguments))}function l(n,t,r){function e(n){var t=0>n?~n:n;(s[t]||(s[t]=[])).push({i:n,g:c})}function o(n){n.forEach(e)}function i(n){n.forEach(o)}function u(n){"GeometryCollection"===n.type?n.geometries.forEach(u):n.type in l&&(c=n,l[n.type](n.arcs))}var f=[];if(arguments.length>1){var c,s=[],l={LineString:o,MultiLineString:i,Polygon:i,MultiPolygon:function(n){n.forEach(i)}};u(t),s.forEach(arguments.length<3?function(n){f.push(n[0].i)}:function(n){r(n[0].g,n[n.length-1].g)&&f.push(n[0].i)})}else for(var h=0,p=n.arcs.length;p>h;++h)f.push(h);return{type:"MultiLineString",arcs:a(n,f)}}function h(n){var t=n[0],r=n[1],e=n[2];return Math.abs((t[0]-e[0])*(r[1]-t[1])-(t[0]-r[0])*(e[1]-t[1]))}function p(n){for(var t,r=-1,e=n.length,o=n[e-1],i=0;++r<e;)t=o,o=n[r],i+=t[0]*o[1]-t[1]*o[0];return i/2}function g(n){return c(n,v.apply(this,arguments))}function v(n,t){function r(n){n.forEach(function(t){t.forEach(function(t){(o[t=0>t?~t:t]||(o[t]=[])).push(n)})}),i.push(n)}function e(t){return p(c(n,{type:"Polygon",arcs:[t]}).coordinates[0])>0}var o={},i=[],u=[];return t.forEach(function(n){"Polygon"===n.type?r(n.arcs):"MultiPolygon"===n.type&&n.arcs.forEach(r)}),i.forEach(function(n){if(!n._){var t=[],r=[n];for(n._=1,u.push(t);n=r.pop();)t.push(n),n.forEach(function(n){n.forEach(function(n){o[0>n?~n:n].forEach(function(n){n._||(n._=1,r.push(n))})})})}}),i.forEach(function(n){delete n._}),{type:"MultiPolygon",arcs:u.map(function(t){var r,i=[];if(t.forEach(function(n){n.forEach(function(n){n.forEach(function(n){o[0>n?~n:n].length<2&&i.push(n)})})}),i=a(n,i),(r=i.length)>1)for(var u,f=e(t[0][0]),c=0;r>c;++c)if(f===e(i[c])){u=i[0],i[0]=i[c],i[c]=u;break}return i})}}function y(n){function t(n,t){n.forEach(function(n){0>n&&(n=~n);var r=o[n];r?r.push(t):o[n]=[t]})}function r(n,r){n.forEach(function(n){t(n,r)})}function e(n,t){"GeometryCollection"===n.type?n.geometries.forEach(function(n){e(n,t)}):n.type in f&&f[n.type](n.arcs,t)}var o={},u=n.map(function(){return[]}),f={LineString:t,MultiLineString:r,Polygon:r,MultiPolygon:function(n,t){n.forEach(function(n){r(n,t)})}};n.forEach(e);for(var c in o)for(var a=o[c],s=a.length,l=0;s>l;++l)for(var h=l+1;s>h;++h){var p,g=a[l],v=a[h];(p=u[g])[c=i(p,v)]!==v&&p.splice(c,0,v),(p=u[v])[c=i(p,g)]!==g&&p.splice(c,0,g)}return u}function d(n,t){return n[1][2]-t[1][2]}function m(){function n(n,t){for(;t>0;){var r=(t+1>>1)-1,o=e[r];if(d(n,o)>=0)break;e[o._=t]=o,e[n._=t=r]=n}}function t(n,t){for(;;){var r=t+1<<1,i=r-1,u=t,f=e[u];if(o>i&&d(e[i],f)<0&&(f=e[u=i]),o>r&&d(e[r],f)<0&&(f=e[u=r]),u===t)break;e[f._=t]=f,e[n._=t=u]=n}}var r={},e=[],o=0;return r.push=function(t){return n(e[t._=o]=t,o++),o},r.pop=function(){if(!(0>=o)){var n,r=e[0];return--o>0&&(n=e[o],t(e[n._=0]=n,0)),r}},r.remove=function(r){var i,u=r._;if(e[u]===r)return u!==--o&&(i=e[o],(d(i,r)<0?n:t)(e[i._=u]=i,u)),u},r}function E(n,t){function o(n){f.remove(n),n[1][2]=t(n),f.push(n)}var i=r(n.transform),u=e(n.transform),f=m();return t||(t=h),n.arcs.forEach(function(n){var r,e,c,a,s=[],l=0;for(e=0,c=n.length;c>e;++e)a=n[e],i(n[e]=[a[0],a[1],1/0],e);for(e=1,c=n.length-1;c>e;++e)r=n.slice(e-1,e+2),r[1][2]=t(r),s.push(r),f.push(r);for(e=0,c=s.length;c>e;++e)r=s[e],r.previous=s[e-1],r.next=s[e+1];for(;r=f.pop();){var h=r.previous,p=r.next;r[1][2]<l?r[1][2]=l:l=r[1][2],h&&(h.next=p,h[2]=r[2],o(h)),p&&(p.previous=h,p[0]=r[0],o(p))}n.forEach(u)}),n}var _="1.6.22";n.version=_,n.mesh=s,n.meshArcs=l,n.merge=g,n.mergeArcs=v,n.feature=u,n.neighbors=y,n.presimplify=E});
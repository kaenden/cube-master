const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./EffectComposer-aK8f1Dv2.js","./Pass-BRpuE5ga.js","./CopyShader-CHGAmNbz.js","./OutputPass-BACK-3RX.js","./RenderPass-DU67grIc.js","./UnrealBloomPass-BBiheDPS.js","./N8AO-B3uQiwaY.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l=1e3,u=1001,d=1002,f=1003,p=1004,m=1005,h=1006,g=1007,_=1008,v=1009,y=1010,b=1011,x=1012,S=1013,C=1014,w=1015,T=1016,E=1017,D=1018,ee=1020,O=35902,k=35899,A=1021,te=1022,j=1023,ne=1026,M=1027,re=1028,ie=1029,ae=1030,oe=1031,se=1033,ce=33776,le=33777,ue=33778,N=33779,de=35840,fe=35841,pe=35842,me=35843,he=36196,ge=37492,_e=37496,ve=37488,ye=37489,be=37490,xe=37491,Se=37808,Ce=37809,we=37810,Te=37811,Ee=37812,De=37813,Oe=37814,ke=37815,Ae=37816,je=37817,Me=37818,Ne=37819,Pe=37820,P=37821,Fe=36492,Ie=36494,Le=36495,F=36283,Re=36284,I=36285,ze=36286,Be=2300,Ve=2301,He=2302,Ue=2303,We=2400,Ge=2401,Ke=2402,qe=3200,Je=`srgb`,Ye=`srgb-linear`,Xe=`linear`,Ze=`srgb`,Qe=7680,$e=35044,et=35048,tt=`300 es`,nt=2e3;function rt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function it(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function at(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ot(){let e=at(`canvas`);return e.style.display=`block`,e}var st={};function ct(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function lt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=lt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=lt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ut(...e){let t=e.join(` `);t in st||(st[t]=!0,L(...e))}function dt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ft={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},pt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},mt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ht=1234567,gt=Math.PI/180,_t=180/Math.PI;function vt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mt[e&255]+mt[e>>8&255]+mt[e>>16&255]+mt[e>>24&255]+`-`+mt[t&255]+mt[t>>8&255]+`-`+mt[t>>16&15|64]+mt[t>>24&255]+`-`+mt[n&63|128]+mt[n>>8&255]+`-`+mt[n>>16&255]+mt[n>>24&255]+mt[r&255]+mt[r>>8&255]+mt[r>>16&255]+mt[r>>24&255]).toLowerCase()}function yt(e,t,n){return Math.max(t,Math.min(n,e))}function bt(e,t){return(e%t+t)%t}function xt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function St(e,t,n){return e===t?0:(n-e)/(t-e)}function Ct(e,t,n){return(1-n)*e+n*t}function wt(e,t,n,r){return Ct(e,t,1-Math.exp(-n*r))}function Tt(e,t=1){return t-Math.abs(bt(e,t*2)-t)}function Et(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Dt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Ot(e,t){return e+Math.floor(Math.random()*(t-e+1))}function kt(e,t){return e+Math.random()*(t-e)}function At(e){return e*(.5-Math.random())}function jt(e){e!==void 0&&(ht=e);let t=ht+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mt(e){return e*gt}function Nt(e){return e*_t}function Pt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ft(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function It(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Lt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:L(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Rt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function zt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Bt={DEG2RAD:gt,RAD2DEG:_t,generateUUID:vt,clamp:yt,euclideanModulo:bt,mapLinear:xt,inverseLerp:St,lerp:Ct,damp:wt,pingpong:Tt,smoothstep:Et,smootherstep:Dt,randInt:Ot,randFloat:kt,randFloatSpread:At,seededRandom:jt,degToRad:Mt,radToDeg:Nt,isPowerOfTwo:Pt,ceilPowerOfTwo:Ft,floorPowerOfTwo:It,setQuaternionFromProperEuler:Lt,normalize:zt,denormalize:Rt};o=Symbol.iterator;var z=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=z,e.prototype.isVector2=!0;var Vt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var B=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ut.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ut.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ht.copy(this).projectOnVector(e),this.sub(Ht)}reflect(e){return this.sub(Ht.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=B,t.prototype.isVector3=!0;var Ht=new B,Ut=new Vt,V=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ut(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Wt.makeScale(e,t)),this}rotate(e){return ut(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Wt.makeRotation(-e)),this}translate(e,t){return ut(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Wt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=V,n.prototype.isMatrix3=!0;var Wt=new V,Gt=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kt=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qt(){let e={enabled:!0,workingColorSpace:Ye,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Yt(e.r),e.g=Yt(e.g),e.b=Yt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Xt(e.r),e.g=Xt(e.g),e.b=Xt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Xe:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ut(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ut(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ye]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:Gt,fromXYZ:Kt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:r,transfer:Ze,toXYZ:Gt,fromXYZ:Kt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),e}var Jt=qt();function Yt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Xt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Zt,Qt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zt===void 0&&(Zt=at(`canvas`)),Zt.width=e.width,Zt.height=e.height;let t=Zt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Zt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=at(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Yt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Yt(t[e]/255)*255):t[e]=Yt(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},$t=0,en=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$t++}),this.uuid=vt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(tn(r[t].image)):e.push(tn(r[t]))}else e=tn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function tn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Qt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var nn=0,rn=new B,an=class e extends pt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=u,i=u,a=h,o=_,s=j,c=v,l=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nn++}),this.uuid=vt(),this.name=``,this.source=new en(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rn).x}get height(){return this.source.getSize(rn).y}get depth(){return this.source.getSize(rn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case l:e.x-=Math.floor(e.x);break;case u:e.x=e.x<0?0:1;break;case d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case l:e.y-=Math.floor(e.y);break;case u:e.y=e.y<0?0:1;break;case d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null,an.DEFAULT_MAPPING=300,an.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var on=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(yt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=on,r.prototype.isVector4=!0;var sn=class extends pt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:h,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];let r=new an({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:h,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new en(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},cn=class extends sn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ln=class extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},un=class extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},H=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/dn.setFromMatrixColumn(e,0).length(),i=1/dn.setFromMatrixColumn(e,1).length(),a=1/dn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pn,e,mn)}lookAt(e,t,n){let r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),hn.crossVectors(n,_n),hn.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),hn.crossVectors(n,_n)),hn.normalize(),gn.crossVectors(_n,hn),r[0]=hn.x,r[4]=gn.x,r[8]=_n.x,r[1]=hn.y,r[5]=gn.y,r[9]=_n.y,r[2]=hn.z,r[6]=gn.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],O=r[2],k=r[6],A=r[10],te=r[14],j=r[3],ne=r[7],M=r[11],re=r[15];return i[0]=a*x+o*T+s*O+c*j,i[4]=a*S+o*E+s*k+c*ne,i[8]=a*C+o*D+s*A+c*M,i[12]=a*w+o*ee+s*te+c*re,i[1]=l*x+u*T+d*O+f*j,i[5]=l*S+u*E+d*k+f*ne,i[9]=l*C+u*D+d*A+f*M,i[13]=l*w+u*ee+d*te+f*re,i[2]=p*x+m*T+h*O+g*j,i[6]=p*S+m*E+h*k+g*ne,i[10]=p*C+m*D+h*A+g*M,i[14]=p*w+m*ee+h*te+g*re,i[3]=_*x+v*T+y*O+b*j,i[7]=_*S+v*E+y*k+b*ne,i[11]=_*C+v*D+y*A+b*M,i[15]=_*w+v*ee+y*te+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,O=_*ee-v*D+y*E+b*T-x*w+S*C;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/O;return e[0]=(o*ee-s*D+c*E)*k,e[1]=(r*D-n*ee-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*ee-c*w)*k,e[5]=(t*ee-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=dn.set(r[0],r[1],r[2]).length(),o=dn.set(r[4],r[5],r[6]).length(),s=dn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),fn.copy(this);let c=1/a,l=1/o,u=1/s;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=l,fn.elements[5]*=l,fn.elements[6]*=l,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=nt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=nt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=H,i.prototype.isMatrix4=!0;var dn=new B,fn=new H,pn=new B(0,0,0),mn=new B(1,1,1),hn=new B,gn=new B,_n=new B,vn=new H,yn=new Vt,bn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-yt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yn.setFromEuler(this),this.setFromQuaternion(yn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER=`XYZ`;var xn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Sn=0,Cn=new B,wn=new Vt,Tn=new H,En=new B,Dn=new B,On=new B,kn=new Vt,An=new B(1,0,0),jn=new B(0,1,0),Mn=new B(0,0,1),Nn={type:`added`},Pn={type:`removed`},Fn={type:`childadded`,child:null},In={type:`childremoved`,child:null},Ln=class e extends pt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sn++}),this.uuid=vt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new bn,r=new Vt,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new H},normalMatrix:{value:new V}}),this.matrix=new H,this.matrixWorld=new H,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.multiply(wn),this}rotateOnWorldAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.premultiply(wn),this}rotateX(e){return this.rotateOnAxis(An,e)}rotateY(e){return this.rotateOnAxis(jn,e)}rotateZ(e){return this.rotateOnAxis(Mn,e)}translateOnAxis(e,t){return Cn.copy(e).applyQuaternion(this.quaternion),this.position.add(Cn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(An,e)}translateY(e){return this.translateOnAxis(jn,e)}translateZ(e){return this.translateOnAxis(Mn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?En.copy(e):En.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Dn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Dn,En,this.up):Tn.lookAt(En,Dn,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),wn.setFromRotationMatrix(Tn),this.quaternion.premultiply(wn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nn),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pn),In.child=e,this.dispatchEvent(In),In.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nn),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dn,e,On),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dn,kn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Ln.DEFAULT_UP=new B(0,1,0),Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=class extends Ln{constructor(){super(),this.isGroup=!0,this.type=`Group`}},zn={type:`move`},Bn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Un={h:0,s:0,l:0};function Wn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Jt.workingColorSpace){if(e=bt(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Wn(i,r,e+1/3),this.g=Wn(i,r,e),this.b=Wn(i,r,e-1/3)}return Jt.colorSpaceToWorking(this,r),this}setStyle(e,t=Je){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Je){let n=Vn[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yt(e.r),this.g=Yt(e.g),this.b=Yt(e.b),this}copyLinearToSRGB(e){return this.r=Xt(e.r),this.g=Xt(e.g),this.b=Xt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Je){return Jt.workingToColorSpace(Gn.copy(this),e),Math.round(yt(Gn.r*255,0,255))*65536+Math.round(yt(Gn.g*255,0,255))*256+Math.round(yt(Gn.b*255,0,255))}getHexString(e=Je){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.workingToColorSpace(Gn.copy(this),t);let n=Gn.r,r=Gn.g,i=Gn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Jt.workingColorSpace){return Jt.workingToColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Je){Jt.workingToColorSpace(Gn.copy(this),e);let t=Gn.r,n=Gn.g,r=Gn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Un);let n=Ct(Hn.h,Un.h,t),r=Ct(Hn.s,Un.s,t),i=Ct(Hn.l,Un.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new U;U.NAMES=Vn;var Kn=class extends Ln{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},qn=new B,Jn=new B,Yn=new B,Xn=new B,Zn=new B,Qn=new B,$n=new B,er=new B,tr=new B,nr=new B,rr=new on,ir=new on,ar=new on,or=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qn.subVectors(e,t),r.cross(qn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){qn.subVectors(r,t),Jn.subVectors(n,t),Yn.subVectors(e,t);let a=qn.dot(qn),o=qn.dot(Jn),s=qn.dot(Yn),c=Jn.dot(Jn),l=Jn.dot(Yn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xn)!==null&&Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Xn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Xn.x),s.addScaledVector(a,Xn.y),s.addScaledVector(o,Xn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return rr.setScalar(0),ir.setScalar(0),ar.setScalar(0),rr.fromBufferAttribute(e,t),ir.fromBufferAttribute(e,n),ar.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(rr,i.x),a.addScaledVector(ir,i.y),a.addScaledVector(ar,i.z),a}static isFrontFacing(e,t,n,r){return qn.subVectors(n,t),Jn.subVectors(e,t),qn.cross(Jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),qn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Zn.subVectors(r,n),Qn.subVectors(i,n),er.subVectors(e,n);let s=Zn.dot(er),c=Qn.dot(er);if(s<=0&&c<=0)return t.copy(n);tr.subVectors(e,r);let l=Zn.dot(tr),u=Qn.dot(tr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Zn,a);nr.subVectors(e,i);let f=Zn.dot(nr),p=Qn.dot(nr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Qn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return $n.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector($n,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Zn,a).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sr=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(lr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(lr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=lr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,lr):lr.fromBufferAttribute(r,t),lr.applyMatrix4(e.matrixWorld),this.expandByPoint(lr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox)),ur.applyMatrix4(e.matrixWorld),this.union(ur)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,lr),lr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),vr.subVectors(this.max,_r),dr.subVectors(e.a,_r),fr.subVectors(e.b,_r),pr.subVectors(e.c,_r),mr.subVectors(fr,dr),hr.subVectors(pr,fr),gr.subVectors(dr,pr);let t=[0,-mr.z,mr.y,0,-hr.z,hr.y,0,-gr.z,gr.y,mr.z,0,-mr.x,hr.z,0,-hr.x,gr.z,0,-gr.x,-mr.y,mr.x,0,-hr.y,hr.x,0,-gr.y,gr.x,0];return!xr(t,dr,fr,pr,vr)||(t=[1,0,0,0,1,0,0,0,1],!xr(t,dr,fr,pr,vr))?!1:(yr.crossVectors(mr,hr),t=[yr.x,yr.y,yr.z],xr(t,dr,fr,pr,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,lr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(lr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},cr=[new B,new B,new B,new B,new B,new B,new B,new B],lr=new B,ur=new sr,dr=new B,fr=new B,pr=new B,mr=new B,hr=new B,gr=new B,_r=new B,vr=new B,yr=new B,br=new B;function xr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){br.fromArray(e,a);let o=i.x*Math.abs(br.x)+i.y*Math.abs(br.y)+i.z*Math.abs(br.z),s=t.dot(br),c=n.dot(br),l=r.dot(br);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Sr=new B,Cr=new z,wr=0,Tr=class extends pt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=$e,this.updateRanges=[],this.gpuType=w,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXY(t,Cr.x,Cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix3(e),this.setXYZ(t,Sr.x,Sr.y,Sr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyMatrix4(e),this.setXYZ(t,Sr.x,Sr.y,Sr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.applyNormalMatrix(e),this.setXYZ(t,Sr.x,Sr.y,Sr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sr.fromBufferAttribute(this,t),Sr.transformDirection(e),this.setXYZ(t,Sr.x,Sr.y,Sr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rt(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rt(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rt(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Er=class extends Tr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Dr=class extends Tr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Or=class extends Tr{constructor(e,t,n){super(new Float32Array(e),t,n)}},kr=new sr,Ar=new B,jr=new B,Mr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?kr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);let t=Ar.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Ar,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(jr)),this.expandByPoint(Ar.copy(e.center).sub(jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Nr=0,Pr=new H,Fr=new Ln,Ir=new B,Lr=new sr,Rr=new sr,zr=new B,Br=class e extends pt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nr++}),this.uuid=vt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(rt(e)?Dr:Er)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pr.makeRotationFromQuaternion(e),this.applyMatrix4(Pr),this}rotateX(e){return Pr.makeRotationX(e),this.applyMatrix4(Pr),this}rotateY(e){return Pr.makeRotationY(e),this.applyMatrix4(Pr),this}rotateZ(e){return Pr.makeRotationZ(e),this.applyMatrix4(Pr),this}translate(e,t,n){return Pr.makeTranslation(e,t,n),this.applyMatrix4(Pr),this}scale(e,t,n){return Pr.makeScale(e,t,n),this.applyMatrix4(Pr),this}lookAt(e){return Fr.lookAt(e),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Or(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Lr.setFromBufferAttribute(n),this.morphTargetsRelative?(zr.addVectors(this.boundingBox.min,Lr.min),this.boundingBox.expandByPoint(zr),zr.addVectors(this.boundingBox.max,Lr.max),this.boundingBox.expandByPoint(zr)):(this.boundingBox.expandByPoint(Lr.min),this.boundingBox.expandByPoint(Lr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Lr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Rr.setFromBufferAttribute(n),this.morphTargetsRelative?(zr.addVectors(Lr.min,Rr.min),Lr.expandByPoint(zr),zr.addVectors(Lr.max,Rr.max),Lr.expandByPoint(zr)):(Lr.expandByPoint(Rr.min),Lr.expandByPoint(Rr.max))}Lr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)zr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(zr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)zr.fromBufferAttribute(a,t),o&&(Ir.fromBufferAttribute(e,t),zr.add(Ir)),r=Math.max(r,n.distanceToSquared(zr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Tr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let c=new B,l=new B,u=new B,d=new z,f=new z,p=new z,m=new B,h=new B;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new B,y=new B,b=new B,x=new B;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Tr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zr.fromBufferAttribute(e,t),zr.normalize(),e.setXYZ(t,zr.x,zr.y,zr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Tr(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Vr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=$e,this.updateRanges=[],this.version=0,this.uuid=vt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Hr=new B,Ur=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix4(e),this.setXYZ(t,Hr.x,Hr.y,Hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.applyNormalMatrix(e),this.setXYZ(t,Hr.x,Hr.y,Hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hr.fromBufferAttribute(this,t),Hr.transformDirection(e),this.setXYZ(t,Hr.x,Hr.y,Hr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array),i=zt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){ct(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Tr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ct(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wr=new B,Gr=new B,Kr=new V,qr=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Wr.subVectors(n,t).cross(Gr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Wr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Kr.getNormalMatrix(e),r=this.coplanarPoint(Wr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Jr=0,Yr=class extends pt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jr++}),this.uuid=vt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qe,this.stencilZFail=Qe,this.stencilZPass=Qe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new qr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Xr=class extends Yr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zr,Qr=new B,$r=new B,ei=new B,ti=new z,ni=new z,ri=new H,ii=new B,ai=new B,oi=new B,si=new z,ci=new z,li=new z,ui=class extends Ln{constructor(e=new Xr){if(super(),this.isSprite=!0,this.type=`Sprite`,Zr===void 0){Zr=new Br;let e=new Vr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Zr.setIndex([0,1,2,0,2,3]),Zr.setAttribute(`position`,new Ur(e,3,0,!1)),Zr.setAttribute(`uv`,new Ur(e,2,3,!1))}this.geometry=Zr,this.material=e,this.center=new z(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&R(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),$r.setFromMatrixScale(this.matrixWorld),ri.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ei.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$r.multiplyScalar(-ei.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;di(ii.set(-.5,-.5,0),ei,a,$r,r,i),di(ai.set(.5,-.5,0),ei,a,$r,r,i),di(oi.set(.5,.5,0),ei,a,$r,r,i),si.set(0,0),ci.set(1,0),li.set(1,1);let o=e.ray.intersectTriangle(ii,ai,oi,!1,Qr);if(o===null&&(di(ai.set(-.5,.5,0),ei,a,$r,r,i),ci.set(0,1),o=e.ray.intersectTriangle(ii,oi,ai,!1,Qr),o===null))return;let s=e.ray.origin.distanceTo(Qr);s<e.near||s>e.far||t.push({distance:s,point:Qr.clone(),uv:or.getInterpolation(Qr,ii,ai,oi,si,ci,li,new z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function di(e,t,n,r,i,a){ti.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?ni.copy(ti):(ni.x=a*ti.x-i*ti.y,ni.y=i*ti.x+a*ti.y),e.copy(t),e.x+=ni.x,e.y+=ni.y,e.applyMatrix4(ri)}var fi=new B,pi=new B,mi=new B,hi=new B,gi=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){pi.copy(e).add(t).multiplyScalar(.5),mi.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(pi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(mi),o=hi.dot(this.direction),s=-hi.dot(mi),c=hi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(pi).addScaledVector(mi,d),f}intersectSphere(e,t){if(e.radius<0)return null;fi.subVectors(e.center,this.origin);let n=fi.dot(this.direction),r=fi.dot(fi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,O,k,A,te,j;if(y>=b&&y>=x?(w=s,D=u,k=p,j=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,O=h,A=_,te=v):(S=l,C=c,T=f,E=d,ee=h,O=m,A=v,te=_)):b>=x?(w=c,D=d,k=m,j=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,O=p,A=v,te=g):(S=s,C=l,T=u,E=f,ee=p,O=h,A=g,te=v)):(w=l,D=f,k=h,j=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,O=m,A=g,te=_):(S=c,C=s,T=d,E=u,ee=m,O=p,A=_,te=g)),w===0)return null;let ne=S/w,M=C/w,re=1/w,ie=T-ne*D,ae=E-M*D,oe=ee-ne*k,se=O-M*k,ce=A-ne*j,le=te-M*j,ue=ce*se-le*oe,N=ie*le-ae*ce,de=oe*ae-se*ie;if(r){if(ue<0||N<0||de<0)return null}else if((ue<0||N<0||de<0)&&(ue>0||N>0||de>0))return null;let fe=ue+N+de;if(fe===0)return null;let pe=re*(ue*D+N*k+de*j);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_i=class extends Yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vi=new H,yi=new gi,bi=new Mr,xi=new B,Si=new B,Ci=new B,wi=new B,Ti=new B,Ei=new B,Di=new B,Oi=new B,W=class extends Ln{constructor(e=new Br,t=new _i){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ei.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ti.fromBufferAttribute(s,e),a?Ei.addScaledVector(Ti,r):Ei.addScaledVector(Ti.sub(t),r))}t.add(Ei)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bi.copy(n.boundingSphere),bi.applyMatrix4(i),yi.copy(e.ray).recast(e.near),!(bi.containsPoint(yi.origin)===!1&&(yi.intersectSphere(bi,xi)===null||yi.origin.distanceToSquared(xi)>(e.far-e.near)**2))&&(vi.copy(i).invert(),yi.copy(e.ray).applyMatrix4(vi),(n.boundingBox===null||yi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ai(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ai(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ai(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ai(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ki(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Oi.copy(s),Oi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Oi);return l<n.near||l>n.far?null:{distance:l,point:Oi.clone(),object:e}}function Ai(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Si),e.getVertexPosition(c,Ci),e.getVertexPosition(l,wi);let u=ki(e,t,n,r,Si,Ci,wi,Di);if(u){let e=new B;or.getBarycoord(Di,Si,Ci,wi,e),i&&(u.uv=or.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=or.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=or.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};or.getNormal(Si,Ci,wi,t.normal),u.face=t,u.barycoord=e}return u}var ji=class extends an{constructor(e=null,t=1,n=1,r,i,a,o,s,c=f,l=f,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mi=class extends Tr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ni=new H,Pi=new H,Fi=[],Ii=new sr,Li=new H,Ri=new W,zi=new Mr,Bi=class extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Li)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),Ii.copy(e.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Ii)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ni),zi.copy(e.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(zi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ri.geometry=this.geometry,Ri.material=this.material,Ri.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zi.copy(this.boundingSphere),zi.applyMatrix4(n),e.ray.intersectsSphere(zi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ni),Pi.multiplyMatrices(n,Ni),Ri.matrixWorld=Pi,Ri.raycast(e,Fi);for(let e=0,n=Fi.length;e<n;e++){let n=Fi[e];n.instanceId=i,n.object=this,t.push(n)}Fi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ji(new Float32Array(r*this.count),r,this.count,re,w));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vi=new Mr,Hi=new z(.5,.5),Ui=new B,Wi=class{constructor(e=new qr,t=new qr,n=new qr,r=new qr,i=new qr,a=new qr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476+Hi.distanceTo(e.center),Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ui.x=r.normal.x>0?e.max.x:e.min.x,Ui.y=r.normal.y>0?e.max.y:e.min.y,Ui.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ui)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Gi=class extends Yr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ki=new H,qi=new gi,Ji=new Mr,Yi=new B,Xi=class extends Ln{constructor(e=new Br,t=new Gi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(r),Ji.radius+=i,e.ray.intersectsSphere(Ji)===!1)return;Ki.copy(r).invert(),qi.copy(e.ray).applyMatrix4(Ki);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Yi.fromBufferAttribute(l,n),Zi(Yi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Yi.fromBufferAttribute(l,a),Zi(Yi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Zi(e,t,n,r,i,a,o){let s=qi.distanceSqToPoint(e);if(s<n){let n=new B;qi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Qi=class extends an{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$i=class extends an{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ea=class extends an{constructor(e,t,n=C,r,i,a,o=f,s=f,c,l=ne,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new en(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ta=class extends ea{constructor(e,t=C,n=301,r,i,a=f,o=f,s,c=ne){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},na=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ra=class e extends Br{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Or(c,3)),this.setAttribute(`normal`,new Or(l,3)),this.setAttribute(`uv`,new Or(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ia=class e extends Br{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new B,l=new z;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Or(a,3)),this.setAttribute(`normal`,new Or(o,3)),this.setAttribute(`uv`,new Or(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},aa=class e extends Br{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Or(u,3)),this.setAttribute(`normal`,new Or(d,3)),this.setAttribute(`uv`,new Or(f,2));function _(){let a=new B,_=new B,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new z,m=new B,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oa=class e extends aa{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sa=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){L(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new z:new B);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new B,r=[],i=[],a=[],o=new B,s=new H;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new B)}i[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(yt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(yt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ca=class extends sa{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new z){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},la=class extends ca{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function ua(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var da=new B,fa=new B,pa=new ua,ma=new ua,ha=new ua,ga=class extends sa{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new B){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(fa.subVectors(r[0],r[1]).add(r[0]),c=fa);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(da.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=da),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),pa.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ma.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),ha.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(pa.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ma.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),ha.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(pa.calc(s),ma.calc(s),ha.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function _a(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function va(e,t){let n=1-e;return n*n*t}function ya(e,t){return 2*(1-e)*e*t}function ba(e,t){return e*e*t}function xa(e,t,n,r){return va(e,t)+ya(e,n)+ba(e,r)}function Sa(e,t){let n=1-e;return n*n*n*t}function Ca(e,t){let n=1-e;return 3*n*n*e*t}function wa(e,t){return 3*(1-e)*e*e*t}function Ta(e,t){return e*e*e*t}function Ea(e,t,n,r,i){return Sa(e,t)+Ca(e,n)+wa(e,r)+Ta(e,i)}var Da=class extends sa{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ea(e,r.x,i.x,a.x,o.x),Ea(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oa=class extends sa{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ea(e,r.x,i.x,a.x,o.x),Ea(e,r.y,i.y,a.y,o.y),Ea(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ka=class extends sa{constructor(e=new z,t=new z){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Aa=class extends sa{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends sa{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(xa(e,r.x,i.x,a.x),xa(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ma=class extends sa{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(xa(e,r.x,i.x,a.x),xa(e,r.y,i.y,a.y),xa(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends sa{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new z){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(_a(o,s.x,c.x,l.x,u.x),_a(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this}},Pa=Object.freeze({__proto__:null,ArcCurve:la,CatmullRomCurve3:ga,CubicBezierCurve:Da,CubicBezierCurve3:Oa,EllipseCurve:ca,LineCurve:ka,LineCurve3:Aa,QuadraticBezierCurve:ja,QuadraticBezierCurve3:Ma,SplineCurve:Na}),Fa=class extends sa{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Pa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Pa[n.type]().fromJSON(n))}return this}},Ia=class extends Fa{constructor(e){super(),this.type=`Path`,this.currentPoint=new z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ka(this.currentPoint.clone(),new z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ja(this.currentPoint.clone(),new z(e,t),new z(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Da(this.currentPoint.clone(),new z(e,t),new z(n,r),new z(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Na([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new ca(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},La=class extends Ia{constructor(e){super(e),this.uuid=vt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Ia().fromJSON(n))}return this}};function Ra(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=za(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ka(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Va(a,o,n,s,c,l,0),o}function za(e,t,n,r,i){let a;if(i===_o(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=mo(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=mo(i/r|0,e[i],e[i+1],a);return a&&ao(a,a.next)&&(ho(a),a=a.next),a}function Ba(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&(ao(n,n.next)||io(n.prev,n,n.next)===0)){if(ho(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Va(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Za(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Ua(e,r,i,a):Ha(e)){t.push(c.i,e.i,l.i),ho(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Wa(Ba(e),t),Va(e,t,n,r,i,a,2)):o===2&&Ga(e,t,n,r,i,a):Va(Ba(e),t,n,r,i,a,1);break}}}function Ha(e){let t=e.prev,n=e,r=e.next;if(io(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&no(i,s,a,c,o,l,m.x,m.y)&&io(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ua(e,t,n,r){let i=e.prev,a=e,o=e.next;if(io(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=$a(p,m,t,n,r),v=$a(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&no(s,u,c,d,l,f,y.x,y.y)&&io(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&no(s,u,c,d,l,f,b.x,b.y)&&io(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&no(s,u,c,d,l,f,y.x,y.y)&&io(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&no(s,u,c,d,l,f,b.x,b.y)&&io(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Wa(e,t){let n=e;do{let r=n.prev,i=n.next.next;!ao(r,i)&&oo(r,n,n.next,i)&&uo(r,i)&&uo(i,r)&&(t.push(r.i,n.i,i.i),ho(n),ho(n.next),n=e=i),n=n.next}while(n!==e);return Ba(n)}function Ga(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&ro(o,e)){let s=po(o,e);o=Ba(o,o.next),s=Ba(s,s.next),Va(o,t,n,r,i,a,0),Va(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ka(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=za(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(eo(o))}i.sort(qa);for(let e=0;e<i.length;e++)n=Ja(i[e],n);return n}function qa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Ja(e,t){let n=Ya(e,t);if(!n)return t;let r=po(n,e);return Ba(r,r.next),Ba(n,n.next)}function Ya(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(ao(e,n))return n;do{if(ao(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&to(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);uo(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Xa(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Xa(e,t){return io(e.prev,e,t.prev)<0&&io(t.next,e,e.next)<0}function Za(e,t,n,r){let i=e;do i.z===0&&(i.z=$a(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Qa(i)}function Qa(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function $a(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function eo(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function to(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function no(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&to(e,t,n,r,i,a,o,s)}function ro(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!lo(e,t)&&(uo(e,t)&&uo(t,e)&&fo(e,t)&&(io(e.prev,e,t.prev)||io(e,t.prev,t))||ao(e,t)&&io(e.prev,e,e.next)>0&&io(t.prev,t,t.next)>0)}function io(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function ao(e,t){return e.x===t.x&&e.y===t.y}function oo(e,t,n,r){let i=co(io(e,t,n)),a=co(io(e,t,r)),o=co(io(n,r,e)),s=co(io(n,r,t));return!!(i!==a&&o!==s||i===0&&so(e,n,t)||a===0&&so(e,r,t)||o===0&&so(n,e,r)||s===0&&so(n,t,r))}function so(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function co(e){return e>0?1:e<0?-1:0}function lo(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&oo(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function uo(e,t){return io(e.prev,e,e.next)<0?io(e,t,e.next)>=0&&io(e,e.prev,t)>=0:io(e,t,e.prev)<0||io(e,e.next,t)<0}function fo(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function po(e,t){let n=go(e.i,e.x,e.y),r=go(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function mo(e,t,n,r){let i=go(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function ho(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function go(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _o(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var vo=class{static triangulate(e,t,n=2){return Ra(e,t,n)}},yo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];bo(e),xo(n,e);let a=e.length;t.forEach(bo);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,xo(n,t[e]);let o=vo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function bo(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function xo(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var So=class e extends Br{constructor(e=new La([new z(.5,.5),new z(-.5,.5),new z(-.5,-.5),new z(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Or(r,3)),this.setAttribute(`uv`,new Or(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Co:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new B,b=new B,x=new B}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!yo.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];yo.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function ee(e,t,n){return t||R(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let O=C.length;function k(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new z(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new z(r/a,i/a)}let A=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),A[e]=k(D[e],D[n],D[r]);let te=[],j,ne=A.concat();for(let e=0,t=E;e<t;e++){let t=w[e];j=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),j[e]=k(t[e],t[r],t[i]);te.push(j),ne=ne.concat(j)}let M;if(p===0)M=yo.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=ee(D[t],A[t],a);ce(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];j=te[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=ee(n[e],j[e],a);ce(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}M=yo.triangulateShape(e,t)}let re=M.length,ie=d+f;for(let e=0;e<O;e++){let t=l?ee(C[e],ne[e],ie):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ce(x.x,x.y,x.z)):ce(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<O;t++){let n=l?ee(C[t],ne[t],ie):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ce(x.x,x.y,x.z)):ce(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=ee(D[e],A[e],r);ce(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];j=te[e];for(let e=0,i=t.length;e<i;e++){let i=ee(t[e],j[e],r);_?ce(i.x,i.y+g[s-1].y,g[s-1].x+n):ce(i.x,i.y,c+n)}}}ae(),oe();function ae(){let e=r.length/3;if(l){let e=0,t=O*e;for(let e=0;e<re;e++){let n=M[e];le(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=O*e;for(let e=0;e<re;e++){let n=M[e];le(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<re;e++){let t=M[e];le(t[2],t[1],t[0])}for(let e=0;e<re;e++){let t=M[e];le(t[0]+O*s,t[1]+O*s,t[2]+O*s)}}n.addGroup(e,r.length/3-e,0)}function oe(){let e=r.length/3,t=0;se(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];se(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function se(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=O*e,a=O*(e+1);ue(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ce(e,t,n){a.push(e),a.push(t),a.push(n)}function le(e,t,i){N(e),N(t),N(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);de(o[0]),de(o[1]),de(o[2])}function ue(e,t,i,a){N(e),N(t),N(a),N(t),N(i),N(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);de(s[0]),de(s[1]),de(s[3]),de(s[1]),de(s[2]),de(s[3])}function N(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function de(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return wo(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Pa[i.type]().fromJSON(i)),new e(r,t.options)}},Co={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new z(a,o),new z(s,c),new z(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new z(o,1-c),new z(l,1-d),new z(f,1-m),new z(h,1-_)]:[new z(s,1-c),new z(u,1-d),new z(p,1-m),new z(g,1-_)]}};function wo(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var To=class e extends Br{constructor(e=[new z(0,-.5),new z(.5,0),new z(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=yt(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new B,d=new z,f=new B,p=new B,m=new B,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new Or(a,3)),this.setAttribute(`uv`,new Or(o,2)),this.setAttribute(`normal`,new Or(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Eo=class e extends Br{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Or(p,3)),this.setAttribute(`normal`,new Or(m,3)),this.setAttribute(`uv`,new Or(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Do=class e extends Br{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Or(p,3)),this.setAttribute(`normal`,new Or(m,3)),this.setAttribute(`uv`,new Or(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Oo=class e extends Br{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new B,f=new B,p=new B;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Or(c,3)),this.setAttribute(`normal`,new Or(l,3)),this.setAttribute(`uv`,new Or(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},ko=class e extends Br{constructor(e=new Ma(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new B,s=new B,c=new z,l=new B,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new Or(u,3)),this.setAttribute(`normal`,new Or(d,3)),this.setAttribute(`uv`,new Or(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Pa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Ao=class extends Yr{constructor(e){super(),this.isShadowMaterial=!0,this.type=`ShadowMaterial`,this.color=new U(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function jo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(No(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(No(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Mo(e){let t={};for(let n=0;n<e.length;n++){let r=jo(e[n]);for(let e in r)t[e]=r[e]}return t}function No(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Po(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Fo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Io={clone:jo,merge:Mo},Lo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ro=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zo=class extends Yr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lo,this.fragmentShader=Ro,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jo(e.uniforms),this.uniformsGroups=Po(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new U().setHex(r.value);break;case`v2`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new on().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new H().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Bo=class extends zo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},G=class extends Yr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new U(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vo=class extends G{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new U(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new U(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new U(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ho=class extends Yr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new U(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Uo=class extends Yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=qe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wo=class extends Yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Go(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ko(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var qo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Jo=class extends qo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:We,endingEnd:We}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ge:i=e,o=2*t-n;break;case Ke:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ge:a=e,s=2*n-t;break;case Ke:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Yo=class extends qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Xo=class extends qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Zo=class extends qo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=es(n,t,g,y,r);i[p]=Qo(x,o,_,b,m)}return i}};function Qo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function $o(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function es(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Qo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=$o(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ts=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Go(t,this.TimeBufferType),this.values=Go(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Go(e.times,Array),values:Go(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ko(e.settings)&&(n.settings={inTangents:Go(e.settings.inTangents,Array),outTangents:Go(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Be:t=this.InterpolantFactoryMethodDiscrete;break;case Ve:t=this.InterpolantFactoryMethodLinear;break;case He:t=this.InterpolantFactoryMethodSmooth;break;case Ue:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Be;case this.InterpolantFactoryMethodLinear:return Ve;case this.InterpolantFactoryMethodSmooth:return He;case this.InterpolantFactoryMethodBezier:return Ue}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ko(this.settings)&&(ns(this.settings.inTangents,e),ns(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&it(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===He,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ko(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ns(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ts.prototype.ValueTypeName=``,ts.prototype.TimeBufferType=Float32Array,ts.prototype.ValueBufferType=Float32Array,ts.prototype.DefaultInterpolation=Ve;var rs=class extends ts{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName=`bool`,rs.prototype.ValueBufferType=Array,rs.prototype.DefaultInterpolation=Be,rs.prototype.InterpolantFactoryMethodLinear=void 0,rs.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends ts{constructor(e,t,n,r){super(e,t,n,r)}};is.prototype.ValueTypeName=`color`;var as=class extends ts{constructor(e,t,n,r){super(e,t,n,r)}};as.prototype.ValueTypeName=`number`;var os=class extends qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Vt.slerpFlat(i,0,a,c-o,a,c,s);return i}},ss=class extends ts{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new os(this.times,this.values,this.getValueSize(),e)}};ss.prototype.ValueTypeName=`quaternion`,ss.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends ts{constructor(e,t,n){super(e,t,n)}};cs.prototype.ValueTypeName=`string`,cs.prototype.ValueBufferType=Array,cs.prototype.DefaultInterpolation=Be,cs.prototype.InterpolantFactoryMethodLinear=void 0,cs.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends ts{constructor(e,t,n,r){super(e,t,n,r)}};ls.prototype.ValueTypeName=`vector`;var us=class extends Ln{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new U(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ds=class extends us{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new U(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},fs=new H,ps=new B,ms=new B,hs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new z(512,512),this.mapType=v,this.map=null,this.mapPass=null,this.matrix=new H,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wi,this._frameExtents=new z(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ps.setFromMatrixPosition(e.matrixWorld),t.position.copy(ps),ms.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ms),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){fs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(fs,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(fs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gs=new B,_s=new Vt,vs=new B,ys=class extends Ln{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new H,this.projectionMatrix=new H,this.projectionMatrixInverse=new H,this.coordinateSystem=nt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gs,_s,vs),vs.x===1&&vs.y===1&&vs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gs,_s,vs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(gs,_s,vs),vs.x===1&&vs.y===1&&vs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gs,_s,vs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bs=new B,xs=new z,Ss=new z,Cs=class extends ys{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_t*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _t*2*Math.atan(Math.tan(gt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bs.x,bs.y).multiplyScalar(-e/bs.z),bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bs.x,bs.y).multiplyScalar(-e/bs.z)}getViewSize(e,t){return this.getViewBounds(e,xs,Ss),t.subVectors(Ss,xs)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ws=class extends hs{constructor(){super(new Cs(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=_t*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ts=class extends us{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new ws}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Es=class extends hs{constructor(){super(new Cs(90,1,.5,500)),this.isPointLightShadow=!0}},Ds=class extends us{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Es}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Os=class extends ys{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ks=class extends hs{constructor(){super(new Os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},As=class extends us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new ks}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},js=-90,Ms=1,Ns=class extends Ln{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Cs(js,Ms,e,t);r.layers=this.layers,this.add(r);let i=new Cs(js,Ms,e,t);i.layers=this.layers,this.add(i);let a=new Cs(js,Ms,e,t);a.layers=this.layers,this.add(a);let o=new Cs(js,Ms,e,t);o.layers=this.layers,this.add(o);let s=new Cs(js,Ms,e,t);s.layers=this.layers,this.add(s);let c=new Cs(js,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ps=class extends Cs{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Fs=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Is.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Is(){this._document.hidden===!1&&this.reset()}var Ls=`\\[\\]\\.:\\/`,Rs=RegExp(`[\\[\\]\\.:\\/]`,`g`),zs=`[^\\[\\]\\.:\\/]`,Bs=`[^`+Ls.replace(`\\.`,``)+`]`,Vs=`((?:WC+[\\/:])*)`.replace(`WC`,zs),Hs=`(WCOD+)?`.replace(`WCOD`,Bs),Us=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,zs),Ws=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,zs),Gs=RegExp(`^`+Vs+Hs+Us+Ws+`$`),Ks=[`material`,`materials`,`bones`,`map`],qs=class{constructor(e,t,n){let r=n||Js.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Js=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Rs,``)}static parseTrackName(e){let t=Gs.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ks.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Js.Composite=qs,Js.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Js.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Js.prototype.GetterByBindingType=[Js.prototype._getValue_direct,Js.prototype._getValue_array,Js.prototype._getValue_arrayElement,Js.prototype._getValue_toArray],Js.prototype.SetterByBindingTypeAndVersioning=[[Js.prototype._setValue_direct,Js.prototype._setValue_direct_setNeedsUpdate,Js.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Js.prototype._setValue_array,Js.prototype._setValue_array_setNeedsUpdate,Js.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Js.prototype._setValue_arrayElement,Js.prototype._setValue_arrayElement_setNeedsUpdate,Js.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Js.prototype._setValue_fromArray,Js.prototype._setValue_fromArray_setNeedsUpdate,Js.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ys=new H,Xs=class{constructor(e,t,n=0,r=1/0){this.ray=new gi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new xn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):R(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Ys.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ys),this}intersectObject(e,t=!0,n=[]){return Qs(e,this,n,t),n.sort(Zs),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Qs(e[r],this,n,t);return n.sort(Zs),n}};function Zs(e,t){return e.distance-t.distance}function Qs(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Qs(r[e],t,n,!0)}}a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;function $s(e,t,n,r){let i=ec(r);switch(n){case A:return e*t;case re:return e*t/i.components*i.byteLength;case ie:return e*t/i.components*i.byteLength;case ae:return e*t*2/i.components*i.byteLength;case oe:return e*t*2/i.components*i.byteLength;case te:return e*t*3/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case se:return e*t*4/i.components*i.byteLength;case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ue:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:case me:return Math.max(e,16)*Math.max(t,8)/4;case de:case pe:return Math.max(e,8)*Math.max(t,8)/2;case he:case ge:case ve:case ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _e:case be:case xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ce:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case we:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ee:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case De:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Oe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ke:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ae:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Me:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ne:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Pe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case P:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Fe:case Ie:case Le:return Math.ceil(e/4)*Math.ceil(t/4)*16;case F:case Re:return Math.ceil(e/4)*Math.ceil(t/4)*8;case I:case ze:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ec(e){switch(e){case v:case y:return{byteLength:1,components:1};case x:case b:case T:return{byteLength:2,components:1};case E:case D:return{byteLength:2,components:4};case C:case S:case w:return{byteLength:4,components:1};case O:case k:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function tc(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function nc(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var rc={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},K={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},ic={basic:{uniforms:Mo([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:rc.meshbasic_vert,fragmentShader:rc.meshbasic_frag},lambert:{uniforms:Mo([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:rc.meshlambert_vert,fragmentShader:rc.meshlambert_frag},phong:{uniforms:Mo([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rc.meshphong_vert,fragmentShader:rc.meshphong_frag},standard:{uniforms:Mo([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rc.meshphysical_vert,fragmentShader:rc.meshphysical_frag},toon:{uniforms:Mo([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new U(0)}}]),vertexShader:rc.meshtoon_vert,fragmentShader:rc.meshtoon_frag},matcap:{uniforms:Mo([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:rc.meshmatcap_vert,fragmentShader:rc.meshmatcap_frag},points:{uniforms:Mo([K.points,K.fog]),vertexShader:rc.points_vert,fragmentShader:rc.points_frag},dashed:{uniforms:Mo([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rc.linedashed_vert,fragmentShader:rc.linedashed_frag},depth:{uniforms:Mo([K.common,K.displacementmap]),vertexShader:rc.depth_vert,fragmentShader:rc.depth_frag},normal:{uniforms:Mo([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:rc.meshnormal_vert,fragmentShader:rc.meshnormal_frag},sprite:{uniforms:Mo([K.sprite,K.fog]),vertexShader:rc.sprite_vert,fragmentShader:rc.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rc.background_vert,fragmentShader:rc.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:rc.backgroundCube_vert,fragmentShader:rc.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rc.cube_vert,fragmentShader:rc.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rc.equirect_vert,fragmentShader:rc.equirect_frag},distance:{uniforms:Mo([K.common,K.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rc.distance_vert,fragmentShader:rc.distance_frag},shadow:{uniforms:Mo([K.lights,K.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:rc.shadow_vert,fragmentShader:rc.shadow_frag}};ic.physical={uniforms:Mo([ic.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:rc.meshphysical_vert,fragmentShader:rc.meshphysical_frag};var ac={r:0,b:0,g:0},oc=new H,sc=new V;sc.set(-1,0,0,0,1,0,0,0,1);function cc(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new W(new ra(1,1,1),new zo({name:`BackgroundCubeMaterial`,uniforms:jo(ic.backgroundCube.uniforms),vertexShader:ic.backgroundCube.vertexShader,fragmentShader:ic.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(oc.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(sc),l.material.toneMapped=Jt.getTransfer(i.colorSpace)!==Ze,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new W(new Eo(2,2),new zo({name:`BackgroundMaterial`,uniforms:jo(ic.background.uniforms),vertexShader:ic.background.vertexShader,fragmentShader:ic.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(i.colorSpace)!==Ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ac,Fo(e)),n.buffers.color.setClear(ac.r,ac.g,ac.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function lc(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function uc(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function dc(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function fc(e){let t=this,n=null,r=0,i=!1,a=!1,o=new qr,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var pc=4,mc=6,hc=20,gc=256,_c=new Os,vc=new U,yc=null,bc=0,xc=0,Sc=!1,Cc=new B,wc=new B,Tc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Cc}=i;yc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yc,bc,xc),this._renderer.xr.enabled=Sc,e.scissorTest=!1,Oc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yc=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:h,minFilter:h,generateMipmaps:!1,type:T,format:j,colorSpace:Ye,depthBuffer:!1},r=Dc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ec(r)),this._blurMaterial=Ac(r,e,t),this._ggxMaterial=kc(r,e,t)}return r}_compileMaterial(e){let t=new W(new Br,e);this._renderer.compile(t,_c)}_sceneToCubeUV(e,t,n,r,i){let a=new Cs(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(vc),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new W(new ra,new _i({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(vc),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Oc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Oc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,_c)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-pc?n-d+pc:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Oc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,_c),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Oc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,_c)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Oc(t,3*l*(r>this._lodMax-pc?r-this._lodMax+pc:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,_c)}};function Ec(e){let t=[],n=[],r=e,i=e-pc+1+mc;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?wc.set(1,r,n):e===1?wc.set(-n,1,-r):e===2?wc.set(-n,r,1):e===3?wc.set(-1,r,-n):e===4?wc.set(-n,-1,r):wc.set(n,r,-1),wc.toArray(l,(e*6+t)*3)}}let u=new Br;u.setAttribute(`position`,new Tr(c,3)),u.setAttribute(`outputDirection`,new Tr(l,3)),n.push(new W(u,null)),r>pc&&r--}return{lodMeshes:n,sizeLods:t}}function Dc(e,t,n){let r=new cn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Oc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function kc(e,t,n){return new zo({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:gc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ac(e,t,n){return new zo({name:`SphericalGaussianBlur`,defines:{SAMPLES:hc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function jc(){return new zo({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Mc(){return new zo({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Nc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Pc=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Qi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ra(5,5,5),i=new zo({name:`CubemapFromEquirect`,uniforms:jo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=h),new Ns(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Fc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Pc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Tc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Tc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ic(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ut(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Lc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Dr:Er)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Rc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function zc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Bc(e,t,n){let r=new WeakMap,i=new on;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new ln(h,p,m,u);g.type=w,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new z(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Vc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Hc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Uc(e,t,n,r,i,a){let o=new cn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Br;l.setAttribute(`position`,new Or([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Or([0,2,0,0,2,0],2));let u=new Bo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new W(l,u),f=new Os(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new cn(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}),c=new cn(t,n,{type:T,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Jt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Hc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Wc=new an,Gc=new ea(1,1),Kc=new ln,qc=new un,Jc=new Qi,Yc=[],Xc=[],Zc=new Float32Array(16),Qc=new Float32Array(9),$c=new Float32Array(4);function el(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Yc[i];if(a===void 0&&(a=new Float32Array(i),Yc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function tl(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function nl(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function rl(e,t){let n=Xc[t];n===void 0&&(n=new Int32Array(t),Xc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function il(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function al(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tl(n,t))return;e.uniform2fv(this.addr,t),nl(n,t)}}function ol(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(tl(n,t))return;e.uniform3fv(this.addr,t),nl(n,t)}}function sl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tl(n,t))return;e.uniform4fv(this.addr,t),nl(n,t)}}function cl(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(tl(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),nl(n,t)}else{if(tl(n,r))return;$c.set(r),e.uniformMatrix2fv(this.addr,!1,$c),nl(n,r)}}function ll(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(tl(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),nl(n,t)}else{if(tl(n,r))return;Qc.set(r),e.uniformMatrix3fv(this.addr,!1,Qc),nl(n,r)}}function ul(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(tl(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),nl(n,t)}else{if(tl(n,r))return;Zc.set(r),e.uniformMatrix4fv(this.addr,!1,Zc),nl(n,r)}}function dl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function fl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tl(n,t))return;e.uniform2iv(this.addr,t),nl(n,t)}}function pl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tl(n,t))return;e.uniform3iv(this.addr,t),nl(n,t)}}function ml(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tl(n,t))return;e.uniform4iv(this.addr,t),nl(n,t)}}function hl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function gl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tl(n,t))return;e.uniform2uiv(this.addr,t),nl(n,t)}}function _l(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tl(n,t))return;e.uniform3uiv(this.addr,t),nl(n,t)}}function vl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tl(n,t))return;e.uniform4uiv(this.addr,t),nl(n,t)}}function yl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Gc.compareFunction=n.isReversedDepthBuffer()?518:515,a=Gc):a=Wc,n.setTexture2D(t||a,i)}function bl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||qc,i)}function xl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Jc,i)}function Sl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Kc,i)}function Cl(e){switch(e){case 5126:return il;case 35664:return al;case 35665:return ol;case 35666:return sl;case 35674:return cl;case 35675:return ll;case 35676:return ul;case 5124:case 35670:return dl;case 35667:case 35671:return fl;case 35668:case 35672:return pl;case 35669:case 35673:return ml;case 5125:return hl;case 36294:return gl;case 36295:return _l;case 36296:return vl;case 35678:case 36198:case 36298:case 36306:case 35682:return yl;case 35679:case 36299:case 36307:return bl;case 35680:case 36300:case 36308:case 36293:return xl;case 36289:case 36303:case 36311:case 36292:return Sl}}function wl(e,t){e.uniform1fv(this.addr,t)}function Tl(e,t){let n=el(t,this.size,2);e.uniform2fv(this.addr,n)}function El(e,t){let n=el(t,this.size,3);e.uniform3fv(this.addr,n)}function Dl(e,t){let n=el(t,this.size,4);e.uniform4fv(this.addr,n)}function Ol(e,t){let n=el(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function kl(e,t){let n=el(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Al(e,t){let n=el(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function jl(e,t){e.uniform1iv(this.addr,t)}function Ml(e,t){e.uniform2iv(this.addr,t)}function Nl(e,t){e.uniform3iv(this.addr,t)}function Pl(e,t){e.uniform4iv(this.addr,t)}function Fl(e,t){e.uniform1uiv(this.addr,t)}function Il(e,t){e.uniform2uiv(this.addr,t)}function Ll(e,t){e.uniform3uiv(this.addr,t)}function Rl(e,t){e.uniform4uiv(this.addr,t)}function zl(e,t,n){let r=this.cache,i=t.length,a=rl(n,i);tl(r,a)||(e.uniform1iv(this.addr,a),nl(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Gc:Wc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Bl(e,t,n){let r=this.cache,i=t.length,a=rl(n,i);tl(r,a)||(e.uniform1iv(this.addr,a),nl(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||qc,a[e])}function Vl(e,t,n){let r=this.cache,i=t.length,a=rl(n,i);tl(r,a)||(e.uniform1iv(this.addr,a),nl(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Jc,a[e])}function Hl(e,t,n){let r=this.cache,i=t.length,a=rl(n,i);tl(r,a)||(e.uniform1iv(this.addr,a),nl(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Kc,a[e])}function Ul(e){switch(e){case 5126:return wl;case 35664:return Tl;case 35665:return El;case 35666:return Dl;case 35674:return Ol;case 35675:return kl;case 35676:return Al;case 5124:case 35670:return jl;case 35667:case 35671:return Ml;case 35668:case 35672:return Nl;case 35669:case 35673:return Pl;case 5125:return Fl;case 36294:return Il;case 36295:return Ll;case 36296:return Rl;case 35678:case 36198:case 36298:case 36306:case 35682:return zl;case 35679:case 36299:case 36307:return Bl;case 35680:case 36300:case 36308:case 36293:return Vl;case 36289:case 36303:case 36311:case 36292:return Hl}}var Wl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cl(t.type)}},Gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ul(t.type)}},Kl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ql=/(\w+)(\])?(\[|\.)?/g;function Jl(e,t){e.seq.push(t),e.map[t.id]=t}function Yl(e,t,n){let r=e.name,i=r.length;for(ql.lastIndex=0;;){let a=ql.exec(r),o=ql.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Jl(n,l===void 0?new Wl(s,e,t):new Gl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Kl(s),Jl(n,e)),n=e}}}var Xl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Yl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Zl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Ql=37297,$l=0;function eu(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var tu=new V;function nu(e){Jt._getMatrix(tu,Jt.workingColorSpace,e);let t=`mat3( ${tu.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(e)){case Xe:return[t,`LinearTransferOETF`];case Ze:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function ru(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+eu(e.getShaderSource(t),r)}return i}function iu(e,t){let n=nu(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var au={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ou(e,t){let n=au[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var su=new B;function cu(){return Jt.getLuminanceCoefficients(su),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${su.x.toFixed(4)}, ${su.y.toFixed(4)}, ${su.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function lu(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(fu).join(`
`)}function uu(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function du(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function fu(e){return e!==``}function pu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hu=/^[ \t]*#include +<([\w\d./]+)>/gm;function gu(e){return e.replace(hu,vu)}var _u=new Map;function vu(e,t){let n=rc[t];if(n===void 0){let e=_u.get(t);if(e!==void 0)n=rc[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return gu(n)}var yu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(e){return e.replace(yu,xu)}function xu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Su(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Cu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function wu(e){return Cu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Tu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Eu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Tu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Du={302:`ENVMAP_MODE_REFRACTION`};function Ou(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Du[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var ku={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Au(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:ku[e.combine]||`ENVMAP_BLENDING_NONE`}function ju(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Mu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=wu(n),l=Eu(n),u=Ou(n),d=Au(n),f=ju(n),p=lu(n),m=uu(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(fu).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(fu).join(`
`),_.length>0&&(_+=`
`)):(g=[Su(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(fu).join(`
`),_=[Su(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:rc.tonemapping_pars_fragment,n.toneMapping===0?``:ou(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,rc.colorspace_pars_fragment,iu(`linearToOutputTexel`,n.outputColorSpace),cu(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(fu).join(`
`)),o=gu(o),o=pu(o,n),o=mu(o,n),s=gu(s),s=pu(s,n),s=mu(s,n),o=bu(o),s=bu(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Zl(i,i.VERTEX_SHADER,y),S=Zl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=ru(i,x,`vertex`),n=ru(i,S,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Xl(i,h),T=du(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Ql)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$l++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Nu=0,Pu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fu(e),t.set(e,n)),n}},Fu=class{constructor(e){this.id=Nu++,this.code=e,this.usedTimes=0}};function Iu(e){return e===1030||e===37490||e===36285}function Lu(e,t,n,r,i,a){let o=new xn,s=new Pu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,O,k;if(C){let e=ic[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,ne=h.isBatchedMesh===!0,M=!!i.map,re=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,N=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=fe&&!!i.anisotropyMap,be=pe&&!!i.clearcoatMap,xe=pe&&!!i.clearcoatNormalMap,Se=pe&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,P=!!i.alphaHash,Fe=!!i.extensions,Ie=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ne,batchingColor:ne&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&Iu(i.normalMap.format),metalnessMap:N,roughnessMap:de,anisotropy:fe,anisotropyMap:ye,clearcoat:pe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:P,combine:i.combine,mapUv:M&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:N&&m(i.metalnessMap.channel),roughnessMapUv:de&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||fe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(M||Ne),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&Jt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ic[t];n=Io.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Mu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Ru(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function zu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Bu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Vu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||zu),r.length>1&&r.sort(t||Bu),i.length>1&&i.sort(t||Bu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Hu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Vu,e.set(t,[i])):n>=r.length?(i=new Vu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Uu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new U};break;case`SpotLight`:n={position:new B,direction:new B,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function Wu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Gu=0;function Ku(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function qu(e){let t=new Uu,n=Wu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new H,o=new H;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Ku);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Gu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Ju(e){let t=new qu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Yu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ju(e),t.set(n,[a])):r>=i.length?(a=new Ju(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Xu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Qu=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],$u=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],ed=new H,td=new B,nd=new B;function rd(e,t,n){let r=new Wi,i=new z,a=new z,o=new on,s=new Uo,c=new Wo,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},p=new zo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:Xu,fragmentShader:Zu}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new Br;g.setAttribute(`position`,new Tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new W(g,p),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.depth.getReversed()===!0?p.buffers.color.setClear(0,0,0,0):p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){L(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let g=d.getFrameExtents();i.multiply(g),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/g.x),i.x=a.x*g.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/g.y),i.y=a.y*g.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new cn(i.x,i.y,{format:ae,type:T,minFilter:h,magFilter:h,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new ea(i.x,i.y,w),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ne,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f}else l.isPointLight?(d.map=new Pc(i.x),d.map.depthTexture=new ta(i.x,C)):(d.map=new cn(i.x,i.y),d.map.depthTexture=new ea(i.x,i.y,C)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ne,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=h,d.map.depthTexture.magFilter=h):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),td.setFromMatrixPosition(l.matrixWorld),e.position.copy(td),nd.copy(e.position),nd.add(Qu[t]),e.up.copy($u[t]),e.lookAt(nd),e.updateMatrixWorld(),n.makeTranslation(-td.x,-td.y,-td.z),ed.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(ed,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),p.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null?n.mapPass=new cn(i.x,i.y,{format:ae,type:T}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),p.uniforms.shadow_pass.value=n.map.depthTexture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,p,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function id(e,t){function n(){let t=!1,n=new on,r=null,i=new on(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?N(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ft[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?N(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,A=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,M=e.getParameter(e.VERSION);M.indexOf(`WebGL`)===-1?M.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),j=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(M)[1]),j=ne>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new on().fromArray(ae),ce=new on().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),N(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),N(e.CULL_FACE),_e(0);function N(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(de(e.BLEND),g=!1);return}if(g===!1&&(N(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):N(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?N(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(N(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function xe(t){t!==O&&(j&&e.lineWidth(t),O=t)}function Se(t,n,r){t?(N(e.POLYGON_OFFSET_FILL),(k!==n||A!==r)&&(k=n,A=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?N(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+te-1),re!==t&&(e.activeTexture(t),re=t)}function Te(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+te-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function P(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function Le(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function F(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function I(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ze(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,ee=null,O=null,k=null,A=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:N,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:P,texImage3D:Fe,pixelStorei:Le,getParameter:Ie,updateUBOMapping:I,uniformBlockBinding:ze,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:F,viewport:Re,reset:Be}}function ad(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new z,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):at(`canvas`)}function T(e,t,n){let r=1,i=Ie(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function O(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Xe:Jt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function k(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function A(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function te(e){let t=e.target;t.removeEventListener(`dispose`,te),ne(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),ie(t)}function ne(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&re(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function re(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function ie(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function le(){let e=ae;return e>=i.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ae+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function N(t,i){let a=r.get(t);if(t.isVideoTexture&&P(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function de(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){xe(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function fe(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){xe(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){Se(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let me={[l]:e.REPEAT,[u]:e.CLAMP_TO_EDGE,[d]:e.MIRRORED_REPEAT},he={[f]:e.NEAREST,[p]:e.NEAREST_MIPMAP_NEAREST,[m]:e.NEAREST_MIPMAP_LINEAR,[h]:e.LINEAR,[g]:e.LINEAR_MIPMAP_NEAREST,[_]:e.LINEAR_MIPMAP_LINEAR},ge={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function _e(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,me[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,me[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,me[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,he[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,he[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ge[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ve(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,te));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=ue(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&re(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ye(e,t,n){return Math.floor(Math.floor(e/n)/t)}function be(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ye(n.start,r.width,4),c=ye(t.start,r.width,4);n.start<=i+1&&a===c&&ye(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function xe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ve(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Jt.getPrimaries(Jt.workingColorSpace),r=o.colorSpace===``?null:Jt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Fe(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=O(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);_e(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=A(o,t);if(o.isDepthTexture)p=k(o.format===M,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&be(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=$s(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=$s(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ie(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Ie(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,o,s){if(o.image.length!==6)return;let c=ve(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Jt.getPrimaries(Jt.workingColorSpace),r=o.colorSpace===``?null:Jt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Fe(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=O(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=A(o,h);_e(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Ie(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ce(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=O(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ne(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=k(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Pe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=O(o.internalFormat,c,l,o.normalized,o.colorSpace);Pe(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,te)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else N(i.depthTexture,0);let u=l.__webglTexture,d=Ne(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Pe(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ee(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Te(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Te(i.__webglFramebuffer[0],t,0):Te(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),we(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),we(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function De(t,n,i){let a=r.get(t);n!==void 0&&Ce(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ee(t)}function Oe(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,j);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Pe(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=O(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ne(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),we(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),_e(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Ce(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),_e(c,a),Ce(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),_e(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Ce(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Ce(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Ee(t)}function ke(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=ee(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let Ae=[],je=[];function Me(t){if(t.samples>0){if(Pe(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Ae.length=0,je.length=0,Ae.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Ae.push(l),je.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,je)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ae))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ne(e){return Math.min(i.maxSamples,e.samples)}function Pe(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function P(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Jt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ie(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=N,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=pe,this.rebindTextures=De,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function od(e,t){function n(n,r=``){let i,a=Jt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var sd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ld=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new na(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new zo({vertexShader:sd,fragmentShader:cd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new Eo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ud=class extends pt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new ld,g={},_=t.getContextAttributes(),y=null,b=null,x=[],S=[],w=new z,T=null,E=null,D=new Cs;D.viewport=new on;let O=new Cs;O.viewport=new on;let k=[D,O],A=new Ps,te=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Bn,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Bn,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Bn,x[e]=t),t.getHandSpace()};function ie(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,ie),r.removeEventListener(`selectstart`,ie),r.removeEventListener(`selectend`,ie),r.removeEventListener(`squeeze`,ie),r.removeEventListener(`squeezestart`,ie),r.removeEventListener(`squeezeend`,ie),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}te=null,re=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(y),f=null,d=null,u=null,r=null,b=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(y=e.getRenderTarget(),r.addEventListener(`select`,ie),r.addEventListener(`selectstart`,ie),r.addEventListener(`selectend`,ie),r.addEventListener(`squeeze`,ie),r.addEventListener(`squeezestart`,ie),r.addEventListener(`squeezeend`,ie),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?M:ne,a=_.stencil?ee:C);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new cn(d.textureWidth,d.textureHeight,{format:j,type:v,depthTexture:new ea(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new cn(f.framebufferWidth,f.framebufferHeight,{format:j,type:v,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let se=new B,ce=new B;function le(e,t,n){se.setFromMatrixPosition(t.matrixWorld),ce.setFromMatrixPosition(n.matrixWorld);let r=se.distanceTo(ce),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ue(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=O.near=D.near=t,A.far=O.far=D.far=n,(te!==A.near||re!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),te=A.near,re=A.far),A.layers.mask=e.layers.mask|6,D.layers.mask=A.layers.mask&-5,O.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;ue(A,i);for(let e=0;e<a.length;e++)ue(a[e],i);a.length===2?le(A,D,O):A.projectionMatrix.copy(D.projectionMatrix),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),N(e,A,i)};function N(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=_t*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let de=null;function fe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=k[n];o===void 0&&(o=new Cs,o.layers.enable(n),o.viewport=new on,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new na,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}de&&de(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let pe=new tc;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}},dd=new H,fd=new V;fd.set(-1,0,0,0,1,0,0,0,1);function pd(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Fo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(dd.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(fd),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function md(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var hd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gd=null;function _d(){return gd===null&&(gd=new ji(hd,16,16,ae,T),gd.name=`DFG_LUT`,gd.minFilter=h,gd.magFilter=h,gd.wrapS=u,gd.wrapT=u,gd.generateMipmaps=!1,gd.needsUpdate=!0),gd}var vd=class{constructor(e={}){let{canvas:t=ot(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=v}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([se,oe,ie]),g=new Set([v,C,x,ee,E,D]),y=new Uint32Array(4),b=new Int32Array(4),S=new B,w=null,O=null,k=[],A=[],te=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ne=!1,M=null,re=null,ae=null,ce=null;this._outputColorSpace=Je;let le=0,ue=0,N=null,de=-1,fe=null,pe=new on,me=new on,he=null,ge=new U(0),_e=0,ve=t.width,ye=t.height,be=1,xe=null,Se=null,Ce=new on(0,0,ve,ye),we=new on(0,0,ve,ye),Te=!1,Ee=new Wi,De=!1,Oe=!1,ke=new H,Ae=new B,je=new on,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return N===null?be:1}let P=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,F,Re,I,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Ye,Xe,Ze,Qe,$e,et,tt,rt,it;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),P===null){let t=`webgl2`;if(P=Fe(t,e),P===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),R(`WebGLRenderer: `+e.message),e}function at(){Ie=new Ic(P),Ie.init(),tt=new od(P,Ie),Le=new dc(P,Ie,e,tt),F=new id(P,Ie),Le.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),re=P.createFramebuffer(),ae=P.createFramebuffer(),ce=P.createFramebuffer(),Re=new zc(P),I=new Ru,ze=new ad(P,Ie,F,I,Le,tt,Re),Be=new Fc(j),Ve=new nc(P),rt=new lc(P,Ve),He=new Lc(P,Ve,Re,rt),Ue=new Vc(P,He,Ve,rt,Re),Qe=new Bc(P,Le,ze),Ye=new fc(I),We=new Lu(j,Be,Ie,Le,rt,Ye),Ge=new pd(j,I),Ke=new Hu,qe=new Yu(Ie),Ze=new cc(j,Be,F,Ue,p,s),Xe=new rd(j,Ue,Le),it=new md(P,Re,Le,F),$e=new uc(P,Ie,Re),et=new Rc(P,Ie,Re),Re.programs=We.programs,j.capabilities=Le,j.extensions=Ie,j.properties=I,j.renderLists=Ke,j.shadowMap=Xe,j.state=F,j.info=Re}m!==1009&&(te=new Uc(m,t.width,t.height,o,r,i));let st=new ud(j,P);this.xr=st,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(e){e!==void 0&&(be=e,this.setSize(ve,ye,!1))},this.getSize=function(e){return e.set(ve,ye)},this.setSize=function(e,n,r=!0){if(st.isPresenting){L(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ve=e,ye=n,t.width=Math.floor(e*be),t.height=Math.floor(n*be),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ve*be,ye*be).floor()},this.setDrawingBufferSize=function(e,n,r){ve=e,ye=n,be=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}te.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Ce)},this.setViewport=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),F.viewport(pe.copy(Ce).multiplyScalar(be).round())},this.getScissor=function(e){return e.copy(we)},this.setScissor=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),F.scissor(me.copy(we).multiplyScalar(be).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(e){F.setScissorTest(Te=e)},this.setOpaqueSort=function(e){xe=e},this.setTransparentSort=function(e){Se=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(y[0]=i,y[1]=a,y[2]=o,y[3]=r,P.clearBufferuiv(P.COLOR,0,y)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,P.clearBufferiv(P.COLOR,0,b))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),M=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),Ze.dispose(),Ke.dispose(),qe.dispose(),I.dispose(),Be.dispose(),Ue.dispose(),rt.dispose(),it.dispose(),We.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,yt),st.removeEventListener(`sessionend`,bt),xt.stop()};function lt(e){e.preventDefault(),ct(`WebGLRenderer: Context Lost.`),ne=!0}function ut(){ct(`WebGLRenderer: Context Restored.`),ne=!1;let e=Re.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;at(),Re.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function ft(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),mt(t)}function mt(e){ht(e),I.remove(e)}function ht(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=He.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=Ve.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ve.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){M!==null&&e.isNodeMaterial&&M.setObject(r,e),De===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),M!==null&&M.renderStart(e,t,n),O=qe.get(n),O.init(t),A.push(O),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(O.pushLight(e),e.castShadow&&O.pushShadow(e))}),O.setupLights(),M!==null&&M.updateLights(O.state.lightsArray),Oe=this.localClippingEnabled,De=Ye.init(this.clippingPlanes,Oe),De===!0&&Ye.setGlobalState(this.clippingPlanes,t),M!==null&&Xe.render(O.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),O=A.pop(),M!==null&&M.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function yt(){xt.stop()}function bt(){xt.start()}let xt=new tc;xt.setAnimationLoop(vt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){_t=e,st.setAnimationLoop(e),e===null?xt.stop():xt.start()},st.addEventListener(`sessionstart`,yt),st.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;M!==null&&M.renderStart(e,t);let n=st.enabled===!0&&st.isPresenting===!0,r=te!==null&&(N===null||n)&&te.begin(j,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,N),O=qe.get(e,A.length),O.init(t),O.state.textureUnits=ze.getTextureUnits(),A.push(O),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ee.setFromProjectionMatrix(ke,nt,t.reversedDepth),Oe=this.localClippingEnabled,De=Ye.init(this.clippingPlanes,Oe),w=Ke.get(e,k.length),w.init(),k.push(w),st.enabled===!0&&st.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,j.sortObjects)}St(e,t,0,j.sortObjects),w.finish(),M!==null&&M.updateLights(O.state.lightsArray),j.sortObjects===!0&&w.sort(xe,Se),Ne=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ne&&Ze.addToRenderList(w,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),De===!0&&Ye.beginShadows();let i=O.state.shadowsArray;if(Xe.render(i,e,t),De===!0&&Ye.endShadows(),(r&&te.hasRenderPass())===!1){let n=w.opaque,r=w.transmissive;if(O.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];wt(n,r,e,a)}Ne&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ct(w,e,n,n.viewport)}}else r.length>0&&wt(n,r,e,t),Ne&&Ze.render(e),Ct(w,e,t)}N!==null&&ue===0&&(ze.updateMultisampleRenderTarget(N),ze.updateRenderTargetMipmap(N)),r&&te.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),rt.resetDefaultState(),de=-1,fe=null,A.pop(),A.length>0?(O=A[A.length-1],ze.setTextureUnits(O.state.textureUnits),De===!0&&Ye.setGlobalState(j.clippingPlanes,O.state.camera)):O=null,k.pop(),w=k.length>0?k[k.length-1]:null,M!==null&&M.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)O.pushLightProbeGrid(e);else if(e.isLight)O.pushLight(e),e.castShadow&&O.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ee)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=Ue.update(e),a=e.material;a.visible&&w.push(e,i,a,n,je.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ee))){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&w.push(e,i,c,n,je.z,s,t)}}else a.visible&&w.push(e,i,a,n,je.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function Ct(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;O.setupLightsView(n),De===!0&&Ye.setGlobalState(j.clippingPlanes,n),r&&F.viewport(pe.copy(r)),i.length>0&&Tt(i,t,n),a.length>0&&Tt(a,t,n),o.length>0&&Tt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function wt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);O.state.transmissionRenderTarget[r.id]=new cn(1,1,{generateMipmaps:!0,type:e?T:v,minFilter:_,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let a=O.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),l=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(ge),_e=j.getClearAlpha(),_e<1&&j.setClearColor(16777215,.5),j.clear(),Ne&&Ze.render(n);let u=j.toneMapping;j.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),O.setupLightsView(r),De===!0&&Ye.setGlobalState(j.clippingPlanes,r),Tt(e,n,r),ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(ze.updateMultisampleRenderTarget(a),ze.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,l),j.setClearColor(ge,_e),d!==void 0&&(r.viewport=d),j.toneMapping=u}function Tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Et(o,t,n,s,l,c)}}function Et(e,t,n,r,i,a){M!==null&&i.isNodeMaterial&&M.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Dt(e,t,n){t.isScene!==!0&&(t=Me);let r=I.get(e),i=O.state.lights,a=O.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,O.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Be.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=We.getUniforms(e),M!==null&&e.isNodeMaterial&&M.build(e,n,s),e.onBeforeCompile(s,j),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),kt(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=O.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Xl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];S.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(S))return n}return null}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Me),ze.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?j.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Jt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Be.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),y=O.state.lights;if(De===!0&&(Oe===!0||e!==fe)){let t=e===fe&&r.id===de;Ye.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=O.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Dt(r,t,i),M&&r.isNodeMaterial&&M.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(F.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==de&&(de=r.id,C=!0),v.needsLights){let e=At(O.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||fe!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(P,`projectionMatrix`,e.projectionMatrix),T.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(P,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&T.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),fe!==e&&(fe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(P,`sunShadowMap`,y.state.sunShadowMap,ze),y.state.directionalShadowMap.length>0&&T.setValue(P,`directionalShadowMap`,y.state.directionalShadowMap,ze),y.state.spotShadowMap.length>0&&T.setValue(P,`spotShadowMap`,y.state.spotShadowMap,ze),y.state.pointShadowMap.length>0&&T.setValue(P,`pointShadowMap`,y.state.pointShadowMap,ze)),i.isSkinnedMesh){T.setOptional(P,i,`bindMatrix`),T.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(P,`boneTexture`,e.boneTexture,ze))}i.isBatchedMesh&&(T.setOptional(P,i,`batchingTexture`),T.setValue(P,`batchingTexture`,i._matricesTexture,ze),T.setOptional(P,i,`batchingIdTexture`),T.setValue(P,`batchingIdTexture`,i._indirectTexture,ze),T.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(P,`batchingColorTexture`,i._colorsTexture,ze));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Qe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=_d()),C){if(T.setValue(P,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Mt(E,w),a&&r.fog===!0&&Ge.refreshFogUniforms(E,a),Ge.refreshMaterialUniforms(E,r,be,ye,O.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Xl.upload(P,Ot(v),E,ze)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Xl.upload(P,Ot(v),E,ze),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(P,`center`,i.center),T.setValue(P,`modelViewMatrix`,i.modelViewMatrix),T.setValue(P,`normalMatrix`,i.normalMatrix),T.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,x),it.bind(n,x)}}return x}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,le=t,ue=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest,F.viewport(pe),F.scissor(me),F.setScissorTest(he),de=-1;return}if(o.__webglFramebuffer===void 0)ze.setupRenderTarget(e);else if(o.__hasExternalTextures)ze.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ze.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&ze.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),me.copy(e.scissor),he=e.scissorTest}else pe.copy(Ce).multiplyScalar(be).floor(),me.copy(we).multiplyScalar(be).floor(),he=Te;if(n!==0&&(r=re),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(pe),F.scissor(me),F.setScissorTest(he),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}de=-1};function Pt(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=N===null?null:I.get(N).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await dt(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;ze.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(ze.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(ze.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(ze.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,o,s,f,p,o,s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,ae),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,ce);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,o,s,f,p,o,s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&ze.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?ze.setTextureCube(e,0):e.isData3DTexture?ze.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?ze.setTexture2DArray(e,0):ze.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){le=0,ue=0,N=null,F.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return nt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Jt._getUnpackColorSpace()}};function yd(e){"@babel/helpers - typeof";return yd=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},yd(e)}function bd(e,t){if(yd(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(yd(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function xd(e){var t=bd(e,`string`);return yd(t)==`symbol`?t:t+``}function q(e,t,n){return(t=xd(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Sd=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],Cd=(e,t,n)=>e<t?t:e>n?n:e,wd=(e,t,n)=>e+(t-e)*n,Td=class{constructor(e){q(this,`s`,void 0),this.s=e>>>0}next(){let e=this.s=this.s+1831565813>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}int(e){return Math.floor(this.next()*e)}pick(e){return e[this.int(e.length)]}shuffle(e){for(let t=e.length-1;t>0;t--){let n=this.int(t+1);[e[t],e[n]]=[e[n],e[t]]}return e}},Ed=[`px`,`nx`,`py`,`ny`,`pz`,`nz`],Dd=`'Baloo 2', 'Nunito', system-ui, sans-serif`;function J(e,t,n,r){e.fillStyle=t,e.fillRect(0,0,n,r)}function Y(e,t,n,r,i,a){e.beginPath(),e.roundRect(t,n,r,i,a)}function X(e,t,n,r,i){i&&(e.fillStyle=i),e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill()}function Od(e,t,n,r,i,a=5,o=.45){e.fillStyle=i,e.beginPath();for(let i=0;i<a*2;i++){let s=-Math.PI/2+i*Math.PI/a,c=i%2?r*o:r;e.lineTo(t+Math.cos(s)*c,n+Math.sin(s)*c)}e.closePath(),e.fill()}function kd(e,t,n,r,i){e.fillStyle=i,e.beginPath(),e.moveTo(t,n-r),e.quadraticCurveTo(t,n,t+r,n),e.quadraticCurveTo(t,n,t,n+r),e.quadraticCurveTo(t,n,t-r,n),e.quadraticCurveTo(t,n,t,n-r),e.fill()}function Z(e,t,n,r,i,a){e.fillStyle=a,e.font=`800 ${i}px ${Dd}`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(t,n,r+i*.06)}function Ad(e,t,n,r,i,a){e.fillStyle=r;for(let r=i/2,o=0;r<n;r+=i,o++)for(let n=i/2+(o%2?i/2:0);n<t+i;n+=i)X(e,n,r,a)}var jd=(e,t)=>Math.min(e,t),Md={1:[[.5,.5]],2:[[.27,.27],[.73,.73]],3:[[.25,.25],[.5,.5],[.75,.75]],4:[[.27,.27],[.73,.27],[.27,.73],[.73,.73]],5:[[.27,.27],[.73,.27],[.5,.5],[.27,.73],[.73,.73]],6:[[.28,.25],[.72,.25],[.28,.5],[.72,.5],[.28,.75],[.72,.75]]},Nd={id:`dice`,name:`Lucky Dice`,paint(e,t,n,r){let i=jd(n,r);J(e,`#fffdf8`,n,r),e.strokeStyle=`#efe5d6`,e.lineWidth=i*.04,Y(e,i*.06,i*.06,n-i*.12,r-i*.12,i*.14),e.stroke();let a={py:1,ny:6,pz:2,nz:5,px:3,nx:4}[t];for(let[t,o]of Md[a])X(e,t*n,o*r,i*(a===1?.14:.085),a===1?`#ff4d6d`:`#2e2a4f`)}},Pd={id:`gift`,name:`Gift Box`,paint(e,t,n,r){let i=jd(n,r);J(e,`#ff6f91`,n,r),Ad(e,n,r,`#ffc2d3`,i/4.5,i*.035);let a=i*.2;if(e.fillStyle=`#ffc53d`,e.fillRect(n/2-a/2,0,a,r),(t===`py`||t===`ny`)&&e.fillRect(0,r/2-a/2,n,a),e.fillStyle=`rgba(200,120,0,0.25)`,e.fillRect(n/2-a/2,0,a*.12,r),t===`py`){e.strokeStyle=`#ffb000`,e.lineWidth=i*.07;for(let t of[-1,1])e.beginPath(),e.ellipse(n/2+t*i*.17,r/2-i*.06,i*.16,i*.09,t*.5,0,Math.PI*2),e.stroke();X(e,n/2,r/2,i*.08,`#ffb000`)}}},Fd={id:`sugar`,name:`Sugar Cube`,paint(e,t,n,r){let i=jd(n,r),a=e.createLinearGradient(0,0,n,r);a.addColorStop(0,`#ffffff`),a.addColorStop(1,`#e9eefb`),e.fillStyle=a,e.fillRect(0,0,n,r);let o=new Td(t.charCodeAt(0)*31+t.charCodeAt(1)),s=[`#dde4f4`,`#cfd8ee`,`#ffffff`,`#e8ecf8`];for(let t=0;t<90*i;t++)X(e,o.next()*n,o.next()*r,i*(.01+o.next()*.022),s[o.int(4)]);for(let t=0;t<5;t++)kd(e,o.next()*n,o.next()*r,i*(.05+o.next()*.05),`#ffffff`)}},Id={pz:`#ff5d73`,px:`#3b82f6`,py:`#2fbf6f`,nz:`#ffb300`,nx:`#9b5cff`,ny:`#ff8a3d`},Ld={pz:`A`,px:`B`,py:`C`,nz:`1`,nx:`2`,ny:`3`},Rd={id:`toyblock`,name:`Toy Block`,paint(e,t,n,r){let i=jd(n,r);J(e,`#f6d7a7`,n,r),e.strokeStyle=`rgba(190,140,80,0.25)`,e.lineWidth=i*.012;for(let t=i*.08;t<r;t+=i*.11)e.beginPath(),e.moveTo(0,t),e.bezierCurveTo(n*.3,t+i*.03,n*.6,t-i*.03,n,t),e.stroke();e.strokeStyle=Id[t],e.lineWidth=i*.07,Y(e,i*.1,i*.1,n-i*.2,r-i*.2,i*.08),e.stroke(),Z(e,Ld[t],n/2+i*.02,r/2+i*.03,i*.62,`rgba(90,50,20,0.25)`),Z(e,Ld[t],n/2,r/2,i*.62,Id[t])}},zd={py:`#f7f7fb`,ny:`#ffd23f`,pz:`#2fbf6f`,nz:`#3b82f6`,px:`#ff4d4d`,nx:`#ff8a00`},Bd={id:`twisty`,name:`Twisty Cube`,paint(e,t,n,r){let i=jd(n,r);J(e,`#1e1b2e`,n,r);let a=n/3,o=r/3,s=i*.035;e.fillStyle=zd[t];for(let t=0;t<3;t++)for(let n=0;n<3;n++)Y(e,n*a+s,t*o+s,a-s*2,o-s*2,i*.04),e.fill();e.fillStyle=`rgba(255,255,255,0.18)`;for(let t=0;t<3;t++)for(let n=0;n<3;n++)Y(e,n*a+s*2,t*o+s*2,a*.4,o*.18,i*.02),e.fill()}},Vd={id:`jack`,name:`Jack-in-the-Box`,paint(e,t,n,r){let i=jd(n,r);if(t===`py`||t===`ny`){J(e,`#3b82f6`,n,r),e.strokeStyle=`#ffc53d`,e.lineWidth=i*.05,Y(e,i*.08,i*.08,n-i*.16,r-i*.16,i*.06),e.stroke(),t===`py`&&Od(e,n/2,r/2+i*.03,i*.3,`#ffd23f`);return}let a=n/6;for(let t=0;t<6;t++)e.fillStyle=t%2?`#fff4f6`:`#ff5d73`,e.fillRect(t*a,0,a,r);e.fillStyle=`#ffc53d`,e.fillRect(0,0,n,i*.1),e.fillRect(0,r-i*.1,n,i*.1),t===`px`&&(X(e,n/2,r/2,i*.13,`#ffc53d`),e.strokeStyle=`#d99a00`,e.lineWidth=i*.06,e.lineCap=`round`,e.beginPath(),e.moveTo(n/2,r/2),e.lineTo(n/2+i*.22,r/2+i*.12),e.stroke(),X(e,n/2+i*.22,r/2+i*.12,i*.07,`#2e2a4f`)),t===`pz`&&Od(e,n/2,r/2,i*.18,`#ffd23f`)}},Hd={id:`photo`,name:`Photo Cube`,paint(e,t,n,r){let i=jd(n,r);J(e,`#ffffff`,n,r);let a=i*.09;e.save(),e.beginPath(),e.rect(a,a,n-a*2,r-a*2),e.clip();let o=a,s=a,c=n-a*2,l=r-a*2;switch(t){case`pz`:J(e,`#a8dcff`,n,r),X(e,o+c*.75,s+l*.28,i*.13,`#ffd23f`),e.fillStyle=`#6fd07e`,e.beginPath(),e.ellipse(o+c*.25,s+l*1.02,c*.55,l*.42,0,0,Math.PI*2),e.fill(),e.fillStyle=`#3fae5f`,e.beginPath(),e.ellipse(o+c*.85,s+l*1.08,c*.55,l*.4,0,0,Math.PI*2),e.fill();break;case`px`:J(e,`#c9ebff`,n,r),e.fillStyle=`#3a9df5`,e.fillRect(o,s+l*.6,c,l*.4),e.fillStyle=`#ffffff`,e.beginPath(),e.moveTo(o+c*.5,s+l*.2),e.lineTo(o+c*.5,s+l*.55),e.lineTo(o+c*.28,s+l*.55),e.closePath(),e.fill(),e.fillStyle=`#e8394a`,e.beginPath(),e.moveTo(o+c*.22,s+l*.58),e.lineTo(o+c*.72,s+l*.58),e.lineTo(o+c*.64,s+l*.68),e.lineTo(o+c*.3,s+l*.68),e.closePath(),e.fill();break;case`nx`:{let t=e.createLinearGradient(0,s,0,s+l);t.addColorStop(0,`#ffb3a1`),t.addColorStop(1,`#ffe7c7`),e.fillStyle=t,e.fillRect(0,0,n,r),e.fillStyle=`#7bbf5a`,e.fillRect(o,s+l*.78,c,l*.22),e.fillStyle=`#8a5a3c`,e.fillRect(o+c*.46,s+l*.45,c*.08,l*.36);for(let[t,n,r]of[[.5,.35,.2],[.36,.45,.15],[.64,.45,.15]])X(e,o+c*t,s+l*n,i*r,`#3fae5f`);break}case`nz`:J(e,`#dcefff`,n,r),e.fillStyle=`#8c9bb5`,e.beginPath(),e.moveTo(o-c*.1,s+l),e.lineTo(o+c*.35,s+l*.3),e.lineTo(o+c*.8,s+l),e.fill(),e.fillStyle=`#6f7f9c`,e.beginPath(),e.moveTo(o+c*.35,s+l),e.lineTo(o+c*.72,s+l*.42),e.lineTo(o+c*1.1,s+l),e.fill(),e.fillStyle=`#ffffff`,e.beginPath(),e.moveTo(o+c*.35,s+l*.3),e.lineTo(o+c*.45,s+l*.46),e.lineTo(o+c*.25,s+l*.46),e.fill();break;case`py`:{J(e,`#28235a`,n,r),X(e,o+c*.68,s+l*.34,i*.16,`#fff3c4`),X(e,o+c*.76,s+l*.28,i*.14,`#28235a`);let t=new Td(9);for(let n=0;n<14;n++)kd(e,o+t.next()*c,s+t.next()*l,i*(.02+t.next()*.03),`#ffffff`);break}case`ny`:J(e,`#fff0f5`,n,r),e.strokeStyle=`#3fae5f`,e.lineWidth=i*.05,e.beginPath(),e.moveTo(o+c*.5,s+l*.5),e.lineTo(o+c*.5,s+l),e.stroke();for(let t=0;t<6;t++){let n=t/6*Math.PI*2;X(e,o+c*.5+Math.cos(n)*i*.14,s+l*.42+Math.sin(n)*i*.14,i*.1,`#ff8fab`)}X(e,o+c*.5,s+l*.42,i*.08,`#ffd23f`)}e.restore()}},Ud={id:`crayons`,name:`Crayon Box`,paint(e,t,n,r){let i=jd(n,r),a=[`#ff4d4d`,`#ff8a00`,`#ffd23f`,`#2fbf6f`,`#3b82f6`,`#9b5cff`,`#ff6fb1`,`#8a5a3c`];if(t===`py`){J(e,`#2e2a4f`,n,r);let t=n/4,i=r/4;for(let n=0;n<4;n++)for(let r=0;r<4;r++){let o=a[(r+n*3)%a.length];X(e,(r+.5)*t,(n+.5)*i,Math.min(t,i)*.38,o),X(e,(r+.5)*t,(n+.5)*i,Math.min(t,i)*.14,`rgba(255,255,255,0.35)`)}return}J(e,`#ffd23f`,n,r),e.fillStyle=`#2fbf6f`,e.beginPath();let o=i*.08,s=r*.55;for(let t=0;t<=8;t++)e.lineTo(t*n/8,s-i*.12+(t%2?o:0));for(let t=8;t>=0;t--)e.lineTo(t*n/8,s+i*.12+(t%2?o:0));e.closePath(),e.fill(),(t===`pz`||t===`nz`)&&(e.fillStyle=`#ffffff`,Y(e,n*.14,r*.14,n*.72,i*.26,i*.06),e.fill(),Z(e,`CRAYONS`,n/2,r*.14+i*.13,i*.15,`#2e2a4f`))}},Wd={id:`candy`,name:`Candy Box`,paint(e,t,n,r){let i=jd(n,r);if(t===`py`){J(e,`#ffffff`,n,r);let t=n/2,a=r/2,o=[`#ff5d8f`,`#ffffff`,`#6ee7b7`,`#ffffff`];for(let n=i*.46,r=0;n>i*.02;n-=i*.055,r++)X(e,t,a,n,o[r%4]);return}J(e,`#ffffff`,n,r);let a=i*.22,o=[`#ff5d8f`,`#ffffff`,`#6ee7b7`,`#ffffff`];e.save(),e.translate(n/2,r/2),e.rotate(Math.PI/4);for(let t=-n*1.5,i=0;t<n*1.5;t+=a/2,i++)e.fillStyle=o[i%4],e.fillRect(t,-r*1.5,a/2,r*3);e.restore()}},Gd={id:`musicbox`,name:`Music Box`,paint(e,t,n,r){let i=jd(n,r);J(e,`#8a5a3c`,n,r),e.strokeStyle=`rgba(60,30,15,0.3)`,e.lineWidth=i*.012;for(let t=i*.06;t<r;t+=i*.09)e.beginPath(),e.moveTo(0,t),e.bezierCurveTo(n*.35,t-i*.03,n*.65,t+i*.03,n,t),e.stroke();e.strokeStyle=`#e7b94a`,e.lineWidth=i*.035,Y(e,i*.08,i*.08,n-i*.16,r-i*.16,i*.05),e.stroke();for(let[t,a]of[[.08,.08],[.92,.08],[.08,.92],[.92,.92]])X(e,t*n,a*r,i*.05,`#e7b94a`);if(t===`pz`&&(X(e,n/2,r*.45,i*.1,`#e7b94a`),e.fillStyle=`#2e1a10`,X(e,n/2,r*.44,i*.04),e.beginPath(),e.moveTo(n/2-i*.025,r*.45),e.lineTo(n/2+i*.025,r*.45),e.lineTo(n/2+i*.04,r*.53),e.lineTo(n/2-i*.04,r*.53),e.fill()),t===`py`){e.fillStyle=`#e7b94a`,e.strokeStyle=`#e7b94a`,e.lineWidth=i*.03;for(let[t,a]of[[.36,.62],[.64,.52]])e.beginPath(),e.ellipse(t*n,a*r,i*.07,i*.05,-.4,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(t*n+i*.06,a*r),e.lineTo(t*n+i*.06,a*r-i*.28),e.stroke();e.beginPath(),e.moveTo(.36*n+i*.06,.62*r-i*.28),e.lineTo(.64*n+i*.06,.52*r-i*.28),e.lineWidth=i*.06,e.stroke()}t===`px`&&(X(e,n/2,r/2,i*.09,`#e7b94a`),e.strokeStyle=`#e7b94a`,e.lineWidth=i*.05,e.beginPath(),e.moveTo(n/2,r/2),e.lineTo(n/2,r/2-i*.24),e.lineTo(n/2+i*.14,r/2-i*.24),e.stroke())}},Kd={id:`cookietin`,name:`Cookie Tin`,paint(e,t,n,r){let i=jd(n,r);J(e,`#3563c9`,n,r),e.fillStyle=`#ffffff`;let a=i*.07;for(let t=a;t<n-a/2;t+=i*.1)X(e,t,a,i*.018),X(e,t,r-a,i*.018);for(let t=a;t<r-a/2;t+=i*.1)X(e,a,t,i*.018),X(e,n-a,t,i*.018);if(t===`py`||t===`pz`){X(e,n/2,r/2,i*.3,`#c98e45`),X(e,n/2,r/2,i*.26,`#e6b36a`),e.strokeStyle=`#c98e45`,e.lineWidth=i*.02,e.beginPath(),e.arc(n/2,r/2,i*.17,0,Math.PI*2),e.stroke();let a=new Td(t===`py`?3:4);for(let t=0;t<7;t++){let t=a.next()*Math.PI*2,o=a.next()*i*.2;X(e,n/2+Math.cos(t)*o,r/2+Math.sin(t)*o,i*.03,`#5b3a29`)}return}e.strokeStyle=`#ffffff`,e.lineWidth=i*.02,e.lineCap=`round`;let o=new Td(t.charCodeAt(1));for(let t=0;t<4;t++){let t=n*(.25+o.next()*.5),a=r*(.25+o.next()*.5),s=i*(.06+o.next()*.05);for(let n=0;n<3;n++){let r=n*Math.PI/3;e.beginPath(),e.moveTo(t-Math.cos(r)*s,a-Math.sin(r)*s),e.lineTo(t+Math.cos(r)*s,a+Math.sin(r)*s),e.stroke()}}}},qd={id:`present`,name:`Holiday Present`,paint(e,t,n,r){let i=jd(n,r);J(e,`#e8394a`,n,r),e.fillStyle=`rgba(20,120,70,0.45)`;for(let t=i*.12;t<n;t+=i*.3)e.fillRect(t,0,i*.06,r);for(let t=i*.12;t<r;t+=i*.3)e.fillRect(0,t,n,i*.06);let a=i*.16;if(e.fillStyle=`#ffffff`,e.fillRect(n/2-a/2,0,a,r),(t===`py`||t===`ny`)&&e.fillRect(0,r/2-a/2,n,a),t===`py`){e.strokeStyle=`#ffffff`,e.lineWidth=i*.07;for(let t of[-1,1])e.beginPath(),e.ellipse(n/2+t*i*.17,r/2-i*.05,i*.15,i*.09,t*.5,0,Math.PI*2),e.stroke();X(e,n/2,r/2,i*.08,`#ffffff`)}}},Jd={id:`mystery`,name:`Mystery Box`,paint(e,t,n,r){let i=jd(n,r),a=e.createRadialGradient(n/2,r/2,i*.1,n/2,r/2,i*.75);a.addColorStop(0,`#8a6bff`),a.addColorStop(1,`#4b2fd6`),e.fillStyle=a,e.fillRect(0,0,n,r),e.strokeStyle=`#ffc53d`,e.lineWidth=i*.05,Y(e,i*.06,i*.06,n-i*.12,r-i*.12,i*.06),e.stroke(),Z(e,`?`,n/2,r/2,i*.62,`#ffc53d`);for(let[t,a]of[[.2,.2],[.8,.22],[.22,.8],[.8,.78]])kd(e,t*n,a*r,i*.06,`#fff3c4`)}};function Yd(e,t,n,r,i){e.strokeStyle=i,e.lineWidth=r*.085,e.lineCap=`round`;let a=Math.max(3,Math.round(t/(r*.22)));for(let i=0;i<a;i++){let o=(i+.5)*t/a;e.beginPath(),e.moveTo(o,-r*.05);for(let t=0;t<=n+r*.1;t+=r*.12)e.lineTo(o+Math.sin(t/(r*.12)+i)*r*.035,t);e.stroke()}}function Xd(e,t,n,r,i){e.save(),e.translate(t,n),e.rotate(i),e.fillStyle=`#2b1d1d`,e.beginPath(),e.ellipse(0,0,r*.55,r,0,0,Math.PI*2),e.fill(),e.restore()}var Zd={id:`watermelon`,name:`Square Watermelon`,paint(e,t,n,r){let i=jd(n,r);J(e,`#45b764`,n,r),Yd(e,n,r,i,`#1f7a3f`),t===`py`&&(X(e,n/2,r/2,i*.16,`rgba(20,70,30,0.35)`),e.strokeStyle=`#7a5230`,e.lineWidth=i*.06,e.lineCap=`round`,e.beginPath(),e.moveTo(n/2,r/2),e.quadraticCurveTo(n/2+i*.12,r/2-i*.16,n/2+i*.22,r/2-i*.1),e.stroke(),e.strokeStyle=`#8fd46a`,e.lineWidth=i*.025,e.beginPath(),e.arc(n/2+i*.28,r/2-i*.12,i*.06,Math.PI,Math.PI*2.6),e.stroke()),t===`ny`&&(e.fillStyle=`rgba(240,220,120,0.8)`,e.beginPath(),e.ellipse(n/2,r/2,i*.3,i*.22,.3,0,Math.PI*2),e.fill())}},Qd={id:`cheese`,name:`Cheese Block`,paint(e,t,n,r){let i=jd(n,r);J(e,`#ffd54a`,n,r);let a=new Td(t.charCodeAt(0)*17+t.charCodeAt(1));for(let t=0;t<9;t++){let t=a.next()*n,o=a.next()*r,s=i*(.05+a.next()*.07);X(e,t,o,s,`#e8ad1d`),X(e,t+s*.18,o+s*.18,s*.78,`#f5c12e`)}if(t===`pz`){let t=n*.66,a=r*.66;X(e,t,a,i*.17,`#b8860b`),X(e,t-i*.1,a-i*.1,i*.07,`#b9b3c9`),X(e,t+i*.1,a-i*.1,i*.07,`#b9b3c9`),X(e,t-i*.1,a-i*.1,i*.035,`#ffb3c1`),X(e,t+i*.1,a-i*.1,i*.035,`#ffb3c1`),X(e,t,a,i*.1,`#cfc9dd`),X(e,t-i*.04,a-i*.02,i*.018,`#2e2a4f`),X(e,t+i*.04,a-i*.02,i*.018,`#2e2a4f`),X(e,t,a+i*.035,i*.022,`#ff6f91`)}}},$d={id:`bread`,name:`Bread Loaf`,paint(e,t,n,r){let i=jd(n,r),a=e.createLinearGradient(0,0,0,r);if(a.addColorStop(0,`#e2a563`),a.addColorStop(1,`#b8743a`),e.fillStyle=a,e.fillRect(0,0,n,r),t===`pz`||t===`nz`){let t=i*.07;e.fillStyle=`#f8e6bf`,e.beginPath(),e.moveTo(t,r-t),e.lineTo(t,r*.35),e.quadraticCurveTo(t,t,n*.3,t),e.lineTo(n*.7,t),e.quadraticCurveTo(n-t,t,n-t,r*.35),e.lineTo(n-t,r-t),e.closePath(),e.fill();let a=new Td(7);for(let o=0;o<40*i;o++)X(e,t+a.next()*(n-2*t),r*.25+a.next()*(r*.7),i*.012,`#e9cf9c`)}else if(t===`py`){e.strokeStyle=`rgba(120,60,20,0.45)`,e.lineWidth=i*.04,e.lineCap=`round`;for(let t=1;t<=3;t++)e.beginPath(),e.moveTo(n*(.25*t-.08),r*.2),e.lineTo(n*(.25*t+.08),r*.8),e.stroke();e.fillStyle=`rgba(255,240,200,0.25)`,e.fillRect(0,0,n,r*.3)}}},ef={id:`tofu`,name:`Tofu`,paint(e,t,n,r){let i=jd(n,r),a=e.createLinearGradient(0,0,n,r);a.addColorStop(0,`#fffdf6`),a.addColorStop(1,`#efe7d2`),e.fillStyle=a,e.fillRect(0,0,n,r);let o=new Td(t.charCodeAt(1)*5);for(let t=0;t<30*i;t++)X(e,o.next()*n,o.next()*r,i*.01,`rgba(200,185,150,0.35)`);if(t===`pz`&&(X(e,n/2-i*.14,r*.46,i*.04,`#2e2a4f`),X(e,n/2+i*.14,r*.46,i*.04,`#2e2a4f`),X(e,n/2-i*.13,r*.44,i*.013,`#ffffff`),X(e,n/2+i*.15,r*.44,i*.013,`#ffffff`),X(e,n/2-i*.25,r*.56,i*.06,`rgba(255,150,170,0.55)`),X(e,n/2+i*.25,r*.56,i*.06,`rgba(255,150,170,0.55)`),e.strokeStyle=`#2e2a4f`,e.lineWidth=i*.025,e.lineCap=`round`,e.beginPath(),e.arc(n/2-i*.035,r*.54,i*.035,.1*Math.PI,.9*Math.PI),e.arc(n/2+i*.035,r*.54,i*.035,.1*Math.PI,.9*Math.PI),e.stroke()),t===`py`)for(let t=0;t<12;t++){let a=n*(.25+o.next()*.5),s=r*(.25+o.next()*.5);e.strokeStyle=t%3?`#5cbf5a`:`#b8e986`,e.lineWidth=i*.02,e.beginPath(),e.arc(a,s,i*.035,0,Math.PI*2),e.stroke()}}};function tf(e,t,n,r,i,a,o,s){e.save(),e.beginPath(),e.rect(t,n,r,i),e.clip();for(let c=0,l=n;l<n+i+a;c++,l+=a*.5)for(let n=t+(c%2?a:0);n<t+r+a;n+=a*2){e.fillStyle=s,e.beginPath(),e.arc(n,l,a,Math.PI,0),e.fill(),e.strokeStyle=o,e.lineWidth=a*.1;for(let t of[.95,.65,.35])e.beginPath(),e.arc(n,l,a*t,Math.PI,0),e.stroke()}e.restore()}var nf={id:`sushi`,name:`Sushi Box`,paint(e,t,n,r){let i=jd(n,r);if(t!==`py`){J(e,`#221c28`,n,r),tf(e,i*.06,r*.58,n-i*.12,r*.42-i*.06,i*.13,`#e7b94a`,`#221c28`),e.fillStyle=`#d8343f`,e.fillRect(0,r*.42,n,i*.09),e.strokeStyle=`rgba(0,0,0,0.25)`,e.lineWidth=i*.012;for(let t=0;t<n;t+=i*.05)e.beginPath(),e.moveTo(t,r*.42),e.lineTo(t+i*.03,r*.42+i*.09),e.stroke();if(e.strokeStyle=`#e7b94a`,e.lineWidth=i*.02,e.strokeRect(i*.05,i*.05,n-i*.1,r-i*.1),t===`pz`||t===`nz`){let a=n/2,o=r*.22;X(e,a,o,i*.13,`#e7b94a`);for(let t=0;t<5;t++){let n=-Math.PI/2+t*2*Math.PI/5;X(e,a+Math.cos(n)*i*.06,o+Math.sin(n)*i*.06,i*.045,`#ffb3c7`)}if(X(e,a,o,i*.025,`#e7b94a`),t===`pz`){e.fillStyle=`#d8343f`;for(let t of[-1,1])e.beginPath(),e.ellipse(a+t*i*.09,r*.42+i*.02,i*.09,i*.05,t*.4,0,Math.PI*2),e.fill();X(e,a,r*.42+i*.045,i*.04,`#b32532`),e.strokeStyle=`#d8343f`,e.lineWidth=i*.03;for(let t of[-1,1])e.beginPath(),e.moveTo(a,r*.42+i*.06),e.quadraticCurveTo(a+t*i*.05,r*.42+i*.16,a+t*i*.03,r*.42+i*.26),e.stroke()}}return}J(e,`#2a2230`,n,r);let a=i*.06,o=(n-a*3)/2,s=(r-a*3)/2;for(let t=0;t<2;t++)for(let n=0;n<2;n++)Y(e,a+n*(o+a),a+t*(s+a),o,s,i*.03),e.fillStyle=`#b32532`,e.fill();let c=(t,n)=>{Y(e,t-i*.13,n-i*.05,i*.26,i*.12,i*.05),e.fillStyle=`#fbf8f0`,e.fill(),Y(e,t-i*.15,n-i*.09,i*.3,i*.1,i*.05),e.fillStyle=`#ff8a5c`,e.fill(),e.strokeStyle=`#ffd2bf`,e.lineWidth=i*.012;for(let r=-1;r<=1;r++)e.beginPath(),e.moveTo(t+r*i*.07-i*.02,n-i*.085),e.lineTo(t+r*i*.07+i*.02,n),e.stroke()},l=(t,n,r)=>{X(e,t,n,i*.085,`#1d2b22`),X(e,t,n,i*.065,`#fbf8f0`),X(e,t,n,i*.028,r)};c(a+o/2,a+s*.35),c(a+o/2,a+s*.75),l(a*2+o*1.3,a+s*.32,`#ff6f91`),l(a*2+o*1.7,a+s*.32,`#4fb34f`),l(a*2+o*1.5,a+s*.72,`#ffb000`);for(let t=0;t<4;t++)e.fillStyle=t%2?`#ffc2cf`:`#ffa6ba`,e.beginPath(),e.ellipse(a+o*(.35+t*.1),a*2+s*1.5,i*.07,i*.045,t*.5,0,Math.PI*2),e.fill();X(e,a*2+o*1.5,a*2+s*1.5,i*.07,`#8ccf5a`),X(e,a*2+o*1.47,a*2+s*1.46,i*.025,`#b8e986`)}},rf={id:`butter`,name:`Butter Block`,paint(e,t,n,r){let i=jd(n,r);if(J(e,`#ffe58a`,n,r),t===`py`){e.strokeStyle=`#fff3c4`,e.lineWidth=i*.05,e.lineCap=`round`;for(let t=0;t<3;t++)e.beginPath(),e.arc(n*.5,r*.5,i*(.1+t*.09),.2+t,2.4+t),e.stroke();return}if(t===`ny`)return;let a=e.createLinearGradient(0,r*.45,0,r);a.addColorStop(0,`#eef1f6`),a.addColorStop(1,`#b7bfcc`),e.fillStyle=a,e.beginPath(),e.moveTo(0,r*.5);for(let t=0;t<=8;t++)e.lineTo(t*n/8,r*.5+(t%2?i*.03:0));e.lineTo(n,r),e.lineTo(0,r),e.closePath(),e.fill(),e.fillStyle=`#3b82f6`,e.fillRect(0,r*.68,n,i*.14),(t===`pz`||t===`nz`)&&Z(e,`BUTTER`,n/2,r*.68+i*.07,i*.12,`#ffffff`)}},af={id:`crate`,name:`Fruit Crate`,paint(e,t,n,r){let i=jd(n,r);if(t===`py`){J(e,`#5a3a22`,n,r);let t=new Td(3);for(let a=0;a<14;a++){let a=t.next()*n,o=t.next()*r;X(e,a,o,i*.12,`#ff9f1c`),X(e,a-i*.04,o-i*.04,i*.035,`rgba(255,255,255,0.35)`)}e.fillStyle=`#d9a15e`;for(let t=0;t<3;t++)e.fillRect(0,r*(.05+t*.36),n,r*.16);return}J(e,`#d9a15e`,n,r),e.fillStyle=`#a86e32`;for(let t=1;t<4;t++)e.fillRect(0,t*r/4-i*.012,n,i*.024);e.strokeStyle=`rgba(140,80,30,0.25)`,e.lineWidth=i*.01;for(let t=i*.05;t<r;t+=i*.07)e.beginPath(),e.moveTo(0,t),e.bezierCurveTo(n*.3,t+i*.02,n*.7,t-i*.02,n,t),e.stroke();for(let t of[.06,.94])for(let a=0;a<4;a++)X(e,t*n,(a+.5)*r/4,i*.02,`#6b4423`);(t===`pz`||t===`nz`)&&(Y(e,n*.2,r*.25,n*.6,r*.5,i*.06),e.fillStyle=`#fff8e8`,e.fill(),X(e,n/2,r*.45,i*.13,`#ff9f1c`),e.fillStyle=`#4fb34f`,e.beginPath(),e.ellipse(n/2+i*.06,r*.45-i*.14,i*.06,i*.03,-.5,0,Math.PI*2),e.fill(),Z(e,`FRESH`,n/2,r*.66,i*.1,`#d8343f`))}};function of(e,t,n,r){let i=r*.09,a=i*Math.sqrt(3);for(let r=0,o=0;o<n+i;r++,o+=i*1.5)for(let n=r%2?a/2:0;n<t+a;n+=a){e.beginPath();for(let t=0;t<6;t++){let r=Math.PI/6+t*Math.PI/3;e.lineTo(n+Math.cos(r)*i*.92,o+Math.sin(r)*i*.92)}e.closePath(),e.fillStyle=`#ffcf4d`,e.fill(),e.strokeStyle=`#d18e12`,e.lineWidth=i*.14,e.stroke()}}var sf={id:`honey`,name:`Honeycomb`,paint(e,t,n,r){let i=jd(n,r);if(J(e,`#e89c10`,n,r),of(e,n,r,i),t!==`py`&&t!==`ny`){e.fillStyle=`#f0a412`,e.beginPath(),e.moveTo(0,0);for(let t=0;t<=6;t++){let r=t*n/6,a=i*(.08+t*37%5*.04);e.lineTo(r-i*.04,i*.04),e.quadraticCurveTo(r,a+i*.06,r+i*.04,i*.04)}e.lineTo(n,0),e.closePath(),e.fill()}if(t===`pz`){let t=n*.62,a=r*.55;e.fillStyle=`rgba(255,255,255,0.8)`,e.beginPath(),e.ellipse(t-i*.05,a-i*.1,i*.07,i*.045,-.6,0,Math.PI*2),e.ellipse(t+i*.05,a-i*.1,i*.07,i*.045,.6,0,Math.PI*2),e.fill(),e.fillStyle=`#ffd23f`,e.beginPath(),e.ellipse(t,a,i*.12,i*.085,0,0,Math.PI*2),e.fill(),e.fillStyle=`#2e2a4f`;for(let n of[-.03,.04])e.fillRect(t+n*i,a-i*.08,i*.03,i*.16);X(e,t-i*.1,a-i*.01,i*.015,`#2e2a4f`)}}},cf={id:`milk`,name:`Milk Carton`,paint(e,t,n,r){let i=jd(n,r);if(t===`py`){J(e,`#3b82f6`,n,r),e.strokeStyle=`rgba(255,255,255,0.5)`,e.lineWidth=i*.03,e.beginPath(),e.moveTo(0,r/2),e.lineTo(n,r/2),e.moveTo(0,0),e.lineTo(n/2,r/2),e.lineTo(0,r),e.moveTo(n,0),e.lineTo(n/2,r/2),e.lineTo(n,r),e.stroke();return}J(e,`#ffffff`,n,r);let a=new Td(t.charCodeAt(1)*11);for(let t=0;t<5;t++){e.fillStyle=`#2e2a4f`,e.beginPath();let t=a.next()*n,o=r*.3+a.next()*r*.7;e.ellipse(t,o,i*(.07+a.next()*.06),i*(.05+a.next()*.04),a.next()*3,0,Math.PI*2),e.fill()}t!==`ny`&&(e.fillStyle=`#3b82f6`,e.fillRect(0,0,n,r*.22),(t===`pz`||t===`nz`)&&(Y(e,n*.18,r*.34,n*.64,i*.26,i*.08),e.fillStyle=`#ffffff`,e.fill(),e.strokeStyle=`#3b82f6`,e.lineWidth=i*.025,e.stroke(),Z(e,`MILK`,n/2,r*.34+i*.13,i*.18,`#3b82f6`)))}},lf={id:`jelly`,name:`Jelly Cube`,paint(e,t,n,r){let i=jd(n,r),a=e.createLinearGradient(0,0,n,r);a.addColorStop(0,`#ff7fa3`),a.addColorStop(1,`#e8335f`),e.fillStyle=a,e.fillRect(0,0,n,r);let o=new Td(t.charCodeAt(1)*3);for(let t=0;t<8;t++)X(e,o.next()*n,o.next()*r,i*(.015+o.next()*.025),`rgba(255,220,230,0.5)`);if(e.fillStyle=`rgba(255,255,255,0.45)`,e.beginPath(),e.ellipse(n*.28,r*.22,i*.18,i*.05,-.5,0,Math.PI*2),e.fill(),t===`py`){for(let[t,a,o]of[[.5,.5,.2],[.38,.45,.13],[.62,.45,.13],[.5,.36,.12]])X(e,t*n,a*r,i*o,`#fffaf5`);X(e,n*.52,r*.4,i*.1,`#d81b3c`),X(e,n*.49,r*.37,i*.03,`rgba(255,255,255,0.7)`),e.strokeStyle=`#4f8a2f`,e.lineWidth=i*.02,e.beginPath(),e.moveTo(n*.52,r*.31),e.quadraticCurveTo(n*.58,r*.2,n*.66,r*.18),e.stroke()}}};function uf(e,t,n,r,i){e.save(),e.translate(t,n),e.rotate(i),X(e,0,0,r,`#ff8a00`),X(e,0,0,r*.86,`#fff1c9`),X(e,0,0,r*.78,`#ffb347`),e.strokeStyle=`#fff1c9`,e.lineWidth=r*.08;for(let t=0;t<8;t++){let n=t*Math.PI/4;e.beginPath(),e.moveTo(0,0),e.lineTo(Math.cos(n)*r*.78,Math.sin(n)*r*.78),e.stroke()}e.restore()}var df={id:`juice`,name:`Juice Box`,paint(e,t,n,r){let i=jd(n,r);if(t===`py`||t===`ny`){J(e,t===`py`?`#fff4dc`:`#ffb347`,n,r);for(let[t,a]of[[.2,.62],[.5,.8],[.82,.55],[.35,.3]])e.globalAlpha=.18,uf(e,t*n,a*r,i*.08,t*3),e.globalAlpha=1;e.strokeStyle=`rgba(160,110,40,0.45)`,e.lineWidth=i*.012;for(let t of[0,1]){let i=t?n:0,a=t?-1:1;e.beginPath(),e.moveTo(i,0),e.lineTo(i+a*n*.22,r/2),e.lineTo(i,r),e.stroke()}if(e.fillStyle=`rgba(160,110,40,0.2)`,e.fillRect(0,r*.46,n,i*.08),Q(e,r*.46,0,n,i*.01,`rgba(160,110,40,0.5)`),t===`ny`){Y(e,n*.3,r*.66,n*.4,r*.16,i*.02),e.fillStyle=`#ffffff`,e.fill();for(let t=0;t<18;t++)_f(e,n*.33+t*n*.019,r*.69,r*.79,t%3?i*.004:i*.009,`#2e2a4f`);return}X(e,n*.7,r*.3,i*.09,`#d9dde6`),X(e,n*.7,r*.3,i*.06,`#b9bfcc`),X(e,n*.7,r*.3,i*.035,`#5a4630`),e.save(),e.translate(n*.34,r*.7),e.rotate(-Math.PI/4),Y(e,-i*.28,-i*.045,i*.56,i*.09,i*.04),e.fillStyle=`rgba(255,255,255,0.85)`,e.fill(),e.strokeStyle=`#ff5d73`,e.lineWidth=i*.035,e.lineCap=`round`,e.beginPath(),e.moveTo(-i*.25,0),e.lineTo(i*.25,0),e.stroke();for(let t of[-.18,.18])Cf(e,t*i,0,i*.06,Math.PI/2);e.restore();return}if(J(e,`#ff9f1c`,n,r),e.fillStyle=`#ffd166`,e.fillRect(0,r*.78,n,r*.22),Q(e,i*.05,0,n,i*.02,`rgba(160,80,0,0.35)`),t===`px`){for(let[t,a,o,s]of[[.25,.3,.13,.3],[.72,.22,.1,1.2],[.6,.58,.14,2.1],[.2,.66,.09,.8]])uf(e,t*n,a*r,i*o,s);Od(e,n*.4,r*.45,i*.17,`#d8343f`,14,.78),Z(e,`100%`,n*.4,r*.45,i*.08,`#ffffff`),Z(e,`FRESH!`,n/2,r*.89,i*.11,`#d8343f`)}if(t===`nx`){Y(e,n*.18,r*.16,n*.64,r*.56,i*.03),e.fillStyle=`#ffffff`,e.fill(),Z(e,`NUTRITION`,n/2,r*.23,i*.07,`#2e2a4f`);for(let t=0;t<6;t++){let a=r*(.31+t*.065);Q(e,a+i*.03,n*.22,n*.78,i*.006,`#d6d0ea`),Q(e,a,n*.23,n*(.42+t*7%4*.04),i*.018,`#6f6a8a`),Q(e,a,n*.66,n*.76,i*.018,`#6f6a8a`)}uf(e,n*.5,r*.89,i*.07,0)}if(t===`pz`||t===`nz`){let t=n/2,a=r*.42;X(e,t,a,i*.22,`#ffb347`),X(e,t,a,i*.19,`#ffe0a3`),e.strokeStyle=`#ffb347`,e.lineWidth=i*.02;for(let n=0;n<8;n++){let r=n*Math.PI/4;e.beginPath(),e.moveTo(t,a),e.lineTo(t+Math.cos(r)*i*.19,a+Math.sin(r)*i*.19),e.stroke()}e.fillStyle=`#4fb34f`,e.beginPath(),e.ellipse(t+i*.1,a-i*.24,i*.09,i*.045,-.4,0,Math.PI*2),e.fill(),Z(e,`JUICE`,t,r*.88,i*.13,`#d8343f`)}}},ff={id:`choco`,name:`Chocolate Block`,paint(e,t,n,r){let i=jd(n,r);J(e,`#5a321f`,n,r);let a=n/3,o=r/3;for(let t=0;t<3;t++)for(let n=0;n<3;n++){let r=n*a,s=t*o,c=i*.03;e.fillStyle=`#8a5436`,e.fillRect(r+c*.5,s+c*.5,a-c,o-c),e.fillStyle=`#4a2a19`,e.fillRect(r+c*1.5,s+c*1.5,a-c*2,o-c*2),e.fillStyle=`#6b3e26`,e.fillRect(r+c*1.5,s+c*1.5,a-c*2.6,o-c*2.6)}t!==`py`&&t!==`ny`&&(e.fillStyle=`#ffd35c`,e.fillRect(0,r*.42,n,i*.05),e.fillStyle=`#d8343f`,e.fillRect(0,r*.46,n,r*.54),(t===`pz`||t===`nz`)&&Z(e,`CHOCO`,n/2,r*.72,i*.17,`#fff3c4`))}},pf={id:`giantmelon`,name:`Giant Watermelon`,paint(e,t,n,r){let i=jd(n,r);if(t===`py`){J(e,`#2f8f4a`,n,r),Y(e,i*.05,i*.05,n-i*.1,r-i*.1,i*.05),e.fillStyle=`#e9f7d8`,e.fill(),Y(e,i*.09,i*.09,n-i*.18,r-i*.18,i*.05),e.fillStyle=`#ff4d5e`,e.fill();let t=new Td(11);for(let a=0;a<18;a++)Xd(e,n*(.18+t.next()*.64),r*(.18+t.next()*.64),i*.03,t.next()*3);return}if(J(e,`#45b764`,n,r),Yd(e,n,r,i,`#1f7a3f`),t===`pz`){let t=n/2,a=r*.45;e.fillStyle=`#3b82f6`;for(let n of[-1,1])e.beginPath(),e.moveTo(t+n*i*.04,a),e.lineTo(t+n*i*.14,a+i*.36),e.lineTo(t+n*i*.06,a+i*.3),e.lineTo(t,a+i*.36),e.closePath(),e.fill();Od(e,t,a,i*.2,`#ffc53d`,12,.8),X(e,t,a,i*.13,`#ffe08a`),Z(e,`1st`,t,a,i*.11,`#b8860b`)}}};function mf(e,t,n,r){let i=t.length;e.beginPath();for(let a=0;a<i;a++){let o=t[n===`nz`?i-1-a:a];e.rect(a,r-o,1,o)}e.clip()}var hf=(e,t,n)=>e[t===`nz`?e.length-1-n:n],gf=(e,t)=>n=>e===`nz`?t-n:n;function _f(e,t,n,r,i,a){e.strokeStyle=a,e.lineWidth=i,e.beginPath(),e.moveTo(t,n),e.lineTo(t,r),e.stroke()}function Q(e,t,n,r,i,a){e.strokeStyle=a,e.lineWidth=i,e.beginPath(),e.moveTo(n,t),e.lineTo(r,t),e.stroke()}function vf(e,t,n,r,i,a,o){let s=e.createLinearGradient(0,n,0,n+i);s.addColorStop(0,a),s.addColorStop(1,o),e.fillStyle=s,e.fillRect(t,n,r,i)}function yf(e,t,n,r,i,a=.25,o=.35,s=.14){let c=e.createLinearGradient(t,0,t+r,0);c.addColorStop(Math.max(0,a-s),`rgba(255,255,255,0)`),c.addColorStop(a,`rgba(255,255,255,${o})`),c.addColorStop(Math.min(1,a+s),`rgba(255,255,255,0)`),e.fillStyle=c,e.fillRect(t,n,r,i)}function bf(e,t,n,r,i,a,o,s=!1){let c=new Td(o);e.save(),e.beginPath(),e.rect(t,n,r,i),e.clip(),e.strokeStyle=a,e.lineWidth=.022;let l=s?i:r,u=s?r:i;for(let r=.05;r<u;r+=.08+c.next()*.1){let i=.015+c.next()*.035,a=c.next()*6,o=1.2+c.next()*2;e.beginPath();for(let c=-.1;c<=l+.1;c+=.08){let l=r+Math.sin(c*o+a)*i;s?e.lineTo(t+l,n+c):e.lineTo(t+c,n+l)}e.stroke()}let d=Math.max(1,Math.round(r*i/5));for(let a=0;a<d;a++){let a=t+c.next()*r,o=n+c.next()*i;for(let t of[.04,.09])e.beginPath(),e.ellipse(a,o,s?t:t*2.6,s?t*2.6:t,0,0,Math.PI*2),e.stroke()}e.restore()}function xf(e,t,n,r,i){X(e,t+r*.15,n+r*.25,r,`rgba(0,0,0,0.22)`),X(e,t,n,r,i),X(e,t-r*.32,n-r*.32,r*.32,`rgba(255,255,255,0.55)`)}function Sf(e,t,n,r,i,a,o,s){e.save(),e.translate(t+r/2,n+i/2),e.rotate(a),e.translate(-r/2,-i/2),e.fillStyle=`rgba(0,0,0,0.18)`,e.fillRect(.04,.05,r,i),e.fillStyle=o,e.fillRect(0,0,r,i),s?.(),e.restore()}function Cf(e,t,n,r,i){e.save(),e.translate(t,n),e.rotate(i),e.fillStyle=`rgba(255,255,240,0.6)`,e.fillRect(-r/2,-.06,r,.12),e.restore()}function wf(e,t,n,r,i){e.fillStyle=i,e.beginPath(),e.moveTo(t,n+r*.9),e.bezierCurveTo(t-r*1.35,n+r*.05,t-r*.85,n-r*1.05,t,n-r*.35),e.bezierCurveTo(t+r*.85,n-r*1.05,t+r*1.35,n+r*.05,t,n+r*.9),e.fill()}function Tf(e,t,n,r,i,a=!0){let o=a?e.createLinearGradient(t,0,t+r,0):e.createLinearGradient(0,n,0,n+i);o.addColorStop(0,`#7f8898`),o.addColorStop(.35,`#ffffff`),o.addColorStop(.55,`#cfd5df`),o.addColorStop(1,`#6f7888`),Y(e,t,n,r,i,Math.min(r,i)/2),e.fillStyle=o,e.fill()}function Ef(e,t,n,r,i,a,o,s=1){let c=i/a,l=r/s;e.fillStyle=o;for(let r=0;r<a;r++)for(let i=0;i<s;i++)Y(e,t+i*l+l*.06,n+r*c+c*.25,l*.88,c*.5,c*.25),e.fill()}function Df(e,t,n,r,i){e.strokeStyle=i,e.lineWidth=r*.16,e.lineCap=`round`;for(let i=0;i<6;i++){let a=i*Math.PI/3+Math.PI/2;e.beginPath(),e.moveTo(t,n),e.lineTo(t+Math.cos(a)*r,n+Math.sin(a)*r),e.stroke();let o=t+Math.cos(a)*r*.55,s=n+Math.sin(a)*r*.55;for(let t of[-.8,.8])e.beginPath(),e.moveTo(o,s),e.lineTo(o+Math.cos(a+t)*r*.32,s+Math.sin(a+t)*r*.32),e.stroke()}}function Of(e,t,n,r,i,a,o){e.save(),e.translate(t,n),e.rotate(a),e.fillStyle=o,e.beginPath(),e.moveTo(0,0),e.quadraticCurveTo(r*.5,-i,r,0),e.quadraticCurveTo(r*.5,i,0,0),e.fill(),e.strokeStyle=`rgba(255,255,255,0.35)`,e.lineWidth=i*.18,e.beginPath(),e.moveTo(r*.1,0),e.lineTo(r*.85,0),e.stroke(),e.restore()}function kf(e,t,n,r,i=`#d9774b`){X(e,t+r*.12,n+r*.16,r,`rgba(0,0,0,0.2)`),X(e,t,n,r,i),X(e,t,n,r*.8,`#5b3a22`);for(let i=0;i<8;i++){let a=i/8*Math.PI*2+.3;Of(e,t,n,r*(i%2?1.05:1.25),r*.3,a,i%2?`#3fae5f`:`#2f9a4f`)}X(e,t,n,r*.16,`#57c46f`)}function Af(e,t,n,r,i,a,o){e.save(),e.translate(n,r),e.rotate(o),Z(e,t,i*.07,i*.09,i,`rgba(0,0,0,0.25)`),Z(e,t,0,0,i,a),e.restore()}function jf(e,t,n,r){e.fillStyle=`#ff3b5c`,e.beginPath(),e.moveTo(t,n+r),e.bezierCurveTo(t-r*1.25,n+r*.2,t-r*.95,n-r*.8,t,n-r*.6),e.bezierCurveTo(t+r*.95,n-r*.8,t+r*1.25,n+r*.2,t,n+r),e.fill();for(let[i,a]of[[-.4,-.2],[.35,-.25],[0,.1],[-.3,.35],[.3,.3],[0,.6]])X(e,t+i*r,n+a*r,r*.07,`#ffe08a`);for(let i=0;i<5;i++)Of(e,t,n-r*.62,r*.55,r*.2,-Math.PI/2+(i-2)*.55,`#3fae5f`)}var Mf=`#c3ecdd`,Nf=`#8fcbb6`,Pf=`#5d8c7e`;function Ff(e,t,n,r,i,a){Y(e,t,n,r,i,a),e.fillStyle=Mf,e.fill(),e.save(),Y(e,t,n,r,i,a),e.clip();let o=e.createLinearGradient(t,0,t+r,0);o.addColorStop(0,`rgba(255,255,255,0.1)`),o.addColorStop(.16,`rgba(255,255,255,0.6)`),o.addColorStop(.3,`rgba(255,255,255,0)`),o.addColorStop(.8,`rgba(40,110,90,0)`),o.addColorStop(1,`rgba(40,110,90,0.25)`),e.fillStyle=o,e.fillRect(t,n,r,i),e.restore(),e.strokeStyle=Nf,e.lineWidth=.05,Y(e,t,n,r,i,a),e.stroke()}function If(e,t,n){let r=t*.8,i=n*.22;X(e,r,i,n*.11,`#ffb000`),e.strokeStyle=`#ffb000`,e.lineWidth=.025,e.lineCap=`round`;for(let t=0;t<8;t++){let a=t*Math.PI/4;e.beginPath(),e.moveTo(r+Math.cos(a)*n*.15,i+Math.sin(a)*n*.15),e.lineTo(r+Math.cos(a)*n*.21,i+Math.sin(a)*n*.21),e.stroke()}e.fillStyle=`#ff8fa3`,e.fillRect(t*.16,n*.5,t*.36,n*.3),e.fillStyle=`#d8343f`,e.beginPath(),e.moveTo(t*.1,n*.52),e.lineTo(t*.34,n*.28),e.lineTo(t*.58,n*.52),e.fill(),e.fillStyle=`#6b4423`,e.fillRect(t*.3,n*.64,t*.08,n*.16),e.fillStyle=`#bfe3ff`,e.fillRect(t*.42,n*.58,t*.07,n*.08),e.strokeStyle=`#2fbf6f`,e.lineWidth=.045,e.beginPath();for(let r=0;r<=1.001;r+=.1)e.lineTo(t*(.04+r*.92),n*.85+(Math.round(r*10)%2?-.025:.025));e.stroke();let a=t*.73;X(e,a,n*.5,n*.06,`#3b82f6`),e.strokeStyle=`#3b82f6`,e.lineWidth=.025,e.beginPath(),e.moveTo(a,n*.56),e.lineTo(a,n*.7),e.moveTo(a-t*.07,n*.6),e.lineTo(a+t*.07,n*.6),e.moveTo(a,n*.7),e.lineTo(a-t*.05,n*.79),e.moveTo(a,n*.7),e.lineTo(a+t*.05,n*.79),e.stroke()}function Lf(e,t,n){let r=.07,i=n-.3;vf(e,r,r,t-2*r,i,`#bfe3ff`,`#e8f5ff`);let a=t/2,o=r+i*.6,s=i*.3;for(let t of[-1,1])e.fillStyle=`#ffa94d`,e.beginPath(),e.moveTo(a+t*s*.9,o-s*.2),e.lineTo(a+t*s*.75,o-s*1.25),e.lineTo(a+t*s*.2,o-s*.8),e.fill();X(e,a,o,s,`#ffa94d`),e.strokeStyle=`#e07b22`,e.lineWidth=s*.12;for(let t of[-.25,0,.25])e.beginPath(),e.moveTo(a+t*s,o-s*.95),e.lineTo(a+t*s,o-s*.6),e.stroke();X(e,a-s*.38,o-s*.05,s*.12,`#2e2a4f`),X(e,a+s*.38,o-s*.05,s*.12,`#2e2a4f`),X(e,a,o+s*.25,s*.1,`#ff6f91`),e.strokeStyle=`#2e2a4f`,e.lineWidth=.015;for(let t of[-1,1])for(let n of[.2,.36])e.beginPath(),e.moveTo(a+t*s*.35,o+s*n),e.lineTo(a+t*s*1.15,o+s*(n-.05+n*.2)),e.stroke();Q(e,n-.13,t*.25,t*.75,.03,`#9b93b8`)}function Rf(e,t){Z(e,`LIST`,t/2,.17,.17,`#d8343f`),[.55,.42,.6,.36,.5].forEach((t,n)=>{let r=.4+n*.16;e.strokeStyle=`#8a7d4a`,e.lineWidth=.02,e.strokeRect(.1,r-.045,.09,.09),e.strokeStyle=`#3b5bdb`,e.lineWidth=.028,e.beginPath();for(let i=0;i<=t;i+=.05)e.lineTo(.27+i,r+Math.sin(i*40+n)*.015);e.stroke(),n%2==0&&(e.strokeStyle=`#d8343f`,e.lineWidth=.03,e.beginPath(),e.moveTo(.1,r),e.lineTo(.14,r+.05),e.lineTo(.22,r-.08),e.stroke())})}function zf(e,t){Z(e,`ENERGY`,t/2,.16,.17,`#2e2a4f`);let n=[`#12a150`,`#58b947`,`#b5d334`,`#ffe53b`,`#fcb614`,`#f36f21`,`#e8212a`],r=.14;n.forEach((t,n)=>{let i=.32+n*.185,a=.28+n*.08;e.fillStyle=t,e.beginPath(),e.moveTo(.1,i),e.lineTo(.1+a,i),e.lineTo(.17+a,i+r/2),e.lineTo(.1+a,i+r),e.lineTo(.1,i+r),e.fill()}),e.fillStyle=`#2e2a4f`,e.beginPath(),e.moveTo(t-.08,.3),e.lineTo(t-.46,.3),e.lineTo(t-.56,.39),e.lineTo(t-.46,.48),e.lineTo(t-.08,.48),e.fill(),Z(e,`A+`,t-.28,.39,.15,`#ffffff`);for(let n=0;n<3;n++)Q(e,1.74+n*.1,.12,t-.12-n*.25,.035,`#c9c6d6`)}function Bf(e,t,n,r){Tf(e,t-.1*r,n-.06*r,.2*r,.1*r,!1),e.strokeStyle=`#d8343f`,e.lineWidth=.04*r,e.beginPath(),e.arc(t,n+.1*r,.07*r,Math.PI,0),e.stroke();let i=()=>{e.beginPath(),e.moveTo(t-.28*r,n+.3*r),e.lineTo(t-.3*r,n+1*r),e.quadraticCurveTo(t-.3*r,n+1.32*r,t,n+1.32*r),e.quadraticCurveTo(t+.3*r,n+1.32*r,t+.3*r,n+1*r),e.lineTo(t+.3*r,n+.78*r),e.quadraticCurveTo(t+.56*r,n+.72*r,t+.5*r,n+.55*r),e.quadraticCurveTo(t+.44*r,n+.42*r,t+.3*r,n+.52*r),e.lineTo(t+.28*r,n+.3*r),e.closePath()};e.save(),e.translate(.04*r,.05*r),i(),e.fillStyle=`rgba(0,0,0,0.2)`,e.fill(),e.restore(),i(),e.fillStyle=`#ff5d73`,e.fill(),e.save(),i(),e.clip();for(let i=n+.4*r;i<n+1.35*r;i+=.18*r)for(let n=t-.3*r+(i/(.18*r)%2?.09*r:0);n<t+.6*r;n+=.18*r)wf(e,n,i,.045*r,`#ffd6de`);e.restore(),Y(e,t-.32*r,n+.1*r,.64*r,.24*r,.06*r),e.fillStyle=`#fff4f6`,e.fill()}var Vf={id:`fridge`,name:`Fridge`,shape:{dims:[3,6,3]},paint(e,t,n,r){if(J(e,Mf,n,r),t===`pz`){J(e,Nf,n,r),Ff(e,.06,.06,n-.12,1.88,.3),Ff(e,.06,2.06,n-.12,r-2.64,.3),Y(e,.16,r-.5,n-.32,.32,.08),e.fillStyle=Pf,e.fill();for(let t=.32;t<n-.28;t+=.15)_f(e,t,r-.44,r-.24,.05,`#3f6a5e`);e.fillStyle=`#39434a`,e.fillRect(.22,r-.15,.32,.15),e.fillRect(n-.54,r-.15,.32,.15),Tf(e,n-.38,1.05,.13,.7),Tf(e,n-.38,2.3,.13,1.5),Tf(e,.4,.34,1.6,.4,!1),Z(e,`FROSTY`,1.2,.54,.26,`#476a86`),Df(e,.62,1.28,.24,`#ffffff`),Df(e,1.12,1.46,.13,`#ffffff`),Sf(e,.24,2.32,1.36,1.02,-.06,`#ffffff`,()=>If(e,1.36,1.02)),wf(e,.92,2.36,.13,`#ff3b5c`),X(e,.88,2.31,.035,`rgba(255,255,255,0.6)`),Af(e,`A`,1.9,2.62,.5,`#ff4d4d`,-.18),Af(e,`B`,2.3,2.95,.5,`#3b82f6`,.14),Af(e,`C`,1.94,3.3,.5,`#ffb000`,.08),Sf(e,.26,3.66,1,1.18,-.1,`#ffffff`,()=>Lf(e,1,1.18)),jf(e,.76,3.7,.14),Sf(e,1.46,3.76,.96,1.2,.07,`#fff3a6`,()=>Rf(e,.96)),xf(e,1.95,3.8,.1,`#2fbf6f`),xf(e,.55,5.12,.15,`#ff9f1c`),Of(e,.6,4.98,.16,.06,-.7,`#3fae5f`),Od(e,1.1,5.16,.14,`#9b5cff`);return}if(t===`px`||t===`nx`){let i=t===`px`?0:n-.18;yf(e,0,0,n,r,t===`px`?.3:.7,.45,.2);let a=e.createLinearGradient(0,0,n,0);a.addColorStop(t===`px`?.7:.3,`rgba(40,110,90,0)`),a.addColorStop(+(t===`px`),`rgba(40,110,90,0.22)`),e.fillStyle=a,e.fillRect(0,0,n,r),e.fillStyle=Nf,e.fillRect(i,0,.18,r-.5),Q(e,2,i,i+.18,.06,Pf),e.fillStyle=Nf,e.fillRect(0,r-.5,n,.5),e.fillStyle=`#39434a`,e.fillRect(.22,r-.15,.32,.15),e.fillRect(n-.54,r-.15,.32,.15),Ef(e,t===`px`?n-1.2:.2,r-.46,1,.3,2,Pf,4),t===`px`?(Sf(e,.72,1.25,1.3,2.05,.04,`#ffffff`,()=>zf(e,1.3)),Cf(e,.78,1.28,.3,-.6),Cf(e,1.98,1.32,.3,.6)):(Bf(e,1.3,.95,1),Sf(e,.35,3.05,1.35,1.5,.05,`#ffffff`,()=>{e.fillStyle=`#ff5d73`,e.fillRect(0,0,1.35,.3),Z(e,`JUNE`,.675,.15,.18,`#ffffff`);for(let t=0;t<4;t++)for(let n=0;n<5;n++)e.strokeStyle=`#d6d0ea`,e.lineWidth=.02,e.strokeRect(.1+n*.23,.4+t*.26,.23,.26);e.strokeStyle=`#ff3b5c`,e.lineWidth=.035,e.beginPath(),e.arc(.905,.79,.12,0,Math.PI*2),e.stroke(),wf(e,.1+1.5*.23,1.05,.07,`#ff6f91`)}),xf(e,1.03,3.1,.09,`#3b82f6`));return}if(t===`py`){yf(e,0,0,n,r,.3,.35,.25),Y(e,.2,.12,n-.4,.3,.08),e.fillStyle=Nf,e.fill();for(let t=.35;t<n-.3;t+=.15)_f(e,t,.18,.36,.05,Pf);kf(e,.85,1.3,.55),e.save(),e.translate(2.05,1.9),e.rotate(-.25),e.fillStyle=`rgba(0,0,0,0.2)`,e.fillRect(-.5,-.2,1.1,.5),e.fillStyle=`#ffd23f`,e.fillRect(-.55,-.25,1.1,.5),e.fillStyle=`#ff5d73`,e.fillRect(-.55,-.25,.28,.5),Q(e,0,-.55,.55,.03,`rgba(120,80,0,0.4)`),e.restore(),Q(e,r-.1,0,n,.05,Nf);return}if(t===`nz`){J(e,`#739e91`,n,r);for(let t=.3;t<=n-.3;t+=.14)_f(e,t,.45,4.35,.025,`#3d4f4a`);e.strokeStyle=`#1f2a28`,e.lineWidth=.08,e.lineCap=`round`,e.beginPath();for(let t=0,r=.6;r<=4.05;t++,r+=.3){let i=t%2?n-.4:.4,a=t%2?.4:n-.4;t===0&&e.moveTo(i,r),e.lineTo(a,r),r+.3<=4.05&&e.arc(a,r+.15,.15,-Math.PI/2,Math.PI/2,a<n/2)}e.stroke(),e.strokeStyle=`#c77b4a`,e.lineWidth=.06,e.beginPath(),e.moveTo(.95,4.85),e.lineTo(.95,4.45),e.lineTo(.4,4.3),e.stroke(),e.fillStyle=`#2a3533`,e.beginPath(),e.ellipse(.95,5.25,.55,.42,0,0,Math.PI*2),e.fill(),e.fillStyle=`rgba(255,255,255,0.18)`,e.beginPath(),e.ellipse(.8,5.08,.25,.12,-.3,0,Math.PI*2),e.fill(),Sf(e,1.62,4.72,1.12,.72,0,`#ffffff`,()=>{Z(e,`FR-36`,.56,.16,.16,`#2e2a4f`);for(let t=0;t<16;t++)_f(e,.14+t*.053,.32,.6,t%3?.02:.04,`#2e2a4f`)}),e.fillStyle=`#ffd23f`,e.beginPath(),e.moveTo(2.4,.12),e.lineTo(2.72,.66),e.lineTo(2.08,.66),e.fill(),Z(e,`!`,2.4,.45,.3,`#2e2a4f`),e.strokeStyle=`#1f2a28`,e.lineWidth=.07,e.beginPath(),e.moveTo(2.2,5.5),e.bezierCurveTo(2.6,5.6,2.3,5.9,2.7,5.98),e.stroke();return}J(e,`#739e91`,n,r);for(let[t,i]of[[.35,.35],[n-.35,.35],[.35,r-.35],[n-.35,r-.35]])xf(e,t,i,.2,`#39434a`);Ef(e,.8,.15,n-1.6,.4,2,`#4f7368`,3)}},Hf=`#dcb47e`,Uf=`#c8323c`,Wf=`#3a2a25`;function Gf(e,t,n,r){J(e,Hf,t,n);let i=new Td(r);for(let r=0;r<t*n*40;r++)X(e,i.next()*t,i.next()*n,.008+i.next()*.012,i.next()<.5?`rgba(140,95,45,0.28)`:`rgba(255,240,210,0.35)`)}function Kf(e,t,n,r,i,a,o,s=-Math.PI/2){e.save(),e.font=`800 ${a*100}px ${Dd}`;let c=[...t].map(t=>e.measureText(t).width/100);e.restore(),e.font=`800 ${a}px ${Dd}`,e.fillStyle=o,e.textAlign=`center`,e.textBaseline=`middle`;let l=s-c.reduce((e,t)=>e+t,0)/i/2;[...t].forEach((t,o)=>{let s=c[o]/i;l+=s/2,e.save(),e.translate(n+Math.cos(l)*i,r+Math.sin(l)*i),e.rotate(l+Math.PI/2),e.fillText(t,0,a*.06),e.restore(),l+=s/2})}function qf(e,t,n,r,i=0){e.save(),e.translate(t,n),e.rotate(i),e.fillStyle=`#ffd966`,e.beginPath(),e.moveTo(-r*.45,-r*.38),e.lineTo(r*.45,-r*.38),e.lineTo(0,r*.55),e.closePath(),e.fill(),Y(e,-r*.52,-r*.55,r*1.04,r*.22,r*.1),e.fillStyle=`#c98a3e`,e.fill();for(let[t,n]of[[-.16,-.18],[.16,-.14],[0,.12]])X(e,t*r,n*r,r*.09,Uf);e.restore()}function Jf(e,t,n,r){e.save(),e.translate(t,n),e.scale(r,r);for(let t of[-.42,.45])X(e,t,.3,.2,Wf),X(e,t,.3,.08,Hf);e.fillStyle=Uf,e.beginPath(),e.moveTo(-.62,.22),e.quadraticCurveTo(-.6,-.08,-.25,-.05),e.lineTo(.2,-.05),e.lineTo(.38,-.5),e.lineTo(.5,-.5),e.lineTo(.62,.22),e.closePath(),e.fill(),Q(e,-.52,.3,.56,.07,Wf),e.fillStyle=Wf,e.fillRect(-.6,-.42,.42,.34),e.fillStyle=Hf,e.fillRect(-.55,-.37,.32,.24);for(let t of[0,1,2])Q(e,-.2+t*.1,-1.05+t*.08,-.75,.04,Uf);e.restore()}function Yf(e,t,n,r,i){for(let a=0;a<r;a++)X(e,t+a*i,n,.07,`#8a5a2c`),X(e,t+a*i-.015,n-.015,.045,`#5a3a1c`)}function Xf(e,t,n,r){e.strokeStyle=Wf,e.fillStyle=Wf,e.lineWidth=r*.16,e.lineCap=`round`;for(let i=0;i<3;i++){let a=-Math.PI/2+i*2*Math.PI/3+.35,o=a+2*Math.PI/3-.7;e.beginPath(),e.arc(t,n,r,a,o),e.stroke();let s=t+Math.cos(o)*r,c=n+Math.sin(o)*r,l=o+Math.PI/2;e.beginPath(),e.moveTo(s+Math.cos(l)*r*.35,c+Math.sin(l)*r*.35),e.lineTo(s+Math.cos(o)*r*.3,c+Math.sin(o)*r*.3),e.lineTo(s-Math.cos(o)*r*.3,c-Math.sin(o)*r*.3),e.fill()}}function Zf(e,t,n,r){e.save(),e.translate(t,n),e.scale(r,r),X(e,0,0,.72,`#ffd2a8`);for(let[t,n,r]of[[-.42,-.98,.32],[0,-1.15,.38],[.42,-.98,.32]])X(e,t,n,r,`#ffffff`);Y(e,-.55,-.98,1.1,.36,.08),e.fillStyle=`#ffffff`,e.fill(),Q(e,-.66,-.52,.52,.05,`#e6e1ef`),e.strokeStyle=Wf,e.lineWidth=.07,e.lineCap=`round`;for(let t of[-1,1])e.beginPath(),e.arc(t*.26,-.12,.1,Math.PI*1.1,Math.PI*1.9),e.stroke();X(e,-.46,.1,.12,`rgba(255,110,110,0.45)`),X(e,.46,.1,.12,`rgba(255,110,110,0.45)`),e.beginPath(),e.arc(0,.34,.16,.15*Math.PI,.85*Math.PI),e.stroke(),e.fillStyle=`#5a3a22`;for(let t of[-1,1])e.beginPath(),e.moveTo(0,.2),e.bezierCurveTo(t*.18,.04,t*.5,.1,t*.62,-.02),e.bezierCurveTo(t*.64,.22,t*.32,.36,0,.28),e.fill();X(e,0,.08,.12,`#ffb38a`),e.restore()}var Qf={id:`pizza`,name:`Pizza Box`,shape:{dims:[6,2,6]},paint(e,t,n,r){if(Gf(e,n,r,t.charCodeAt(0)+t.charCodeAt(1)),t===`py`){let t=(n-.4)/20;e.fillStyle=Uf;for(let i=0;i<20;i++)i%2||(e.fillRect(.2+i*t,.2,t,t),e.fillRect(.2+(19-i)*t,r-.2-t,t,t),e.fillRect(.2,.2+(19-i)*t,t,t),e.fillRect(n-.2-t,.2+i*t,t,t));e.strokeStyle=Uf,e.lineWidth=.035,e.strokeRect(.2+t+.08,.2+t+.08,n-.4-2*t-.16,r-.4-2*t-.16);let i=n/2,a=r/2-.05;X(e,i,a,2.12,Uf),X(e,i,a,1.62,`#fff1d6`),Kf(e,`★ HOT & FRESH ★`,i,a,1.87,.3,`#fff1d6`),Zf(e,i,a+.25,.95);let o=a+1.5;e.fillStyle=`#9e1f2a`;for(let t of[-1,1])e.beginPath(),e.moveTo(i+t*1.5,o-.18),e.lineTo(i+t*2.2,o-.12),e.lineTo(i+t*1.95,o+.12),e.lineTo(i+t*2.2,o+.38),e.lineTo(i+t*1.5,o+.34),e.fill();Y(e,i-1.65,o-.34,3.3,.62,.06),e.fillStyle=Uf,e.fill(),Z(e,`PIZZA`,i,o-.03,.5,`#fff1d6`);for(let[t,i,a]of[[.95,.95,-.4],[n-.95,.95,.4],[.95,r-.95,-2.6],[n-.95,r-.95,2.6]])qf(e,t,i,.55,a);Z(e,`CALL 555-0199`,i,.78,.2,Wf),Z(e,`HOT · FAST · TASTY`,i,r-.78,.2,Wf);return}if(t===`pz`){e.fillStyle=`rgba(120,80,30,0.2)`,e.fillRect(0,.62,n,.07),Q(e,.62,0,n,.03,`rgba(120,80,30,0.5)`),e.fillStyle=`#6b451f`,e.beginPath(),e.arc(n/2,.62,.3,0,Math.PI),e.fill(),e.fillStyle=Uf,e.beginPath(),e.moveTo(n/2-.12,.42),e.lineTo(n/2+.12,.42),e.lineTo(n/2,.24),e.fill(),Z(e,`PIZZA`,n/2,1.34,.62,Uf),qf(e,1.25,1.28,.55,-.3),qf(e,n-1.25,1.28,.55,.3),Yf(e,.3,1.3,2,.22),Yf(e,n-.52,1.3,2,.22);return}if(t===`px`||t===`nx`){Q(e,.62,0,n,.03,`rgba(120,80,30,0.45)`);let r=t===`nx`,i=r?n-1.15:1.15;Od(e,i,1.1,.78,Uf,12,.72),Z(e,`HOT!`,i,1.1,.34,`#fff1d6`),Jf(e,r?1.35:n-1.35,1.12,.62),Z(e,`555-0199`,n/2,1.3,.3,Wf),Z(e,`FREE DELIVERY`,n/2,.36,.17,Uf);return}if(t===`nz`){for(let t=.1;t<n;t+=.3)Q(e,.45,t,t+.15,.03,`rgba(120,80,30,0.5)`);Z(e,`THANK YOU!`,n/2,1.22,.55,Uf),wf(e,1,1.2,.2,Uf),wf(e,n-1,1.2,.2,Uf);return}let i=new Td(4);for(let t=0;t<3;t++){let t=1+i.next()*4,n=1+i.next()*4;for(let r=0;r<5;r++)X(e,t+(i.next()-.5)*.4,n+(i.next()-.5)*.4,.15+i.next()*.2,`rgba(150,90,30,0.12)`)}Xf(e,n/2,r/2-.3,.5),Z(e,`THIS SIDE DOWN`,n/2,r/2+.6,.26,Wf)}},$f=[4,2,2,2,2],ep=`#35a99b`,tp=`#4fc4b6`,np=`#23796f`;function rp(e,t,n,r,i,a,o=tp){Y(e,t,n,r,i,a),e.fillStyle=o,e.fill(),e.save(),Y(e,t,n,r,i,a),e.clip();let s=e.createLinearGradient(0,n,0,n+i);s.addColorStop(0,`rgba(255,255,255,0.28)`),s.addColorStop(.35,`rgba(255,255,255,0)`),s.addColorStop(1,`rgba(0,60,50,0.22)`),e.fillStyle=s,e.fillRect(t,n,r,i),e.restore(),e.strokeStyle=np,e.lineWidth=.05,Y(e,t,n,r,i,a),e.stroke()}function ip(e,t,n,r){e.fillStyle=`#6b4423`,e.beginPath(),e.moveTo(t,n),e.lineTo(t+.22,n),e.lineTo(t+.17,n+r),e.lineTo(t+.05,n+r),e.fill(),e.fillStyle=`rgba(255,255,255,0.25)`,e.fillRect(t+.05,n,.04,r*.8)}function ap(e,t,n,r,i){let a=[];for(let e=0;e<3;e++)for(let o=0;o<(e%2?2:3);o++)a.push([t+r*((e%2?.25:0)+o*.5),n+i*(.2+e*.3)]);e.strokeStyle=`rgba(0,60,50,0.3)`,e.lineWidth=.025;for(let[t,n]of a)for(let[i,o]of a){let a=Math.hypot(i-t,o-n);i>t&&a<r*.45&&(e.beginPath(),e.moveTo(t,n),e.lineTo(i,o),e.stroke())}for(let[t,n]of a)X(e,t,n,.055,np),X(e,t-.015,n-.015,.02,`rgba(255,255,255,0.4)`)}function op(e,t,n,r,i,a,o){e.save(),e.translate(t,n),e.rotate(i);let s=()=>{e.beginPath(),e.moveTo(-r,-r),e.quadraticCurveTo(0,-r*.72,r,-r),e.quadraticCurveTo(r*.72,0,r,r),e.quadraticCurveTo(0,r*.72,-r,r),e.quadraticCurveTo(-r*.72,0,-r,-r),e.closePath()};if(e.translate(.05,.07),s(),e.fillStyle=`rgba(0,40,35,0.25)`,e.fill(),e.translate(-.05,-.07),s(),e.fillStyle=a,e.fill(),e.save(),s(),e.clip(),o===`stripes`){e.fillStyle=`rgba(255,255,255,0.6)`;for(let t=-3;t<=3;t++)e.fillRect(t*r*.34-r*.07,-r,r*.14,r*2)}else wf(e,0,r*.05,r*.5,`#ffffff`);let c=e.createRadialGradient(-r*.3,-r*.3,r*.1,0,0,r*1.4);c.addColorStop(0,`rgba(255,255,255,0.25)`),c.addColorStop(1,`rgba(0,0,0,0.2)`),e.fillStyle=c,e.fillRect(-r,-r,r*2,r*2),e.restore(),e.restore()}function sp(e,t,n,r){X(e,t+.05,n+.08,r,`rgba(0,40,35,0.25)`),X(e,t,n,r,`#ffa94d`),e.strokeStyle=`#e8862f`,e.lineWidth=r*.11,e.lineCap=`round`;for(let i of[.4,.62,.84])e.beginPath(),e.arc(t-r*.12,n+r*.1,r*i,-2.5,-.9),e.stroke();e.strokeStyle=`#ffa94d`,e.lineWidth=r*.3,e.beginPath(),e.arc(t,n,r*.98,.4,2.3),e.stroke(),e.strokeStyle=`#e8862f`,e.lineWidth=r*.3,e.setLineDash([r*.12,r*.22]),e.beginPath(),e.arc(t,n,r*.98,.4,2.3),e.stroke(),e.setLineDash([]);let i=t+r*.5,a=n+r*.3,o=r*.42;e.fillStyle=`#ffb366`;for(let t of[-1,1])e.beginPath(),e.moveTo(i+t*o*.85,a-o*.2),e.lineTo(i+t*o*.7,a-o*1.15),e.lineTo(i+t*o*.15,a-o*.75),e.fill();X(e,i,a,o,`#ffb366`),e.strokeStyle=`#6b3a14`,e.lineWidth=r*.05;for(let t of[-1,1])e.beginPath(),e.arc(i+t*o*.38,a-o*.05,o*.18,.15*Math.PI,.85*Math.PI),e.stroke();X(e,i,a+o*.25,o*.1,`#ff6f91`),Z(e,`z`,t-r*.5,n-r*1.1,r*.38,`#ffffff`),Z(e,`Z`,t-r*.05,n-r*1.45,r*.5,`#ffffff`)}var cp={id:`sofa`,name:`Sofa`,shape:{dims:[5,4,4],profile:$f},paint(e,t,n,r){if(J(e,ep,n,r),t===`pz`||t===`nz`){e.save(),mf(e,$f,t,r),J(e,ep,n,r);let i=t===`nz`?n-1:0,a=t===`nz`?0:1;rp(e,i+.07,.07,.86,r-1.42,.38),rp(e,a+.03,r-1.95,n-1.1,.62,.26),Q(e,r-1.3,0,n,.05,np),Q(e,r-.4,0,n,.05,np);for(let t=a+.6;t<a+4;t+=1)X(e,t,r-.85,.05,np);if(ip(e,.14,r-.36,.36),ip(e,n-.36,r-.36,.36),t===`pz`){e.strokeStyle=`#ffa94d`,e.lineWidth=.16,e.lineCap=`round`;let t=()=>{e.beginPath(),e.moveTo(3.9,r-1.98),e.bezierCurveTo(3.98,r-1.6,3.7,r-1.45,3.9,r-1.1),e.stroke()};t(),e.strokeStyle=`#e8862f`,e.setLineDash([.05,.12]),t(),e.setLineDash([])}e.restore();return}if(t===`px`){for(let t=0;t<2;t++)rp(e,.06+t*2,.08,1.88,1.9,.4),ap(e,.06+t*2+.2,.08,1.48,1.2);op(e,1,1.36,.6,.22,`#ffd166`,`stripes`),op(e,3,1.36,.6,-.2,`#ff8fab`,`heart`);for(let t=0;t<2;t++)rp(e,.06+t*2,2.04,1.88,.66,.24);Q(e,r-.38,0,n,.05,np),ip(e,.14,r-.36,.36),ip(e,n-.36,r-.36,.36);return}if(t===`py`){rp(e,.08,.08,.84,r-.16,.35);for(let t=0;t<2;t++)rp(e,1.04,.06+t*2,n-1.1,1.88,.35),X(e,1.04+(n-1.1)/2,1+t*2,.06,np);sp(e,3.9,.98,.56),e.save(),e.translate(2,3.15),e.rotate(.5),e.fillStyle=`rgba(0,40,35,0.25)`,e.fillRect(-.1,-.3,.26,.7),Y(e,-.13,-.35,.26,.7,.1),e.fillStyle=`#2e2a4f`,e.fill(),X(e,0,-.22,.05,`#ff4d6d`);for(let t=0;t<3;t++)for(let n=0;n<2;n++)X(e,-.05+n*.1,-.05+t*.1,.025,`#9d97b3`);e.restore();return}if(t===`nx`){for(let t=0;t<4;t++)Y(e,.08+t,.5,.84,r-1,.3),e.fillStyle=`#3cb2a4`,e.fill(),e.strokeStyle=np,e.lineWidth=.03,e.stroke();rp(e,.04,.04,n-.08,.42,.2),Sf(e,2.85,r-.98,.5,.36,.12,`#ffffff`,()=>{Z(e,`DO NOT`,.25,.11,.09,`#2e2a4f`),Z(e,`REMOVE`,.25,.23,.09,`#2e2a4f`)}),ip(e,.14,r-.36,.36),ip(e,n-.36,r-.36,.36);return}J(e,`#1f5d56`,n,r);for(let[t,i]of[[.3,.3],[n-.3,.3],[.3,r-.3],[n-.3,r-.3]])xf(e,t,i,.16,`#6b4423`);xf(e,3.4,1.4,.2,`#ffc53d`),Z(e,`1`,3.4,1.4,.2,`#b8860b`)}},lp=`#a8703d`;function up(e,t,n,r,i,a,o=!1){e.fillStyle=lp,e.fillRect(t,n,r,i),bf(e,t,n,r,i,`rgba(90,50,20,0.3)`,a,o)}function dp(e,t,n,r){let i=e.createRadialGradient(t-r*.3,n-r*.3,r*.05,t,n,r);return i.addColorStop(0,`#fff1b8`),i.addColorStop(.5,`#e7b94a`),i.addColorStop(1,`#a8781d`),i}function fp(e,t,n,r,i){if(i){e.strokeStyle=`#f3d9a8`,e.lineWidth=.03;for(let i=0;i<12;i++){let a=i/12*Math.PI*2;e.beginPath(),e.moveTo(t+Math.cos(a)*r*1.12,n+Math.sin(a)*r*1.12),e.lineTo(t+Math.cos(a)*r*1.3,n+Math.sin(a)*r*1.3),e.stroke()}}X(e,t+.03,n+.05,r,`rgba(0,0,0,0.3)`),X(e,t,n,r,`#2e2a4f`),e.fillStyle=dp(e,t,n,r*.75),e.beginPath(),e.arc(t,n,r*.75,0,Math.PI*2),e.fill(),e.strokeStyle=`#2e2a4f`,e.lineWidth=r*.14,e.lineCap=`round`,e.beginPath(),e.moveTo(t,n),e.lineTo(t+r*.45,n-r*.45),e.stroke()}var pp={id:`tv`,name:`Retro TV`,shape:{dims:[5,4,3]},paint(e,t,n,r){if(up(e,0,0,n,r,t.charCodeAt(1)*7),t===`pz`){e.fillStyle=`rgba(255,255,255,0.16)`,e.fillRect(0,0,n,.08),e.fillStyle=`rgba(0,0,0,0.2)`,e.fillRect(0,r-.1,n,.1),Y(e,.25,.3,3.3,r-.6,.35),e.fillStyle=`#2a2440`,e.fill(),e.strokeStyle=`#d7dbe4`,e.lineWidth=.05,Y(e,.32,.37,3.16,r-.74,.33),e.stroke(),e.save(),Y(e,.4,.45,3,r-.9,.3),e.clip();let t=e.createRadialGradient(1.9,1.9,.2,1.9,2,2.3);t.addColorStop(0,`#61749c`),t.addColorStop(1,`#232c47`),e.fillStyle=t,e.fillRect(.4,.45,3,r-.9);for(let t=.5;t<r-.45;t+=.07)Q(e,t,.4,3.4,.015,`rgba(255,255,255,0.05)`);e.fillStyle=`rgba(255,255,255,0.26)`,e.beginPath(),e.ellipse(1.15,1.05,.62,.2,-.45,0,Math.PI*2),e.fill(),e.fillStyle=`rgba(255,255,255,0.12)`,e.beginPath(),e.ellipse(3,3.05,.22,.07,-.45,0,Math.PI*2),e.fill(),e.restore(),Y(e,3.72,.42,1.06,.34,.06),e.fillStyle=dp(e,4.25,.5,.6),e.fill(),Z(e,`TELEVUE`,4.25,.59,.16,`#5a3a22`),fp(e,4.25,1.3,.34,!0),fp(e,4.25,2.08,.25,!1),Y(e,3.78,2.55,.94,.95,.12),e.fillStyle=`#3a2d2a`,e.fill(),e.save(),Y(e,3.78,2.55,.94,.95,.12),e.clip();for(let t=-1;t<3;t+=.09)e.strokeStyle=`rgba(255,230,190,0.13)`,e.lineWidth=.02,e.beginPath(),e.moveTo(3.78+t,2.55),e.lineTo(3.78+t+.95,3.5),e.moveTo(3.78+t+.95,2.55),e.lineTo(3.78+t,3.5),e.stroke();e.restore();return}if(t===`px`||t===`nx`){e.fillStyle=`rgba(0,0,0,0.12)`,e.fillRect(0,0,n,r),Ef(e,.45,.6,n-.9,1.9,7,`#4a2e17`),Y(e,.12,r-.42,n-.24,.16,.06),e.fillStyle=dp(e,n/2,r-.34,1.5),e.fill();return}if(t===`py`){let t=n/2,i=r/2;for(let n=0;n<24;n++){let r=n/24*Math.PI*2;X(e,t+Math.cos(r)*.82,i+Math.sin(r)*.82,.12,`#fbf6ec`)}X(e,t,i,.84,`#fbf6ec`);for(let n=0;n<12;n++){let r=n/12*Math.PI*2;X(e,t+Math.cos(r)*.6,i+Math.sin(r)*.6,.06,`#e3d8c4`)}X(e,t,i,.3,`#c9ced9`),X(e,t,i,.22,`#2e2a4f`),X(e,t-.06,i-.06,.05,`rgba(255,255,255,0.4)`),X(e,.8,1.05,.34,`rgba(0,0,0,0.2)`),X(e,.76,1,.32,`#3b82f6`);for(let t=0;t<5;t++){let n=t/5*Math.PI*2;X(e,.76+Math.cos(n)*.15,1+Math.sin(n)*.15,.12,`#ff8fab`)}X(e,.76,1,.09,`#ffd23f`),Sf(e,3.65,1.25,.95,1.2,.2,`#ffffff`,()=>{e.fillStyle=`#ff4d4d`,e.fillRect(0,0,.95,.28),Z(e,`TV`,.475,.14,.2,`#ffffff`);for(let t=0;t<5;t++)Q(e,.42+t*.15,.1,.85-t%2*.2,.04,`#c9c6d6`)});return}if(t===`nz`){e.fillStyle=`#5a3a22`,e.fillRect(.22,.22,n-.44,r-.44);for(let t=.55;t<2.7;t+=.22)for(let n=.6;n<3.5;n+=.22)X(e,n,t,.06,`#34200f`);Sf(e,3.7,.5,.95,.7,0,`#f4efe4`,()=>{Z(e,`TELEVUE`,.475,.15,.13,`#2e2a4f`);for(let t=0;t<3;t++)Q(e,.34+t*.1,.1,.85,.03,`#b9b3c9`)}),e.fillStyle=`#ffd23f`,e.beginPath(),e.moveTo(4.18,1.55),e.lineTo(4.55,2.2),e.lineTo(3.81,2.2),e.fill(),Z(e,`!`,4.18,1.95,.32,`#2e2a4f`),e.strokeStyle=`#1b1b24`,e.lineWidth=.08,e.lineCap=`round`,e.beginPath(),e.moveTo(2.2,3.1),e.bezierCurveTo(2.6,3.5,1.8,3.6,2.3,4),e.stroke();return}for(let[t,i]of[[.4,.4],[n-.4,.4],[.4,r-.4],[n-.4,r-.4]])xf(e,t,i,.18,`#3a2414`)}},mp=[6,6,4,4],hp=`#4b2fbf`,gp=`#231763`,_p=`#ffd23f`;function vp(e,t,n,r,i){e.save(),e.translate(t,n),e.rotate(i),e.scale(r,r),e.fillStyle=`#ff9f1c`,e.beginPath(),e.moveTo(-.15,.48),e.quadraticCurveTo(0,1.1,.15,.48),e.fill(),e.fillStyle=`#ffe28a`,e.beginPath(),e.moveTo(-.08,.48),e.quadraticCurveTo(0,.85,.08,.48),e.fill(),e.fillStyle=`#ff4d6d`;for(let t of[-1,1])e.beginPath(),e.moveTo(t*.16,.05),e.lineTo(t*.38,.5),e.lineTo(t*.14,.42),e.fill();e.fillStyle=`#f4f1ff`,e.beginPath(),e.moveTo(0,-.62),e.bezierCurveTo(.3,-.35,.26,.3,.17,.5),e.lineTo(-.17,.5),e.bezierCurveTo(-.26,.3,-.3,-.35,0,-.62),e.fill(),e.fillStyle=`#ff4d6d`,e.beginPath(),e.moveTo(0,-.62),e.bezierCurveTo(.14,-.5,.2,-.4,.23,-.3),e.lineTo(-.23,-.3),e.bezierCurveTo(-.2,-.4,-.14,-.5,0,-.62),e.fill(),X(e,0,-.04,.12,`#2e2a4f`),X(e,0,-.04,.085,`#7cc6fe`),X(e,-.03,-.07,.03,`rgba(255,255,255,0.8)`),e.restore()}function yp(e,t,n,r){e.strokeStyle=_p,e.lineWidth=r*.12,e.beginPath(),e.ellipse(t,n,r*1.6,r*.42,-.35,Math.PI,Math.PI*2),e.stroke();let i=e.createLinearGradient(t-r,n-r,t+r,n+r);i.addColorStop(0,`#ffc07a`),i.addColorStop(1,`#ff4d8d`),e.fillStyle=i,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill(),e.save(),e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.clip(),e.fillStyle=`rgba(255,255,255,0.18)`;for(let i of[-.45,0,.4])e.save(),e.translate(t,n+i*r),e.rotate(-.35),e.fillRect(-r*1.2,-r*.08,r*2.4,r*.16),e.restore();e.restore(),e.strokeStyle=_p,e.lineWidth=r*.12,e.beginPath(),e.ellipse(t,n,r*1.6,r*.42,-.35,0,Math.PI),e.stroke()}function bp(e,t,n,r){let i=t.length;e.beginPath(),e.moveTo(0,r);for(let a=0;a<i;a++){let i=r-hf(t,n,a);e.lineTo(a,i),e.lineTo(a+1,i)}e.lineTo(i,r),e.closePath(),e.stroke()}function xp(e,t,n,r,i){e.fillStyle=i,[`00100000100`,`00010001000`,`00111111100`,`01101110110`,`11111111111`,`10111111101`,`10100000101`,`00011011000`].forEach((i,a)=>{for(let o=0;o<i.length;o++)i[o]===`1`&&e.fillRect(t+o*r,n+a*r,r,r)})}var Sp={id:`arcade`,name:`Arcade Cabinet`,shape:{dims:[4,6,3],profile:mp},paint(e,t,n,r){if(J(e,hp,n,r),t===`pz`||t===`nz`){e.save(),mf(e,mp,t,r),vf(e,0,0,n,r,`#3b22b0`,`#170d4a`);let i=gf(t,n),a=new Td(7);for(let t=0;t<45;t++)X(e,a.next()*n,a.next()*r,.01+a.next()*.025,`rgba(255,255,255,${.35+a.next()*.6})`);kd(e,i(3.45),2.55,.13,`#fff3c4`),kd(e,i(.45),3.2,.1,`#ffffff`),kd(e,i(1.7),.4,.08,`#ffffff`),yp(e,i(1),1.3,.58),vp(e,i(2.85),3.15,.95,t===`nz`?-.7:.7);for(let[t,a]of[[0,`#ff3b8d`],[.2,_p],[.4,`#7cc6fe`]])e.strokeStyle=a,e.lineWidth=.1,e.beginPath(),e.moveTo(i(0),r-.75+t),e.lineTo(i(n),r-1.55+t),e.stroke();e.save(),e.translate(n/2,4.45),e.rotate(-.12),Z(e,`COSMIC`,.05,.06,.62,`#ff3b8d`),Z(e,`COSMIC`,0,0,.62,_p),e.restore(),e.fillStyle=gp,e.fillRect(0,r-.3,n,.3),e.strokeStyle=_p,e.lineWidth=.18,bp(e,mp,t,r),e.restore();return}if(t===`px`){Y(e,.1,.08,n-.2,1.84,.14),e.fillStyle=`#16122a`,e.fill(),Y(e,.25,.25,n-.5,1.5,.08),e.fillStyle=`#0c0a1c`,e.fill(),Z(e,`HI 09990`,n/2,.42,.13,`#ffffff`),xp(e,.85,.6,.035,`#3fbf5a`),xp(e,1.35,.6,.035,`#3fbf5a`),xp(e,1.85,.6,.035,`#3fbf5a`),Z(e,`INSERT COIN`,n/2,1.3,.2,_p),e.fillStyle=`rgba(255,255,255,0.1)`,e.beginPath(),e.ellipse(.75,.55,.4,.1,-.3,0,Math.PI*2),e.fill(),vf(e,.06,2.1,n-.12,.78,`#ffd23f`,`#ff9f1c`),Z(e,`PUSH START`,n/2,2.49,.22,`#2e2a4f`),Y(e,.55,3.15,n-1.1,1.65,.1),e.fillStyle=`#2e2a4f`,e.fill(),e.strokeStyle=`#5b5680`,e.lineWidth=.05,e.stroke();for(let t of[1.05,1.95])Y(e,t-.17,3.4,.34,.66,.06),e.fillStyle=`#ff3b5c`,e.fill(),Y(e,t-.03,3.48,.06,.36,.03),e.fillStyle=`#3a0d18`,e.fill(),Z(e,`25`,t,3.95,.13,`#ffffff`);Y(e,n/2-.22,4.3,.44,.28,.05),e.fillStyle=`#9aa3b5`,e.fill(),e.fillStyle=gp,e.fillRect(0,r-.95,n,.95);for(let[t,i]of[[.25,`#ff3b8d`],[.45,_p],[.65,`#7cc6fe`]])Q(e,r-.95+t,0,n,.08,i);_f(e,.04,0,r,.1,_p),_f(e,n-.04,0,r,.1,_p);return}if(t===`py`){Ef(e,.3,.55,1.4,1.9,5,gp),e.fillStyle=`#1f1a3d`,e.fillRect(2,0,2,r),e.strokeStyle=_p,e.lineWidth=.04,e.strokeRect(2.1,.1,1.8,r-.2),X(e,2.6,r/2,.3,`#5b5680`),X(e,2.6,r/2,.22,`#0c0a1c`);for(let[t,n,i]of[[3.3,r/2-.45,`#3b82f6`],[3.55,r/2,`#ffd23f`],[3.3,r/2+.45,`#2fbf6f`]])X(e,t,n,.18,`#0c0a1c`),xf(e,t,n,.13,i);Y(e,2.35,.25,.3,.14,.05),e.fillStyle=`#ffffff`,e.fill(),Z(e,`1P`,2.5,.55,.14,_p),_f(e,.04,0,r,.08,_p);return}if(t===`nx`){J(e,`#221a4a`,n,r),Ef(e,.4,.3,n-.8,1.2,6,`#120d2b`),Y(e,.45,2.1,n-.9,2.6,.08),e.fillStyle=`#2e2566`,e.fill(),X(e,n-.8,3.4,.12,`#c9ced9`),X(e,n-.8,3.4,.05,`#2e2a4f`),Z(e,`SERVICE`,n/2-.15,2.45,.18,_p),e.strokeStyle=`#0c0a1c`,e.lineWidth=.08,e.beginPath(),e.moveTo(1.2,5.2),e.bezierCurveTo(1.5,5.6,.9,5.7,1.3,6),e.stroke();return}J(e,gp,n,r);for(let[t,i]of[[.35,.35],[n-.35,.35],[.35,r-.35],[n-.35,r-.35]])xf(e,t,i,.18,`#16122a`)}};function Cp(e,t){let n=parseInt(e.slice(1),16),r=[n>>16&255,n>>8&255,n&255].map(e=>Math.round(t>=0?e+(255-e)*t:e*(1+t)));return`rgb(${r[0]},${r[1]},${r[2]})`}var wp=[`#ff4d4d`,`#ffc93d`,`#3b82f6`],Tp={pz:[[4],[2],[4]],nz:[[2],[4],[2]],px:[[],[2],[]],nx:[[2],[],[2]]};function Ep(e,t,n,r,i){vf(e,t,r,n-t,1,Cp(i,.18),Cp(i,-.12)),yf(e,t,r,n-t,1,.22,.22,.12),Q(e,r+.05,t+.04,n-.04,.05,`rgba(255,255,255,0.5)`),Q(e,r+.97,t,n,.06,`rgba(0,0,0,0.25)`),_f(e,t+.03,r,r+1,.05,`rgba(255,255,255,0.3)`),_f(e,n-.03,r,r+1,.05,`rgba(0,0,0,0.22)`)}var Dp={id:`brick`,name:`Toy Bricks`,shape:{dims:[6,3,4]},paint(e,t,n,r){if(t===`py`){let t=wp[0];vf(e,0,0,n,r,Cp(t,.1),Cp(t,-.06));for(let i=0;i<r;i++)for(let r=0;r<n;r++){let n=r+.5,a=i+.5;X(e,n+.06,a+.09,.34,`rgba(90,0,0,0.3)`),X(e,n,a,.34,Cp(t,-.16)),X(e,n-.02,a-.03,.3,Cp(t,.12)),e.strokeStyle=`rgba(255,255,255,0.55)`,e.lineWidth=.05,e.beginPath(),e.arc(n-.02,a-.03,.22,3.5,4.9),e.stroke(),Z(e,`TOY`,n-.02,a-.02,.13,Cp(t,.32))}return}if(t===`ny`){let t=wp[2];J(e,Cp(t,-.45),n,r),e.strokeStyle=Cp(t,-.05),e.lineWidth=.2,e.strokeRect(.1,.1,n-.2,r-.2);for(let i=1;i<r;i++)for(let r=1;r<n;r++)X(e,r+.04,i+.06,.37,`rgba(0,0,0,0.3)`),X(e,r,i,.37,Cp(t,-.08)),X(e,r,i,.26,Cp(t,-.55)),e.strokeStyle=`rgba(255,255,255,0.35)`,e.lineWidth=.04,e.beginPath(),e.arc(r,i,.33,3.5,4.9),e.stroke();return}let i=Tp[t];wp.forEach((t,r)=>{let a=[0,...i[r],n];for(let n=0;n+1<a.length;n++)Ep(e,a[n],a[n+1],r,t)}),t===`pz`&&(X(e,3.7199999999999998,1.4,.07,`#2e2a4f`),X(e,4.28,1.4,.07,`#2e2a4f`),e.strokeStyle=`#2e2a4f`,e.lineWidth=.06,e.lineCap=`round`,e.beginPath(),e.arc(4,1.45,.25,.2*Math.PI,.8*Math.PI),e.stroke(),X(e,3.55,1.58,.07,`rgba(255,110,110,0.5)`),X(e,4.45,1.58,.07,`rgba(255,110,110,0.5)`))}},Op=[3,3,5,5,2,2],kp=`#3b5bdb`,Ap={gold:[`#fff1b8`,`#ffc53d`,`#c98a12`],silver:[`#ffffff`,`#c3ccdd`,`#8793ab`],bronze:[`#ffe0c2`,`#e39a5b`,`#a8602c`]},jp=[{x0:0,rank:`2`,metal:Ap.silver,r:.42},{x0:2,rank:`1`,metal:Ap.gold,r:.5},{x0:4,rank:`3`,metal:Ap.bronze,r:.36}];function Mp(e,t,n,r,i){X(e,t+r*.08,n+r*.12,r,`rgba(40,30,80,0.25)`);let a=e.createLinearGradient(t-r,n-r,t+r,n+r);a.addColorStop(0,i[0]),a.addColorStop(.5,i[1]),a.addColorStop(1,i[2]),e.fillStyle=a,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill(),e.strokeStyle=i[2],e.lineWidth=r*.08,e.beginPath(),e.arc(t,n,r*.8,0,Math.PI*2),e.stroke()}function Np(e,t,n,r){for(let i of[-1,1])for(let a=0;a<6;a++){let o=Math.PI/2+i*(.4+a*.4);Of(e,t+Math.cos(o)*r,n+Math.sin(o)*r,r*.42,r*.17,o+i*(Math.PI/2+.35),a%2?`#2fbf6f`:`#27a35e`)}}function Pp(e,t,n,r,i,a){let o=n+.32+r;return Np(e,t,o,r*1.3),Mp(e,t,o,r,i),Z(e,a,t+r*.06,o+r*.08,r*1.2,i[2]),Z(e,a,t,o,r*1.2,`#ffffff`),o+r*1.4}function Fp(e,t,n,r){let i=new Td(r),a=[`#ff5d73`,`#ffd23f`,`#3b82f6`,`#2fbf6f`,`#9b5cff`];for(let r=0;r<t*n*1.6;r++)e.save(),e.translate(i.next()*t,i.next()*n),e.rotate(i.next()*3),e.fillStyle=a[i.int(a.length)],e.globalAlpha=.55,e.fillRect(-.05,-.02,.1,.04),e.restore()}function Ip(e,t,n,r,i,a){vf(e,0,t,r,n,`#ffffff`,`#e4e0f5`),e.fillStyle=kp,e.fillRect(0,t,r,.34),Q(e,t+.28,0,r,.03,i[1]),Od(e,r/2+.04,t+.34+(n-.34)/2+.06,a,`rgba(40,30,80,0.2)`),Od(e,r/2,t+.34+(n-.34)/2,a,i[1])}var Lp={id:`podium`,name:`Winner Podium`,shape:{dims:[6,5,3],profile:Op},paint(e,t,n,r){if(J(e,`#f7f5ff`,n,r),t===`pz`||t===`nz`){e.save(),mf(e,Op,t,r);for(let i of jp){let a=t===`nz`?n-i.x0-2:i.x0,o=r-hf(Op,t,a);vf(e,a,o,2,r-o,`#ffffff`,`#e4e0f5`),e.fillStyle=kp,e.fillRect(a,o,2,.34),Q(e,o+.28,a,a+2,.03,i.metal[1]);let s=Pp(e,a+1,o,i.r,i.metal,i.rank);if(i.rank===`1`){let t=s+.35;e.fillStyle=`#b8233a`;for(let n of[-1,1])e.beginPath(),e.moveTo(a+1+n*.7,t-.14),e.lineTo(a+1+n*1,t-.1),e.lineTo(a+1+n*.88,t+.08),e.lineTo(a+1+n*1,t+.26),e.lineTo(a+1+n*.7,t+.22),e.fill();Y(e,a+.25,t-.2,1.5,.4,.05),e.fillStyle=`#ff4d6d`,e.fill(),Z(e,`WINNER`,a+1,t,.24,`#ffffff`);for(let n=0;n<3;n++)Od(e,a+.55+n*.45,t+.75,n===1?.2:.15,i.metal[1])}else r-s>.6&&(Od(e,a+.7,s+.45,.12,i.metal[1]),Od(e,a+1.3,s+.45,.12,i.metal[1]));_f(e,a+.02,o,r,.05,`#d6d0ea`)}Fp(e,n,r,3),e.fillStyle=`rgba(46,42,79,0.12)`,e.fillRect(0,r-.16,n,.16),e.restore();return}if(t===`px`){Ip(e,0,3,n,Ap.gold,.55),Ip(e,3,2,n,Ap.bronze,.38);return}if(t===`nx`){Ip(e,0,2,n,Ap.gold,.42),Ip(e,2,3,n,Ap.silver,.5);return}if(t===`py`){for(let t of jp)e.fillStyle=kp,e.fillRect(t.x0,0,2,r),e.strokeStyle=t.metal[1],e.lineWidth=.06,e.strokeRect(t.x0+.15,.15,1.7,r-.3),Od(e,t.x0+1,r/2,t.rank===`1`?.55:.4,t.metal[1]),Od(e,t.x0+1,r/2,t.rank===`1`?.3:.2,t.metal[0]);return}J(e,`#dcd6ee`,n,r)}},Rp=[5,5,3,3,3,4],zp=`#ff4d4d`,Bp=`#3b82f6`,Vp=`#2e2a4f`,Hp=`#ffc93d`,Up=`#1f1b33`;function Wp(e,t,n,r){X(e,t,n,r,Up),X(e,t,n,r*.82,zp),e.fillStyle=Cp(zp,-.3),e.beginPath(),e.moveTo(t,n),e.arc(t,n,r*.8,.35*Math.PI,.9*Math.PI),e.fill(),e.strokeStyle=Cp(zp,-.4),e.lineWidth=r*.1;for(let i=0;i<8;i++){let a=i*Math.PI/4;e.beginPath(),e.moveTo(t,n),e.lineTo(t+Math.cos(a)*r*.78,n+Math.sin(a)*r*.78),e.stroke()}X(e,t,n,r*.26,Hp),X(e,t-r*.07,n-r*.07,r*.1,`#fff1b8`)}function Gp(e,t,n,r,i,a,o){Y(e,t,n,r,i,.08);let s=e.createLinearGradient(0,n,0,n+i);s.addColorStop(0,`#fff1b8`),s.addColorStop(1,`#d99a12`),e.fillStyle=s,e.fill(),Z(e,a,t+r/2,n+i/2,o,Vp)}var Kp={id:`train`,name:`Toy Train`,shape:{dims:[6,5,3],profile:Rp},paint(e,t,n,r){if(J(e,Vp,n,r),t===`pz`||t===`nz`){e.save(),mf(e,Rp,t,r),J(e,Vp,n,r);let i=(e,r)=>t===`nz`?n-e-r:e,a=i(0,2);vf(e,a,0,2,r-1,Cp(zp,.14),Cp(zp,-.12)),e.fillStyle=Vp,e.fillRect(a,0,2,.32),Q(e,.34,a,a+2,.06,Hp),Y(e,a+.36,.7,1.28,1.08,.22),e.fillStyle=Vp,e.fill(),Y(e,a+.45,.79,1.1,.9,.16),e.fillStyle=`#cdeaff`,e.fill();let o=a+1;X(e,o,1.42,.22,`#ffd2a8`),e.fillStyle=Bp,e.beginPath(),e.arc(o,1.34,.23,Math.PI,0),e.fill(),e.fillRect(o-(t===`nz`?.36:-.02),1.3,.34,.07);for(let t of[-.12,0,.12])_f(e,o+t,1.12,1.33,.04,`#ffffff`);X(e,o-.08,1.44,.03,Vp),X(e,o+.08,1.44,.03,Vp),e.strokeStyle=Vp,e.lineWidth=.03,e.beginPath(),e.arc(o,1.5,.07,.2*Math.PI,.8*Math.PI),e.stroke(),e.fillStyle=`rgba(255,255,255,0.4)`,e.beginPath(),e.moveTo(a+.55,1.6),e.lineTo(a+.85,.85),e.lineTo(a+1,.85),e.lineTo(a+.7,1.6),e.fill(),Gp(e,a+.5,2.3,1,.52,`7`,.4);for(let t=.6;t<r-1.2;t+=.4)X(e,a+.14,t,.04,Cp(zp,-.35)),X(e,a+1.86,t,.04,Cp(zp,-.35));let s=i(2,3),c=e.createLinearGradient(0,2,0,4);c.addColorStop(0,Cp(Bp,-.25)),c.addColorStop(.3,Cp(Bp,.35)),c.addColorStop(.55,Bp),c.addColorStop(1,Cp(Bp,-.35)),e.fillStyle=c,e.fillRect(s,2,3,2);for(let t of[.55,1.5,2.45])_f(e,s+t,2,4,.13,Hp),_f(e,s+t-.03,2,4,.03,`#fff1b8`);for(let t=s+.2;t<s+3;t+=.3)X(e,t,2.14,.035,Cp(Bp,-.4)),X(e,t,3.86,.035,Cp(Bp,-.4));let l=i(5,1);e.fillStyle=Up,e.beginPath(),e.moveTo(l+.3,2),e.lineTo(l+.22,1.2),e.lineTo(l+.08,1.06),e.lineTo(l+.92,1.06),e.lineTo(l+.78,1.2),e.lineTo(l+.7,2),e.fill(),Q(e,1.14,l+.1,l+.9,.08,Hp);for(let t=2.3;t<3.9;t+=.35)X(e,l+.5,t,.05,`#4a4570`);e.fillStyle=Up,e.fillRect(0,r-1,n,1),Q(e,r-1,0,n,.08,Hp);let u=gf(t,n);for(let[t,n]of[[1,.46],[2.65,.46],[3.85,.46],[5.3,.34]])Wp(e,u(t),r-n-.04,n);e.strokeStyle=`#c9ced9`,e.lineWidth=.09,e.lineCap=`round`,e.beginPath(),e.moveTo(u(1.22),r-.46),e.lineTo(u(4.07),r-.46),e.stroke();for(let t of[1,2.65,3.85])X(e,u(t+.22),r-.46,.06,Hp);e.restore();return}if(t===`px`){vf(e,0,0,n,1,Cp(zp,.14),zp),e.fillStyle=Vp,e.fillRect(0,0,n,.2);for(let t of[.8,2.2])X(e,t,.6,.3,Hp),X(e,t,.6,.24,`#cdeaff`),X(e,t-.07,.53,.07,`rgba(255,255,255,0.8)`);e.fillStyle=Up,e.beginPath(),e.moveTo(1.2,2),e.lineTo(1.28,1.2),e.lineTo(1.1,1.06),e.lineTo(1.9,1.06),e.lineTo(1.72,1.2),e.lineTo(1.8,2),e.fill(),Q(e,1.14,1.12,1.88,.08,Hp),X(e,1.5,3.2,.74,Up),e.strokeStyle=`#4a4570`,e.lineWidth=.06,e.beginPath(),e.arc(1.5,3.2,.62,0,Math.PI*2),e.stroke();for(let t of[2.95,3.45])Q(e,t,.85,1.5,.06,Hp);X(e,1.5,3.2,.09,Hp);let t=e.createRadialGradient(1.5,2.3,.05,1.5,2.3,.5);t.addColorStop(0,`rgba(255,240,170,0.8)`),t.addColorStop(1,`rgba(255,240,170,0)`),e.fillStyle=t,e.fillRect(1,1.8,1,1),Y(e,1.26,2.1,.48,.38,.08),e.fillStyle=Vp,e.fill(),X(e,1.5,2.29,.13,`#fff3c4`),e.fillStyle=zp,e.fillRect(0,4,n,.42);for(let t of[.45,2.55])X(e,t,4.21,.2,`#c9ced9`),X(e,t,4.21,.08,Up);e.strokeStyle=zp,e.lineWidth=.07;for(let t=0;t<5;t++)e.beginPath(),e.moveTo(.5+t*.5,4.45),e.lineTo(1.5+(t-2)*.12,4.98),e.stroke();return}if(t===`nx`){vf(e,0,0,n,r-1,Cp(zp,.14),Cp(zp,-.12)),e.fillStyle=Vp,e.fillRect(0,0,n,.32),Q(e,.34,0,n,.06,Hp),Y(e,.35,.7,1.4,1.05,.15),e.fillStyle=Vp,e.fill(),Y(e,.44,.79,1.22,.87,.1),e.fillStyle=`#cdeaff`,e.fill();for(let t of[2.2,2.62])_f(e,t,.9,3.9,.06,`#c9ced9`);for(let t=1.1;t<3.9;t+=.3)Q(e,t,2.2,2.62,.05,`#c9ced9`);Gp(e,.35,2.3,1.3,.5,`No.7`,.3),X(e,.8,3.35,.22,`rgba(255,60,90,0.3)`),X(e,.8,3.35,.13,`#ff3b5c`),e.fillStyle=Up,e.fillRect(0,r-1,n,1),e.fillStyle=zp,e.fillRect(0,r-1,n,.42);for(let t of[.45,2.55])X(e,t,r-.79,.2,`#c9ced9`),X(e,t,r-.79,.08,Up);e.strokeStyle=`#c9ced9`,e.lineWidth=.08,e.beginPath(),e.moveTo(1.5,r-.6),e.lineTo(1.5,r-.3),e.arc(1.62,r-.3,.12,Math.PI,0,!0),e.stroke();return}if(t===`py`){Y(e,.05,.05,1.9,r-.1,.2),e.fillStyle=`#3a3563`,e.fill(),Y(e,.55,.85,.9,1.3,.1),e.strokeStyle=`#4f4a80`,e.lineWidth=.05,e.stroke(),xf(e,1.62,.55,.13,Hp);for(let t=.25;t<1.9;t+=.3)X(e,t,.18,.035,`#4f4a80`),X(e,t,r-.18,.035,`#4f4a80`);let t=e.createLinearGradient(0,0,0,r);t.addColorStop(0,Cp(Bp,-.3)),t.addColorStop(.45,Cp(Bp,.35)),t.addColorStop(1,Cp(Bp,-.3)),e.fillStyle=t,e.fillRect(2,0,3,r);for(let t of[2.55,3.5,4.45])_f(e,t,0,r,.13,Hp);for(let t of[.3,r-.3])Q(e,t,2.1,4.9,.05,`#c9ced9`);e.fillStyle=dp(e,3,1.5,.4),e.beginPath(),e.arc(3,1.5,.38,0,Math.PI*2),e.fill(),xf(e,4,1.5,.27,Cp(Bp,.2)),X(e,5.5,1.5,.44,Up),e.strokeStyle=Hp,e.lineWidth=.08,e.beginPath(),e.arc(5.5,1.5,.37,0,Math.PI*2),e.stroke(),X(e,5.5,1.5,.26,`#0b0914`);return}J(e,Up,n,r);for(let t of[1,2.65,3.85,5.3])e.fillStyle=zp,e.fillRect(t-.3,.1,.6,.3),e.fillRect(t-.3,r-.4,.6,.3),Q(e,r/2,.3,n-.3,.08,`#4a4570`)}},qp=[3,4,5,4,3],Jp=`#ffd0dc`,Yp=`#d8435a`,Xp=`#fffaf5`,Zp=`#3fb7a8`;function Qp(e,t,n,r,i,a){let o=new Td(a),s=.16;e.fillStyle=Cp(Yp,-.35),e.fillRect(t,n,r,i);for(let a=0,c=n+i+s*.4;c>n-s;a++,c-=s*1.25)for(let n=t-s+(a%2?s:0);n<t+r+s;n+=s*2)e.beginPath(),e.moveTo(n-s,c-s*1.6),e.lineTo(n+s,c-s*1.6),e.lineTo(n+s,c),e.arc(n,c,s,0,Math.PI),e.closePath(),e.fillStyle=Cp(Yp,(o.next()-.5)*.14),e.fill(),e.strokeStyle=Cp(Yp,-.3),e.lineWidth=.02,e.stroke()}function $p(e,t,n,r,i){for(let a=n+.25;a<r;a+=.25)Q(e,a,t,t+i,.025,`rgba(200,90,120,0.2)`)}function em(e,t,n,r,i){for(let a of[t-.22,t+r+.02]){e.fillStyle=Zp,e.fillRect(a,n,.2,i);for(let t=n+.1;t<n+i;t+=.12)Q(e,t,a+.03,a+.17,.025,Cp(Zp,-.3))}let a=e.createLinearGradient(0,n,0,n+i);a.addColorStop(0,`#d8f0ff`),a.addColorStop(1,`#9fd2f5`),e.fillStyle=a,e.fillRect(t,n,r,i),e.fillStyle=`#ffffff`;for(let a of[0,1]){e.beginPath();let o=a?t+r:t;e.moveTo(o,n),e.lineTo(o+(a?-1:1)*r*.32,n),e.quadraticCurveTo(o+(a?-1:1)*r*.12,n+i*.35,o+(a?-1:1)*r*.14,n+i*.75),e.lineTo(o,n+i*.75),e.fill()}e.strokeStyle=Xp,e.lineWidth=.07,e.strokeRect(t,n,r,i),_f(e,t+r/2,n,n+i,.05,Xp),Q(e,n+i/2,t,t+r,.05,Xp),e.fillStyle=`#8a5a3c`,e.fillRect(t-.06,n+i+.02,r+.12,.17);let o=[`#ff4d6d`,`#ffd23f`,`#ff8fab`,`#ffffff`];for(let a=0;a<5;a++){let s=t+.05+a*(r-.1)/4;Of(e,s,n+i+.03,.12,.05,-2.2,`#3fae5f`),X(e,s,n+i-.02,.07,o[a%4]),X(e,s,n+i-.02,.025,`#ffb000`)}}function tm(e,t,n,r){for(let[i,a,o]of[[-.6,.1,.7],[.55,.15,.65],[0,-.2,.9]])X(e,t+i*r,n+a*r,r*o,`#3fae5f`);X(e,t-r*.2,n-r*.45,r*.3,`rgba(255,255,255,0.18)`),X(e,t+r*.3,n-r*.1,r*.1,`#ff6f91`),X(e,t-r*.5,n+r*.05,r*.1,`#ff6f91`)}var nm={id:`house`,name:`Doll House`,shape:{dims:[5,5,4],profile:qp},paint(e,t,n,r){J(e,Jp,n,r);let i=2.6;if(t===`pz`||t===`nz`){e.save(),mf(e,qp,t,r),J(e,Jp,n,r),$p(e,0,r-i,r,n),e.save(),e.beginPath();for(let a=0;a<n;a++){let n=hf(qp,t,a);e.rect(a,r-n,1,n-i)}e.clip(),Qp(e,0,0,n,r-i,t===`pz`?1:2),e.restore();for(let i=0;i<n;i++)e.fillStyle=Cp(Yp,-.3),e.fillRect(i,r-hf(qp,t,i),1,.07);e.fillStyle=Xp,e.fillRect(0,r-i,n,.1),X(e,2.5,.95,.3,Xp),X(e,2.5,.95,.22,`#bfe3ff`),_f(e,2.5,.73,1.17,.04,Xp),Q(e,.95,2.28,2.72,.04,Xp);let a=2.15;e.beginPath(),e.moveTo(a,r),e.lineTo(a,r-1.35),e.arc(2.5,r-1.35,.35,Math.PI,0),e.lineTo(2.8499999999999996,r),e.closePath(),e.fillStyle=t===`pz`?Zp:`#8a5a3c`,e.fill(),e.strokeStyle=Xp,e.lineWidth=.07,e.stroke();for(let t of[r-.95,r-.5])e.strokeStyle=`rgba(0,0,0,0.18)`,e.lineWidth=.03,e.strokeRect(2.29,t,.42,.34);X(e,2.5,r-1.35,.13,`#bfe3ff`),X(e,2.7199999999999998,r-.72,.05,`#ffd23f`),e.fillStyle=`#c9c6d6`,e.fillRect(1.95,r-.1,1.1,.1),t===`pz`&&(e.strokeStyle=`#2f9a4f`,e.lineWidth=.07,e.beginPath(),e.arc(2.5,r-1.02,.14,0,Math.PI*2),e.stroke(),X(e,2.5,r-.9,.04,`#ff4d6d`),_f(e,3.12,r-1.7,r-1.5,.04,`#2e2a4f`),Y(e,3.04,r-1.5,.16,.22,.04),e.fillStyle=`#ffe28a`,e.fill());for(let t of[.5,3.6])em(e,t,r-2.2,.9,.8);tm(e,.3,r-.18,.32),tm(e,n-.3,r-.18,.32),e.restore();return}if(t===`px`||t===`nx`){let a=r-i;if(e.save(),e.beginPath(),e.rect(0,0,n,a),e.clip(),Qp(e,0,0,n,a,t===`px`?3:4),e.restore(),e.fillStyle=Xp,e.fillRect(0,a,n,.1),$p(e,0,a,r,n),em(e,1.5,r-2.4,1,.9),t===`px`){_f(e,.14,a,r,.08,`#c9c6d6`);for(let t=a+.4;t<r;t+=.7)Q(e,t,.08,.2,.05,`#9d97b3`)}else{for(let t=0;t<9;t++)Of(e,3.5+Math.sin(t)*.12,r-.1-t*.22,.18,.08,-Math.PI/2+(t%2?.7:-.7),`#3fae5f`);for(let t of[r-.8,r-1.5])X(e,3.5,t,.07,`#ff4d6d`)}tm(e,.45,r-.18,.3),tm(e,n-.45,r-.18,.3);return}if(t===`py`){Qp(e,0,0,n,r,5);for(let t=1;t<n;t++)_f(e,t,0,r,.06,Cp(Yp,-.35));e.fillStyle=`#b5553c`,e.fillRect(3.2,.7,.6,.6);for(let t of[.85,1.05,1.25])Q(e,t,3.2,3.8,.02,`rgba(255,255,255,0.3)`);e.fillStyle=`#3a2418`,e.fillRect(3.32,.82,.36,.36),Y(e,1.18,2.1,.64,.9,.05),e.fillStyle=Xp,e.fill(),e.fillStyle=`#bfe3ff`,e.fillRect(1.25,2.17,.5,.76),Q(e,2.55,1.25,1.75,.04,Xp);return}J(e,`#c98a4b`,n,r);for(let t=.25;t<r;t+=.5)Q(e,t,0,n,.03,`rgba(90,50,20,0.3)`)}},rm=[5,3,3,3,5],im=[`#c4bfd4`,`#b3adc6`,`#bdb8cf`,`#a9a3bd`,`#c9c4d9`];function am(e,t,n,r,i,a){let o=new Td(a);e.fillStyle=`#8f89a6`,e.fillRect(t,n,r,i);for(let a=0,s=n;s<n+i;a++,s+=.4)for(let n=t+(a%2?-.3:0);n<t+r;n+=.6)Y(e,n+.025,s+.025,.55,.35,.05),e.fillStyle=im[o.int(im.length)],e.fill(),e.fillStyle=`rgba(255,255,255,0.2)`,e.fillRect(n+.06,s+.04,.48,.05),e.fillStyle=`rgba(40,30,70,0.12)`,e.fillRect(n+.06,s+.31,.48,.05)}function om(e,t,n,r){e.fillStyle=`rgba(40,30,70,0.4)`;for(let i=t+.2;i<n-.1;i+=.5)e.fillRect(i,r,.22,.26)}function sm(e,t,n,r){e.fillStyle=`#ffc93d`,e.beginPath(),e.moveTo(t-r,n+r*.5),e.lineTo(t-r,n-r*.3),e.lineTo(t-r*.5,n+r*.1),e.lineTo(t,n-r*.6),e.lineTo(t+r*.5,n+r*.1),e.lineTo(t+r,n-r*.3),e.lineTo(t+r,n+r*.5),e.closePath(),e.fill();for(let i of[-1,0,1])X(e,t+i*r,n+(i?-r*.35:-r*.65),r*.14,`#ffc93d`);X(e,t,n+r*.2,r*.13,`#ff4d6d`)}function cm(e,t,n,r,i){Q(e,n,t-r/2-.08,t+r/2+.08,.06,`#6b4423`);let a=()=>{e.beginPath(),e.moveTo(t-r/2,n),e.lineTo(t+r/2,n),e.lineTo(t+r/2,n+i),e.lineTo(t,n+i-.25),e.lineTo(t-r/2,n+i),e.closePath()};e.save(),e.translate(.04,.05),a(),e.fillStyle=`rgba(40,30,70,0.3)`,e.fill(),e.restore(),a(),e.fillStyle=`#d8343f`,e.fill(),e.strokeStyle=`#ffc93d`,e.lineWidth=.04,e.stroke(),sm(e,t,n+i*.4,r*.3)}function lm(e,t,n){let r=e.createRadialGradient(t,n-.15,.02,t,n-.15,.45);r.addColorStop(0,`rgba(255,200,90,0.55)`),r.addColorStop(1,`rgba(255,200,90,0)`),e.fillStyle=r,e.fillRect(t-.5,n-.65,1,1),e.fillStyle=`#2e2a4f`,e.fillRect(t-.05,n,.1,.3),e.fillRect(t-.1,n-.04,.2,.08),e.fillStyle=`#ff7a1c`,e.beginPath(),e.moveTo(t,n-.38),e.quadraticCurveTo(t+.14,n-.12,t,n-.03),e.quadraticCurveTo(t-.14,n-.12,t,n-.38),e.fill(),e.fillStyle=`#ffe28a`,e.beginPath(),e.moveTo(t,n-.24),e.quadraticCurveTo(t+.07,n-.1,t,n-.05),e.quadraticCurveTo(t-.07,n-.1,t,n-.24),e.fill()}function um(e,t,n,r,i){let a=new Td(i);for(let o=0;o<r*6;o++){let s=o/(r*6);Of(e,t+Math.sin(s*9+i)*.12,n-s*r,.14,.07,-Math.PI/2+(a.next()-.5)*2.4,o%2?`#3fae5f`:`#2f8f4a`)}}var dm={id:`castle`,name:`Toy Castle`,shape:{dims:[5,5,4],profile:rm},paint(e,t,n,r){if(am(e,0,0,n,r,t.charCodeAt(1)*3),t===`pz`||t===`nz`){e.save(),mf(e,rm,t,r),am(e,0,0,n,r,t===`pz`?3:5);for(let t of[0,4]){let n=e.createLinearGradient(t,0,t+1,0);n.addColorStop(0,`rgba(40,30,70,0.18)`),n.addColorStop(.4,`rgba(255,255,255,0.08)`),n.addColorStop(1,`rgba(40,30,70,0.22)`),e.fillStyle=n,e.fillRect(t,0,1,r),om(e,t,t+1,0),Y(e,t+.43,.7,.14,.7,.05),e.fillStyle=`#2e2a4f`,e.fill(),Y(e,t+.28,.96,.44,.13,.04),e.fill(),cm(e,t+.5,1.7,.6,1.35)}om(e,1,4,2),e.strokeStyle=`#d6d1e6`,e.lineWidth=.24,e.beginPath(),e.arc(2.5,r-1.1,.82,Math.PI,0),e.stroke();for(let t=1;t<7;t++){let n=Math.PI+t*Math.PI/7;e.strokeStyle=`#8f89a6`,e.lineWidth=.03,e.beginPath(),e.moveTo(2.5+Math.cos(n)*.7,r-1.1+Math.sin(n)*.7),e.lineTo(2.5+Math.cos(n)*.94,r-1.1+Math.sin(n)*.94),e.stroke()}e.beginPath(),e.moveTo(1.8,r),e.lineTo(1.8,r-1.1),e.arc(2.5,r-1.1,.7,Math.PI,0),e.lineTo(3.2,r),e.closePath(),e.fillStyle=`#6b4423`,e.fill(),e.save(),e.clip();for(let t=1.9;t<3.2;t+=.2)_f(e,t,r-1.9,r,.03,`#4a2e17`);_f(e,2.5,r-1.9,r,.05,`#3e2716`);for(let t of[r-.85,r-.35])Q(e,t,1.8,3.2,.07,`#2e2a4f`);e.fillStyle=`rgba(30,25,50,0.85)`,e.fillRect(1.8,r-1.9,1.4,.55);for(let t=1.9;t<3.2;t+=.18)_f(e,t,r-1.9,r-1.25,.04,`#6f6a8a`);Q(e,r-1.55,1.8,3.2,.04,`#6f6a8a`),e.restore(),lm(e,1.42,r-1.45),lm(e,3.58,r-1.45),um(e,.12,r,1.8,t===`pz`?1:2),um(e,4.85,r,1.2,t===`pz`?3:4),e.restore();return}if(t===`px`||t===`nx`){om(e,0,n,0),Y(e,n/2-.07,.6,.14,.7,.05),e.fillStyle=`#2e2a4f`,e.fill(),Y(e,n/2-.22,.86,.44,.13,.04),e.fill(),cm(e,n/2,1.8,.7,1.5),um(e,t===`px`?.2:n-.2,r,2.2,t===`px`?5:6);return}if(t===`py`){for(let t of[0,4]){e.fillStyle=`#cdc8dc`,e.fillRect(t,0,1,r);for(let n=.5;n<r;n+=.5)Q(e,n,t,t+1,.02,`#a9a3bd`);_f(e,t+.5,0,r,.02,`#a9a3bd`);for(let n=.1;n<r;n+=.5)e.fillStyle=`#9d97b3`,e.fillRect(t+.04,n,.22,.26),e.fillRect(t+.74,n,.22,.26),e.fillStyle=`rgba(255,255,255,0.3)`,e.fillRect(t+.04,n,.22,.05),e.fillRect(t+.74,n,.22,.05);e.fillStyle=`#8a5a3c`,e.fillRect(t+.32,.55,.36,.5)}e.fillStyle=`#bab5cc`,e.fillRect(1,0,3,r);for(let t=1.25;t<4;t+=.5)_f(e,t,.3,r-.3,.02,`#9d97b3`);for(let t=1.1;t<3.9;t+=.5)e.fillStyle=`#9d97b3`,e.fillRect(t,.03,.26,.22),e.fillRect(t,r-.25,.26,.22);e.fillStyle=`#6b4423`,e.fillRect(2.2,2.2,.12,.5),e.fillRect(2.68,2.2,.12,.5),Y(e,2.36,1.9,.28,1.05,.12),e.fillStyle=`#2e2a4f`,e.fill();for(let[t,n]of[[1.6,1.4],[1.78,1.4],[1.69,1.25]])X(e,t,n,.09,`#2e2a4f`)}}},fm=[`#ff4d6d`,`#3b82f6`,`#ffd23f`,`#2fbf6f`];function pm(e,t,n,r=.07){let i=e.createLinearGradient(0,0,n,0);i.addColorStop(0,`#ff4d6d`),i.addColorStop(.5,`#9b5cff`),i.addColorStop(1,`#3b82f6`),e.fillStyle=i,e.fillRect(0,t,n,r)}function mm(e,t,n,r){fm.forEach((i,a)=>{Y(e,t+a%2*r*1.15,n+Math.floor(a/2)*r*1.15,r,r,r*.25),e.fillStyle=i,e.fill()})}var hm={id:`console`,name:`Game Console`,shape:{dims:[6,2,4]},paint(e,t,n,r){if(vf(e,0,0,n,r,`#ffffff`,`#e4e0f0`),t===`py`){e.fillStyle=`#2e2a4f`,e.fillRect(0,0,n,.5),Ef(e,.4,.08,n-.8,.34,1,`#4a4570`,12),pm(e,.5,n);let t=4.35,r=2.2;X(e,4.3999999999999995,2.27,1.25,`rgba(46,42,79,0.15)`);let i=e.createRadialGradient(3.9499999999999997,1.8000000000000003,.1,t,r,1.3);i.addColorStop(0,`#ffffff`),i.addColorStop(1,`#dcd8ea`),e.fillStyle=i,e.beginPath(),e.arc(t,r,1.25,0,Math.PI*2),e.fill(),e.strokeStyle=`#cfc9e0`,e.lineWidth=.05,e.beginPath(),e.arc(t,r,1.1,0,Math.PI*2),e.stroke(),Kf(e,`CUBE 64 · PLAY`,t,r,.85,.17,`#a39dbb`),X(e,t,r,.32,`#e9e6f2`),X(e,t,r,.12,`#cfc9e0`),mm(e,.6,1.05,.22),Z(e,`CUBE 64`,1.95,1.3,.34,`#2e2a4f`),e.save(),Y(e,.55,1.9,2.3,1,.12),e.clip(),e.fillStyle=`#ece9f4`,e.fillRect(.55,1.9,2.3,1);for(let t=.2;t<3.2;t+=.16)e.strokeStyle=`#b9b3cc`,e.lineWidth=.05,e.beginPath(),e.moveTo(t,2.95),e.lineTo(t+.35,1.85),e.stroke();e.restore(),xf(e,.8,3.4,.2,`#ff4d6d`),e.strokeStyle=`#ffffff`,e.lineWidth=.04,e.lineCap=`round`,e.beginPath(),e.arc(.8,3.42,.09,-Math.PI*.3,Math.PI*1.3),e.moveTo(.8,3.28),e.lineTo(.8,3.4),e.stroke(),X(e,1.25,3.4,.1,`rgba(47,191,111,0.35)`),X(e,1.25,3.4,.055,`#2fbf6f`),Y(e,1.55,3.3,.45,.2,.08),e.fillStyle=`#c9c4da`,e.fill();return}if(t!==`ny`&&(e.fillStyle=`#2e2a4f`,e.fillRect(0,0,n,.3),pm(e,.3,n,.06)),t===`pz`)[.55,1.5].forEach((t,n)=>{Y(e,t,.7,.78,.62,.15),e.fillStyle=`#2e2a4f`,e.fill(),Y(e,t+.1,.8,.58,.42,.1),e.fillStyle=`#4a4570`,e.fill();for(let n=0;n<5;n++)X(e,t+.19+n*.1,1.01,.025,`#c9c4da`);Z(e,String(n+1),t+.39,1.58,.16,`#9d97b3`)}),Y(e,2.8,.88,1.6,.09,.045),e.fillStyle=`#b9b3cc`,e.fill(),Y(e,4.6,.78,.4,.26,.06),e.fillStyle=`#d6d2e4`,e.fill(),e.fillStyle=`#6f6a8a`,e.beginPath(),e.moveTo(4.72,.96),e.lineTo(4.88,.96),e.lineTo(4.8,.85),e.fill(),X(e,5.45,.91,.12,`rgba(47,191,111,0.35)`),X(e,5.45,.91,.065,`#2fbf6f`),mm(e,3,1.3,.14),Z(e,`CUBE 64`,4.2,1.48,.3,`#2e2a4f`);else if(t===`nz`){[[`#ffd23f`,.9],[`#ffffff`,1.3],[`#ff4d6d`,1.7]].forEach(([t,n])=>{X(e,n,1,.16,`#9aa3b5`),X(e,n,1,.12,t),X(e,n,1,.04,`#2e2a4f`)}),Sf(e,2.4,.62,1.4,.8,0,`#ffffff`,()=>{Z(e,`CUBE 64`,.7,.16,.14,`#2e2a4f`);for(let t=0;t<20;t++)_f(e,.15+t*.055,.32,.66,t%3?.02:.04,`#2e2a4f`)}),Y(e,4.5,.7,.7,.55,.12),e.fillStyle=`#2e2a4f`,e.fill();for(let t of[-.12,.12])Y(e,4.85+t-.03,.86,.06,.22,.02),e.fillStyle=`#c9c4da`,e.fill()}else if(t===`px`||t===`nx`){e.save(),Y(e,.7,.65,n-1.4,.95,.12),e.clip(),e.fillStyle=`#ece9f4`,e.fillRect(0,0,n,r);for(let t=.4;t<n;t+=.16)e.strokeStyle=`#b9b3cc`,e.lineWidth=.05,e.beginPath(),e.moveTo(t,1.65),e.lineTo(t+.3,.6),e.stroke();e.restore()}else for(let[t,i]of[[.4,.4],[n-.4,.4],[.4,r-.4],[n-.4,r-.4]])xf(e,t,i,.2,`#6f6a8a`);t!==`ny`&&(e.fillStyle=`#c9c4da`,e.fillRect(.3,r-.1,.6,.1),e.fillRect(n-.9,r-.1,.6,.1))}},gm=`#b8763c`,_m=`#d99a5a`,vm=[`#ff5d73`,`#3b82f6`,`#ffd23f`,`#2fbf6f`,`#9b5cff`,`#ff8a3d`,`#2e2a4f`,`#3fb7a8`,`#e8394a`],ym=e=>.15+e*1.45;function bm(e,t,n,r,i,a,o){if(Y(e,t,n-i,r,i,.02),e.fillStyle=a,e.fill(),e.fillStyle=`rgba(255,255,255,0.22)`,e.fillRect(t+.015,n-i,r*.18,i),e.fillStyle=`rgba(0,0,0,0.2)`,e.fillRect(t+r*.8,n-i,r*.2,i),o%3==0)for(let a of[n-i+.1,n-.12])Q(e,a,t+.03,t+r-.03,.035,`#ffd98a`);else o%3==1?(e.fillStyle=`rgba(255,255,255,0.75)`,e.fillRect(t+r*.2,n-i*.68,r*.6,i*.26),Q(e,n-i*.55,t+r*.3,t+r*.7,.02,`rgba(0,0,0,0.4)`)):(e.fillStyle=`rgba(0,0,0,0.25)`,e.fillRect(t,n-i*.3,r,i*.1),e.fillStyle=`rgba(255,255,255,0.3)`,e.fillRect(t,n-i*.8,r,i*.06))}function xm(e,t,n,r,i){let a=t;for(;a<n-.12;){let t=Math.min(n-a,.16+i.next()*.14),o=.8+i.next()*.35;bm(e,a,r,t,o,vm[i.int(vm.length)],i.int(3)),a+=t+.015}return a}function Sm(e,t,n,r,i){let a=n;for(let n=0;n<r;n++){let n=.75+i.next()*.2,r=.13+i.next()*.04,o=(i.next()-.5)*.1;e.fillStyle=vm[i.int(vm.length)],Y(e,t+o,a-r,n,r,.02),e.fill(),e.fillStyle=`#fbf3e0`,e.fillRect(t+o+n-.08,a-r+.025,.06,r-.05),a-=r}return a}function Cm(e,t,n){let r=n-.32;for(let i of[-1,1])X(e,t+i*.17,r-.24,.1,`#ffd23f`),_f(e,t+i*.15,n-.08,n,.05,`#2e2a4f`);X(e,t,r,.27,`#ff4d6d`),X(e,t,r,.2,`#ffffff`),e.strokeStyle=`#2e2a4f`,e.lineWidth=.03,e.lineCap=`round`,e.beginPath(),e.moveTo(t,r),e.lineTo(t,r-.14),e.moveTo(t,r),e.lineTo(t+.1,r+.04),e.stroke()}function wm(e,t,n){e.fillStyle=`#6b4423`,e.fillRect(t-.18,n-.08,.36,.08),_f(e,t,n-.2,n-.08,.05,`#6b4423`);let r=n-.52;X(e,t,r,.3,`#5fb4f0`),e.fillStyle=`#4fc26b`,e.beginPath(),e.ellipse(t-.08,r-.08,.12,.09,.4,0,Math.PI*2),e.ellipse(t+.12,r+.1,.1,.12,-.3,0,Math.PI*2),e.fill(),e.strokeStyle=`#e7b94a`,e.lineWidth=.035,e.beginPath(),e.arc(t,r,.36,-2.4,.9),e.stroke()}function Tm(e,t,n){for(let r=0;r<7;r++){let i=.3+r*.4;Of(e,t+Math.cos(Math.PI+i)*.1,n-.35,.3+r%2*.12,.1,Math.PI+i*.9,r%2?`#3fae5f`:`#2f9a4f`)}for(let r=0;r<4;r++)Of(e,t+.15+r*.03,n-.1+r*.18,.2,.08,1.4+r%2*.5,`#3fae5f`);e.fillStyle=`#d9774b`,e.beginPath(),e.moveTo(t-.24,n-.38),e.lineTo(t+.24,n-.38),e.lineTo(t+.18,n),e.lineTo(t-.18,n),e.fill(),e.fillStyle=Cp(`#d9774b`,-.2),e.fillRect(t-.26,n-.42,.52,.09)}function Em(e,t,n){let r=`#b0763f`;for(let i of[-1,1])X(e,t+i*.2,n-.08,.1,r);X(e,t,n-.3,.26,r),X(e,t,n-.28,.15,`#e0b07a`);for(let i of[-1,1])X(e,t+i*.26,n-.36,.09,r),X(e,t+i*.18,n-.9,.09,r),X(e,t+i*.18,n-.9,.045,`#e0b07a`);X(e,t,n-.74,.22,r),X(e,t,n-.68,.09,`#e0b07a`),X(e,t-.08,n-.8,.028,`#2e2a4f`),X(e,t+.08,n-.8,.028,`#2e2a4f`),X(e,t,n-.71,.035,`#2e2a4f`),e.fillStyle=`#ff4d6d`,e.beginPath(),e.moveTo(t,n-.53),e.lineTo(t-.12,n-.6),e.lineTo(t-.12,n-.46),e.closePath(),e.moveTo(t,n-.53),e.lineTo(t+.12,n-.6),e.lineTo(t+.12,n-.46),e.fill()}function Dm(e,t,n){e.fillStyle=`#6b4423`,e.fillRect(t-.12,n-.1,.24,.1),e.fillStyle=`#ffc53d`,e.fillRect(t-.03,n-.25,.06,.15),e.beginPath(),e.moveTo(t-.16,n-.52),e.lineTo(t+.16,n-.52),e.quadraticCurveTo(t+.14,n-.26,t,n-.24),e.quadraticCurveTo(t-.14,n-.26,t-.16,n-.52),e.fill(),e.strokeStyle=`#ffc53d`,e.lineWidth=.03;for(let r of[-1,1])e.beginPath(),e.arc(t+r*.16,n-.44,.06,-Math.PI/2,Math.PI/2,r<0),e.stroke();e.fillStyle=`rgba(255,255,255,0.6)`,e.fillRect(t-.1,n-.5,.03,.15)}var Om={id:`bookshelf`,name:`Bookshelf`,shape:{dims:[4,6,3]},paint(e,t,n,r){if(e.fillStyle=gm,e.fillRect(0,0,n,r),t===`pz`){bf(e,0,0,n,r,`rgba(110,60,20,0.3)`,21,!0);let t=new Td(21);for(let r=0;r<4;r++){let i=ym(r),a=i+1.3;vf(e,.12,i,n-.24,1.3,`#2e1b0e`,`#5b3a22`);let o=.18,s=n-.18;if(r===0)xm(e,o,1.95,a,t),wm(e,2.35,a),xm(e,2.75,s,a,t);else if(r===1){let n=xm(e,o,1.5,a,t);e.save(),e.translate(n+.02,a),e.rotate(.3),bm(e,0,0,.22,.95,`#3fb7a8`,0),e.restore(),Cm(e,2.35,a),xm(e,2.8,s,a,t)}else r===2?(Dm(e,.63,Sm(e,.19999999999999998,a,3,t)),xm(e,1.2,s,a,t)):(xm(e,o,2.3,a,t),Em(e,2.85,a),xm(e,3.3,s,a,t));e.fillStyle=_m,e.fillRect(.05,a,n-.1,.15),Q(e,a+.02,.05,n-.05,.03,`rgba(255,255,255,0.35)`),r===0&&Tm(e,3.35,i+.1+.4)}e.fillStyle=_m,e.fillRect(0,0,n,.15),Q(e,.13,0,n,.03,`rgba(60,30,10,0.4)`);for(let t of[0,n-.12]){let n=e.createLinearGradient(t,0,t+.12,0);n.addColorStop(0,_m),n.addColorStop(1,gm),e.fillStyle=n,e.fillRect(t,.15,.12,r-.15)}return}if(t===`px`||t===`nx`){bf(e,0,0,n,r,`rgba(110,60,20,0.3)`,t===`px`?5:6,!0);for(let[t,r]of[[.3,2.55],[3.15,2.55]])e.strokeStyle=`rgba(255,230,190,0.45)`,e.lineWidth=.06,e.beginPath(),e.moveTo(.3,t+r),e.lineTo(.3,t),e.lineTo(n-.3,t),e.stroke(),e.strokeStyle=`rgba(60,30,10,0.45)`,e.beginPath(),e.moveTo(n-.3,t),e.lineTo(n-.3,t+r),e.lineTo(.3,t+r),e.stroke(),e.fillStyle=`rgba(255,255,255,0.06)`,e.fillRect(.4,t+.1,n-.8,r-.2);return}if(t===`py`){bf(e,0,0,n,r,`rgba(110,60,20,0.3)`,8),X(e,.95,1.35,.55,`rgba(0,0,0,0.2)`);let t=e.createRadialGradient(.9,1.3,.05,.9,1.3,.55);t.addColorStop(0,`#fffbe6`),t.addColorStop(1,`#f2d9a0`),e.fillStyle=t,e.beginPath(),e.arc(.9,1.3,.52,0,Math.PI*2),e.fill(),e.strokeStyle=`#d9b46a`,e.lineWidth=.04,e.beginPath(),e.arc(.9,1.3,.3,0,Math.PI*2),e.stroke(),X(e,.9,1.3,.1,`#fff3c4`),[[2.75,1.25,.25,`#3b82f6`],[2.7,1.2,-.1,`#ff5d73`],[2.78,1.15,.05,`#ffd23f`]].forEach(([t,n,r,i])=>{e.save(),e.translate(t,n),e.rotate(r),e.fillStyle=`rgba(0,0,0,0.18)`,e.fillRect(-.45,-.3,.95,.65),e.fillStyle=i,e.fillRect(-.5,-.35,.95,.65),e.fillStyle=`#fbf3e0`,e.fillRect(.4,-.3,.05,.55),e.restore()}),e.strokeStyle=`#2e2a4f`,e.lineWidth=.04;for(let t of[0,.34])e.beginPath(),e.arc(1.95+t,2.45,.14,0,Math.PI*2),e.stroke();e.beginPath(),e.moveTo(2.09,2.43),e.quadraticCurveTo(2.12,2.38,2.15,2.43),e.stroke();return}if(t===`nz`){e.fillStyle=`#d9b48a`,e.fillRect(0,0,n,r);for(let t=.2;t<n;t+=.5)X(e,t,.15,.03,`#8a6a4a`),X(e,t,r-.15,.03,`#8a6a4a`);Sf(e,1.1,2.4,1.8,1.1,0,`#ffffff`,()=>{Z(e,`BJORK`,.9,.22,.26,`#2e2a4f`),Z(e,`4 × 6`,.9,.48,.16,`#6f6a8a`);for(let t=0;t<22;t++)_f(e,.3+t*.055,.66,.96,t%3?.02:.04,`#2e2a4f`)}),e.strokeStyle=`#6f6a8a`,e.lineWidth=.07,e.lineCap=`round`,e.beginPath(),e.moveTo(1.3,4.3),e.lineTo(2.4,4.3),e.lineTo(2.4,4),e.stroke();return}bf(e,0,0,n,r,`rgba(110,60,20,0.3)`,9)}},km=[10,12,12,10];function Am(e,t,n,r,i){for(let a=t+.1;a<n-.1;a+=.46){let t=i.next()<.32;if(e.fillStyle=t?`#ffe28a`:`rgba(18,38,96,0.4)`,e.fillRect(a,r,.34,.34),t){let t=i.int(5);t===0?(X(e,a+.17,r+.14,.05,`rgba(60,40,20,0.55)`),e.fillStyle=`rgba(60,40,20,0.55)`,e.fillRect(a+.09,r+.2,.16,.14)):t===1?(X(e,a+.12,r+.2,.07,`rgba(40,140,70,0.7)`),e.fillStyle=`rgba(120,60,30,0.6)`,e.fillRect(a+.08,r+.25,.08,.09)):t===2&&(e.fillStyle=`rgba(255,255,255,0.5)`,e.fillRect(a+.03,r+.03,.28,.1))}}}function jm(e,t,n,r,i){vf(e,0,0,t,n,`#9ad8ff`,`#2f5fc4`),e.fillStyle=`rgba(255,255,255,0.1)`;for(let r=-2;r<t+2;r+=1.7)e.beginPath(),e.moveTo(r,0),e.lineTo(r+.5,0),e.lineTo(r-2.5,n),e.lineTo(r-3,n),e.fill();let a=new Td(i);for(let r=.35;r<n-1.1;r+=.5)Q(e,r-.08,0,t,.06,`rgba(18,38,96,0.45)`),Am(e,0,t,r,a);for(let r=.05;r<t;r+=.46)_f(e,r,0,n-1,.03,`rgba(255,255,255,0.3)`);if(e.fillStyle=`#1f2d55`,e.fillRect(0,n-1,t,1),Q(e,n-1,0,t,.06,`#ffd23f`),r){Y(e,1.05,n-1,1.9,.3,.05),e.fillStyle=`#ff4d6d`,e.fill(),Z(e,`CUBE TOWER`,2,n-.85,.14,`#ffffff`);for(let t of[1.3,2.05])e.fillStyle=`#bfe3ff`,e.fillRect(t,n-.62,.62,.62),_f(e,t+.31,n-.62,n,.03,`#1f2d55`),_f(e,t+.26,n-.4,n-.2,.03,`#c9ced9`),_f(e,t+.36,n-.4,n-.2,.03,`#c9ced9`)}else for(let r=.4;r<t-.3;r+=.8)e.fillStyle=`#bfe3ff`,e.fillRect(r,n-.7,.4,.45);for(let r of[.45,t-.45])e.fillStyle=`#8a5a3c`,e.fillRect(r-.25,n-.22,.5,.22),X(e,r,n-.4,.22,`#3fae5f`),X(e,r-.07,n-.47,.08,`rgba(255,255,255,0.25)`)}var Mm=Object.fromEntries([Nd,Pd,Fd,Rd,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Zd,Qd,$d,ef,nf,rf,af,sf,cf,lf,df,ff,pf,Vf,Qf,cp,pp,Sp,Dp,Lp,Kp,nm,dm,hm,Om,{id:`skyscraper`,name:`Skyscraper`,shape:{dims:[4,12,4],profile:km},paint(e,t,n,r){if(t===`py`){for(let t of[0,3]){e.fillStyle=`#7bc86c`,e.fillRect(t,0,1,r),e.fillStyle=`#e8dcc0`,e.fillRect(t+.42,0,.16,r);for(let n of[.7,2.1,3.4])X(e,t+.52,n+.06,.3,`rgba(0,0,0,0.2)`),X(e,t+.5,n,.3,`#3fae5f`),X(e,t+.42,n-.08,.12,`rgba(255,255,255,0.25)`)}e.fillStyle=`#5b6b8a`,e.fillRect(1,0,2,r),e.strokeStyle=`#7b8aa8`,e.lineWidth=.06,e.strokeRect(1.08,.08,1.84,r-.16),X(e,2,2,.78,`#ffd23f`),X(e,2,2,.66,`#5b6b8a`),Z(e,`H`,2,2,.8,`#ffd23f`);for(let[t,n]of[[1.2,.2],[2.8,.2],[1.2,3.8],[2.8,3.8]])X(e,t,n,.1,`rgba(255,60,80,0.35)`),X(e,t,n,.05,`#ff3b5c`);return}if(t===`ny`){J(e,`#1f2d55`,n,r);return}if(t===`pz`||t===`nz`){e.save(),mf(e,km,t,r),jm(e,n,r,!0,t===`pz`?13:17);for(let r=0;r<n;r++)if(hf(km,t,r)===10){Q(e,2.1,r,r+1,.035,`#ffffff`);for(let t=r+.1;t<r+1;t+=.2)_f(e,t,2,2.1,.025,`#ffffff`)}e.fillStyle=`#1f2d55`,e.fillRect(1,0,2,.42),Q(e,.42,1,3,.05,`#ffd23f`),X(e,2,.95,.36,`#ffd23f`),X(e,2,.95,.3,`#ffffff`),e.strokeStyle=`#1f2d55`,e.lineWidth=.04,e.lineCap=`round`,e.beginPath(),e.moveTo(2,.95),e.lineTo(2,.76),e.moveTo(2,.95),e.lineTo(2.13,1.02),e.stroke(),e.restore();return}jm(e,n,r,!1,t===`px`?19:23),Q(e,2.1,0,n,.035,`#ffffff`),e.fillStyle=`#1f2d55`,e.fillRect(0,0,n,.3),Q(e,.3,0,n,.05,`#ffd23f`)}}].map(e=>[e.id,e]));function Nm(e,t){return{id:`wrap`,name:`Inner wrapping`,paint(n,r,i,a){J(n,e,i,a),n.save(),n.beginPath(),n.rect(0,0,i,a),n.clip(),n.strokeStyle=t,n.globalAlpha=.55,n.lineWidth=.07;for(let e=-a;e<i+a;e+=.5)n.beginPath(),n.moveTo(e,0),n.lineTo(e+a,a),n.stroke();n.globalAlpha=1;for(let e=0;e<i;e++)for(let t=0;t<a;t++)(e+t)%2==0&&kd(n,e+.5,t+.5,.16,`#fff6dd`);n.restore()}}}function Pm(e,t,n,r,i=64){let a=document.createElement(`canvas`);a.width=Math.round(n*i),a.height=Math.round(r*i);let o=a.getContext(`2d`);return o.scale(i,i),e.paint(o,t,n,r),a}var Fm=e=>e^1,Im=e=>e>>1,Lm=class{constructor(e,t){q(this,`dims`,void 0),q(this,`profile`,void 0),q(this,`cells`,[]),q(this,`byId`,void 0),q(this,`vol`,void 0),this.dims=e,this.profile=t;let[n,r,i]=e;this.vol=n*r*i,this.byId=Array(this.vol*6);for(let e=0;e<6;e+=1){let[t,a,o]=Sd[e];for(let s=0;s<n;s++)for(let n=0;n<r;n++)for(let r=0;r<i;r++){if(!this.solid(s,n,r)||this.solid(s+t,n+a,r+o))continue;let i={x:s,y:n,z:r,n:e};this.cells.push(i),this.byId[this.id(i)]=i}}}get size(){return this.byId.length}solid(e,t,n){return this.inBounds(e,t,n)?!this.profile||t<this.profile[e]:!1}id(e){return e.n*this.vol+(e.x*this.dims[1]+e.y)*this.dims[2]+e.z}get(e,t,n,r){if(this.inBounds(e,t,n))return this.byId[r*this.vol+(e*this.dims[1]+t)*this.dims[2]+n]}inBounds(e,t,n){let[r,i,a]=this.dims;return e>=0&&t>=0&&n>=0&&e<r&&t<i&&n<a}tangents(e){let t=Im(e);return[0,1,2,3,4,5].filter(e=>Im(e)!==t)}step(e,t){let[n,r,i]=Sd[t],[a,o,s]=Sd[e.n],c=e.x+n,l=e.y+r,u=e.z+i;return this.solid(c+a,l+o,u+s)?{cell:this.get(c+a,l+o,u+s,Fm(t)),dir:e.n}:this.solid(c,l,u)?{cell:this.get(c,l,u,e.n),dir:t}:{cell:this.get(e.x,e.y,e.z,t),dir:Fm(e.n)}}ray(e,t){return this.trace(e,t).cells}walled(e,t){return this.trace(e,t).wall}trace(e,t){let[n,r,i]=Sd[t],[a,o,s]=Sd[e.n],c=[];for(let t=1;;t++){let l=e.x+n*t,u=e.y+r*t,d=e.z+i*t;if(!this.inBounds(l,u,d)&&!this.inBounds(l+a,u+o,d+s))return{cells:c,wall:!1};if(this.solid(l+a,u+o,d+s))return{cells:c,wall:!0};let f=this.get(l,u,d,e.n);f&&c.push(f)}}};function Rm(e,t){let n=new Td(t.seed),r=new Int32Array(e.size).fill(-1),i=[],a=wd(-2,2.5,t.difficulty),o=Math.floor(e.cells.length*t.fill),s=0,c=t=>r[e.id(t)]<0,l=new Uint8Array(e.size),u=t=>c(t)&&!l[e.id(t)],d=new Uint8Array(e.size),f=t.pins??0,p=Math.max(3,Math.round(o/Math.max(2,(t.minLen+t.maxLen)/2)*.4)),m=new Uint16Array(e.size),h=new Map,g=[],_=new Uint8Array(e.cells.length),v=t.difficulty,y=t.chain??0,b=(t.deceive??0)*3,x=[],S=r=>{let i=g[r].map((e,t)=>({c:e,k:t})).filter(e=>u(e.c)),a=null;for(let r=0;r<6&&i.length;r++){let r=Um(n,i,e=>(e.k+1)**+b),o=t.minLen+n.int(t.maxLen-t.minLen+1),s=Vm(e,n,r.c,o,t.turn,u,c,t.minLen);if(s&&(!a||s.ray.length>a.ray.length)&&(a=s),a&&a.ray.length>=3)break}return a};for(let b=0;b<150&&s<o;){let o=e.cells.filter(u);if(o.length===0)break;let C=null,w=null;if(y>0&&n.next()<y){let e=[];for(let t=0;t<i.length;t++)!_[t]&&g[t].length&&e.push(t);e.sort((e,t)=>x[t]-x[e]||t-e);for(let t of e.slice(0,3)){let e=S(t);if(e){C=e.cells,w=e;break}}}if(!C||!w){let r=n.next()<v?o.filter(t=>m[e.id(t)]>0):[],i=n.pick(r.length?r:o),s=[];for(let t of e.tangents(i.n)){if(e.walled(i,t))continue;let n=e.ray(i,t);n.every(c)&&u(e.step(i,Fm(t)).cell)&&s.push({dir:t,ray:n})}if(s.length===0){b++;continue}let l=t=>t.ray.reduce((t,n)=>t+d[e.id(n)],0);w=Um(n,s,e=>(e.ray.length+1)**+a*(1+3*l(e)));let f=t.minLen+n.int(t.maxLen-t.minLen+1);if(C=Bm(e,n,i,w.dir,f,t.turn,u,w.ray,v,t=>m[e.id(t)]>0),C.length<t.minLen){b++;continue}}let T=i.length;x[T]=1;for(let t of C){let n=e.id(t);r[n]=T;for(let t of h.get(n)??[])if(x[T]=Math.max(x[T],x[t]+1),!_[t]){_[t]=1;for(let n of g[t])m[e.id(n)]--}}g.push(w.ray);for(let t of w.ray){let n=e.id(t);m[n]++;let r=h.get(n);r?r.push(T):h.set(n,[T])}let E=0,D=f>0?zm(e,C[0],w.dir,w.ray):0;if(f>0&&i.length<p&&D>=3&&n.next()<.7){let t=D,r=t>=4?2+n.int(t-3):1;E=r,f--;for(let t=0;t<=r;t++)l[e.id(w.ray[t])]=1;for(let t=0;t<r;t++)d[e.id(w.ray[t])]=1}let ee={cells:C.reverse(),dir:w.dir};E&&(ee.pin=E),i.push(ee),s+=ee.cells.length,b=0}return t.fill>=.9&&Hm(e,i,r,l),i.reverse()}function zm(e,t,n,r){let i=t,a=0;for(;a<r.length;a++){let t=e.step(i,n);if(t.cell!==r[a]||t.dir!==n)break;i=t.cell}return a}function Bm(e,t,n,r,i,a,o,s,c,l){let u=new Set(s.map(t=>e.id(t)));u.add(e.id(n));let d=[n],f=n,p=Fm(r),m=e.step(f,p);for(d.push(m.cell),u.add(e.id(m.cell)),f=m.cell,p=m.dir;d.length<i;){let n=e.tangents(f.n).filter(e=>e!==p&&e!==Fm(p));t.next()<.5&&n.reverse();let r=t.next()<a?[...n,p]:[p,...n];if(t.next()<c){let t=t=>e.step(f,t).cell;r=[...r.filter(e=>l(t(e))),...r.filter(e=>!l(t(e)))]}let i=!1;for(let t of r){let n=e.step(f,t);if(o(n.cell)&&!u.has(e.id(n.cell))){d.push(n.cell),u.add(e.id(n.cell)),f=n.cell,p=n.dir,i=!0;break}}if(!i)break}return d}function Vm(e,t,n,r,i,a,o,s){let c=[n],l=[],u=new Set([e.id(n)]),d=n,f=t.pick(e.tangents(n.n));for(;c.length<r;){let n=e.tangents(d.n).filter(e=>e!==f&&e!==Fm(f));t.next()<.5&&n.reverse();let r=c.length===1?[f,...n,Fm(f)]:t.next()<i?[...n,f]:[f,...n],o=!1;for(let t of r){let n=e.step(d,t),r=e.id(n.cell);if(a(n.cell)&&!u.has(r)){c.push(n.cell),l[c.length-1]=n.dir,u.add(r),d=n.cell,f=n.dir,o=!0;break}}if(!o)break}let p=null;for(let t=Math.max(1,s-1);t<c.length;t++){let n=l[t];if(e.walled(c[t],n))continue;let r=e.ray(c[t],n);if(!r.length)continue;let i=new Set(c.slice(0,t+1).map(t=>e.id(t)));if(!r.every(t=>o(t)&&!i.has(e.id(t))))continue;let a=Math.min(r.length,3)*100+t;(!p||a>p.score)&&(p={j:t,dir:n,ray:r,score:a})}return p?{cells:c.slice(0,p.j+1).reverse(),dir:p.dir,ray:p.ray}:null}function Hm(e,t,n,r){let i=new Map;t.forEach((t,n)=>{for(let r of e.ray(t.cells[t.cells.length-1],t.dir)){let t=e.id(r),a=i.get(t);a?a.push(n):i.set(t,[n])}});for(let a=!0;a;){a=!1;for(let o of e.cells){let s=e.id(o);if(n[s]>=0||r[s])continue;let c=i.get(s)??[];for(let r of e.tangents(o.n)){let i=e.step(o,r).cell,l=n[e.id(i)];if(l<0)continue;let u=t[l];if(!(u.cells[0]!==i||u.cells.length<2)&&!c.some(e=>e>=l)){u.cells.unshift(o),n[s]=l,a=!0;break}}}}}function Um(e,t,n){let r=t.map(n),i=e.next()*r.reduce((e,t)=>e+t,0);for(let e=0;e<t.length;e++)if(i-=r[e],i<=0)return t[e];return t[t.length-1]}function Wm(e,t){let n=new Int32Array(e.size).fill(-1),r=0;t.forEach((t,i)=>{for(let r of t.cells)n[e.id(r)]=i;r+=t.cells.length});let i=r=>{let i=t[r];return e.ray(i.cells[i.cells.length-1],i.dir).every(t=>n[e.id(t)]<0)},a=t.map((e,t)=>t),o=0,s=-1;for(;a.length;){let r=a.filter(i);if(s<0&&(s=r.length),!r.length)break;for(let i of r)for(let r of t[i].cells)n[e.id(r)]=-1;a=a.filter(e=>!r.includes(e)),o++}return{arrows:t.length,cells:r,coverage:r/e.cells.length,initialFree:s,waves:o,solvable:a.length===0}}var Gm=.2,Km=.36,qm=.52,Jm=.018,Ym=14,Xm=40,Zm=e=>new B(...Sd[e]),Qm=class{constructor(e,t){q(this,`pts`,[]),q(this,`lifts`,[]),q(this,`segN`,[]),q(this,`cum`,[0]),q(this,`cellS`,[0]),q(this,`bodyLen`,void 0),q(this,`exitLen`,void 0);let[n,r,i]=e.dims,a=new B((n-1)/2,(r-1)/2,(i-1)/2),o=e=>new B(e.x,e.y,e.z).sub(a),s=e=>o(e).addScaledVector(Zm(e.n),.5),c=t.cells;this.push(s(c[0]),Zm(c[0].n));for(let e=1;e<c.length;e++){let t=c[e-1],n=c[e];if(t.n!==n.n){let e=Zm(t.n),r=Zm(n.n),i=s(t),a=s(n).sub(i);a.addScaledVector(e,-a.dot(e)).normalize();let o=i.addScaledVector(a,.5);this.segN.push(e),this.push(o,e.clone().add(r))}this.segN.push(Zm(n.n)),this.push(s(n),Zm(n.n)),this.cellS.push(this.cum[this.cum.length-1])}this.bodyLen=this.cum[this.cum.length-1];let l=c[c.length-1],[u,d,f]=Sd[t.dir],p=0;for(;e.inBounds(l.x+u*(p+1),l.y+d*(p+1),l.z+f*(p+1));)p++;this.exitLen=p+.5,this.segN.push(Zm(l.n)),this.push(s(l).addScaledVector(Zm(t.dir),Xm),Zm(l.n))}push(e,t){this.pts.length&&this.cum.push(this.cum[this.cum.length-1]+e.distanceTo(this.pts[this.pts.length-1])),this.pts.push(e),this.lifts.push(t)}segAt(e){let t=0;for(;t<this.segN.length-1&&this.cum[t+1]<e;)t++;return t}pointAt(e,t){let n=this.segAt(e),r=this.cum[n+1]-this.cum[n],i=r>0?Math.min(1,Math.max(0,(e-this.cum[n])/r)):0;return t.lerpVectors(this.pts[n],this.pts[n+1],i)}},$m=new B,eh=new B,th=new B,nh=new B,rh=new B;function ih(e,t){let n=t?new Vo({color:e,roughness:.85,metalness:0,clearcoat:.7,clearcoatRoughness:.2,envMapIntensity:.6}):new G({color:e,roughness:.9,metalness:0,envMapIntensity:.15});return n.transparent=!0,n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aAcross;
varying float vAcross;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vAcross = aAcross;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vAcross;`).replace(`#include <map_fragment>`,`#include <map_fragment>
        float inkD = 1.0 - abs(vAcross);
        diffuseColor.a *= clamp(inkD / max(fwidth(inkD) * 1.25, 1e-4), 0.0, 1.0);`)},n.customProgramCacheKey=()=>t?`ink-wet`:`ink`,n}var ah=new B,oh=class{constructor(e,t,n={}){q(this,`path`,void 0),q(this,`mesh`,void 0),q(this,`geo`,new Br),q(this,`pos`,void 0),q(this,`nor`,void 0),q(this,`acr`,void 0),q(this,`n`,0),q(this,`lift`,void 0),q(this,`widthMul`,void 0),q(this,`round`,void 0),this.path=e,this.lift=n.lift??Jm,this.widthMul=n.width??1,this.round=n.round??0;let r=e.segN.length+2,i=r*2+(r+2)*Ym+4;this.pos=new Float32Array(i*9),this.nor=new Float32Array(i*9),this.acr=new Float32Array(i*3),this.geo.setAttribute(`position`,new Tr(this.pos,3).setUsage(et)),this.geo.setAttribute(`normal`,new Tr(this.nor,3).setUsage(et)),this.geo.setAttribute(`aAcross`,new Tr(this.acr,1).setUsage(et)),this.mesh=new W(this.geo,t),this.mesh.frustumCulled=!1}update(e,t,n=1){this.n=0;let r=this.path;if(t-e>1e-4){let i=Gm/2*n*this.widthMul,a=this.lift,o=[],s=r.segAt(e),c=r.segAt(t);o.push({p:r.pointAt(e,new B),lift:r.segN[s]});for(let e=s+1;e<=c;e++)o.push({p:r.pts[e],lift:r.lifts[e]});o.push({p:r.pointAt(t,new B),lift:r.segN[c]});for(let e=0;e<o.length-1;e++){let t=o[e],n=o[e+1],c=r.segN[s+e];t.p.distanceToSquared(n.p)<1e-8||($m.copy(t.p).addScaledVector(t.lift,a),eh.copy(n.p).addScaledVector(n.lift,a),th.subVectors(n.p,t.p).normalize(),nh.crossVectors(c,th).multiplyScalar(i),this.quad($m,eh,nh,c),e>0&&e<o.length-1&&t.lift.lengthSq()<1.5&&this.disc($m,c,i))}let l=o[0];l.lift.lengthSq()<1.5&&this.disc(rh.copy(l.p).addScaledVector(l.lift,a),r.segN[s],i);let u=r.segN[c],d=o[o.length-1].p;r.pointAt(Math.max(0,t-.05),th),th.subVectors(d,th),th.lengthSq()<1e-8&&th.subVectors(r.pts[c+1],r.pts[c]),th.normalize(),nh.crossVectors(u,th).multiplyScalar(qm/2*n*this.widthMul),$m.copy(d).addScaledVector(u,a*1.2).addScaledVector(th,-.04);let f=$m.clone().addScaledVector(th,.39999999999999997),p=$m.clone().add(nh),m=$m.clone().sub(nh),h=$m.clone().addScaledVector(th,.39999999999999997/3),g=[[m,f],[f,p],[p,m]];for(let[e,t]of g)this.vert(h,u,0,null),this.vert(e,u,1,ah.subVectors(e,h).normalize()),this.vert(t,u,1,ah.subVectors(t,h).normalize())}this.geo.setDrawRange(0,this.n),this.geo.getAttribute(`position`).needsUpdate=!0,this.geo.getAttribute(`normal`).needsUpdate=!0,this.geo.getAttribute(`aAcross`).needsUpdate=!0}quad(e,t,n,r){let i=e.clone().add(n),a=e.clone().sub(n),o=t.clone().add(n),s=t.clone().sub(n),c=n.clone().normalize(),l=c.clone().negate();this.vert(a,r,-1,l),this.vert(s,r,-1,l),this.vert(o,r,1,c),this.vert(a,r,-1,l),this.vert(o,r,1,c),this.vert(i,r,1,c)}disc(e,t,n){let r=new B(Math.abs(t.x)>.5?0:1,+(Math.abs(t.x)>.5),0).cross(t).normalize(),i=new B().crossVectors(t,r),a=new B,o=new B,s=new B,c=new B;for(let l=0;l<Ym;l++){let u=l/Ym*Math.PI*2,d=(l+1)/Ym*Math.PI*2;s.copy(r).multiplyScalar(Math.cos(u)).addScaledVector(i,Math.sin(u)),c.copy(r).multiplyScalar(Math.cos(d)).addScaledVector(i,Math.sin(d)),a.copy(e).addScaledVector(s,n),o.copy(e).addScaledVector(c,n),this.vert(e,t,0,null),this.vert(a,t,1,s),this.vert(o,t,1,c)}}vert(e,t,n,r){if(this.n>=this.acr.length)return;let i=this.n*3;this.pos[i]=e.x,this.pos[i+1]=e.y,this.pos[i+2]=e.z;let a=t.x,o=t.y,s=t.z;if(r&&this.round>0){a+=r.x*this.round,o+=r.y*this.round,s+=r.z*this.round;let e=Math.hypot(a,o,s)||1;a/=e,o/=e,s/=e}this.nor[i]=a,this.nor[i+1]=o,this.nor[i+2]=s,this.acr[this.n]=n,this.n++}dispose(){this.geo.dispose()}},sh=.1,ch=12,lh=.3,uh=.78,dh=.27,fh=.44,ph=.55,mh=new B,hh=new B,gh=new B,_h=class{constructor(e,t,n){q(this,`path`,void 0),q(this,`base`,void 0),q(this,`mesh`,void 0),q(this,`geo`,new Br),q(this,`pos`,void 0),q(this,`nor`,void 0),q(this,`idx`,void 0),q(this,`maxRings`,void 0),this.path=e,this.base=n,this.maxRings=16+(e.pts.length+2)*6,this.pos=new Float32Array(this.maxRings*ch*3),this.nor=new Float32Array(this.maxRings*ch*3),this.idx=new Uint32Array((this.maxRings-1)*ch*6),this.geo.setAttribute(`position`,new Tr(this.pos,3).setUsage(et)),this.geo.setAttribute(`normal`,new Tr(this.nor,3).setUsage(et)),this.geo.setIndex(new Tr(this.idx,1).setUsage(et)),this.mesh=new W(this.geo,t),this.mesh.frustumCulled=!1}update(e,t,n=1){let r=this.path;if(t-e<1e-4){this.geo.setDrawRange(0,0);return}let i=sh*n,a=this.base+i*uh*.62,o=r.segAt(e),s=r.segAt(t),c=[];c.push({p:r.pointAt(e,new B),lift:r.segN[o],segIn:r.segN[o],segOut:r.segN[o]});for(let e=o+1;e<=s;e++)c.push({p:r.pts[e],lift:r.lifts[e],segIn:r.segN[e-1],segOut:r.segN[e]});c.push({p:r.pointAt(t,new B),lift:r.segN[s],segIn:r.segN[s],segOut:r.segN[s]});let l=[];for(let e of c){let t=e.p.clone().addScaledVector(e.lift,a);l.length&&l[l.length-1].c.distanceToSquared(t)<1e-8||l.push({c:t,up:e.lift.clone().normalize(),segIn:e.segIn,segOut:e.segOut})}if(l.length<2){this.geo.setDrawRange(0,0);return}let u=[l[0]];for(let e=1;e<l.length-1;e++){let t=l[e-1].c,n=l[e].c,r=l[e+1].c,i=gh.subVectors(n,t),a=i.length();i.divideScalar(a);let o=new B().subVectors(r,n),s=o.length();if(o.divideScalar(s),i.dot(o)>.999){u.push(l[e]);continue}let c=Math.min(lh,a*.5,s*.5),d=n.clone().addScaledVector(i,-c),f=n.clone().addScaledVector(o,c),p=l[e].segIn.clone().add(l[e].segOut).normalize();for(let t=0;t<=4;t++){let r=t/4,i=1-r,a=new B().addScaledVector(d,i*i).addScaledVector(n,2*i*r).addScaledVector(f,r*r),o=new B().addScaledVector(l[e].segIn,i*i).addScaledVector(p,2*i*r).addScaledVector(l[e].segOut,r*r).normalize();u.push({c:a,up:o})}}u.push(l[l.length-1]);let d=e=>{let t=u[Math.max(0,e-1)].c,n=u[Math.min(u.length-1,e+1)].c;return new B().subVectors(n,t).normalize()},f=[],p=d(0);for(let e of[.12,.6,1.05])f.push({c:u[0].c.clone().addScaledVector(p,-i*Math.cos(e)),t:p,up:u[0].up,r:i*Math.sin(e),flat:uh,tilt:-(Math.PI/2-e)});for(let e=0;e<u.length;e++)f.push({c:u[e].c,t:d(e),up:u[e].up,r:i,flat:uh,tilt:0});let m=u[u.length-1],h=d(u.length-1),g=dh*n,_=Math.atan2(g,fh),v=(e,t,n,r=ph)=>f.push({c:m.c.clone().addScaledVector(h,e),t:h,up:m.up,r:t,flat:r,tilt:n});v(0,i,-Math.PI/2,uh),v(0,g,-Math.PI/2),v(.03,g,_*.4),v(.16,g*.72,_),v(.3,g*.4,_),v(.4,g*.08,_*1.4),v(fh,.001,Math.PI/2);let y=Math.min(f.length,this.maxRings),b=0;for(let e=0;e<y;e++){let t=f[e];mh.crossVectors(t.t,t.up).normalize(),hh.crossVectors(mh,t.t).normalize();let n=Math.cos(t.tilt),r=Math.sin(t.tilt);for(let e=0;e<ch;e++){let i=e/ch*Math.PI*2,a=Math.cos(i),o=Math.sin(i);this.pos[b]=t.c.x+(mh.x*a+hh.x*o*t.flat)*t.r,this.pos[b+1]=t.c.y+(mh.y*a+hh.y*o*t.flat)*t.r,this.pos[b+2]=t.c.z+(mh.z*a+hh.z*o*t.flat)*t.r;let s=mh.x*a+hh.x*o/t.flat,c=mh.y*a+hh.y*o/t.flat,l=mh.z*a+hh.z*o/t.flat,u=Math.hypot(s,c,l)||1;s=s/u*n+t.t.x*r,c=c/u*n+t.t.y*r,l=l/u*n+t.t.z*r;let d=Math.hypot(s,c,l)||1;this.nor[b]=s/d,this.nor[b+1]=c/d,this.nor[b+2]=l/d,b+=3}}let x=0;for(let e=0;e<y-1;e++)for(let t=0;t<ch;t++){let n=e*ch+t,r=(e+1)*ch+t,i=e*ch+(t+1)%ch,a=(e+1)*ch+(t+1)%ch;this.idx[x++]=n,this.idx[x++]=r,this.idx[x++]=i,this.idx[x++]=r,this.idx[x++]=a,this.idx[x++]=i}this.geo.setDrawRange(0,x),this.geo.getAttribute(`position`).needsUpdate=!0,this.geo.getAttribute(`normal`).needsUpdate=!0,this.geo.getIndex().needsUpdate=!0}dispose(){this.geo.dispose()}},vh=new B;function yh(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;vh.copy(t),vh[r]=0,vh.normalize();let l=.5*o/(o+s),u=1-vh.angleTo(e)/c;return Math.sign(vh[n])===1?u*l:s/(o+s)+l+l*(1-u)}var bh=class e extends ra{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new B,c=new B,l=new B(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new B,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=yh(m,c,`z`,`y`,i,n),f[a+1]=1-yh(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-yh(m,c,`z`,`y`,i,n),f[a+1]=1-yh(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-yh(m,c,`x`,`z`,i,e),f[a+1]=yh(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-yh(m,c,`x`,`z`,i,e),f[a+1]=1-yh(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-yh(m,c,`x`,`y`,i,e),f[a+1]=1-yh(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=yh(m,c,`x`,`y`,i,e),f[a+1]=1-yh(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},xh=.955,Sh=.004,Ch=.93,wh=.11,Th=.34,Eh=.42,Dh=[[5,2],[4,2],[0,5],[0,4],[0,2],[1,2]],Oh=e=>new B(...Sd[e]),kh=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,Ah=(e,t=1.7)=>1+(t+1)*(e-1)**3+t*(e-1)**2,jh=class{constructor(e,t,n,r={tile:`flat`,motion:`basic`}){q(this,`surface`,void 0),q(this,`opts`,void 0),q(this,`group`,new Rn),q(this,`body`,void 0),q(this,`surfaceTop`,void 0),q(this,`faces`,[]),q(this,`lookup`,new Map),q(this,`flipping`,new Set),q(this,`closing`,new Set),q(this,`introActive`,!1),q(this,`seal`,{value:0}),q(this,`shine`,{value:-3}),q(this,`shineAmt`,{value:0}),q(this,`sealT`,-1),q(this,`holo`,{value:0}),q(this,`holoTarget`,0),q(this,`time`,{value:0}),q(this,`faceXf`,[null,null,null,null,null,null]),q(this,`layers`,new Map),q(this,`props`,[]),q(this,`tmpM`,new H),q(this,`tmpR`,new H),q(this,`tmpS`,new H),q(this,`tmpP`,new B),this.surface=e,this.opts=r;let i=r.tile===`chiclet`;this.surfaceTop=i?.114:Sh;let[a,o,s]=e.dims,c=new U(n.body);i&&c.multiplyScalar(.86),this.body=new W(e.profile?Mh(e.dims,e.profile):new bh(a,o,s,3,.06),new G({color:c,roughness:.75,metalness:0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:2})),this.body.name=`body`,this.body.castShadow=!0,this.group.add(this.body);let l=new U(n.paper),u=new B((a-1)/2,(o-1)/2,(s-1)/2),d=e.dims;for(let n=0;n<6;n+=1){let[c,f]=Dh[n],p=Oh(c),m=Oh(f),h=Oh(n),g=c>>1,_=f>>1,v=d[g],y=d[_],b=e.cells.filter(e=>e.n===n),x=i?new bh(Ch,Ch,wh,2,.045):new Eo(xh,xh),S=new Mi(new Float32Array(b.length*2),2);x.setAttribute(`aCell`,S);let C=new Mi(new Float32Array(b.length),1);C.setUsage(et),x.setAttribute(`aFlip`,C);let w=new $i(Pm(t,Ed[n],v,y));w.colorSpace=Je,w.anisotropy=8;let T=r.fx??{},E={uSeal:this.seal,uShine:this.shine,uShineAmt:this.shineAmt,uSweepScale:{value:1/(.5*Math.hypot(a,o,s))},uGloss:{value:+!!T.gloss},uBevel:{value:+!!T.bevel},uRimColor:{value:T.rim?new U(T.rim).multiplyScalar(.55):new U(0,0,0)},uRevealFx:{value:+!!T.reveal},uHolo:this.holo,uTime:this.time},D=new Bi(x,i?zh(w,l,v,y,E):Rh(w,l,v,y,E),b.length);D.instanceMatrix.setUsage(et),D.frustumCulled=!1,D.castShadow=!0,D.raycast=()=>{};let ee={mesh:D,basis:new H().makeBasis(p,m,h),normal:h,centers:[],state:new Float32Array(b.length).fill(-1),intro:new Float32Array(b.length).fill(1),texture:w,flip:C};b.forEach((t,r)=>{let i=[t.x,t.y,t.z],a=c%2==0?i[g]:d[g]-1-i[g],o=f%2==0?i[_]:d[_]-1-i[_];S.setXY(r,a,o),ee.centers.push(new B(t.x,t.y,t.z).sub(u).addScaledVector(h,.5)),this.lookup.set(e.id(t),[n,r])}),this.faces.push(ee);for(let e=0;e<b.length;e++)this.writeTile(n,e);this.group.add(D)}}playIntro(e=.7){let t=Math.hypot(...this.surface.dims),n=new B(...this.surface.dims).multiplyScalar(-.5);this.faces.forEach(r=>{r.centers.forEach((i,a)=>{r.intro[a]=-(i.distanceTo(n)/t*e)-.001})}),this.introActive=!0;for(let e=0;e<6;e++)for(let t=0;t<this.faces[e].centers.length;t++)this.writeTile(e,t)}isRevealed(e){let t=this.lookup.get(this.surface.id(e));return!!t&&this.faces[t[0]].state[t[1]]>=0&&!this.closing.has(t[0]*65536+t[1])}cover(e){let t=this.lookup.get(this.surface.id(e));if(!t)return!1;let[n,r]=t,i=n*65536+r;return this.faces[n].state[r]<0||this.closing.has(i)?!1:(this.flipping.delete(i),this.closing.add(i),!0)}reveal(e,t=!1){let n=this.lookup.get(this.surface.id(e));if(!n)return!1;let[r,i]=n,a=this.faces[r];return this.closing.delete(r*65536+i)?(this.flipping.add(r*65536+i),!0):a.state[i]>=0?!1:(a.state[i]=+!!t,t?this.writeTile(r,i):this.flipping.add(r*65536+i),a.mesh.instanceMatrix.needsUpdate=!0,!0)}get profileHeights(){return this.surface.profile}get half(){let[e,t,n]=this.surface.dims;return new B(e/2,t/2,n/2)}setFaceTransform(e,t){this.faceXf[e]=t,this.refresh(e)}setLayerTransform(e,t,n){n?this.layers.set(e,{test:t,m:n}):this.layers.delete(e),this.refresh()}addProp(e){this.props.push(e),this.group.add(e)}refresh(e){this.faces.forEach((t,n)=>{if(e===void 0||n===e){for(let e=0;e<t.centers.length;e++)this.writeTile(n,e);t.mesh.instanceMatrix.needsUpdate=!0}})}setHolo(e){this.holoTarget=+!!e}playSeal(){this.sealT=0}get busy(){return this.flipping.size>0||this.closing.size>0}update(e){this.time.value+=e,this.holo.value+=(this.holoTarget-this.holo.value)*Math.min(1,e*2.5);let t=this.opts.motion===`juicy`?Eh:Th;for(let n of this.flipping){let r=n>>16,i=n&65535,a=this.faces[r];a.state[i]=Math.min(1,a.state[i]+e/t),this.writeTile(r,i),a.mesh.instanceMatrix.needsUpdate=!0,a.state[i]>=1&&this.flipping.delete(n)}for(let n of this.closing){let r=n>>16,i=n&65535,a=this.faces[r];a.state[i]-=e/t,a.state[i]<=0&&(a.state[i]=-1,this.closing.delete(n)),this.writeTile(r,i),a.mesh.instanceMatrix.needsUpdate=!0}if(this.sealT>=0){let t=this.sealT<.35;this.sealT+=e;let n=Math.min(1,this.sealT/.35);this.seal.value=n*n*(3-2*n);let r=Math.min(1,this.sealT/1);this.shine.value=-1.4+2.8*r,this.shineAmt.value=Math.sin(Math.PI*r)*.45,t&&this.faces.forEach((e,t)=>{for(let n=0;n<e.centers.length;n++)this.writeTile(t,n);e.mesh.instanceMatrix.needsUpdate=!0}),this.sealT>=1&&(this.sealT=-1)}if(this.introActive){let t=!1;this.faces.forEach((n,r)=>{for(let i=0;i<n.intro.length;i++)n.intro[i]>=1||(n.intro[i]=n.intro[i]<0?Math.min(1e-4,n.intro[i]+e):Math.min(1,n.intro[i]+e/.32),t=!0,this.writeTile(r,i));n.mesh.instanceMatrix.needsUpdate=!0}),this.introActive=t}}writeTile(e,t){let n=this.faces[e],r=n.state[t],i=r<0?0:Math.min(1,r);n.flip.setX(t,i),n.flip.needsUpdate=!0;let a=this.opts.motion===`juicy`,o=this.opts.tile===`chiclet`,s=o?.058:Sh,c,l,u;a?(c=Math.PI*(i<=0?0:Ah(i,1.6)),l=.34*Math.sin(Math.PI*Math.min(1,i*1.1)),u=1+.12*Math.sin(Math.PI*i)):(c=Math.PI*kh(i),l=.24*Math.sin(Math.PI*i),u=1+.1*Math.sin(Math.PI*i));let d=n.intro[t];d<1&&(u*=d<=0?0:Ah(d,2.2));let f=1+(1/(o?Ch:xh)-1)*this.seal.value;this.tmpP.copy(n.centers[t]).addScaledVector(n.normal,s+l),this.tmpM.copy(n.basis).multiply(this.tmpR.makeRotationY(c)).multiply(this.tmpS.makeScale(Math.max(u*f,1e-4),Math.max(u*f,1e-4),Math.max(u,1e-4))).setPosition(this.tmpP);let p=this.faceXf[e];p&&this.tmpM.premultiply(p);for(let e of this.layers.values())e.test(n.centers[t])&&this.tmpM.premultiply(e.m);n.mesh.setMatrixAt(t,this.tmpM)}dispose(){for(let e of this.props)e.traverse(e=>{let t=e;t.geometry&&!e.isSprite&&t.geometry.dispose();let n=t.material;for(let e of Array.isArray(n)?n:n?[n]:[])e.map?.dispose(),e.dispose()});this.body.geometry.dispose(),this.body.material.dispose();for(let e of this.faces)e.mesh.geometry.dispose(),e.mesh.material.dispose(),e.texture.dispose(),e.mesh.dispose()}};function Mh(e,t){let[n,r,i]=e,a=.05,o=new La;o.moveTo(a,a),o.lineTo(n-a,a),o.lineTo(n-a,t[n-1]-a);for(let e=n-1;e>0;e--){if(t[e]===t[e-1])continue;let n=t[e]>t[e-1]?e+a:e-a;o.lineTo(n,t[e]-a),o.lineTo(n,t[e-1]-a)}o.lineTo(a,t[0]-a),o.closePath();let s=new So(o,{depth:i-2*a,bevelEnabled:!0,bevelThickness:a,bevelSize:a,bevelSegments:2,curveSegments:1});return s.translate(-n/2,-r/2,-i/2+a),s}var Nh=`
vec3 hash32(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yxz + 33.33);
  return fract((p3.xxy + p3.yzz) * p3.zyx);
}
`,Ph=`uniform float uSweepScale;
varying float vSweep;`,Fh=`
  vec4 fxWorld = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
  vSweep = dot(fxWorld.xyz, normalize(vec3(0.8, 0.55, 0.25))) * uSweepScale;`,Ih=`uniform float uSeal;
uniform float uShine;
uniform float uShineAmt;
varying float vSweep;`,Lh=e=>`
  float fxBand = exp(-pow((vSweep - uShine) * 3.2, 2.0));
  totalEmissiveRadiance += vec3(1.0, 0.97, 0.9) * fxBand * uShineAmt * ((${e}) ? 1.0 : 0.25);`;function Rh(e,t,n,r,i){let a=new G({map:e,side:2,roughness:.6,metalness:0}),o={uPaper:{value:t},uFace:{value:new z(n,r)},...i};return a.onBeforeCompile=e=>{Object.assign(e.uniforms,o),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec2 aCell;
attribute float aFlip;
varying vec2 vCell;
varying float vFlip;
`+Ph).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vCell = aCell;
vFlip = aFlip;`).replace(`#include <project_vertex>`,`#include <project_vertex>`+Fh),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform vec3 uPaper;
uniform vec2 uFace;
uniform float uGloss;
uniform float uBevel;
uniform vec3 uRimColor;
uniform float uRevealFx;
uniform float uHolo;
uniform float uTime;
varying vec2 vCell;
varying float vFlip;
`+Nh+Ih).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
        // Revealed art reads as lacquered; the paper stays matte.
        if (!gl_FrontFacing) roughnessFactor = mix(roughnessFactor, 0.28, uGloss);`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        if (uBevel > 0.5) {
          // Bevel without geometry: tilt the normal toward the tile edge in a thin band, using a
          // tangent frame from screen-space derivatives. Fades out once the object is sealed.
          vec2 bc = vMapUv - 0.5;
          float bw = 0.085;
          vec2 slope = vec2(smoothstep(0.5 - bw, 0.5, abs(bc.x)) * sign(bc.x), smoothstep(0.5 - bw, 0.5, abs(bc.y)) * sign(bc.y));
          vec3 bq0 = dFdx(-vViewPosition);
          vec3 bq1 = dFdy(-vViewPosition);
          vec2 bst0 = dFdx(vMapUv);
          vec2 bst1 = dFdy(vMapUv);
          vec3 bq1perp = cross(bq1, normal);
          vec3 bq0perp = cross(normal, bq0);
          vec3 bT = bq1perp * bst0.x + bq0perp * bst1.x;
          vec3 bB = bq1perp * bst0.y + bq0perp * bst1.y;
          float bdet = max(dot(bT, bT), dot(bB, bB));
          float bscale = bdet == 0.0 ? 0.0 : inversesqrt(bdet);
          normal = normalize(normal + (bT * slope.x + bB * slope.y) * bscale * 0.75 * (1.0 - uSeal));
        }`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>`+Lh(`!gl_FrontFacing`)+`
        // Fresnel rim: a thin glow on silhouette edges, tinted to the backdrop.
        float fres = pow(1.0 - clamp(abs(dot(normal, normalize(vViewPosition))), 0.0, 1.0), 3.0);
        totalEmissiveRadiance += uRimColor * fres;
        // Reveal flash: the art glows for a moment while its tile turns over.
        if (!gl_FrontFacing) totalEmissiveRadiance += diffuseColor.rgb * sin(3.14159 * clamp(vFlip, 0.0, 1.0)) * 0.28 * uRevealFx;
        // Holographic foil (shiny collectibles): a thin-film rainbow tint that slides with the viewing
        // angle and position, a brighter foil band drifting across like a tilted trading card, a
        // sheen at grazing angles and sparse twinkling glitter. The art stays readable underneath.
        if (uHolo > 0.001 && !gl_FrontFacing) {
          float hf = 1.0 - clamp(abs(dot(normal, normalize(vViewPosition))), 0.0, 1.0);
          float ht = hf * 1.6 + vSweep * 0.6 + uTime * 0.1;
          vec3 rainbow = 0.5 + 0.5 * cos(6.28318 * (ht + vec3(0.0, 0.33, 0.67)));
          float band = exp(-pow(fract(vSweep * 0.4 - uTime * 0.16) - 0.5, 2.0) * 40.0);
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * (0.55 + 0.9 * rainbow), 0.24 * uHolo);
          // Glitter flecks printed on the foil: fixed to the art (they turn with the cube), each one
          // fading in and out on its own slow beat, never smaller than a pixel so turning can't alias them.
          vec2 gp = (vCell + tuv) * 4.0;
          vec3 gh = hash32(floor(gp));
          vec2 gd = fract(gp) - 0.5 - (gh.yz - 0.5) * 0.5;
          float gr = max(0.09, length(fwidth(gp)));
          float fleck = 1.0 - smoothstep(gr * 0.35, gr, length(gd));
          float beat = fract(uTime * (0.18 + 0.22 * gh.y) + gh.z);
          float glitter = step(0.8, gh.x) * fleck * pow(1.0 - abs(beat * 2.0 - 1.0), 10.0);
          // Dark art (lacquer, chocolate) keeps a subtle sheen instead of turning into a rainbow.
          float holoLum = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
          totalEmissiveRadiance += uHolo * (rainbow * (0.02 + 0.14 * hf + 0.18 * band) * (0.3 + 0.7 * holoLum) + vec3(glitter * 0.6));
        }`).replace(`#include <map_fragment>`,`
        // The back face is seen mirrored after the flip, so mirror u back.
        vec2 tuv = vec2(gl_FrontFacing ? vMapUv.x : 1.0 - vMapUv.x, vMapUv.y);
        vec3 tileC = uPaper;
        if (!gl_FrontFacing) {
          vec3 art = texture2D(map, (vCell + tuv) / uFace).rgb;
          // Reveal bloom: the art turns from grey to full colour over the second half of the flip.
          float grey = dot(art, vec3(0.299, 0.587, 0.114));
          tileC = mix(art, mix(vec3(grey), art, smoothstep(0.35, 1.0, vFlip)), uRevealFx);
        }
        float edge = min(min(tuv.x, 1.0 - tuv.x), min(tuv.y, 1.0 - tuv.y));
        tileC *= mix(mix(0.88, 1.0, smoothstep(0.0, 0.07, edge)), 1.0, max(uSeal, uBevel * 0.7));
        diffuseColor.rgb *= tileC;
        `).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
        // Glossy art keeps its sheen, but a light caught head-on can't burn into a white hotspot.
        reflectedLight.directSpecular = min(reflectedLight.directSpecular, vec3(0.3));`)},a.customProgramCacheKey=()=>`cube-tile-flat-v6`,a}function zh(e,t,n,r,i){let a=new G({map:e,roughness:.42,metalness:0}),o={uPaper:{value:t},uFace:{value:new z(n,r)},...i};return a.onBeforeCompile=e=>{Object.assign(e.uniforms,o),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec2 aCell;
varying vec2 vCell;
varying vec3 vLocalN;
`+Ph).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vCell = aCell;
vLocalN = normal;`).replace(`#include <project_vertex>`,`#include <project_vertex>`+Fh),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform vec3 uPaper;
uniform vec2 uFace;
varying vec2 vCell;
varying vec3 vLocalN;
`+Ih).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>`+Lh(`normalize(vLocalN).z < -0.3`)).replace(`#include <map_fragment>`,`
        float fz = normalize(vLocalN).z;
        vec2 tuv = clamp(vMapUv, 0.0, 1.0);
        vec3 art = texture2D(map, (vCell + tuv) / uFace).rgb;
        vec3 tileC = fz > 0.3 ? uPaper : (fz < -0.3 ? art : uPaper * 0.9);
        tileC *= mix(mix(0.86, 1.0, smoothstep(0.3, 0.97, abs(fz))), 1.0, uSeal * 0.6);
        diffuseColor.rgb *= tileC;
        `)},a.customProgramCacheKey=()=>`cube-tile-chiclet`,a}var Bh=1,Vh=new B(0,1,0),Hh=new B(1,0,0),Uh=new B(0,0,1),Wh=[`#ffffff`,`#ffd23f`,`#ff5d73`,`#7cc6fe`,`#b18cff`],Gh=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2,Kh=e=>e*e*e,qh=(e,t=1.7)=>1+(t+1)*(e-1)**3+t*(e-1)**2,Jh=e=>e<=0?0:e>=1?1:2**(-10*e)*Math.sin((e*10-.75)*(2*Math.PI/3))+1,Yh=e=>e<.4?e/.4*(e/.4):1-Math.abs(Math.sin((e-.4)/.6*Math.PI*2))*.07*(1-(e-.4)/.6),Xh=e=>e<0?0:e>1?1:e,$=(e,t,n)=>e<n&&t>=n,Zh=class{constructor(e,t,n,r){q(this,`ctx`,void 0),q(this,`pivot`,void 0),q(this,`rest`,void 0),q(this,`t`,0),q(this,`from`,new Vt),q(this,`spinQ`,new Vt),q(this,`act`,void 0),q(this,`squash`,0),q(this,`squashVel`,0),q(this,`landed`,!1),this.ctx=e,this.pivot=n,this.rest=r,this.from.copy(n.quaternion);let i={ctx:e,kick:e=>this.squashVel+=e*22};this.act=$h(t,i)}get zoom(){let e=Xh(this.t/Bh);return 1+((this.act.zoom??1)-1)*e*e*(3-2*e)}get ready(){return this.t>=Bh+this.act.duration}update(e){let t=this.t;this.t+=e;let{cube:n,radius:r,sfx:i}=this.ctx,a=0;if(this.t<Bh){let e=this.t/Bh,t=Gh(e);this.pivot.quaternion.slerpQuaternions(this.from,this.rest,t).premultiply(this.spinQ.setFromAxisAngle(Vh,t*Math.PI*2)),a=Math.sin(Math.PI*Math.min(1,e/.8))*r*.18}else t<Bh&&this.pivot.quaternion.copy(this.rest);!this.landed&&this.t>=Bh*.8&&(this.landed=!0,this.squashVel+=1.76,i.tok()),this.t>=Bh&&(a+=this.act.update(this.t-Bh,t-Bh));let o=-320*this.squash-16*this.squashVel;this.squashVel+=o*e,this.squash+=this.squashVel*e;let s=Bt.clamp(this.squash,-.25,.25);return n.group.scale.set(1+s*.5,1-s,1+s*.5),a-s*n.half.y}},Qh={gift:`#9a2a52`,present:`#8a1f2e`,candy:`#6a2f7e`,cookietin:`#2a4f8a`,mystery:`#34206e`,jack:`#2449a8`,musicbox:`#8c1538`};function $h(e,t){let n=Qh[e]??`#4a3a66`;switch(e){case`dice`:return eg(t);case`jack`:return ng(t,n);case`twisty`:return rg(t);case`musicbox`:return ig(t,n);case`sugar`:return ag(t);case`toyblock`:return og(t);case`photo`:return sg(t);case`crayons`:return cg(t);case`watermelon`:return fg(t,`melon`);case`giantmelon`:return fg(t,`giant`);case`choco`:return fg(t,`choco`);case`cheese`:return mg(t);case`bread`:return hg(t);case`tofu`:return gg(t);case`sushi`:return _g(t);case`butter`:return vg(t);case`crate`:return yg(t);case`honey`:return bg(t);case`milk`:return xg(t);case`jelly`:return Sg(t);case`juice`:return Cg(t);case`fridge`:return Og(t);case`pizza`:return Vg(t);case`tv`:return Ug(t);case`arcade`:return Wg(t);case`train`:return Gg(t);case`castle`:return Kg(t);case`podium`:return qg(t);case`brick`:return Jg(t);case`house`:return Yg(t);case`console`:return Qg(t);case`bookshelf`:return $g(t);case`sofa`:return t_(t);case`skyscraper`:return r_(t);case`gift`:case`present`:case`candy`:case`cookietin`:case`mystery`:return tg(t,n,e===`mystery`);default:return{duration:.25,update:()=>0}}}function eg({ctx:e,kick:t}){let{cube:n,sfx:r,sparkles:i,radius:a}=e,o=[{at:.12,len:.5,h:.55,axis:Hh,angle:Math.PI},{at:.62,len:.34,h:.22,axis:Uh,angle:-Math.PI/2},{at:.96,len:.18,h:.05,axis:null,angle:0}],s=new Vt,c=new Vt,l=new B;return{duration:1.2,update(e,u){$(u,e,0)&&t(.1);let d=0;return s.identity(),o.forEach((o,f)=>{let p=Xh((e-o.at)/o.len);p>0&&p<1&&(d=Math.sin(Math.PI*p)*o.h*a),o.axis&&s.premultiply(c.setFromAxisAngle(o.axis,o.angle*Gh(p))),$(u,e,o.at+o.len)&&(r.tok(),t([.12,.08,.03][f]),f===0&&(l.set(0,-n.half.y,0),i.burst(l,{count:12,colors:[`#ffffff`,`#e9e4f5`],speed:a*1.3,size:.22,life:.45})))}),n.group.quaternion.copy(s),d}}}function tg({ctx:e,kick:t},n,r){let{cube:i,sfx:a,sparkles:o,radius:s}=e,c=i.half,l=o_(i,n),u=s_(i,n),d=new H,f=new H,p=new B(0,c.y,0),m=new B(1,0,.35).normalize(),h=.22,g=c.y*(r?.62:.48),_=!1;return{duration:1.35,zoom:r?1.14:1.1,update(e,n){if(_)return 0;$(n,e,0)&&t(.1),$(n,e,h)&&(a.pop(10),r&&a.boing(),t(-.08),o.burst(p,{count:r?110:75,colors:Wh,speed:s*(r?3.2:2.6),dir:Vh,spread:.55,size:.3,life:1.3})),$(n,e,1.22)&&(a.tok(),t(.06));let v=0,y=0,b=0;if(e<h)b=Math.abs(Math.sin(e*70))*.014*(e/h)*c.y;else if(e<1){let t=Xh((e-h)/.32);v=g*qh(t,2.2),y=.32*qh(t,1.4)+Math.sin((e-h)*9)*.04*(1-t*.5)}else{let t=Xh((e-1)/.22);v=g*(1-Kh(t)),y=.32*(1-t)}return l.visible=v>.002,e>=1.22?(_=!0,l.visible=!1,u.set(null),i.setFaceTransform(2,null),0):(d.makeTranslation(0,v+b,0).multiply(f.makeTranslation(p.x,p.y,p.z)).multiply(f.makeRotationAxis(m,y)).multiply(f.makeTranslation(-p.x,-p.y,-p.z)),i.setFaceTransform(2,d),u.set(l.visible?d:null),0)}}}function ng({ctx:e,kick:t},n){let{cube:r,sfx:i,sparkles:a,radius:o}=e,s=r.half,c=o_(r,n),l=s_(r,n),u=Math.PI*1.5-.2,d=l_(r),f=new B(0,s.y,-s.z),p=new H,m=new H,h=new bn,g=.62;return{duration:1.55,zoom:1.16,update(e,n){if([.08,.26,.44].forEach((r,a)=>{$(n,e,r)&&(i.tick(a*3),t(.03))}),e<g){let t=e/g;r.group.rotation.copy(h.set(Math.sin(e*61)*.012*t,0,Math.sin(e*47)*.014*t))}else $(n,e,g)&&(r.group.rotation.set(0,0,0),i.boing(),t(.14),a.burst(new B(0,s.y+.3,0),{count:70,colors:Wh,speed:o*2.8,dir:Vh,spread:.7,size:.3,life:1.2}));$(n,e,.8200000000000001)&&i.tok();let _=e<g?0:Yh(Xh((e-g)/.5));return c.visible=_>0,p.makeTranslation(f.x,f.y,f.z).multiply(m.makeRotationX(-_*u)).multiply(m.makeTranslation(-f.x,-f.y,-f.z)),e>=g&&(r.setFaceTransform(2,p),l.set(p)),d.update(e-g),0}}}function rg({ctx:e,kick:t}){let{cube:n,sfx:r}=e,i=n.half,a=Math.max(1,Math.round(i.y*2/3)),o=e=>e.y>i.y-a,s=e=>e.y<-i.y+a,c=[{at:.05,layer:`top`,from:0,to:Math.PI/2},{at:.4,layer:`bottom`,from:0,to:-Math.PI/2},{at:.75,layer:`top`,from:Math.PI/2,to:0},{at:1.1,layer:`bottom`,from:-Math.PI/2,to:0}],l=.26;n.body.material.color.set(`#262236`);let u=new H,d=new H,f=!1;return{duration:1.45,update(e,i){if(f)return 0;let a={top:0,bottom:0};for(let n of c){let o=Xh((e-n.at)/l);e>=n.at&&(a[n.layer]=n.from+(n.to-n.from)*qh(o,1.2)),$(i,e,n.at+l*.8)&&(r.ratchet(),t(.035))}return e>=1.36?(f=!0,n.setLayerTransform(`top`,o,null),n.setLayerTransform(`bottom`,s,null),r.coin(),0):(n.setLayerTransform(`top`,o,u.makeRotationY(a.top)),n.setLayerTransform(`bottom`,s,d.makeRotationY(a.bottom)),0)}}}function ig({ctx:e},t){let{cube:n,sfx:r}=e,i=n.half,a=o_(n,t),o=s_(n,t),s=new B(0,i.y,-i.z),c=new H,l=new H,u=new d_(n,[f_(!1),f_(!0)]),d=.45;return{duration:1.5,zoom:1.1,update(e,t){$(t,e,.3)&&r.melody();let i=Gh(Xh(e/.7));return a.visible=i>.01,c.makeTranslation(s.x,s.y,s.z).multiply(l.makeRotationX(-i*.75)).multiply(l.makeTranslation(-s.x,-s.y,-s.z)),n.setFaceTransform(2,c),o.set(a.visible?c:null),e>=d&&(u.spawn(),d=e+(e<2?.3:.75)),u.update(e-Math.max(t,0)),0}}}function ag({ctx:e,kick:t}){let{cube:n,sfx:r,sparkles:i,radius:a}=e,o=n.half,s=Math.min(o.x,o.z)*2,c=s*.07,l=new Bi(new ra(c,c,c),new G({color:`#ffffff`,roughness:.3,emissive:`#dfe6ff`,emissiveIntensity:.3}),44);l.frustumCulled=!1,l.count=0,n.addProp(l);let u=Array.from({length:44},()=>({p:new B,v:new B,r:new bn,w:new B,life:1})),d=3.5*s,f=.45,p=new H,m=new Vt,h=new B;return{duration:1.4,update(e,g){if(e<f){let t=e/f;n.group.rotation.set(Math.sin(e*83)*.016*t,0,Math.sin(e*67)*.016*t)}if($(g,e,f)){n.group.rotation.set(0,0,0),t(-.07);for(let e of u){let t=Math.random()*Math.PI*2,n=Math.sqrt(Math.random());e.p.set(Math.cos(t)*o.x*n,o.y+c*.5,Math.sin(t)*o.z*n);let r=.5+Math.random()*.7;e.v.set(Math.cos(t)*r*s,(1.1+Math.random()*.8)*s,Math.sin(t)*r*s),e.r.set(Math.random()*6,Math.random()*6,Math.random()*6),e.w.set((Math.random()-.5)*14,(Math.random()-.5)*14,(Math.random()-.5)*14),e.life=.9+Math.random()*.5}l.count=44,i.burst(new B(0,o.y,0),{count:40,colors:[`#ffffff`,`#e8eeff`,`#fff6d8`],speed:a*2.2,dir:Vh,spread:.9,size:.26,life:.9})}if(e>f&&e<1.15&&Math.floor(e*22)!==Math.floor(g*22)&&r.tick(Math.floor(Math.random()*8)),e>=f){let t=e-Math.max(g,f),n=e-f;u.forEach((e,r)=>{e.v.y-=d*t,e.p.addScaledVector(e.v,t),e.r.x+=e.w.x*t,e.r.y+=e.w.y*t,e.r.z+=e.w.z*t;let i=1-Xh((n-(e.life-.35))/.35);p.compose(e.p,m.setFromEuler(e.r),h.setScalar(Math.max(i,1e-4))),l.setMatrixAt(r,p)}),l.instanceMatrix.needsUpdate=!0,n>1.6&&(l.visible=!1)}return 0}}}function og({ctx:e,kick:t}){let{cube:n,sfx:r}=e,i=n.half,a=Math.min(i.x,i.z)*2,o=[`px`,`nx`,`py`,`ny`,`pz`,`nz`].map(e=>{let t=new $i(Pm(Mm.toyblock,e,1,1,128));return t.colorSpace=Je,new G({map:t,roughness:.55})}),s=[.32,.25,.19].map(e=>e*a),c=[[.05,-.03],[-.03,.02],[.02,.01]],l=[.25,-.4,.55],u=[.1,.42,.74],d=.3,f=i.y,p=s.map((e,t)=>{let r=new W(new bh(e,e,e,3,e*.12),o);r.castShadow=!0,r.receiveShadow=!0,r.rotation.y=l[t],r.visible=!1,n.addProp(r);let i=f+e/2;return f+=e,{mesh:r,size:e,rest:i,x:c[t][0]*a,z:c[t][1]*a}}),m=i.y*1.4;return{duration:1.3,zoom:1.14,update(e,n){return p.forEach((i,a)=>{let o=(e-u[a])/d;if(i.mesh.visible=o>0,o<=0)return;let s=o<1?1-o*o:0,c=e-u[a]-d,l=c>0?Math.sin(c*30)*Math.exp(-c*9)*.22:0;i.mesh.scale.set(1+l*.5,1-l,1+l*.5),i.mesh.position.set(i.x,i.rest+s*m-l*i.size/2,i.z),$(n,e,u[a]+d)&&(r.tok(),t(.05))}),0}}}function sg({ctx:e,kick:t}){let{cube:n,sfx:r,sparkles:i,radius:a}=e,o=n.half,s=Math.min(o.x,o.z)*2,c=lg(a);n.addProp(c);let l=ug(s);l.group.rotation.y=.7,n.addProp(l.group);let u=o.y-l.height/2-.05,d=o.y+l.height*.22;l.group.position.y=u;let f=.32;return{duration:1.6,zoom:1.1,update(e,n){$(n,e,0)&&t(.07),$(n,e,f)&&(r.shutter(),t(.1),i.burst(new B(0,o.y*.4,0),{count:30,colors:[`#ffffff`,`#fff6d8`],speed:a*2.6,size:.3,life:.6}));let s=e-f;c.visible=s>0&&s<.5,c.visible&&(c.material.opacity=s<.04?s/.04:Math.max(0,1-(s-.04)/.42),c.scale.setScalar(a*(3+s*4))),$(n,e,.62)&&r.ratchet();let p=Xh((e-f-.3)/.6);return l.group.position.y=u+(d-u)*qh(p,1.3),l.group.rotation.z=Math.sin(e*2.1)*.035*p,l.develop(Xh((e-f-.8)/1.8)),0}}}function cg({ctx:e,kick:t}){let{cube:n,sfx:r,sparkles:i,radius:a}=e,o=n.half,s=o_(n,`#2e2a4f`),c=[`#ff4d4d`,`#ff8a00`,`#ffd23f`,`#2fbf6f`,`#3b82f6`,`#9b5cff`,`#ff6fb1`,`#8a5a3c`],l=o.x*2/4,u=o.z*2/4,d=Math.min(l,u)*.34,f=o.y*1.1,p=Array.from({length:16},(e,t)=>t).sort(()=>Math.random()-.5).map((e,t)=>{let r=e%4,i=Math.floor(e/4),a=new U(c[(r+i*3)%c.length]),s=new Rn,p=new W(new aa(d,d,f,18),new G({color:a,roughness:.6})),m=new W(new aa(d*1.05,d*1.05,f*.46,18),new G({color:a.clone().lerp(new U(`#ffffff`),.35),roughness:.8}));m.position.y=-f*.08;let h=new W(new oa(d*.96,d*1.9,18),new G({color:a,roughness:.45}));h.position.y=f/2+d*.95,p.castShadow=h.castShadow=!0,s.add(p,m,h),s.position.set(-o.x+(r+.5)*l,0,-o.z+(i+.5)*u),s.visible=!1,n.addProp(s);let g=f/2+d*1.9;return{group:s,at:.15+t*.045,from:o.y-g-.02,to:o.y-g+f*(.35+Math.random()*.3)}});return{duration:1.3,zoom:1.12,update(e,l){return $(l,e,.12)&&(n.setFaceTransform(2,new H().makeTranslation(0,-1,0)),s.visible=!0,t(.08),i.burst(new B(0,o.y+.2,0),{count:50,colors:[...c.slice(0,6),`#ffffff`],speed:a*2.4,dir:Vh,spread:.7,size:.28,life:1})),p.forEach((t,n)=>{$(l,e,t.at)&&r.pop(n%14);let i=Xh((e-t.at)/.45);t.group.visible=i>0,t.group.position.y=t.from+(t.to-t.from)*qh(i,2.2)}),0}}}function lg(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,`rgba(255,255,255,1)`),r.addColorStop(.35,`rgba(255,252,240,0.7)`),r.addColorStop(1,`rgba(255,250,235,0)`),n.fillStyle=r,n.fillRect(0,0,128,128);let i=new $i(t);i.colorSpace=Je;let a=new ui(new Xr({map:i,blending:2,depthTest:!1,depthWrite:!1,transparent:!0,opacity:0}));return a.renderOrder=10,a.scale.setScalar(e*3),a.visible=!1,a}function ug(e){let t=.42*e,n=.5*e,r=new Rn,i=new W(new ra(t,n,.035*e),new G({color:`#fbfaf6`,roughness:.55}));i.castShadow=!0,r.add(i);let a=document.createElement(`canvas`);a.width=a.height=256;let o=a.getContext(`2d`),s=o.createLinearGradient(0,0,0,256);s.addColorStop(0,`#7cc6fe`),s.addColorStop(1,`#c9ebff`),o.fillStyle=s,o.fillRect(0,0,256,256),o.fillStyle=`#ffd23f`,o.beginPath(),o.arc(186,70,30,0,Math.PI*2),o.fill(),o.fillStyle=`#6fd07e`,o.beginPath(),o.ellipse(70,262,150,100,0,0,Math.PI*2),o.fill(),o.fillStyle=`#3fae5f`,o.beginPath(),o.ellipse(220,270,140,90,0,0,Math.PI*2),o.fill();let c=new $i(a);c.colorSpace=Je;let l=new U(`#2c2833`),u=new G({map:c,color:l.clone(),roughness:.35}),d=t*.84,f=n/2-t*.08-d/2;for(let t of[1,-1]){let n=new W(new Eo(d,d),u);n.position.set(0,f,t*(.018*e+.002)),t<0&&(n.rotation.y=Math.PI),r.add(n)}let p=new U(`#ffffff`);return{group:r,height:n,develop(e){u.color.copy(l).lerp(p,e*e*(3-2*e))}}}function dg(e,t,n,r){return t===`pz`?new B(-e.x+n*2*e.x,e.y-r*2*e.y,e.z):new B(-e.x+n*2*e.x,e.y,-e.z+r*2*e.z)}function fg({ctx:e,kick:t},n){let{cube:r,sfx:i,sparkles:a,radius:o}=e,s=r.half,c=Math.round(s.x*2)%2==0?0:-.5,l=r.body.material.color,u=pg(n),d=[1,-1].map(e=>{let t=e>0?c:-s.x,n=e>0?s.x:c,i=new Rn;i.matrixAutoUpdate=!1;let a=new W(new ra(n-t-.01,s.y*2-.01,s.z*2-.01),new G({color:l.clone(),roughness:.75}));a.position.x=(t+n)/2,a.castShadow=!0;let o=new W(new Eo(s.z*2-.02,s.y*2-.02),new G({map:u,roughness:.5}));return o.position.x=c+e*.004,o.rotation.y=e>0?-Math.PI/2:Math.PI/2,i.add(a,o),i.visible=!1,r.addProp(i),{side:e,g:i,test:e>0?e=>e.x>c:e=>e.x<=c,m:new H}}),f=new B(c,-s.y,0),p=new H,m=.38,h=n===`choco`?[`#5a321f`,`#8a5436`,`#ffd35c`]:n===`giant`?[`#2b1d1d`,`#ff4d5e`,`#ffffff`,...Wh]:[`#2b1d1d`,`#ff4d5e`,`#ff8a96`],g=!0;return{duration:1.35,zoom:1.14,update(e,l){if(!g||($(l,e,0)&&t(.1),e<m&&(r.group.rotation.z=Math.sin(e*70)*.012*(e/m)),$(l,e,m)&&(r.group.rotation.z=0,r.body.visible=!1,d.forEach(e=>e.g.visible=!0),i.crack(),t(-.06),a.burst(new B(c,s.y*.3,0),{count:n===`giant`?90:45,colors:h,speed:o*(n===`giant`?2.8:2),dir:Vh,spread:1.1,size:.26,life:1})),e<m))return 0;let u=Xh((e-m)/.45),_=.42*qh(u,1.6),v=.12*s.x*u;for(let e of d)e.m.makeTranslation(e.side*v,0,0).multiply(p.makeTranslation(f.x,f.y,f.z)).multiply(p.makeRotationZ(-e.side*_)).multiply(p.makeTranslation(-f.x,-f.y,-f.z)),r.setLayerTransform(e.side>0?`right`:`left`,e.test,e.m),e.g.matrix.copy(e.m);return u>=1&&(g=!1),0}}}function pg(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`);if(e===`choco`){n.fillStyle=`#5a321f`,n.fillRect(0,0,256,256);for(let e=0;e<260;e++)n.fillStyle=e%3?`rgba(120,70,40,0.6)`:`rgba(40,20,10,0.5)`,n.fillRect(Math.random()*256,Math.random()*256,3,3)}else{n.fillStyle=`#2f8f4a`,n.fillRect(0,0,256,256),n.fillStyle=`#e9f7d8`,n.fillRect(12,12,232,232);let e=n.createRadialGradient(128,128,20,128,128,150);e.addColorStop(0,`#ff7080`),e.addColorStop(1,`#f23a4f`),n.fillStyle=e,n.fillRect(22,22,212,212);for(let e=0;e<26;e++)n.save(),n.translate(40+Math.random()*176,40+Math.random()*176),n.rotate(Math.random()*Math.PI),n.fillStyle=`#2b1d1d`,n.beginPath(),n.ellipse(0,0,3.5,6.5,0,0,Math.PI*2),n.fill(),n.restore()}let r=new $i(t);return r.colorSpace=Je,r}function mg({ctx:e,kick:t}){let{cube:n,sfx:r}=e,i=n.half,a=.1*(Math.min(i.x,i.y)*2),o=dg(i,`pz`,.66,.66),s=new Rn,c=new G({color:`#c9c3d8`,roughness:.7}),l=new G({color:`#ffb3c1`,roughness:.6}),u=new G({color:`#2e2a4f`,roughness:.3}),d=new W(new Do(a,24,18),c);d.scale.set(1,.9,1.05),s.add(d);for(let e of[-1,1]){let t=new W(new Do(a*.55,18,12),c);t.scale.set(1,1,.35),t.position.set(e*a*.72,a*.72,-a*.1);let n=new W(new Do(a*.36,16,10),l);n.scale.set(1,1,.3),n.position.set(e*a*.72,a*.72,a*.02);let r=new W(new Do(a*.12,12,8),u);r.position.set(e*a*.36,a*.2,a*.9),s.add(t,n,r)}let f=new W(new Do(a*.16,12,8),l);f.position.set(0,-a*.1,a*1.08),s.add(f),s.position.copy(o).setZ(i.z-a*1.2),s.visible=!1,n.addProp(s);let p=.25;return{duration:1.4,update(e,n){$(n,e,0)&&t(.05);let o=Xh((e-p)/.3);s.visible=o>0,s.position.z=i.z-a*1.2+a*1.75*qh(o,2),$(n,e,.45)&&r.squeak(),$(n,e,1.15)&&r.squeak();let c=Math.max(0,e-p-.3);return s.rotation.y=Math.sin(c*2.2)*.45,s.rotation.z=Math.sin(c*1.3)*.12,f.scale.setScalar(1+Math.max(0,Math.sin(c*18))*.25),0}}}function hg({ctx:e,kick:t}){let{cube:n,sfx:r,sparkles:i}=e,a=n.half,o=o_(n,`#4a2e1a`),s=new $i(Pm(Mm.bread,`pz`,1,1.15,160));s.colorSpace=Je;let c=new G({map:s,color:`#f3c688`,roughness:.8}),l=new G({color:`#b8743a`,roughness:.8}),u=1.32*a.x,d=1.48*a.y,f=.26*a.z,p=[-1,1].map(e=>{let t=new W(new ra(u,d,f),[l,l,l,l,c,c]);return t.castShadow=!0,t.position.set(0,0,e*.2*2*a.z),t.visible=!1,n.addProp(t),t}),m=a.y-d/2-.02,h=.35;return{duration:1.4,zoom:1.14,update(e,s){$(s,e,.1)&&(n.setFaceTransform(2,new H().makeTranslation(0,-1,0)),o.visible=!0,t(.06)),$(s,e,h)&&(r.ding(),t(-.08)),p.forEach((t,n)=>{let r=Xh((e-h-n*.06)/.5);t.visible=e>.1;let i=r<.45?qh(r/.45,1.2)*.62:.62-.12*Gh((r-.45)/.55);t.position.y=m+d*i,t.rotation.z=(n?1:-1)*.06*Math.sin(Math.PI*r)});for(let t of[.85,1.4500000000000002])$(s,e,t)&&i.burst(new B(0,a.y+d*.5,0),{count:14,colors:[`#ffffff`,`#f2f2f2`],speed:.9,dir:Vh,spread:.5,size:.4,life:1.2});return 0}}}function gg({ctx:e,kick:t}){let{cube:n,sfx:r}=e,i=new d_(n,[Tg(`#ff6f91`),Tg(`#ffb3c1`)],.3),a=.3,o=[0,.18,.36,.54];return{duration:1.3,update(e,s){return o.forEach((n,r)=>{$(s,e,n)&&t([.14,-.12,.09,-.05][r])}),n.group.rotation.z=Math.sin(e*16)*.05*Math.exp(-e*2.5),$(s,e,.25)&&r.cute(),e>=a&&(i.spawn(),a=e+(e<1.5?.22:.9)),i.update(e-Math.max(s,0)),0}}}function _g({ctx:e}){let{cube:t,sfx:n}=e,r=t.half,i=Math.min(r.x,r.z)*2,a=new G({color:`#fbf8f0`,roughness:.8}),o=new G({color:`#ff8a5c`,roughness:.35}),s=.1*i,c=[-1,0,1].map(e=>{let n=new Rn,c=new W(new bh(.24*i,s,.13*i,2,.04*i),a),l=new W(new bh(.28*i,.035*i,.15*i,2,.015*i),o);return l.position.y=s/2+.012*i,c.castShadow=l.castShadow=!0,n.add(c,l),n.position.set(e*.3*i,r.y+s/2,0),n.rotation.y=.7,n.scale.setScalar(1e-4),t.addProp(n),n});return{duration:1.4,zoom:1.06,update(e,t){return c.forEach((a,o)=>{let c=Xh((e-.1-o*.1)/.3);a.scale.setScalar(Math.max(1e-4,qh(c,2.2))),$(t,e,.1+o*.1)&&n.pop(4+o*2);let l=0;for(let r of[.55,.95]){let a=(e-r-o*.1)/.3;a>0&&a<1&&(l=Math.sin(Math.PI*a)*.18*i),$(t,e,r+o*.1+.3)&&n.tick(o+3)}a.position.y=r.y+s/2+l}),0}}}function vg({ctx:e,kick:t}){let{cube:n,sfx:r,radius:i}=e,a=[{t:0,x:0,yaw:0},{t:.4,x:.32,yaw:.9},{t:.85,x:-.24,yaw:-.5},{t:1.2,x:.05,yaw:.12},{t:1.4,x:0,yaw:0}];return{duration:1.45,update(e,o){$(o,e,0)&&(r.slideWhistle(),t(.05)),$(o,e,1.2)&&t(.06);let s=0;for(;s<a.length-2&&e>a[s+1].t;)s++;let c=a[s],l=a[s+1],u=Gh(Xh((e-c.t)/(l.t-c.t)));return n.group.position.x=(c.x+(l.x-c.x)*u)*i,n.group.rotation.y=c.yaw+(l.yaw-c.yaw)*u,n.group.rotation.z=-Math.sin(Math.min(1,e/1.4)*Math.PI*3)*.06*(1-Xh(e/1.4)),0}}}function yg({ctx:e}){let{cube:t,sfx:n}=e,r=t.half,i=Math.min(r.x,r.z)*2,a=.1*i,o=new G({color:`#ff9f1c`,roughness:.55}),s=new G({color:`#4fb34f`,roughness:.6}),c=[[-.28,-.22],[.26,-.18],[0,.05],[-.22,.27],[.27,.26]].map(([e,n],i)=>{let c=new Rn,l=new W(new Do(a,22,16),o);if(l.castShadow=!0,c.add(l),i%2==0){let e=new W(new Do(a*.35,10,8),s);e.scale.set(1,.3,.6),e.position.set(a*.25,a*.95,0),c.add(e)}return c.position.set(e*2*r.x,r.y+a*.7,n*2*r.z),c.scale.setScalar(1e-4),t.addProp(c),{g:c,x:c.position.x,z:c.position.z}});return{duration:1.5,zoom:1.1,update(e,t){return c.forEach((o,s)=>{o.g.scale.setScalar(Math.max(1e-4,qh(Xh((e-s*.05)/.25),2)));let c=0;for(let r of[.3,.85]){let a=r+s*.09,o=(e-a)/.38;o>0&&o<1&&(c=Math.sin(Math.PI*o)*.45*i),$(t,e,a)&&n.pop(2+s+(r>.5?5:0))}o.g.position.y=r.y+a*.7+c,o.g.rotation.y=e*2+s}),0}}}function bg({ctx:e}){let{cube:t,sfx:n}=e,r=t.half,i=Math.min(r.x,r.z)*2,a=.07*i,o=new Rn,s=document.createElement(`canvas`);s.width=64,s.height=16;let c=s.getContext(`2d`);c.fillStyle=`#ffd23f`,c.fillRect(0,0,64,16),c.fillStyle=`#2e2a4f`;for(let e of[20,36])c.fillRect(e,0,8,16);let l=new $i(s);l.colorSpace=Je;let u=new W(new Do(a,24,16),new G({map:l,roughness:.5}));u.scale.set(1.45,1,1),u.rotation.y=Math.PI/2,u.castShadow=!0;let d=new G({color:`#ffffff`,transparent:!0,opacity:.75,roughness:.2}),f=[-1,1].map(e=>{let t=new W(new Do(a*.75,14,10),d);return t.scale.set(.5,.12,1),t.position.set(0,a*.85,e*a*.55),o.add(t),t}),p=new G({color:`#2e2a4f`});for(let e of[-1,1]){let t=new W(new Do(a*.16,10,8),p);t.position.set(a*1.25,a*.25,e*a*.35),o.add(t)}o.add(u),o.visible=!1,t.addProp(o);let m=Math.max(r.x,r.z)*1.45,h=new B(0,r.y+a*.95,0),g=new B,_=.15,v=1.15;return{duration:1.8,zoom:1.12,update(e,t){if($(t,e,_)&&n.buzz(1.5499999999999998),o.visible=e>_,e<=_)return 0;g.copy(o.position);let a=e-_;if(a<v){let e=-.6+a/v*Math.PI*2,t=m*(1-a/v*.15);o.position.set(Math.cos(e)*t,r.y*.55+Math.sin(a*9)*.12*i,Math.sin(e)*t)}else{let e=Gh(Xh((a-v)/.4)),t=-.6+Math.PI*2,n=new B(Math.cos(t)*m*.85,r.y*.55,Math.sin(t)*m*.85);o.position.lerpVectors(n,h,e),o.position.y+=Math.sin(Math.PI*e)*.25*i}if(a<1.5499999999999998){let e=o.position.x-g.x,t=o.position.z-g.z;e*e+t*t>1e-6&&(o.rotation.y=Math.atan2(-t,e))}let s=a<1.5499999999999998?Math.abs(Math.sin(e*70)):.2+.2*Math.abs(Math.sin(e*6));return f.forEach((e,t)=>e.rotation.x=(t?1:-1)*(.15+.7*s)),0}}}function xg({ctx:e,kick:t}){let{cube:n,sfx:r,sparkles:i,radius:a}=e,o=n.half,s=Math.min(o.x,o.z)*2,c=new wg(n,new Do(s*.035,12,8),new G({color:`#ffffff`,roughness:.15}),36,3.2*s);return{duration:1.4,update(e,n){return $(n,e,0)&&t(.1),$(n,e,.3)&&(t(-.08),c.burst((e,t)=>{let n=Math.random()*Math.PI*2,r=Math.random()*.35;e.set(Math.cos(n)*o.x*r,o.y+.05,Math.sin(n)*o.z*r),t.set(Math.cos(n)*s*(.3+Math.random()*.5),s*(1.3+Math.random()*.8),Math.sin(n)*s*(.3+Math.random()*.5))}),i.burst(new B(0,o.y,0),{count:24,colors:[`#ffffff`,`#e8f1ff`],speed:a*1.8,dir:Vh,spread:.8,size:.3,life:.8})),$(n,e,.55)&&r.moo(),c.update(e-Math.max(n,0)),0}}}function Sg({ctx:e,kick:t}){let{cube:n,sfx:r}=e,i=n.half,a=Math.min(i.x,i.z)*2,o=.08*a,s=new Rn,c=new W(new Do(o,22,16),new G({color:`#d81b3c`,roughness:.2}));c.castShadow=!0;let l=new W(new aa(o*.08,o*.08,o*1.6,6),new G({color:`#4f8a2f`}));l.position.set(o*.3,o*1.2,0),l.rotation.z=-.35,s.add(c,l);let u=dg(i,`py`,.52,.4);s.position.set(u.x,i.y+o,u.z),n.addProp(s);let d=[0,.14,.28,.42,.56,.7];return{duration:1.3,update(e,c){d.forEach((n,r)=>{$(c,e,n)&&t((r%2?-1:1)*.17*.78**r)}),$(c,e,0)&&r.boing();let l=Math.exp(-e*2.2);return n.group.rotation.z=Math.sin(e*22)*.07*l,n.group.rotation.x=Math.sin(e*17+1)*.05*l,s.position.y=i.y+o+Math.abs(Math.sin(e*11))*.22*a*l,0}}}function Cg({ctx:e,kick:t}){let{cube:n,sfx:r,sparkles:i}=e,a=n.half,o=Math.min(a.x,a.z)*2,s=document.createElement(`canvas`);s.width=32,s.height=8;let c=s.getContext(`2d`);c.fillStyle=`#ffffff`,c.fillRect(0,0,32,8),c.fillStyle=`#ff5d73`,c.fillRect(0,0,16,8);let u=new $i(s);u.colorSpace=Je,u.wrapS=l,u.repeat.set(10,1);let d=new W(new ko(new ga([new B(0,-.45*o,0),new B(0,.3*o,0),new B(.03*o,.37*o,0),new B(.12*o,.43*o,0)]),48,.028*o,10),new G({map:u,roughness:.4}));d.castShadow=!0;let f=new Rn;f.position.copy(dg(a,`py`,.7,.3)),f.rotation.y=.7,f.add(d),d.visible=!1,n.addProp(f);let p=new B,m=.25;return{duration:1.4,zoom:1.1,update(e,n){$(n,e,0)&&t(.08),$(n,e,m)&&(r.pop(12),t(-.05));let a=Xh((e-m)/.35);return d.visible=a>0,d.position.y=-.55*o*(1-qh(a,2)),$(n,e,.8)&&r.slurp(),e>.65&&Math.floor(e/.35)!==Math.floor(n/.35)&&(p.set(.12*o,.45*o,0).applyEuler(f.rotation).add(f.position),i.burst(p,{count:5,colors:[`#ffd166`,`#ff9f1c`,`#ffffff`],speed:.8,dir:Vh,spread:.4,size:.2,life:.9})),0}}}var wg=class{constructor(e,t,n,r,i){q(this,`gravity`,void 0),q(this,`mesh`,void 0),q(this,`items`,void 0),q(this,`m`,new H),q(this,`q`,new Vt),q(this,`sc`,new B),this.gravity=i,this.mesh=new Bi(t,n,r),this.mesh.frustumCulled=!1,this.mesh.count=0,e.addProp(this.mesh),this.items=Array.from({length:r},()=>({p:new B,v:new B,age:0,life:0}))}burst(e){for(let t of this.items)e(t.p,t.v),t.age=0,t.life=.8+Math.random()*.5;this.mesh.count=this.items.length}update(e){this.mesh.count!==0&&(this.items.forEach((t,n)=>{t.age+=e,t.v.y-=this.gravity*e,t.p.addScaledVector(t.v,e);let r=1-Xh((t.age-(t.life-.3))/.3);this.m.compose(t.p,this.q,this.sc.setScalar(Math.max(r,1e-4))),this.mesh.setMatrixAt(n,this.m)}),this.mesh.instanceMatrix.needsUpdate=!0)}};function Tg(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=()=>{n.beginPath(),n.moveTo(64,108),n.bezierCurveTo(10,72,12,26,40,24),n.bezierCurveTo(54,23,62,34,64,42),n.bezierCurveTo(66,34,74,23,88,24),n.bezierCurveTo(116,26,118,72,64,108),n.closePath()};n.lineJoin=`round`,n.strokeStyle=`#ffffff`,n.lineWidth=10,r(),n.stroke(),n.fillStyle=e,r(),n.fill();let i=new $i(t);return i.colorSpace=Je,i}function Eg(e,t,n,r,i,a){let o=new W(new Eo(r,i),a);return o.position.copy(t),o.quaternion.setFromUnitVectors(new B(0,0,1),n),Math.abs(n.y)<.5&&o.lookAt(t.clone().add(n)),o.visible=!1,e.addProp(o),o}function Dg(e,t){let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=new $i(n);return r.colorSpace=Je,{g:n.getContext(`2d`),tex:r}}function Og({ctx:e,kick:t}){let{cube:n,sfx:r}=e,i=n.half,a=i.y-2*i.y*.33,o=e=>e.z>i.z-.01&&e.y<a,s=a+i.y,c=i.x*2-.1,l=s-.08,u=Eg(n,new B(0,-i.y+s/2,i.z+.0015),Uh,c,l,new _i({map:Ag(c,l)})),d=new G({color:`#c3ecdd`,roughness:.45}),f=new G({map:Bg(c,l),roughness:.55}),p=new W(new ra(i.x*2-.04,s-.04,.1),[d,d,d,d,d,f]);p.matrixAutoUpdate=!1,p.visible=!1,n.addProp(p);let m=new H().makeTranslation(0,-i.y+s/2,i.z-.05+.001),h=new B(-i.x,0,i.z),g=new H,_=new H,v=new i_(n,16,`#e6f6ff`,.55),y=.3,b=y;return{duration:1.5,zoom:1.08,update(e,a){if(v.update(e-a),$(a,e,0)&&t(.06),$(a,e,y)&&r.pop(6),e>=b&&e<1.2){b=e+.07;let t=new B((Math.random()-.3)*i.x,-i.y+s*(.15+Math.random()*.7),i.z+.1);v.emit(t,new B(.2+Math.random()*.5,-.25-Math.random()*.2,.7+Math.random()*.5),.9+Math.random()*.5,1.3)}let c=qh(Xh((e-y)/.45),1.4);return u.visible=p.visible=e>y,e<=y?0:(g.makeTranslation(h.x,h.y,h.z).multiply(_.makeRotationY(-1.85*c)).multiply(_.makeTranslation(-h.x,-h.y,-h.z)),n.setLayerTransform(`door`,o,g),p.matrix.multiplyMatrices(g,m),0)}}}function kg(e,t,n,r,i){e.fillStyle=i,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill()}function Ag(e,t){let n=Math.round(256*t/e),r=document.createElement(`canvas`);r.width=256,r.height=n;let i=r.getContext(`2d`),a=(e,t)=>{i.fillStyle=t,i.beginPath();for(let t=0;t<e.length;t+=2)i.lineTo(e[t],e[t+1]);i.closePath(),i.fill()};a([0,0,256,0,228,22,28,22],`#f7fcff`),a([0,0,28,22,28,n-22,0,n],`#d9eaf2`),a([256,0,256,n,228,n-22,228,22],`#cadfe9`),a([0,n,28,n-22,228,n-22,256,n],`#bcd3df`);let o=i.createLinearGradient(0,22,0,n-22);o.addColorStop(0,`#ffffff`),o.addColorStop(1,`#dcecf5`),i.fillStyle=o,i.fillRect(28,22,200,n-44);let s=i.createRadialGradient(128,26,4,128,26,150);s.addColorStop(0,`rgba(255,248,220,0.9)`),s.addColorStop(1,`rgba(255,248,220,0)`),i.fillStyle=s,i.fillRect(0,0,256,n);let c=e=>[22+e*(n-44),e*n],l=e=>{let[t,n]=c(e);return t+(n-t)*.55},u=e=>{let[t,n]=c(e);a([28,t,228,t,256,n,0,n],`rgba(170,215,240,0.55)`),i.fillStyle=`#ffffff`,i.fillRect(0,n-3,256,5),i.fillStyle=`rgba(80,120,150,0.25)`,i.fillRect(0,n+2,256,4)},d=l(.36);u(.36),jg(i,60,d,36),Mg(i,128,d,30),Ng(i,196,d,30);let f=l(.62);u(.62),Pg(i,58,f,34),Fg(i,130,f,34),Ig(i,200,f,28);let p=l(.8);u(.8),Lg(i,78,p,34),Rg(i,160,p,20),Rg(i,200,p,20);let[m]=c(.8),h=(m+n*.8)/2+10;for(let[e,t]of[[6,124],[132,250]]){if(i.fillStyle=`rgba(200,235,250,0.55)`,i.fillRect(e,h,t-e,n-h-6),e<128)for(let t=0;t<4;t++)zg(i,e+20+t*22,h+26,26);else kg(i,e+34,h+30,20,`#7cc576`),kg(i,e+50,h+22,16,`#8fd27f`),kg(i,e+84,h+30,15,`#ff4d4d`),kg(i,e+80,h+26,4,`rgba(255,255,255,0.6)`);i.strokeStyle=`rgba(255,255,255,0.9)`,i.lineWidth=4,i.strokeRect(e,h,t-e,n-h-6),i.fillStyle=`rgba(255,255,255,0.8)`,i.fillRect((e+t)/2-18,h+8,36,6)}let g=new $i(r);return g.colorSpace=Je,g.anisotropy=4,g}function jg(e,t,n,r){e.fillStyle=`#f2f2f7`,e.beginPath(),e.ellipse(t,n,r*1.2,r*.25,0,0,Math.PI*2),e.fill();let i=[[.36,`#f7d58f`],[.14,`#ffffff`],[.36,`#f7d58f`],[.18,`#ff8fab`]],a=n;for(let[n,o]of i)e.fillStyle=o,e.fillRect(t-r*.8,a-n*r,r*1.6,n*r),a-=n*r;e.fillStyle=`#ffffff`;for(let n=0;n<4;n++)kg(e,t-r*.6+n*r*.4,a,r*.13,`#ffffff`);kg(e,t,a-r*.2,r*.17,`#e8213c`),kg(e,t-r*.05,a-r*.25,r*.05,`rgba(255,255,255,0.8)`)}function Mg(e,t,n,r){e.fillStyle=`#f2f2f7`,e.beginPath(),e.ellipse(t,n,r*1.1,r*.22,0,0,Math.PI*2),e.fill();let i=e.createLinearGradient(t-r,0,t+r,0);i.addColorStop(0,`#ff7fa3`),i.addColorStop(1,`#e8335f`),e.fillStyle=i,e.beginPath(),e.moveTo(t-r*.85,n),e.bezierCurveTo(t-r*.9,n-r*1.3,t+r*.9,n-r*1.3,t+r*.85,n),e.fill(),e.fillStyle=`rgba(255,255,255,0.5)`,e.beginPath(),e.ellipse(t-r*.35,n-r*.6,r*.12,r*.28,.3,0,Math.PI*2),e.fill()}function Ng(e,t,n,r){e.fillStyle=`#ffffff`,e.beginPath(),e.moveTo(t-r*.5,n),e.lineTo(t-r*.5,n-r*1.3),e.quadraticCurveTo(t-r*.5,n-r*1.7,t-r*.25,n-r*1.85),e.lineTo(t+r*.25,n-r*1.85),e.quadraticCurveTo(t+r*.5,n-r*1.7,t+r*.5,n-r*1.3),e.lineTo(t+r*.5,n),e.fill(),e.fillStyle=`#3b82f6`,e.fillRect(t-r*.28,n-r*2.05,r*.56,r*.22),e.fillRect(t-r*.5,n-r*.95,r,r*.45),e.fillStyle=`#ffffff`,e.font=`800 ${Math.round(r*.32)}px 'Baloo 2', sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`MILK`,t,n-r*.72),e.fillStyle=`rgba(160,190,220,0.4)`,e.fillRect(t+r*.3,n-r*1.4,r*.12,r*1.3)}function Pg(e,t,n,r){e.fillStyle=`#e8ad1d`,e.beginPath(),e.moveTo(t-r,n),e.lineTo(t+r,n),e.lineTo(t+r,n-r*.75),e.closePath(),e.fill(),e.fillStyle=`#ffd54a`,e.beginPath(),e.moveTo(t-r,n),e.lineTo(t+r*.7,n),e.lineTo(t+r*.7,n-r*.62),e.closePath(),e.fill();for(let[i,a,o]of[[.35,-.2,.12],[.05,-.1,.08],[.5,-.45,.07]])kg(e,t+i*r,n+a*r,o*r,`#e8ad1d`)}function Fg(e,t,n,r){e.fillStyle=`#2f8f4a`,e.beginPath(),e.arc(t,n-r*.1,r,Math.PI,0),e.fill(),e.fillStyle=`#e9f7d8`,e.beginPath(),e.arc(t,n-r*.1,r*.88,Math.PI,0),e.fill(),e.fillStyle=`#ff4d5e`,e.beginPath(),e.arc(t,n-r*.1,r*.8,Math.PI,0),e.fill(),e.fillStyle=`#2b1d1d`;for(let[i,a]of[[-.4,-.3],[0,-.5],[.4,-.3],[-.15,-.25],[.2,-.22]])e.beginPath(),e.ellipse(t+i*r,n+a*r,r*.04,r*.07,i,0,Math.PI*2),e.fill()}function Ig(e,t,n,r){e.fillStyle=`#ff9f1c`,e.fillRect(t-r*.55,n-r*1.6,r*1.1,r*1.6),e.fillStyle=`#ffb347`,e.beginPath(),e.moveTo(t-r*.55,n-r*1.6),e.lineTo(t,n-r*2),e.lineTo(t+r*.55,n-r*1.6),e.fill(),e.fillStyle=`#e8850f`,e.fillRect(t-r*.08,n-r*2.12,r*.16,r*.2),kg(e,t,n-r*.85,r*.34,`#ffe0a3`),e.strokeStyle=`#ffb347`,e.lineWidth=r*.05;for(let i=0;i<6;i++){let a=i*Math.PI/3;e.beginPath(),e.moveTo(t,n-r*.85),e.lineTo(t+Math.cos(a)*r*.32,n-r*.85+Math.sin(a)*r*.32),e.stroke()}e.fillStyle=`#ffd166`,e.fillRect(t-r*.55,n-r*.28,r*1.1,r*.28)}function Lg(e,t,n,r){for(let[i,a]of[[-.5,-.55],[-.1,-.7],[.35,-.6],[.1,-.85],[-.3,-.85],[.55,-.45]])kg(e,t+i*r,n+a*r,r*.22,`#ff3b5c`),kg(e,t+i*r-r*.06,n+a*r-r*.06,r*.05,`rgba(255,255,255,0.6)`),e.fillStyle=`#3fae5f`,e.fillRect(t+i*r-r*.1,n+a*r-r*.26,r*.2,r*.07);e.fillStyle=`#7cc6fe`,e.beginPath(),e.moveTo(t-r,n-r*.5),e.lineTo(t+r,n-r*.5),e.quadraticCurveTo(t+r*.9,n,t,n),e.quadraticCurveTo(t-r*.9,n,t-r,n-r*.5),e.fill(),e.fillStyle=`rgba(255,255,255,0.35)`,e.fillRect(t-r*.7,n-r*.42,r*.25,r*.08)}function Rg(e,t,n,r){e.fillStyle=`rgba(255,255,255,0.85)`,e.beginPath(),e.moveTo(t-r*.8,n-r*1.4),e.lineTo(t+r*.8,n-r*1.4),e.lineTo(t+r*.6,n),e.lineTo(t-r*.6,n),e.fill(),e.fillStyle=`#f5d98a`,e.beginPath(),e.moveTo(t-r*.74,n-r*1.1),e.lineTo(t+r*.74,n-r*1.1),e.lineTo(t+r*.6,n-r*.05),e.lineTo(t-r*.6,n-r*.05),e.fill(),e.fillStyle=`#b8742a`,e.fillRect(t-r*.74,n-r*1.1,r*1.48,r*.25)}function zg(e,t,n,r){e.fillStyle=`#ff8a3d`,e.beginPath(),e.moveTo(t-r*.22,n),e.lineTo(t+r*.22,n),e.lineTo(t,n+r*1.1),e.fill(),e.fillStyle=`#3fae5f`;for(let i of[-.12,0,.12])e.beginPath(),e.ellipse(t+i*r,n-r*.22,r*.07,r*.24,i*3,0,Math.PI*2),e.fill()}function Bg(e,t){let n=Math.round(256*t/e),r=document.createElement(`canvas`);r.width=256,r.height=n;let i=r.getContext(`2d`),a=i.createLinearGradient(0,0,256,0);a.addColorStop(0,`#e9f6f1`),a.addColorStop(1,`#d3ebe2`),i.fillStyle=a,i.fillRect(0,0,256,n),i.strokeStyle=`#b9dccf`,i.lineWidth=8,i.strokeRect(10,10,236,n-20);let o=(e,t)=>{t(),i.fillStyle=`rgba(255,255,255,0.75)`,i.fillRect(20,e,216,34),i.strokeStyle=`#ffffff`,i.lineWidth=4,i.strokeRect(20,e,216,34)},s=(e,t,n,r,a,o)=>{i.fillStyle=a,i.beginPath(),i.moveTo(e-n/2,t),i.lineTo(e-n/2,t-r*.7),i.quadraticCurveTo(e-n/2,t-r*.85,e-n*.2,t-r*.9),i.lineTo(e+n*.2,t-r*.9),i.quadraticCurveTo(e+n/2,t-r*.85,e+n/2,t-r*.7),i.lineTo(e+n/2,t),i.fill(),i.fillStyle=o,i.fillRect(e-n*.22,t-r,n*.44,r*.12),i.fillStyle=`rgba(255,255,255,0.35)`,i.fillRect(e-n*.35,t-r*.65,n*.12,r*.55)},c=n*.22;o(c,()=>{for(let e=0;e<6;e++)i.fillStyle=`#fff4e0`,i.beginPath(),i.ellipse(46+e*33,c+2,13,17,0,0,Math.PI*2),i.fill()});let l=n*.55;o(l,()=>{s(52,l+20,30,86,`#e8213c`,`#ffffff`),s(96,l+20,28,76,`#ffc53d`,`#e8213c`),s(150,l+20,34,96,`rgba(150,210,255,0.85)`,`#3b82f6`),s(200,l+20,28,70,`#2fbf6f`,`#ffffff`)});let u=n*.86;o(u,()=>{for(let[e,t]of[[56,`#ff4d4d`],[96,`#3b82f6`],[136,`#ff4d4d`],[176,`#2fbf6f`]])i.fillStyle=t,i.fillRect(e-15,u-36,30,50),i.fillStyle=`#c9ced9`,i.fillRect(e-15,u-40,30,6),i.fillStyle=`rgba(255,255,255,0.4)`,i.fillRect(e-9,u-30,5,40)});let d=new $i(r);return d.colorSpace=Je,d}function Vg({ctx:e,kick:t}){let{cube:n,sfx:r}=e,i=n.half,a=Eg(n,new B(0,i.y+.0015,0),Vh,i.x*2-.2,i.z*2-.2,new G({map:Hg(),roughness:.7})),o=s_(n,`#c9a26b`),s=new B(0,i.y,-i.z),c=new H,l=new H,u=new i_(n,18,`#ffffff`,.45),d=.3,f=.44999999999999996;return{duration:1.5,zoom:1.12,update(e,p){if(u.update(e-p),$(p,e,0)&&t(.06),$(p,e,d)&&(r.ding(),t(-.05)),a.visible=e>d,e<=d)return 0;let m=qh(Xh((e-d)/.5),1.5);if(c.makeTranslation(s.x,s.y,s.z).multiply(l.makeRotationX(-1.9*m)).multiply(l.makeTranslation(-s.x,-s.y,-s.z)),n.setFaceTransform(2,c),o.set(c),e>=f){f=e+.09;let t=new B((Math.random()-.5)*i.x*1.2,i.y+.15,(Math.random()-.5)*i.z*1.2);u.emit(t,new B((Math.random()-.5)*.3,.9+Math.random()*.5,(Math.random()-.5)*.3),.7+Math.random()*.4,1.5)}return 0}}}function Hg(){let e=document.createElement(`canvas`);e.width=e.height=512;let t=e.getContext(`2d`),n=5,r=()=>(n=n*16807%2147483647,(n-1)/2147483646);t.fillStyle=`#e2c08e`,t.fillRect(0,0,512,512);for(let e=0;e<1500;e++)kg(t,r()*512,r()*512,1+r()*1.5,r()<.5?`rgba(140,95,45,0.25)`:`rgba(255,240,210,0.3)`);kg(t,262,266,240,`rgba(90,50,20,0.25)`);let i=t.createRadialGradient(256,256,190,256,256,238);i.addColorStop(0,`#f0c374`),i.addColorStop(.6,`#d9954a`),i.addColorStop(1,`#a8672a`),t.fillStyle=i,t.beginPath(),t.arc(256,256,238,0,Math.PI*2),t.fill();for(let e=0;e<40;e++){let e=r()*Math.PI*2,n=205+r()*25;t.fillStyle=`rgba(120,60,20,0.35)`,t.beginPath(),t.ellipse(256+Math.cos(e)*n,256+Math.sin(e)*n,5+r()*6,3+r()*3,e,0,Math.PI*2),t.fill()}kg(t,256,256,202,`#c73526`),kg(t,256,256,196,`#d8412f`),t.fillStyle=`#ffd966`,t.beginPath();for(let e=0;e<=48;e++){let n=e/48*Math.PI*2,r=176+Math.sin(n*7)*8+Math.sin(n*13+1)*5;t.lineTo(256+Math.cos(n)*r,256+Math.sin(n)*r)}t.fill();for(let e=0;e<22;e++){let e=r()*Math.PI*2,n=r()*160;kg(t,256+Math.cos(e)*n,256+Math.sin(e)*n,10+r()*18,`#ffe89a`)}for(let e=0;e<30;e++){let e=r()*Math.PI*2,n=r()*170;kg(t,256+Math.cos(e)*n,256+Math.sin(e)*n,3+r()*5,`rgba(220,140,40,0.5)`)}let a=[[0,0]];for(let e=0;e<6;e++)a.push([Math.cos(e/6*Math.PI*2+.3)*78,Math.sin(e/6*Math.PI*2+.3)*78]);for(let e=0;e<9;e++)a.push([Math.cos(e/9*Math.PI*2)*148,Math.sin(e/9*Math.PI*2)*148]);for(let[e,n]of a){let i=256+e,a=256+n;kg(t,i+2,a+3,25,`rgba(120,20,20,0.35)`),kg(t,i,a,25,`#a51d2a`),kg(t,i,a,21,`#c9303a`);for(let e=0;e<5;e++)kg(t,i+(r()-.5)*28,a+(r()-.5)*28,2.5,`#e8707a`);t.strokeStyle=`rgba(255,255,255,0.35)`,t.lineWidth=3,t.beginPath(),t.arc(i,a,16,3.6,4.6),t.stroke()}for(let e=0;e<7;e++){let n=e/7*Math.PI*2+.7,r=115+e%2*20,i=256+Math.cos(n)*r,a=256+Math.sin(n)*r;t.save(),t.translate(i,a),t.rotate(n*2),t.fillStyle=`#f1e6cf`,t.beginPath(),t.arc(0,0,13,Math.PI,0),t.fill(),t.fillRect(-5,0,10,12),t.strokeStyle=`#b89a6a`,t.lineWidth=2,t.beginPath(),t.arc(0,0,13,Math.PI,0),t.stroke(),t.restore()}for(let e=0;e<9;e++){let n=e/9*Math.PI*2+.2,r=45+e%3*55;t.strokeStyle=`#2e2a2a`,t.lineWidth=6,t.beginPath(),t.arc(256+Math.cos(n)*r,256+Math.sin(n)*r,7,0,Math.PI*2),t.stroke()}for(let e=0;e<6;e++){let n=e/6*Math.PI*2+.55,r=256+Math.cos(n)*55,i=256+Math.sin(n)*55;t.save(),t.translate(r,i),t.rotate(n),t.fillStyle=`#2f9a4f`,t.beginPath(),t.ellipse(0,0,16,8,0,0,Math.PI*2),t.fill(),t.strokeStyle=`rgba(255,255,255,0.35)`,t.lineWidth=1.5,t.beginPath(),t.moveTo(-12,0),t.lineTo(12,0),t.stroke(),t.restore()}for(let e=0;e<8;e++){let n=e/8*Math.PI*2+.2;for(let[e,r]of[[`rgba(110,45,15,0.5)`,0],[`rgba(255,240,200,0.35)`,2]])t.strokeStyle=e,t.lineWidth=2.5,t.beginPath(),t.moveTo(256+Math.cos(n+Math.PI/2)*r,256+Math.sin(n+Math.PI/2)*r),t.lineTo(256+Math.cos(n)*236+Math.cos(n+Math.PI/2)*r,256+Math.sin(n)*236+Math.sin(n+Math.PI/2)*r),t.stroke()}let o=new $i(e);return o.colorSpace=Je,o.anisotropy=4,o}function Ug({ctx:e,kick:t}){let{cube:n,sfx:r}=e,i=n.half,a=i.x*2,o=i.y*2,s=Dg(192,144),c=a*.66-.3,l=o-.9,u=Eg(n,new B(-i.x+.4+c/2,i.y-.45-l/2,i.z+.012),new B(0,0,1),c,l,new _i({map:s.tex,transparent:!0})),d=new G({color:`#c9ced9`,metalness:.6,roughness:.3}),f=new G({color:`#2e2a4f`}),p=new Rn;for(let e of[-1,1]){let t=new W(new aa(.03,.03,1.6,8),d);t.position.y=.8;let n=new W(new Do(.08,12,8),f);n.position.y=1.6;let r=new Rn;r.add(t,n),r.rotation.z=e*.45,p.add(r)}p.position.set(0,i.y,0),p.scale.setScalar(1e-4),n.addProp(p);let m=.35,h=[`#ffffff`,`#ffd23f`,`#7cc6fe`,`#2fbf6f`,`#ff6fb1`,`#ff4d4d`,`#3b82f6`];return{duration:1.4,zoom:1.12,update(e,n){if($(n,e,.05)&&(r.boing(),t(.05)),p.scale.setScalar(Math.max(1e-4,qh(Xh((e-.05)/.35),2.2))),p.rotation.z=Math.sin(e*9)*.08*Math.exp(-e*2),$(n,e,m)&&r.slurp(),u.visible=e>m,e<=m)return 0;let i=s.g,a=e-m;if(a<.45){let e=i.createImageData(192,144);for(let t=0;t<e.data.length;t+=4){let n=Math.random()*255;e.data[t]=e.data[t+1]=e.data[t+2]=n,e.data[t+3]=235}i.putImageData(e,0,0)}else{h.forEach((e,t)=>{i.fillStyle=e,i.fillRect(t*192/h.length,0,192/h.length+1,144)}),i.fillStyle=`#ffd23f`,i.beginPath(),i.arc(96,72,38,0,Math.PI*2),i.fill(),i.fillStyle=`#2e2a4f`,i.beginPath(),i.arc(84,64,5,0,Math.PI*2),i.arc(108,64,5,0,Math.PI*2),i.fill(),i.strokeStyle=`#2e2a4f`,i.lineWidth=5,i.beginPath(),i.arc(96,74,20,.15*Math.PI,.85*Math.PI),i.stroke(),i.fillStyle=`rgba(255,255,255,${.08+.05*Math.sin(a*30)})`;for(let e=0;e<144;e+=4)i.fillRect(0,e,192,1)}return s.tex.needsUpdate=!0,0}}}function Wg({ctx:e,kick:t}){let{cube:n,sfx:r}=e,i=n.half,a=-i.x+2,o=Dg(160,96),s=Eg(n,new B(a+.012,i.y-1,0),new B(1,0,0),i.z*2-.5,1.5,new _i({map:o.tex})),c=new Rn,l=new W(new aa(.04,.04,.35,8),new G({color:`#2e2a4f`}));l.position.y=.17;let u=new W(new Do(.13,16,12),new G({color:`#ff3b5c`,roughness:.3}));u.position.y=.38,c.add(l,u),c.position.set(a+.6,-i.y+4,0),n.addProp(c);let d=.4;return{duration:1.4,zoom:1.06,update(e,n){if($(n,e,.1)&&(r.coin(),t(.05)),$(n,e,d)&&r.melody(),c.rotation.z=Math.sin(e*14)*.35*Xh((e-d)/.2),c.rotation.x=Math.cos(e*11)*.25*Xh((e-d)/.2),s.visible=e>d,e<=d)return 0;let i=o.g,a=e-d;i.fillStyle=`#0c0a1c`,i.fillRect(0,0,160,96),i.fillStyle=`#7cff8a`;let l=Math.sin(a*2)*18,u=Math.floor(a*4)%2;for(let e=0;e<2;e++)for(let t=0;t<5;t++){let n=22+t*26+l,r=16+e*22;i.fillRect(n,r,16,8),i.fillRect(n+(u?-3:3),r+8,4,5),i.fillRect(n+(u?15:9),r+8,4,5),i.fillStyle=`#0c0a1c`,i.fillRect(n+4,r+2,3,3),i.fillRect(n+10,r+2,3,3),i.fillStyle=`#7cff8a`}return i.fillStyle=`#ffd23f`,i.fillRect(72+Math.sin(a*3)*30,82,16,8),i.font=`bold 12px monospace`,i.fillText(`SCORE ${String(Math.floor(a*420)).padStart(5,`0`)}`,6,12),o.tex.needsUpdate=!0,0}}}function Gg({ctx:e,kick:t}){let{cube:n,sfx:r,radius:i}=e,a=n.half,o=new B(a.x-.5,-a.y+(n.profileHeights?.[n.profileHeights.length-1]??a.y*2)+.15,0),s=new i_(n,16,`#f1eef8`,.9),c=.2;return{duration:1.8,update(e,a){s.update(e-a),$(a,e,.1)&&r.whistle(),e>=c&&e<1.5&&(c=e+.2,s.emit(o,new B(-.3-Math.random()*.3,1.6+Math.random()*.5,(Math.random()-.5)*.4),.8+Math.random()*.3,1.4),r.tick(3));let l=e<1.5?Math.sin(e*10)*.035*i*Math.sin(Math.PI*Xh(e/1.5)):0;return n.group.position.x=l+Math.sin(Math.PI*Xh(e/1.5))*.08*i,$(a,e,1.5)&&t(.05),0}}}function Kg({ctx:e,kick:t}){let{cube:n,sfx:r,sparkles:i,radius:a}=e,o=n.half,s=Dg(64,40);s.g.fillStyle=`#ff4d4d`,s.g.beginPath(),s.g.moveTo(0,0),s.g.lineTo(64,20),s.g.lineTo(0,40),s.g.fill(),s.g.fillStyle=`#ffd23f`,s.g.beginPath(),s.g.arc(18,20,7,0,Math.PI*2),s.g.fill();let c=new G({color:`#6b4423`}),l=new G({map:s.tex,side:2,transparent:!0,roughness:.8}),u=[-o.x+.5,o.x-.5].map(e=>{let t=new Rn,r=new W(new aa(.035,.035,1.4,8),c);r.position.y=.7;let i=new W(new Eo(.8,.5),l);return i.position.set(.4,1.15,0),t.add(r,i),t.position.set(e,o.y,0),t.rotation.y=.7,t.scale.setScalar(1e-4),n.addProp(t),{g:t,f:i}});return{duration:1.4,zoom:1.12,update(e,n){if($(n,e,.2)){r.win(),t(.08);for(let e of u)i.burst(e.g.position.clone().setY(o.y+1),{count:25,colors:Wh,speed:a*1.6,dir:Vh,spread:.7,size:.26,life:1})}return u.forEach((t,n)=>{t.g.scale.setScalar(Math.max(1e-4,qh(Xh((e-.2-n*.1)/.4),2))),t.f.rotation.y=Math.sin(e*6+n)*.35}),0}}}function qg({ctx:e,kick:t}){let{cube:n,sfx:r,sparkles:i,radius:a}=e,o=n.half,s=new G({color:`#ffc53d`,metalness:.8,roughness:.25}),c=new Rn,l=new W(new To([[0,0],[.3,0],[.3,.1],[.1,.18],[.08,.45],[.35,.6],[.42,1.05],[.38,1.08],[0,.7]].map(([e,t])=>new z(e,t)),32),s);l.castShadow=!0,c.add(l);for(let e of[-1,1]){let t=new W(new Oo(.16,.035,8,20,Math.PI),s);t.position.set(e*.42,.82,0),t.rotation.z=e>0?-Math.PI/2:Math.PI/2,c.add(t)}let u=new B(0,o.y,0);c.position.copy(u),c.visible=!1,n.addProp(c);let d=.25;return{duration:1.4,zoom:1.12,update(e,n){let o=Xh((e-d)/.35);c.visible=e>d,c.position.y=u.y+(1-o*o)*2.5,$(n,e,.6)&&(r.tok(),r.win(),t(.08),i.burst(u.clone().setY(u.y+.6),{count:60,colors:[`#ffc53d`,`#ffffff`,`#ffe28a`],speed:a*1.8,dir:Vh,spread:.9,size:.3,life:1.1})),c.rotation.y=e*1.2;let s=e-d-.35;return c.scale.set(1,s>0?1-Math.sin(s*25)*Math.exp(-s*8)*.2:1,1),0}}}function Jg({ctx:e,kick:t}){let{cube:n,sfx:r}=e,i=n.half,a=new G({color:`#3b82f6`,roughness:.35}),o=new Rn,s=new W(new bh(2,.9,2,3,.08),a);s.position.y=.45,s.castShadow=!0,o.add(s);for(let[e,t]of[[-.5,-.5],[.5,-.5],[-.5,.5],[.5,.5]]){let n=new W(new aa(.28,.28,.2,20),a);n.position.set(e,1,t),o.add(n)}o.position.set(i.x-2,i.y,0),o.visible=!1,n.addProp(o);let c=.3;return{duration:1.3,zoom:1.08,update(e,n){let a=Xh((e-c)/.3);return o.visible=e>c,o.position.y=i.y+(1-a*a)*2.2,$(n,e,.6)&&(r.ratchet(),t(.06)),0}}}function Yg({ctx:e}){let{cube:t,sfx:n}=e,r=t.half,i=[Xg(!0),Xg(!1),Xg(!1),Zg()].map(e=>new _i({map:e,transparent:!0,opacity:0,depthWrite:!1})),a=[Eg(t,new B(-r.x+.95,-r.y+1.8,r.z+.012),Uh,.9,.8,i[0]),Eg(t,new B(-r.x+4.05,-r.y+1.8,r.z+.012),Uh,.9,.8,i[1]),Eg(t,new B(r.x+.012,-r.y+1.95,0),Hh,1,.9,i[2]),Eg(t,new B(0,r.y-.95,r.z+.012),Uh,.46,.46,i[3])];return{duration:1.2,update(e,t){return $(t,e,.3)&&n.cute(),a.forEach((t,n)=>{let r=Xh((e-.3-n*.08)/.25);t.visible=r>0,i[n].opacity=r*(.92+.06*Math.sin(e*5+n))}),0}}}function Xg(e){let t=document.createElement(`canvas`);t.width=128,t.height=114;let n=t.getContext(`2d`),r=n.createRadialGradient(64,60,6,64,60,90);r.addColorStop(0,`#fff7d6`),r.addColorStop(1,`#ffbf5e`),n.fillStyle=r,n.fillRect(0,0,128,114),n.fillStyle=`rgba(255,225,235,0.9)`;for(let e of[0,1]){let t=e?128:0,r=e?-1:1;n.beginPath(),n.moveTo(t,0),n.lineTo(t+r*42,0),n.quadraticCurveTo(t+r*16,40,t+r*18,86),n.lineTo(t,86),n.fill()}e&&(n.fillStyle=`rgba(70,40,30,0.8)`,n.beginPath(),n.ellipse(44,100,20,14,0,0,Math.PI*2),n.fill(),kg(n,50,78,12,`rgba(70,40,30,0.8)`),n.beginPath(),n.moveTo(40,74),n.lineTo(42,60),n.lineTo(49,69),n.moveTo(52,69),n.lineTo(59,60),n.lineTo(60,74),n.fill(),n.strokeStyle=`rgba(70,40,30,0.8)`,n.lineWidth=6,n.lineCap=`round`,n.beginPath(),n.moveTo(26,104),n.quadraticCurveTo(10,100,16,84),n.stroke()),n.fillStyle=`#fffaf5`,n.fillRect(61,0,6,114),n.fillRect(0,54,128,6);let i=new $i(t);return i.colorSpace=Je,i}function Zg(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,2,32,32,30);n.addColorStop(0,`#fff7d6`),n.addColorStop(1,`#ffbf5e`),t.fillStyle=n,t.beginPath(),t.arc(32,32,30,0,Math.PI*2),t.fill(),t.fillStyle=`#fffaf5`,t.fillRect(29,0,6,64),t.fillRect(0,29,64,6),t.globalCompositeOperation=`destination-in`,t.beginPath(),t.arc(32,32,30,0,Math.PI*2),t.fill();let r=new $i(e);return r.colorSpace=Je,r}function Qg({ctx:e,kick:t}){let{cube:n,sfx:r}=e,i=n.half,a=new Rn,o=new G({color:`#2e2a4f`,roughness:.4}),s=new W(new bh(1.6,.3,.8,3,.12),o);s.castShadow=!0,a.add(s);for(let[e,t,n]of[[.45,-.1,`#ff4d6d`],[.62,.08,`#3b82f6`]]){let r=new W(new aa(.09,.09,.08,16),new G({color:n}));r.position.set(e,.18,t),a.add(r)}let c=new W(new ra(.34,.06,.1),new G({color:`#9d97b3`}));c.position.set(-.45,.17,0);let l=c.clone();return l.rotation.y=Math.PI/2,a.add(c,l),a.position.set(0,i.y+.2,i.z*.3),a.rotation.y=.7,a.scale.setScalar(1e-4),n.addProp(a),{duration:1.4,zoom:1.08,update(e,n){return $(n,e,.2)&&(r.melody(),t(.06)),a.scale.setScalar(Math.max(1e-4,qh(Xh((e-.2)/.35),2))),a.position.y=i.y+.25+Math.abs(Math.sin(e*5))*.35*Math.exp(-Math.max(0,e-.5)*1.5),a.rotation.z=Math.sin(e*7)*.12,0}}}function $g({ctx:e}){let{cube:t,sfx:n}=e,r=t.half,i=[`#ff5d73`,`#3b82f6`,`#ffd23f`,`#2fbf6f`,`#9b5cff`,`#ff8a3d`],a=[[.7,1.5,3.2],[.7,1.2,3.3],[1.5,2.3,3.2],[.7,1.6,3.55]],o=new G({color:`#fbf3e0`,roughness:.8}),s=[];return a.forEach((e,n)=>e.forEach((e,a)=>{let c=i[(n*3+a)%i.length],l=new G({color:c,roughness:.6}),u=new G({map:e_(c),roughness:.6}),d=new W(new ra(.24,.95,.9),[l,l,o,o,u,l]);d.castShadow=!0,d.position.set(-r.x+e,r.y-.15-n*1.45-.82,r.z-.45),t.addProp(d),s.push({m:d,at:.15+n*.12+a*.05})})),{duration:1.5,update(e,t){for(let i of s){$(t,e,i.at)&&n.tick(3);let a=Xh((e-i.at)/.8);i.m.position.z=r.z-.45+Math.sin(Math.PI*a)*.75,i.m.rotation.z=Math.sin(Math.PI*a)*.12}return 0}}}function e_(e){let t=document.createElement(`canvas`);t.width=32,t.height=128;let n=t.getContext(`2d`);n.fillStyle=e,n.fillRect(0,0,32,128),n.fillStyle=`rgba(255,255,255,0.25)`,n.fillRect(2,0,6,128),n.fillStyle=`rgba(0,0,0,0.2)`,n.fillRect(26,0,6,128),n.fillStyle=`#ffd98a`,n.fillRect(3,12,26,4),n.fillRect(3,110,26,4),n.fillStyle=`rgba(255,255,255,0.8)`,n.fillRect(7,44,18,30);let r=new $i(t);return r.colorSpace=Je,r}function t_({ctx:e,kick:t}){let{cube:n,sfx:r}=e,i=n.half,a=-i.y+(n.profileHeights?.[1]??2),o=[[`#ffd166`,`stripes`],[`#ff8fab`,`heart`]].map(([e,t],r)=>{let o=new W(new bh(1.1,.4,1.3,3,.18),new G({map:n_(e,t),roughness:.8}));return o.castShadow=!0,o.position.set(-i.x+1.8+r*1.8,a+.2,(r?1:-1)*.6),o.rotation.y=(r?-1:1)*.3,o.scale.setScalar(1e-4),n.addProp(o),o});return{duration:1.4,update(e,n){return o.forEach((i,o)=>{i.scale.setScalar(Math.max(1e-4,qh(Xh((e-.1-o*.12)/.3),2)));let s=0;for(let i of[.4,.85]){let a=(e-i-o*.12)/.35;a>0&&a<1&&(s=Math.sin(Math.PI*a)*.7),$(n,e,i+o*.12+.35)&&(r.tok(),t(.03))}i.position.y=a+.2+s,i.rotation.x=s*.3}),0}}}function n_(e,t){let n=document.createElement(`canvas`);n.width=n.height=128;let r=n.getContext(`2d`);if(r.fillStyle=e,r.fillRect(0,0,128,128),t===`stripes`){r.fillStyle=`rgba(255,255,255,0.6)`;for(let e=6;e<128;e+=26)r.fillRect(e,0,10,128)}else r.fillStyle=`#ffffff`,r.beginPath(),r.moveTo(64,96),r.bezierCurveTo(22,70,26,34,48,34),r.bezierCurveTo(58,34,62,42,64,48),r.bezierCurveTo(66,42,70,34,80,34),r.bezierCurveTo(102,34,106,70,64,96),r.fill();let i=r.createRadialGradient(64,64,20,64,64,90);i.addColorStop(0,`rgba(255,255,255,0.15)`),i.addColorStop(1,`rgba(0,0,0,0.18)`),r.fillStyle=i,r.fillRect(0,0,128,128);let a=new $i(n);return a.colorSpace=Je,a}function r_({ctx:e,kick:t}){let{cube:n,sfx:r,sparkles:i}=e,a=n.half,o=[{at:.1,x:-1.5,z:.5,c:[`#ff4d6d`,`#ffd23f`,`#ffffff`]},{at:.4,x:1.8,z:-.4,c:[`#7cc6fe`,`#ffffff`,`#b07cff`]},{at:.7,x:.2,z:1.2,c:[`#2fbf6f`,`#ffd23f`,`#ffffff`]},{at:.95,x:-.8,z:-1.2,c:[`#ff9f1c`,`#ff6fb1`,`#ffffff`]},{at:1.2,x:1.2,z:1,c:Wh}];return{duration:1.6,zoom:1.08,update(e,n){$(n,e,0)&&t(.08);for(let t of o)$(n,e,t.at)&&i.burst(new B(t.x,a.y,t.z),{count:10,colors:[`#ffe28a`,`#ffffff`],speed:5,dir:Vh,spread:.08,size:.2,life:.35}),$(n,e,t.at+.3)&&(i.burst(new B(t.x,a.y+3.2,t.z),{count:70,colors:t.c,speed:4.2,size:.34,life:1.3}),r.pop(6+Math.floor(Math.random()*6)),r.burstFirework());return 0}}}var i_=class{constructor(e,t,n,r=.85){q(this,`opacity`,void 0),q(this,`pool`,[]),q(this,`next`,0),this.opacity=r;let i=a_();for(let r=0;r<t;r++){let t=new ui(new Xr({map:i,color:n,transparent:!0,depthWrite:!1,opacity:0}));t.visible=!1,e.addProp(t),this.pool.push({s:t,age:0,life:0,v:new B,size:1})}}emit(e,t,n,r){let i=this.pool[this.next];this.next=(this.next+1)%this.pool.length,i.s.position.copy(e),i.v.copy(t),i.size=n,i.life=r,i.age=0,i.s.visible=!0,i.s.material.rotation=Math.random()*Math.PI*2}update(e){for(let t of this.pool){if(!t.s.visible)continue;t.age+=e;let n=t.age/t.life;if(n>=1){t.s.visible=!1;continue}t.s.position.addScaledVector(t.v,e),t.v.multiplyScalar(Math.exp(-e*1.4)),t.s.scale.setScalar(t.size*(.35+.9*Math.sqrt(n))),t.s.material.opacity=this.opacity*Math.min(1,n*6)*(1-n)}}};function a_(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);for(let[e,n,r]of[[64,70,40],[44,62,28],[84,58,30],[62,46,30]]){let i=t.createRadialGradient(e,n,r*.2,e,n,r);i.addColorStop(0,`rgba(255,255,255,0.9)`),i.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=i,t.fillRect(0,0,128,128)}let n=new $i(e);return n.colorSpace=Je,n}function o_(e,t){let n=e.half,r=.1,i=document.createElement(`canvas`);i.width=i.height=128;let a=i.getContext(`2d`),o=new U(t),s=a.createRadialGradient(64,58,6,64,64,92);s.addColorStop(0,`#`+o.getHexString()),s.addColorStop(1,`#`+o.clone().multiplyScalar(.45).getHexString()),a.fillStyle=s,a.fillRect(0,0,128,128),a.strokeStyle=`rgba(0,0,0,0.35)`,a.lineWidth=10,a.strokeRect(5,5,118,118);let c=new $i(i);c.colorSpace=Je;let l=new W(new Eo(n.x*2-r*2,n.z*2-r*2),new G({map:c,roughness:.95}));return l.receiveShadow=!0,l.rotation.x=-Math.PI/2,l.position.y=n.y+.0015,l.visible=!1,e.addProp(l),l}function s_(e,t){let n=e.half,r=.08,i=new U(t),a=new W(new ra(n.x*2-.03,r,n.z*2-.03),new G({color:i,roughness:.85}));a.castShadow=!0,a.matrixAutoUpdate=!1,a.visible=!1;let o=new H().makeTranslation(0,n.y+.001-r/2,0);return e.addProp(a),{set(e){a.visible=!!e,e&&a.matrix.multiplyMatrices(e,o)}}}var c_=class extends sa{constructor(e,t){super(),q(this,`r`,void 0),q(this,`turns`,void 0),this.r=e,this.turns=t}getPoint(e,t=new B){let n=e*this.turns*Math.PI*2;return t.set(Math.cos(n)*this.r,e,Math.sin(n)*this.r)}};function l_(e){let t=e.half,n=Math.min(t.x,t.z)*2,r=.19*n,i=.3*t.y*2,a=(e,t={})=>new G({color:e,roughness:.55,metalness:0,...t}),o=new Rn;o.position.set(0,t.y-.25,0),o.visible=!1;let s=new W(new ko(new c_(.12*n,6.5),260,.018*n,8),a(`#d8dee9`,{metalness:.55,roughness:.3}));s.castShadow=!0,o.add(s);let c=new Rn,l=new W(new Do(r,40,28),a(`#ffffff`,{map:u_(),roughness:.6}));l.castShadow=!0,c.add(l);let u=new W(new Do(r*.2,20,14),a(`#ff3b5c`,{roughness:.3}));u.position.set(0,.12,1).normalize().multiplyScalar(r*1.02),c.add(u);for(let e of[-1,1])for(let[t,n,i]of[[.2,-.1,.36],[-.12,-.05,.3]]){let o=new W(new Do(r*i,18,12),a(`#ff8a00`,{roughness:.8}));o.position.set(e*r*.9,r*t,r*n),c.add(o)}let d=new Rn;d.position.set(0,r*.78,0),d.rotation.z=-.28;let f=new W(new oa(r*.45,r*1.05,24),a(`#7c5cff`,{roughness:.45}));f.position.y=r*.52;let p=new W(new Do(r*.16,16,10),a(`#ffd23f`,{roughness:.7}));p.position.y=r*1.08,d.add(f,p),c.add(d);let m=new Rn;for(let e=0;e<12;e++){let t=e/12*Math.PI*2,n=new W(new Do(r*.2,14,10),a(e%2?`#ffd23f`:`#ff5d73`,{roughness:.6}));n.position.set(Math.cos(t)*r*.62,-r*.92,Math.sin(t)*r*.62),m.add(n)}return c.add(m),c.rotation.y=.7,o.add(c),e.addProp(o),{update(e){if(o.visible=e>0,e<=0)return;let t=Jh(Xh(e/.95)),n=i*Math.max(.05,t)+.25;s.scale.set(1,n,1),c.position.y=n+r*.9;let a=1+(1-t)*.35;c.scale.set(1/Math.sqrt(a),a,1/Math.sqrt(a));let l=.05+.22*Math.exp(-2.2*e);o.rotation.z=Math.sin(e*3.1)*l,o.rotation.x=Math.sin(e*2.3+1)*l*.6,c.rotation.z=Math.sin(e*3.7+.5)*l*.8}}}function u_(){let e=document.createElement(`canvas`);e.width=512,e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#fff4ea`,t.fillRect(0,0,512,256);let n=(e,n,r,i,a)=>{t.fillStyle=a,t.beginPath(),t.ellipse(e,n,r,i,0,0,Math.PI*2),t.fill()};n(84,140,17,13,`rgba(255,120,150,0.5)`),n(172,140,17,13,`rgba(255,120,150,0.5)`);for(let e of[-1,1])n(128+e*22,104,8,12,`#2e2a4f`),n(128+e*22+3,99,3,3.5,`#ffffff`);t.strokeStyle=`#d6335c`,t.lineWidth=8,t.lineCap=`round`,t.beginPath(),t.arc(128,124,30,.18*Math.PI,.82*Math.PI),t.stroke();let r=new $i(e);return r.colorSpace=Je,r.anisotropy=4,r}var d_=class{constructor(e,t,n=.42){q(this,`sizeK`,void 0),q(this,`pool`,[]),q(this,`next`,0),q(this,`h`,void 0),this.sizeK=n,this.h=e.half;for(let n=0;n<12;n++){let r=new ui(new Xr({map:t[n%t.length],transparent:!0,depthWrite:!1,opacity:0}));r.visible=!1,e.addProp(r),this.pool.push({sprite:r,age:0,x:0,z:0,phase:0,life:0})}}spawn(){let e=this.pool[this.next];this.next=(this.next+1)%this.pool.length,e.age=0,e.life=2.2+Math.random()*.5,e.x=(Math.random()-.5)*this.h.x*.9,e.z=(Math.random()-.2)*this.h.z*.7,e.phase=Math.random()*Math.PI*2,e.sprite.visible=!0}update(e){let t=Math.min(this.h.x,this.h.z)*this.sizeK;for(let n of this.pool){if(!n.sprite.visible)continue;n.age+=e;let r=n.age/n.life;if(r>=1){n.sprite.visible=!1;continue}let i=qh(Xh(n.age/.3),2.4);n.sprite.position.set(n.x+Math.sin(n.age*2.6+n.phase)*t*.35,this.h.y+.3+n.age*this.h.y*.55,n.z),n.sprite.scale.setScalar(t*i),n.sprite.material.rotation=Math.sin(n.age*2.1+n.phase)*.3,n.sprite.material.opacity=Math.min(1,r*8)*(1-Xh((r-.6)/.4))}}};function f_(e){let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=()=>{n.beginPath(),e?(n.ellipse(36,96,17,12,-.35,0,Math.PI*2),n.moveTo(106,84),n.ellipse(90,84,17,12,-.35,0,Math.PI*2),n.rect(45,26,8,70),n.rect(99,14,8,70),n.moveTo(45,26),n.lineTo(107,14),n.lineTo(107,32),n.lineTo(45,44),n.closePath()):(n.ellipse(52,94,20,14,-.35,0,Math.PI*2),n.rect(63,18,9,76),n.moveTo(63,18),n.bezierCurveTo(78,30,100,40,90,70),n.bezierCurveTo(88,52,80,46,72,44),n.closePath())};n.lineJoin=`round`,n.strokeStyle=`#5a3414`,n.lineWidth=10,r(),n.stroke(),n.fillStyle=`#ffd166`,r(),n.fill();let i=new $i(t);return i.colorSpace=Je,i}var p_=(e,t=1.7)=>1+(t+1)*(e-1)**3+t*(e-1)**2,m_=`#ff3b5c`,h_={ring:new Oo(.25,.055,10,36),post:new aa(.04,.03,.34,10),head:new Do(.15,20,14),dot:new ia(.075,16)},g_=class{constructor(e,t,n,r,i){q(this,`group`,new Rn),q(this,`pin`,new Rn),q(this,`dots`,[]),q(this,`mats`,[]),q(this,`hitT`,-1),q(this,`backT`,-1),q(this,`wobbleAxis`,new B),q(this,`upright`,new Vt),q(this,`tmpQ`,new Vt);let a=new G({color:m_,roughness:.35}),o=new G({color:`#d7dce6`,roughness:.3,metalness:.6}),s=new _i({color:m_,transparent:!0,opacity:.55,depthWrite:!1});this.mats.push(a,o,s);let c=new Vt().setFromUnitVectors(new B(0,1,0),t);this.pin.position.copy(e).addScaledVector(t,i),this.pin.quaternion.copy(c),this.upright.copy(c);let l=new W(h_.ring,a);l.rotation.x=Math.PI/2,l.position.y=.02;let u=new W(h_.post,o);u.position.y=.17;let d=new W(h_.head,a);d.position.y=.38,u.castShadow=d.castShadow=!0,this.pin.add(l,u,d),this.group.add(this.pin),this.wobbleAxis.crossVectors(t,n).normalize();let f=new Vt().setFromUnitVectors(new B(0,0,1),t);for(let e of r){let n=new W(h_.dot,s);n.position.copy(e).addScaledVector(t,i+.004),n.quaternion.copy(f),n.renderOrder=1,this.dots.push(n),this.group.add(n)}}hit(){this.hitT=0,this.backT=-1,this.dots.forEach(e=>e.visible=!1)}restore(){this.hitT=-1,this.backT=0,this.pin.visible=!0,this.dots.forEach(e=>e.visible=!0)}update(e){if(this.hitT>=0){this.hitT+=e;let t=this.hitT,n=Math.max(0,(t-.28)/.22);this.pin.scale.setScalar(Math.max(1e-4,1-n*n)),this.tilt(Math.sin(t*28)*Math.exp(-t*7)*.5),n>=1&&(this.pin.visible=!1,this.hitT=-1)}else if(this.backT>=0){this.backT+=e;let t=Math.min(1,this.backT/.3);this.pin.scale.setScalar(Math.max(1e-4,p_(t,2.2))),this.tilt(0),t>=1&&(this.backT=-1)}}tilt(e){this.pin.quaternion.copy(this.upright),e&&this.pin.quaternion.premultiply(this.tmpQ.setFromAxisAngle(this.wobbleAxis,e))}dispose(){this.mats.forEach(e=>e.dispose())}},__=e=>e.cells[e.cells.length-1];function v_(e,t){let n=t.pin??0;return[...t.cells.slice(n),...e.ray(__(t),t.dir).slice(0,n)]}function y_(e,t){return t.pin?e.ray(__(t),t.dir)[t.pin]??null:null}var b_=class e{constructor(e,t,n){q(this,`surface`,void 0),q(this,`arrows`,void 0),q(this,`phase`,void 0),q(this,`occ`,void 0),q(this,`cellIds`,void 0),q(this,`needIds`,void 0),this.surface=e,this.arrows=t;let r=t=>e.id(t);this.cellIds=t.map(t=>[t.cells.map(r),t.pin?v_(e,t).map(r):[],[]]),this.needIds=t.map(t=>{let n=e.ray(__(t),t.dir).map(r);return t.pin?[n.slice(0,t.pin),n.slice(t.pin),[]]:[n,[],[]]}),this.phase=new Uint8Array(t.length),n&&this.phase.set(Array.from(n)),this.occ=new Int32Array(e.size).fill(-1),this.phase.forEach((e,t)=>{for(let n of this.cellIds[t][e])this.occ[n]=t})}clone(){return new e(this.surface,this.arrows,this.phase)}get done(){return this.phase.every(e=>e===2)}canMove(e){let t=this.phase[e];if(t===2)return!1;for(let n of this.needIds[e][t])if(this.occ[n]>=0)return!1;return!0}isStop(e){return this.phase[e]===0&&!!this.arrows[e].pin}move(e){let t=this.phase[e];for(let n of this.cellIds[e][t])this.occ[n]=-1;let n=this.isStop(e)?1:2;this.phase[e]=n;for(let t of this.cellIds[e][n])this.occ[t]=e}clearRun(e){let t=this.needIds[e][this.phase[e]];for(let e=0;e<t.length;e++)if(this.occ[t[e]]>=0)return e;return-1}movable(){let e=[];for(let t=0;t<this.arrows.length;t++)this.canMove(t)&&e.push(t);return e}};function x_(e){let t=new Set,n=e=>{let r=[];for(let t=!0;t;){t=!1;for(let n=0;n<e.arrows.length;n++)!e.isStop(n)&&e.canMove(n)&&(e.move(n),r.push(n),t=!0)}if(e.done)return r;let i=e.phase.join(``);if(t.has(i))return null;t.add(i);for(let t of e.movable()){let i=e.clone();i.move(t);let a=n(i);if(a)return[...r,t,...a]}return null};return n(e.clone())}function S_(e,t,n,r){let i=0;for(let a=0;a<n;a++){let n=new b_(e,t);for(;;){let e=n.movable();if(e.length===0){n.done||i++;break}n.move(r.pick(e))}}return i/n}var C_=class{constructor(e=320){q(this,`max`,void 0),q(this,`points`,void 0),q(this,`pos`,void 0),q(this,`vel`,void 0),q(this,`col`,void 0),q(this,`size`,void 0),q(this,`alpha`,void 0),q(this,`life`,void 0),q(this,`maxLife`,void 0),q(this,`next`,0),q(this,`uniforms`,{uScale:{value:400},uBoost:{value:1}}),this.max=e;let t=new Br;this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e).fill(1),t.setAttribute(`position`,new Tr(this.pos,3).setUsage(et)),t.setAttribute(`aColor`,new Tr(this.col,3).setUsage(et)),t.setAttribute(`aSize`,new Tr(this.size,1).setUsage(et)),t.setAttribute(`aAlpha`,new Tr(this.alpha,1).setUsage(et));let n=new zo({uniforms:this.uniforms,transparent:!0,depthWrite:!1,vertexShader:`
        attribute vec3 aColor; attribute float aSize; attribute float aAlpha;
        uniform float uScale;
        varying vec3 vColor; varying float vAlpha;
        void main() {
          vColor = aColor; vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * uScale / -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform float uBoost;
        varying vec3 vColor; varying float vAlpha;
        void main() {
          vec2 p = gl_PointCoord * 2.0 - 1.0;
          float r = length(p);
          float star = (1.0 - smoothstep(0.0, 0.12, abs(p.x) * abs(p.y) * 4.0)) * (1.0 - r);
          float core = 1.0 - smoothstep(0.0, 0.45, r);
          float a = max(star, core) * vAlpha;
          if (a < 0.02) discard;
          gl_FragColor = vec4(mix(vColor, vec3(1.0), core * 0.6) * uBoost, a);
        }`});this.points=new Xi(t,n),this.points.frustumCulled=!1,this.points.renderOrder=10}setBoost(e){this.uniforms.uBoost.value=e}setViewportHeight(e,t){this.uniforms.uScale.value=e/(2*Math.tan(Bt.degToRad(t)/2))}burst(e,t){let n=new U;for(let r=0;r<t.count;r++){let i=this.next;this.next=(this.next+1)%this.max;let a=new B(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();t.dir&&a.multiplyScalar(t.spread??.6).add(t.dir).normalize();let o=t.speed*(.5+Math.random()*.8);this.pos.set([e.x,e.y,e.z],i*3),this.vel.set([a.x*o,a.y*o,a.z*o],i*3),n.set(t.colors[r%t.colors.length]),this.col.set([n.r,n.g,n.b],i*3),this.size[i]=(t.size??.22)*(.6+Math.random()*.8),this.maxLife[i]=(t.life??.6)*(.7+Math.random()*.6),this.life[i]=this.maxLife[i]}}update(e){let t=!1;for(let n=0;n<this.max;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}t=!0,this.life[n]-=e;let r=Math.exp(-e*3.2);for(let t=0;t<3;t++)this.vel[n*3+t]*=r,this.pos[n*3+t]+=this.vel[n*3+t]*e;let i=Math.max(0,this.life[n]/this.maxLife[n]);this.alpha[n]=Math.min(1,i*2.2)}let n=this.points.geometry;n.getAttribute(`position`).needsUpdate=!0,n.getAttribute(`aAlpha`).needsUpdate=!0,t&&(n.getAttribute(`aColor`).needsUpdate=!0,n.getAttribute(`aSize`).needsUpdate=!0)}};function w_(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,4,64,64,64);n.addColorStop(0,`rgba(40,24,80,0.55)`),n.addColorStop(.55,`rgba(40,24,80,0.22)`),n.addColorStop(1,`rgba(40,24,80,0)`),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new ui(new Xr({map:new $i(e),transparent:!0,depthWrite:!1,toneMapped:!1}));return r.renderOrder=-1,r}var T_=class extends Kn{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new ra;e.deleteAttribute(`uv`);let t=new G({side:1}),n=new G,r=new Ds(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new W(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new Bi(e,n,6),o=new Ln;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new W(e,E_(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new W(e,E_(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new W(e,E_(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new W(e,E_(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new W(e,E_(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new W(e,E_(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function E_(e){return new Ho({color:0,emissive:16777215,emissiveIntensity:e})}var D_=class e extends W{constructor(t,n={}){super(t),this.isReflector=!0,this.type=`Reflector`,this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let r=this,i=n.color===void 0?new U(8355711):new U(n.color),a=n.textureWidth||512,o=n.textureHeight||512,s=n.clipBias||0,c=n.shader||e.ReflectorShader,l=n.multisample===void 0?4:n.multisample,u=new qr,d=new B,f=new B,p=new B,m=new H,h=new B(0,0,-1),g=new on,_=new B,v=new B,y=new on,b=new H,x=new cn(a,o,{samples:l,type:T}),S=new zo({name:c.name===void 0?`unspecified`:c.name,uniforms:Io.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});S.uniforms.tDiffuse.value=x.texture,S.uniforms.color.value=i,S.uniforms.textureMatrix.value=b,this.material=S,this.onBeforeRender=function(e,t,n){let i=this.getReflectionCamera(n);if(f.setFromMatrixPosition(r.matrixWorld),p.setFromMatrixPosition(n.matrixWorld),m.extractRotation(r.matrixWorld),d.set(0,0,1),d.applyMatrix4(m),_.subVectors(f,p),_.dot(d)>0&&this.forceUpdate===!1)return;_.reflect(d).negate(),_.add(f),m.extractRotation(n.matrixWorld),h.set(0,0,-1),h.applyMatrix4(m),h.add(p),v.subVectors(f,h),v.reflect(d).negate(),v.add(f),i.position.copy(_),i.up.set(0,1,0),i.up.applyMatrix4(m),i.up.reflect(d),i.lookAt(v),i.far=n.far,i.updateMatrixWorld(),i.projectionMatrix.copy(n.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(i.projectionMatrix),b.multiply(i.matrixWorldInverse),b.multiply(r.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(i.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let a=i.projectionMatrix;i.isOrthographicCamera?(y.x=(Math.sign(g.x)+a.elements[8])/a.elements[0],y.y=(Math.sign(g.y)+a.elements[9])/a.elements[5],y.z=-n.far,y.w=1):(y.x=(Math.sign(g.x)+a.elements[8])/a.elements[0],y.y=(Math.sign(g.y)+a.elements[9])/a.elements[5],y.z=-1,y.w=(1+a.elements[10])/a.elements[14]),g.multiplyScalar(2/g.dot(y)),a.elements[2]=g.x,a.elements[6]=g.y,i.isOrthographicCamera?(a.elements[10]=g.z-s,a.elements[14]=g.w-1):(a.elements[10]=g.z+1-s,a.elements[14]=g.w),r.visible=!1;let o=e.getRenderTarget(),c=e.xr.enabled,l=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(x),e.state.buffers.depth.setMask(!0),e.autoClear===!1&&e.clear(),e.render(t,i),e.xr.enabled=c,e.shadowMap.autoUpdate=l,e.setRenderTarget(o);let S=n.viewport;S!==void 0&&e.state.viewport(S),r.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return x},this.dispose=function(){x.dispose(),r.material.dispose()},this.getReflectionCamera=function(e){let t=this._reflectionCameras.get(e);return t===void 0&&(t=e.clone(),this._reflectionCameras.set(e,t)),t}}};D_.ReflectorShader={name:`ReflectorShader`,uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var O_={indigo:{inner:`#2c2752`,mid:`#141128`,outer:`#05040b`,pool:[255,236,205],dust:`#ffe9c9`,rim:`#9ec3ff`,hemiSky:`#9aa6e0`,hemiGround:`#1a1530`,paper:null,rimGlow:`#8fa6ff`},dusk:{inner:`#35374b`,mid:`#222330`,outer:`#15161d`,pool:[255,234,210],dust:`#f1e6d8`,rim:`#b8c6ea`,hemiSky:`#a9b0cc`,hemiGround:`#1c1d26`,paper:`#ebe8ef`,rimGlow:`#9aa6d4`},plum:{inner:`#3e2f42`,mid:`#281e2c`,outer:`#18121a`,pool:[255,228,216],dust:`#f6dfe2`,rim:`#e2b9d6`,hemiSky:`#c4a8c6`,hemiGround:`#1f1720`,paper:`#efe7ea`,rimGlow:`#d6a3c8`},teal:{inner:`#273c41`,mid:`#18282c`,outer:`#0f181b`,pool:[218,244,236],dust:`#d9efe9`,rim:`#9fd8d0`,hemiSky:`#9cc2c0`,hemiGround:`#101b1c`,paper:`#e6ecea`,rimGlow:`#86cfc4`},graphite:{inner:`#37332f`,mid:`#24201e`,outer:`#161413`,pool:[255,228,198],dust:`#f1e1cc`,rim:`#e8d2b4`,hemiSky:`#c7bba9`,hemiGround:`#1d1917`,paper:`#ece6de`,rimGlow:`#d9bf98`}},k_=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.9999, 1.0);
  }`,A_=`
  uniform vec3 uInner;
  uniform vec3 uMid;
  uniform vec3 uOuter;
  uniform vec3 uGlow;
  uniform float uTime;
  uniform float uAspect;
  varying vec2 vUv;
  // Sine-free hash: fract(sin(x) * 43758.5) turns into stripes on some GPUs once x grows.
  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; }
    return v;
  }
  void main() {
    vec2 p = vUv - vec2(0.5, 0.64);
    p.x *= uAspect;
    float r = length(p) / 0.95;
    vec3 col = mix(uInner, uMid, smoothstep(0.0, 0.55, r));
    col = mix(col, uOuter, smoothstep(0.55, 1.05, r));
    float h1 = fbm(vec2(vUv.x * uAspect * 2.2 + uTime * 0.02, vUv.y * 2.2 - uTime * 0.015));
    float h2 = fbm(vec2(vUv.x * uAspect * 1.3 - uTime * 0.012, vUv.y * 1.3 + uTime * 0.01) + 7.0);
    col += uGlow * (h1 * h2) * (1.0 - smoothstep(0.15, 1.1, r));
    gl_FragColor = vec4(col, 1.0);
    #include <colorspace_fragment>
    // Dither after encoding: kills the banding dark gradients show on 8-bit screens.
    gl_FragColor.rgb += (hash(gl_FragCoord.xy + fract(uTime * 7.0)) - 0.5) * (2.0 / 255.0);
  }`,j_={name:`SoftMirror`,uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uStrength:{value:.42}},vertexShader:`
    uniform mat4 textureMatrix;
    varying vec4 vUv;
    varying vec2 vLocal;
    void main() {
      vUv = textureMatrix * vec4(position, 1.0);
      vLocal = position.xy;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform vec3 color;
    uniform sampler2D tDiffuse;
    uniform float uStrength;
    varying vec4 vUv;
    varying vec2 vLocal;
    void main() {
      vec4 base = texture2DProj(tDiffuse, vUv);
      float d = length(vLocal) * 2.0;
      float fade = (1.0 - smoothstep(0.05, 0.75, d)) * uStrength;
      gl_FragColor = vec4(base.rgb * color, fade);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`},M_=(e,t,n,r=.42)=>(i,a,o)=>{let s=Math.max(a,o)*.75,c=i.createRadialGradient(a/2,o*r,0,a/2,o*r,s);c.addColorStop(0,e),c.addColorStop(.55,t),c.addColorStop(1,n),i.fillStyle=c,i.fillRect(0,0,a,o)},N_={studio:{backdrop:M_(`#ffffff`,`#eeecf6`,`#cfcbe0`,.4),elevation:.26,lookDown:.18,hemi:[`#ffffff`,`#cfc8e6`,.75],key:[`#ffffff`,2.4,[-.2,1,.18]],fill:[`#e8eeff`,.45,[1,.25,.9]],rim:[`#dfe6ff`,1.3,[.3,.7,-1]],spot:null,env:.55,exposure:1,floor:`plane`,shadowOpacity:.24,bloom:null,beam:!1,fit:1.06,resultFit:1,resultLookDown:0,sparkleBoost:1},spotlight:{backdrop:M_(`#2c2752`,`#141128`,`#05040b`,.36),elevation:.22,lookDown:.12,hemi:[`#9aa6e0`,`#1a1530`,.32],key:[`#ffe9d0`,1.8,[.1,.4,1]],fill:[`#7f8fff`,.3,[1,.1,1]],rim:[`#9ec3ff`,2.2,[-.5,.6,-1]],spot:{color:`#fff1d8`,intensity:.62,pos:[.3,5,3.2],beamFrom:[.35,5.5,1.6],angle:.4,penumbra:.75},env:.2,exposure:.92,floor:`plane`,shadowOpacity:.55,bloom:{strength:.45,radius:.5,threshold:1.1},beam:!0,fit:1.04,resultFit:1.05,resultLookDown:.1,sparkleBoost:2.2},gallery:{backdrop:(e,t,n)=>{let r=e.createLinearGradient(0,0,0,n);r.addColorStop(0,`#efe3d2`),r.addColorStop(.62,`#f7eee2`),r.addColorStop(.63,`#e3d3bd`),r.addColorStop(1,`#cdb99f`),e.fillStyle=r,e.fillRect(0,0,t,n),M_(`rgba(255,248,236,0.9)`,`rgba(255,248,236,0.25)`,`rgba(60,40,20,0.18)`,.4)(e,t,n)},elevation:.3,lookDown:.28,hemi:[`#fff6ea`,`#d8c6ad`,.45],key:[`#fff1dc`,1.85,[-.45,.85,.6]],fill:[`#e6ecff`,.3,[1,.3,.8]],rim:[`#fff3e0`,.9,[.2,.8,-1]],spot:null,env:.3,exposure:1,floor:`pedestal`,shadowOpacity:.32,bloom:null,beam:!1,fit:1.02,resultFit:1.6,resultLookDown:.5,sparkleBoost:1}},P_=class{constructor(e,t){q(this,`scene`,void 0),q(this,`renderer`,void 0),q(this,`group`,new Rn),q(this,`hemi`,new ds(`#ffffff`,`#ded8f0`,1.85)),q(this,`key`,new As(`#ffffff`,1.9)),q(this,`fill`,new As(`#e6ecff`,1.05)),q(this,`rim`,new As(`#ffffff`,0)),q(this,`spot`,new Ts(`#ffffff`,0,0,.4,.6,0)),q(this,`floor`,void 0),q(this,`pedestal`,null),q(this,`beam`,null),q(this,`pool`,null),q(this,`dust`,null),q(this,`contact`,void 0),q(this,`groundY`,0),q(this,`dustVel`,null),q(this,`envMap`,null),q(this,`softboxMap`,null),q(this,`mirror`,null),q(this,`variant`,null),q(this,`livingU`,{uInner:{value:new U},uMid:{value:new U},uOuter:{value:new U},uGlow:{value:new U},uTime:{value:0},uAspect:{value:1}}),q(this,`living`,void 0),q(this,`livingOn`,!1),q(this,`backdrop`,null),q(this,`look`,null),q(this,`radius`,3),q(this,`t`,0),q(this,`kind`,`pastel`),q(this,`lowQuality`,!1),q(this,`wantMirror`,!1),this.scene=e,this.renderer=t,this.key.position.set(3,6,5),this.fill.position.set(-4,1,4),this.group.add(this.hemi,this.key,this.key.target,this.fill,this.rim,this.spot,this.spot.target),this.floor=new W(new Eo(1,1),new Ao({color:`#1b1433`,opacity:.3})),this.floor.rotation.x=-Math.PI/2,this.floor.receiveShadow=!0,this.group.add(this.floor);let n=document.createElement(`canvas`);n.width=n.height=128;let r=n.getContext(`2d`),i=r.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,`rgba(30,18,50,0.55)`),i.addColorStop(.6,`rgba(30,18,50,0.18)`),i.addColorStop(1,`rgba(30,18,50,0)`),r.fillStyle=i,r.fillRect(0,0,128,128),this.contact=new W(new ia(1,48),new _i({map:new $i(n),transparent:!0,depthWrite:!1,toneMapped:!1})),this.contact.rotation.x=-Math.PI/2,this.contact.renderOrder=1,this.group.add(this.contact),this.living=new W(new Eo(2,2),new zo({uniforms:this.livingU,vertexShader:k_,fragmentShader:A_,depthTest:!1,depthWrite:!1})),this.living.frustumCulled=!1,this.living.renderOrder=-1e3,this.living.visible=!1,this.group.add(this.living),e.add(this.group);for(let e of[this.key,this.spot])e.shadow.mapSize.set(512,512),e.shadow.bias=-6e-4,e.shadow.radius=22,e.shadow.blurSamples=16;t.shadowMap.type=3}get elevation(){return this.look?.elevation??0}get lookDown(){return this.look?.lookDown??0}get fit(){return this.look?.fit??1}get resultFit(){return this.look?.resultFit??1}get resultLookDown(){return this.look?.resultLookDown??0}get sparkleBoost(){return this.look?.sparkleBoost??1}get bloom(){return this.lowQuality?null:this.look?.bloom??null}get shadows(){return!!this.look&&this.look.floor!==`none`}get usesSpriteShadow(){return this.kind===`pastel`}get paperTone(){return this.variant?.paper??null}get rimGlow(){return this.variant?.rimGlow??null}configure(e,t,n={}){if(this.kind=e,this.variant=null,e===`spotlight`){let e=O_[n.backdrop??`indigo`],t=N_.spotlight;this.variant=e,this.look={...t,backdrop:M_(e.inner,e.mid,e.outer,.36),hemi:[e.hemiSky,e.hemiGround,t.hemi[2]],rim:[e.rim,t.rim[1],t.rim[2]]}}else this.look=e===`pastel`?null:N_[e];let r=this.look,i=e!==`pastel`||t===`studio`;if(i&&!this.envMap){let e=new Tc(this.renderer);this.envMap=e.fromScene(new T_,.04).texture,e.dispose()}let a=!!n.softbox&&!!r;if(a&&!this.softboxMap&&(this.softboxMap=this.buildSoftboxes()),this.scene.environment=a?this.softboxMap:i?this.envMap:null,this.wantMirror=!!n.mirror&&!!r&&!this.lowQuality,this.livingOn=!!n.living&&!!this.variant,this.living.visible=this.livingOn,this.variant){let e=this.variant;this.livingU.uInner.value.set(e.inner),this.livingU.uMid.value.set(e.mid),this.livingU.uOuter.value.set(e.outer),this.livingU.uGlow.value.setRGB(e.pool[0]/255,e.pool[1]/255,e.pool[2]/255).multiplyScalar(.07)}if(r)this.scene.environmentIntensity=a?Math.max(r.env,.45):r.env,this.hemi.color.set(r.hemi[0]),this.hemi.groundColor.set(r.hemi[1]),this.hemi.intensity=r.hemi[2],this.key.color.set(r.key[0]),this.key.intensity=r.key[1],this.fill.color.set(r.fill[0]),this.fill.intensity=r.fill[1],this.rim.color.set(r.rim[0]),this.rim.intensity=r.rim[1],this.spot.intensity=r.spot?r.spot.intensity:0,r.spot&&(this.spot.color.set(r.spot.color),this.spot.angle=r.spot.angle,this.spot.penumbra=r.spot.penumbra),this.key.castShadow=r.key[1]>0&&!r.spot,this.spot.castShadow=!!r.spot,this.renderer.toneMappingExposure=r.exposure,this.renderer.shadowMap.enabled=!this.lowQuality,this.floor.material.opacity=r.shadowOpacity,this.paintBackdrop();else{let e=t===`studio`;this.scene.environmentIntensity=.6,this.hemi.color.set(`#ffffff`),this.hemi.groundColor.set(`#ded8f0`),this.hemi.intensity=e?1.15:1.85,this.key.color.set(`#ffffff`),this.key.intensity=e?1.6:1.9,this.fill.intensity=e?.55:1.05,this.rim.intensity=0,this.spot.intensity=0,this.key.castShadow=!1,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!1,this.scene.background=null}this.floor.visible=!!r,this.contact.visible=!!r,this.buildExtras(),this.layout(this.radius)}paintBackdrop(){let e=this.look;if(this.livingU.uAspect.value=window.innerWidth/Math.max(1,window.innerHeight),!e||!e.backdrop||this.livingOn){this.scene.background=null;return}let t=Math.round(256*window.innerHeight/Math.max(1,window.innerWidth)),n=document.createElement(`canvas`);n.width=256,n.height=Math.max(64,Math.min(1024,t)),e.backdrop(n.getContext(`2d`),n.width,n.height),this.backdrop?.dispose(),this.backdrop=new $i(n),this.backdrop.colorSpace=Je,this.scene.background=this.backdrop}buildSoftboxes(){let e=new Kn;e.background=new U(`#0c0c12`);let t=(t,n,r,i,a)=>{let o=new W(new Eo(t,n),new _i({color:new U(r).multiplyScalar(i),side:2}));o.position.set(...a),o.lookAt(0,0,0),e.add(o)};t(6,3.2,`#fff3e4`,5,[0,5,3]),t(1.1,6,`#ffffff`,3,[-5,1.5,1.5]),t(1.1,6,`#e6eeff`,2.4,[5,1.5,1.5]),t(5,.9,`#ffffff`,2,[0,2.5,-5]),t(10,10,`#2a2a36`,1,[0,-5,0]);let n=new Tc(this.renderer),r=n.fromScene(e,.02).texture;return n.dispose(),r}buildExtras(){let e=this.look;for(let e of[this.pedestal,this.beam,this.pool,this.dust])e&&(this.group.remove(e),e.geometry.dispose(),e.material.dispose());if(this.pedestal=this.beam=this.pool=null,this.dust=null,this.mirror&&(this.group.remove(this.mirror),this.mirror.dispose(),this.mirror=null),e){if(this.wantMirror){this.mirror=new D_(new Eo(1,1),{textureWidth:512,textureHeight:512,clipBias:.003,shader:j_});let e=this.mirror.material;e.transparent=!0,e.depthWrite=!1,this.mirror.rotation.x=-Math.PI/2,this.mirror.renderOrder=0,this.group.add(this.mirror)}if(e.floor===`pedestal`){let e=[],t=.05;e.push(new z(0,0),new z(1.04,0),new z(1.04,.04),new z(1,.07)),e.push(new z(1,.37));for(let n=1;n<=6;n++){let r=n/6*(Math.PI/2);e.push(new z(.95+Math.cos(r)*t,.37+Math.sin(r)*t))}e.push(new z(0,.42)),this.pedestal=new W(new To(e,64),new G({color:`#f2e9dd`,roughness:.5,metalness:0})),this.pedestal.castShadow=!0,this.pedestal.receiveShadow=!0;let n=new W(new Oo(1.002,.012,10,96),new G({color:`#d9a441`,roughness:.3,metalness:.9}));n.rotation.x=Math.PI/2,n.position.y=.345,this.pedestal.add(n),this.group.add(this.pedestal)}if(e.beam){let e=new zo({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uColor:{value:new U(`#ffe7c2`)}},vertexShader:`
          varying float vY; varying vec3 vN; varying vec3 vView;
          void main() {
            vY = uv.y;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vN = normalize(normalMatrix * normal);
            vView = normalize(-mv.xyz);
            gl_Position = projectionMatrix * mv;
          }`,fragmentShader:`
          uniform vec3 uColor; varying float vY; varying vec3 vN; varying vec3 vView;
          void main() {
            float edge = pow(abs(dot(normalize(vN), normalize(vView))), 2.0);
            float a = 0.09 * edge * smoothstep(0.0, 0.35, vY) * (0.35 + 0.65 * vY);
            gl_FragColor = vec4(uColor * a, a);
          }`});this.beam=new W(new aa(.08,1,1,48,1,!0),e),this.group.add(this.beam);let t=document.createElement(`canvas`);t.width=t.height=128;let n=t.getContext(`2d`),r=n.createRadialGradient(64,64,0,64,64,64),[i,a,o]=this.variant?.pool??[255,236,205];r.addColorStop(0,`rgba(${i},${a},${o},0.32)`),r.addColorStop(.5,`rgba(${i},${a},${o},0.1)`),r.addColorStop(1,`rgba(${i},${a},${o},0)`),n.fillStyle=r,n.fillRect(0,0,128,128);let s=new $i(t);this.pool=new W(new ia(1,48),new _i({map:s,transparent:!0,depthWrite:!1,blending:2})),this.pool.rotation.x=-Math.PI/2,this.group.add(this.pool);let c=new Float32Array(270);this.dustVel=new Float32Array(90);let l=new Br;l.setAttribute(`position`,new Tr(c,3)),this.dust=new Xi(l,new Gi({color:this.variant?.dust??`#ffe9c9`,size:.06,transparent:!0,opacity:.55,depthWrite:!1,blending:2})),this.group.add(this.dust)}}}layout(e){this.radius=e;let t=this.look,n=-e*1.12,r=t=>new B(...t).normalize().multiplyScalar(e*6);if(!t){this.key.position.set(3,6,5),this.fill.position.set(-4,1,4);return}this.key.position.copy(r(t.key[2])),this.fill.position.copy(r(t.fill[2])),this.rim.position.copy(r(t.rim[2]));let i=this.key.shadow.camera;i.left=i.bottom=-e*4,i.right=i.top=e*4,i.near=.1,i.far=e*20,i.updateProjectionMatrix(),this.groundY=n;let a=n;if(this.pedestal){let t=e*.55;this.pedestal.scale.set(e*.95,t/.42,e*.95),this.pedestal.position.set(0,n-t,0),a=n-t}if(this.floor.position.y=a,this.floor.scale.set(e*7.5,e*7.5,1),this.mirror&&(this.mirror.position.set(0,a-.002,0),this.mirror.scale.set(e*7.5,e*7.5,1)),t.spot){this.spot.position.copy(new B(...t.spot.pos).multiplyScalar(e)),this.spot.target.position.set(0,0,0);let r=new B(...t.spot.beamFrom).multiplyScalar(e);if(this.spot.shadow.camera.near=e*.5,this.spot.shadow.camera.far=e*14,this.beam){let e=new B(0,n,0),i=r.distanceTo(e),a=Math.tan(t.spot.angle)*i*.92;this.beam.scale.set(a,i,a),this.beam.position.copy(r).add(e).multiplyScalar(.5),this.beam.quaternion.setFromUnitVectors(new B(0,-1,0),e.clone().sub(r).normalize())}if(this.pool&&(this.pool.position.set(0,n+.01,0),this.pool.scale.setScalar(e*1.45)),this.dust){let i=this.dust.geometry.getAttribute(`position`);for(let e=0;e<i.count;e++){let a=n+Math.random()*(r.y-n)*.8,o=(r.y-a)/(r.y-n),s=Math.sqrt(Math.random())*Math.tan(t.spot.angle)*(r.y-n)*o*.75,c=Math.random()*Math.PI*2;i.setXYZ(e,r.x*(1-o)+Math.cos(c)*s,a,r.z*(1-o)+Math.sin(c)*s),this.dustVel[e]=.05+Math.random()*.12}i.needsUpdate=!0,this.dust.material.size=e*.02}}}update(e,t=0){if(this.t+=e,this.livingU.uTime.value=this.t,this.contact.visible){let e=Math.max(.4,1-t/(this.radius*.8));this.contact.position.set(0,this.groundY+.004,0),this.contact.scale.setScalar(this.radius*.95*(.85+.15*e)),this.contact.material.opacity=e}if(this.dust&&this.dustVel&&this.look?.spot){let t=this.dust.geometry.getAttribute(`position`),n=this.look.spot.beamFrom[1]*this.radius*.8,r=-this.radius*1.12;for(let i=0;i<t.count;i++){let a=t.getY(i)+this.dustVel[i]*this.radius*e*.3;a>n&&(a=r),t.setXYZ(i,t.getX(i)+Math.sin(this.t*.7+i)*e*.02*this.radius,a,t.getZ(i))}t.needsUpdate=!0,this.dust.material.opacity=.45+.15*Math.sin(this.t*1.3)}}},F_=[{id:`indigo`,label:`Indigo`},{id:`dusk`,label:`Dusk`},{id:`plum`,label:`Plum`},{id:`teal`,label:`Teal`},{id:`graphite`,label:`Graphite`}],I_=[{id:`pastel`,label:`Pastel`,blurb:`Today: flat pastel gradient, cube floating level with the camera.`},{id:`studio`,label:`Studio`,blurb:`Seamless light backdrop, camera slightly above, real soft floor shadow, rim light.`},{id:`spotlight`,label:`Spotlight`,blurb:`Dark stage, one warm spot from above, light beam with dust, glow on highlights.`},{id:`gallery`,label:`Gallery`,blurb:`Warm exhibition room: the cube floats over a pedestal with a soft contact shadow.`}],L_=[{id:`a`,label:`A · Current`,blurb:`What the game has today, for comparison.`,style:{arrow:`ribbon`,arrowColor:`ink`,arrowShadow:!1,tile:`flat`,light:`soft`,motion:`basic`,groundShadow:!1,ao:!1,scene:`pastel`}},{id:`b`,label:`B · Paper Craft`,blurb:`Same flat look, refined: arrow shadows, studio light, juicy motion.`,style:{arrow:`ribbon`,arrowColor:`ink`,arrowShadow:!0,tile:`flat`,light:`studio`,motion:`juicy`,groundShadow:!0,ao:!1,scene:`pastel`}},{id:`c`,label:`C · Toy Box`,blurb:`Thick bevelled tiles and glossy ink tubes, like a physical toy.`,style:{arrow:`bead`,arrowColor:`ink`,arrowShadow:!0,tile:`chiclet`,light:`studio`,motion:`juicy`,groundShadow:!0,ao:!1,scene:`pastel`}},{id:`d`,label:`D · Candy`,blurb:`Toy Box with a candy colour per arrow.`,style:{arrow:`bead`,arrowColor:`candy`,arrowShadow:!0,tile:`chiclet`,light:`studio`,motion:`juicy`,groundShadow:!0,ao:!1,scene:`pastel`}}],R_=L_[0].style,z_=[`indigo`,`dusk`,`teal`],B_={arrow:`ribbon`,arrowColor:`ink`,arrowShadow:!1,tile:`flat`,light:`studio`,motion:`juicy`,groundShadow:!0,ao:!1,scene:`spotlight`,backdrop:`indigo`,backdropByLevel:!0,living:!0,softbox:!0,gloss:!0,bevel:!0,rim:!0,revealFx:!0,mirror:!0,wetInk:!0},V_=[`#6c4cf5`,`#1f9dea`,`#14b38a`,`#f5a000`,`#ec4899`,`#8a5cf6`,`#0ea5a5`,`#f26b1d`],H_=8,U_=class{constructor(e,t){q(this,`el`,void 0),q(this,`h`,void 0),q(this,`pointers`,new Map),q(this,`startX`,0),q(this,`startY`,0),q(this,`dragging`,!1),q(this,`multi`,!1),q(this,`pinchDist`,0),q(this,`velX`,0),q(this,`velY`,0),q(this,`lastMove`,0),q(this,`enabled`,!0),q(this,`onDown`,e=>{this.el.setPointerCapture(e.pointerId),this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointers.size===1?(this.startX=e.clientX,this.startY=e.clientY,this.dragging=!1,this.multi=!1,this.velX=this.velY=0,this.h.press?.(e.clientX,e.clientY)):this.pointers.size===2&&(this.multi=!0,this.h.release?.(),this.pinchDist=this.pinchDistance())}),q(this,`onMove`,e=>{let t=this.pointers.get(e.pointerId);if(!t)return;let n=e.clientX-t.x,r=e.clientY-t.y;if(t.x=e.clientX,t.y=e.clientY,this.pointers.size===2){let e=this.pinchDistance();this.pinchDist>0&&e>0&&this.h.zoom(this.pinchDist/e),this.pinchDist=e;return}if(this.multi||(!this.dragging&&Math.hypot(e.clientX-this.startX,e.clientY-this.startY)>H_&&(this.dragging=!0,this.h.release?.()),!this.dragging))return;this.h.rotate(n,r);let i=performance.now(),a=Math.max(8,i-this.lastMove)/1e3;this.velX=this.velX*.6+n/a*.4,this.velY=this.velY*.6+r/a*.4,this.lastMove=i}),q(this,`onUp`,e=>{if(!this.pointers.has(e.pointerId))return;let t=this.pointers.size===1;this.pointers.delete(e.pointerId),t&&!this.multi&&!this.dragging&&this.enabled&&this.h.tap(e.clientX,e.clientY),this.h.release?.(),this.pointers.size===0&&performance.now()-this.lastMove>90&&(this.velX=this.velY=0),this.pointers.size===1&&(this.pinchDist=0)}),q(this,`onCancel`,e=>{this.pointers.delete(e.pointerId),this.h.release?.(),this.velX=this.velY=0}),this.el=e,this.h=t,e.addEventListener(`pointerdown`,this.onDown),e.addEventListener(`pointermove`,this.onMove),e.addEventListener(`pointerup`,this.onUp),e.addEventListener(`pointercancel`,this.onCancel),e.addEventListener(`wheel`,e=>{e.preventDefault(),this.h.zoom(Math.exp(e.deltaY*.0012))},{passive:!1})}update(e){if(this.pointers.size>0||Math.abs(this.velX)+Math.abs(this.velY)<5)return;this.h.rotate(this.velX*e,this.velY*e);let t=Math.exp(-e*4.5);this.velX*=t,this.velY*=t}pinchDistance(){let[e,t]=[...this.pointers.values()];return Math.hypot(e.x-t.x,e.y-t.y)}},W_=`modulepreload`,G_=function(e,t){return new URL(e,t).href},K_={},q_=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=G_(t,n),t=s(t),t in K_)return;K_[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:W_,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},J_=new U(`#2e2a4f`),Y_=new U(`#ffffff`),X_=new U(`#7c5cff`),Z_=new U(`#ff3b5c`),Q_=new U(`#ff9f1c`),$_=new U(`#ffb300`),ev=[`#ffffff`,`#ffe27a`,`#ffc2dd`,`#c9b8ff`],tv=new B(0,1,0),nv=new B(1,0,0),rv=.0085,iv=1.2,av=6,ov=e=>1-(1-e)**3,sv=(e,t=1.7)=>1+(t+1)*(e-1)**3+t*(e-1)**2,cv=class{constructor(e,t,n,r,i=R_){q(this,`sfx`,void 0),q(this,`events`,void 0),q(this,`debug`,void 0),q(this,`style`,void 0),q(this,`renderer`,void 0),q(this,`scene`,new Kn),q(this,`camera`,new Cs(32,1,.1,500)),q(this,`pivot`,new Rn),q(this,`stageGroup`,new Rn),q(this,`cube`,null),q(this,`raycaster`,new Xs),q(this,`ndc`,new z),q(this,`stage`,void 0),q(this,`groundShadow`,w_()),q(this,`sparkles`,new C_),q(this,`shadowMat`,new _i({color:`#2a1f55`,transparent:!0,opacity:.15,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})),q(this,`composer`,null),q(this,`composerToken`,0),q(this,`level`,void 0),q(this,`interactive`,!1),q(this,`arrows`,[]),q(this,`occ`,new Int32Array),q(this,`active`,new Set),q(this,`remaining`,0),q(this,`hearts`,3),q(this,`mistakes`,0),q(this,`combo`,0),q(this,`lastPop`,-10),q(this,`hinted`,null),q(this,`phase`,`idle`),q(this,`wrapped`,[]),q(this,`innerPending`,!1),q(this,`clock`,0),q(this,`timeScale`,1),q(this,`slowmo`,0),q(this,`celebrateT`,0),q(this,`finale`,null),q(this,`history`,[]),q(this,`stuckToken`,0),q(this,`timers`,[]),q(this,`radius`,1),q(this,`zoom`,1),q(this,`camDist`,10),q(this,`shake`,0),q(this,`autoRotate`,!1),q(this,`tapEnabled`,!1),q(this,`resultView`,!1),q(this,`resultT`,0),q(this,`recoil`,new B),q(this,`recoilVel`,new B),q(this,`pressed`,null),q(this,`pressAmt`,0),q(this,`pressView`,null),q(this,`userRotated`,!1),q(this,`controls`,void 0),q(this,`tmpQ`,new Vt),q(this,`tmpQ2`,new Vt),q(this,`tmpV`,new B),q(this,`onFrame`,()=>{}),q(this,`fps`,60),q(this,`slowTime`,0),q(this,`activeBackdrop`,void 0),q(this,`eraseMode`,!1),q(this,`qualityStep`,0),this.sfx=t,this.events=n,this.debug=r,this.style=i,this.renderer=new vd({antialias:!0,alpha:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(2,Math.max(window.devicePixelRatio,1.5))),this.renderer.toneMapping=7,this.renderer.setClearColor(0,0),e.appendChild(this.renderer.domElement),this.stage=new P_(this.scene,this.renderer),this.stageGroup.add(this.pivot),this.scene.add(this.stageGroup,this.groundShadow),this.pivot.add(this.sparkles.points),this.controls=new U_(this.renderer.domElement,{rotate:(e,t)=>this.rotate(e,t),tap:(e,t)=>this.onTap(e,t),zoom:e=>this.zoom=Cd(this.zoom*e,.5,1.7),press:(e,t)=>this.onPress(e,t),release:()=>this.pressed=null}),window.addEventListener(`resize`,()=>this.resize()),this.resize(),this.applyLook();let a=performance.now(),o=e=>{let t=Math.min((e-a)/1e3,.05);a=e,t>0&&(this.fps+=(1/t-this.fps)*.05),this.update(t),requestAnimationFrame(o)};requestAnimationFrame(o),r&&(window.__game=this)}get currentStyle(){return this.style}setStyle(e){this.style={...e},this.applyLook(),this.level&&this.load(this.level,this.interactive)}backdropFor(){let e=this.style;return e.backdropByLevel&&this.level?z_[this.level.index%z_.length]:e.backdrop}applyLook(){var e;(e=this.style).scene??(e.scene=`pastel`);let t=this.style;this.activeBackdrop=this.backdropFor(),this.stage.configure(t.scene,t.light,{backdrop:this.activeBackdrop,softbox:t.softbox,mirror:t.mirror,living:t.living}),this.sparkles.setBoost(this.stage.sparkleBoost),document.documentElement.dataset.tone=this.style.scene===`spotlight`?`dark`:`light`,this.groundShadow.visible=this.style.groundShadow&&this.stage.usesSpriteShadow,this.setPost(this.style.ao,this.stage.bloom)}async setPost(e,t){let n=++this.composerToken;if(!e&&!t){this.composer=null;return}let[{EffectComposer:r},{OutputPass:i},{RenderPass:a},{UnrealBloomPass:o},s]=await Promise.all([q_(()=>import(`./EffectComposer-aK8f1Dv2.js`),__vite__mapDeps([0,1,2]),import.meta.url),q_(()=>import(`./OutputPass-BACK-3RX.js`),__vite__mapDeps([3,1]),import.meta.url),q_(()=>import(`./RenderPass-DU67grIc.js`),__vite__mapDeps([4,1]),import.meta.url),q_(()=>import(`./UnrealBloomPass-BBiheDPS.js`),__vite__mapDeps([5,1,2]),import.meta.url),e?q_(()=>import(`./N8AO-B3uQiwaY.js`),__vite__mapDeps([6,1]),import.meta.url):Promise.resolve(null)]);if(n!==this.composerToken)return;let c=window.innerWidth,l=window.innerHeight,u=this.renderer.getDrawingBufferSize(new z),d=new cn(u.x,u.y,{type:T,samples:Math.min(4,this.renderer.capabilities.maxSamples)}),f=new r(this.renderer,d);if(e&&s){let e=new s.N8AOPass(this.scene,this.camera,c,l);e.configuration.aoRadius=.45,e.configuration.distanceFalloff=.8,e.configuration.intensity=2.2,e.configuration.halfRes=!0,e.configuration.gammaCorrection=!1,e.configuration.transparencyAware=!1,e.setQualityMode(`Performance`),f.addPass(e)}else f.addPass(new a(this.scene,this.camera));t&&f.addPass(new o(new z(c,l),t.strength,t.radius,t.threshold)),f.addPass(new i),f.setSize(c,l),this.composer=f}load(e,t){this.level=e;let{surface:n}=e;this.finale=null,this.style.scene===`spotlight`&&this.backdropFor()!==this.activeBackdrop&&this.applyLook();let r=e.inner;this.innerPending=!!r,this.setBoard(e.arrows,r?Nm(r.paper,r.ink):e.object,null,e.index*31+7);let[i,a,o]=n.dims;this.radius=.5*Math.hypot(i,a,o)+.2,this.stage.layout(this.radius),this.pivot.quaternion.copy(this.restPose()),this.pivot.position.set(0,0,0),this.zoom=1,this.hearts=e.hearts,this.mistakes=0,this.combo=0,this.hinted=null,this.pressed=null,this.pressView=null,this.pressAmt=0,this.recoil.set(0,0,0),this.recoilVel.set(0,0,0),this.timeScale=1,this.slowmo=0,this.resultView=!1,this.setInteractive(t),this.debug&&console.info(`[level ${e.index+1}] ${n.dims.join(`x`)}`,Wm(n,e.arrows))}setBoard(e,t,n,r){let{surface:i,world:a}=this.level,o=this.style.motion===`juicy`;this.cube&&(this.pivot.remove(this.cube.group),this.cube.dispose());for(let e of this.arrows)this.pivot.remove(e.view.mesh),e.view.dispose(),e.shadow&&(this.pivot.remove(e.shadow.mesh),e.shadow.dispose()),e.material.dispose(),e.pin&&(this.pivot.remove(e.pin.group),e.pin.dispose());this.history=[],this.stuckToken++;let s={...a.theme,paper:n??this.stage.paperTone??a.theme.paper};this.cube=new jh(i,t,s,{tile:this.style.tile,motion:this.style.motion,fx:{gloss:!!this.style.gloss,bevel:!!this.style.bevel,rim:this.style.rim?this.stage.rimGlow??`#9aa6d4`:null,reveal:!!this.style.revealFx}}),this.pivot.add(this.cube.group);let c=this.cube.surfaceTop;this.occ=new Int32Array(i.size).fill(-1);let l=new Td(r),u=l.shuffle(V_.slice());this.arrows=e.map((e,t)=>{for(let n of e.cells)this.occ[i.id(n)]=t;let n=new Qm(i,e),r=this.style.arrowColor===`candy`?new U(u[t%u.length]):J_.clone(),a=this.style.arrow===`bead`?new Vo({color:r,roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.16}):ih(r,!!this.style.wetInk),{view:o,shadow:s}=this.makeViews(n,a);return{index:t,data:e,orig:e,phase:0,pin:null,head:__(e),path:n,view:o,shadow:s,material:a,base:r,alive:!0,anim:null,queued:!1}});for(let e of this.arrows){let t=y_(i,e.data);if(!t)continue;let n=i.ray(e.head,e.data.dir).slice(0,e.data.pin);e.pin=new g_(this.cellCenter(t),new B(...Sd[t.n]),new B(...Sd[e.data.dir]),n.map(e=>this.cellCenter(e)),c),this.pivot.add(e.pin.group)}this.active.clear(),this.timers=[],o&&this.cube.playIntro(.6);let d=l.shuffle(this.arrows.slice()),f=o?.55:.15;d.forEach((e,t)=>{this.draw(e,0,0),this.start(e,{kind:`intro`,t:0,delay:f+t/d.length*.7})});let p=l.shuffle(i.cells.filter(e=>this.occ[i.id(e)]<0)),m=Math.min(p.length,Math.max(2,Math.round(i.cells.length*.06)));this.wrapped=p.slice(m),p.slice(0,m).forEach((e,t)=>this.after(f+.8+t*.05,()=>this.cube?.reveal(e))),this.remaining=this.arrows.length}restPose(){return new Vt().setFromAxisAngle(nv,.5-this.stage.elevation).multiply(this.tmpQ.setFromAxisAngle(tv,-.7))}makeViews(e,t){let n=this.cube?.surfaceTop??0,r=this.style.arrow===`bead`?new _h(e,t,n):new oh(e,t,{lift:n+.014,round:this.style.wetInk?.9:0}),i=this.style.arrowShadow?new oh(e,this.shadowMat,{lift:n+.003,width:this.style.arrow===`bead`?1.55:1.7}):null;return r.mesh.castShadow=!0,this.pivot.add(r.mesh),i&&this.pivot.add(i.mesh),{view:r,shadow:i}}rebuild(e,t){this.pivot.remove(e.view.mesh),e.view.dispose(),e.shadow&&(this.pivot.remove(e.shadow.mesh),e.shadow.dispose()),e.data=t,e.head=__(t),e.path=new Qm(this.level.surface,t);let{view:n,shadow:r}=this.makeViews(e.path,e.material);e.view=n,e.shadow=r}setInteractive(e){this.interactive=e,this.phase=e?`play`:`idle`,this.tapEnabled=e,this.autoRotate=!e}get heartsLeft(){return this.hearts}get arrowsLeft(){return this.remaining}get arrowsTotal(){return this.arrows.length}addHearts(e){this.hearts+=e,this.phase=`play`,this.tapEnabled=!0}rotate(e,t){this.tmpQ.setFromAxisAngle(tv,e*rv),this.tmpQ2.setFromAxisAngle(nv,t*rv),this.pivot.quaternion.premultiply(this.tmpQ).premultiply(this.tmpQ2).normalize(),this.autoRotate=!1,Math.abs(e)+Math.abs(t)>2&&(this.userRotated=!0)}pick(e,t){if(!this.cube)return null;let n=this.cube.body,r=this.renderer.domElement.getBoundingClientRect();this.ndc.set((e-r.left)/r.width*2-1,-((t-r.top)/r.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.camera);let i=this.raycaster.intersectObject(n,!1)[0];return i?this.arrowNear(n.worldToLocal(i.point.clone()),i.face?.normal):null}onPress(e,t){if(this.style.motion!==`juicy`||this.phase!==`play`||!this.tapEnabled)return;let n=this.pick(e,t);n&&n.alive&&!n.anim&&(this.pressed=n,this.pressView=n)}onTap(e,t){if(this.sfx.unlock(),this.phase!==`play`||!this.tapEnabled)return;let n=this.pick(e,t);if(this.eraseMode){n?.alive&&n.anim?.kind!==`bump`&&(this.eraseMode=!1,this.eraseArrow(n));return}n&&this.tapArrow(n)}arrowNear(e,t){let{surface:n}=this.level,r=n.dims,i=[e.x,e.y,e.z],a=t?[t.x,t.y,t.z]:i.map((e,t)=>e/(r[t]/2)),o=0;for(let e=1;e<3;e++)Math.abs(a[e])>Math.abs(a[o])&&(o=e);let s=a[o]>0,c=o*2+ +!s,l=[0,1,2].map(e=>Cd(Math.floor(i[e]-(e===o?s?.02:-.02:0)+r[e]/2),0,r[e]-1)),u=n.get(l[0],l[1],l[2],c);if(!u)return null;let d=this.occ[n.id(u)];if(d>=0)return this.arrows[d];let f=null,p=.85;for(let t of n.tangents(c)){let[r,i,a]=Sd[t],o=n.get(u.x+r,u.y+i,u.z+a,c);if(!o)continue;let s=this.occ[n.id(o)];if(s<0)continue;let l=this.cellCenter(o).distanceTo(e);l<p&&(p=l,f=this.arrows[s])}return f}cellCenter(e,t=new B){let n=this.level.surface.dims;return t.set(e.x-(n[0]-1)/2,e.y-(n[1]-1)/2,e.z-(n[2]-1)/2).addScaledVector(this.tmpV.set(...Sd[e.n]),.5)}toScreen(e){let t=this.pivot.localToWorld(e.clone()).project(this.camera),n=this.renderer.domElement.getBoundingClientRect();return{x:n.left+(t.x+1)/2*n.width,y:n.top+(1-t.y)/2*n.height}}hintAnchor(){let e=this.hinted;return!e||!e.alive?null:this.toScreen(this.cellCenter(e.head))}centerAnchor(){return this.toScreen(new B)}blockerOf(e){let{surface:t}=this.level,n=t.ray(e.head,e.data.dir),r=e.phase===0&&e.orig.pin?e.orig.pin:n.length;for(let i=0;i<r;i++){let r=this.occ[t.id(n[i])];if(r>=0&&r!==e.index)return{steps:i+1,blocker:this.arrows[r]}}return null}release(e){for(let t=0;t<this.occ.length;t++)this.occ[t]===e.index&&(this.occ[t]=-1)}eraseArrow(e){e.anim?.kind===`slide`&&e.anim.forward&&(this.active.delete(e),e.anim=null,this.settleStop(e)),this.hinted===e&&(this.hinted=null),this.pressView===e&&(this.pressView=null),this.history.push({arrow:e,kind:`exit`,phaseBefore:e.phase}),e.phase===0&&e.orig.pin&&e.pin?.hit(),e.phase=2,e.alive=!1,e.queued=!1,this.remaining--,this.release(e),this.combo=0,this.sfx.erase();let t=e.path.pointAt(e.path.bodyLen/2,new B).addScaledVector(this.tmpV.set(...Sd[e.head.n]),(this.cube?.surfaceTop??0)+.15);this.sparkles.burst(t,{count:22,colors:[`#ffffff`,`#c9b8ff`,`#ffe27a`],speed:1.8,size:.26,life:.6}),this.start(e,{kind:`erase`,t:0,revealed:0}),this.events.erased(),this.events.pop({combo:0,at:this.toScreen(t),remaining:this.remaining,total:this.arrows.length}),this.remaining===0?(this.phase=`celebrate`,this.slowmo=.5,this.celebrateT=-1):this.checkStuck()}tapArrow(e){if(!e.alive||e.anim?.kind===`bump`)return;if(e.anim?.kind===`slide`){e.anim.forward&&(e.queued=!0);return}this.hinted===e&&(this.hinted=null),this.pressView===e&&(this.pressView=null);let t=this.toScreen(this.cellCenter(e.head)),n=this.style.motion===`juicy`,r=this.blockerOf(e);if(!r){if(e.phase===0&&e.orig.pin){this.stopAt(e);return}this.history.push({arrow:e,kind:`exit`,phaseBefore:e.phase}),e.phase=2,this.release(e),e.alive=!1,this.remaining--,this.combo=this.clock-this.lastPop<iv?this.combo+1:0,this.lastPop=this.clock,this.sfx.pop(this.combo),this.start(e,{kind:`fly`,t:0,revealed:0,burst:!1}),n&&this.recoilVel.addScaledVector(this.worldDir(e),-.55),this.events.pop({combo:this.combo,at:t,remaining:this.remaining,total:this.arrows.length}),this.remaining===0?(this.phase=`celebrate`,this.slowmo=.5,this.celebrateT=-1):this.checkStuck();return}let i=Math.max(.06,r.steps-Km-Gm/2-.02);this.start(e,{kind:`bump`,t:0,travel:i,out:.05+.035*i,back:n?.55:.22,blocker:r.blocker,hit:!1}),this.mistakes++,this.hearts--,this.combo=0,this.events.mistake({hearts:this.hearts,at:t}),this.hearts<=0&&(this.phase=`lost`,this.tapEnabled=!1,this.after(.8,()=>this.events.failed()))}stopAt(e){let{surface:t}=this.level,n=e.orig.pin,r=e.data.cells.slice(0,n),i=t.ray(e.head,e.data.dir).slice(0,n);for(let e of r)this.occ[t.id(e)]=-1;for(let n of i)this.occ[t.id(n)]=e.index;this.history.push({arrow:e,kind:`stop`,stretchRevealed:i.map(e=>!!this.cube?.isRevealed(e))}),e.phase=1,this.combo=0,this.tint(e,null,0),this.sfx.slide(),this.start(e,{kind:`slide`,t:0,from:0,to:n,dur:.16+.06*n,forward:!0,tail:r,stretch:i,revealed:0,covered:0}),this.events.stopped(),this.checkStuck()}settleStop(e){let{surface:t}=this.level,n=y_(t,e.orig);if(this.rebuild(e,{cells:v_(t,e.orig),dir:e.orig.dir}),this.draw(e,0,e.path.bodyLen),e.pin?.hit(),this.sfx.pinHit(),e.queued&&(e.queued=!1,this.after(.08,()=>{this.phase===`play`&&this.tapArrow(e)})),this.style.motion===`juicy`&&n){this.recoilVel.addScaledVector(this.worldDir(e),.25);let t=this.cellCenter(n).addScaledVector(this.tmpV.set(...Sd[n.n]),(this.cube?.surfaceTop??0)+.35);this.sparkles.burst(t,{count:8,colors:[`#ffffff`,`#ffd0d8`,`#ff3b5c`],speed:1.3,size:.18,life:.4})}}undo(){if(this.phase!==`play`)return!1;let e=this.history.pop();if(!e)return!1;let t=e.arrow,{surface:n}=this.level;if(t.anim&&(this.active.delete(t),t.anim=null),this.stuckToken++,this.hinted=null,this.combo=0,t.queued=!1,e.kind===`exit`){t.phase=e.phaseBefore,t.alive=!0,this.remaining++;for(let e of t.data.cells)this.occ[n.id(e)]=t.index,this.cube?.cover(e);t.view.mesh.visible=!0,t.shadow&&(t.shadow.mesh.visible=!0),this.tint(t,null,0),e.phaseBefore===0&&t.orig.pin&&t.pin?.restore(),this.draw(t,0,0),this.start(t,{kind:`intro`,t:0,delay:0})}else{let r=t.orig.pin;for(let e of v_(n,t.orig))this.occ[n.id(e)]=-1;for(let e of t.orig.cells)this.occ[n.id(e)]=t.index;for(let e of t.orig.cells.slice(0,r))this.cube?.cover(e);n.ray(__(t.orig),t.orig.dir).slice(0,r).forEach((t,n)=>{e.stretchRevealed[n]&&this.cube?.reveal(t)}),t.phase=0,t.data!==t.orig&&this.rebuild(t,t.orig),t.pin?.restore(),this.start(t,{kind:`slide`,t:0,from:r,to:0,dur:.22,forward:!1,tail:[],stretch:[],revealed:0,covered:0})}return this.sfx.undo(),!0}rewind(){let e=0;for(;this.history.length&&this.undo()&&(e++,!x_(this.board())););return e}get canUndo(){return this.phase===`play`&&this.history.length>0}get hasPins(){return this.arrows.some(e=>e.orig.pin)}board(){return new b_(this.level.surface,this.arrows.map(e=>e.orig),this.arrows.map(e=>e.phase))}checkStuck(){if(this.remaining===0||this.board().movable().length>0)return;let e=++this.stuckToken;this.after(.9,()=>{e===this.stuckToken&&this.phase===`play`&&this.events.stuck()})}safeArrows(){let e=this.arrows.filter(e=>e.alive&&e.anim?.kind!==`bump`&&!this.blockerOf(e));if(!this.hasPins)return e;let t=this.board();return e.filter(e=>{let n=t.clone();return n.move(e.index),x_(n)!==null})}worldDir(e){return new B(...Sd[e.data.dir]).applyQuaternion(this.pivot.quaternion)}onImpact(e,t){if(this.sfx.bump(),this.style.motion===`juicy`){this.recoilVel.addScaledVector(this.worldDir(e),.35);let t=e.path.pointAt(e.path.bodyLen+(e.anim?.kind===`bump`?e.anim.travel:0)+Km,new B);t.addScaledVector(this.tmpV.set(...Sd[e.head.n]),(this.cube?.surfaceTop??0)+.1),this.sparkles.burst(t,{count:6,colors:[`#ffffff`,`#ffd0d8`],speed:1.1,size:.16,life:.35})}else this.shake=Math.max(this.shake,.08);let n=t.anim?.kind;t.alive&&(n===void 0||n===`flash`)&&this.start(t,{kind:`flash`,t:0})}showHint(e=null){if(this.phase!==`play`)return!1;if(this.hinted?.alive)return!0;let t=this.safeArrows();if(t.length===0)return this.hasPins&&this.remaining>0&&this.events.stuck(),!1;let n=new B,r=e===`pin`?t.filter(e=>e.phase===0&&e.orig.pin):e===`waiting`?t.filter(e=>e.phase===1):[],i=t.filter(e=>n.set(...Sd[e.head.n]).applyQuaternion(this.pivot.quaternion).z>.25),a=r.length?r:i.length?i:t,o=a[Math.floor(Math.random()*a.length)];return this.hinted=o,this.start(o,{kind:`hint`,t:0}),!0}get hintActive(){return!!this.hinted?.alive}after(e,t){this.timers.push({at:this.clock+e,fn:t})}start(e,t){e.anim=t,this.active.add(e)}update(e){this.slowmo>0?(this.slowmo-=e,this.timeScale=.35):this.timeScale=Math.min(1,this.timeScale+e*3);let t=e*this.timeScale;if(this.clock+=t,this.timers.length){let e=this.timers.filter(e=>e.at<=this.clock);this.timers=this.timers.filter(e=>e.at>this.clock),e.forEach(e=>e.fn())}this.controls.update(e),this.autoRotate&&(this.tmpQ.setFromAxisAngle(tv,e*.28),this.pivot.quaternion.multiply(this.tmpQ)),this.resultT+=(+!!this.resultView-this.resultT)*Math.min(1,e*5);let n=this.targetDistance()*this.zoom*(this.finale?.zoom??1)*this.stage.fit*(1+.35*this.resultT*this.stage.resultFit);this.camDist+=(n-this.camDist)*Math.min(1,e*10);let r=Math.max(.1,this.camDist*.3);Math.abs(r-this.camera.near)>r*.02&&(this.camera.near=r,this.camera.updateProjectionMatrix());let i=this.stage.elevation,a=-(this.stage.lookDown+this.resultT*(.62+this.stage.resultLookDown))*this.radius;this.camera.position.set(0,a+Math.sin(i)*this.camDist,Math.cos(i)*this.camDist),this.camera.lookAt(0,a,0);let o=this.recoil.clone().multiplyScalar(-150).addScaledVector(this.recoilVel,-13);this.recoilVel.addScaledVector(o,e),this.recoil.addScaledVector(this.recoilVel,e);let s=Math.sin(this.clock*1.4)*this.radius*.012,c=0;if(this.phase===`celebrate`?c=this.updateCelebration(t):this.finale&&(c=this.finale.update(t)),this.stageGroup.position.set(this.recoil.x,s+c+this.recoil.y,this.recoil.z),this.shake>0){let t=this.shake;this.stageGroup.position.x+=(Math.random()-.5)*t,this.stageGroup.position.y+=(Math.random()-.5)*t,this.shake=Math.max(0,this.shake-e*.6)}let l=1-Cd((s+c)/this.radius,-.2,.6)*.8;this.groundShadow.position.set(this.recoil.x,-this.radius*1.08,0),this.groundShadow.scale.set(this.radius*2.3*l,this.radius*.5*l,1),this.groundShadow.material.opacity=.75*l*(1-this.resultT*.3);for(let e of this.active)this.animate(e,t)&&(e.anim=null,this.active.delete(e));this.updatePress(e),this.watchPerformance(e),this.cube?.update(t);for(let e of this.arrows)e.pin?.update(t);this.stage.update(e,this.stageGroup.position.y),this.sparkles.update(t),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera),this.onFrame(e)}watchPerformance(e){this.qualityStep>=2||this.style.scene===`pastel`||(this.slowTime=this.fps<48?this.slowTime+e:Math.max(0,this.slowTime-e),!(this.slowTime<2)&&(this.slowTime=0,this.qualityStep++,this.qualityStep===1?(this.stage.lowQuality=!0,this.applyLook()):(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.resize()),this.debug&&console.info(`[quality] step ${this.qualityStep}`)))}updatePress(e){let t=this.pressView;if(!t)return;let n=this.pressed===t&&t.alive&&!t.anim?1:0;if(this.pressAmt+=(n-this.pressAmt)*Math.min(1,e*22),t.anim||!t.alive){this.pressView=null,this.pressAmt=0;return}this.draw(t,0,t.path.bodyLen,1+.22*this.pressAmt),t.material.color.copy(t.base).lerp(J_,.25*this.pressAmt).multiplyScalar(1-.12*this.pressAmt),n===0&&this.pressAmt<.01&&(this.draw(t,0,t.path.bodyLen),this.tint(t,null,0),this.pressView=null)}openInner(){let e=this.level.inner;this.innerPending=!1,this.sfx.reveal(),this.style.motion===`juicy`&&this.sparkles.burst(new B,{count:40,colors:[`#fff6dd`,`#ffd166`,e.paper],speed:this.radius*2.6,size:.3,life:.9}),this.after(.8,()=>{this.setBoard(e.arrows,this.level.object,e.paper,this.level.index*31+911),this.combo=0,this.hinted=null,this.slowmo=0,this.phase=`play`,this.events.layer?.({count:this.arrows.length})})}updateCelebration(e){if(this.celebrateT<0){if(this.active.size>0)return 0;if(this.wrapped.length){let e=this.wrapped;return this.wrapped=[],e.forEach((t,n)=>this.after(n*Math.min(.03,.5/e.length),()=>{this.cube?.reveal(t)&&this.sfx.tick(n)})),0}if(this.timers.length||this.cube?.busy)return 0;if(this.innerPending)return this.openInner(),0;this.celebrateT=0,this.cube?.playSeal(),this.cube?.setHolo(!!this.style.holo||this.level.kind!==`normal`&&this.mistakes===0),this.cube&&(this.finale=new Zh({cube:this.cube,sfx:this.sfx,sparkles:this.sparkles,radius:this.radius},this.level.object.id,this.pivot,this.restPose())),this.sfx.reveal(),this.style.motion===`juicy`&&this.sparkles.burst(new B,{count:60,colors:ev,speed:this.radius*3.2,size:.34,life:1.1}),this.events.celebrate()}this.celebrateT+=e;let t=this.finale?.update(e)??0;return(!this.finale||this.finale.ready)&&(this.phase=`won`,this.autoRotate=!0,this.resultView=!0,this.events.cleared({mistakes:this.mistakes})),t}tint(e,t,n){e.material.color.copy(e.base),t&&n>0&&e.material.color.lerp(t,Cd(n,0,1))}draw(e,t,n,r=1){e.view.update(t,n,r),e.shadow?.update(t,Math.min(n,e.path.bodyLen+e.path.exitLen-.35),r)}animate(e,t){let n=e.anim;if(!n)return!0;n.t+=t;let r=e.path.bodyLen,i=this.style.motion===`juicy`;switch(n.kind){case`intro`:{let t=Cd((n.t-n.delay)/.45,0,1);return this.draw(e,0,r*ov(t)),t>=1}case`fly`:{let t=i?.075:.05,a=i?.2:.12,o=n.t-t,s=n.t<t?-a*Math.sin(n.t/t*(Math.PI/2)):-a+9*o+45*o*o,c=1,l=0;i&&(c=n.t<t?1+.25*(n.t/t):Math.max(.86,1.25-o*4),l=n.t<t?0:Math.min(.55,o*3.2)),this.draw(e,s-l,s+r,c);let u=this.style.arrowColor===`candy`?Y_:X_;this.tint(e,u,Math.min(this.style.arrowColor===`candy`?.45:1,n.t*12));let d=e.data.cells;for(;n.revealed<d.length&&s-l>e.path.cellS[n.revealed]+.5;)this.cube?.reveal(d[n.revealed])&&this.sfx.tick(n.revealed),n.revealed++;if(i&&!n.burst&&s>e.path.exitLen){n.burst=!0;let t=e.path.pointAt(r+e.path.exitLen,new B);t.addScaledVector(this.tmpV.set(...Sd[e.head.n]),(this.cube?.surfaceTop??0)+.1);let i=new B(...Sd[e.data.dir]);this.sparkles.burst(t,{count:9,colors:[...ev,`#`+e.base.getHexString()],speed:2.4,dir:i,spread:1.1,size:.26,life:.55})}return s-l>r+e.path.exitLen+12&&(e.view.mesh.visible=!1,e.shadow&&(e.shadow.mesh.visible=!1),!0)}case`bump`:{let t,a=1;if(n.t<n.out){let e=n.t/n.out;t=n.travel*e*e}else{n.hit||(n.hit=!0,this.onImpact(e,n.blocker));let r=n.t-n.out;i?(t=n.travel*Math.exp(-6.5*r)*Math.cos(15*r),a=1+.18*Math.exp(-9*r)):t=n.travel*(1-ov(Cd(r/n.back,0,1)))}this.draw(e,t,t+r,a);let o=n.out+n.back;return this.tint(e,Z_,n.t<o?1:1-(n.t-o)/.3),n.t>=o+.3&&(this.draw(e,0,r),this.tint(e,null,0),!0)}case`flash`:{let t=i?.55:.45;return this.tint(e,Q_,1-n.t/t),i&&this.draw(e,0,r,1+.32*Math.exp(-7*n.t)*Math.abs(Math.cos(n.t*22))),n.t>=t&&(this.draw(e,0,r),this.tint(e,null,0),!0)}case`erase`:{let t=Cd(n.t/.42,0,1);this.draw(e,0,r,Math.max(.02,(1-t)*(1+.35*Math.sin(t*Math.PI)))),this.tint(e,Y_,Math.min(1,t*2));let i=e.data.cells;for(;n.revealed<i.length&&n.revealed<t*i.length;)this.cube?.reveal(i[n.revealed])&&this.sfx.tick(n.revealed),n.revealed++;return t>=1&&(e.view.mesh.visible=!1,e.shadow&&(e.shadow.mesh.visible=!1),!0)}case`slide`:{let t=Cd(n.t/n.dur,0,1),i=n.forward?sv(t,1.3):ov(t),a=n.from+(n.to-n.from)*i;if(this.draw(e,a,a+r),n.forward){for(;n.revealed<n.tail.length&&a>e.path.cellS[n.revealed]+.5;)this.cube?.reveal(n.tail[n.revealed])&&this.sfx.tick(n.revealed),n.revealed++;for(;n.covered<n.stretch.length&&a>n.covered+.6;)this.cube?.cover(n.stretch[n.covered]),n.covered++}return t>=1&&(n.forward?this.settleStop(e):this.draw(e,0,r),!0)}case`hint`:{if(this.hinted!==e||n.t>av)return this.hinted===e&&(this.hinted=null),this.draw(e,0,r),this.tint(e,null,0),!0;let t=.5+.5*Math.sin(n.t*7);return this.draw(e,0,r,1+.45*t),this.tint(e,$_,.55+.45*t),!1}}}targetDistance(){let e=Bt.degToRad(this.camera.fov),t=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return this.radius/Math.sin(Math.min(e*.74,t*.92)/2)*1.12}resize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.sparkles.setViewportHeight(t*this.renderer.getPixelRatio(),this.camera.fov),this.composer?.setSize(e,t),this.stage?.paintBackdrop()}},lv=(e,t,n,r,i,a,o=`normal`,s={})=>({dims:[e,e,e],minLen:t,maxLen:n,turn:r,difficulty:i,fill:1,object:a,kind:o,...s}),uv=(e,t,n,r,i,a=`normal`,o={})=>{let s=Mm[e].shape;return{dims:s.dims,profile:s.profile,minLen:t,maxLen:n,turn:r,difficulty:i,fill:1,object:e,kind:a,...o}},dv=[{id:`gift`,name:`Gift Shop`,theme:{paper:`#fff9fc`,body:`#ecd9e4`,bg:[`#fff4f8`,`#ffd9e6`],accent:`#ff4d8d`,particles:[`#ffb3cb`,`#ffd166`,`#c9b6ff`,`#ffffff`]},levels:[lv(3,2,4,.2,0,`dice`,`normal`,{fill:.35,tutorial:`tap`}),lv(3,2,5,.3,.2,`gift`,`normal`,{fill:.75,tutorial:`blocked`}),lv(4,3,6,.35,.3,`sugar`,`normal`,{fill:.9,tutorial:`rotate`}),lv(4,3,8,.4,.4,`toyblock`),lv(4,3,9,.45,.55,`twisty`,`hard`,{tier:.5}),lv(5,3,8,.4,.4,`jack`,`normal`,{tier:.38}),lv(5,3,9,.45,.45,`photo`,`normal`,{tier:.42}),lv(5,4,11,.45,.62,`crayons`,`hard`,{tier:.52}),lv(5,4,10,.5,.55,`candy`,`normal`,{tier:.46}),lv(6,4,11,.5,.55,`musicbox`,`normal`,{tier:.5}),lv(6,4,12,.5,.6,`cookietin`,`normal`,{tier:.55}),lv(6,4,14,.5,.7,`present`,`hard`,{tier:.64}),lv(7,5,16,.55,.75,`mystery`,`boss`,{tier:.78})]},{id:`market`,name:`Fruit Market`,theme:{paper:`#fbfaf3`,body:`#e3dccb`,bg:[`#f3fbef`,`#d6f0cf`],accent:`#2fbf6f`,particles:[`#ffd166`,`#8fe39a`,`#ff9aa8`,`#ffffff`]},levels:[lv(4,2,5,.3,.2,`watermelon`,`normal`,{fill:.6,tutorial:`pin`,pins:1,trap:[0,.02]}),lv(4,3,7,.4,.35,`cheese`,`normal`,{pins:1,trap:[0,.02]}),lv(5,3,8,.4,.45,`bread`,`normal`,{pins:2,trap:[.3,.85],tutorial:`trap`,tier:.36}),lv(5,3,9,.45,.5,`tofu`,`normal`,{pins:2,trap:[.2,.85],tier:.42}),lv(5,4,10,.45,.6,`sushi`,`hard`,{pins:3,trap:[.45,.95],tier:.54}),lv(5,3,9,.45,.5,`butter`,`normal`,{pins:2,trap:[.25,.85],tier:.46}),lv(6,4,10,.5,.55,`crate`,`normal`,{pins:2,trap:[.25,.85],tier:.52}),lv(6,4,11,.5,.6,`honey`,`hard`,{pins:3,trap:[.5,.95],tier:.62}),lv(6,4,11,.5,.6,`milk`,`normal`,{pins:3,trap:[.3,.85],tier:.56}),lv(6,4,12,.5,.62,`jelly`,`normal`,{pins:3,trap:[.3,.85],tier:.6}),lv(7,4,12,.5,.62,`juice`,`normal`,{pins:3,trap:[.3,.85],tier:.64}),lv(7,5,15,.55,.78,`choco`,`superhard`,{pins:4,trap:[.6,.97],tier:.76}),lv(7,5,16,.55,.75,`giantmelon`,`boss`,{pins:5,trap:[.6,.97],tier:.86})]},{id:`toys`,name:`Toy City`,theme:{paper:`#fbfaff`,body:`#d9d6ea`,bg:[`#eef4ff`,`#d6e4ff`],accent:`#3b82f6`,particles:[`#7cc6fe`,`#ffd166`,`#ff9aa8`,`#ffffff`]},levels:[uv(`fridge`,2,5,.3,.3,`normal`,{fill:.7,tutorial:`tall`}),uv(`pizza`,3,7,.4,.4,`normal`,{tier:.4}),uv(`sofa`,3,8,.4,.45,`normal`,{tutorial:`wall`,tier:.42}),uv(`tv`,3,8,.45,.5,`normal`,{tier:.48}),uv(`arcade`,3,9,.45,.62,`hard`,{tier:.6}),uv(`brick`,3,8,.45,.55,`normal`,{tier:.52}),uv(`podium`,3,8,.5,.58,`normal`,{tier:.56}),uv(`train`,3,9,.5,.66,`hard`,{tier:.66,pins:2,trap:[.3,.9]}),uv(`house`,3,9,.5,.6,`normal`,{tier:.6}),uv(`castle`,3,9,.5,.62,`normal`,{tier:.64,pins:2,trap:[.25,.85]}),uv(`console`,3,9,.5,.62,`normal`,{tier:.68,pins:2,trap:[.25,.85]}),uv(`bookshelf`,3,10,.55,.78,`superhard`,{tier:.8,pins:3,trap:[.5,.95]}),uv(`skyscraper`,4,12,.55,.76,`boss`,{tier:.9,pins:3,trap:[.5,.97]})]}],fv={normal:3,hard:5,superhard:5,boss:5},pv={normal:10,hard:20,superhard:30,boss:50},mv={hint:{amount:3,price:60},eraser:{amount:2,price:90},undo:{amount:3,price:45}};function hv(e,t,n=24,r=99){let i=Wm(e,t),a=new Td(r),o=0,s=0,c=0,l=0,u=0,d=0;for(let r=0;r<n;r++){let n=new b_(e,t);for(;;){let e=n.movable();if(!e.length){n.done||d++;break}let r=0;for(let e=0;e<t.length;e++){if(n.phase[e]===2)continue;r++;let t=n.clearRun(e);t<0||(u++,t>=2&&l++)}o++,s+=e.length,c+=1-e.length/r,n.move(a.pick(e))}}return{arrows:i.arrows,avgLen:i.cells/i.arrows,free:i.initialFree/i.arrows,waves:i.waves,choice:s/o,blocked:c/o,deceptive:l/Math.max(1,u),trap:d/n}}function gv(e){return{blocked:.12+.75*e,chain:Cd((e-.35)/.5,0,.95),deceive:Cd((e-.5)*2,0,1)}}var _v=`layers`;function vv(e){_v=e,Sv.clear()}function yv(e){if(e.kind!==`boss`)return{outer:e};let t=e.tier??.8;if(_v===`deep`)return{outer:{...e,tier:1,maxLen:e.maxLen+2}};if(_v===`layers`)return{outer:{...e,tier:t-.22,maxLen:e.maxLen+2,pins:e.pins?Math.ceil(e.pins/2):void 0},inner:{...e,tier:Math.min(1,t+.12)}};let n=e.profile?e.dims:e.dims.map(e=>e+2);return{outer:{...e,dims:n,minLen:e.minLen+2,maxLen:e.maxLen+10,turn:.62,tier:.84}}}var bv=[[6,6,6],[7,7,7],[5,5,5],[8,8,8],[6,6,6],[7,7,7]];function xv(e){let t=e;for(let e=0;e<dv.length;e++){let n=dv[e];if(t<n.levels.length)return{world:n,worldIndex:e,levelInWorld:t,spec:n.levels[t]};t-=n.levels.length}let n=dv[dv.length-1],r=Math.floor(t/bv.length),i=t%4==3,a=new Td(e*131+7),o=n.levels.filter(e=>e.kind!==`boss`).map(e=>e.object);return{world:n,worldIndex:dv.length-1,levelInWorld:-1,spec:{dims:bv[t%bv.length],minLen:4,maxLen:12+Math.min(6,r*2)+(i?3:0),turn:.5,difficulty:Math.min(.9,.62+r*.05+(i?.1:0)),tier:Math.min(.95,.66+r*.04+(i?.1:0)),fill:1,kind:i?`hard`:`normal`,object:a.pick(o)}}}var Sv=new Map,Cv={paper:`#d9b36c`,ink:`#b8903f`};function wv(e,t,n){return t.tier===void 0?t.pins?Dv(e,t,n):Rm(e,{...t,seed:n}):Ov(e,t,n)}function Tv(e){e=Math.max(0,e);let{world:t,worldIndex:n,levelInWorld:r,spec:i}=xv(e),{outer:a,inner:o}=yv(i),s=new Lm(a.dims,a.profile),c=(e+1)*7919+17,l=Sv.get(e);l||(l={arrows:wv(s,a,c),inner:o&&wv(s,o,c+50021)},Sv.set(e,l),Sv.size>6&&Sv.delete(Sv.keys().next().value));let u=l.arrows;return{index:e,world:t,worldIndex:n,levelInWorld:r,kind:a.kind,object:Mm[a.object],surface:s,arrows:u,hearts:fv[a.kind],tutorial:a.tutorial,inner:l.inner&&{arrows:l.inner,...Cv}}}function Ev(e){Sv.has(e)||Tv(e)}function Dv(e,t,n){let[r,i]=t.trap??[.1,.4],a=null;for(let o=0;o<30;o++){let s=Rm(e,{...t,seed:n+o*1013}),c=S_(e,s,60,new Td(n+o)),l=(t.pins??0)-s.filter(e=>e.pin).length,u=+(t.tutorial===`pin`&&!kv(e,s)),d=Math.max(0,r-c,c-i)+l*.25+u;if((!a||d<a.score)&&(a={arrows:s,score:d}),d===0)break}return a.arrows}function Ov(e,t,n){let r=gv(t.tier),[i,a]=t.trap??[0,1],o=t.pins?40:16,s=null;for(let c=0;c<o;c++){let o=r.chain>0?Math.min(1,Math.max(0,r.chain+(c%5-2)*.08)):0,l=Rm(e,{...t,chain:o,deceive:r.deceive,seed:n+c*1013}),u=hv(e,l,12,n+c);t.pins&&(u.trap>0||i===0)&&(u=hv(e,l,40,n+c));let d=Math.abs(u.blocked-r.blocked)+Math.max(0,2-u.choice)*.1;if(t.pins){let n=t.pins-l.filter(e=>e.pin).length,r=+(t.tutorial===`pin`&&!kv(e,l));d+=2*Math.max(0,i-u.trap,u.trap-a)+n*.25+r}if((!s||d<s.score)&&(s={arrows:l,score:d}),d<.015)break}return s.arrows}function kv(e,t){let n=new b_(e,t);return t.some((e,t)=>{if(!e.pin||!n.canMove(t))return!1;let r=n.clone();return r.move(t),r.canMove(t)})}dv.reduce((e,t)=>e+t.levels.length,0);var Av={heart:`<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 21s-7.5-4.6-9.6-9.2C1 8.6 3 5 6.6 5c2.1 0 3.6 1.2 5.4 3.1C13.8 6.2 15.3 5 17.4 5 21 5 23 8.6 21.6 11.8 19.5 16.4 12 21 12 21z"/></svg>`,star:`<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z"/></svg>`,coin:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#ffb800"/><circle cx="12" cy="12" r="6.6" fill="none" stroke="#fff3c4" stroke-width="2"/><circle cx="12" cy="12" r="10" fill="none" stroke="#e69500" stroke-width="1.4"/></svg>`,pause:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M9 5.5v13M15 5.5v13"/></svg>`,settings:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2.2"/><circle cx="10" cy="17" r="2.2"/></svg>`,bulb:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2h5c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z" fill="currentColor" fill-opacity="0.18"/></svg>`,restart:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v5h5"/></svg>`,home:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><path d="M4 11l8-6.5 8 6.5v8.5h-5.5v-5h-5v5H4z"/></svg>`,gallery:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/></svg>`,play:`<svg viewBox="0 0 24 24"><path fill="currentColor" d="M7 4.5v15l12-7.5z"/></svg>`,back:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>`,sound:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/></svg>`,music:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V6l10-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/></svg>`,vibrate:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="4" width="8" height="16" rx="2"/><path d="M4 9v6M20 9v6"/></svg>`,eraser:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M14.5 4.5l5 5-9 9H6l-2.5-2.5a1.5 1.5 0 0 1 0-2.1z" fill="currentColor" fill-opacity="0.18"/><path d="M9.5 9.5l5 5M11 19h9"/></svg>`,undo:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14L4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg>`,lock:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>`,hand:`<svg viewBox="0 0 64 64"><path d="M26 34V13a5 5 0 0 1 10 0v15l11.5 2.3c3.8.8 6.3 4.4 5.7 8.2L51 52c-.6 3.6-3.7 6-7.3 6H33.6c-2.4 0-4.6-1.1-6-3L16 40.5a4.6 4.6 0 0 1 6.8-6.1z" fill="#ffffff" stroke="#2e2a4f" stroke-width="3.4" stroke-linejoin="round"/></svg>`},jv=class{constructor(){q(this,`ctx`,null),q(this,`master`,null),q(this,`noise`,null),q(this,`muted`,!1),q(this,`lastTick`,0)}unlock(){if(!this.ctx){let e=window.AudioContext??window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.55,this.master.connect(this.ctx.destination);let t=Math.floor(this.ctx.sampleRate*.3);this.noise=this.ctx.createBuffer(1,t,this.ctx.sampleRate);let n=this.noise.getChannelData(0);for(let e=0;e<t;e++)n[e]=Math.random()*2-1}this.ctx.state===`suspended`&&this.ctx.resume()}setMuted(e){this.muted=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?0:.55,this.ctx.currentTime,.02)}tone(e,t,n,r,i=0,a){let{ctx:o,master:s}=this;if(!o||!s)return;let c=o.currentTime+i,l=o.createOscillator(),u=o.createGain();l.type=n,l.frequency.setValueAtTime(e,c),a&&l.frequency.exponentialRampToValueAtTime(a,c+t),u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(r,c+.008),u.gain.exponentialRampToValueAtTime(1e-4,c+t),l.connect(u).connect(s),l.start(c),l.stop(c+t+.02)}burst(e,t,n,r=0){let{ctx:i,master:a,noise:o}=this;if(!i||!a||!o)return;let s=i.currentTime+r,c=i.createBufferSource();c.buffer=o;let l=i.createBiquadFilter();l.type=`lowpass`,l.frequency.value=n;let u=i.createGain();u.gain.setValueAtTime(t,s),u.gain.exponentialRampToValueAtTime(1e-4,s+e),c.connect(l).connect(u).connect(a),c.start(s),c.stop(s+e)}pop(e){let t=440*2**(Math.min(e,14)/12);this.tone(t,.14,`triangle`,.35,0,t*1.9),this.burst(.06,.12,5e3)}bump(){this.tone(150,.18,`sine`,.6,0,70),this.burst(.09,.25,900)}win(){[523.25,659.25,783.99,1046.5].forEach((e,t)=>this.tone(e,.28,`triangle`,.3,t*.09)),this.tone(1318.5,.5,`sine`,.18,.36)}lose(){[392,329.6,261.6].forEach((e,t)=>this.tone(e,.3,`sine`,.35,t*.14))}click(){this.tone(880,.05,`square`,.08)}tick(e){let t=this.ctx?.currentTime??0;if(t-this.lastTick<.025)return;this.lastTick=t;let n=1300+e%8*70+Math.random()*60;this.tone(n,.035,`sine`,.07)}reveal(){[392,523.25,659.25,783.99].forEach((e,t)=>this.tone(e,.6,`triangle`,.22,t*.05)),this.tone(1567.98,.8,`sine`,.1,.25),this.burst(.35,.08,7e3)}coin(){this.tone(1318.5,.08,`square`,.05),this.tone(1760,.14,`square`,.05,.06)}tok(){this.tone(330,.09,`sine`,.38,0,170),this.burst(.05,.14,2400)}boing(){let{ctx:e,master:t}=this;if(!e||!t)return;let n=e.currentTime,r=e.createOscillator(),i=e.createGain(),a=e.createOscillator(),o=e.createGain();r.type=`triangle`,r.frequency.setValueAtTime(170,n),r.frequency.exponentialRampToValueAtTime(540,n+.32),a.frequency.value=17,o.gain.value=45,a.connect(o).connect(r.frequency),i.gain.setValueAtTime(1e-4,n),i.gain.exponentialRampToValueAtTime(.32,n+.02),i.gain.exponentialRampToValueAtTime(1e-4,n+.62),r.connect(i).connect(t),r.start(n),a.start(n),r.stop(n+.66),a.stop(n+.66)}slide(){this.burst(.12,.08,1800),this.tone(520,.1,`triangle`,.12,0,700)}pinHit(){this.tone(2637,.22,`sine`,.14),this.tone(3951,.12,`sine`,.05,.01),this.burst(.03,.12,6e3)}undo(){this.tone(900,.16,`triangle`,.18,0,420),this.tone(1300,.1,`sine`,.06,.05,700)}crack(){this.burst(.09,.4,1600),this.tone(150,.14,`triangle`,.32,0,70),this.burst(.05,.2,5200,.03)}erase(){this.burst(.25,.1,3500),[1760,1318.5,1046.5].forEach((e,t)=>this.tone(e,.18,`sine`,.08,t*.05))}whistle(){for(let[e,t]of[[0,740],[.32,740]])this.tone(t,.26,`sine`,.13,e),this.tone(t*1.26,.26,`sine`,.1,e),this.burst(.25,.05,2600,e)}burstFirework(){this.burst(.18,.25,900);for(let e=0;e<6;e++)this.burst(.03,.08,6e3,.12+e*.05+Math.random()*.04)}squeak(){this.tone(2300,.07,`sine`,.1,0,2900),this.tone(2500,.08,`sine`,.1,.11,3100)}ding(){this.tone(1568,1.3,`sine`,.2),this.tone(3136,.5,`sine`,.05)}cute(){this.tone(880,.14,`sine`,.14),this.tone(1320,.22,`sine`,.14,.11)}slideWhistle(){this.tone(520,.4,`sine`,.16,0,1300),this.tone(1300,.45,`sine`,.14,.4,460)}buzz(e){let{ctx:t,master:n}=this;if(!t||!n)return;let r=t.currentTime,i=t.createOscillator(),a=t.createOscillator(),o=t.createGain(),s=t.createBiquadFilter(),c=t.createGain();i.type=`sawtooth`,i.frequency.value=190,a.frequency.value=23,o.gain.value=16,a.connect(o).connect(i.frequency),s.type=`lowpass`,s.frequency.value=1300,c.gain.setValueAtTime(1e-4,r),c.gain.exponentialRampToValueAtTime(.06,r+.08),c.gain.setValueAtTime(.06,r+e-.2),c.gain.exponentialRampToValueAtTime(1e-4,r+e),i.connect(s).connect(c).connect(n),i.start(r),a.start(r),i.stop(r+e+.05),a.stop(r+e+.05)}moo(){let{ctx:e,master:t}=this;if(!e||!t)return;let n=e.currentTime,r=e.createOscillator(),i=e.createOscillator(),a=e.createGain(),o=e.createBiquadFilter(),s=e.createGain();r.type=`sawtooth`,r.frequency.setValueAtTime(175,n),r.frequency.linearRampToValueAtTime(205,n+.25),r.frequency.exponentialRampToValueAtTime(130,n+.85),i.frequency.value=5,a.gain.value=4,i.connect(a).connect(r.frequency),o.type=`lowpass`,o.frequency.value=850,s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(.2,n+.12),s.gain.exponentialRampToValueAtTime(1e-4,n+.9),r.connect(o).connect(s).connect(t),r.start(n),i.start(n),r.stop(n+.95),i.stop(n+.95)}slurp(){let{ctx:e,master:t,noise:n}=this;if(!e||!t||!n)return;let r=e.currentTime,i=e.createBufferSource();i.buffer=n;let a=e.createBiquadFilter();a.type=`bandpass`,a.Q.value=6,a.frequency.setValueAtTime(420,r),a.frequency.exponentialRampToValueAtTime(1900,r+.28);let o=e.createGain();o.gain.setValueAtTime(1e-4,r),o.gain.exponentialRampToValueAtTime(.35,r+.04),o.gain.exponentialRampToValueAtTime(1e-4,r+.3),i.connect(a).connect(o).connect(t),i.start(r),i.stop(r+.3)}shutter(){this.burst(.03,.35,7e3),this.tone(2400,.02,`square`,.06),this.burst(.05,.22,3e3,.07),this.tone(1700,.02,`square`,.05,.07)}ratchet(){for(let e=0;e<4;e++)this.tone(880+e*45,.03,`square`,.055,e*.032)}melody(){[1046.5,1318.5,1568,1318.5,1760,1568,2093].forEach((e,t)=>{this.tone(e,.55,`sine`,.15,t*.17),this.tone(e*2,.28,`sine`,.04,t*.17)})}get context(){return this.ctx}},Mv=[`#ff4d6d`,`#ffc53d`,`#7c5cff`,`#2fbf6f`,`#3aa0ff`,`#ff8fc0`],Nv=()=>window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;function Pv(e){let t=Math.min(2,window.devicePixelRatio||1),n=window.innerWidth,r=window.innerHeight;(e.width!==Math.round(n*t)||e.height!==Math.round(r*t))&&(e.width=Math.round(n*t),e.height=Math.round(r*t));let i=e.getContext(`2d`);return i.setTransform(t,0,0,t,0,0),{g:i,w:n,h:r}}var Fv=class{constructor(e){q(this,`cv`,void 0),q(this,`pieces`,[]),this.cv=e}burst(e,t,n=110){Nv()&&(n=Math.round(n/4));for(let r=0;r<n;r++){let n=-Math.PI/2+(Math.random()-.5)*2.4,i=380+Math.random()*520;this.pieces.push({x:e,y:t,vx:Math.cos(n)*i,vy:Math.sin(n)*i,rot:Math.random()*6,vr:(Math.random()-.5)*14,c:Mv[r%Mv.length],life:2.4+Math.random()*.8,w:6+Math.random()*5,h:3+Math.random()*3})}}update(e){let{g:t,w:n,h:r}=Pv(this.cv);if(t.clearRect(0,0,n,r),this.pieces.length){for(let n of this.pieces)n.vy+=1100*e,n.vx*=1-1.2*e,n.x+=n.vx*e,n.y+=n.vy*e,n.rot+=n.vr*e,n.life-=e,t.save(),t.globalAlpha=Math.min(1,n.life/.5),t.translate(n.x,n.y),t.rotate(n.rot),t.fillStyle=n.c,t.fillRect(-n.w/2,-n.h/2*Math.abs(Math.cos(n.rot*1.7)),n.w,n.h*Math.abs(Math.cos(n.rot*1.7))+.5),t.restore();this.pieces=this.pieces.filter(e=>e.life>0&&e.y<r+40)}}},Iv=class{constructor(e){q(this,`cv`,void 0),q(this,`motes`,[]),q(this,`t`,0),this.cv=e}setColors(e){let t=window.innerWidth,n=window.innerHeight,r=Math.round(Math.min(26,t*n/26e3));this.motes=Array.from({length:r},(r,i)=>({x:Math.random()*t,y:Math.random()*n,r:3+Math.random()*6,speed:8+Math.random()*16,drift:10+Math.random()*20,phase:Math.random()*6.28,c:e[i%e.length],shape:i%3}))}update(e){let{g:t,w:n,h:r}=Pv(this.cv);t.clearRect(0,0,n,r),Nv()||(this.t+=e);for(let i of this.motes){Nv()||(i.y-=i.speed*e),i.y<-20&&(i.y=r+20,i.x=Math.random()*n);let a=i.x+Math.sin(this.t*.5+i.phase)*i.drift;if(t.globalAlpha=.55,t.fillStyle=i.c,i.shape===0)t.beginPath(),t.arc(a,i.y,i.r,0,Math.PI*2),t.fill();else if(i.shape===1){let e=i.r*1.4;t.beginPath(),t.moveTo(a,i.y-e),t.quadraticCurveTo(a,i.y,a+e,i.y),t.quadraticCurveTo(a,i.y,a,i.y+e),t.quadraticCurveTo(a,i.y,a-e,i.y),t.quadraticCurveTo(a,i.y,a,i.y-e),t.fill()}else t.save(),t.translate(a,i.y),t.rotate(this.t*.6+i.phase),t.beginPath(),t.roundRect(-i.r,-i.r*.45,i.r*2,i.r*.9,i.r*.4),t.fill(),t.restore()}t.globalAlpha=1}};function Lv(e,t,n,r,i=``){let a=document.createElement(`div`);a.className=`float-text ${i}`,a.textContent=t,a.style.left=`${n}px`,a.style.top=`${r}px`,e.appendChild(a),a.addEventListener(`animationend`,()=>a.remove())}var Rv=class{constructor(e){q(this,`el`,void 0),this.el=document.createElement(`div`),this.el.className=`tut-hand`,this.el.innerHTML=Av.hand,this.el.hidden=!0,e.appendChild(this.el)}tapAt(e,t){this.el.hidden=!1,this.el.classList.remove(`drag`),this.el.classList.add(`tap`),this.el.style.left=`${e}px`,this.el.style.top=`${t}px`}dragAt(e,t){this.el.hidden=!1,this.el.classList.remove(`tap`),this.el.classList.add(`drag`),this.el.style.left=`${e}px`,this.el.style.top=`${t}px`}hide(){this.el.hidden=!0}};function zv(e){try{navigator.vibrate?.(e)}catch{}}export{Io as $,M as A,_i as B,qe as C,Jt as D,U as E,T as F,re as G,Os as H,h as I,Kn as J,l as K,Yr as L,Or as M,w as N,ji as O,tt as P,Fs as Q,H as R,q as S,Br as T,j as U,f as V,Bo as W,Mr as X,zo as Y,an as Z,L_ as _,zv as a,Pm as b,Tv as c,mv as d,ee as et,pv as f,B_ as g,F_ as h,Lv as i,cn as it,ea as j,ne as k,Ev as l,cv as m,Fv as n,z as nt,jv as o,dv as p,Ze as q,Rv as r,B as rt,Av as s,Iv as t,C as tt,vv as u,I_ as v,Tr as w,Td as x,Mm as y,W as z};
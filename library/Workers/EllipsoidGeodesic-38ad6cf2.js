define(["exports","./when-7ef6387a","./Check-ed6a1804","./Math-85667bf9","./Cartesian3-2a8ef78e","./Ellipsoid-367a1bb3"],(function(t,a,i,e,n,s){"use strict";function r(t,a,i,e,n,s,r){var h=function(t,a){return t*a*(4+t*(4-3*a))/16}(t,i);return(1-h)*t*a*(e+h*n*(r+h*s*(2*r*r-1)))}var h=new n.Cartesian3,d=new n.Cartesian3;function o(t,a,o,c){var u=n.Cartesian3.normalize(c.cartographicToCartesian(a,d),h),M=n.Cartesian3.normalize(c.cartographicToCartesian(o,d),d);i.Check.typeOf.number.greaterThanOrEquals("value",Math.abs(Math.abs(n.Cartesian3.angleBetween(u,M))-Math.PI),.0125),function(t,a,i,n,s,h,d){var o,c,u,M,l,g=(a-i)/a,_=h-n,f=Math.atan((1-g)*Math.tan(s)),p=Math.atan((1-g)*Math.tan(d)),v=Math.cos(f),C=Math.sin(f),m=Math.cos(p),H=Math.sin(p),O=v*m,b=v*H,q=C*H,S=C*m,k=_,w=e.CesiumMath.TWO_PI,U=Math.cos(k),A=Math.sin(k);do{U=Math.cos(k),A=Math.sin(k);var E,R=b-S*U;u=Math.sqrt(m*m*A*A+R*R),c=q+O*U,o=Math.atan2(u,c),0===u?(E=0,M=1):M=1-(E=O*A/u)*E,w=k,l=c-2*q/M,isNaN(l)&&(l=0),k=_+r(g,E,M,o,u,c,l)}while(Math.abs(k-w)>e.CesiumMath.EPSILON12);var y=M*(a*a-i*i)/(i*i),P=y*(256+y*(y*(74-47*y)-128))/1024,T=l*l,x=i*(1+y*(4096+y*(y*(320-175*y)-768))/16384)*(o-P*u*(l+P*(c*(2*T-1)-P*l*(4*u*u-3)*(4*T-3)/6)/4)),D=Math.atan2(m*A,b-S*U),I=Math.atan2(v*A,b*U-S);t._distance=x,t._startHeading=D,t._endHeading=I,t._uSquared=y}(t,c.maximumRadius,c.minimumRadius,a.longitude,a.latitude,o.longitude,o.latitude),t._start=s.Cartographic.clone(a,t._start),t._end=s.Cartographic.clone(o,t._end),t._start.height=0,t._end.height=0,function(t){var a=t._uSquared,i=t._ellipsoid.maximumRadius,e=t._ellipsoid.minimumRadius,n=(i-e)/i,s=Math.cos(t._startHeading),r=Math.sin(t._startHeading),h=(1-n)*Math.tan(t._start.latitude),d=1/Math.sqrt(1+h*h),o=d*h,c=Math.atan2(h,s),u=d*r,M=u*u,l=1-M,g=Math.sqrt(l),_=a/4,f=_*_,p=f*_,v=f*f,C=1+_-3*f/4+5*p/4-175*v/64,m=1-_+15*f/8-35*p/8,H=1-3*_+35*f/4,O=1-5*_,b=C*c-m*Math.sin(2*c)*_/2-H*Math.sin(4*c)*f/16-O*Math.sin(6*c)*p/48-5*Math.sin(8*c)*v/512,q=t._constants;q.a=i,q.b=e,q.f=n,q.cosineHeading=s,q.sineHeading=r,q.tanU=h,q.cosineU=d,q.sineU=o,q.sigma=c,q.sineAlpha=u,q.sineSquaredAlpha=M,q.cosineSquaredAlpha=l,q.cosineAlpha=g,q.u2Over4=_,q.u4Over16=f,q.u6Over64=p,q.u8Over256=v,q.a0=C,q.a1=m,q.a2=H,q.a3=O,q.distanceRatio=b}(t)}function c(t,i,e){var n=a.defaultValue(e,s.Ellipsoid.WGS84);this._ellipsoid=n,this._start=new s.Cartographic,this._end=new s.Cartographic,this._constants={},this._startHeading=void 0,this._endHeading=void 0,this._distance=void 0,this._uSquared=void 0,a.defined(t)&&a.defined(i)&&o(this,t,i,n)}Object.defineProperties(c.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},surfaceDistance:{get:function(){return i.Check.defined("distance",this._distance),this._distance}},start:{get:function(){return this._start}},end:{get:function(){return this._end}},startHeading:{get:function(){return i.Check.defined("distance",this._distance),this._startHeading}},endHeading:{get:function(){return i.Check.defined("distance",this._distance),this._endHeading}}}),c.prototype.setEndPoints=function(t,a){i.Check.defined("start",t),i.Check.defined("end",a),o(this,t,a,this._ellipsoid)},c.prototype.interpolateUsingFraction=function(t,a){return this.interpolateUsingSurfaceDistance(this._distance*t,a)},c.prototype.interpolateUsingSurfaceDistance=function(t,e){i.Check.defined("distance",this._distance);var n=this._constants,h=n.distanceRatio+t/n.b,d=Math.cos(2*h),o=Math.cos(4*h),c=Math.cos(6*h),u=Math.sin(2*h),M=Math.sin(4*h),l=Math.sin(6*h),g=Math.sin(8*h),_=h*h,f=h*_,p=n.u8Over256,v=n.u2Over4,C=n.u6Over64,m=n.u4Over16,H=2*f*p*d/3+h*(1-v+7*m/4-15*C/4+579*p/64-(m-15*C/4+187*p/16)*d-(5*C/4-115*p/16)*o-29*p*c/16)+(v/2-m+71*C/32-85*p/16)*u+(5*m/16-5*C/4+383*p/96)*M-_*((C-11*p/2)*u+5*p*M/2)+(29*C/96-29*p/16)*l+539*p*g/1536,O=Math.asin(Math.sin(H)*n.cosineAlpha),b=Math.atan(n.a/n.b*Math.tan(O));H-=n.sigma;var q=Math.cos(2*n.sigma+H),S=Math.sin(H),k=Math.cos(H),w=n.cosineU*k,U=n.sineU*S,A=Math.atan2(S*n.sineHeading,w-U*n.cosineHeading)-r(n.f,n.sineAlpha,n.cosineSquaredAlpha,H,S,k,q);return a.defined(e)?(e.longitude=this._start.longitude+A,e.latitude=b,e.height=0,e):new s.Cartographic(this._start.longitude+A,b,0)},t.EllipsoidGeodesic=c}));
//# sourceMappingURL=EllipsoidGeodesic-38ad6cf2.js.map
define(["exports","./when-7ef6387a","./Check-ed6a1804","./Math-55f9392d","./Ellipsoid-911f8bc2","./Transforms-d8f9dcbd","./Cartesian2-ff47d58f","./Plane-02009bbb","./EllipsoidTangentPlane-dfb29add"],(function(a,e,t,r,n,i,s,o,d){"use strict";function C(a,t){this.center=n.Cartesian3.clone(e.defaultValue(a,n.Cartesian3.ZERO)),this.halfAxes=i.Matrix3.clone(e.defaultValue(t,i.Matrix3.ZERO))}C.packedLength=n.Cartesian3.packedLength+i.Matrix3.packedLength,C.pack=function(a,r,s){return t.Check.typeOf.object("value",a),t.Check.defined("array",r),s=e.defaultValue(s,0),n.Cartesian3.pack(a.center,r,s),i.Matrix3.pack(a.halfAxes,r,s+n.Cartesian3.packedLength),r},C.unpack=function(a,r,s){return t.Check.defined("array",a),r=e.defaultValue(r,0),e.defined(s)||(s=new C),n.Cartesian3.unpack(a,r,s.center),i.Matrix3.unpack(a,r+n.Cartesian3.packedLength,s.halfAxes),s};var u=new n.Cartesian3,c=new n.Cartesian3,l=new n.Cartesian3,h=new n.Cartesian3,f=new n.Cartesian3,m=new n.Cartesian3,x=new i.Matrix3,p={unitary:new i.Matrix3,diagonal:new i.Matrix3};C.fromPoints=function(a,t){if(e.defined(t)||(t=new C),!e.defined(a)||0===a.length)return t.halfAxes=i.Matrix3.ZERO,t.center=n.Cartesian3.ZERO,t;var r,s=a.length,o=n.Cartesian3.clone(a[0],u);for(r=1;r<s;r++)n.Cartesian3.add(o,a[r],o);var d=1/s;n.Cartesian3.multiplyByScalar(o,d,o);var M,w=0,g=0,b=0,v=0,y=0,E=0;for(r=0;r<s;r++)w+=(M=n.Cartesian3.subtract(a[r],o,c)).x*M.x,g+=M.x*M.y,b+=M.x*M.z,v+=M.y*M.y,y+=M.y*M.z,E+=M.z*M.z;w*=d,g*=d,b*=d,v*=d,y*=d,E*=d;var O=x;O[0]=w,O[1]=g,O[2]=b,O[3]=g,O[4]=v,O[5]=y,O[6]=b,O[7]=y,O[8]=E;var P=i.Matrix3.computeEigenDecomposition(O,p),N=i.Matrix3.clone(P.unitary,t.halfAxes),A=i.Matrix3.getColumn(N,0,h),T=i.Matrix3.getColumn(N,1,f),R=i.Matrix3.getColumn(N,2,m),I=-Number.MAX_VALUE,D=-Number.MAX_VALUE,L=-Number.MAX_VALUE,z=Number.MAX_VALUE,S=Number.MAX_VALUE,q=Number.MAX_VALUE;for(r=0;r<s;r++)M=a[r],I=Math.max(n.Cartesian3.dot(A,M),I),D=Math.max(n.Cartesian3.dot(T,M),D),L=Math.max(n.Cartesian3.dot(R,M),L),z=Math.min(n.Cartesian3.dot(A,M),z),S=Math.min(n.Cartesian3.dot(T,M),S),q=Math.min(n.Cartesian3.dot(R,M),q);A=n.Cartesian3.multiplyByScalar(A,.5*(z+I),A),T=n.Cartesian3.multiplyByScalar(T,.5*(S+D),T),R=n.Cartesian3.multiplyByScalar(R,.5*(q+L),R);var U=n.Cartesian3.add(A,T,t.center);n.Cartesian3.add(U,R,U);var V=l;return V.x=I-z,V.y=D-S,V.z=L-q,n.Cartesian3.multiplyByScalar(V,.5,V),i.Matrix3.multiplyByScale(t.halfAxes,V,t.halfAxes),t};var M=new n.Cartesian3,w=new n.Cartesian3;function g(a,r,s,o,d,u,c,l,h,f,m){if(!(e.defined(d)&&e.defined(u)&&e.defined(c)&&e.defined(l)&&e.defined(h)&&e.defined(f)))throw new t.DeveloperError("all extents (minimum/maximum X/Y/Z) are required.");e.defined(m)||(m=new C);var x=m.halfAxes;i.Matrix3.setColumn(x,0,r,x),i.Matrix3.setColumn(x,1,s,x),i.Matrix3.setColumn(x,2,o,x);var p=M;p.x=(d+u)/2,p.y=(c+l)/2,p.z=(h+f)/2;var g=w;g.x=(u-d)/2,g.y=(l-c)/2,g.z=(f-h)/2;var b=m.center;return p=i.Matrix3.multiplyByVector(x,p,p),n.Cartesian3.add(a,p,b),i.Matrix3.multiplyByScale(x,g,x),m}var b=new n.Cartographic,v=new n.Cartesian3,y=new n.Cartographic,E=new n.Cartographic,O=new n.Cartographic,P=new n.Cartographic,N=new n.Cartographic,A=new n.Cartesian3,T=new n.Cartesian3,R=new n.Cartesian3,I=new n.Cartesian3,D=new n.Cartesian3,L=new s.Cartesian2,z=new s.Cartesian2,S=new s.Cartesian2,q=new s.Cartesian2,U=new s.Cartesian2,V=new n.Cartesian3,k=new n.Cartesian3,B=new n.Cartesian3,_=new n.Cartesian3,W=new s.Cartesian2,X=new n.Cartesian3,j=new n.Cartesian3,Z=new n.Cartesian3,G=new o.Plane(n.Cartesian3.UNIT_X,0);C.fromRectangle=function(a,i,C,u,c){if(!e.defined(a))throw new t.DeveloperError("rectangle is required");if(a.width<0||a.width>r.CesiumMath.TWO_PI)throw new t.DeveloperError("Rectangle width must be between 0 and 2*pi");if(a.height<0||a.height>r.CesiumMath.PI)throw new t.DeveloperError("Rectangle height must be between 0 and pi");if(e.defined(u)&&!r.CesiumMath.equalsEpsilon(u.radii.x,u.radii.y,r.CesiumMath.EPSILON15))throw new t.DeveloperError("Ellipsoid must be an ellipsoid of revolution (radii.x == radii.y)");var l,h,f,m,x,p,M;if(i=e.defaultValue(i,0),C=e.defaultValue(C,0),u=e.defaultValue(u,n.Ellipsoid.WGS84),a.width<=r.CesiumMath.PI){var w=s.Rectangle.center(a,b),Y=u.cartographicToCartesian(w,v),F=new d.EllipsoidTangentPlane(Y,u);M=F.plane;var H=w.longitude,J=a.south<0&&a.north>0?0:w.latitude,K=n.Cartographic.fromRadians(H,a.north,C,y),Q=n.Cartographic.fromRadians(a.west,a.north,C,E),$=n.Cartographic.fromRadians(a.west,J,C,O),aa=n.Cartographic.fromRadians(a.west,a.south,C,P),ea=n.Cartographic.fromRadians(H,a.south,C,N),ta=u.cartographicToCartesian(K,A),ra=u.cartographicToCartesian(Q,T),na=u.cartographicToCartesian($,R),ia=u.cartographicToCartesian(aa,I),sa=u.cartographicToCartesian(ea,D),oa=F.projectPointToNearestOnPlane(ta,L),da=F.projectPointToNearestOnPlane(ra,z),Ca=F.projectPointToNearestOnPlane(na,S),ua=F.projectPointToNearestOnPlane(ia,q),ca=F.projectPointToNearestOnPlane(sa,U);return h=-(l=Math.min(da.x,Ca.x,ua.x)),m=Math.max(da.y,oa.y),f=Math.min(ua.y,ca.y),Q.height=aa.height=i,ra=u.cartographicToCartesian(Q,T),ia=u.cartographicToCartesian(aa,I),x=Math.min(o.Plane.getPointDistance(M,ra),o.Plane.getPointDistance(M,ia)),p=C,g(F.origin,F.xAxis,F.yAxis,F.zAxis,l,h,f,m,x,p,c)}var la=a.south>0,ha=a.north<0,fa=la?a.south:ha?a.north:0,ma=s.Rectangle.center(a,b).longitude,xa=n.Cartesian3.fromRadians(ma,fa,C,u,V);xa.z=0;var pa=Math.abs(xa.x)<r.CesiumMath.EPSILON10&&Math.abs(xa.y)<r.CesiumMath.EPSILON10?n.Cartesian3.UNIT_X:n.Cartesian3.normalize(xa,k),Ma=n.Cartesian3.UNIT_Z,wa=n.Cartesian3.cross(pa,Ma,B);M=o.Plane.fromPointNormal(xa,pa,G);var ga=n.Cartesian3.fromRadians(ma+r.CesiumMath.PI_OVER_TWO,fa,C,u,_);l=-(h=n.Cartesian3.dot(o.Plane.projectPointOntoPlane(M,ga,W),wa)),m=n.Cartesian3.fromRadians(0,a.north,ha?i:C,u,X).z,f=n.Cartesian3.fromRadians(0,a.south,la?i:C,u,j).z;var ba=n.Cartesian3.fromRadians(a.east,fa,C,u,Z);return g(xa,wa,Ma,pa,l,h,f,m,x=o.Plane.getPointDistance(M,ba),p=0,c)},C.clone=function(a,t){if(e.defined(a))return e.defined(t)?(n.Cartesian3.clone(a.center,t.center),i.Matrix3.clone(a.halfAxes,t.halfAxes),t):new C(a.center,a.halfAxes)},C.intersectPlane=function(a,r){if(!e.defined(a))throw new t.DeveloperError("box is required.");if(!e.defined(r))throw new t.DeveloperError("plane is required.");var s=a.center,o=r.normal,d=a.halfAxes,C=o.x,u=o.y,c=o.z,l=Math.abs(C*d[i.Matrix3.COLUMN0ROW0]+u*d[i.Matrix3.COLUMN0ROW1]+c*d[i.Matrix3.COLUMN0ROW2])+Math.abs(C*d[i.Matrix3.COLUMN1ROW0]+u*d[i.Matrix3.COLUMN1ROW1]+c*d[i.Matrix3.COLUMN1ROW2])+Math.abs(C*d[i.Matrix3.COLUMN2ROW0]+u*d[i.Matrix3.COLUMN2ROW1]+c*d[i.Matrix3.COLUMN2ROW2]),h=n.Cartesian3.dot(o,s)+r.distance;return h<=-l?i.Intersect.OUTSIDE:h>=l?i.Intersect.INSIDE:i.Intersect.INTERSECTING};var Y=new n.Cartesian3,F=new n.Cartesian3,H=new n.Cartesian3,J=new n.Cartesian3;C.distanceSquaredTo=function(a,r){if(!e.defined(a))throw new t.DeveloperError("box is required.");if(!e.defined(r))throw new t.DeveloperError("cartesian is required.");var s=n.Cartesian3.subtract(r,a.center,M),o=a.halfAxes,d=i.Matrix3.getColumn(o,0,Y),C=i.Matrix3.getColumn(o,1,F),u=i.Matrix3.getColumn(o,2,H),c=n.Cartesian3.magnitude(d),l=n.Cartesian3.magnitude(C),h=n.Cartesian3.magnitude(u);n.Cartesian3.normalize(d,d),n.Cartesian3.normalize(C,C),n.Cartesian3.normalize(u,u);var f=J;f.x=n.Cartesian3.dot(s,d),f.y=n.Cartesian3.dot(s,C),f.z=n.Cartesian3.dot(s,u);var m,x=0;return f.x<-c?x+=(m=f.x+c)*m:f.x>c&&(x+=(m=f.x-c)*m),f.y<-l?x+=(m=f.y+l)*m:f.y>l&&(x+=(m=f.y-l)*m),f.z<-h?x+=(m=f.z+h)*m:f.z>h&&(x+=(m=f.z-h)*m),x};var K=new n.Cartesian3,Q=new n.Cartesian3;C.computePlaneDistances=function(a,r,s,o){if(!e.defined(a))throw new t.DeveloperError("box is required.");if(!e.defined(r))throw new t.DeveloperError("position is required.");if(!e.defined(s))throw new t.DeveloperError("direction is required.");e.defined(o)||(o=new i.Interval);var d=Number.POSITIVE_INFINITY,C=Number.NEGATIVE_INFINITY,u=a.center,c=a.halfAxes,l=i.Matrix3.getColumn(c,0,Y),h=i.Matrix3.getColumn(c,1,F),f=i.Matrix3.getColumn(c,2,H),m=n.Cartesian3.add(l,h,K);n.Cartesian3.add(m,f,m),n.Cartesian3.add(m,u,m);var x=n.Cartesian3.subtract(m,r,Q),p=n.Cartesian3.dot(s,x);return d=Math.min(p,d),C=Math.max(p,C),n.Cartesian3.add(u,l,m),n.Cartesian3.add(m,h,m),n.Cartesian3.subtract(m,f,m),n.Cartesian3.subtract(m,r,x),p=n.Cartesian3.dot(s,x),d=Math.min(p,d),C=Math.max(p,C),n.Cartesian3.add(u,l,m),n.Cartesian3.subtract(m,h,m),n.Cartesian3.add(m,f,m),n.Cartesian3.subtract(m,r,x),p=n.Cartesian3.dot(s,x),d=Math.min(p,d),C=Math.max(p,C),n.Cartesian3.add(u,l,m),n.Cartesian3.subtract(m,h,m),n.Cartesian3.subtract(m,f,m),n.Cartesian3.subtract(m,r,x),p=n.Cartesian3.dot(s,x),d=Math.min(p,d),C=Math.max(p,C),n.Cartesian3.subtract(u,l,m),n.Cartesian3.add(m,h,m),n.Cartesian3.add(m,f,m),n.Cartesian3.subtract(m,r,x),p=n.Cartesian3.dot(s,x),d=Math.min(p,d),C=Math.max(p,C),n.Cartesian3.subtract(u,l,m),n.Cartesian3.add(m,h,m),n.Cartesian3.subtract(m,f,m),n.Cartesian3.subtract(m,r,x),p=n.Cartesian3.dot(s,x),d=Math.min(p,d),C=Math.max(p,C),n.Cartesian3.subtract(u,l,m),n.Cartesian3.subtract(m,h,m),n.Cartesian3.add(m,f,m),n.Cartesian3.subtract(m,r,x),p=n.Cartesian3.dot(s,x),d=Math.min(p,d),C=Math.max(p,C),n.Cartesian3.subtract(u,l,m),n.Cartesian3.subtract(m,h,m),n.Cartesian3.subtract(m,f,m),n.Cartesian3.subtract(m,r,x),p=n.Cartesian3.dot(s,x),d=Math.min(p,d),C=Math.max(p,C),o.start=d,o.stop=C,o};var $=new i.BoundingSphere;C.isOccluded=function(a,r){if(!e.defined(a))throw new t.DeveloperError("box is required.");if(!e.defined(r))throw new t.DeveloperError("occluder is required.");var n=i.BoundingSphere.fromOrientedBoundingBox(a,$);return!r.isBoundingSphereVisible(n)},C.prototype.intersectPlane=function(a){return C.intersectPlane(this,a)},C.prototype.distanceSquaredTo=function(a){return C.distanceSquaredTo(this,a)},C.prototype.computePlaneDistances=function(a,e,t){return C.computePlaneDistances(this,a,e,t)},C.prototype.isOccluded=function(a){return C.isOccluded(this,a)},C.equals=function(a,t){return a===t||e.defined(a)&&e.defined(t)&&n.Cartesian3.equals(a.center,t.center)&&i.Matrix3.equals(a.halfAxes,t.halfAxes)},C.prototype.clone=function(a){return C.clone(this,a)},C.prototype.equals=function(a){return C.equals(this,a)},a.OrientedBoundingBox=C}));
//# sourceMappingURL=OrientedBoundingBox-d4914ac2.js.map
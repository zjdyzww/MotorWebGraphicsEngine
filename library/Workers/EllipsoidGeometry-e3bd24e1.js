define(["exports","./when-7ef6387a","./Check-ed6a1804","./Math-85667bf9","./Ellipsoid-1cbb4ac9","./Transforms-c20c38d0","./Cartesian2-73569d25","./ComponentDatatype-a863af81","./GeometryAttribute-6b3c7112","./GeometryAttributes-cb18da36","./IndexDatatype-f12d39b5","./GeometryOffsetAttribute-5cfc2755","./VertexFormat-d75df48f"],(function(e,t,a,r,i,n,o,m,s,u,l,f,c){"use strict";var d=new i.Cartesian3,p=new i.Cartesian3,C=new i.Cartesian3,y=new i.Cartesian3,h=new i.Cartesian3,v=new i.Cartesian3(1,1,1),_=Math.cos,A=Math.sin;function x(e){e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT);var n=t.defaultValue(e.radii,v),o=t.defaultValue(e.innerRadii,n),m=t.defaultValue(e.minimumClock,0),s=t.defaultValue(e.maximumClock,r.CesiumMath.TWO_PI),u=t.defaultValue(e.minimumCone,0),l=t.defaultValue(e.maximumCone,r.CesiumMath.PI),f=Math.round(t.defaultValue(e.stackPartitions,64)),d=Math.round(t.defaultValue(e.slicePartitions,64)),p=t.defaultValue(e.vertexFormat,c.VertexFormat.DEFAULT);if(d<3)throw new a.DeveloperError("options.slicePartitions cannot be less than three.");if(f<3)throw new a.DeveloperError("options.stackPartitions cannot be less than three.");this._radii=i.Cartesian3.clone(n),this._innerRadii=i.Cartesian3.clone(o),this._minimumClock=m,this._maximumClock=s,this._minimumCone=u,this._maximumCone=l,this._stackPartitions=f,this._slicePartitions=d,this._vertexFormat=c.VertexFormat.clone(p),this._offsetAttribute=e.offsetAttribute,this._workerName="createEllipsoidGeometry"}x.packedLength=2*i.Cartesian3.packedLength+c.VertexFormat.packedLength+7,x.pack=function(e,r,n){if(!t.defined(e))throw new a.DeveloperError("value is required");if(!t.defined(r))throw new a.DeveloperError("array is required");return n=t.defaultValue(n,0),i.Cartesian3.pack(e._radii,r,n),n+=i.Cartesian3.packedLength,i.Cartesian3.pack(e._innerRadii,r,n),n+=i.Cartesian3.packedLength,c.VertexFormat.pack(e._vertexFormat,r,n),n+=c.VertexFormat.packedLength,r[n++]=e._minimumClock,r[n++]=e._maximumClock,r[n++]=e._minimumCone,r[n++]=e._maximumCone,r[n++]=e._stackPartitions,r[n++]=e._slicePartitions,r[n]=t.defaultValue(e._offsetAttribute,-1),r};var b,w=new i.Cartesian3,k=new i.Cartesian3,P=new c.VertexFormat,F={radii:w,innerRadii:k,vertexFormat:P,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,offsetAttribute:void 0};x.unpack=function(e,r,n){if(!t.defined(e))throw new a.DeveloperError("array is required");r=t.defaultValue(r,0);var o=i.Cartesian3.unpack(e,r,w);r+=i.Cartesian3.packedLength;var m=i.Cartesian3.unpack(e,r,k);r+=i.Cartesian3.packedLength;var s=c.VertexFormat.unpack(e,r,P);r+=c.VertexFormat.packedLength;var u=e[r++],l=e[r++],f=e[r++],d=e[r++],p=e[r++],C=e[r++],y=e[r];return t.defined(n)?(n._radii=i.Cartesian3.clone(o,n._radii),n._innerRadii=i.Cartesian3.clone(m,n._innerRadii),n._vertexFormat=c.VertexFormat.clone(s,n._vertexFormat),n._minimumClock=u,n._maximumClock=l,n._minimumCone=f,n._maximumCone=d,n._stackPartitions=p,n._slicePartitions=C,n._offsetAttribute=-1===y?void 0:y,n):(F.minimumClock=u,F.maximumClock=l,F.minimumCone=f,F.maximumCone=d,F.stackPartitions=p,F.slicePartitions=C,F.offsetAttribute=-1===y?void 0:y,new x(F))},x.createGeometry=function(e){var a=e._radii;if(!(a.x<=0||a.y<=0||a.z<=0)){var c=e._innerRadii;if(!(c.x<=0||c.y<=0||c.z<=0)){var v,x,b=e._minimumClock,w=e._maximumClock,k=e._minimumCone,P=e._maximumCone,F=e._vertexFormat,g=e._slicePartitions+1,V=e._stackPartitions+1;(g=Math.round(g*Math.abs(w-b)/r.CesiumMath.TWO_PI))<2&&(g=2),(V=Math.round(V*Math.abs(P-k)/r.CesiumMath.PI))<2&&(V=2);var D=0,E=[k],M=[b];for(v=0;v<V;v++)E.push(k+v*(P-k)/(V-1));for(E.push(P),x=0;x<g;x++)M.push(b+x*(w-b)/(g-1));M.push(w);var T=E.length,G=M.length,L=0,O=1,I=c.x!==a.x||c.y!==a.y||c.z!==a.z,z=!1,N=!1,R=!1;I&&(O=2,k>0&&(z=!0,L+=g-1),P<Math.PI&&(N=!0,L+=g-1),(w-b)%r.CesiumMath.TWO_PI?(R=!0,L+=2*(V-1)+1):L+=1);var U=G*T*O,S=new Float64Array(3*U),B=f.arrayFill(new Array(U),!1),W=f.arrayFill(new Array(U),!1),q=g*V*O,Y=6*(q+L+1-(g+V)*O),J=l.IndexDatatype.createTypedArray(q,Y),X=F.normal?new Float32Array(3*U):void 0,Z=F.tangent?new Float32Array(3*U):void 0,j=F.bitangent?new Float32Array(3*U):void 0,H=F.st?new Float32Array(2*U):void 0,K=new Array(T),Q=new Array(T);for(v=0;v<T;v++)K[v]=A(E[v]),Q[v]=_(E[v]);var $=new Array(G),ee=new Array(G);for(x=0;x<G;x++)ee[x]=_(M[x]),$[x]=A(M[x]);for(v=0;v<T;v++)for(x=0;x<G;x++)S[D++]=a.x*K[v]*ee[x],S[D++]=a.y*K[v]*$[x],S[D++]=a.z*Q[v];var te,ae,re,ie,ne=U/2;if(I)for(v=0;v<T;v++)for(x=0;x<G;x++)S[D++]=c.x*K[v]*ee[x],S[D++]=c.y*K[v]*$[x],S[D++]=c.z*Q[v],B[ne]=!0,v>0&&v!==T-1&&0!==x&&x!==G-1&&(W[ne]=!0),ne++;for(D=0,v=1;v<T-2;v++)for(te=v*G,ae=(v+1)*G,x=1;x<G-2;x++)J[D++]=ae+x,J[D++]=ae+x+1,J[D++]=te+x+1,J[D++]=ae+x,J[D++]=te+x+1,J[D++]=te+x;if(I){var oe=T*G;for(v=1;v<T-2;v++)for(te=oe+v*G,ae=oe+(v+1)*G,x=1;x<G-2;x++)J[D++]=ae+x,J[D++]=te+x,J[D++]=te+x+1,J[D++]=ae+x,J[D++]=te+x+1,J[D++]=ae+x+1}if(I){if(z)for(ie=T*G,v=1;v<G-2;v++)J[D++]=v,J[D++]=v+1,J[D++]=ie+v+1,J[D++]=v,J[D++]=ie+v+1,J[D++]=ie+v;if(N)for(re=T*G-G,ie=T*G*O-G,v=1;v<G-2;v++)J[D++]=re+v+1,J[D++]=re+v,J[D++]=ie+v,J[D++]=re+v+1,J[D++]=ie+v,J[D++]=ie+v+1}if(R){for(v=1;v<T-2;v++)ie=G*T+G*v,re=G*v,J[D++]=ie,J[D++]=re+G,J[D++]=re,J[D++]=ie,J[D++]=ie+G,J[D++]=re+G;for(v=1;v<T-2;v++)ie=G*T+G*(v+1)-1,re=G*(v+1)-1,J[D++]=re+G,J[D++]=ie,J[D++]=re,J[D++]=re+G,J[D++]=ie+G,J[D++]=ie}var me=new u.GeometryAttributes;F.position&&(me.position=new s.GeometryAttribute({componentDatatype:m.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:S}));var se,ue=0,le=0,fe=0,ce=0,de=U/2,pe=i.Ellipsoid.fromCartesian3(a),Ce=i.Ellipsoid.fromCartesian3(c);if(F.st||F.normal||F.tangent||F.bitangent){for(v=0;v<U;v++){se=B[v]?Ce:pe;var ye=i.Cartesian3.fromArray(S,3*v,d),he=se.geodeticSurfaceNormal(ye,p);if(W[v]&&i.Cartesian3.negate(he,he),F.st){var ve=o.Cartesian2.negate(he,h);H[ue++]=Math.atan2(ve.y,ve.x)/r.CesiumMath.TWO_PI+.5,H[ue++]=Math.asin(he.z)/Math.PI+.5}if(F.normal&&(X[le++]=he.x,X[le++]=he.y,X[le++]=he.z),F.tangent||F.bitangent){var _e,Ae=C,xe=0;if(B[v]&&(xe=de),_e=!z&&v>=xe&&v<xe+2*G?i.Cartesian3.UNIT_X:i.Cartesian3.UNIT_Z,i.Cartesian3.cross(_e,he,Ae),i.Cartesian3.normalize(Ae,Ae),F.tangent&&(Z[fe++]=Ae.x,Z[fe++]=Ae.y,Z[fe++]=Ae.z),F.bitangent){var be=i.Cartesian3.cross(he,Ae,y);i.Cartesian3.normalize(be,be),j[ce++]=be.x,j[ce++]=be.y,j[ce++]=be.z}}}F.st&&(me.st=new s.GeometryAttribute({componentDatatype:m.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:H})),F.normal&&(me.normal=new s.GeometryAttribute({componentDatatype:m.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:X})),F.tangent&&(me.tangent=new s.GeometryAttribute({componentDatatype:m.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:Z})),F.bitangent&&(me.bitangent=new s.GeometryAttribute({componentDatatype:m.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:j}))}if(t.defined(e._offsetAttribute)){var we=S.length,ke=new Uint8Array(we/3),Pe=e._offsetAttribute===f.GeometryOffsetAttribute.NONE?0:1;f.arrayFill(ke,Pe),me.applyOffset=new s.GeometryAttribute({componentDatatype:m.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:ke})}return new s.Geometry({attributes:me,indices:J,primitiveType:s.PrimitiveType.TRIANGLES,boundingSphere:n.BoundingSphere.fromEllipsoid(pe),offsetAttribute:e._offsetAttribute})}}},x.getUnitEllipsoid=function(){return t.defined(b)||(b=x.createGeometry(new x({radii:new i.Cartesian3(1,1,1),vertexFormat:c.VertexFormat.POSITION_ONLY}))),b},e.EllipsoidGeometry=x}));
//# sourceMappingURL=EllipsoidGeometry-e3bd24e1.js.map
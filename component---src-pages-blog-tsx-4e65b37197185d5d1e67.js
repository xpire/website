(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"1GPU":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return v}));a("0mN4"),a("Z2Ku"),a("L9s1");var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),l=a("9eSz"),s=a.n(l),o=a("tRbT"),d=a("vOnD"),c=a("Dcue"),u=a("93Pc"),f=a("fi54"),g=a("SrJV"),p=a.n(g),m=d.b.article.withConfig({displayName:"blog__StyledArticle",componentId:"sc-1j8zk59-0"})(["display:flex;flex-direction:row;@media (max-width:500px){flex-direction:column;text-align:center;}"]),h=d.b.div.withConfig({displayName:"blog__ThumbnailDiv",componentId:"sc-1j8zk59-1"})(["padding:1rem 0rem;"]),b=d.b.div.withConfig({displayName:"blog__ContentDiv",componentId:"sc-1j8zk59-2"})(["padding:1rem;text-align:left;"]),y=d.b.h3.withConfig({displayName:"blog__StyledH3",componentId:"sc-1j8zk59-3"})(["margin-top:0px;"]);t.default=function(e){var t=e.data.allMarkdownRemark.edges,a=Object(r.useState)({filteredData:t,query:""}),l=a[0],d=a[1];return i.a.createElement(c.a,null,i.a.createElement("h2",null,"Blog"),i.a.createElement(n.a,{to:"/blog/tags"},"See all tags"),i.a.createElement("p",null,"Here are some things I have written about:"),i.a.createElement(f.c,{type:"text","aria-label":"Search",label:"Search Posts",onChange:function(e){var a=e.target.value.toLowerCase(),r=t.filter((function(e){var t=e.node.frontmatter,r=t.description,i=t.title,n=t.tags;return r&&r.toLowerCase().includes(a)||i&&i.toLowerCase().includes(a)||n&&n.join("").toLowerCase().includes(a)}));d({filteredData:r,query:a})}}),l.filteredData.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return i.a.createElement(m,{key:t.fields.slug},i.a.createElement(h,null,i.a.createElement(n.a,{to:t.fields.slug},t.frontmatter.thumbnail?i.a.createElement(s.a,{fixed:t.frontmatter.thumbnail.childImageSharp.fixed}):i.a.createElement("img",{style:{maxWidth:"200px",maxHeight:"200px",minWidth:"200px",minHeight:"200px"},src:p.a}))),i.a.createElement(b,null,i.a.createElement("header",null,i.a.createElement(y,null,i.a.createElement(n.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),i.a.createElement(o.a,{container:!0,spacing:1},t.frontmatter.tags.map((function(e){return i.a.createElement(o.a,{key:e,item:!0},i.a.createElement(u.a,{link:e}))}))),i.a.createElement("small",null,t.frontmatter.date)),i.a.createElement("section",null,i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))))})))};var v="2480369264"},"6VaU":function(e,t,a){"use strict";var r=a("XKFU"),i=a("xF/b"),n=a("S/j/"),l=a("ne8i"),s=a("2OiF"),o=a("zRwo");r(r.P,"Array",{flatMap:function(e){var t,a,r=n(this);return s(e),t=l(r.length),a=o(r,0),i(a,r,r,t,0,1,e,arguments[1]),a}}),a("nGyu")("flatMap")},"7VC1":function(e,t,a){"use strict";var r=a("XKFU"),i=a("Lgjv"),n=a("ol8x"),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);r(r.P+r.F*l,"String",{padEnd:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},"93Pc":function(e,t,a){"use strict";a("tUrg");var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),l=a("LvDl"),s=a("fi54");t.a=function(e){var t=e.link,a=e.label;return i.a.createElement(s.a,{label:void 0===a?t:a,size:"small",onClick:function(){return Object(n.b)("/blog/tags/"+Object(l.kebabCase)(t))}})}},"9XZr":function(e,t,a){"use strict";var r=a("XKFU"),i=a("Lgjv"),n=a("ol8x"),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);r(r.P+r.F*l,"String",{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),l=r(a("XEEL")),s=r(a("uDP2")),o=r(a("j8BX")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=g(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+l+s+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=d.default.createElement(C,(0,o.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?d.default.createElement("picture",null,i(r),s):s})),C=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var P=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=g(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,w=e.loading,I=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,o.default)({opacity:R?1:0,transition:P?"opacity "+y+"ms":"none"},s),V="boolean"==typeof b?"lightgray":b,j={transitionDelay:y+"ms"},H=(0,o.default)({opacity:this.state.imgLoaded?0:1},P&&j,s,f),N={title:t,alt:this.state.isVisible?"":a,style:H,className:g,itemProp:S};if(m){var T=m,M=p(m);return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),V&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&j)}),M.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:N,imageVariants:T,generateSources:L}),M.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:N,imageVariants:T,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,E(T),d.default.createElement(C,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:w},M,{imageVariants:T}))}}))}if(h){var W=h,q=p(h),_=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete _.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},V&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},P&&j)}),q.base64&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:N,imageVariants:W,generateSources:L}),q.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:N,imageVariants:W,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,E(W),d.default.createElement(C,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:w},q,{imageVariants:W}))}}))}return null},t}(d.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function j(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}P.propTypes={resolutions:k,sizes:V,fixed:j(c.default.oneOfType([k,c.default.arrayOf(k)])),fluid:j(c.default.oneOfType([V,c.default.arrayOf(V)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var H=P;t.default=H},Dcue:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("vOnD"),l=a("ZMKu"),s=Object(n.b)(l.c.main).withConfig({displayName:"Main__StyledMain",componentId:"g563ps-0"})(["padding:0px 10px;"]);t.a=function(e){var t=e.children;return i.a.createElement(s,null,t)}},I74W:function(e,t,a){"use strict";a("qncB")("trimLeft",(function(e){return function(){return e(this,1)}}),"trimStart")},Lgjv:function(e,t,a){var r=a("ne8i"),i=a("l0Rn"),n=a("vhPU");e.exports=function(e,t,a,l){var s=String(n(e)),o=s.length,d=void 0===a?" ":String(a),c=r(t);if(c<=o||""==d)return s;var u=c-o,f=i.call(d,Math.ceil(u/d.length));return f.length>u&&(f=f.slice(0,u)),l?f+s:s+f}},SPin:function(e,t,a){"use strict";var r=a("XKFU"),i=a("eyMr");r(r.P+r.F*!a("LyE8")([].reduceRight,!0),"Array",{reduceRight:function(e){return i(this,e,arguments.length,arguments[1],!0)}})},SrJV:function(e,t,a){e.exports=a.p+"static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png"},YuTi:function(e,t,a){a("HAE/"),e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},bHtr:function(e,t,a){var r=a("XKFU");r(r.P,"Array",{fill:a("Nr18")}),a("nGyu")("fill")},fA63:function(e,t,a){"use strict";a("qncB")("trimRight",(function(e){return function(){return e(this,2)}}),"trimEnd")},"xF/b":function(e,t,a){"use strict";var r=a("EWmC"),i=a("0/R4"),n=a("ne8i"),l=a("m0Pp"),s=a("K0xU")("isConcatSpreadable");e.exports=function e(t,a,o,d,c,u,f,g){for(var p,m,h=c,b=0,y=!!f&&l(f,g,3);b<d;){if(b in o){if(p=y?y(o[b],b,a):o[b],m=!1,i(p)&&(m=void 0!==(m=p[s])?!!m:r(p)),m&&u>0)h=e(t,a,p,n(p.length),h,u-1)-1;else{if(h>=9007199254740991)throw TypeError();t[h]=p}h++}b++}return h}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-4e65b37197185d5d1e67.js.map
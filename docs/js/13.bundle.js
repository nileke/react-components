(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1066:function(e,t,n){var a=n(1067);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(58)(a,o);a.locals&&(e.exports=a.locals)},1067:function(e,t,n){(e.exports=n(54)(!1)).push([e.i,".div-tag {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n",""])},1068:function(e,t){e.exports='<hr>\n<p>title: Image\ncomponentid: component-image\nvariantid: default</p>\n<h2 id="guid-image-guid-default-component-react">guid: &#39;image-guid-default-component-react&#39;</h2>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Image Holder Component\nComponent: &quot;Image&quot;\nSelector: &quot;&lt;Image/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Image&quot;\nType: Other Component</code></pre>\n<h2 id="element-information">Element information</h2>\n<p>This React component supports customization and configurations. The component name is <code>Image</code> and the selector is <code>&lt;Image/&gt;</code>.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;Image\n    src={imgSrc}\n    width=&quot;100%&quot;\n    height=&quot;200px&quot;\n/&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Descrition</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>src</td>\n<td><code>string</code></td>\n<td>your image source, it can be string or required then pass value</td>\n</tr>\n<tr>\n<td>width</td>\n<td><code>string</code></td>\n<td>this is css width such as 100% or 300px</td>\n</tr>\n<tr>\n<td>height</td>\n<td><code>string</code></td>\n<td>this is css height such as 100% or 300px</td>\n</tr>\n<tr>\n<td>onClick?</td>\n<td><code>(event: any) =&gt; void</code></td>\n<td>click action with event</td>\n</tr>\n<tr>\n<td>onLoad?</td>\n<td><code>(event: any) =&gt; void</code></td>\n<td>only works with <code>img</code> tag and returns when image is laoded</td>\n</tr>\n<tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>custom class</td>\n</tr>\n<tr>\n<td>useImgTag?</td>\n<td><code>boolean</code></td>\n<td>this will switch between <code>div</code> and <code>img</code> tags. default is <code>div</code></td>\n</tr>\n</tbody></table>\n<p>:::iframe(<a href="https://github.sebank.se/pages/DesignLibrary/ReactComponents/#/image?mode=DL">https://github.sebank.se/pages/DesignLibrary/ReactComponents/#/image?mode=DL</a>, 240)</p>\n'},1124:function(e,t,n){"use strict";n.r(t);var a=n(36),o=n(0),i=(n(1066),function(e){return o.createElement(o.Fragment,null,!e.useImgTag&&o.createElement("div",{className:"div-tag "+(e.className?e.className:""),style:{backgroundImage:"url("+e.src+")",width:e.width,height:e.height},onClick:e.onClick}),e.useImgTag&&o.createElement("img",{className:"img-tag "+(e.className?e.className:""),src:e.src,style:{width:e.width,height:e.height},onClick:e.onClick,onLoad:e.onLoad}))}),d=n(399),r=n(400).default,s=n(1068),c=n(443),l=function(e){function t(t){return e.call(this,t)||this}return a.b(t,e),t.prototype.render=function(){var e=Object(d.a)(this.props.location.search,"mode");return o.createElement("div",{className:"route-template "+("dl"===e||"DL"===e?"brief":"")},o.createElement("div",{className:"info-holder"},o.createElement("div",{className:"info"},o.createElement("div",{className:"md-file"},o.createElement(r,{innerHTML:!0},s))),o.createElement("div",{className:"info"},o.createElement("h2",null,"Output"),o.createElement("p",null,'Here are sample outputs using "div" tag (default)'),o.createElement("div",{className:"result"},o.createElement(i,{src:c,width:"100%",height:"200px"})),o.createElement("p",null,'Here are sample outputs using "img" tag'),o.createElement("div",{className:"result"},o.createElement(i,{src:c,width:"100%",useImgTag:!0,height:"200px",onLoad:function(e){console.log("img loaded")}})))))},t}(o.Component);t.default=l},399:function(e,t,n){"use strict";function a(e,t){var n=RegExp("[?&]"+t+"=([^&]*)").exec(e);return n&&decodeURIComponent(n[1].replace(/\+/g," "))}n.d(t,"a",function(){return a})},443:function(e,t,n){e.exports=n.p+"assets/images/cat-pet-animal-1.jpeg"}}]);
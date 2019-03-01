(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1081:function(e,n,t){var i=t(1082);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(58)(i,o);i.locals&&(e.exports=i.locals)},1082:function(e,n,t){(e.exports=t(54)(!1)).push([e.i,".custom-inline-link {\n  color: #0092E1;\n  font-weight: 500;\n  cursor: pointer; }\n  .custom-inline-link:hover {\n    text-decoration: underline;\n    color: #41B0EE; }\n",""])},1083:function(e,n){e.exports='<hr>\n<p>title: Inline Link\ncomponentid: component-inlinelinks\nvariantid: default</p>\n<h2 id="guid-inlinelinks-guid-default-component-react">guid: &#39;inlinelinks-guid-default-component-react&#39;</h2>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Inline Link Component\nComponent: &quot;InlineLink&quot;\nSelector: &quot;&lt;InlineLink/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/InlineLink&quot;\nType: Other Component</code></pre>\n<h2 id="element-information">Element information</h2>\n<p>This React component replaces anchor tags. The component name is <code>InlineLink</code> and the selector is <code>&lt;InlineLink/&gt;</code>. Use it as a normal anchor tag except that you don&#39;t pass <code>href</code>, instead, you should pass an <code>onClick</code> handler to do any desired action.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;InlineLink onClick={clickHandler}&gt;Some text&lt;/InlineLink&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Descrition</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>onClick?</td>\n<td><code>()=&gt;void</code></td>\n<td>Click handler</td>\n</tr>\n<tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>Custom class</td>\n</tr>\n</tbody></table>\n<p>:::iframe(<a href="https://github.sebank.se/pages/DesignLibrary/ReactComponents/#/inlinelink?mode=DL">https://github.sebank.se/pages/DesignLibrary/ReactComponents/#/inlinelink?mode=DL</a>, 60)</p>\n'},1119:function(e,n,t){"use strict";t.r(n);var i=t(36),o=t(0),a=(t(1081),function(e){return o.createElement("span",{className:"custom-inline-link"+(e.className?" "+e.className:""),onClick:function(){e.onClick&&e.onClick()}},e.children)}),r=t(399),c=t(400).default,l=t(1083),s=function(e){function n(n){return e.call(this,n)||this}return i.b(n,e),n.prototype.render=function(){var e=Object(r.a)(this.props.location.search,"mode");return o.createElement("div",{className:"route-template "+("dl"===e||"DL"===e?"brief":"")},o.createElement("div",{className:"info-holder"},o.createElement("div",{className:"info"},o.createElement("div",{className:"md-file"},o.createElement(c,{innerHTML:!0},l))),o.createElement("div",{className:"info"},o.createElement("h2",null,"Output"),o.createElement("p",null,"Here is a sample output"),o.createElement("div",{className:"result wide"},o.createElement("div",null,o.createElement(a,{onClick:function(){return alert("Redirect or do some other action")}},"Lorem ipsum")," dolor sit amet, consectetur adipiscing elit.")))))},n}(o.Component);n.default=s},399:function(e,n,t){"use strict";function i(e,n){var t=RegExp("[?&]"+n+"=([^&]*)").exec(e);return t&&decodeURIComponent(t[1].replace(/\+/g," "))}t.d(n,"a",function(){return i})}}]);
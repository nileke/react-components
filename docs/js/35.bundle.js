(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1113:function(e,t,n){"use strict";n.r(t);var o=n(36),a=n(0),c=n(142),r=n(399),d=n(400).default,s=n(880),i=a.createElement("svg",{id:"PIKTO_REGULAR",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 170 170"},a.createElement("title",null,"regular_black"),a.createElement("path",{d:"M137.5,102.1V40.4a3,3,0,0,0-3-3H8a3,3,0,0,0-3,3v61.7a3,3,0,0,0,3,3H134.5A3,3,0,0,0,137.5,102.1ZM112,91.3v7.7H30.5V91.3a3,3,0,0,0-3-3,6.1,6.1,0,0,1-6.1-6.1,3,3,0,0,0-3-3H11V63h7.5a3,3,0,0,0,3-3,6.1,6.1,0,0,1,6.1-6.1,3,3,0,0,0,3-3V43.4H112v7.5a3,3,0,0,0,3,3A6.1,6.1,0,0,1,121,60a3,3,0,0,0,3,3h7.5V79.3H124a3,3,0,0,0-3,3,6.1,6.1,0,0,1-6.1,6.1A3,3,0,0,0,112,91.3ZM131.5,57h-4.9a12.1,12.1,0,0,0-8.7-8.7V43.4h13.6ZM24.5,43.4v4.9A12.1,12.1,0,0,0,15.9,57H11V43.4ZM11,85.3h4.9A12.1,12.1,0,0,0,24.5,94v5.1H11ZM118,99.1V94a12.1,12.1,0,0,0,8.7-8.7h4.9V99.1Z"}),a.createElement("path",{d:"M151.3,115.8V54.2h-6v58.7H21.7v6H148.3A3,3,0,0,0,151.3,115.8Z"}),a.createElement("path",{d:"M159,67.9v58.7H35.5v6H162a3,3,0,0,0,3-3V67.9Z"}),a.createElement("path",{d:"M71.3,88.8A17.5,17.5,0,1,1,88.8,71.3,17.5,17.5,0,0,1,71.3,88.8Zm0-29A11.5,11.5,0,1,0,82.8,71.3,11.5,11.5,0,0,0,71.3,59.8Z"})),l=function(e){function t(t){return e.call(this,t)||this}return o.b(t,e),t.prototype.render=function(){var e=Object(r.a)(this.props.location.search,"mode");return a.createElement("div",{className:"route-template "+("dl"===e||"DL"===e?"brief":"")},a.createElement("div",{className:"info-holder"},a.createElement("div",{className:"info"},a.createElement("div",{className:"md-file"},a.createElement(d,{innerHTML:!0},s))),a.createElement("div",{className:"info"},a.createElement("h2",null,"Output"),a.createElement("p",null,"Here are sample outputs"),a.createElement("div",{className:"result"},a.createElement(c.a,{src:i})))))},t}(a.Component);t.default=l},399:function(e,t,n){"use strict";function o(e,t){var n=RegExp("[?&]"+t+"=([^&]*)").exec(e);return n&&decodeURIComponent(n[1].replace(/\+/g," "))}n.d(t,"a",function(){return o})},880:function(e,t){e.exports='<hr>\n<p>title: Icon\ncomponentid: component-faicon\nvariantid: default</p>\n<h2 id="guid-icon-guid-default-component-react">guid: &#39;icon-guid-default-component-react&#39;</h2>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Icon Component\nComponent: &quot;Icon&quot;\nSelector: &quot;&lt;Icon/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Icon&quot;\nType: Other Component</code></pre>\n<h2 id="element-information">Element information</h2>\n<p>This is a SVG code base component. The component name is <code>Icon</code> and the selector is <code>&lt;Icon/&gt;</code>. This component support custom svg icon, which can be fully style via css classes. We use SVG code directly as we can change its color or size at any moment, like when you are hover over. Rememer to change the color of SVG, you should target svg and use <code>fill</code> property instead of <code>color</code>.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;Icon src={&lt;svg..... /&gt;} /&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Descrition</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>src</td>\n<td><code>any</code></td>\n<td>A component which returns a <code>svg</code> or a svg directly.</td>\n</tr>\n<tr>\n<td>className?</td>\n<td><code>number</code></td>\n<td>Custom class can be passed here</td>\n</tr>\n<tr>\n<td>onClick?</td>\n<td><code>() =&gt; void</code></td>\n<td>Click action</td>\n</tr>\n<tr>\n<td>title?</td>\n<td><code>string</code></td>\n<td>HTML element title shown on hover and wait</td>\n</tr>\n<tr>\n<td>size?</td>\n<td><code>number</code></td>\n<td>Icon size to be applied to both dimentions (width and height)</td>\n</tr>\n</tbody></table>\n<p>:::iframe(<a href="https://github.sebank.se/pages/DesignLibrary/ReactComponents/#/icons?mode=DL">https://github.sebank.se/pages/DesignLibrary/ReactComponents/#/icons?mode=DL</a>, 70)</p>\n'}}]);
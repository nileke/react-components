(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1057:function(t,e){t.exports='<p>****---\ntitle: Tabs\ncomponentid: component-tab\nvariantid: default\nguid: &#39;tab-guid-default-component-react&#39;</p>\n<hr>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Tabs Component\nComponent: &quot;Tabs&quot;\nSelector: &quot;&lt;Tabs/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Tabs&quot;\nType: Form Component</code></pre>\n<h2 id="element-information">Element Information</h2>\n<p>This Angular component is based on SEB Bootstrap style. Supports customization and configurations. The module name of this component is <code>Tabs</code> and the selector is <code>&lt;Tabs/&gt;</code>.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;Tabs\n      list={tabsListObj}\n      activeTab={index}\n      onClick={clickHandler}\n/&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>activeTab</td>\n<td><code>number</code></td>\n<td>Index of the the current active tab</td>\n</tr>\n<tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>Custom class</td>\n</tr>\n<tr>\n<td>id?</td>\n<td><code>string</code></td>\n<td>Element id</td>\n</tr>\n<tr>\n<td>list</td>\n<td><code>Array&lt;TabsListItem&gt;</code><sup>1</sup></td>\n<td>List of tabs</td>\n</tr>\n<tr>\n<td>onClick</td>\n<td><code>(index: number)=&gt;void</code></td>\n<td>Tab click handler, passes the index of the clicked tab</td>\n</tr>\n</tbody></table>\n<h2 id="footnote">Footnote</h2>\n<ol>\n<li><code>list</code> has an exported interface named <code>TabsListItem</code><pre><code class="language-typescript">{\n   text: string;\n   disabled?: boolean;\n}</code></pre>\n</li>\n</ol>\n'},170:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(453),o=n(444).default,s=n(1057),c=[{text:"First"},{text:"Second"},{text:"Third"},{text:"Fourth",disabled:!0}],r=["First tab content","Second tab content","Third tab content","Fourth tab content"];e.default=function(){var t=a.useState(0),e=t[0],n=t[1];return a.createElement("div",{className:"route-template container"},a.createElement("div",{className:"info-holder"},a.createElement("div",{className:"info"},a.createElement("div",{className:"md-file"},a.createElement(o,{innerHTML:!0},s))),a.createElement("div",{className:"info"},a.createElement("h2",null,"Output"),a.createElement("p",null,"Here are sample outputs"),a.createElement("div",{className:"result wide"},a.createElement(i.a,{list:c,activeTab:e,onClick:function(t){return n(t)}}),a.createElement("div",{className:"content"},e>=0&&a.createElement("p",null,r[e]))))))}},453:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(0),i=(n(454),function(t){var e=[];return a.createElement("div",{className:"custom-tabs"+(t.className?" "+t.className:""),id:t.id},a.createElement("ul",{className:"nav nav-tabs",role:"tablist","aria-label":"tabs"},t.list&&t.list.map((function(n,i){return a.createElement("li",{key:i,className:"nav-item"+(i===t.activeTab?" active":"")+(n.disabled?" disabled":"")},a.createElement("a",{className:"nav-link"+(i===t.activeTab?" active":"")+(n.disabled?" disabled":""),onClick:function(e){return function(e,n){t.onClick&&!t.list[n].disabled&&t.onClick(n)}(0,i)},onKeyDown:function(n){return function(n,a){if(t.activeTab<t.list.length&&t.activeTab>=0){var i=t.list[t.activeTab-1]&&!t.list[t.activeTab-1].disabled;if(("arrowleft"===n.key.toLowerCase()||"arrowdown"===n.key.toLowerCase())&&i&&t.onClick)(o=e[t.activeTab-1]).setAttribute("aria-selected","true"),o.setAttribute("tabIndex","0"),o.setAttribute("class","nav-link active"),o.focus(),t.onClick(t.activeTab-1);else if("arrowright"!==n.key.toLowerCase()&&"arrowup"!==n.key.toLowerCase()||t.list[t.activeTab+1].disabled||!t.onClick){if("enter"===n.key.toLowerCase()||" "===n.key||"space"===n.key.toLowerCase()){(o=e[a]).setAttribute("aria-selected","true"),o.setAttribute("tabIndex","0"),o.setAttribute("class","nav-link active"),o.focus(),t.onClick(a)}}else{var o;(o=e[t.activeTab+1]).setAttribute("aria-selected","true"),o.setAttribute("tabIndex","0"),o.setAttribute("class","nav-link active"),o.focus(),t.onClick(t.activeTab+1)}}}(n,i)},role:"tab","aria-selected":i===t.activeTab,"aria-controls":"link-"+n.text,ref:function(t){e[i]=t},tabIndex:0},n.text))}))))})},454:function(t,e,n){var a=n(455);"string"==typeof a&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};n(58)(a,i);a.locals&&(t.exports=a.locals)},455:function(t,e,n){(t.exports=n(53)(!1)).push([t.i,".custom-tabs .nav-tabs .nav-item:not(.active) .nav-link{color:#41B0EE;cursor:pointer}.custom-tabs .nav-tabs .nav-item.disabled .nav-link{cursor:default;color:#868686}\n",""])}}]);
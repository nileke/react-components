(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{181:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s(59),o=s(865),r=(s(959),s(961),function(t){function e(e){return t.call(this,e)||this}return Object(a.b)(e,t),e.prototype.renderChart=function(t){switch(t){case"line":return n.createElement(o.e,{data:this.props.data,options:this.props.options,onElementsClick:this.props.onClick});case"bar":return n.createElement(o.a,{data:this.props.data,options:this.props.options,onElementsClick:this.props.onClick});case"horizontalBar":return n.createElement(o.d,{data:this.props.data,options:this.props.options,onElementsClick:this.props.onClick});case"pie":return n.createElement(o.f,{data:this.props.data,options:this.props.options,onElementsClick:this.props.onClick});case"doughnut":return n.createElement(o.c,{data:this.props.data,options:this.props.options,onElementsClick:this.props.onClick});case"polar":return n.createElement(o.g,{data:this.props.data,options:this.props.options,onElementsClick:this.props.onClick});case"radar":return n.createElement(o.h,{data:this.props.data,options:this.props.options,onElementsClick:this.props.onClick});case"bubble":return n.createElement(o.b,{data:this.props.data,options:this.props.options,onElementsClick:this.props.onClick});case"scatter":return n.createElement(o.i,{data:this.props.data,options:this.props.options,onElementsClick:this.props.onClick});default:return n.createElement("div",null,"Unknown chart type")}},e.prototype.render=function(){return n.createElement("div",{className:"chart-wrapper "+(this.props.className?this.props.className:""),id:this.props.id},this.renderChart(this.props.chartType))},e}(n.Component)),i=s(444).default,c=s(967);e.default=function(){function t(){return Math.round(100*Math.random())}var e={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",data:[65,59,80,81,56,55,40],backgroundColor:"rgba(255,99,132,0.5)"}]},s={datasets:[{data:[t(),t(),t(),t()],backgroundColor:["#ff6384","#36a2eb","#cc65fe","#ffce56"],label:"Pie Dataset 1"}],labels:["value 1","value 2","value 3","value 4"]},a={responsive:!0,maintainAspectRatio:!1};return n.createElement("div",{className:"route-template container"},n.createElement("div",{className:"info-holder"},n.createElement("div",{className:"info"},n.createElement("div",{className:"md-file"},n.createElement(i,{innerHTML:!0},c))),n.createElement("div",{className:"info"},n.createElement("h2",null,"Output"),n.createElement("p",null,"Here are sample outputs pie chart"),n.createElement("div",{className:"result wide chart"},n.createElement(r,{chartType:"pie",data:s,options:a,onClick:function(t){console.log("On cliking on chart",t)}})),n.createElement("p",null,"Here are sample outputs line chart"),n.createElement("div",{className:"result wide chart"},n.createElement(r,{chartType:"line",data:e,options:a,onClick:function(t){console.log("On cliking on chart",t)}})),n.createElement("p",null,"Here are sample outputs bar chart"),n.createElement("div",{className:"result wide chart"},n.createElement(r,{chartType:"bar",data:e,options:a})),n.createElement("p",null,"Here are sample outputs bar chart"),n.createElement("div",{className:"result wide chart"},n.createElement(r,{chartType:"line",data:e,options:{responsive:!0,maintainAspectRatio:!1,annotation:{annotations:[{drawTime:"afterDraw",type:"line",id:"a-line-1",mode:"vertical",scaleID:"y-axis-0",value:25,borderColor:"#406980",borderWidth:2,label:{fontStyle:"normal",fontSize:"14",backgroundColor:"#406980",position:"top",content:"Annotaion",enabled:!0}}]}}})))))}},626:function(t,e,s){var n={"./af":464,"./af.js":464,"./ar":465,"./ar-dz":466,"./ar-dz.js":466,"./ar-kw":467,"./ar-kw.js":467,"./ar-ly":468,"./ar-ly.js":468,"./ar-ma":469,"./ar-ma.js":469,"./ar-sa":470,"./ar-sa.js":470,"./ar-tn":471,"./ar-tn.js":471,"./ar.js":465,"./az":472,"./az.js":472,"./be":473,"./be.js":473,"./bg":474,"./bg.js":474,"./bm":475,"./bm.js":475,"./bn":476,"./bn.js":476,"./bo":477,"./bo.js":477,"./br":478,"./br.js":478,"./bs":479,"./bs.js":479,"./ca":480,"./ca.js":480,"./cs":481,"./cs.js":481,"./cv":482,"./cv.js":482,"./cy":483,"./cy.js":483,"./da":484,"./da.js":484,"./de":485,"./de-at":486,"./de-at.js":486,"./de-ch":487,"./de-ch.js":487,"./de.js":485,"./dv":488,"./dv.js":488,"./el":489,"./el.js":489,"./en-SG":490,"./en-SG.js":490,"./en-au":491,"./en-au.js":491,"./en-ca":492,"./en-ca.js":492,"./en-gb":493,"./en-gb.js":493,"./en-ie":494,"./en-ie.js":494,"./en-il":495,"./en-il.js":495,"./en-nz":496,"./en-nz.js":496,"./eo":497,"./eo.js":497,"./es":498,"./es-do":499,"./es-do.js":499,"./es-us":500,"./es-us.js":500,"./es.js":498,"./et":501,"./et.js":501,"./eu":502,"./eu.js":502,"./fa":503,"./fa.js":503,"./fi":504,"./fi.js":504,"./fo":505,"./fo.js":505,"./fr":506,"./fr-ca":507,"./fr-ca.js":507,"./fr-ch":508,"./fr-ch.js":508,"./fr.js":506,"./fy":509,"./fy.js":509,"./ga":510,"./ga.js":510,"./gd":511,"./gd.js":511,"./gl":512,"./gl.js":512,"./gom-latn":513,"./gom-latn.js":513,"./gu":514,"./gu.js":514,"./he":515,"./he.js":515,"./hi":516,"./hi.js":516,"./hr":517,"./hr.js":517,"./hu":518,"./hu.js":518,"./hy-am":519,"./hy-am.js":519,"./id":520,"./id.js":520,"./is":521,"./is.js":521,"./it":522,"./it-ch":523,"./it-ch.js":523,"./it.js":522,"./ja":524,"./ja.js":524,"./jv":525,"./jv.js":525,"./ka":526,"./ka.js":526,"./kk":527,"./kk.js":527,"./km":528,"./km.js":528,"./kn":529,"./kn.js":529,"./ko":530,"./ko.js":530,"./ku":531,"./ku.js":531,"./ky":532,"./ky.js":532,"./lb":533,"./lb.js":533,"./lo":534,"./lo.js":534,"./lt":535,"./lt.js":535,"./lv":536,"./lv.js":536,"./me":537,"./me.js":537,"./mi":538,"./mi.js":538,"./mk":539,"./mk.js":539,"./ml":540,"./ml.js":540,"./mn":541,"./mn.js":541,"./mr":542,"./mr.js":542,"./ms":543,"./ms-my":544,"./ms-my.js":544,"./ms.js":543,"./mt":545,"./mt.js":545,"./my":546,"./my.js":546,"./nb":547,"./nb.js":547,"./ne":548,"./ne.js":548,"./nl":549,"./nl-be":550,"./nl-be.js":550,"./nl.js":549,"./nn":551,"./nn.js":551,"./pa-in":552,"./pa-in.js":552,"./pl":553,"./pl.js":553,"./pt":554,"./pt-br":555,"./pt-br.js":555,"./pt.js":554,"./ro":556,"./ro.js":556,"./ru":557,"./ru.js":557,"./sd":558,"./sd.js":558,"./se":559,"./se.js":559,"./si":560,"./si.js":560,"./sk":561,"./sk.js":561,"./sl":562,"./sl.js":562,"./sq":563,"./sq.js":563,"./sr":564,"./sr-cyrl":565,"./sr-cyrl.js":565,"./sr.js":564,"./ss":566,"./ss.js":566,"./sv":567,"./sv.js":567,"./sw":568,"./sw.js":568,"./ta":569,"./ta.js":569,"./te":570,"./te.js":570,"./tet":571,"./tet.js":571,"./tg":572,"./tg.js":572,"./th":573,"./th.js":573,"./tl-ph":574,"./tl-ph.js":574,"./tlh":575,"./tlh.js":575,"./tr":576,"./tr.js":576,"./tzl":577,"./tzl.js":577,"./tzm":578,"./tzm-latn":579,"./tzm-latn.js":579,"./tzm.js":578,"./ug-cn":580,"./ug-cn.js":580,"./uk":581,"./uk.js":581,"./ur":582,"./ur.js":582,"./uz":583,"./uz-latn":584,"./uz-latn.js":584,"./uz.js":583,"./vi":585,"./vi.js":585,"./x-pseudo":586,"./x-pseudo.js":586,"./yo":587,"./yo.js":587,"./zh-cn":588,"./zh-cn.js":588,"./zh-hk":589,"./zh-hk.js":589,"./zh-tw":590,"./zh-tw.js":590};function a(t){var e=o(t);return s(e)}function o(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id=626},959:function(t,e,s){var n=s(960);"string"==typeof n&&(n=[[t.i,n,""]]);var a={insert:"head",singleton:!1};s(58)(n,a);n.locals&&(t.exports=n.locals)},960:function(t,e,s){(t.exports=s(53)(!1)).push([t.i,".chart-wrapper{position:relative;height:100%;width:100%}\n",""])},967:function(t,e){t.exports='<hr>\n<p>title: Chart\ncomponentid: component-chart\nvariantid: default\nguid: &quot;chart-guid-default-component-react&quot;</p>\n<hr>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Chart Component\nModule: &quot;Chart&quot;\nSelector: &quot;&lt;Chart/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Chart&quot;\nType: Other Component</code></pre>\n<h2 id="element-information">Element information</h2>\n<p>This React component is based on <code>Chart.js</code> with customization and configurations that comes with it. The module name of this component is <code>Chart</code> and the selector is <code>&lt;Chart/&gt;</code>. Please refer to their documantation regarding how to pass datasets, options, labels and so on.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;Chart chartType=&quot;line&quot; data=&quot;{data}&quot; options=&quot;{options}&quot; /&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>chartType</td>\n<td><code>ChartType</code><sup>1</sup></td>\n<td>Type of charts based on chat.js</td>\n</tr>\n<tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>Custom class</td>\n</tr>\n<tr>\n<td>data</td>\n<td><code>ChartData</code></td>\n<td>Chart data object from chart.js</td>\n</tr>\n<tr>\n<td>id?</td>\n<td><code>string</code></td>\n<td>Element id</td>\n</tr>\n<tr>\n<td>onClick?</td>\n<td><code>(event: React.MouseEvent&lt;HTMLElement&gt;) =&gt; void</code></td>\n<td>Click action</td>\n</tr>\n<tr>\n<td>options?</td>\n<td><code>ExtendedChartOptions</code></td>\n<td>Chart options object extended to support annotations</td>\n</tr>\n</tbody></table>\n<h2 id="reference">Reference</h2>\n<p>This component is a wrapper around <a href="https://www.npmjs.com/package/react-chartjs-2">react-chartjs-2</a>, which itself is based on <a href="http://www.chartjs.org">chart.js</a>, and as chartjs configuration is extandable via plugins, we have implemented the annotations via <a href="https://www.npmjs.com/package/chartjs-plugin-annotation">chartjs-plugin-annotation</a>. Further you should be able to add more plugin and pass new configrations via <code>options</code> property</p>\n<h2 id="footnote">footnote</h2>\n<ol>\n<li>Supported charts: <code>line</code>, <code>bar</code>, <code>horizontalBar</code>, <code>pie</code>, <code>doughnut</code>, <code>polar</code>, <code>radar</code>, <code>bubble</code>, <code>scatter</code></li>\n</ol>\n'}}]);
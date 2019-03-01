(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1131:function(e,t,n){"use strict";n.r(t);var o=n(36),l=n(0),a=(n(871),function(e){return l.createElement("div",{className:"form-group custom-toggle"+(e.className?" "+e.className:"")},l.createElement("div",{className:"toggle-btn"},l.createElement("input",{className:"toggle",id:e.name,name:e.name,type:"checkbox",checked:e.value,onChange:e.onChange,ref:e.reference}),l.createElement("label",{className:"toggle-switch",htmlFor:e.name},l.createElement("div",{className:"toggle-nob"}))),e.label&&l.createElement("div",{className:"toggle-label"},e.label))}),g=n(399),r=n(400).default,i=n(873),c=function(e){function t(t){var n=e.call(this,t)||this;return n.state={toggleValue:!0},n}return o.b(t,e),t.prototype.render=function(){var e=this,t=Object(g.a)(this.props.location.search,"mode");return l.createElement("div",{className:"route-template "+("dl"===t||"DL"===t?"brief":"")},l.createElement("div",{className:"info-holder"},l.createElement("div",{className:"info"},l.createElement("div",{className:"md-file"},l.createElement(r,{innerHTML:!0},i))),l.createElement("div",{className:"info"},l.createElement("h2",null,"Output"),l.createElement("p",null,"Here are sample outputs"),l.createElement("div",{className:"result"},l.createElement(a,{name:"myToggle",label:"Field label",value:this.state.toggleValue,onChange:function(t){e.setState({toggleValue:t.target.checked})}})))))},t}(l.Component);t.default=c},399:function(e,t,n){"use strict";function o(e,t){var n=RegExp("[?&]"+t+"=([^&]*)").exec(e);return n&&decodeURIComponent(n[1].replace(/\+/g," "))}n.d(t,"a",function(){return o})},871:function(e,t,n){var o=n(872);"string"==typeof o&&(o=[[e.i,o,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(58)(o,l);o.locals&&(e.exports=o.locals)},872:function(e,t,n){(e.exports=n(54)(!1)).push([e.i,".form-group.custom-toggle {\n  display: inline-flex;\n  align-items: center;\n  margin: 0;\n  height: 40px;\n  padding: 10px 15px; }\n  .form-group.custom-toggle .toggle-btn {\n    display: inline-flex;\n    align-items: center;\n    height: 20px; }\n    .form-group.custom-toggle .toggle-btn .toggle {\n      height: 20px;\n      display: none; }\n      .form-group.custom-toggle .toggle-btn .toggle + .toggle-switch {\n        background-color: #adadad;\n        -webkit-transition: all 0.4s ease;\n        -moz-transition: all 0.4s ease;\n        -o-transition: all 0.4s ease;\n        transition: all 0.4s ease;\n        outline: 0;\n        width: 40px;\n        height: 20px;\n        position: relative;\n        border-radius: 20px;\n        cursor: pointer;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        margin: 0.5px 0 0;\n        will-change: background-color;\n        -webkit-transition: background-color 200ms ease;\n        -moz-transition: background-color 200ms ease;\n        -o-transition: background-color 200ms ease;\n        transition: background-color 200ms ease;\n        display: inline-flex;\n        align-items: center; }\n        .form-group.custom-toggle .toggle-btn .toggle + .toggle-switch > .toggle-nob {\n          margin-left: 1px;\n          width: 18px;\n          height: 18px;\n          border-radius: 50%;\n          background: #f8f8f8;\n          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);\n          border: 3px solid #fff;\n          -webkit-transition: margin-left 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          -moz-transition: margin-left 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          -o-transition: margin-left 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n          transition: margin-left 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275); }\n        .form-group.custom-toggle .toggle-btn .toggle + .toggle-switch:hover > .toggle-nob {\n          background-color: #41B0EE; }\n        .form-group.custom-toggle .toggle-btn .toggle + .toggle-switch:active {\n          box-shadow: inset 0 0 0 2em #cecece; }\n      .form-group.custom-toggle .toggle-btn .toggle:checked + .toggle-switch {\n        background-color: #007AC7; }\n        .form-group.custom-toggle .toggle-btn .toggle:checked + .toggle-switch:active {\n          box-shadow: none; }\n        .form-group.custom-toggle .toggle-btn .toggle:checked + .toggle-switch > .toggle-nob {\n          margin-left: 21px; }\n  .form-group.custom-toggle .toggle-label {\n    display: inline-block;\n    height: 20px;\n    position: relative;\n    margin-left: 10px;\n    color: #000;\n    line-height: 1; }\n\n@-moz-document url-prefix() {\n  .form-group.custom-toggle .toggle-btn .toggle:checked + .toggle-switch:after {\n    margin-left: 19.5px; } }\n",""])},873:function(e,t){e.exports='<hr>\n<p>title: Toggle\ncomponentid: component-toggleswitch\nvariantid: default</p>\n<h2 id="guid-toggleswitch-guid-default-component-react">guid: &#39;toggleswitch-guid-default-component-react&#39;</h2>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Toggle Component\nComponent: &quot;Toggle&quot;\nSelector: &quot;&lt;Toggle/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Toggle&quot;\nType: Form Component</code></pre>\n<h2 id="element-information">Element information</h2>\n<p>This React component supports customization and configurations. The component name is <code>Toggle</code> and the selector is <code>&lt;Toggle/&gt;</code>.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;Toggle\n    name=&quot;myToggle&quot;\n    value={this.state.toggleValue}\n    onChange={(event) =&gt; { this.setState({ toggleValue: event.target.checked }); }}\n/&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Descrition</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>name</td>\n<td><code>string</code></td>\n<td>element name</td>\n</tr>\n<tr>\n<td>label?</td>\n<td><code>string</code></td>\n<td>Element label</td>\n</tr>\n<tr>\n<td>value</td>\n<td><code>boolean</code></td>\n<td>the value of the toggle</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td><code>(event: any) =&gt; void</code></td>\n<td>checkbox event</td>\n</tr>\n<tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>custom class</td>\n</tr>\n<tr>\n<td>reference?</td>\n<td><code>React.RefObject&lt;any&gt;</code></td>\n<td>React Ref obj</td>\n</tr>\n</tbody></table>\n<p>:::iframe(<a href="https://github.sebank.se/pages/DesignLibrary/ReactComponents/#/toggle?mode=DL">https://github.sebank.se/pages/DesignLibrary/ReactComponents/#/toggle?mode=DL</a>, 80)</p>\n'}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1073:function(e,t,n){"use strict";n.r(t);var o=n(36),c=n(0),r=(n(785),function(e){var t=e.id||e.name+"-"+(1e3*Math.random()+(new Date).getTime());return c.createElement("div",{className:"form-group custom-checkbox"+(e.inline?" inline":"")},c.createElement("div",{className:"input-field"+(e.className?" "+e.className:"")},e.topLabel&&c.createElement("label",{className:"checkbox-toplabel"},e.topLabel),c.createElement("div",{className:"custom-control"},c.createElement("input",{type:"checkbox",className:"custom-control-input",id:t,disabled:e.disabled,name:e.name,checked:e.checked,onChange:e.onChange,ref:e.reference}),e.label&&c.createElement("label",{className:"custom-control-label",htmlFor:t},e.label),e.description&&c.createElement("span",{className:"checkbox-description"},e.description)),e.error&&c.createElement("div",{className:"alert alert-danger"},e.error)))}),a=n(398),d=n(399).default,i=n(787),l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={checkbox1:!0,checkbox2:!1,checkbox3:!0},n}return o.b(t,e),t.prototype.render=function(){var e=this,t=Object(a.a)(this.props.location.search,"mode");return c.createElement("div",{className:"route-template "+("dl"===t||"DL"===t?"brief":"")},c.createElement("div",{className:"info-holder"},c.createElement("div",{className:"info"},c.createElement("div",{className:"md-file"},c.createElement(d,{innerHTML:!0},i))),c.createElement("div",{className:"info"},c.createElement("h2",null,"Output"),c.createElement("p",null,"Here are few checkboxes with different configurations:"),c.createElement("div",{className:"result"},c.createElement(r,{name:"checkbox-1",label:"Checkbox 1",checked:this.state.checkbox1,onChange:function(t){e.setState({checkbox1:t.target.checked})}}),c.createElement(r,{name:"checkbox-2",label:"Checkbox 2",checked:this.state.checkbox2,onChange:function(t){e.setState({checkbox2:t.target.checked})},description:"Some description"}),c.createElement(r,{name:"checkbox-3",label:"Checkbox 3",checked:this.state.checkbox3,onChange:function(t){e.setState({checkbox3:t.target.checked})},disabled:!0,description:"Disabled"})))))},t}(c.Component);t.default=l},398:function(e,t,n){"use strict";function o(e,t){var n=RegExp("[?&]"+t+"=([^&]*)").exec(e);return n&&decodeURIComponent(n[1].replace(/\+/g," "))}n.d(t,"a",function(){return o})},785:function(e,t,n){var o=n(786);"string"==typeof o&&(o=[[e.i,o,""]]);var c={hmr:!0,transform:void 0,insertInto:void 0};n(58)(o,c);o.locals&&(e.exports=o.locals)},786:function(e,t,n){(e.exports=n(54)(!1)).push([e.i,".form-group.custom-checkbox .input-field {\n  margin-bottom: 5px; }\n  .form-group.custom-checkbox .input-field .custom-control .custom-control-label,\n  .form-group.custom-checkbox .input-field .custom-control .custom-control-input {\n    cursor: pointer;\n    user-select: none; }\n  .form-group.custom-checkbox .input-field .custom-control .checkbox-description {\n    color: #868686;\n    display: inline-block;\n    margin-left: 8px; }\n\n.form-group.custom-checkbox.inline {\n  display: inline-block; }\n  .form-group.custom-checkbox.inline:not(:first-child) .custom-control {\n    margin-left: 15px; }\n\n.form-group.custom-checkbox .alert {\n  padding: 0px 2px;\n  margin: 0; }\n  .form-group.custom-checkbox .alert.alert-danger {\n    color: #F03529;\n    background: none;\n    border: none;\n    border-radius: 0px;\n    width: 100%; }\n",""])},787:function(e,t){e.exports='<hr>\n<p>title: Checkbox\ncomponentid: component-checkbox\nvariantid: default</p>\n<h2 id="guid-checkbox-guid-default-component-react">guid: &#39;checkbox-guid-default-component-react&#39;</h2>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: CheckBox Component\nComponent: &quot;CheckBox&quot;\nSelector: &quot;&lt;CheckBox/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/CheckBox&quot;\nType: Form Component</code></pre>\n<h2 id="element-information">Element information</h2>\n<p>This React component is based on SEB Bootstrap style. Supports customization and configurations. The component name is <code>CheckBox</code> and the selector is <code>&lt;CheckBox/&gt;</code>.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;CheckBox\n    name=&quot;checkbox&quot;\n    label=&quot;Checkbox label&quot;\n    checked={this.state.checkbox}\n    onChange={(event) =&gt; { this.setState({ checkbox: event.target.checked }); }}\n/&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Descrition</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>name</td>\n<td><code>string</code></td>\n<td>name property</td>\n</tr>\n<tr>\n<td>checked</td>\n<td><code>boolean</code></td>\n<td>the checked value</td>\n</tr>\n<tr>\n<td>label</td>\n<td><code>string</code></td>\n<td>checkbox label</td>\n</tr>\n<tr>\n<td>topLabel</td>\n<td><code>string</code></td>\n<td>a label which shows on top of component</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td><code>(event: any) =&gt; void</code></td>\n<td>on change action</td>\n</tr>\n<tr>\n<td>id?</td>\n<td><code>string</code></td>\n<td>id property</td>\n</tr>\n<tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>custom class</td>\n</tr>\n<tr>\n<td>disabled?</td>\n<td><code>boolean</code></td>\n<td>Disabled status</td>\n</tr>\n<tr>\n<td>description?</td>\n<td><code>string</code></td>\n<td>a option description</td>\n</tr>\n<tr>\n<td>error?</td>\n<td><code>string</code></td>\n<td>error message</td>\n</tr>\n<tr>\n<td>reference?</td>\n<td><code>React.RefObject&lt;any&gt;</code></td>\n<td>React Ref obj</td>\n</tr>\n</tbody></table>\n'}}]);
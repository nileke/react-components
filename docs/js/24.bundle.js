(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1116:function(e,r,t){"use strict";t.r(r);var n=t(36),o=t(0),s=(t(874),o.createElement("svg",{name:"angle-left",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192 512"},o.createElement("path",{d:"M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z"}))),i=o.createElement("svg",{name:"angle-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192 512"},o.createElement("path",{d:"M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"})),l=function(e){var r=e.min?e.min:0,t=e.max?e.max:100;e.value>t?e.onChange({target:{value:t}}):(e.value<r||null===e.value||void 0===e.value)&&e.onChange({target:{value:r}});var n=function(e){return(e-r)/(t-r)*100};return o.createElement("div",{className:"form-group custom-slider"+(e.className?" "+e.className:"")+(e.alternative?" alternative":"")},e.label&&o.createElement("label",{className:"custom-label"},e.label),o.createElement("div",{className:"input-field"+(e.labels&&e.labels.length?" has-labels":"")},o.createElement("input",{type:"range",name:e.name,min:r,max:t,step:e.step,value:e.value,onChange:e.onChange,ref:e.reference}),o.createElement("div",{className:"custom-slider-holder"+(e.theme?" "+e.theme:" primary")},o.createElement("div",{className:"custom-slider-track"},o.createElement("div",{className:"custom-slider-slider-before",style:{width:n(e.value)+"%"}}),o.createElement("div",{className:"custom-slider-slider-after",style:{width:100-n(e.value)+"%"}}),o.createElement("div",{className:"custom-slider-thumb",style:{left:n(e.value)+"%"}},o.createElement("div",{className:"custom-slider-preview"+(e.alwaysShowTooltip?" always-show":"")+(e.tooltipTheme?" "+e.tooltipTheme:" inverted")},e.value),o.createElement("span",{className:"custom-slider-icon-left"},s),o.createElement("span",{className:"custom-slider-icon-right"},i)),e.labels&&e.labels.length&&e.labels.map(function(r,t){return o.createElement("div",{key:t,className:"custom-slider-label"+(e.showTicks?" show-ticks":""),style:{left:n(r.position)+"%"}},r.text)})))),e.error&&o.createElement("div",{className:"alert alert-danger"},e.error))},d=t(399),a=t(400).default,u=t(876),c=function(e){function r(r){var t=e.call(this,r)||this;return t.sliderLabels=[{position:0,text:"0%"},{position:25,text:"25%"},{position:50,text:"50%"},{position:75,text:"75%"},{position:100,text:"100%"}],t.currencySliderLabels=[{position:1e4,text:"10 000 kr"},{position:2e4,text:"20 000 kr"},{position:3e4,text:"30 000 kr"}],t.state={slider:25,alternativeSlider:50,currencySlider:25e3},t}return n.b(r,e),r.prototype.render=function(){var e=this,r=Object(d.a)(this.props.location.search,"mode");return o.createElement("div",{className:"route-template "+("dl"===r||"DL"===r?"brief":"")},o.createElement("div",{className:"info-holder"},o.createElement("div",{className:"info"},o.createElement("div",{className:"md-file"},o.createElement(a,{innerHTML:!0},u))),o.createElement("div",{className:"info"},o.createElement("h2",null,"Output"),o.createElement("p",null,"Here are sample outputs"),o.createElement("div",{className:"result"},o.createElement(l,{value:this.state.slider,min:0,max:100,step:1,labels:this.sliderLabels,name:"normalSlider",onChange:function(r){e.setState({slider:r.target.value})}}))),o.createElement("div",{className:"info"},o.createElement("p",null,"Alternative version with the step set to 5"),o.createElement("div",{className:"result"},o.createElement(l,{value:this.state.alternativeSlider,min:0,max:100,step:5,name:"alternativeSlider",labels:this.sliderLabels,onChange:function(r){e.setState({alternativeSlider:r.target.value})},alternative:!0}))),o.createElement("div",{className:"info"},o.createElement("p",null,"Slider with label and error"),o.createElement("div",{className:"result"},o.createElement(l,{value:this.state.currencySlider,min:1e4,max:3e4,step:5e3,name:"advancedSlider",labels:this.currencySliderLabels,label:"Slider label",error:"Some error message",onChange:function(r){e.setState({currencySlider:r.target.value})}})))))},r}(o.Component);r.default=c},399:function(e,r,t){"use strict";function n(e,r){var t=RegExp("[?&]"+r+"=([^&]*)").exec(e);return t&&decodeURIComponent(t[1].replace(/\+/g," "))}t.d(r,"a",function(){return n})},874:function(e,r,t){var n=t(875);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(58)(n,o);n.locals&&(e.exports=n.locals)},875:function(e,r,t){(e.exports=t(54)(!1)).push([e.i,".form-group.custom-slider {\n  padding-right: 5px; }\n  .form-group.custom-slider label.custom-label:not(.form-check-label):not(.custom-checkbox):not(.custom-radio):not(.custom-control-label) {\n    display: block;\n    margin-bottom: 4px;\n    line-height: 1;\n    font-weight: normal;\n    font-size: 12px; }\n  .form-group.custom-slider .input-field {\n    position: relative; }\n    .form-group.custom-slider .input-field input[type=range] {\n      position: relative;\n      display: inline-block;\n      width: 100%;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      background: transparent;\n      cursor: pointer;\n      height: 15px;\n      margin-top: 10px;\n      margin-bottom: 7px; }\n      .form-group.custom-slider .input-field input[type=range]:focus, .form-group.custom-slider .input-field input[type=range]:active {\n        outline: 0;\n        box-shadow: none; }\n      .form-group.custom-slider .input-field input[type=range]::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        width: 56px;\n        height: 32px;\n        background: transparent;\n        border-radius: 4px;\n        border: 0;\n        outline: 0;\n        box-shadow: 0;\n        transform: translateY(-14px);\n        cursor: pointer; }\n      .form-group.custom-slider .input-field input[type=range]::-moz-range-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        width: 56px;\n        height: 32px;\n        background: transparent;\n        border-radius: 4px;\n        border: 0;\n        outline: 0;\n        box-shadow: 0;\n        transform: translateY(-14px);\n        cursor: pointer;\n        transform: none; }\n      .form-group.custom-slider .input-field input[type=range]::-ms-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        width: 56px;\n        height: 32px;\n        background: transparent;\n        border-radius: 4px;\n        border: 0;\n        outline: 0;\n        box-shadow: 0;\n        transform: translateY(-14px);\n        cursor: pointer; }\n      .form-group.custom-slider .input-field input[type=range]::-webkit-slider-runnable-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        background: transparent;\n        color: transparent;\n        border: 0;\n        outline: 0;\n        box-shadow: 0;\n        height: 5px; }\n      .form-group.custom-slider .input-field input[type=range]::-moz-range-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        background: transparent;\n        color: transparent;\n        border: 0;\n        outline: 0;\n        box-shadow: 0;\n        height: 5px; }\n      .form-group.custom-slider .input-field input[type=range]::-ms-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        background: transparent;\n        color: transparent;\n        border: 0;\n        outline: 0;\n        box-shadow: 0;\n        height: 5px; }\n      .form-group.custom-slider .input-field input[type=range]::-ms-tooltip {\n        display: none; }\n      .form-group.custom-slider .input-field input[type=range]::-ms-fill {\n        background-color: transparent; }\n      .form-group.custom-slider .input-field input[type=range]::-ms-fill-lower {\n        background-color: transparent;\n        border: 0; }\n      .form-group.custom-slider .input-field input[type=range]::-ms-ticks, .form-group.custom-slider .input-field input[type=range]::-ms-ticks-after, .form-group.custom-slider .input-field input[type=range]::-ms-ticks-after {\n        display: none;\n        color: transparent; }\n      .form-group.custom-slider .input-field input[type=range]:active:focus + .custom-slider-holder .custom-slider-thumb .custom-slider-preview:not(.always-show) {\n        display: block; }\n    .form-group.custom-slider .input-field .custom-slider-holder {\n      position: absolute;\n      top: 15px;\n      pointer-events: none;\n      padding: 0 28px;\n      right: 0;\n      left: 0;\n      height: 4px; }\n      .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track {\n        position: relative;\n        width: 100%;\n        height: 5px;\n        border-radius: 8px;\n        pointer-events: none;\n        z-index: 2;\n        top: 50%;\n        -webkit-transform: translateY(-50%);\n        -moz-transform: translateY(-50%);\n        -o-transform: translateY(-50%);\n        transform: translateY(-50%);\n        cursor: pointer; }\n        .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track [class^=custom-slider-slider-] {\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          height: 100%;\n          z-index: 2; }\n        .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-slider-before {\n          left: 0px;\n          background-color: #0092E1; }\n        .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-slider-after {\n          right: -2px;\n          background-color: #adadad; }\n        .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb {\n          position: relative;\n          height: 32px;\n          width: 56px;\n          background-color: #0092E1;\n          border-radius: 4px;\n          top: -14px;\n          -webkit-transform: translateX(-50%);\n          -moz-transform: translateX(-50%);\n          -o-transform: translateX(-50%);\n          transform: translateX(-50%);\n          pointer-events: none;\n          box-shadow: rgba(85, 85, 85, 0.4) 0 2px 5px;\n          -webkit-transition: all 50ms ease;\n          -moz-transition: all 50ms ease;\n          -o-transition: all 50ms ease;\n          transition: all 50ms ease;\n          z-index: 2; }\n          .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview {\n            pointer-events: none;\n            font-size: 14px;\n            padding: 0 10px;\n            display: none;\n            height: 25px;\n            white-space: nowrap;\n            position: absolute;\n            top: -30px;\n            text-align: center;\n            color: #fff;\n            border-radius: 5px;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            -webkit-transform: translateX(-49%);\n            -moz-transform: translateX(-49%);\n            -o-transform: translateX(-49%);\n            transform: translateX(-49%);\n            left: 50%; }\n            .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview:after {\n              content: ' ';\n              width: 0px;\n              height: 0px;\n              border: 8px solid;\n              position: absolute;\n              bottom: -15px;\n              left: 50%;\n              -webkit-transform: translateX(-50%);\n              -moz-transform: translateX(-50%);\n              -o-transform: translateX(-50%);\n              transform: translateX(-50%); }\n            .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.always-show {\n              display: block; }\n            .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.primary {\n              background-color: #007AC7; }\n              .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.primary:after {\n                border-color: #007AC7 transparent transparent transparent; }\n            .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.inverted {\n              background-color: #000; }\n              .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.inverted:after {\n                border-color: #000 transparent transparent transparent; }\n            .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.success {\n              background-color: #379D00; }\n              .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.success:after {\n                border-color: #379D00 transparent transparent transparent; }\n            .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.danger {\n              background-color: #BB000C; }\n              .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.danger:after {\n                border-color: #BB000C transparent transparent transparent; }\n            .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.warning {\n              background-color: #F8A000; }\n              .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.warning:after {\n                border-color: #F8A000 transparent transparent transparent; }\n            .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.purple {\n              background-color: #3F2587; }\n              .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview.purple:after {\n                border-color: #3F2587 transparent transparent transparent; }\n          .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb [class*=custom-slider-icon-] {\n            position: absolute;\n            top: 50%;\n            transform: translateY(-50%); }\n            .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb [class*=custom-slider-icon-] svg {\n              width: 12px;\n              fill: #fff; }\n          .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-icon-left {\n            left: 12px; }\n          .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-icon-right {\n            right: 12px; }\n        .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-label {\n          position: absolute;\n          top: 20px;\n          font-size: 12px;\n          white-space: nowrap;\n          -webkit-transform: translateX(-46%);\n          -moz-transform: translateX(-46%);\n          -o-transform: translateX(-46%);\n          transform: translateX(-46%); }\n          .form-group.custom-slider .input-field .custom-slider-holder .custom-slider-track .custom-slider-label.show-ticks:before {\n            content: '|';\n            position: absolute;\n            left: 50%;\n            -webkit-transform: translateX(-50%);\n            -moz-transform: translateX(-50%);\n            -o-transform: translateX(-50%);\n            transform: translateX(-50%);\n            top: -12px;\n            font-size: 8px;\n            line-height: 1;\n            font-weight: bold; }\n    .form-group.custom-slider .input-field.has-labels input[type=range] {\n      margin-bottom: 30px; }\n  .form-group.custom-slider.alternative .input-field input[type=range] {\n    height: 12px;\n    padding: 0 5px 0 7px;\n    margin-top: 9px; }\n    .form-group.custom-slider.alternative .input-field input[type=range]::-webkit-slider-thumb {\n      height: 12px;\n      width: 12px;\n      transform: none; }\n    .form-group.custom-slider.alternative .input-field input[type=range]::-moz-range-thumb {\n      height: 12px;\n      width: 12px; }\n    .form-group.custom-slider.alternative .input-field input[type=range]::-ms-thumb {\n      height: 12px;\n      width: 12px; }\n    .form-group.custom-slider.alternative .input-field input[type=range]::-webkit-slider-runnable-track {\n      height: 12px; }\n    .form-group.custom-slider.alternative .input-field input[type=range]::-moz-range-track {\n      height: 12px; }\n    .form-group.custom-slider.alternative .input-field input[type=range]::-ms-track {\n      height: 12px; }\n  .form-group.custom-slider.alternative .input-field .custom-slider-holder {\n    padding: 0 13px;\n    height: inherit; }\n    .form-group.custom-slider.alternative .input-field .custom-slider-holder .custom-slider-track {\n      height: 12px; }\n      .form-group.custom-slider.alternative .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb {\n        height: 27px;\n        width: 27px;\n        background-color: #fff;\n        border-radius: 50%;\n        top: -9px; }\n        .form-group.custom-slider.alternative .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb::after {\n          content: '';\n          border-radius: 50%;\n          position: absolute;\n          width: 75%;\n          height: 75%;\n          pointer-events: none;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%); }\n        .form-group.custom-slider.alternative .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb .custom-slider-preview {\n          left: 13px; }\n        .form-group.custom-slider.alternative .input-field .custom-slider-holder .custom-slider-track .custom-slider-thumb [class*=custom-slider-icon-] {\n          display: none; }\n      .form-group.custom-slider.alternative .input-field .custom-slider-holder .custom-slider-track .custom-slider-label.show-ticks:before {\n        top: -6px;\n        font-size: 8px; }\n  .form-group.custom-slider .alert {\n    padding: 0px 2px;\n    margin: 0; }\n    .form-group.custom-slider .alert.alert-danger {\n      color: #F03529;\n      background: none;\n      border: none;\n      border-radius: 0px;\n      width: 100%; }\n  .form-group.custom-slider .input-field .custom-slider-holder.primary .custom-slider-track .custom-slider-slider-before {\n    background-color: #0092E1; }\n  .form-group.custom-slider .input-field .custom-slider-holder.primary .custom-slider-track .custom-slider-thumb {\n    background-color: #0092E1;\n    border: 0; }\n    .form-group.custom-slider .input-field .custom-slider-holder.primary .custom-slider-track .custom-slider-thumb::after {\n      background-color: #007AC7; }\n  .form-group.custom-slider .input-field .custom-slider-holder.inverted .custom-slider-track .custom-slider-slider-before {\n    background-color: #000; }\n  .form-group.custom-slider .input-field .custom-slider-holder.inverted .custom-slider-track .custom-slider-thumb {\n    background-color: #000;\n    border: 0; }\n    .form-group.custom-slider .input-field .custom-slider-holder.inverted .custom-slider-track .custom-slider-thumb::after {\n      background-color: #000; }\n  .form-group.custom-slider .input-field .custom-slider-holder.success .custom-slider-track .custom-slider-slider-before {\n    background-color: #45B400; }\n  .form-group.custom-slider .input-field .custom-slider-holder.success .custom-slider-track .custom-slider-thumb {\n    background-color: #45B400;\n    border: 0; }\n    .form-group.custom-slider .input-field .custom-slider-holder.success .custom-slider-track .custom-slider-thumb::after {\n      background-color: #379D00; }\n  .form-group.custom-slider .input-field .custom-slider-holder.danger .custom-slider-track .custom-slider-slider-before {\n    background-color: #D81A1A; }\n  .form-group.custom-slider .input-field .custom-slider-holder.danger .custom-slider-track .custom-slider-thumb {\n    background-color: #D81A1A;\n    border: 0; }\n    .form-group.custom-slider .input-field .custom-slider-holder.danger .custom-slider-track .custom-slider-thumb::after {\n      background-color: #BB000C; }\n  .form-group.custom-slider .input-field .custom-slider-holder.warning .custom-slider-track .custom-slider-slider-before {\n    background-color: #FFB400; }\n  .form-group.custom-slider .input-field .custom-slider-holder.warning .custom-slider-track .custom-slider-thumb {\n    background-color: #FFB400;\n    border: 0; }\n    .form-group.custom-slider .input-field .custom-slider-holder.warning .custom-slider-track .custom-slider-thumb::after {\n      background-color: #F8A000; }\n  .form-group.custom-slider .input-field .custom-slider-holder.purple .custom-slider-track .custom-slider-slider-before {\n    background-color: #4F2C99; }\n  .form-group.custom-slider .input-field .custom-slider-holder.purple .custom-slider-track .custom-slider-thumb {\n    background-color: #4F2C99;\n    border: 0; }\n    .form-group.custom-slider .input-field .custom-slider-holder.purple .custom-slider-track .custom-slider-thumb::after {\n      background-color: #3F2587; }\n  .form-group.custom-slider.alternative .input-field .custom-slider-holder.primary .custom-slider-track .custom-slider-slider-before {\n    background-color: #0092E1; }\n  .form-group.custom-slider.alternative .input-field .custom-slider-holder.primary .custom-slider-track .custom-slider-thumb {\n    border: 1px solid #007AC7;\n    background-color: #fff; }\n    .form-group.custom-slider.alternative .input-field .custom-slider-holder.primary .custom-slider-track .custom-slider-thumb::after {\n      background-color: #007AC7; }\n  .form-group.custom-slider.alternative .input-field .custom-slider-holder.inverted .custom-slider-track .custom-slider-slider-before {\n    background-color: #000; }\n  .form-group.custom-slider.alternative .input-field .custom-slider-holder.inverted .custom-slider-track .custom-slider-thumb {\n    border: 1px solid #000;\n    background-color: #fff; }\n    .form-group.custom-slider.alternative .input-field .custom-slider-holder.inverted .custom-slider-track .custom-slider-thumb::after {\n      background-color: #000; }\n  .form-group.custom-slider.alternative .input-field .custom-slider-holder.success .custom-slider-track .custom-slider-slider-before {\n    background-color: #45B400; }\n  .form-group.custom-slider.alternative .input-field .custom-slider-holder.success .custom-slider-track .custom-slider-thumb {\n    border: 1px solid #379D00;\n    background-color: #fff; }\n    .form-group.custom-slider.alternative .input-field .custom-slider-holder.success .custom-slider-track .custom-slider-thumb::after {\n      background-color: #379D00; }\n  .form-group.custom-slider.alternative .input-field .custom-slider-holder.danger .custom-slider-track .custom-slider-slider-before {\n    background-color: #D81A1A; }\n  .form-group.custom-slider.alternative .input-field .custom-slider-holder.danger .custom-slider-track .custom-slider-thumb {\n    border: 1px solid #BB000C;\n    background-color: #fff; }\n    .form-group.custom-slider.alternative .input-field .custom-slider-holder.danger .custom-slider-track .custom-slider-thumb::after {\n      background-color: #BB000C; }\n  .form-group.custom-slider.alternative .input-field .custom-slider-holder.warning .custom-slider-track .custom-slider-slider-before {\n    background-color: #FFB400; }\n  .form-group.custom-slider.alternative .input-field .custom-slider-holder.warning .custom-slider-track .custom-slider-thumb {\n    border: 1px solid #F8A000;\n    background-color: #fff; }\n    .form-group.custom-slider.alternative .input-field .custom-slider-holder.warning .custom-slider-track .custom-slider-thumb::after {\n      background-color: #F8A000; }\n  .form-group.custom-slider.alternative .input-field .custom-slider-holder.purple .custom-slider-track .custom-slider-slider-before {\n    background-color: #4F2C99; }\n  .form-group.custom-slider.alternative .input-field .custom-slider-holder.purple .custom-slider-track .custom-slider-thumb {\n    border: 1px solid #3F2587;\n    background-color: #fff; }\n    .form-group.custom-slider.alternative .input-field .custom-slider-holder.purple .custom-slider-track .custom-slider-thumb::after {\n      background-color: #3F2587; }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .form-group.custom-slider .input-field input[type=range] {\n    padding: 0; }\n  .form-group.custom-slider.alternative .input-field input[type=range] {\n    padding: 0; } }\n\n@-moz-document url-prefix() {\n  .form-group.custom-slider .input-field input[type=range] {\n    padding: 0; }\n  .form-group.custom-slider.alternative .input-field input[type=range] {\n    padding: 0 3px; } }\n",""])},876:function(e,r){e.exports='<hr>\n<p>title: Slider\ncomponentid: component-slider\nvariantid: default</p>\n<h2 id="guid-slider-guid-default-component-react">guid: &#39;slider-guid-default-component-react&#39;</h2>\n<h2 id="element-name">Element name</h2>\n<pre><code class="language-javascript">Name: Slider Component\nComponent: &quot;Slider&quot;\nSelector: &quot;&lt;Slider/&gt;&quot;\nImport: &quot;@sebgroup/react-components/dist/Slider&quot;\nType: Form Component</code></pre>\n<h2 id="element-information">Element information</h2>\n<p>This React component supports customization and configurations. The component name is <code>Slider</code> and the selector is <code>&lt;Slider/&gt;</code>.</p>\n<h2 id="basic-use">Basic use</h2>\n<pre><code class="language-html">&lt;Slider\n    value={this.state.slider}\n    min={0}\n    max={100}\n    step={5}\n    labels={this.sliderLabels}\n    name=&quot;sliderName&quot;\n    onChange={(event) =&gt; { this.setState({ slider: event.target.value }); }}\n/&gt;</code></pre>\n<h2 id="properties">Properties</h2>\n<p>These are the current available properties:</p>\n<table>\n<thead>\n<tr>\n<th>Property</th>\n<th>Type</th>\n<th>Descrition</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>value</td>\n<td><code>number</code></td>\n<td>value of slider</td>\n</tr>\n<tr>\n<td>name</td>\n<td><code>string</code></td>\n<td>name of slider</td>\n</tr>\n<tr>\n<td>onChange</td>\n<td><code>(event: any) =&gt; void</code></td>\n<td>change action</td>\n</tr>\n<tr>\n<td>min?</td>\n<td><code>number</code></td>\n<td>Minimum value (default: <code>0</code>)</td>\n</tr>\n<tr>\n<td>max?</td>\n<td><code>number</code></td>\n<td>Maximum value (default: <code>10</code>)</td>\n</tr>\n<tr>\n<td>step?</td>\n<td><code>number</code></td>\n<td>Step value (default: <code>1</code>)</td>\n</tr>\n<tr>\n<td>className?</td>\n<td><code>string</code></td>\n<td>Custom class can be passed here</td>\n</tr>\n<tr>\n<td>labels?</td>\n<td><code>Array&lt;RangeSliderLabel&gt;</code><sup>1</sup></td>\n<td>Labels to be displayed below the slider</td>\n</tr>\n<tr>\n<td>label?</td>\n<td><code>string</code></td>\n<td>the component label</td>\n</tr>\n<tr>\n<td>error?</td>\n<td><code>string</code></td>\n<td>the component error message</td>\n</tr>\n<tr>\n<td>showTicks?</td>\n<td><code>boolean</code></td>\n<td>Show ticks with labels (default: <code>false</code>)</td>\n</tr>\n<tr>\n<td>alwaysShowTooltip?</td>\n<td><code>boolean</code></td>\n<td>Always Show tooltip (default: <code>false</code>)</td>\n</tr>\n<tr>\n<td>theme?</td>\n<td><code>string</code></td>\n<td>Based on SEB predefined colors. (default: <code>&#39;primary&#39;</code>)<sup>2</sup></td>\n</tr>\n<tr>\n<td>tooltipTheme?</td>\n<td><code>string</code></td>\n<td>Based on SEB predefined colors. (default: <code>&#39;inverted&#39;</code>)<sup>2</sup></td>\n</tr>\n<tr>\n<td>alternative?</td>\n<td><code>boolean</code></td>\n<td>Use an alternative version of the slider</td>\n</tr>\n<tr>\n<td>reference?</td>\n<td><code>React.RefObject&lt;any&gt;</code></td>\n<td>React Ref obj</td>\n</tr>\n</tbody></table>\n<h2 id="footnote">Footnote</h2>\n<ol>\n<li><code>labels</code> items has an exported interface named <code>RangeSliderLabel</code><pre><code class="language-javascript">{\n position: number;\n text: string;\n}</code></pre>\n</li>\n<li>Supported themes: <code>&#39;primary&#39;</code>, <code>&#39;inverted&#39;</code>, <code>&#39;success&#39;</code>, <code>&#39;danger&#39;</code>, <code>&#39;warning&#39;</code>, <code>&#39;purple&#39;</code></li>\n</ol>\n<p>:::iframe(<a href="https://github.sebank.se/pages/DesignLibrary/ReactComponents/#/slider?mode=DL">https://github.sebank.se/pages/DesignLibrary/ReactComponents/#/slider?mode=DL</a>, 270)</p>\n'}}]);
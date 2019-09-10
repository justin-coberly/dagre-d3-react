'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var DagreGraph = /** @class */ (function (_super) {
    __extends(DagreGraph, _super);
    function DagreGraph() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._drawChart = function () {
            var _a = _this.props, nodes = _a.nodes, links = _a.links, zoomable = _a.zoomable, fitBoundaries = _a.fitBoundaries, height = _a.height, width = _a.width;
        };
        return _this;
    }
    DagreGraph.prototype.componentDidMount = function () {
        this._drawChart();
    };
    DagreGraph.prototype.componentDidUpdate = function () {
        this._drawChart();
    };
    DagreGraph.prototype.render = function () {
        return (React__default.createElement("svg", { width: this.props.width, height: this.props.height },
            React__default.createElement("g", null)));
    };
    DagreGraph.defaultProps = {};
    return DagreGraph;
}(React.Component));

exports.DagreGraph = DagreGraph;
//# sourceMappingURL=index.tsx.map

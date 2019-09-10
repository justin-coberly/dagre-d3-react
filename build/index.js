"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
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
        return width = { this: .props.width };
        height = { this: .props.height };
        ref = { dagreGraph: dagreGraph }(this.dagreGraph = dagreGraph);
    };
    DagreGraph.defaultProps = {};
    return DagreGraph;
}(react_1.Component));
exports.DagreGraph = DagreGraph;
 >
    ref;
{
    (function (r) { return (_this.inner = r); });
}
/>
    < /svg>;
//# sourceMappingURL=index.js.map
import React, { Component } from 'react';
import { GraphLabel } from 'dagre-d3';
interface GraphProps {
    nodes: d3Node[];
    links: d3Link[];
    zoomable?: boolean;
    fitBoundaries?: boolean;
    height?: string;
    width?: string;
    config?: GraphLabel;
    animate?: number;
    className?: string;
    shape?: shapes;
    onNodeClick?: Function;
    onRelationshipClick?: Function;
}
declare type shapes = 'rect' | 'circle' | 'ellipse';
declare type labelType = 'html' | 'svg' | 'string';
declare type d3Node = {
    id: any;
    label: string;
    class?: string;
    labelType?: labelType;
    config?: object;
};
declare type d3Link = {
    source: string;
    target: string;
    class?: string;
    label?: string;
    config?: object;
};
declare class DagreGraph extends Component<GraphProps> {
    svg: React.RefObject<SVGSVGElement>;
    innerG: React.RefObject<SVGSVGElement>;
    static defaultProps: {
        zoomable: boolean;
        fitBoundaries: boolean;
        className: string;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    _getNodeData(id: any): d3Node | undefined;
    _drawChart: () => void;
    render(): JSX.Element;
}
export default DagreGraph;

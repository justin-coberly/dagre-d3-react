import { Component } from 'react';
declare type GraphProps = {
    nodes: string[];
    links: string[];
    zoomable: boolean;
    fitBoundaries: boolean;
    height: string;
    width: string;
};
declare class DagreGraph extends Component<GraphProps> {
    static defaultProps: {};
    componentDidMount(): void;
    componentDidUpdate(): void;
    _drawChart: () => void;
    render(): JSX.Element;
}
export { DagreGraph };

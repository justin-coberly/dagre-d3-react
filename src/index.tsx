import React, { Component, createRef } from 'react'
import dagreD3 from 'dagre-d3'
import * as d3 from 'd3'

type GraphProps = {
	nodes: d3Node[]
	links: d3Link[]
	zoomable: boolean
	fitBoundaries: boolean
	height: string
	width: string
	rankdir: string
	animate: boolean
	onNodeClick: Function
	onNodeRightClick: Function
	onRelationshipClick: Function
}
type d3Node = {
	id: string
	label: string
	class?: string
}
type d3Link = {
	source: string
	target: string
	class?: string
}
type Relationship = {
	v: string
	w: string
}

class DagreGraph extends Component<GraphProps> {
	svg: SVGSVGElement
	innerG: SVGSVGElement

	static defaultProps = {}
	componentDidMount() {
		this._drawChart()
	}
	componentDidUpdate() {
		this._drawChart()
	}

	_drawChart = () => {
		let {
			nodes,
			links,
			zoomable,
			fitBoundaries,
			height,
			width,
			rankdir,
			animate,
			onNodeClick,
			onNodeRightClick,
			onRelationshipClick
		} = this.props
		let g = new dagreD3.graphlib.Graph().setGraph({ rankdir })
		nodes.forEach(node => g.setNode(node.id, { label: node.label, class: node.class || '' }))

		// g.nodes().forEach(v => (g.node(v).shape = 'rect'))

		links.forEach(link => g.setEdge(link.source, link.target, { label: 'THEN', class: link.class || '' }))

		let render = new dagreD3.render()
		let svg: any = d3.select(this.svg)
		let inner: any = d3.select(this.innerG)

		let zoom = d3.zoom().on('zoom', () => inner.attr('transform', d3.event.transform))

		if (zoomable) {
			svg.call(zoom)
		}
		if (animate) {
			g.graph().transition = function transition(selection) {
				return selection.transition().duration(1000)
			}
		}

		render(inner, g)

		if (fitBoundaries) {
			let _initial_scale = 0.5
			svg.call(
				zoom.transform,
				d3.zoomIdentity.translate((svg.attr('width') - g.graph.width * _initial_scale) / 2, 20).scale(_initial_scale)
			)
			svg.attr('height', g.graph().height * _initial_scale + 180)
		}

		if (onNodeClick) {
			svg.selectAll('g.node').on('click', (id: string) => {
				let _node = g.node(id)
				_node.id = id
				onNodeClick(_node)
			})
		}

		if (onNodeRightClick) {
			svg.selectAll('g.node').on('contextmenu', (id: string) => {
				let _node = g.node(id)
				_node.id = id
				onNodeRightClick(_node)
			})
		}

		if (onRelationshipClick) {
			svg.selectAll('g.edgeLabel').on('dblclick', (id: Relationship) => {
				let _source = g.node(id.w)
				_source.id = id.w
				let _target = g.node(id.v)
				_target.id = id.v
				onRelationshipClick(_source, _target)
			})
		}
	}

	render() {
		return (
			<svg width={this.props.width} height={this.props.height} ref={(r: SVGSVGElement) => (this.svg = r)}>
				<g ref={(g: SVGSVGElement) => (this.innerG = g)} />
			</svg>
		)
	}
}

export { DagreGraph }

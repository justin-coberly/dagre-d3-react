import React, { Component, createRef } from 'react'
import dagreD3 from 'dagre-d3'
import * as d3 from 'd3'

interface GraphProps {
	nodes: d3Node[]
	links: d3Link[]
	zoomable?: boolean
	fitBoundaries?: boolean
	height?: string
	width?: string
	rankdir?: rankdir
	animate?: number
	className?: string
	shape?: shapes
	onNodeClick: Function
	onNodeRightClick: Function
	onNodeDoubleClick: Function
	onRelationshipClick: Function
	onRelationshipDoubleClick: Function
	onRelationshipRightClick: Function
}
type rankdir = 'TB' | 'BT' | 'LR' | 'RL'
type shapes = 'rect' | 'circle' | 'ellipse'

type d3Node = {
	id: string
	label: string
	class?: string
}
type d3Link = {
	source: string
	target: string
	class?: string
	label?: string
}
type Relationship = {
	v: string
	w: string
}

class DagreGraph extends Component<GraphProps> {
	svg = createRef<SVGSVGElement>()
	innerG = createRef<SVGSVGElement>()

	static defaultProps = {
		rankdir: 'TB',
		zoomable: false,
		fitBoundaries: false,
		className: 'dagre-d3-react'
	}
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
			rankdir,
			animate,
			shape,
			onNodeClick,
			onNodeRightClick,
			onNodeDoubleClick,
			onRelationshipClick,
			onRelationshipRightClick,
			onRelationshipDoubleClick
		} = this.props
		let g = new dagreD3.graphlib.Graph().setGraph({ rankdir })

		nodes.forEach(node => g.setNode(node.id, { label: node.label, class: node.class || '' }))

		if (shape) {
			g.nodes().forEach(v => (g.node(v).shape = shape))
		}

		links.forEach(link => g.setEdge(link.source, link.target, { label: link.label || '', class: link.class || '' }))

		let render = new dagreD3.render()
		let svg: any = d3.select(this.svg.current)
		let inner: any = d3.select(this.innerG.current)

		let zoom = d3.zoom().on('zoom', () => inner.attr('transform', d3.event.transform))

		if (zoomable) {
			svg.call(zoom)
		}
		if (animate) {
			g.graph().transition = function transition(selection) {
				return selection.transition().duration(animate || 1000)
			}
		}

		render(inner, g)

		if (fitBoundaries) {
			let _initial_scale = 0.5
			svg.call(
				zoom.transform,
				d3.zoomIdentity.translate((svg.attr('width') - g.graph().width * _initial_scale) / 2, 20).scale(_initial_scale)
			)
			svg.attr('height', g.graph().height * _initial_scale + 180)
		}

		if (onNodeClick) {
			svg.selectAll('g.node').on('click', (id: string) => {
				let _node = g.node(id)
				let _original = nodes.find(node => node.id === id)
				onNodeClick(_node, _original)
			})
		}

		if (onNodeRightClick) {
			svg.selectAll('g.node').on('contextmenu', (id: string) => {
				let _node = g.node(id)
				let _original = nodes.find(node => node.id === id)
				onNodeRightClick(_node, _original)
			})
		}
		if (onNodeDoubleClick) {
			svg.selectAll('g.node').on('dblclick', (id: string) => {
				let _node = g.node(id)
				let _original = nodes.find(node => node.id === id)
				onNodeDoubleClick(_node, _original)
			})
		}

		if (onRelationshipClick) {
			svg.selectAll('g.edgeLabel').on('click', (id: Relationship) => {
				let _source = g.node(id.w)
				let _original_source = nodes.find(node => node.id === id.w)

				let _target = g.node(id.v)
				let _original_target = nodes.find(node => node.id === id.v)
				onRelationshipClick(_source, _original_source, _target, _original_target)
			})
		}
		if (onRelationshipRightClick) {
			svg.selectAll('g.edgeLabel').on('contextmenu', (id: Relationship) => {
				let _source = g.node(id.w)
				let _original_source = nodes.find(node => node.id === id.w)

				let _target = g.node(id.v)
				let _original_target = nodes.find(node => node.id === id.v)
				onRelationshipRightClick(_source, _original_source, _target, _original_target)
			})
		}
		if (onRelationshipDoubleClick) {
			svg.selectAll('g.edgeLabel').on('dblclick', (id: Relationship) => {
				let _source = g.node(id.w)
				let _original_source = nodes.find(node => node.id === id.w)
				let _target = g.node(id.v)
				let _original_target = nodes.find(node => node.id === id.v)
				onRelationshipDoubleClick(_source, _original_source, _target, _original_target)
			})
		}
	}

	render() {
		return (
			<svg width={this.props.width} height={this.props.height} ref={this.svg} className={this.props.className || ''}>
				<g ref={this.innerG} />
			</svg>
		)
	}
}

export default DagreGraph

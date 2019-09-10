# dagre-d3-react

Dagre D3 Graph Renderer

## Browsers

- support IE11+, Chrome, Firefox, Safari

## Install

<!-- [![rc-progress](https://nodei.co/npm/rc-progress.png)](https://npmjs.org/package/rc-progress) -->

## Usage

```jsx
import DagreGraph from 'dagre-d3-react'

ReactDOM.render(
	<div>
		<DagreGraph
			nodes={nodes}
			links={graph.simple.links}
			rankdir='LR'
			width='500'
			height='500'
			animate={1000}
			shape='circle'
			fitBoundaries
			zoomable
		/>
	</div>,
	container
)
```

## API

### props

<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th style="width: 100px;">name</th>
    <th style="width: 50px;">type</th>
    <th style="width: 50px;">default</th>
    <th>description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>nodes</td>
      <td>array</td>
      <td>undefined</td>
      <td>List of node objects {label:'', id:'', class: ''}</td>
    </tr>
    <tr>
      <td>links</td>
      <td>array</td>
      <td>undefined</td>
      <td>List of link objects {source: '', target: '', class: '', label: ''}</td>
    </tr>
    <tr>
      <td>zoomable</td>
      <td>boolean</td>
      <td>false</td>
      <td>Allows scroll to zoom on graph</td>
    </tr>
    <tr>
      <td>fitBoundaries</td>
      <td>boolean</td>
      <td>false</td>
      <td>Autosizes graph to fit container</td>
    </tr>
    <tr>
		  <td>height</td>
		  <td>string</td>
		  <td>500</td>
		  <td>Default height of svg</td>
		</tr>
    <tr>
      <td>width</td>
      <td>string</td>
      <td>500</td>
      <td>Default width of svg</td>
    </tr>
    <tr>
      <td>rankdir</td>
      <td>string</td>
      <td>TB</td>
      <td>Layout direction of graph: 'TB' | 'BT' | 'LR' | 'RL'</td>
    </tr>
    <tr>
      <td>animate</td>
      <td>number</td>
      <td>1000</td>
      <td>Enables animation with duration in milliseconds</td>
    </tr>
    <tr>
      <td>className</td>
      <td>string</td>
      <td></td>
      <td>Assign custom class to svg</td>
    </tr>
    <tr>
      <td>shape</td>
      <td>string</td>
      <td>rect</td>
      <td>SVG node shape: 'rect' | 'circle' | 'ellipse'</td>
    </tr>
    <tr>
      <td>onNodeClick</td>
      <td>Function</td>
      <td></td>
      <td>Callback on node click</td>
    </tr>
    <tr>
      <td>onNodeRightClick</td>
      <td>Function</td>
      <td></td>
      <td>Callback on node right click</td>
    </tr>
    <tr>
      <td>onNodeDoubleClick</td>
      <td>Function</td>
      <td></td>
      <td>Callback on node double click</td>
    </tr>
    <tr>
      <td>onRelationshipClick</td>
      <td>Function</td>
      <td></td>
      <td>Callback relationship click (specifically the label)</td>
    </tr>
    <tr>
      <td>onRelationshipRightClick</td>
      <td>Function</td>
      <td></td>
      <td>Callback relationship right click (specifically the label)</td>
    </tr>
    <tr>
      <td>onRelationshipDoubleClick</td>
      <td>Function</td>
      <td></td>
      <td>Callback relationship double click (specifically the label)</td>
    </tr>
  </tbody>
</table>

## Installation

```
npm install --save dagre-d3-react
```

<!-- ## Development

```
npm install
npm start
``` -->

## License

dagre-d3-react is released under the MIT license.

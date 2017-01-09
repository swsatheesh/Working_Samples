import React from 'react';
import AppendDOMElement from '../SampleViews/AppendDOM_Element.js';
import CreateGraph from '../SampleViews/CreateGraph.js';
const renderNewviewer = {
  appendDomElement: AppendDOMElement,
  createGraph: CreateGraph
};
class App extends React.Component {
  componentDidMount() {
    this.provideNewViewers();
  }
  provideNewViewers() {
    let setRenderName = new renderNewviewer['createGraph']();
    let appendElement = new CreateGraph();
    appendElement.pageviewerSetUp();
  }
  render() {
    return (
      <div className='MainControllerDiv' id="container">
        <h1>D3js Samples.</h1>
      </div>
      );
  }
}

export default App;

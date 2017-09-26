import React from 'react';

import './Viewer.css';

import InputArea from './InputArea';
import PreviewArea from './PreviewArea';


class Viewer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in Spain.\n\n *[Long Nguyen](https://freecodecamp.com/longnt80)*'}
    }

    handleChange = (e) => { this.setState({value: e.target.value}); } // Writting like to avoid binding

    render() {
      const { value } = this.state
      return (
        <div className="Viewer">
          <InputArea change={this.handleChange} defaultContent={value} />
          <PreviewArea content={value}/>
        </div>
      );
    }
}

export default Viewer;

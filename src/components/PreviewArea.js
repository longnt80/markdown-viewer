import React from 'react';
import marked from 'marked';

const PreviewArea = ({ content }) => {
  const convertedHtml = {__html: marked(content)}
  return (
    <div
      className="Viewer-previewer"
      dangerouslySetInnerHTML={convertedHtml}
     />
  );
}

export default PreviewArea;

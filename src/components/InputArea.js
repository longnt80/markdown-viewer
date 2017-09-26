import React from 'react';

const InputArea = ({defaultContent, change}) =>
( <textarea
    id="inputText"
    defaultValue={defaultContent}
    onChange={change}
   />
)

export default InputArea;

import React,{ useState } from 'react';
import { marked } from 'marked';
const App=()=>{
  const defaultMarkdown = `
# Heading 1

\`<h1>hi all</h1>\`

# Myelement

## Heading 2

### Heading 3

[Visit GitHub](https://github.com)

Inline code: \`console.log('hello world')\`

\`\`\`
// Code block
function greet() {
  return "hello world!";
}
\`\`\`

- List item 1
- List item 2
- List item 3

> Blockquote

![Image](https://media.istockphoto.com/id/1328689113/photo/summer-blue-sky-and-white-cloud-white-background-beautiful-clear-cloudy-in-sunlight-calm.jpg?s=612x612&w=0&k=20&c=37qEuwdxyQSx9kuS-_Gz0WiKFX6jMXZN9aRY47mN2vI=)

**BOLD TEXT**
`;

  const [markdown,setMarkdown]=useState(defaultMarkdown);
  const handleChange=(event)=>{
    setMarkdown(event.target.value);
  }
  return (
    <div>
    <textarea id="editor" value={markdown} onChange={handleChange} />
    <div id='preview' dangerouslySetInnerHTML={{__html:marked(markdown)}} />

    </div>
  );
  
};
export default App;
// Configure marked

marked.setOptions({
  gfm: true,
  breaks: true,
});


const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`js
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

Tables too:

| Wild Header | Crazy Header | Another Header? |
| ----------- | ------------ | --------------- |
| Your content can | be here, and it | can be here.... |
| And here.   | Okay.        | Cool.           |

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. But the list goes on...


![freeCodeCamp Logo with Text](https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png)
`;

window.onload = function () {
  const editor = document.getElementById("editor");
  const preview = document.getElementById("preview");

  // Initialize editor with default markdown
  editor.value = defaultMarkdown;

  // Render initial preview
  preview.innerHTML = marked.parse(defaultMarkdown);

  // Update preview on input
  editor.addEventListener("input", function () {
    preview.innerHTML = marked.parse(editor.value);
  });
};


function App() {
  const [text, setText] = React.useState(defaultMarkdown);

  const html = React.useMemo(() => {
    const raw = marked.parse(text);
    return { __html: DOMPurify.sanitize(raw) };
  }, [text]);

  return (
    <div>
      <div className="window">
        <div className="title-bar">Editor <span>×</span></div>
        <textarea
          id="editor"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="window">
        <div className="title-bar">Previewer <span>×</span></div>
        <div id="preview" dangerouslySetInnerHTML={html} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

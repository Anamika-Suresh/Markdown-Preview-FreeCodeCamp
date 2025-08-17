<!-- 
📖 Project Summary — Markdown Previewer  

This project is a Markdown Previewer built to fulfill the FreeCodeCamp Frontend Libraries Certification requirement.

- Editor: A textarea where users can write GitHub-flavored Markdown.  
- Previewer: A live preview window that instantly renders the Markdown into HTML using the Marked.js library.  
- Features Supported:
  - Headings (#, ##, etc.)  
  - Links  
  - Inline code & code blocks  
  - Lists (ordered/unordered)  
  - Blockquotes  
  - Bold/italic text  
  - Images (including the FreeCodeCamp logo + text)  
- UI: Clean split-screen interface (editor on left, preview on right), styled with custom CSS.  
- Default Markdown: Preloaded content that demonstrates all required elements.  

👉 This project demonstrates the ability to integrate third-party libraries, manage DOM updates with JavaScript, 
   and build a functional, testable frontend app.
-->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Markdown Previewer</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div id="app"></div>
  <script src="script.js"></script>
</body>
</html>

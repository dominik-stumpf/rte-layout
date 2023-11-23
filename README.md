# rte-toolbar

## Header 

This piece of code is a dedicated a11y-compliant rich text editor layout design.

## Toolbar actions breakdown

> [!WARNING]
> Please refer to source code for the up-to-date structure, this is only meant to be an example.

The actions are in groups where each bullet is repesenting a button or an entry in a dropdown menu.

### History

- Undo, action
- Redo, action

### Text format

- Bold, toggle
- Italic, toggle
- Underline, toggle
- Strikethrough, toggle
- Subscript, toggle
- Superscript, toggle

### Text alignment

- Left, action
- Right, action
- Center, action
- Justify, action

### Text style

- Fill foreground, action
- Fill background, action
- Font size, action
- Font family, action
- Font style, action - containing pre-defined sets of styles
- Copy formatting/style, action
- Paste formatting/style, action
- Remove formatting/style, action
- Heading level, action - preferably a dropdown representing the semantic element on the text using: `h1...h6`, `p`

### Insert

Insert any embeddable element like an `iframe` or `svg`

**Commonmark insertions**

- Code block, insert
- Link, insert - `[text](href)`
- Horizontal rule, insert - `---`
- Blockquote, insert - `> text`
- Bulleted list, insert - `- text`
- Numbered list, insert - `1. text`
- Image, insert - `![text](href)`
- Table, insert

**Miscellaneous insertions**

- Gif, insert
- Image, insert
- Emoji, insert
- Page break, insert

## Roadmap

- [ ] add hooks for manipulating toolbar actions
- [ ] store all user feedback in a centralized event system
- [ ] create an API that makes it simple to hook in external rte logic

## Footer

> "A great innovation is being made and I was kindly asked to participate by making *this* for *that*."  
> — Said by literally no one.

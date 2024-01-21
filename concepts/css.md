# External CSS

> <link rel=”stylesheet”  type=”text/css”  href=mysitestyle.css”>

# CSS Selectors

> - {} -> universal
>   #id {}
>   .class {}
>   h1, h2 ,h3 {} -> type
>   h1 + p {} -> adjacent siblings, one after another
>   h1 ~ p {} -> siblings, same parent
>   ul > li {} -> child
>   p a {} -> any level child

# Pseudo-elements

> a:hover {}
> p::first-line {}
> ::first-letter {}
> :first-child {}
> :only-child {}
> :nth-child()
> :not(p) {} -> not selector
> .class::before {} -> add cosmetic content to an element with content css property

# CSS Text Styling

> font-variant: normal | small-caps
> text-transform: capitalise | lowercase | uppercase
> font-family: 'Open Sans', sans-serif
> text-shadow: h-shadow v-shadow blur-radius color | none | initial | inherit

# box-sizing

> border-box -> width + padding + border = actual width of an element
> content-box -> width = actual width of an element, padding + border added on top

# flex

> .child { flex: [flex-grow] [flex-shrink] [flex-basis]; }
> .child { flex: [max] [min] [ideal size]; } -> flex: 0 1 auto;

# CSS Dynamic

> --variable-name: value;
> :root { --blue: #1e90ff;}
> body { background-color: var(--blue); }
> p { content: attr(data-entry); }

# sequence

> border-style: top right bottom left

# Font Size With Em

> 1em is equal to the current font size
> default text size in browsers is 16px

# Long list

> content-visibility > css
> auto > still able to search
> hidden > skipped render cycle

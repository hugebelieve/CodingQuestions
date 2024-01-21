# semantic vs non-semantic elements
> <div> explains nothing about its content
> <form> clearly defines its contents

# void elements
> elements which has no close tags <br/>

# ordered vs un-ordered list
> ordered list comes with numbering
> https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/558/original/Image_24%281%29.png?1625041509

# id vs class
> class name can be used by multiple element, id is unique to one element

# HTML layout structure
> globally accepted way to structure the web page
> Header
> Nav
> article
> section
> aside
> footer

# Parallel downloads
> bypass the download limit of 6 assets per domain of all modern browsers
> use multiple domain

# Doctypes available
> Strict Doctype <!DOCTYPE html> this we use
> Transitional Doctype
> Frameset Doctype

# Character set
> <meta charset="UTF-8">

# diff between <b> <strong>
> <b> is non-semantic
> <strong> is semantic

# cell padding vs cell spacing
> cell padding is for content to edge
> cell spacing is between 2 cells

# merge in table
> rowspan="2" or colspan="2"
> th -> header cell
> td -> data cell

# display:none vs visibility:hidden
> visibility takes space in webpage
> display remove element from webpage

# <link rel="stylesheet" href="styles.css">

# <script src="myscripts.js"></script>

# use scripts in the head/body
> lib in head
> no write to webpage in head
> render something in webpage in body bottom

# form
<form action="/submit_data.php">
   <label>Enter your name: </label>
   <input type="text" name="name" />
   <input type="submit" value="Submit">
</form>

# handle events
> ‘onclick’, ‘ondrag’, ‘onchange’

# inline vs block elements
> <span>, <a>, <strong>, <img> no not start in new line
> <div>, <p>, <header>, <footer>, <h1> starts in new line

# figure vs img
> figure sementic ele with caption
> img is to embed image in html

# datalist vs select
> datalist is to add option to input tag https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/589/original/is-datalist-and-select-tag-same.png?1625064088
> select is simple dropdown

# Image Map
> map different part of image with diffrent pages
<img  src="image_url" ,  usemap="#workspace" />
<map  name="workspace">
     <area shape="rect"  coords="34, 44, 270, 350" ,  href="xyz.html" />
     <area shape="rect"  coords="10, 120, 250, 360" ,  href="abc.html" />
</map>

# meter vs progress
> progress to show progress of activity, changing
> meter is to show scalar static data

# SVG vs Cancas
> SVG is composed of shapes
> Canvas is composed of pixels

# web storage
> we do not need to fetch it from the server every time we need it
> Local Storage / Session Storage

# Microdata in HTML5
> help extract data for site crawlers
> itemid, itemprop, itemtype

# drag drop
<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
<img id="drag1" src="img_logo.gif" draggable="true" width="336" height="69">

# server-sent events
> better than polling
> <eventsource src = "/target.php" />

# web workers
> Dedicated -> for single script
> Share -> for multiple scripts in diff window
> Service -> proxy server between web app and network

# manifest file
> list down resources that can be cached
> files
> network calls
> fallback files

# Web Components
> create reusable custom elements
> customElements.define('open-shadow', class extends HTMLElement {})

# adding tooltip to an html element
> "title" attribute

# contenteditable
> make an editable para
> "input" to get event on edit

# read input change
> "oninput"

# Accessibility
> https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript

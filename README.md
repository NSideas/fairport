# Fairport Asset Management

A development guide for the Fairport Asset Management website.




## Contents

Production-ready assets (JS, CSS, fonts and images) can be found in the `dist/` folder. The `src/` folder is for development purposes only.

The `site/` folder is the root of the [demo website](http://dev.bigfatideas.com/Fairport/site/).

### Images

The `sites/uploads/` folder represents content uploaded to the CMS by the content manager. The `dist/img/` folder contains UI components, logos, icons, etc.


## Getting Started

Download core JS and CSS files from `dist/` and add them to the website:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    ...
    <link rel="stylesheet" href="path/to/fairport.css">
</head>
<body>
    ...
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="path/to/plugins.min.js"></script>
    <script src="path/to/scripts.min.js"></script>
</body>
</html>
```

## Example code

Take a look at [modules](), [templates]() and [structure]() for implementation instructions and module definitions.

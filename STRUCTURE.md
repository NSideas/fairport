# Structure

The page title should start with the name of the current page followed by " | Fairport Asset Management".

Eg. "Wealth Planning | Fairport Asset Management".

The body must have the following class names to identify the page, template and primary color:

  * `page-{Page -> Slug}`
  * `template-{Page -> Template}`
  * `color-{Page -> Primary_Color}`

For example, the body tag on "Wealth Planning" should look like this:

```html
<body class="page-wealth-planning template-default color-purple">
...
```


## Header

The header should be the first element after the opening body tag. Each top level nav item should link to the first item in its sub-nav list. Eg. "About You" links to "Client Experience".

```html
<header id="header">
  <div id="backdrop"></div>

  <div class="header-outer-wrap relative">

    <div class="header-container-top container-wide">
      <div class="relative">
        <a class="logo" href="{Home_Page_URL}"></a>
        <div id="menu-toggle" class="flex">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>

    <nav id="main-nav">
      <div class="container nav-container">

        <ul class="main-nav-list">

          <!-- for each {Main_Nav_Item} : -->
          <li class="main-nav-item">
            <a href="{Main_Nav_Item -> URL}">{Main_Nav_Item -> Title}</a>
            <ul class="sub-nav">
              <!-- for each {Sub_Nav_Item} : -->
              <li><a href="{Sub_Nav_Item -> URL}">{Sub_Nav_Item -> Title}</a></li>
              <!-- /for each -->
            </ul>
          </li>
          <!-- /for each -->

        </ul>

        <div id="header-search" class="search-site">
          <input type="search" id="search-site" class="search-input" name="search-site" placeholder="Search">
          <input id="header-search-submit" type="submit" class="search-submit" value="Search">
        </div>

        <div class="subscribe-link-container">
          <a class="subscribe-link btn btn--small btn--gold" href="#">Subscribe</a>
        </div>

      </div>
    </nav>

  </div>
</header>
```




## Footer

The footer should be the last element on the page, just before the script tags.

Modules referenced here: [Social Media Link List](MODULES.md#social-media-link-list), [Footer Contact Info](MODULES.md#footer-contact-info), [Newsletter Signup](MODULES.md#newsletter-signup)

```html
<footer id="footer">
  <div class="container">

    <div class="footer-section--top footer-section flex">
      <a class="footer-home-link" href="/">
        <img src="../dist/img/fairport-logo-white.svg" alt="Fairport Asset Management">
      </a>
      <!-- include {Social_Media_Link_List} -->
    </div>

    <div class="footer-section flex grid-container two-column">
      <!-- include {Footer_Contact_Info} -->
      <!-- include {Newsletter_Signup} -->
    </div>

    <nav id="footer-nav" class="footer-section">
      <ul class="footer-nav-list flex grid-container two-column--medium four-column--large">

        <!-- for each {Nav_Item} : -->
        <li class="footer-nav-item">
          <a href="{Main_Nav_Item -> URL}">{Main_Nav_Item -> Title}</a>
          <ul class="footer-sub-nav">
            <!-- for each {Sub_Nav_Item} : -->
            <li><a href="{Sub_Nav_Item -> URL}">{Sub_Nav_Item -> Title}</a></li>
            <!-- /for each -->
          </ul>
        </li>
        <!-- /for each -->

      </ul>
    </nav>

    <div class="footer-section">
      <p>© Fairport LLC. All rights reserved.</p>
    </div>

  </div>
</footer>
```

---
---
---

# Templates

There are two page templates being used in this site.

## Default Template

This template is used for all the *About Us*, *Services* and *Contact* pages.

#### Fields
* **Title** – *plain text*
* **Intro Text** – *plain text*
* **Body** – *rich text*
* **Primary Color** – *select*
  * Options: Purple, Blue, Teal, Green, Red, Gold
* **Modules** – *page sections*


```html
<!-- $slug = default-template -->
<!-- $template = default -->
<!-- $primaryColor = purple -->
<!-- @import "header" -->

<div class="page-intro--default">

  <section class="container">
    <h1 class="page-title">{Title}</h1>
    <p class="intro-paragraph">{Intro_Text}</p>
  </section>

</div>

<div class="main-content-wrapper">

  <div class="breadcrumbs container">
    <span class="breadcrumb-item"><a href="#">Home</a></span>
    <span class="breadcrumb-item current"><a href="#">{Title}</a></span>
  </div>

  <main class="main-content">

    <div class="main-section content-area">
      <section class="container">
        {Body}
      </section>
    </div>

    <!--for each {Module} -->

      <!-- {Module} -->

    <!-- /for each -->

  </main>

  <!-- {} -->

</div>

<!-- @import "footer" -->

```

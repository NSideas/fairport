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
<!-- Default Template -->

<!-- include {Header} -->

<div class="page-intro--default">
  <section class="container">
    <h1 class="page-title">{Title}</h1>
    <p class="intro-paragraph">{Intro_Text}</p>
  </section>
</div>

<div class="main-content-wrapper">

  <!-- include {Beadcrumbs} -->

  <main class="main-content">

    <div class="main-section content-area">
      <section class="container">
        {Body}
      </section>
    </div>

    <!-- for each {Module} : include {Module} -->

  </main>

  <!-- include {Quick_Links} -->

</div>

<!-- include {Footer} -->

```





## About You Template

This template is used for all the *About You* pages.

#### Fields
* **Title** – *plain text*
* **Intro Text** – *plain text*
* **Call to Action Button** – *field group*
  * **Link Text** – *plain text*
  * **Link Destination** – *URL*
* **Body** – *rich text*
* **Primary Color** – *select*
  * Options: Purple, Blue, Teal, Green, Red, Gold
* **Background Photo** – *image*
* **Modules** – *page sections*


```html
<!-- About You Template -->

<!-- include {Header} -->

<div class="hero-img" style="background-image: url({Background_Image})"></div>

<div class="main-content-wrapper">

  <!-- include {Beadcrumbs} -->

  <main class="main-content">

    <div class="page-intro">
      <section class="container">
        <h1 class="page-title">{Title}</h1>
        <p class="intro-paragraph">{Intro_Text}</p>
        <a class="btn btn--large" href="{Link_Destination}">{Link_Text}</a>
      </section>
    </div>

    <div class="main-section content-area">
      <section class="container">
        {Body}
      </section>
    </div>

    <!--for each {Module} : include {Module} -->

  </main>

</div>

<!-- include {Quick_Links} -->

<!-- include {Footer} -->

```

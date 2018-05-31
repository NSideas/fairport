# Templates


Each template has a main content area and the ability to include any number of additional modules.

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
<!-- include {Header} -->

<div class="page-intro--default">
  <section class="container">
    <h1 class="page-title">{Title}</h1>
    <p class="intro-paragraph">{Intro_Text}</p>
  </section>
</div>

<div class="main-content-wrapper">

  <!-- include {Breadcrumbs} -->

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
<!-- include {Header} -->

<div class="hero-img" style="background-image: url({Background_Photo})"></div>

<div class="main-content-wrapper">

  <!-- include {Breadcrumbs} -->

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

    <!-- for each {Module} : include {Module} -->

  </main>

</div>

<!-- include {Quick_Links} -->

<!-- include {Footer} -->
```





## News Article Template

This template is used for all News Articles. The **Intro** field is not referenced in this template—it is used for the [News Article Teaser](MODULES.md#news-article-teaser).

#### Fields
* **Title** – *plain text*
* **Intro** – *plain text*
* **Category** – *plain text*
* **Featured** – *true/false*
* **Body** – *rich text*


```html
<!-- include {Header} -->

<div class="page-intro--default">
  <section class="container">
    <h1 class="page-title">{News_and_Insights -> Title}</h1>
    <p class="intro-paragraph">{News_and_Insights -> Intro_Text}</p>
  </section>
</div>

<div class="main-content-wrapper">

  <!-- include {Breadcrumbs} -->

  <main class="main-content">

    <div class="main-section content-area">
      <article class="news-article-content container">
        <h2>{Title}</h2>
        {Body}
      </article>
    </div>

    <div class="category-label container">
      <p class="sans">Category:  <a href="{Category -> Link}">{Category -> Name}</a></p>
    </div>

  </main>

  <!-- include {Related_News_List} -->
  <!-- include {Quick_Links} -->

</div>

<!-- include {Footer} -->
```






## News Feed Template

This template is used for the *News & Insights* page. All news articles and category pages will inherit the **Primary Color** selected in this page. The most recent "Featured" news article will display first, followed by all other news articles in chronological order.

#### Fields
* **Title** – *plain text*
* **Intro Text** – *plain text*
* **Primary Color** – *select*
  * Options: Purple, Blue, Teal, Green, Red, Gold


Modules referenced here: [Category Filters](MODULES.md#category-filters), [News Article Teaser](MODULES.md#news-article-teaser)


```html
<!-- include {Header} -->

<div class="page-intro--default">
  <section class="container">
    <h1 class="page-title">{Title}</h1>
    <p class="intro-paragraph">{Intro_Text}</p>
  </section>
</div>

<div class="main-content-wrapper">

  <!-- include {Breadcrumbs} -->

  <main class="main-content">

    <!-- include {Category_Filters} -->

    <div id="featured-article" class="main-section">
      <div class="container">
        <!-- include {Featured_News_Article_Teaser} -->
      </div>
    </div>

    <div class="pattern-separator"></div>

    <div id="news-feed" class="main-section">
      <div class="container">
        <!-- for each {News_Article} : include {News_Article_Teaser} -->
      </div>
    </div>

    <div class="news-pagination container">
      <!-- if (not last page) : -->
      <span class="pagination-older">
        <a href="news-and-insights-page-2.html">&lt; Older Articles</a>
      </span>
      <!-- if (not first page) : -->
      <span class="pagination-newer">
        <a href="news-and-insights.html">Newer Articles &gt;</a>
      </span>
    </div>

  </main>

  <!-- include {Quick_Links} -->

</div>

<!-- include {Footer} -->
```





## Story Template

This template is used for all *Story* pages. The **Intro**, **Link Text** and **Mini Portrait** fields are not referenced in this template—they are used for the [Story Teaser](MODULES.md#story-teaser).

#### Fields
* **Title** – *plain text*
* **Intro** – *plain text*
* **Link Text** – *plain text*
* **Mini Portrait** – *image*
* **Featured Image** – *image*
* **Body** – *rich text*
* **Disclaimer** – *plain text*
* **Primary Color** – *select*
  * Options: Purple, Blue, Teal, Green, Red, Gold

```html
<!-- include {Header} -->

<div class="main-content-wrapper">

  <!-- include {Breadcrumbs} -->

  <main class="main-content">
    <div class="container">

      <article class="story main-section">
        <h1 class="page-title">{Title}</h1>
        <img class="featured-image" src="{Featured_Image}" alt="{Featured_Image(alt)}">
        <div class="content-area">
          {Body}
        </div>
        <p class="disclaimer small">{Disclaimer}</p>
      </article>

    </div>
  </main>

  <!-- include {Recent_Story_List} -->

</div>

<!-- include {Footer} -->
```

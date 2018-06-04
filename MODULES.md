
# Modules

Editable fields are referenced in the code samples inside of curly braces. Eg. **Field&nbsp;Name** = `{Field_Name}`. This is not an actual syntax, it is just a way to demonstrate the logic.






## Home Page Image Slider

The Home Page Slider is a module that consists of the repeatable item, **Slide**.

#### Fields
* **Slides** – *repeater*
  * **Image** – *image*
  * **Slide Title** – *plain text*
  * **Slide Subtitle** – *plain text*
  * **Color** – *select*
    * Options: purple, blue, teal, green, red, gold

```html
<div id="hero-swiper" class="hero-swiper swiper-container">
  <div class="swiper-wrapper">

    <!-- for each {Slide} : -->
    <div class="swiper-slide slide-1 color-{Color}" style="background-image: url({Image})">
      <div class="container">
        <section class="hero-swiper-slide-content">
          <h5>{Subtitle}</h5>
          <h1>{Title}</h1>
        </section>
      </div>
    </div>
    <!-- /for each -->

  </div>

  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>

  <div id="active-slide-content">
    <div class="container">

      <section class="hero-swiper-slide-content">
        <h5></h5>
        <h1></h1>
      </section>

      <div class="progress-info flex">

        <svg class="progress-circle" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <circle class="progress" fill="none" cx="15" cy="15" r="12"/>
          <circle class="total" fill="none" cx="15" cy="15" r="12"/>
        </svg>

        <div class="swiper-pagination"></div>

      </div>

    </div>
  </div>

</div>
```





## Inspiring Families Circle Slider

The Inspiring Families Circle Slider appears on the home page and contains links and teasers to specific stories.

#### Fields
* **Circles** – *repeater*
  * **Story** – *post object*
  * **Teaser** – *plain text*
  * **Link Text** – *plain text*
  * **Keyword** – *plain text*
  * **Color** – *select*
    * Options: purple, blue, teal, green, red, gold

```html
<div id="fam-circle-swiper" class="fam-circle-swiper swiper-container">
  <div class="swiper-wrapper">

      <!-- for each {Circle} : -->
      <div class="swiper-slide">
        <div class="fam-circle fam-circle--{color}">
          <h4 class="fam-circle-title">{Keyword}</h4>
          <div class="fam-circle-content">
            <p class="fam-circle-text">{Teaser}</p>
            <a class="btn btn--white" href="{Story -> URL}">{Link_Text}</a>
          </div>
        </div>
      </div>
      <!-- /for each -->

  </div>
</div>
```





## Breadcrumbs

```html
<div class="breadcrumbs container">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">{Parent_Page}</a></span>
  <span class="breadcrumb-item current"><a href="#">{Current_Page}</a></span>
</div>
```





## Quick Links

Quick Links refer to site content related to the current page. There are three types of Quick Links: **Page**, **News Article** and **Media Attachment**. They are located after the main content and before the footer. Quick Links are categorized based on the content to which they link. The category affects the class name, which dictates the icon above the text. For example, if you are linking to a page, the category would be "Page" and the class name would be `quick-link--page`. If you are linking to a news article, the category would be the category of the article and the class name would be `quick-link--{News_Article -> Category}`.

#### Fields
* **Type** – *select*
  * Options: Page, News Article, Attachment
* **Category** – *plain text*
* **Link** – *post object*
* **Teaser** – *plain text*

```html
<div class="quick-links-section secondary-content-area">
  <section class="container">

    <h5 class="quick-links-header">Quick Links</h5>

    <ul class="quick-links-list flex">

    <!-- for each {Quick_Link} : -->
    <li class="quick-link quick-link--{Category -> Slug}">
      <a class="quick-link-title" href="{Link -> URL}">{Link -> Title}</a>
      <p>{Teaser}</p>
      <a class="more-link" href="{Link -> URL}">Read More</a>
    </li>
    <!-- /for each -->

    </ul>

  </section>
</div>
```






## Block Lists

Block Lists are styled lists with that contain block-level HTML elements within each `li`. They consist of the repeatable field, **Block List Item** which include various sub fields based on the type of list.

### Unordered Block List

#### Fields
* **Block List Item** – *repeater*
  * **Header** – *plain text*
  * **Content** – *rich text*

```html
<ul class="block-list block-list--unordered two-column">

  <!-- for each {Block_List_Item} : -->
  <li class="block-list-item flex">
    <div class="grid-item left-column">
      <h3>{Header}</h3>
    </div>
    <div class="grid-item right-column">
      {Content}
    </div>
  </li>
  <!-- /for each -->

</ul>
```


### Ordered Block List Single column

#### Fields
* **Block List Item** – *repeater*
  * **Content** – *rich text*

```html
<ol class="block-list block-list--ordered single-column">

  <!-- for each {Block_List_Item} : -->
  <li class="block-list-item">
    {Content}
  </li>
  <!-- /for each -->

</ol>
```


### Ordered Block List Two Column

#### Fields

* **Block List Item** – *repeater*
  * **Header** – *plain text*
  * **Sub Header** – *plain text*
  * **Content** – *rich text*


```html
<ol class="block-list block-list--ordered two-column">

  <!-- for each {Block_List_Item} : -->
  <li class="block-list-item flex">
    <div class="grid-item left-column">
      <h5>{Sub_Header}</h5>
      <h3>{Header}</h3>
    </div>
    <div class="grid-item right-column">
      {Content}
    </div>
  </li>
  <!-- /for each -->

</ol>
```


### Ordered Block List Three Column

#### Fields

* **Block List Item** – *repeater*
  * **Header** – *plain text*
  * **Content** – *rich text*


```html
<ol class="block-list block-list--ordered three-column">

  <!-- for each {Block_List_Item} : -->
  <li class="block-list-item grid-item">
    <h5>{Header}</h5>
    <div class="content-area">
      <p>{Content}</p>
    </div>
  </li>
  <!-- /for each -->

</ol>
```





## News Article Teaser

News Article Teasers appear in the news feed and link to their full articles. For featured news items, the `news-item--default` class would be replaced with `news-item--featured`.

```html
<article class="news-item news-item--default category-{News_Article -> Category}">

  <h2 class="article-title">
    <a href="{News_Article -> URL}">{News_Article -> Title}</a>
  </h2>

  <p>{News_Article -> Intro}</p>
  <a class="read-more btn btn--default" href="{News_Article -> URL}">Read More</a>

</article>
```





## Recent News List

The Related News List displays the three most recent articles related to the current article by category.

```html
<div class="recent-news-section secondary-content-area">
  <section class="container">

    <div class="recent-news-header">
      <h5>Recent News</h5> <a href="news-and-insights.html">View all</a>
    </div>

    <div class="recent-news-list">
      <!-- for each {News_Article} : {News_Article_Teaser} -->
    </div>

  </section>
</div>
```





## Related News List

The Related News List displays the three most recent articles related to the current article by category.

```html
<div class="related-news-section secondary-content-area">
  <section class="container">

    <h5 class="related-news-header">You Might Also Be Interested In:</h5>

    <div class="related-news-list">
      <!-- for each {News_Article} : {News_Article_Teaser} -->
    </div>

  </section>
</div>
```





## Category Filters

This module should be dynamically populated with each news category.

```html
<div class="category-filter container">
  <div class="custom-dropdown align-right">
    <a id="category-filter-btn" class="btn btn--dropdown">Filter by Category</a>
    <ul id="category-list" class="dropdown-list">

      <!-- for each {Category} : -->
      <li class="dropdown-item">
        <a class="category-filter-link category-{Category -> Slug}" href="{Category -> URL}">{Category -> Name}</a>
      </li>
      <!-- / for each -->

      <li class="dropdown-item">
        <a class="category-filter-link category-all" href="{News_and_Insights -> URL}">All News</a>
      </li>

    </ul>
  </div>
</div>
```





## Story Teaser

Story Teasers provide a brief introduction and link to a specific story.

```html
<div class="story-teaser">

  <img class="mini-portrait" src="{Story -> Mini_Portrait}" alt="{Story -> Mini_Portrait(alt)}">

  <section class="story-teaser-text">
    <h3 class="story-teaser-title">{Story -> Title}</h3>
    <p class="story-teaser-body">{Story -> Intro}</p>
    <a class="btn btn--default" href="{Story -> URL}">{Story -> Link_Text}</a>
  </section>

</div>
```





## Related Story List

The Related Story List displays the three most recent stories related to the current story by tag.

```html
<div class="secondary-content-area related-stories">
  <div class="container">

    <h5 class="related-content-header">You Might Also Be Interested In:</h5>
    <div class="related-content-list">
      <!-- for each {Story} : {Story_Teaser} -->
    </div>

  </div>
</div>
```





## Team Member Bio

Team Member Bios are overlay or "pop-up" modules within the team page. Each one should have its own URL which links to the team page with the overlay module active.

On the demo site, I added a [Team Member Bio](http://dev.bigfatideas.com/Fairport/site/team.html#brant-d-appel) to the team page manually in order to quickly demonstrate this interaction. In production, the content for each team member should be loaded upon request with AJAX or something similar.

#### Fields
* **Name** – *plain text*
* **Title** – *plain text*
* **Headshot** – *image*
* **Email Address** – *plain text (or email)*
* **Phone Number** – *plain text*
* **Contact Card** – *URL*
* **Bio** – *rich text*

```html
<div id="{Name}" class="team-bio-container">
  <div class="team-bio-module">
    <div class="close-bio x-button"></div>
    <div class="team-bio-inner-wrap">

      <header>
        <img class="team-bio-photo" src="{Headshot}" alt="{Name}">
        <h5 class="job-title">{Title}</h5>
        <h3 class="team-bio-name">{Name}</h3>
        <p class="team-bio-contact">
          {Email_Address} / {Phone_Number} / <a href="{Contact_Card}">Download Contact</a>
        </p>
      </header>

      <div class="team-bio-content">
        {Bio}
      </div>

      <div class="close-link-container">
        <a class="close-bio">Close</a>
      </div>

    </div>
  </div>
</div>
```





## Team Member List

The Team Member List is used to display all the team members on the [team page](http://dev.bigfatideas.com/Fairport/site/team.html) using data from the Team Member Bios.

```html
<ul id="team-member" class="team-member flex">

  <!-- for each {Team_Member} : -->
  <li class="team-member">
    <a class="team-member-link flex" href="#{Team_Member -> Name}">
      <img class="team-member-photo" src="{Team_Member -> Headshot}" alt="{Team_Member -> Name}">
      <section class="team-member-info">
        <h5 class="job-title">{Team_Member -> Title}</h5>
        <h3 class="team-member-name">{Team_Member -> Name}</h3>
      </section>
    </a>
  </li>
  <!-- /for each -->

</ul>
```






## Staff Info List

The Staff Info List displays contact information for all the team members on the [staff info page](http://dev.bigfatideas.com/Fairport/site/staff-info.html) using data from the Team Member Bios.

```html
<ul class="staff-info-list">

  <!-- for each {Team_Member} : -->
  <li class="staff-info-item">
    <h5 class="job-title">{Team_Member -> Title}</h5>
    <h3>{Team_Member -> Name}</h3>
    <p class="staff-info-contact">
      <a href="#">{Team_Member -> Email_Address}</a> /
      {Team_Member -> Phone_Number} /
      <a href="{Team_Member -> Contact_Card}">Download&nbsp;Contact</a>
    </p>
  </li>
  <!-- /for each -->

</ul>
```





## Footer Contact Info

#### Fields

* **Content** – *rich text*

```html
<div class="contact-info content-area grid-item">
  {Content}
</div>
```





## Newsletter Signup

#### Fields

* **Title** – *plain text*
* **Subtitle** – *plain text*

```html
<div class="newsletter-signup grid-item">

  <h5 class="form-title">{Title}</h5>
  <p>{Subtitle}</p>

  <form>
    <input class="email-address input-white" type="email" placeholder="Enter your email address" required>
    <input class="btn-submit btn--solid-white" type="submit" value="Submit">
  </form>

</div>
```





## Social Media Link List

#### Fields
* **Social Media Links** – *repeater*
  * **Platform** – *plain text*
  * **Icon** – *image*
  * **URL** – *plain text*

```html
<ul class="sm-link-list">

  <!-- for each {Social_Media_Link} : -->
  <li>
    <a class="sm-link" href="{URL}">
      <img src="{Image}" alt="{Platform}" />
    </a>
  </li>
  <!-- /for each -->

</ul>
```

<!-- CSS: dist/css/md.css -->

# Modules

Editable fields are referenced in the code samples inside of curly braces. Eg. **Field&nbsp;Name** = `{Field_Name}`





## Home Page Image Slider

The [Home Page Slider](site/index.html) is a module that consists of the repeatable item, **Slide**.

#### Sub Fields
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

The [Inspiring Families Circle Slider](site/index.html) is a module that consists of the repeatable field, **Circle**.

#### Sub Fields
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




## Team Member Bio

Team Member Bios are overlay or "pop-up" modules within the team page. Each one should  have its own URL which links to the team page with the overlay module active.

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
          {Email_Address} / {Phone_Number} / <a href="{Contact Card}">Download_Contact</a>
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




## Staff List

The Staff List is used to display all the team members on the [team page](site/team.html) using data from the Team Member Bios.

```html
<ul id="staff-list" class="staff-list flex">

  <!-- for each {Team_Member} : -->
  <li class="team-member">
    <a class="team-member-link flex" href="#{Name}">
      <img class="team-member-photo" src="{Headshot}" alt="{Name}">
      <section class="team-member-info">
        <h5 class="job-title">{Title}</h5>
        <h3 class="team-member-name">{Name}</h3>
      </section>
    </a>
  </li>
  <!-- /for each -->

</ul>
```




## Block Lists

Block Lists are styled lists with that contain block-level HTML elements within each `li`. They consist of the repeatable field, **Block List Item** which include various sub fields based on the type of list.

### Unordered Block List

#### Sub Fields
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

#### Sub Fields
**Content** – *rich text*

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

#### Sub Fields
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




## Quick Links

Quick Links refer to a post, page or media attachment. They are located after the main content and before the footer. There should be no more than three Quick Links on a single page. Quick Links are categorized based on the content they link to.

#### Fields
* **Link** – *post object*
* **Teaser** – *plain text*


```html
<div class="quick-links-section secondary-content-area">
  <section class="container">

    <h5 class="quick-links-header">Quick Links</h5>

    <ul class="quick-links-list flex">

    <!-- for each {Quick_Link} :

    if {Quick_Link -> Type} == 'Page' {
      {Category} = 'page'
    } else if {Quick_Link -> Type} == 'Attachment' {
      {Category} = 'attachment'
    } else if {Quick_Link -> Type} == 'Post' {
      {Category} = {Post -> Category}
    } -->

    <li class="quick-link quick-link--{Category}">
      <a class="quick-link-title" href="{Link -> URL}">{Link -> Title}</a>
      <p>{Teaser}</p>
      <a class="more-link" href="{Link -> URL}">Read More</a>
    </li>

    <!-- /for each -->

    </ul>

  </section>
</div>
```






---
---
---
---
---
---

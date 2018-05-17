<!-- CSS: dist/css/md.css -->

# Modules

Editable fields are referenced in the code samples inside of curly braces.

Eg. **Field Name** = `{Field Name}`


## Home Page Image Slider

The [Home Page Slider](site/index.html) is a module that consists of the repeatable field, **Slide**.

##### Sub Fields:
* **Image** – *image*
* **Slide Title** – *plain text*
* **Slide Subtitle** – *plain text*
* **Color** – *select*

```html
<div id="hero-swiper" class="hero-swiper swiper-container">

  <div class="swiper-wrapper">

    <!-- for each {Block List Item} -->
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


## Block Lists

Block Lists are styled lists with that contain block-level HTML elements within each `li`. They consist of the repeatable field, **Block List Item** which include various sub fields based on the type of list.

### Unordered Block List

#### Sub Fields:
* **Header** – *plain text*
* **Content** – *rich text*

```html
<ul class="block-list block-list--unordered split--30-70">

  <!-- for each {Block List Item} -->
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

Sub Fields: **Content (rich text)**


```html
<ol class="block-list block-list--ordered single-column">

  <!-- for each {Block List Item} -->
  <li class="block-list-item">
    {Content}
  </li>
  <!-- /for each -->

</ol>

```











## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

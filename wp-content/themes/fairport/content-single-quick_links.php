<?php
/**
 * @package Toolbox
 */
 
global $post;

 
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="entry-header">
    <!-- .entry-meta --> 
  </header>
  <!-- .entry-header -->
  
  <div class="entry-content">
    <?php ?>
  </div>
  <!-- .entry-content -->
  
  <footer class="entry-meta">
    <?php ?>
  </footer>
  <!-- .entry-meta --> 
</article>
<!-- #post-<?php the_ID(); ?> --> 

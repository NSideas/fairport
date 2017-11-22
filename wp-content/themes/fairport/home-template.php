<?php
/**
 * Template Name: Home Page Template
 *
 * @package Toolbox
 * @subpackage Templates
 * @since Toolbox 0.1
 */
$yt=$_GET['yt'];
if(!$yt){
	get_header(); 
global $post;
?><div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

		<div id="primary">
			<div id="content" role="main">
            	<div id="ring">
                    <img src="/wp-content/themes/fairport/assets/images/ring-shim.gif" alt="" width="520" height="520" border="0" usemap="#Map" />
                    <map name="Map" id="Map">
                      <area shape="poly" coords="15,204,89,221,96,199,107,174,121,152,141,132,161,115,185,101,150,34,123,49,94,71,64,105,42,134,26,165" href="#" alt="0" />
                      <area shape="poly" coords="151,34,184,100,206,94,230,87,258,84,281,87,309,91,331,101,335,101,368,34,342,23,304,12,257,10,208,13,178,23" href="#" alt="1" />
                      <area shape="poly" coords="368,34,334,101,355,112,375,128,392,143,405,161,417,182,425,202,430,222,505,204,494,173,477,131,450,94,418,64,393,46" href="#" alt="2" />
                      <area shape="poly" coords="430,221,503,203,508,230,509,262,508,295,500,327,494,349,483,372,472,394,456,415,398,370,399,366,413,347,425,318,434,282,436,251,434,233" href="#" alt="3" />
                      <area shape="poly" coords="398,370,456,416,422,450,388,473,355,491,316,504,259,510,260,434,281,433,309,429,342,417,365,400,383,386" href="#" alt="4" />
                      <area shape="poly" coords="260,434,258,509,228,509,197,503,164,490,128,474,105,456,85,440,64,414,121,369,137,384,140,388,152,397,167,410,195,422,222,431,241,434" href="#" alt="5" />
                      <area shape="poly" coords="62,414,123,368,115,358,102,338,92,314,86,283,84,254,89,222,15,204,9,247,14,305,26,352,41,382" href="#" alt="6" />
                    </map>
              </div><!-- #ring -->
              <hr class="thick"/>
              <h3 class="subhead">Recent News</h3>
              <div class="columns">
              	<div class="column left-column">
					<?php
						$pq = new WP_Query(array('post_type'=>'post','posts_per_page'=>4,'order_by'=>'date','order'=>'DESC'));
						if(!empty($pq->posts)){
							$output='<div id="home-news">';
							foreach($pq->posts as $p){
								$cats = get_the_category($p->ID);
								$active_cats=array();
								foreach($cats as $cat){
									$active_cats[]=$cat->slug;
								}
								ksort($active_cats);
								
								$output.='<article id="post-'.$p->ID.'" class="post-'.$p->ID.' post type-post">';
								$link=get_permalink($p->ID);
								$output.='<p><a href="'.$link.'" class="post-title-link">'.$p->post_title.': </a>';
								$output.='<span>'.yeOldeTruncate(strip_tags($p->post_content),90,0).'</span>&nbsp;';
								//$output.='<a href="'.$link.'" class="more-link">more</a></p>';
								
								$pdf_download = get_post_meta($p->ID,'pdf_file',true);
								if(!empty($pdf_download)){
									$pdf_url = wp_get_attachment_url($pdf_download);
									$output.='<a href="'.$pdf_url.'" target="_blank" class="more-link">Download</a>';
								}else{
									$output.='<a href="'.$link.'" class="more-link">More</a>';
								}
								$output.='</p>';
								$output.='</article>';
							}
							$output.='</div>';
							echo $output;
						}
					?>
                </div>
                <div class="column right-column">
                	<div class="home-entry-content"><?=$post->post_content?></div>
                    <p class="clearboth facebook-link"><a href="http://www.Facebook.com/FairportAssetManagement" target="_blank"><strong>Fairport Asset Management on Facebook</strong></a></p>
                    <div class="fb-like" data-href="http://www.Facebook.com/FairportAssetManagement" data-send="false" data-width="290" data-show-faces="false" data-font="arial"></div>
                </div>
              </div>
			</div><!-- #content -->
		</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); 
}else{
	?><html><head><title>YouTube Video</title><style type="text/css">html,body{margin:0;padding:0;}</style></head><body><iframe width="560" height="315" src="http://www.youtube.com/embed/<?=$yt;?>?rel=0&amp;wmode=transparent&amp;autoplay=1" frameborder="0" allowfullscreen></iframe></body></html><?php	
}?>
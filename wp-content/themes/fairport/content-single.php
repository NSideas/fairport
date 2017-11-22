<?php
/**
 * @package Toolbox
 */
 
global $post;
$cats = get_the_category();
$cats_in=array();
foreach($cats as $cat){
	$cats_in[]=$cat->slug;	
}
 
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="entry-header"><h1 class="entry-title"><?php the_title(); ?></h1><div class="entry-meta">
      <h2><?php
            //toolbox_posted_on(); 
			if($post->post_type=='post'){
				if(in_array('newsletter-compass',$cats_in) || in_array('webinar-fairport-in-fifteen',$cats_in)){
					//$date = date('F Y',strtotime($post->post_date));//IDK YET
					//echo $date;
				}
			}
			$pdf = get_post_meta($post->ID,'pdf_file',true);
			if(!empty($pdf)){
				if(!empty($date)){
					echo ' | ';	
				}
				$pdf_link = wp_get_attachment_url($pdf);
				echo '<a href="'.$pdf_link.'" class="pdf-link" target="_blank">Download PDF</a>';
			}
			
			?></h2>
    </div>
    <!-- .entry-meta --> 
  </header>
  <!-- .entry-header -->
  
  <div class="entry-content">
    <?php 
			if(in_array('newsletter-compass',$cats_in)){
				echo '<img src="/wp-content/themes/fairport/assets/images/compass.gif" class="alignleft" border="0" alt="Compass - Newsletter"/>';
			}
			if(in_array('webinar-fairport-in-fifteen',$cats_in)){
				//echo '<img src="/wp-content/themes/fairport/assets/images/fifteen.gif" class="alignleft" border="0" alt="Fairport in Fifteen - Webinar"/>';						
			}
			
        	the_content(); 
		?>
    <?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'toolbox' ), 'after' => '</div>' ) ); ?>
  </div>
  <!-- .entry-content -->
  
  <footer class="entry-meta">
    <?php
			$cats = wp_get_post_categories($post->ID);
			$tags = get_the_tags($post->ID);
			$o='';
			if(!empty($cats)){
				if(count($cats)==1){
					$o.='Category: ';
					$cat = get_category($cats[0]);
					$o.='<a href="/category/'.$cat->slug.'">'.$cat->name.'</a>';
				}else{
					$o.='Categories: ';
					foreach($cats as $cid){
						$cat = get_category($cid);
						$o.='<a href="/category/'.$cat->slug.'">'.$cat->name.'</a>';
						if($cid!=end($cats)){
							$o.=', ';	
						}
					}
				}
			}
			if(!empty($tags)){
				if(!empty($cats)){
					$o.=' | ';
				}
				if(count($tags)==1){
					$o.='Tag: ';
					foreach($tags as $tag){
						$o.='<a href="/tag/'.$tag->slug.'">'.$tag->name.'</a>';
					}
				}else{
					$o.='Tags: ';
					foreach($tags as $tag){
						$o.='<a href="/tag/'.$tag->slug.'">'.$tag->name.'</a>';
						if(end($tags)!=$tag){
							$o.=', ';	
						}
					}
				}
			}
			echo '<p>'.$o.'</p>';
		?>
    
    <div class="share-meta cf">
      <div class="share-button">Share <span class="plus-icon">+</span>
        <div class="share-panel"><img src="/wp-content/themes/fairport/assets/images/lil-grey-arrow.gif" border="0" alt="&lt;" class="panel-arrow" />
          <div id="share-twitter-button"><a href="http://twitter.com/intent/tweet?source=webclient&text=<?=rawurlencode(''.$post->post_title.' '.get_permalink($post->ID).' via @FairportAsset');?>" title="Tweet this Post on Twitter"><img src="/wp-content/themes/fairport/assets/images/twitter-btn.gif" border="0" alt="Twitter" /></a></div>
          <div id="share-facebook-button"><a href="http://www.facebook.com/sharer.php?u=<?=rawurlencode(get_permalink($post->ID));?>&t=<?=rawurlencode($post->post_title);?>" title="Like this Post on Facebook"><img src="/wp-content/themes/fairport/assets/images/facebook-btn.gif" border="0" alt="Facebook" /></a></div>
        </div>
      </div>
    </div>
    
    <?
	?>
    
    <?php // edit_post_link( __( 'Edit', 'toolbox' ), '<span class="edit-link">', '</span>' ); ?>
  </footer>
  <!-- .entry-meta --> 
</article>
<!-- #post-<?php the_ID(); ?> --> 

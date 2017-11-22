<?php
/**
 * @package Toolbox
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class('cf'); ?>>
	<header class="entry-header">
		<h2 class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'toolbox' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php
        	$cats = get_the_category(get_the_ID());
			$active_cats=array();
			foreach($cats as $cat){
				$active_cats[]=$cat->slug;	
			}
			ksort($active_cats);
			if(!is_search()){
				if(in_array('newsletter-compass',$active_cats)){
					echo '<img width="52" height="52" src="/wp-content/themes/fairport/assets/images/compass-sm.gif" class="attachment-thumbnail wp-post-image" alt="Compass" title="Compass">';
				}elseif(in_array('webinar-fairport-in-fifteen',$active_cats)){
					echo '<img width="52" height="52" src="/wp-content/themes/fairport/assets/images/fifteen-sm.gif" class="attachment-thumbnail wp-post-image" alt="15" title="15">';
				}else{
					if(has_post_thumbnail()){
						the_post_thumbnail('thumbnail');	
					}else{
						echo '<img width="52" height="52" src="/wp-content/themes/fairport/assets/images/default.gif" class="attachment-thumbnail wp-post-image" alt="Fairport Asset Management" title="Fairport Asset Management">';
					}
				}
			}
		?><?php the_title(); ?></a></h2>

		<?php /* if ( 'post' == get_post_type() ) : ?>
		<div class="entry-meta">
			<?php toolbox_posted_on(); ?>
		</div><!-- .entry-meta -->
		<?php endif; */ ?>
	</header><!-- .entry-header -->

	<?php
    /*if ( is_search() || true==true ) : // Only display Excerpts for Search ?>
	<div class="entry-summary">
		<?php the_excerpt(); ?>
	</div><!-- .entry-summary -->
	<?php else : ?>
	<div class="entry-content">
		<?php the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'toolbox' ) ); ?>
		<?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'toolbox' ), 'after' => '</div>' ) ); ?>
	</div><!-- .entry-content -->
	<?php endif; */
	?>
    <div class="entry-content">
    <?php
    	$pid=get_the_ID();
		$p=get_post($pid);
		echo '<p class="entry-summary">'.yeOldeTruncate(strip_tags($p->post_content),165,0);
		$pdf_download = get_post_meta($pid,'pdf_file',true);
		$c = $p->post_content;
		$c = strip_tags($c);
		$c = trim($c);
		if(!empty($c)){
			echo '&nbsp;';	
		}
		if(!empty($pdf_download)){
			$pdf_url = wp_get_attachment_url($pdf_download);
			echo '<a href="'.$pdf_url.'" target="_blank" class="more-link">Download</a>';
		}else{
			echo '<a href="'.get_permalink($pid).'" class="more-link">More</a>';
		}
		echo '</p>';
	?>
    </div>

	<footer class="entry-meta">
		<?php if ( 'post' == get_post_type() ) : // Hide category and tag text for pages on Search ?>
        	<span class="post-date">Posted on <?=date('F d, Y',strtotime($p->post_date)); ?></span>
			<?php
				$categories_list = get_the_category_list( __( ', ', 'toolbox' ) );
				if ( $categories_list && toolbox_categorized_blog() ) :
			?><span class="cat-links"><?php printf(__(' in %1$s','toolbox'),$categories_list);?></span><?php // ?>
			<?php endif; // End if categories ?>
		<?php endif; // End if 'post' == get_post_type() ?>
	</footer><!-- #entry-meta -->
</article><!-- #post-<?php the_ID(); ?> -->

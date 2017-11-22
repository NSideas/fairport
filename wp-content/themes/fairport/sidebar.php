<?php
/**
 * The Sidebar containing the main widget areas.
 *
 * @package Toolbox
 * @since Toolbox 0.1
 */
?>
		<div id="secondary" class="widget-area" role="complementary"><div id="sidebar-inner">
			<?php
            	global $post;
				if(!is_search()){
					do_action( 'before_sidebar' );				
					
					$csbs = get_post_meta($post->ID,'custom_sidebars',true);
					if($csbs>0){
						$o='<div class="custom-sidebars">';
						for($i=0;$i<$csbs;$i++){
							$o.='<div class="custom-sidebar">';
							$sbt=get_post_meta($post->ID,'custom_sidebars_'.$i.'_sidebar_title',true);
							$sbc=get_post_meta($post->ID,'custom_sidebars_'.$i.'_sidebar_content',true);
							$o.='<h3>'.$sbt.'</h3>';
							$o.='<div class="custom-sidebar-content cf">'.content_filter(do_shortcode($sbc)).'</div>';						
							$o.='</div>';	
						}
						$o.='</div>';
						echo $o;	
					}
					$do_blog_side = false;
					if(is_search()||is_home()||is_archive()){
						$do_blog_side=true;
					}
					if(is_single() && $post->post_type=='post'){
						$do_blog_side=true;	
					}
					if($do_blog_side==true){
						$o='';
						$o.='<h3>Categories</h3>';
						$cats = get_categories();
						if(count($cats)>0){
							$o.='<ul class="no-bullet category-list">';
							foreach($cats as $cat){
								$o.='<li>';
								$o.='<a href="/category/'.$cat->slug.'">'.$cat->name.'</a> ('.$cat->count.')';
								$o.='</li>';
							}
							$o.='</ul>';
						}
						$o.='<h3>Archives</h3>';
						$archives=wp_get_archives(array('type'=>'yearly','format'=>'custom','after'=>'|||','before'=>'','echo'=>0,'show_post_count'=>true));
						$archives=explode('|||',$archives);
						array_pop($archives);
						$o.='<ul class="archive-year-list no-bullet">';
						foreach($archives as $a){
							$o.='<li>'.$a.'</li>';
						}
						$o.='</ul>';
						$o.='<h3>Tags</h3>';
						$tags=get_tags(array('orderby'=>'count','order'=>'DESC','hide_empty'=>true));
						$tc=0;
						$cutoff=3;
						if(!empty($tags)){
							$o.='<ul class="tag-list no-bullet">';
							foreach($tags as $tag){
								if($tc==$cutoff){
									$o.='<li><a href="#" class="more-tags-btn">More...</a></li>';	
								}
								$o.='<li';
								if($tc>=$cutoff){
									$o.=' class="closed"';	
								}
								$o.='><a href="/tag/'.$tag->slug.'">'.$tag->name.'</a>&nbsp;('.$tag->count.')</li>';
								$tc++;
							}
							$o.='</ul>';
						}
						echo $o;	
					}
				if ( ! dynamic_sidebar( 'sidebar-1' ) ) : ?>
                
			<?php endif;				
					$qla=get_post_meta($post->ID,'quick_links_items',true);
					if(!empty($qla) && gettype($qla)!='array'){
						$qla = explode(',',$qla);	
					}
					if(!empty($qla)){						
						$output='<div id="quicklinks-sidebar">';
						$output.='<h3>Quick Links</h3>';
						foreach($qla as $qlid){
							$link = get_post_meta($qlid,'url_link',true);
							$ql = get_post($qlid);
							$img_src=get_post_meta($qlid,'sidebar_image',true);
							$pdf = get_post_meta($qlid,'pdf_file',true);
							if(!empty($pdf)){
								$link = wp_get_attachment_url($pdf);
							}
							if(!empty($img_src)){
								$img_src=wp_get_attachment_url($img_src);
								$img='<img class="quick-link-thumb" src="'.$img_src.'" alt="'.$ql->post_title.'" border="0"/>';
							}else{
								$img='';
							}
							if($ql->post_status=='publish'){
								$output.='<article class="quick-link-item"><a href="'.$link.'" class="quick-link-link"><strong class="quick-title">'.$ql->post_title.':</strong> <span class="quick-excerpt">'.$img.''.strip_tags($ql->post_content).'</span><span class="more-link">';
								//'&nbsp;<span class="more-link">more</span></a></article>';
								if(!empty($img_src)){
									$output.='';
								}else{
									$output.='&nbsp;';
								}
								if(!empty($pdf)){
									$output.='download';
								}else{
									$output.='more';
								}
								
								$output.='</span></a>';
								$output.='</article>';
							}
						}
						$output.='</div>';
						echo $output;
					}
            	//print_r($post);
				}
			?>
            <?php
				if(is_single() && $post->post_type=='quick_links'){
					?>
                    <div id="quicklinks-sidebar">
                    	<h3>Quick Links</h3>
                        <?php
							$qlid=$post->ID;
							$link = get_post_meta($qlid,'url_link',true);
							$ql = $post;
							$img_src=get_post_meta($qlid,'sidebar_image',true);
							$pdf = get_post_meta($qlid,'pdf_file',true);
							if(!empty($pdf)){
								$link = wp_get_attachment_url($pdf);
							}
							if(!empty($img_src)){
								$img_src=wp_get_attachment_url($img_src);
								$img='<img class="quick-link-thumb" src="'.$img_src.'" alt="'.$ql->post_title.'" border="0"/>';
							}else{
								$img='';
							}
							$output.='<article class="quick-link-item"><a href="'.$link.'" class="quick-link-link"><strong class="quick-title">'.$ql->post_title.':</strong> <span class="quick-excerpt">'.$img.''.strip_tags($ql->post_content).'</span><span class="more-link">';
							//'&nbsp;<span class="more-link">more</span></a></article>';
							if(!empty($img_src)){
								$output.='';
							}else{
								$output.='&nbsp;';
							}
							if(!empty($pdf)){
								$output.='download';
							}else{
								$output.='more';
							}
							
							$output.='</span></a>';
							echo $output;
						?>
                    </div>
                    <?php
				}
			?>
		</div></div><!-- #secondary .widget-area -->

		<?php if ( is_active_sidebar( 'sidebar-2' ) ) : ?>
		<div id="tertiary" class="widget-area" role="complementary">
			<?php dynamic_sidebar( 'sidebar-2' ); ?>
		</div><!-- #tertiary .widget-area -->
		<?php endif; ?>
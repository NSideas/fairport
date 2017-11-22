<?php
/**
 * Template Name: Sitemap Page Template
 *
 * @package Toolbox
 * @subpackage Templates
 * @since Toolbox 0.1
 */
	get_header(); 
	global $post;
?>		<div id="primary">
			<div id="content" role="main">
            	<h1>Sitemap</h1>
            	<?php
					$pid_exclude = array(58);
					$pq = new WP_Query(array('post_type'=>'page','posts_per_page'=>-1,'orderby'=>'parent','order'=>'ASC'));
					if(!empty($pq->posts)){
						$pages = array();
						foreach($pq->posts as $p){
							if(!in_array($p->ID,$pid_exclude)){
								if($p->post_parent == 0){
									$pages[$p->ID] = array();
								}else{
									if(array_key_exists($p->post_parent,$pages)){
										$pages[$p->post_parent][$p->ID]=array();	
									}else{
										$parent = get_post($p->post_parent);	
										$gpid = $parent->post_parent;
										if(array_key_exists($gpid,$pages)){
											$pages[$gpid][$p->post_parent][$p->ID]=array();	
										}else{
											$gp = get_post($gpid);
											$ggpid = $gp->post_parent;
											if(array_key_exists($ggpid,$pages)){
												$pages[$ggpid][$gpid][$p->post_parent][$p->ID]=array();
											}else{
												$ggp = get_post($ggpid);
												$gggpid = $ggp->post_parent;
												if(array_key_exists($gggpid,$pages)){
													$bpages[$gggpid][$ggpid][$gpid][$p->post_parent][$p->ID]=array();
												}else{
													// greater than great great grand child (not going that far sorry)
												}
											}
										}
									}
								}
							}
						}
						ksort($pages);
						//print_r($pages);
						
						$output.='<ul id="sitemap-page-list">';
						
						foreach($pages as $p1i=>$p1k){
							$output.='<li class="sitemap-page-item" id="sitemap-page-id-'.$p1i.'">';
							$output.='<a href="'.get_permalink($p1i).'">';
							$output.=get_the_title($p1i);
							$output.='</a>';
							if(!empty($p1k)){
								$output.='<ul class="sitemap-page-children-list sitemap-page-list">';
								ksort($p1k);
								foreach($p1k as $p2i=>$p2k){
									$output.='<li class="sitemap-page-item sitemap-page-child-item" id="sitemap-page-id-'.$p2i.'">';
									$output.='<a href="'.get_permalink($p2i).'">';
									$output.=get_the_title($p2i);
									$output.='</a>';
									if(!empty($p2k)){
										ksort($p2k);
										$output.='<ul class="sitemap-page-grandchildren-list sitemap-page-list">';
										foreach($p2k as $p3i=>$p3k){
											$output.='<li class="sitemap-page-item sitemap-page-grandchild-item" id="sitemap-page-id-'.$p3i.'">';
											$output.='<a href="'.get_permalink($p3i).'">';
											$output.=get_the_title($p3i);
											$output.='</a>';
											if(!empty($p3k)){
												ksort($p3k);
												$output.='<ul class="sitemap-page-greatgrandchildren-list sitemap-page-list">';
												foreach($p3k as $p4i=>$p4k){
													$output.='<li class="sitemap-page-item sitemap-greatgrandpage-child-item" id="sitemap-page-id-'.$p4i.'">';
													$output.='<a href="'.get_permalink($p4i).'">';
													$output.=get_the_title($p4i);
													$output.='</a>';
													$output.='</li>';//great grand child
												}
												$output.='</ul>';//great grand children
											}
											$output.='</li>';//grand child
										}
										$output.='</ul>';//grand children
									}
									$output.='</li>';//child
								}
								$output.='</ul>';//children
							}
							$output.='</li>';//top-level
						}
						$output.='</ul>';//top-level pages
						echo $output;
					}
				?>
            	
			</div><!-- #content -->
		</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package Toolbox
 * @since Toolbox 0.1
 */
?><!DOCTYPE html>
<!--[if IE 6]>
<html id="ie6" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 7]>
<html id="ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html id="ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 6) | !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<?php //<!--[if lte IE 9]> ?>
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
<?php //<![endif]--> ?>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=1024<?php //echo ', initial-scale=1.0';//FIX A SAFARI BUG? ?>" />
<meta property="og:title" content="Fairport Asset Management"/>
<!--<meta property="og:url" content="http://fairportasset.com"/>-->
<meta property="og:image" content="http://fairportasset.com/wp-content/themes/fairport/assets/images/Fairport-Social-Media.gif?i=<?=md5(date('F Y',time()))?>"/>
<meta property="og:site_name" content="Fairport Asset Management"/>
<meta property="og:description" content="Fairport Asset Management provides the high net worth community with a broad range of wealth management services, with investment management as our core expertise. We lead the coordinated implementation of our clients’ investment plans, taking into account net worth, cash flow needs and asset allocation strategies."/>
<title><?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 */
	global $page, $paged;

	wp_title( '|', true, 'right' );

	// Add the blog name.
	bloginfo( 'name' );

	// Add the blog description for the home/front page.
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
		echo " | $site_description";

	// Add a page number if necessary:
	if ( $paged >= 2 || $page >= 2 )
		echo ' | ' . sprintf( __( 'Page %s', 'toolbox' ), max( $paged, $page ) );

	?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
<link rel="stylesheet" type="text/css" media="all" href="/wp-content/themes/fairport/assets/js/fancybox/jquery.fancybox-1.3.4.css" />
<?php if ( is_singular() && get_option( 'thread_comments' ) ) wp_enqueue_script( 'comment-reply' ); ?>
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<!--[if lt IE 9]>
<style type="text/css">
	@font-face {font-family: 'ProximaNova-Regular';src: url('/wp-content/themes/fairport/webfonts/eot/style_148510.eot?#iefix');font-weight:normal;font-style:normal;}
    @font-face {font-family: 'ProximaNova-Bold';src: url('/wp-content/themes/fairport/webfonts/eot/style_148514.eot?#iefix');font-weight:bold;font-style:normal;}
</style>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
<script src="/wp-content/themes/fairport/assets/js/fancybox/jquery.fancybox-1.3.4.js" type="text/javascript"></script>
<script src="/wp-content/themes/fairport/assets/js/custom.js" type="text/javascript"></script>
<?php wp_head(); ?>
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-33274566-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
</head>

<body <?php body_class(); ?>>
<!--[if lt IE 8]><div id="iewarning" style="background:#FFF;"><h2 style="margin:0;padding:10px 0 10px;text-align:center">It appears you are using an older browser. This site is optimized for modern browsers. <br>To get more out of your browsing experience <a href="http://www.browsehappy.com" target="_blank" class="external">upgrade your browser</a>.</h2></div><![endif]-->
<div id="faux-left-white"></div>
<div id="faux-right-white"></div>
<div id="page" class="hfeed wrapper">
<?php do_action( 'before' ); ?>
	<header id="branding" role="banner" class="cf">
		<hgroup>
			<h1 id="site-title"><a href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home"><?php //bloginfo( 'name' ); ?><strong>Fairport</strong> Asset Management</a></h1>
			<h2 id="site-description"><?php //bloginfo( 'description' ); ?>Advice with <em><strong>your</strong></em> best interests in mind</h2>
		</hgroup>

		<nav id="access" role="navigation">
			<h1 class="assistive-text section-heading"><?php _e( 'Main menu', 'toolbox' ); ?></h1>
			<div class="skip-link screen-reader-text"><a href="#content" title="<?php esc_attr_e( 'Skip to content', 'toolbox' ); ?>"><?php _e( 'Skip to content', 'toolbox' ); ?></a></div>

			<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
		</nav><!-- #access -->
        <div id="header-meta"><div id="header-search-form"><form action="/" method="get"><input type="text" name="s" id="s" class=" label-inside" value="<?php if(!empty($_GET['s'])){echo $_GET['s'];}else{echo 'Search';}?>" /><input type="submit" id="search-submit" value="Search"/></form></div><a href="/news-resources/client-logins/" class="button">Client Logins</a> <div id="subscript-button"><span class="subscribe-text button">Subscribe</span><div id="subscribe-window"><span class="subscribe-form-header">eNewsletter Subscribe</span><!--<form action="/" method="post"><input type="text" name="name" class="text label-inside" id="subscribe-name" value="Name"/><input type="text" name="email" id="subscribe-email" class="text label-inside" value="Email"/><a href="#" class="cancel-button">Cancel</a><input type="submit" id="subscribe-submit" value="Subscribe"/></form>--><form name="ccoptin" action="http://visitor.r20.constantcontact.com/d.jsp" target="_blank" method="post"><input type="hidden" name="llr" value="rplwtucab"/><input type="hidden" name="m" value="1102350855665"/><input type="hidden" name="p" value="oi"/><input type="text" class="text label-inside" name="ea" id="subscribe-email" value="Email"/><a href="#" class="cancel-button">Cancel</a><input type="submit" name="go" value="Subscribe" id="subscribe-submit" class="submit"/>
</form></div></div></div>
        <div id="header-social">
        		<a href="https://www.linkedin.com/company/fairport-asset-management" class="linkedin-icon social-icon" target="_blank">LinkedIn</a>
        		<a href="https://www.youtube.com/user/FairportAsset" class="youtube-icon social-icon" target="_blank">YouTube</a>
           	<a href="https://twitter.com/#!/FairportAsset" class="twitter-icon social-icon" target="_blank">Twitter</a>
          	<a href="http://www.facebook.com/FairportAssetManagement" class="facebook-icon social-icon" target="_blank">Facebook</a>
       	</div>
	</header><!-- #branding -->

	<div id="main" class="cf">
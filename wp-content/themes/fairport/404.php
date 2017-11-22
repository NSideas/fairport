<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package Toolbox
 * @since Toolbox 0.1
 */

get_header(); ?>

	<div id="primary">
		<div id="content" role="main">

			<article id="error404-page" class="error404 not-found">
				<header class="entry-header">
					<h1 class="entry-title">You must be lost...</h1>
				</header>

				<div class="entry-content">
					<h2>The page you are looking for does not exist. Sorry!</h2>
                    <h3>This could have happened because:</h3>
					<ul>
                    	<li>The page you are looking for has moved.</li>
                    	<li>The page you are looking for no longer exists.</li>
                    	<li>The URL is slightly incorrect.</li>
                    </ul>
					<p>Use the main navigation to help you find your way, or <a href="/">go to Home</a>.</p>
				</div><!-- .entry-content -->
			</article><!-- #post-0 -->

		</div><!-- #content -->
	</div><!-- #primary -->

<?php get_footer(); ?>
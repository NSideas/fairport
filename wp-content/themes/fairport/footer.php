<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package Toolbox
 * @since Toolbox 0.1
 */
?>
</div>
<!-- #main -->

</div>
<!-- #page -->

<footer id="footer" role="contentinfo">
  <div id="inner-footer">
    <div id="footer-logo"> <a href="/"><img src="/wp-content/themes/fairport/assets/images/logo-FAM.gif" height="48" width="220" alt="Fairport Asset Management" border="0" /></a> </div>
    <div id="footer-info">
      <p>Fairport Asset Management</p>
      <p>1350 Euclid Avenue, Suite 400 | Cleveland, Ohio 44115-1833</p>
      <p>216.431.3000 or 800.222.7459 | <a href="mailto:Hello{at}FairportAsset{dot}com" class="mailto">Hello{at}FairportAsset{dot}com</a></p>
      <p>&copy; Fairport Asset Management. All rights reserved.</p>
      <p class="ns-credit"><a href="http://NSideas.com" target="_blank">Site Design: Nesnadny + Schwartz, Cleveland + New York + Toronto</a></p>
    </div>
    <div id="footer-links">
    	<p><a href="/news-resources/client-logins/">Client Logins</a>&nbsp;&nbsp;&nbsp;<a href="/terms">Terms</a>&nbsp;&nbsp;&nbsp;<a href="/sitemap">Sitemap</a></p>
    </div>
  </div>
</footer>
<!-- #footer -->
<?php wp_footer(); ?>
<!--<div id="fb-root"></div>
<script type="text/javascript">(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));</script>-->

<!--Click Dimensions-->
<script type="text/javascript" src="https://analytics.clickdimensions.com/ts.js" > </script>
<script type="text/javascript">
   var cdAnalytics = new clickdimensions.Analytics('analytics.clickdimensions.com');
   cdAnalytics.setAccountKey('aKGoKKiPNjEWJNl0t5IXfg');
   cdAnalytics.setDomain('fairportasset.com');
   cdAnalytics.setScore(typeof(cdScore) == "undefined" ? 0 : (cdScore == 0 ? null : cdScore));
   cdAnalytics.trackPage();
 </script>

</body></html>
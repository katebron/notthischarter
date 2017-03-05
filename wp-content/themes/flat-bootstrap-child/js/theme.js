/**
 * Theme: Flat Bootstrap Child
 * 
 * Javascript misc
 *
 * @package flat-bootstrap
 */
 
( function( $ ) {
 
	// Touchscreen swipe through carousel (slider)
	$(document).ready(function() {  

      
      $('#post-587 h2').prepend('<svg class="icon icon-person"><use xlink:href="#icon-person"></use></svg>');
      $('#post-589 h2').prepend('<svg class="icon icon-organization"><use xlink:href="#icon-organization"></use></svg>');
      $('#post-591 h2').prepend('<svg class="icon icon-vote"><use xlink:href="#icon-vote"></use></svg>');
      $('#post-974 h2').prepend('<svg class="icon icon-presentation"><use xlink:href="#icon-presentation"></use></svg>');

	// Put anything added to content by plugins at the end. This way our sub-pages and
	// recent post sections, etc. appear before it.
	/*$(document).ready(function() {
		$( '#xsbf-after-content' ).wrapAll( '<div id="xsbf-after-content-wrapper" />' );
		$( '#xsbf-entry-content' ).append( $( '#xsbf-after-content-wrapper' ) );
	});*/

	});
	
} )( jQuery );
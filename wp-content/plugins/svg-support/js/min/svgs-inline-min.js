jQuery(document).ready(function($){String.prototype.endsWith||(String.prototype.endsWith=function(t,e){var r=this.toString();("number"!=typeof e||!isFinite(e)||Math.floor(e)!==e||e>r.length)&&(e=r.length),e-=t.length;var n=r.lastIndexOf(t,e);return n!==-1&&n===e});var t="img."!==cssTarget?cssTarget:"img.style-svg";$(t).each(function(t){var e=jQuery(this),r=e.attr("id"),n=e.attr("class"),i=e.attr("src");i.endsWith("svg")&&$.get(i,function(i){var a=$(i).find("svg"),s=a.attr("id");"undefined"==typeof r?"undefined"==typeof s?(r="svg-replaced-"+t,a=a.attr("id",r)):r=s:a=a.attr("id",r),"undefined"!=typeof n&&(a=a.attr("class",n+" replaced-svg svg-replaced-"+t)),a=a.removeAttr("xmlns:a"),e.replaceWith(a),$(document).trigger("svg.loaded",[r])},"xml")})});
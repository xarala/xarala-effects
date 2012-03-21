/**
 *  Externalize link jQuery plugin
 *  @author Pathe SENE
 *
 */


(function($){ // self calling function receiving jQuery object as arg

    // take external links and set their target attribute to _blank
    $.fn.externalizeLinks = function(){

      return this.each(function(){
        $(this).attr('target', '_blank');
      });

    };

    // call the function directly here
    $('a[href^=http]').externalizeLinks();

})(jQuery);   // end function



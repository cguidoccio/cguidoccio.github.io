jQuery(document).ready(function() {
  var groupClasses = new Array();
  jQuery('.search-result.solr-grouped').each(function(index, item){
    item = jQuery(item)
    currentGroupClass = item.attr('class').substr(item.attr('class').lastIndexOf('solr-group-'));
    if(jQuery.inArray(currentGroupClass, groupClasses) < 0) {
      groupClasses.push(currentGroupClass);
    }
  });

  jQuery.each(groupClasses, function(index, item) {
    currentGroup = jQuery('.search-result.solr-grouped.' + item);
    currentGroup.wrapAll('<li id="' + item + '-all" />');
    currentGroup.wrapAll('<ol class="apachesolr_search-results-grouped search-results-grouped">');
    jQuery('#' + item + '-all').prepend('<span>Group: ' + item.replace('solr-group-', '') +'</span>');
  });
});
;
(function($, Drupal) {

  Drupal.behaviors.st_tweetable = {
    attach: function (context, settings) {
      $(".st-tweetable", context).each(function(e) {
        var $el = $(this), url = 'https://twitter.com/intent/tweet?', parts = [];
        if(!$el.hasClass('processed')) {
          parts.push('text=' + encodeURIComponent($el.data('alt') ? $el.data('alt') : $el.text()));
          if($el.data('hashtag')) {
            parts.push('hashtags=' + encodeURIComponent($el.data('hashtag')));
          }
          if($el.data('url')) {
            parts.push('url=' + encodeURIComponent($el.data('url')));
          }
          url += parts.join('&');
          $el.append('<a href="' + url + '" target="_blank"><i></i>Tweet</a>');
        }
      });

      $(".st-tweetable", context).hover(
        function() {
          $(this).find('a').fadeIn(200);
        },
        function() {
          $(this).find('a').fadeOut(200);
        });
    }
  };

})(jQuery, Drupal);
;

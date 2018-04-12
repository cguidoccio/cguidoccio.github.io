(function($, Drupal) {

  Drupal.behaviors.stFeed = {
    attach: function(context, settings) {
      // Search Feed List
      this.searchFeedList(context, settings);

      // Search Feed List for All Fields
      this.searchOnSubmitFeedList(context, settings);
    },

    /**
     * Search Feed List
     */
    searchFeedList: function(context, settings) {
      $("#feed_list_form .job_location").change(function() {
        event.preventDefault();
        $( "#feed_list_form" ).trigger( "submit" );
      });
    },

    /**
     * Search Feed List for All Fields
     */
    searchOnSubmitFeedList: function(context, settings) {
      $( "#feed_list_form" ).submit(function( event ) {
        event.preventDefault();
        var title_str = $(this).find(".search").val();
        var job_location = $(this).find("option:selected").val();

        var data = { 'title_str' : title_str, 'job_location' : job_location };
        // ajax operation for search dataa
        $.ajax({
          type: "POST",
          url: '/feed/search/all/fields',
          data : data,
          success:function(data) {
            $(".feed_list_container").html(data);
          },
          complete: function(data){

          }
        });

      });
    }


  };

})(jQuery, Drupal);
;
(function($, Drupal) {

  Drupal.behaviors.stMisc = {
    attach: function(context, settings) {
      // News List Tab Functionality
      this.newsListTab(context, settings);
      this.jobListing(context, settings);

    },

    /**
     * News List Tab Functionality
     */
    newsListTab: function(context, settings) {
      $(".news-list-with-tab .view-content .news-list-single").hide();
      $(".news-list-with-tab .view-content ul:first").show();
      $(".news-list-with-tab .view-content a.tab-single").appendTo("#news_tab_list");
      $(".news-list-with-tab #news_tab_list a:first").addClass("active");

      $("#news_tab_list .tab-single").click(function(e) {
        e.preventDefault();
        $(".news-list-with-tab #news_tab_list a").removeClass("active");
        $(this).addClass("active");
        var tab_value = $(this).attr("rel");
        $(".news-list-with-tab .view-content .news-list-single").hide();
        $(".news-list-with-tab .view-content .news-list-single.news-list-"+tab_value).show();
      });
    },

    jobListing: function(context, settings) {
      $( ".view-job-openings .views-row .jop-openning-accordian" ).accordion({collapsible: true, active: false});
      //$( ".corporate-responsibility .field-collapsible-list" ).accordion({collapsible: true, active: false});
      $( ".corporate-responsibility .collapsible-content" ).accordion({collapsible: true, active: false});
    }

  };

$( document ).ready(function() {
    $('.field-name-field-subtitle a.ckeditor_links').hide();
});

})(jQuery, Drupal);
;

$(document).ready(function(){
  var domain = window.location.host;
  $('ul.tabs').tabs();
  $('.tab').stop().click(function(event) {
    var link = $(this).data('link');
    var id = link.substr(1);
    var path = window.location.pathname;
    var protocol = window.location.protocol;
    if(link.substr(0,1) == '/'){
      try{
        if(path == '/')
          $("html, body").animate({ scrollTop: $(id).offset().top-80 }, 1000);
      }
      catch(e){
        console.log(e);
      }
      window.location = protocol + '//' + domain + link;
    }
    else{
      window.location = link;
    }
  });
  $('#nav-mobile .tab').click(function(event) {
    $('.button-collapse').click();
  });
});
$(document).ready(function() {
     $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    $('select').material_select();
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

  /*Search bar script*/
  $(document).ready(function(){
      $('#explore-location-suggest').css('display','none');
      $('#explore-keywords-dropdown').css('display','none');

      $('#logged-in-home-search').css('opacity','0.9');
      $('#location_contianer').click(function(){
          $('#logged-in-home-search').css('opacity','1');

          $('#explore-location-suggest').css('display','block');
          $('#location_contianer').css('border-bottom-left-radius','0px');
          $('#explore-keywords-dropdown').css('display','none');

      })
      $('#keywords_container').click(function(){
          $('#logged-in-home-search').css('opacity','1');
          $('#explore-location-suggest').css('display','none');
          $('#location_contianer').css('border-bottom-left-radius','5px');
          $('#explore-keywords-dropdown').css('display','block');
      })
      $('#keywords_container').on( 'keydown', function ( e ) {
          if ( e.keyCode === 27 ) { // ESC
                  $('#explore-keywords-dropdown').hide();
                  $('#logged-in-home-search').css('opacity','0.9');

                  $('#location_contianer').css('border-bottom-left-radius','5px');
           }
      });
      $('#location_contianer').on( 'keydown', function ( e ) {
          if ( e.keyCode === 27 ) { // ESC
                  $('#explore-location-suggest').hide();
                  $('#logged-in-home-search').css('opacity','0.9');

                  $('#location_contianer').css('border-bottom-left-radius','5px');
           }
      });
      $(document).mouseup(function (e)
      {
          var container = $("#explore-location-suggest");

          if (!container.is(e.target) // if the target of the click isn't the container...
              && container.has(e.target).length === 0) // ... nor a descendant of the container
          {
              container.hide();
              $('#logged-in-home-search').css('opacity','0.9');
          }
          else{
              $('#location_contianer').css('border-bottom-left-radius','5px');
          }
      });
      $(document).mouseup(function (e)
      {
          var container = $("#explore-keywords-dropdown");

          if (!container.is(e.target) // if the target of the click isn't the container...
              && container.has(e.target).length === 0) // ... nor a descendant of the container
          {
              container.hide();
              $('#logged-in-home-search').css('opacity','0.9');
          }
          else{
              $('#location_contianer').css('border-bottom-left-radius','5px');
          }
      });
      $('#cities-1').hover(function() {

      $('#city-details-1').css('visibility','visible')
        },function() {

      $('#city-details-1').css('visibility','hidden')
        });
      $('#cities-2').hover(function() {

      $('#city-details-2').css('visibility','visible')
        },function(){
          $('#city-details-2').css('visibility','hidden')
        });
      $('#cities-3').hover(function() {

      $('#city-details-3').css('visibility','visible')
        },function(){
          $('#city-details-3').css('visibility','hidden')
        });
      $('#cities-4').hover(function() {

      $('#city-details-4').css('visibility','visible')
        },function(){
          $('#city-details-4').css('visibility','hidden')
        });
      $('#cities-5').hover(function() {

      $('#city-details-5').css('visibility','visible')
        },function(){
          $('#city-details-5').css('visibility','hidden')
        });
      $('#cities-6').hover(function() {

      $('#city-details-6').css('visibility','visible')
        },function(){
          $('#city-details-6').css('visibility','hidden')
        });

  });


  /*Ends*/
  });

(function($){
  $(function(){

    var window_width = $(window).width();

    // convert rgb to hex value string
    function rgb2hex(rgb) {
      if (/^#[0-9A-F]{6}$/i.test(rgb)) { return rgb; }

      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      function hex(x) {
          return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    $('.dynamic-color .col').each(function () {
      $(this).children().each(function () {
        var color = $(this).css('background-color'),
            classes = $(this).attr('class');
        $(this).html(rgb2hex(color) + " " + classes);
        if (classes.indexOf("darken") >= 0) {
          $(this).css('color', 'rgba(255,255,255,.9');
        }
      });
    });


    // Floating-Fixed table of contents
    if ($('nav').length) {
      $('.toc-wrapper').pushpin({ top: $('nav').height() });
    }
    else {
      $('.toc-wrapper').pushpin({ top: 0 });
    }


    // Toggle Flow Text
    var toggleFlowTextButton = $('#flow-toggle')
    toggleFlowTextButton.click( function(){
      $('#flow-text-demo').children('p').each(function(){
          $(this).toggleClass('flow-text');
        })
    });

//    Toggle Containers on page
    var toggleContainersButton = $('#container-toggle-button');
    toggleContainersButton.click(function(){
      $('body .browser-window .container, .had-container').each(function(){
        $(this).toggleClass('had-container');
        $(this).toggleClass('container');
        if ($(this).hasClass('container')) {
          toggleContainersButton.text("Turn off Containers");
        }
        else {
          toggleContainersButton.text("Turn on Containers");
        }
      });
    });
    //analytics
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-64572466-1', 'auto');
      ga('send', 'pageview');

    // Detect touch screen and enable scrollbar if necessary
    function is_touch_device() {
      try {
        document.createEvent("TouchEvent");
        return true;
      } catch (e) {
        return false;
      }
    }
    if (is_touch_device()) {
      $('#nav-mobile').css({ overflow: 'auto'})
    }

  $( "#sendsms" ).click(function() {
      var q = $("#phone-number").val();
      $.ajax({
        type: 'POST',
        url: '/sendsms?',
        data: { 'name' : q },
        dataType: 'json',
        success: function(data) {
          if(data.status === 1) {
            var value = data.status;
            $('#error-msg').hide();
            $('#send-msg').hide();
            $('#success-msg').show();
          } else {
            var value = data.status;
            $('#error-msg').show();
          }
        },
        error: function(data) {
          var value = data.status;
          $('#error-msg').show();
        }
    });
});



    // Plugin initialization
    $('.slider').slider({full_width: true});
    $('.dropdown-button').dropdown({hover: false});
    // $('.tab-demo').show().tabs();
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();
    $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav({'edge': 'left'});
    $('.datepicker').pickadate();
    $('select').not('.disabled').material_select();

    $("#searchterm").keyup(function(e){
          var q = $("#searchterm").val();
          $.getJSON("http://fitsquareapp.cloudapp.net:1330/gyms/searchlocality?",
          {
            name: q,
            action: "query",
            list: "search",
            format: "json"
          },
          function(data) {
            $("#results").empty();
            // $("#results").append("<p>Results for <b>" + q + "</b></p>");
            $.each(data.localities, function(i,item){
              //$("#results").append("<div><a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.locality) + "'>" + item.locality + "</a><br>" + item.locality + "<br><br></div>");
              // $("#results").append("<a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.locality) + "'><li class='item'><div class = 'start-step-label'>" + item.locality + "</a><br></div></li>");
              $("#results").append("<li class='item' id = 'item1' value = '"+item.locality +"' ><div class = 'start-step-label'>" + item.locality + "<br></div></li>");
            });
          });
          // $("#searchterm").val("anurag");
          // $("#results").hover(function(){
          //  $( this ).append( $( "<span> ***</span>" ) );
          // });
        });

    $("#search-gyms").keyup(function(e){
          var q = $("#search-gyms").val();
          $.getJSON("http://fitsquareapp.cloudapp.net:1330/gyms/searchgym?",
          {
            name: q,
            action: "query",
            list: "search",
            format: "json"
          },
          function(data) {
            $("#search-results").empty();
            // $("#search-results").append("<p>tResults for <b>" + q + "</b></p>");
            $.each(data.gyms, function(i,item){
              $("#search-results").append("<a href='/view/Bangalore/" + encodeURIComponent(item.locality + '/' + item.name) + "'><li class='item' value = '"+item.name +"' ><div class = 'start-step-label'>" + item.name + "</a><br></div></li>");
            });
          });
        });
  }); // end of document ready
})(jQuery); // end of jQuery name space

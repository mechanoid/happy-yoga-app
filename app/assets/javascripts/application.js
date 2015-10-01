/*jslint devel: true, white: true */
/*global $, setTimeout */

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require parallax
//= require_tree .


(function(){
  "use strict";
  if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
    $("a").click(function(){
        //we just need to attach a click event listener to provoke iPhone/iPod/iPad's hover event
        //strange
    });
  }


  $('.hy-navbar-toggle,.hy-link-list-item').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.hy-layout-header').toggleClass('with-menu-opened');
  });




  $('.hy-navbar .hy-link-list-item').on('mouseover', (function() {
    var $toggle;

    return function() {
      var linkOffset, $item;

      if($toggle === undefined || $toggle === null) {
        $toggle = $(this).parents('.hy-navbar').find('.hy-navbar-toggle');
      }

      $item = $(this);

      linkOffset = $item.offset().top;
      $toggle.css('top', linkOffset);
    };
  }()));

  $('.hy-navbar .hy-link-list-item').on('mouseout click', (function() {
    var $toggle;

    return function() {
      if($toggle === undefined || $toggle === null) {
        $toggle = $(this).parents('.hy-navbar').find('.hy-navbar-toggle');
      }
      // setTimeout(function() {
      $toggle.css('top', 0);
      // }, 500);
    };
  }()));

  var activatePreviewRoll = function(previewList) {
    var $previewList, activatePreviewItem, $previewListItems, getNextItem, $activeItem, changeRate;
    $previewList = $(previewList);

    changeRate = 3000;
    $previewListItems = $('.hy-course-preview-list-item', $previewList);

    getNextItem = function($beforeItem) {
      var $nextItem = $beforeItem.next();


      if ($nextItem.length < 1) {
        $nextItem = $activeItem.parents().children().first();
      }

      activatePreviewItem($beforeItem, $nextItem);
    };

    activatePreviewItem = function($beforeItem, $item) {
      // SETUP
      // make sure active element is on top
      $beforeItem.css('position', 'absolute').css('top', 0).css('opacity', '1');
      // position the next element below of the content area
      $item.css('position', 'absolute').css('top', parseInt($item.outerHeight(), 10)).css('opacity', '0');

      setTimeout(function() {
        $beforeItem.css('top', -1 * parseInt($item.outerHeight(), 10)).css('opacity', '0');
        $item.css('top', 0).css('opacity', '1');
        getNextItem($item);
      }, changeRate);
    };

    // Let the caroussel only start if there is more than one child
    if ($previewListItems.length > 2) {
      $activeItem = $previewListItems.first();
      getNextItem($activeItem);
    } else if ($previewListItems.length > 1) {
      $activeItem = $previewListItems.first();
      $activeItem.parent().append($activeItem.clone());
      getNextItem($activeItem);
    }

  };


  $('.hy-course-preview-list').each(function(i, list) {
    setTimeout(function() {
      activatePreviewRoll(list);
    }, i * 1000);
  });
}());

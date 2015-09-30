/*jslint devel: true, white: true */
/*global $ */

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

  $('.hy-navbar-toggle,.hy-link-list-item').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.hy-layout-header').toggleClass('with-menu-opened');
    console.log($(this).parents('.hy-layout-header').css('left'));
  });

  $('.hy-link-list-item').on('mouseover', (function() {
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

  $('.hy-link-list-item').on('mouseout', (function() {
    var $toggle;

    return function() {
      if($toggle === undefined || $toggle === null) {
        $toggle = $(this).parents('.hy-navbar').find('.hy-navbar-toggle');
      }

      $toggle.css('top', 0);
    };
  }()));
}());

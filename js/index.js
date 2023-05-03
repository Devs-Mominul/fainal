$('.banner_slide').slick({
   
  nextArrow:".next",
  prevArrow:".prev"
});
// init Isotope
var $grid = $('.item-details').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
$('.another').slick({
   
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow:".dan",
  prevArrow:".bam",
  autoplay: true,
  autoplaySpeed: 2000,
});
$('.feed-text').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  dots:true,
  arrows:false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
				
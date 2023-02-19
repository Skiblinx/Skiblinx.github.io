// $(".testimonial_slider_area").owlCarousel({
//     autoplay:true,
//     slideSpeed:4000,
//     items:3,
//     nav:false,
//     navText: ['<i class ="fa fa-arrow-left"></i>', '<i class ="fa fa-arrow-right"></i>'],
//     margin:30,
//     dots:false,
//     responsive:{
//       375:{
//         items:1,
//         dots:true,
//       },
//       600:{
//         items:2
//       },
//       767:{
//         items:3
//       },
//       1000:{
//         items:3
//       }
//     }
  
//   })

 

const NAVTOGGLE = document.querySelector('.nav-toggle');
  const NAV = document.querySelector('.nav');

  NAVTOGGLE.addEventListener('click', () => {
    NAV.classList.toggle('nav--visible');
  })
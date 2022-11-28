$('.items').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

let image1 = document.getElementById('image-1')
fetch(`https://api.unsplash.com/photos/random?client_id=VUVYw0LK2mpBsk5brcR14DcIQpVvh_kXrh0jLZTVDTU`)
  .then((response) => response.json())
  .then((data) => {
    image1.src = data.urls.regular
  })
let image2 = document.getElementById('image-2')
  fetch(`https://api.unsplash.com/photos/random?client_id=VUVYw0LK2mpBsk5brcR14DcIQpVvh_kXrh0jLZTVDTU`)
    .then((response) => response.json())
    .then((data) => {
      image2.src = data.urls.regular
    })
let image3 = document.getElementById('image-3')
fetch(`https://api.unsplash.com/photos/random?client_id=VUVYw0LK2mpBsk5brcR14DcIQpVvh_kXrh0jLZTVDTU`)
  .then((response) => response.json())
  .then((data) => {
    image3.src = data.urls.regular
  })

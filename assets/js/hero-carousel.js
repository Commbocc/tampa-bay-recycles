(function() {
  $(function() {

    var baseurl = $('#header-3').data('baseurl')

    var slides = $('#header-3').data('images').map(function(x){ return [baseurl, x].join('') })

    preload(slides)

    var active = 0

    setBgImg(active)

    setInterval(function(){
      active++

      if (active === slides.length) {
        active = 0
      }

      setBgImg(active)

    }, 5500)

    function preload(arrayOfImages) {
      $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this
      })
    }

    function setBgImg(arrayIndex) {
      $('#header-3 .hero').css('background-image', `url('${slides[arrayIndex]}')`)
    }

  })
}).call(this)

(function () {setup = {
    color: "white",
    radius: 5,
    max_speed:0.9,
    max_angle:0.3,
    opacity: 1,
    value: 35,
    time: 3,
    image:"http://www.blog.jonnycornwell.com/wp-content/uploads/2012/07/Smoke10.png",
}
  smokes = []
  var img = new Image();
  var bg = new Image();



  let canvas = document.createElement('canvas')
  ctx = canvas.getContext('2d')


  w = canvas.width = document.body.clientWidth
  h = canvas.height = document.body.clientHeight
  cw = w/2
  ch = h/2


  document.querySelector('body').appendChild(canvas)


  window.onresize = function(){
  w = canvas.width = document.body.clientWidth
  h = canvas.height =document.body.clientHeight}





  class Smoke {
    constructor() {
      this.x = cw
      this.y = ch
      this.image = setup.image
      if (Math.round(Math.random()) == 1){
        this.vector = Math.random()*(setup.max_speed*1.3)-setup.max_speed

      } else {
        this.vector = 0 - (Math.random()*(setup.max_speed*1.3)-setup.max_speed)

      }
      if (Math.round(Math.random()) == 1){
        this.vert = Math.random()*(setup.max_angle*1.3)-setup.max_angle

      } else {
        this.vert = 0 - (Math.random()*(setup.max_angle*1.3)-setup.max_angle)

      }


    }
    pos() {
      this.x += this.vector
      this.y += this.vert*0.3

    }
    initDraw(){
      ctx.drawImage(img,this.x-128,this.y-128);

      // ctx.beginPath()
      // ctx.arc(this.x, this.y, setup.radius, 0, Math.PI * 2)
      //
      //
      // ctx.closePath()
      // ctx.fillStyle = setup.color
      // ctx.fill()
    }

  }

  function draw() {
    for (i in smokes){

      smokes[i].initDraw()
      smokes[i].pos()

    }

  }

  function dBG() {
    ctx.fillStyle = "rgba(0,0,0,0.9)"


    ctx.fillRect(0,0,w,h)
    // ctx.drawImage(bg,0,0)


  }


  function loop(){
    dBG()
    draw()

    requestAnimationFrame(loop)
    }



  function init(){
    for (i=0; i<setup.value;i++){
      smokes.push(new Smoke)
    }
    loop()
  }

bg.src="https://img.freepik.com/free-photo/electronic-cigarette-on-black-background_158023-787.jpg"
bg.style.height="100px"


img.style.opacity=setup.opacity;
img.src=setup.image;
init()
}())

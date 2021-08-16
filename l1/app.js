var first_text = document.querySelector(".first_text")
first_text.innerHTML = first_text.textContent.replace(/\S/g, '<span>$&</span>')

var hrf = location.href
var q = hrf.substring(hrf.indexOf("?")+1)

if (q.length == 3 || q.length == 6) {
  var color = "#"+q
} else {
  var color = "#fff"
}

first_text.addEventListener("mouseover", function(event){
  if (event.target.tagName != 'SPAN') return
  var et = event.target
  //console.log(event.target)
  et.classList.add('active')

  et.style.color = color
})

const iptTranslateX = document.querySelector('#ipt_translatex')
const iptTranslateY = document.querySelector('#ipt_translatey')
const iptRotate = document.querySelector('#ipt_rotate')
const iptScale = document.querySelector('#ipt_scale')

const box = document.querySelector('.container-box')

var translateX = 0
var translateY = 0
var rotate = 0
var scale = 1

iptTranslateX.addEventListener('change', () => {
  translateX = iptTranslateX.value === '' ? 0 : iptTranslateX.value
  box.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`
})

iptTranslateY.addEventListener('change', () => {
  translateY = iptTranslateY.value === '' ? 0 : iptTranslateY.value
  box.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`
})            

iptScale.addEventListener('change', () => {
  scale = iptScale.value === '' ? 1 : iptScale.value
  box.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`
})

iptRotate.addEventListener('change', () => {
  rotate = iptRotate.value === '' ? 0 : iptRotate.value
  box.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`
})
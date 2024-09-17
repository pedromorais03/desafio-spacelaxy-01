const iptTranslateX = document.querySelector('#ipt_translatex')
const iptTranslateY = document.querySelector('#ipt_translatey')
const iptRotate = document.querySelector('#ipt_rotate')
const iptScale = document.querySelector('#ipt_scale')
const iptSkewX = document.querySelector('#ipt_skewx')
const iptSkewY = document.querySelector('#ipt_skewy')
const iptOpacity = document.querySelector('#ipt_opacity')

const box = document.querySelector('.container-box')

var translateX = 0
var translateY = 0
var rotate = 0
var scale = 1
var skewx = 0
var skewy = 0
var opacity = 0

iptTranslateX.addEventListener('change', () => {
  translateX = iptTranslateX.value === '' ? 0 : iptTranslateX.value
  box.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale}) skew(${skewx}deg, ${skewy}deg)`
})

iptTranslateY.addEventListener('change', () => {
  translateY = iptTranslateY.value === '' ? 0 : iptTranslateY.value
  box.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale}) skew(${skewx}deg, ${skewy}deg)`
})            

iptScale.addEventListener('change', () => {
  scale = iptScale.value === '' ? 1 : iptScale.value
  box.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale}) skew(${skewx}deg, ${skewy}deg)`
})

iptRotate.addEventListener('change', () => {
  rotate = iptRotate.value === '' ? 0 : iptRotate.value
  box.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale}) skew(${skewx}deg, ${skewy}deg)`
})

iptSkewX.addEventListener('change', () => {
  skewx = iptSkewX.value === '' ? 0 : iptSkewX.value
  box.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale}) skew(${skewx}deg, ${skewy}deg)`
})

iptSkewY.addEventListener('change', () => {
  skewy = iptSkewY.value === '' ? 0 : iptSkewX.value
  box.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale}) skew(${skewx}deg, ${skewy}deg)`
})

iptOpacity.addEventListener('change', () => {
  opacity = iptOpacity.value === '' ? 0 : iptOpacity.value
  if(opacity > 1){
    opacity = 1
  }else if(opacity < 0){
    opacity = 0
  }
  box.style.transform = `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale}) skew(${skewx}deg, ${skewy}deg)`
  box.style.opacity = opacity
})
const wrapper = document.querySelector('.wrapper')
const row = wrapper.querySelector('.row__inner')

const INIT_ROTATE = 0
let translateX = INIT_ROTATE
let startTranslateX  = 0
let startTouches = 0

const touchStart = (event) => {
  startTouches = event.changedTouches[0]
  startTranslateX = translateX
}

const touchMove = (event) => {
  const moveTouches = event.changedTouches[0]
  const differenceStartMove = startTouches.pageX - moveTouches.pageX
  
  translateX = startTranslateX + differenceStartMove
  
  console.log('translateX', translateX)
  
  if (translateX <= -200) {
    translateX = -200
    row.style.transform = `translateX(${ translateX }px)`
    return
  }
  if (translateX >= 200) {
    translateX = 200
    row.style.transform = `translateX(${ translateX }px)`
    return
  }
  
  row.style.transform = `translateX(${ translateX }px)`
}

wrapper.addEventListener('touchstart', touchStart)
wrapper.addEventListener('touchmove', touchMove)


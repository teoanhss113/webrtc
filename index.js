const btnCameraOn = document.querySelector('[name="btn-camera-on"]')
const btnCameraOff = document.querySelector('[name="btn-camera-off"]')
const btnMicrophoneOn = document.querySelector('[name="btn-microphone-on"]')
const btnMicrophoneOff = document.querySelector('[name="btn-microphone-off"]')
const btnLeave = document.querySelector('[name="btn-leave"]')
const btnParticipants = document.querySelector('[name="btn-participants"]')
const btnCloseParticipants = document.querySelector(
  '[name="btn-close-participants"]'
)
const sidebar = document.querySelector('.sidebar')

btnCameraOn.addEventListener('click', () => {
  btnCameraOff.classList.remove('d-none')
  btnCameraOn.classList.add('d-none')
})

btnCameraOff.addEventListener('click', () => {
  btnCameraOn.classList.remove('d-none')
  btnCameraOff.classList.add('d-none')
})

btnMicrophoneOn.addEventListener('click', () => {
  btnMicrophoneOff.classList.remove('d-none')
  btnMicrophoneOn.classList.add('d-none')
})

btnMicrophoneOff.addEventListener('click', () => {
  btnMicrophoneOn.classList.remove('d-none')
  btnMicrophoneOff.classList.add('d-none')
})

btnLeave.addEventListener('click', () => {
  window.location.href = '/'
})

btnParticipants.addEventListener('click', () => {
  sidebar.classList.toggle('d-none')
})

btnCloseParticipants.addEventListener('click', () => {
  sidebar.classList.add('d-none')
})

function resizeIframe(obj) {
  obj.style.height =
    obj.contentWindow.document.documentElement.scrollHeight + 'px'
}

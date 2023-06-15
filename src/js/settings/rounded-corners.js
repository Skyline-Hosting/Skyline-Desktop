var setTheme = localStorage.getItem('rounded-corners')
console.log('Rounded Corners:', setTheme)
if (setTheme == null){
    swapRoundedCorners('./css/settings/rounded-corners/off.css')
}else{
    swapRoundedCorners(setTheme)
}
function swapRoundedCorners(sheet){
  document.getElementById('rounded-corners-setting').href = sheet
  localStorage.setItem('rounded-corners', sheet)
}
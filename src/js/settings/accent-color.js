var setTheme = localStorage.getItem('accent')
console.log('Accent Color:', setTheme)
if (setTheme == null){
    swapAccentColor('./css/settings/accent-color/default.css')
}else{
    swapAccentColor(setTheme)
}
function swapAccentColor(sheet){
  document.getElementById('accent-setting').href = sheet
  localStorage.setItem('accent', sheet)
}
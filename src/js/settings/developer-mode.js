var setTheme = localStorage.getItem('developer-mode')
console.log('Developer Mode:', setTheme)
if (setTheme == null){
    developerMode('./css/settings/developer-mode/off.css')
}else{
    developerMode(setTheme)
}
function developerMode(sheet){
  document.getElementById('developer-mode').href = sheet
  localStorage.setItem('developer-mode', sheet)
}
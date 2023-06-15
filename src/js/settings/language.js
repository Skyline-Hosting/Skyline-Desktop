var setTheme = localStorage.getItem('language')
console.log('Language:', setTheme)
if (setTheme == null){
  setLanguage('./css/settings/language/english.css')
}else{
  setLanguage(setTheme)
}
function setLanguage(sheet){
  document.getElementById('language').href = sheet
  localStorage.setItem('language', sheet)
}
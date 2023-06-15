webview = document.querySelector('webview')
var webviewCP = document.getElementById('client_panel_wv');
var webviewGP = document.getElementById('game_panel_wv');
var webviewSP = document.getElementById('support_wv')
var webviewAC = document.getElementById('account_wv')
var webviewHC = document.getElementById('help_wv')
var webviewPHP = document.getElementById('webviewPHP')

// For Developers
function CP_wvDevTools(){webviewCP.openDevTools()}
function wvDevTools(){webviewGP.openDevTools()}
function SP_wvDevTools(){webviewSP.openDevTools()}
function webviewAC(){webviewAC.openDevTools()}
function webviewHC(){webviewHC.openDevTools()}

// General Controls
function CP_wvGoBack(){webviewCP.goBack()}
function CP_wvGoForward(){webviewCP.goForward()}
function CP_mvBlank(){webviewCP.loadURL('https://skylinehosting.org')}
function mvClientPanel(){webviewCP.loadURL('https://dashboard.skylinehosting.org/')}

function phpma_wvGoBack(){webviewPHP.goBack()}
function phpma_wvGoForward(){webviewPHP.goForward()}
function phpma_mvBlank(){webviewPHP.loadURL('')}
function mvphpmyadmin(){webviewPHP.loadURL('')}

function wvGoBack(){webviewGP.goBack()}
function wvGoForward(){webviewGP.goForward()}
function mvBlank(){webviewGP.loadURL('https://panel.skylinehosting.org')}
function mvGamePanel(){webviewGP.loadURL('https://panel.skylinehosting.org')}

// Other Functions
function loadGamePanel() {
  mvGamePanel();
  document.getElementById('game_panel_wv').style.display = 'inline-flex';
  document.getElementById('game_panel-loaded').style.display = 'inline-flex';
}

function unloadGamePanel() {
  mvBlank();
  document.getElementById('game_panel_wv').style.display = 'none';
  document.getElementById('game_panel-loaded').style.display = 'none';
}


// Detect Loading State
// onload = () => {
//   const indicator = document.querySelector('.indicator')

//   const loadstart = () => {
//       console.log('Webview is loading')
//   }

//   const loadstop = () => {
//       console.log('Webview is done loading')
//   }

//   webviewGP.addEventListener('did-start-loading', loadstart)
//   webviewGP.addEventListener('did-stop-loading', loadstop)
// }


var webview = document.getElementById('uptime');
webview.addEventListener('dom-ready', function () {
    webview.insertCSS('.page-content, body {background: transparent !important;} html::-webkit-scrollbar {width: 0px !important;} -webkit-scrollbar {width: 0px !important;} .page-header,.page-prefooter{display:none!important}.note.note-success.note-bordered{display:none!important}div#twitterport_md{display:none!important}.col-lg-4.col-md-6.col-sm-6.col-xs-12.searchcol{display:none!important}.col-lg-4.col-md-6.col-sm-6.col-xs-12.overalluptime{display:none!important}.col-lg-4.col-md-12.col-sm-12.col-xs-12.dbbtns,.col-lg-4.col-md-12.col-sm-12.col-xs-12.dbbtns.dbbtnstop{display:none!important}#bulkreportcontainer #datatable_products,.portlet.light{background-color:transparent!important;color:#fff!important}#bulkreportcontainer .table-bordered>tbody>th,#bulkreportcontainer table .heading{display:none!important}.table-bordered{border:none!important}#bulkreportcontainer .table-bordered>tbody>tr>td,#bulkreportcontainer .table-bordered>tbody>tr>th,#bulkreportcontainer .table-bordered>tfoot>tr>td,#bulkreportcontainer .table-bordered>tfoot>tr>th,#bulkreportcontainer .table-bordered>thead>tr>td,#bulkreportcontainer .table-bordered>thead>tr>th{border:none!important;border-bottom:none!important}')
});

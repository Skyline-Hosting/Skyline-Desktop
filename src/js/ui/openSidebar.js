function openSidebar() {
    document.getElementById("sb_mini").style.left = "0";
    document.getElementById("sb_mini_isOpen").style.display = 'block';
    document.getElementById("sb_mini_isClose").style.display = 'none';
}

function closeSidebar() {
    document.getElementById("sb_mini").style.left = "-250";
    document.getElementById("sb_mini_isOpen").style.display = 'none';
    document.getElementById("sb_mini_isClose").style.display = 'block';
}

window.addEventListener('resize', resize);

function resize() {

    if (window.innerWidth < 700) {
        document.getElementById('sb_mini').style.zIndex = "5";
        document.getElementById('sb_mini').style.backdropFilter = "blur(10px)";

        document.getElementById("sb_mini").style.left = "-250";
        
        document.getElementById("ct_mini").style.left = "0";
        document.getElementById("ct_mini").style.width = "100%";

        document.getElementById('sb_ct').style.display = 'block';
        document.getElementById('sb_mini_isClose').style.display = 'block';
        document.getElementById('sb_mini_isOpen').style.display = 'none';

        document.getElementById('titlebar').style.width = '410px';
        document.getElementById('titlebar').style.left = '115px';
    }
    else {
        document.getElementById("sb_mini").style.left = "0";
        
        document.getElementById("ct_mini").style.left = "250";
        document.getElementById("ct_mini").style.width = "calc(100% - 250px)";

        document.getElementById('sb_ct').style.display = 'none';
        document.getElementById('sb_mini_isClose').style.display = 'none';
        document.getElementById('sb_mini_isOpen').style.display = 'none';
    }
}
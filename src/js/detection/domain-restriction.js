var url = window.location.href;
setTimeout(
    () => {
        console.log(url)
    }, 2000);
if(url.startsWith("https://skylinehosting.org")
|| url.startsWith("https://skylinehosting.org/blesta/")
|| url.startsWith("https://www.skylinehosting.org")
|| url.startsWith("https://www.skylinehosting.org/blesta")
|| url.startsWith("https://www.skylinehosting.org/blesta/client")
|| url.startsWith("https://www.skylinehosting.org/blesta/client/login")
|| url.startsWith("https://dashboard.skylinehosting.org")
|| url.startsWith("https://cpanel.skylinehosting.org")
|| url.startsWith("https://skylinehosting.org/")
|| url.startsWith("https://panel.skylinehosting.org/")
|| url.startsWith("https://discord.com/")
|| url.startsWith("http://localhost:3000/domain-access.html")
|| url.startsWith("https://discord.gg/skylinehosting")
)
{} else if(!url.startsWith("https://skylinehosting.org")) {
    return location.href = "http://localhost:3000/domain-access.html";
}
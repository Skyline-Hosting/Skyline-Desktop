var url = window.location.href;
if(url.startsWith("https://skylinehosting.org/")
|| url.startsWith("https://dashboard.skylinehosting.org/")
|| url.startsWith("https://panel.skylinehosting.org/")
|| url.startsWith("https://discord.com/")
|| url.startsWith("http://localhost:9999/domain-access.html")
|| url.startsWith("https://discord.gg/skylinehosting")
)
{} else {setTimeout(() => {location.href = 'http://localhost:3000/domain-access.html'}, 500);}
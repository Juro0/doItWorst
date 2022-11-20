
$(document).ready(()=>{

    $("#downloadAndroid").click(()=>{
        window.open("https://play.google.com/store/apps/details?id=com.bereal.ft&referrer=utm_source%3Dlanding%26utm_medium%3Dwebsite%26utm_campaign%3Dlanding&pli=1")
    });
    $("#downloadIos").click(()=>{
        window.open("https://apps.apple.com/us/app/bereal-uncontrollable-photos/id1459645446?pt=117262097&ct=Landing&mt=8")
    });
    $("#socialInsta").click(()=>{
        window.open("https://www.instagram.com/bereal/")
    });
    $("#socialTwitter").click(()=>{
        window.open("https://twitter.com/bereal_app")
    });
    $("#socialFacebook").click(()=>{
        window.open("https://www.facebook.com/BeRealApp")
    });

});

// KEYBOARD LISTENERS
document.addEventListener('keydown', (event) => {
    var code = event.code;

    if(code=="ArrowRight") { carousel() }

});
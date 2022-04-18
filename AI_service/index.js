window.onload = function () {
    let subscriptionKey = "a7bd36d68ed24c808602cc42ba5a3c36";
    let serviceRegion = "eastus";

    let speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
    speechConfig.speechSynthesisLanguage = "zh-CN"
    var synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig);

    let content = document.getElementById("article-container")

    let arr = content.innerText.split('\n');

    let text = "";
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === '') {
            text += "。"
        } else {
            text += arr[i];
        }
    }

    (function () {
        synthesizer.speakTextAsync(
            text,
            function (result) {
                console.log(text);
                window.console.log(result);
                synthesizer.close();
                synthesizer = undefined;
            },
            function (err) {
                console.log("fuck");
                window.console.log(err);
                synthesizer.close();
                synthesizer = undefined;
            });
    })();
}
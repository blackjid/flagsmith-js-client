var environmentID = 'tKnQSzLyxwkMWAABCJP9Yi'

function identify() {
    bulletTrain.identify("bullet_train_sample_user")
}

function toggleTrait () {
    bulletTrain.setTrait('example_trait', "Some value " + Math.floor(Math.random() * 10)+"");
}

function login () {
    bulletTrain.identify("bullet_train_sample_user");
};

function logout () {
    bulletTrain.logout();
};

function increment (value) {
    bulletTrain.incrementTrait("button_clicks", value)
};

document.getElementById("js-login").addEventListener("click", login);
document.getElementById("js-logout").addEventListener("click", logout);
document.getElementById("js-toggle-trait").addEventListener("click", toggleTrait);
document.getElementById("js-increment").addEventListener("click", function (){
    increment(1)
});
document.getElementById("js-decrement").addEventListener("click", function (){
    increment(-1)
});

//Intialise Bullet Train
bulletTrain.init({
    environmentID: environmentID,
    defaultFlags: {
        font_size: 10
    },
    onChange: function() {
        document.getElementById("loaded").classList.remove("hidden")
        document.getElementById("loading").classList.add("hidden")

        console.log("Received flags", bulletTrain.getAllFlags())

        if (bulletTrain.identity) {
            document.getElementById("logged-in").classList.remove("hidden")
            document.getElementById("logged-out").classList.add("hidden")
            document.getElementById("js-button-clicks").innerText = bulletTrain.getTrait("button_clicks");
            document.getElementById("js-example-trait").innerText = bulletTrain.getTrait("example_trait") + "";
            if (bulletTrain.getSegments()) {
                document.getElementById("js-segments").innerText = Object.keys(bulletTrain.getSegments() ).join(", ");
            }
        } else {
            document.getElementById("logged-out").classList.remove("hidden")
            document.getElementById("logged-in").classList.add("hidden")
        }
        document.getElementById("js-data").innerText = JSON.stringify(bulletTrain.getAllFlags(), null, 2);
    }
});

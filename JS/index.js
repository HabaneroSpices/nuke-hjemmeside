const advSwitchState = localStorage.getItem('advancedSwitch')

function advancedSwitch() {
    saveAdvancedSwitch()
    location.reload();
}


function main() {
    if (getUrlVars()["loc"]) { // Create back button if any location attribute is present.
        var backBtn = document.createElement("a")
        backBtn.setAttribute("role","button")
        backBtn.textContent = "Tilbage til kort"
        backBtn.setAttribute("href","index.html")
        backBtn.classList = "btn btn-outline-danger"
        document.getElementById("containerLogo").appendChild(backBtn)
    }
    if (getUrlVars()["loc"] == "thisted") {
        console.log(advSwitchState)
        if (advSwitchState == "true") {
            console.log("Funny enabled Thisted")
            document.getElementById("drift").src = "img/thisted-status.png"
            document.getElementById("drift").useMap = "#rotator"
        } else {
            document.getElementById("drift").src = "img/DRIFT-THISTED.png"
            //document.getElementById("drift").useMap = "#rotator"
        }
    } else if (getUrlVars()["loc"] == "hq") {
        if (advSwitchState == "true") {
            console.log("Funny enabled HQ")
            document.getElementById("drift").src = "img/hq-status.png"
        } else {
            console.log("Funny enabled HQ")
            document.getElementById("drift").src = "img/DRIFT-HQ.png"
        }
    } else {
        if (advSwitchState == "true"){
            document.getElementById("drift").src = "img/gammelt-kort.png"
            document.getElementById("drift").useMap = "#kort"
        } else {
            document.getElementById("drift").src = "img/kort.png"
            document.getElementById("drift").useMap = "#kort"
        }
    }
}

main()
localSettings = [];

function saveAdvancedSwitch(){
   // BANNER MSG, ON/OFF
    localSettings["advancedSwitch"] = document.getElementById("advancedSwitch").checked;

    Object.entries(localSettings).forEach(([key, value]) => {
        localStorage.setItem(key, value);
    });
}

function loadValues(){
    Object.entries(localStorage).forEach(([key, value]) => {
        document.getElementById(key).value = value
         //console.log(value)
        if (value == "true") {
            document.getElementById(key).checked = true;
        }
    });
}
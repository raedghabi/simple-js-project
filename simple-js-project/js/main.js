let addInput = document.getElementsByClassName("classes-to-add")[0];
let rmvInput = document.getElementsByClassName("classes-to-remove")[0];
let list = document.getElementsByClassName("classes-list")[0];
let resultDiv = document.createElement("div");
let resultSpan = document.createElement("span");


addInput.onblur = function() {
    let val = addInput.value.split(" ").filter(item => item.trim() !== "");

    for (i=0;i < val.length; i++){
        let fistcurr = val[i].trim();
        let securr = val[i + 1] ;
        
            
        if( val.length < 2 ) {
            resultDiv.innerText = fistcurr.toLowerCase();
            list.appendChild(resultDiv);
        }  else {
            resultDiv.innerText = fistcurr.toLowerCase();
            resultSpan.innerText = securr.toLowerCase();
            list.appendChild(resultDiv);
            if (securr)list.appendChild(resultSpan);
        }

        if (val.length === 0) {
            list.innerText = "no classes";
        }
        console.log(val)
    }

        addInput.value ="";

}

rmvInput.onblur = function () {
    let val = rmvInput.value;

        if (val === resultDiv.innerText ) {
            resultDiv.remove();
        } 
        if (val === resultSpan.innerText) {
            resultSpan.remove()
        }
        rmvInput.value ="";

}
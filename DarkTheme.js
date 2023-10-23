

export function Theme(){

    let $btnTheme = document.querySelector("#btn-theme");
    
    $btnTheme.addEventListener("click" ,(e)=> {
        if(document.body.classList.contains("dark-mode")){
            document.body.classList.remove("dark-mode");
            e.target.innerText = "🌙";
            localStorage.setItem("Theme","0");
            
            console.log(localStorage.getItem("Theme"));
        
        }else {
            document.body.classList.add("dark-mode");
            e.target.innerText = "☀️";
            localStorage.setItem("Theme","1");
            
            console.log(localStorage.getItem("Theme"));
        }
    });
    
    document.addEventListener('DOMContentLoaded',()=>{
        console.log(localStorage.getItem("Theme"));
        if(!localStorage.getItem("Theme"))return;

        if(localStorage.getItem("Theme")==="1"){
            console.log(localStorage.getItem("Theme"));
            document.body.classList.add("dark-mode");
                $btnTheme.innerText = "☀️";
                console.log("DarkMode")
        } else 
        {
            console.log(localStorage.getItem("Theme"));
            document.body.classList.remove("dark-mode");
            $btnTheme.innerText = "🌙";
            console.log("NormalMode")
        }
    } ) 
        
    }
    
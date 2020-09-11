//File Javascript untuk  menampilkan data provinsi ke selection box
import {tampilRumahSakit} from "../src/tampilRumahSakit.js";
const selectionBox = document.querySelector("#selectionBox");
import province from "./provinsi.json";



export let keyword="DKI Jakarta";
export const tampilSelectionBox = ()=>{


document.addEventListener("DOMContentLoaded",()=>{
    tampilRumahSakit(keyword);
    selectionBox.addEventListener("change",function(){
        keyword=selectionBox.value;
        tampilRumahSakit(keyword);
    })
    
    tampilSelect();
    
})

const tampilSelect = () =>{
    
           province.province.forEach(function(e){
                
               selectionBox.innerHTML+=`<option>${e}</option>`;
                
            })
        
}
}

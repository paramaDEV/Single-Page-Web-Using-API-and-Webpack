//File Javascript untuk  menampilkan data rumah sakit
import gambar from "../src/gambarRumahSakit.json";
const sectionB=document.querySelector(".secB");
var image ;
let linkGambar= [];
let a="https://zonajatim.id/wp-content/uploads/2018/03/images-10.jpeg";


export function tampilRumahSakit(keyword){
const baseUrl="https://cors-anywhere.herokuapp.com/https://dekontaminasi.com/api/id/covid19/hospitals";



    
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange= () =>{
    if(xhr.readyState==4 && xhr.status==200){
        sectionB.innerHTML=" ";
        const data=JSON.parse(xhr.responseText);
            
             data.forEach(function(e){
                
                if(e.province == keyword){
                
                            renderCards(e.name,e.address,e.region,e.phone,a);
                            image = document.querySelectorAll("img ");
                        }
                    })
            tampilGambar(keyword);
           
        }
    }
    xhr.open('GET',`${baseUrl}`,true);
    xhr.send();

}

let renderCards = (namaRumahSakit,alamat,region,phone,link)=>{   

    sectionB.innerHTML+=`<div class="card">
    <img class="image" src="./noimage.jpg" alt="no image">
    <h1 style="color:rgb(192, 65, 15)">${namaRumahSakit}</h1>
    <h3>${alamat}</h3>
    <h3>${region}</h3>
    <h3>Phone : ${phone}</h3>
</div>`

}

let tampilGambar = (keyword)=> {
      gambar.forEach(function(e){
       if(e.province==keyword){
              linkGambar=e.link;
                image.forEach(function(e,i){
                        e.setAttribute("src",linkGambar[i]);
          })
         }
      });
                
};



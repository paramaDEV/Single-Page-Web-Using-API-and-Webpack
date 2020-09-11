const baseURL="https://cors-anywhere.herokuapp.com/https://data.covid19.go.id/public/api/update.json";
let kotak=document.querySelectorAll(".kotak");
let hasilUpdate;
let hasilPenambahan;



export function tampilKasus(){
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = ()=>{
        if(xhr.readyState==4 && xhr.status==200){
            const data=JSON.parse(xhr.responseText);
             hasilUpdate=data.update.total;
             hasilPenambahan=data.update.penambahan;
             
            renderKotak(hasilUpdate.jumlah_positif,hasilUpdate.jumlah_sembuh,hasilUpdate.jumlah_dirawat,hasilUpdate.jumlah_meninggal
                ,hasilPenambahan.jumlah_positif,hasilPenambahan.jumlah_sembuh,hasilPenambahan.jumlah_dirawat,hasilPenambahan.jumlah_meninggal);
           
        }
    }


    xhr.open('GET',baseURL,true);
    xhr.send();
}

const renderKotak=(konfirmasi,sembuh,dirawat,meninggal,penambahanKonfirmasi,penambahanSembuh,penambahanDirawat,penambahanMeninggal)=>{

    kotak[0].innerHTML =`
    <h2>Konfirmasi Positif</h2>
    <h1>${konfirmasi}</h1>
    <h3>${penambahanKonfirmasi}</h3>
    
    `;

    kotak[1].innerHTML =`
    <h2>Sembuh</h2>
    <h1>${sembuh}
    <h3>${penambahanSembuh}</h3>
    
    `; 

    kotak[2].innerHTML =`
    <h2>Dirawat</h2>
    <h1>${dirawat}</h1>
    <h3>${penambahanDirawat}</h3>
    `;

    kotak[3].innerHTML =`
    <h2>Meninggal</h2>
    <h1>${meninggal}</h1>
    <h3>${penambahanMeninggal}</h3>
    `;

    
}







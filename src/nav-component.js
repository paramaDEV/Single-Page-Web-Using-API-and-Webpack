class NavComponent extends HTMLElement{
    connectedCallback(){
        console.log("Nav-Component Connected");
        this.innerHTML=`
        <nav><h2>Siaga COVID-19</h2></nav>`;
    }
}

customElements.define("nav-component",NavComponent);
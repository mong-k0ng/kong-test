window.addEventListener('load' , ()=>{
    const loading = document.querySelector(".loading");
    const text = document.querySelector(".loading h1");

    setTimeout(()=>{
        text.style.opacity = "0";
    },100);

    setInterval(()=>{
        text.style.opacity = "1";
        setTimeout(()=>{
            text.style.opacity = "0";
        },500);
    },1000);

    setTimeout(()=>{
        loading.style.opacity = "0";
        setTimeout(()=>{
            loading.style.display="none";
        },500)
    },2000);
});
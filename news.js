const loaddata = async ()=>{
    const res = await fetch("news.json");
    const data = await res.json();

    const news = document.querySelector(".news-contents");

    data.sort((a, b) => new Date(b.date) - new Date(a.date));

    data.forEach(items=>{
        const div = document.createElement("div");
        const p1 = document.createElement("p");
        const div1 = document.createElement("div");
        const h1 = document.createElement("h1");
        const p2 = document.createElement("p");
        const h2 = document.createElement("h2")
        const a = document.createElement("a");

        div.className = "news-content";
        div1.className = "news-main";
        p2.className = "news-text";

        news.appendChild(div);
        div.append(p1,div1);
        div1.append(h1,p2,h2,a);

        p1.textContent = items.date;
        h1.textContent = items.title;
        p2.textContent = items.main;
        h2.textContent = items.urltitle;
        a.href = items.url;
        a.textContent = items.url;
    });
};

loaddata();
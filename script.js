const btn = document.querySelector("#all-btn");

const btnCall = (v) => {
    const u = document.querySelector(".ul");
    u.innerHTML = "";
    v.forEach(x => {
        const li = document.createElement("li");
        li.id = x.id;
        li.className = "border-1 p-2 rounded-lg btn btn-outline bg-[#CFF0DC] block s";
        li.innerHTML = `${x.category_name}`;
        u.appendChild(li);
    });
}

const boxCall = (v) => {
    const div = document.querySelector(".box");
    div.innerHTML = "";
    v.plants.forEach(x => {
        const d = document.createElement("div");
        d.innerHTML = `<div class="bg-white space-y-2 p-4 rounded-xl shadow-lg flex flex-col k" id="${x.id}">
                    <div>
                        <img class="rounded-xl w-full h-40 object-cover" src="${x.image}" alt="">
                    </div>
                    <h3 class="font-bold">${x.name}</h3>
                    <p class="text-[12px] line-clamp-2">${x.description}</p>
                    <div class="flex justify-between items-center">
                        <button class="btn btn-soft btn-success rounded-full">${x.category}</button>
                        <p class="font-semibold">৳<span class="t">${x.price}</span></p>
                    </div>
                    <button class="btn p-2 rounded-full bg-[#15803D] text-white font-semibold w-full f">Add to Cart</button>
                </div>`;

        div.appendChild(d);
    })
}

const g = async () => {
    const a = await fetch("https://openapi.programming-hero.com/api/categories");
    const b = await a.json();
    const c = b.categories;
    const a1 = await fetch("https://openapi.programming-hero.com/api/plants");
    const b1 = await a1.json();

    btnCall(c);
    boxCall(b1);
}
g();

let card = (v) => {
    const div = document.querySelector(".box");
    div.innerHTML = "";

    v.plants.forEach(x => {
        const d = document.createElement("div");
        d.innerHTML = `<div class="bg-white space-y-2 p-4 rounded-xl shadow-lg flex flex-col k" id="${x.id}">
                    <div>
                        <img class="rounded-xl w-full h-40 object-cover" src="${x.image}" alt="">
                    </div>
                    <h3 class="font-bold">${x.name}</h3>
                    <p class="text-[12px] line-clamp-2">${x.description}</p>
                    <div class="flex justify-between items-center">
                        <button class="btn btn-soft btn-success rounded-full">${x.category}</button>
                        <p class="font-semibold">৳<span class="t">${x.price}</span></p>
                    </div>
                        <button class="btn p-2 rounded-full bg-[#15803D] text-white font-semibold w-full f">Add to Cart</button>
                    </div>`;

        div.appendChild(d);
    })

}


let callingBoxes = async (id) => {
    if(id === "all-btn"){
        const a1 = await fetch("https://openapi.programming-hero.com/api/plants");
        const b1 = await a1.json();
        card(b1);
    }
    else{
        const a = await fetch(`https://openapi.programming-hero.com/api/category/${id}`);
        const b = await a.json();
        card(b);
    }
}


const m = document.querySelector("#m");
m.addEventListener("click", (e) => {
    const b = e.target.closest(".s");
    if(b){
        const c = b.id;
        let btns = document.querySelectorAll(".s");
        btns.forEach(v => {
            v.classList.remove("bg-[#15803D]", "text-white");
            v.classList.add("bg-[#CFF0DC]", "text-black");
        })
        b.classList.remove("bg-[#CFF0DC]", "text-black");
        b.classList.add("bg-[#15803D]", "text-white");

        callingBoxes(c);
    }
})

let arr = [];

const taka = (v) => {
    const h = v.querySelector("h3").innerText;
    arr.push(h);
    const t = v.querySelector(".t").innerText;

    let cnt = 0;
    cnt = arr.filter(x => x === h).length;

    let doller1 = document.querySelector(".doller");
    let doller2 = document.querySelector(".doller").innerText;
    const z = Number(doller2) + Number(t);
    doller1.innerText = z;
    // console.log(arr)
    const m = document.querySelector(".money");

    const existing = [...m.children].find(x => x.querySelector(".card-header").innerText === h);

    if(existing){
        // quantity update
        existing.querySelector(".num").innerText = cnt;
    }
    else{
        const n = document.createElement("div");
        n.innerHTML = `<div class="bg-[#CFF0DC] rounded-xl p-3 flex justify-between items-center pp">
                            <div class="space-y-1">
                                <p class="font-medium text-[14px] card-header">${h}</p>
                                <p class="text-[12px]"><span class="tt">${t}</span> x <span class="num">${cnt}</span></p>
                            </div>
                                <div class="cross"><i class="fa-solid fa-xmark"></i></div>
                            </div>`;
        
        m.appendChild(n);
    }

    gg();

}

const boxes = document.querySelector(".box");
boxes.addEventListener("click",(e) => {
    if(e.target.matches(".f")){
        const p = e.target.closest(".k");
        taka(p);
    }
})


let gg = () => {
    const m = document.querySelector(".money");
    const h = document.querySelector(".hh");

    if(m.children.length === 0){
        h.classList.remove("hidden");
    }
    else{
        h.classList.add("hidden");
    }
}
gg();


const moneyDiv = document.querySelector(".money");

moneyDiv.addEventListener("click", (e) => {
    const dlt = e.target.closest(".pp");
    const amount = dlt.querySelector(".tt");
    const amount2 = dlt.querySelector(".tt").innerText;
    let doller1 = document.querySelector(".doller");
    let doller2 = document.querySelector(".doller").innerText;

    const itemName = dlt.querySelector(".card-header").innerText;

    let total = Number(doller2) - Number(amount2);
    doller1.innerText = total;

    const idx = arr.indexOf(itemName);
    
    arr.splice(idx, 1);

    console.log(total)
    if(dlt){
        dlt.remove();
    }

    const m = document.querySelector(".money");
    if(m.children.length === 0){
        gg();
    }
})


const modalCall = async (id) => {
    const a = await fetch(`https://openapi.programming-hero.com/api/plant/${id}`);
    const b = await a.json();
    const c = b.plants;
    console.log(c)

    const nn = document.querySelector(".nn");
    nn.innerHTML = "";

    const n = document.createElement("div");
    n.innerHTML = `<div>
                <img class="mx-auto object-cover rounded-xl w-30" src="${c.image}" alt="">
            </div>
            <h3 class="text-xl font-bold text-white">${c.name}</h3>
            <p class="py-4 text-white">${c.description}</p>
            <p class="py-4 text-white">$${c.price}</p>
            <div class="modal-action">
            <form method="dialog">
                <button class="btn">Close</button>
            </form>
            </div>`;
    
    nn.appendChild(n);
    document.querySelector("#my_modal").showModal();
}


boxes.addEventListener("click",(e) => {
    const r = e.target.closest(".k img, .k h3");
    if(r){
        const s = r.closest(".k");

        modalCall(s.id);
    }
})
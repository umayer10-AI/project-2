const btn = document.querySelector("#all-btn");

const btnCall = (v) => {
    const u = document.querySelector(".ul");
    u.innerHTML = "";
    v.forEach(x => {
        const li = document.createElement("li");
        li.id = x.id;
        li.className = "border-1 p-2 rounded-lg btn btn-outline block s";
        li.innerHTML = `${x.category_name}`;
        u.appendChild(li);
    });
}

const boxCall = (v) => {
    const div = document.querySelector(".box");
    div.innerHTML = "";
    v.plants.forEach(x => {
        const d = document.createElement("div");
        d.innerHTML = `<div class="bg-white space-y-2 p-4 rounded-xl shadow-lg k">
                    <div>
                        <img class="rounded-xl w-full" src="${x.image}" alt="">
                    </div>
                    <h3 class="font-bold">${x.name}</h3>
                    <p class="text-[12px]">${x.description}</p>
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
        d.innerHTML = `<div class="bg-white space-y-2 p-4 rounded-xl shadow-lg">
                    <div>
                        <img class="rounded-xl w-full" src="${x.image}" alt="">
                    </div>
                    <h3 class="font-bold">${x.name}</h3>
                    <p class="text-[12px]">${x.description}</p>
                    <div class="flex justify-between items-center">
                        <button class="btn btn-soft btn-success rounded-full">${x.category}</button>
                        <p class="font-semibold">${x.price}</p>
                    </div>
                    <button class="btn p-2 rounded-full bg-[#15803D] text-white font-semibold w-full">Add to Cart</button>
                </div>`;

        div.appendChild(d);
    })

}


let callingBoxes = async (id) => {
    if(id === "all-btn"){
        const a1 = await fetch("https://openapi.programming-hero.com/api/plants");
        const b1 = await a1.json();
        card(b1)
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
        })
        b.classList.add("bg-[#15803D]", "text-white");

        callingBoxes(c);
    }
})


const taka = (v) => {
    const h = v.querySelector("h3").innerText;
    const t = v.querySelector(".t").innerText;
    let doller1 = document.querySelector(".doller");
    let doller2 = document.querySelector(".doller").innerText;
    const z = Number(doller2) + Number(t);
    doller1.innerText = z;
    console.log(z)
    const m = document.querySelector(".money");

    const n = document.createElement("div");
    n.innerHTML = `<div class="bg-[#CFF0DC] rounded-xl p-3 flex justify-between items-center">
                            <div class="space-y-1">
                                <p class="font-medium text-[14px]">${h}</p>
                                <p class="text-[12px]">${t} x 1</p>
                            </div>
                            <div><i class="fa-solid fa-xmark"></i></div>
                        </div>`;
    
    m.appendChild(n);
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
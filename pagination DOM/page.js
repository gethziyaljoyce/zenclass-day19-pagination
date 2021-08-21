
async function users() {
    const data = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
    const list = await data.json();
    console.log(list);
    arr1(list);
}
users();

let final = [];
let arrIndex = 0;
function arr1(a) {
    let i = 0;
    while (i < a.length) {
        final.push(a.splice(0, 10));
    }
}

console.log(final);
function goTo1(a, b) {
    arrIndex = a;
    if (a < final.length) {
        console.log(final[a]);
        let htmlCnt = ``;
        final[a].forEach((item) => {
            htmlCnt += `
            <p>Name:${item.name}</p>
            <p>Email:${item.email}</p>
            <p>ID:${item.id}</p>
            `;
        });
        document.getElementById("click").innerHTML = htmlCnt;

        const btn = document.getElementById(b);
        btn.style.background = "blue";
    }
}

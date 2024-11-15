let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");

function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        let qqq;
        if (n === 1) qqq = "one";
        else if (n === 2) qqq = "two";
        else if (n === 3) qqq = "three";
        else if (n === 4) qqq = "four";
        else if (n === 5) qqq = "five";
        stars[i].className = "star " + qqq;
    }
    output.innerText = n + "/5";

    const data = {
        rating: n
    };
    
    fetch('https://kool.krister.ee/chat/uchu', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}}
const url = "https://kool.krister.ee/chat/uchu"

async function download() {
    const response = await fetch(url);
    const data = await response.json();
    const totalRating = data.reduce((sum, item) => sum + item.rating, 0);
    const averageRating = totalRating / data.length;n 

    const element = document.querySelector(".avg");
    if (element) {
        element.textContent = `avg: ${averageRating}`;
    }
}

download();

//ei maitse

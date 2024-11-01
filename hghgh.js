let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");

let currentRating = n

    function gfg(n) {
        console.log("Rating set to:",);
         remove();
        for (let i = 0; i < n; i++) {
            let cls;
            if (n === 1) cls = "one";
            else if (n === 2) cls = "two";
            else if (n === 3) cls = "three";
            else if (n === 4) cls = "four";
            else if (n === 5) cls = "five";
            stars[i].className = "star " + cls;
        }
        output.innerText = n + "/5";
    }
    function remove() {
        let i = 0;
        while (i < 5) {
            stars[i].className = "star";
            i++;
        }
    }
    const data = {
        rating: currentRating
    };
    fetch('https://kool.krister.ee/chat/uchunekoko', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    )


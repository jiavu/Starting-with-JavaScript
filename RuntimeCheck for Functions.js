
function countToAMillion() {
    let i = 0;
    while (i <= 1000000) {
        i++;
    }
}


const timeFuncRuntime = inputFunc => {
    let t1 = Date.now();
    inputFunc();
    let t2 = Date.now();
    console.log(t2 - t1 + " ms");
}

timeFuncRuntime(countToAMillion);
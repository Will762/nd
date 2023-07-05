function dirReduc(arr) {
    let changed = true;
    const scores = {
        "NORTH": 1,
        "SOUTH": -1,
        "EAST": 2,
        "WEST": -2,
    };
    
    while (changed) {
        changed = false;
        console.log(arr);
        for (i = 1; i < arr.length; i++) {
            if (!(scores[arr[i - 1]] + scores[arr[i]])) {
                arr.splice(i - 1, 2);
                changed = true;
            }
        }
    }

    return arr;
}

dirReduc(['NORTH', 'EAST', 'WEST', 'SOUTH', 'NORTH', 'EAST']);
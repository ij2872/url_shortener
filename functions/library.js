
export function decToHex(str){
    return str.toString(16).toUpperCase();
}

export function hexToDec(str){
    return parseInt(str, 16);
}

// Returns a random number between 1-4
export function randomNum(){
    return Math.floor(Math.random() * 5) + 1;
}

//Returns int representation of a-zA-Z0-9
export function charToInt(char){

    //if it's an int, return int
    if(!isNaN(char)){
        return char;
    }
    char = char.toLowerCase();
    let conv = {
        a: "10",
        b: "11",
        c: "12",
        d: "13",
        e: "14",
        f: "15",
        g: "16",
        h: "17",
        i: "18",
        j: "19",
        k: "20",
        l: "21",
        m: "22",
        n: "23",
        o: "24",
        p: "25",
        q: "26",
        r: "27",
        s: "28",
        t: "29",
        u: "30",
        v: "31",
        w: "32",
        x: "33",
        y: "34",
        z: "35"
    };
    
    return parseInt(conv[char]);
}


export function getRegexStrArray(str){
    let re = /[a-zA-Z0-9]/g;
    let results = str.match(re); 
    return results;
}

export function encode(str){
    let modId = 0;
    let charArray = getRegexStrArray(str);

    for(var i in charArray){
        modId += charToInt(charArray[i]);
    }
    return modId.toString();
}


// Generates url
export function generate(url) {
    return encode(url);
}



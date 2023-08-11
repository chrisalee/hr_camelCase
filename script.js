function processData(input) {
    // break up input data
    let lines = input.split('\n');

    let capLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < lines.length; i++) {
        let words = lines[i].slice(4);
        let output = '';
        // split
        if (lines[i][0] === "S") {
            // method
            if (lines[i][2] === "M") {
                for (let i = 0; i < words.length; i++) {
                    if (capLetters.includes(words[i])) {
                        output += ' ' + words[i].toLowerCase();
                        i++;
                    }
                    if (words[i] === "(" || words[i] === ")") {
                        continue;
                    }
                    output += words[i];
                }
                console.log(output.trim());
            }
            // class
            if (lines[i][2] === "C") {
                output += words[0].toLowerCase();
                for (let i = 1; i < words.length; i++) {
                    if (capLetters.includes(words[i])) {
                        output += ' ' + words[i].toLowerCase();
                        i++;
                    }
                    output += words[i];
                }
                console.log(output.trim());
            }
            // variable
            if (lines[i][2] === "V") {
                for (let i = 0; i < words.length; i++) {
                    if (capLetters.includes(words[i])) {
                        output += ' ' + words[i].toLowerCase();
                        i++;
                    }
                    output += words[i];
                }
                console.log(output.trim());
            }
        }
        // combine
        if (lines[i][0] === "C") {
            // method
            if (lines[i][2] === "M") {
                for (let i = 0; i < words.length - 1; i++) {
                    if (words[i] === " ") {
                        output += words[i + 1].toUpperCase();
                        i++;
                        continue;
                    }
                    output += words[i];
                }
                output += "()"
                console.log(output.trim());
            }
            // class
            if (lines[i][2] === "C") {
                output += words[0].toUpperCase();
                for (let i = 1; i < words.length; i++) {
                    if (words[i] === " ") {
                        output += words[i + 1].toUpperCase();
                        i++;
                        continue;
    
                    }
                    output += words[i];
                }
                console.log(output.trim());
            }
            // variable
            if (lines[i][2] === "V") {
                for (let i = 0; i < words.length; i++) {
                    if (words[i] === " ") {
                        output += words[i + 1].toUpperCase();
                        i++;
                        continue;
                    }
                    output += words[i];
                }
                console.log(output.trim());
            }
        }

    }

}

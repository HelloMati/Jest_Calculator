// const sum = function(a, b){
//     return a + b;
// };

const sum = function(a, b){
    switch (true){
        case isNaN(a):
            return NaN;
            case isNaN(b):
                return NaN;
                default:
                    return a + b;
    }
}


const subtract = function(a, b){
    return a - b;
};


const multiply = function(a, b){
    return a * b
};


const divide = function(a, b){
    return a / b
};


const modulus = function(a, b){
    return a % b;
};


//allows modulus function to be reused 
const even = function(a){
    return (a % 2) === 0; 
};


const odd = function(a){
    return (a % 2) !== 0;
};
  

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};

function Calculator() {
    
    return {
        
        addMethod(name) {
            switch(name) {
                case '+':
                     this.operation = '+';
                     return this;
                     break;
                case '*':
                    this.operation = '*';
                    return this;
                    break;
            }
        },
    
    
        calculate:function(str){

            str = str.split(" ");
            str.splice(str.indexOf(this.operation), 1);
                   
            
            const sum = this.operation == '+' ? str.reduce( (a, b) => Number(a) + Number(b) ):
            str.reduce( (a, b) => Number(a) * Number(b)) 
            return sum
            
        }
    }
    
}

let calc = new Calculator; 

console.log(calc.addMethod('+').calculate("12 + 34")) // 10
console.log( calc.addMethod('*').calculate("3 * 7")) // 21

// console.log( calc.addMethod('*', (a, b) => a * b, '7 * 9'));

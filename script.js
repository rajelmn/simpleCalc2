function Calculator() {
    
    return {
        
        addMethod(name) {
            switch(name) {
                case '+':
                     this.operation = '+';
                     return this;
                case '*':
                    this.operation = '*';
                    return this;
                case '-':
                    this.operation = '-';
                    return this;
                case '/':
                    this.operation = '/';
                    return this;
            }
        },
    
    
        calculate:function(str){

            str = str.split(" ");
            str.splice(str.indexOf(this.operation), 1);
                   
            
            const sum = this.operation == '+' ? str.reduce( (a, b) => Number(a) + Number(b) )
            :this.operation == '*' ? str.reduce( (a, b) => Number(a) * Number(b)) 
            :this.operation == '-' ? str.reduce( (a, b) => Number(a) - Number(b) )
            :this.operation == '/' ? str.reduce( (a, b) => Number(a)/Number(b) ): NaN
            return sum
            
        }
    }
    
}

let calc = new Calculator; 

console.log(calc.addMethod('+').calculate("12 + 34")) // 46
console.log( calc.addMethod('*').calculate("3 * 7")) // 21
console.log( calc.addMethod('-').calculate("20 - 10")) // 10
console.log( calc.addMethod('/').calculate("20 / 5")) // 4

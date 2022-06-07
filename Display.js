class Display{

    constructor(displayLastValue, displayCurrentValue){
        this.displayLastValue = displayLastValue;
        this.displayCurrentValue = displayCurrentValue;
        this.calculator = new Calculator();
        this.typeOperation = undefined;
        this.lastValue =  '';
        this.currentValue = '';
        this.sings = {
            plus: "+",
            minus: "-",
            times:"x",
            divided: "%"
        };
    }

    delete(){
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.printValue();
    }

    deleteAll(){
        this.currentValue = '';
        this.lastValue = '';
        this.typeOperation = undefined;
        this.printValue();
    }

    operation(type){
        this.typeOperation !== "equals" && this.calculate();
        this.typeOperation = type;
        this.lastValue = this.currentValue ||  this.lastValue;
        this.currentValue = "";
        this.printValue();
    }

    addNumber(number){
        if(number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.printValue();
    } 

    printValue(){
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayLastValue.textContent = `${this.lastValue} ${this.sings[this.typeOperation] || ""}`;
    }

    calculate(){
        const lastValue = parseFloat(this.lastValue);
        const currentValue = parseFloat(this.currentValue);

        if (isNaN(currentValue) || isNaN(lastValue) ) return
        this.currentValue = this.calculator[this.typeOperation](lastValue, currentValue);
    }
}
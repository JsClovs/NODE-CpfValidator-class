class ValidaCpf {
    constructor (CFP) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true, 
            configurable: false,
            value: CFP.replace(/\D+/g, '')
        })
    }

    generateNumber(cpfNoFinalDigits) {
        const cpfNumArray = Array.from(cpfNoFinalDigits)
        const cpfNumber = cpfNumArray.reduce(
            (acumulator, currentValue, index) => {
                let peso = cpfNumArray.length - index + 1
                acumulator += Number(currentValue) * peso
                return acumulator
            }, 0
        )
        return 11 - (cpfNumber % 11)
    }

    newCpf() {
        const cpfNoFinalDigits = this.cpfLimpo.slice(0, -2)
        const number1 = this.generateNumber(cpfNoFinalDigits)
        const number2 = this.generateNumber(cpfNoFinalDigits + number1)
        this.NCpf = cpfNoFinalDigits + String(number1) + String(number2)
        console.log(this.NCpf)
    }
    
    Validate() { 
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        this.newCpf()
        
        console.log(`${this.NCpf} e ${this.cpfLimpo}`)
        return this.NCpf === this.cpfLimpo
    }
}

const Cpf = new ValidaCpf('069.587.693-76')
Cpf.Validate()

console.log(Cpf.Validate())

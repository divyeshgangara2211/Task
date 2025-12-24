class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.history = document.getElementById('history');
        
        this.previousValue = 0;
        this.currentValue = '0';
        this.operation = null;
        this.shouldResetDisplay = false;
        this.calculationHistory = [];
        
        this.init();
    }

    init() {
        this.attachEventListeners();
    }

    attachEventListeners() {
        // Button clicks
        document.querySelectorAll('.btn-number').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleNumber(e.target.textContent));
        });

        document.querySelectorAll('.btn-operator').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleOperator(e.target.dataset.operator));
        });

        document.querySelectorAll('.btn-decimal').forEach(btn => {
            btn.addEventListener('click', () => this.handleDecimal());
        });

        document.querySelectorAll('.btn-equals').forEach(btn => {
            btn.addEventListener('click', () => this.handleEquals());
        });

        document.querySelectorAll('.btn-clear').forEach(btn => {
            btn.addEventListener('click', () => this.handleClear());
        });

        document.querySelectorAll('.btn-reset').forEach(btn => {
            btn.addEventListener('click', () => this.handleReset());
        });

        // Keyboard support
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    handleNumber(value) {
        if (this.shouldResetDisplay) {
            this.currentValue = value;
            this.shouldResetDisplay = false;
        } else {
            this.currentValue = this.currentValue === '0' ? value : this.currentValue + value;
        }
        this.updateDisplay();
    }

    handleOperator(op) {
        if (this.operation !== null && !this.shouldResetDisplay) {
            this.handleEquals();
        }
        
        this.previousValue = parseFloat(this.currentValue) || 0;
        this.operation = op;
        this.shouldResetDisplay = true;
        this.updateHistory(`${this.previousValue} ${op}`);
    }

    handleDecimal() {
        if (this.shouldResetDisplay) {
            this.currentValue = '0.';
            this.shouldResetDisplay = false;
        } else if (!this.currentValue.includes('.')) {
            this.currentValue += '.';
        }
        this.updateDisplay();
    }

    handleEquals() {
        if (this.operation === null) {
            return;
        }

        const current = parseFloat(this.currentValue) || 0;
        const result = this.calculate(this.previousValue, current, this.operation);
        
        const calculation = {
            operation: this.operation,
            firstNumber: this.previousValue,
            secondNumber: current,
            result: result,
            timestamp: new Date().toLocaleString()
        };
        
        this.calculationHistory.push(calculation);
        console.log('Calculation:', calculation);
        
        this.currentValue = this.formatResult(result);
        this.operation = null;
        this.shouldResetDisplay = true;
        this.updateDisplay();
        this.updateHistory(`= ${this.currentValue}`);
    }

    calculate(prev, current, operation) {
        switch (operation) {
            case '+':
                return prev + current;
            case '-':
                return prev - current;
            case '*':
                return prev * current;
            case '/':
                if (current === 0) {
                    alert('Cannot divide by zero!');
                    return prev;
                }
                return prev / current;
            default:
                return current;
        }
    }

    formatResult(result) {
        // Limit decimal places to 10
        if (result.toString().includes('.')) {
            return parseFloat(result.toFixed(10)).toString();
        }
        return result.toString();
    }

    handleClear() {
        this.currentValue = '0';
        this.shouldResetDisplay = true;
        this.updateDisplay();
        this.updateHistory('');
    }

    handleReset() {
        this.previousValue = 0;
        this.currentValue = '0';
        this.operation = null;
        this.shouldResetDisplay = false;
        this.calculationHistory = [];
        this.updateDisplay();
        this.updateHistory('');
        console.log('Calculator reset');
    }

    handleKeyboard(e) {
        // Numbers 0-9
        if (e.key >= '0' && e.key <= '9') {
            e.preventDefault();
            this.handleNumber(e.key);
        }
        
        // Operations
        if (e.key === '+' || e.key === '-') {
            e.preventDefault();
            this.handleOperator(e.key);
        }
        
        if (e.key === '*') {
            e.preventDefault();
            this.handleOperator('*');
        }
        
        if (e.key === '/') {
            e.preventDefault();
            this.handleOperator('/');
        }
        
        // Decimal
        if (e.key === '.') {
            e.preventDefault();
            this.handleDecimal();
        }
        
        // Equals
        if (e.key === 'Enter' || e.key === '=') {
            e.preventDefault();
            this.handleEquals();
        }
        
        // Clear
        if (e.key === 'Backspace') {
            e.preventDefault();
            if (this.currentValue.length > 1) {
                this.currentValue = this.currentValue.slice(0, -1);
            } else {
                this.currentValue = '0';
            }
            this.updateDisplay();
        }
        
        // Reset
        if (e.key === 'Delete' || e.key.toLowerCase() === 'c') {
            e.preventDefault();
            if (e.key === 'Delete') {
                this.handleReset();
            } else {
                this.handleClear();
            }
        }
    }

    updateDisplay() {
        this.display.textContent = this.currentValue;
    }

    updateHistory(text) {
        this.history.textContent = text;
    }
}

// Initialize calculator when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});
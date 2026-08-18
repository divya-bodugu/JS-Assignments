// Decorator pattern

function withExecutionTime(fn) 
{
    return function (...args) 
    {
        const start = performance.now();
        const result = fn(...args);
        const end = performance.now();
        console.log(`Execution Time: ${(end - start).toFixed(2)} ms`);
        return result;
    };
}

function calculate() 
{
    for (let i = 0; i < 1000000; i++) {}
    console.log("Calculation Completed");
}

const decorated = withExecutionTime(calculate);
decorated();
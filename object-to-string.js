console.log('object-to-string.js');

const Benchmark = require('benchmark');
let suite = new Benchmark.Suite;

let faker = require('faker');
let model = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    city: faker.address.city()
};

function strategyA(model) {
    const data = Object.keys(model);
    const len = data.length;
    let ylk = '';
    for (let i = 0; i < len; i++) {
        ylk += data[i] + ':' + model[data[i]] + ';';
    }
    return ylk;
}

function strategyB(model) {
    let ylk = '';
    Object.keys(model).forEach( (key) => ylk += key + ':' + model[key] + ';' );
    return ylk;
}

function strategyC(model) {
    return Object.keys(model).map( (key) => key + ':' + model[key] ).join(';') + ';';
}

function strategyD(model) {
    const data = Object.keys(model);
    const len = data.length;
    let ylk = '';
    return data.reduce(
        (prev, curr, idx) => {
            ylk += curr + ':' + model[curr] + ';';
            if (idx === len - 1) {
                return ylk;
            }
            else {
                return curr;
            }
        }, []);
}

console.log('INPUT', 'model', model);

console.log('OUTPUT', 'strategyA', strategyA(model));
console.log('OUTPUT', 'strategyB', strategyB(model));
console.log('OUTPUT', 'strategyC', strategyC(model));
console.log('OUTPUT', 'strategyD', strategyD(model));

// add tests
suite
    .add('strategyA: for', () => {
        strategyA(model);
    })
    .add('strategyB: forEach', () => {
        strategyB(model)
    })
    .add('strategyC: map+join', () => {
        strategyC(model)
    })
    .add('strategyD: reduce', () => {
        strategyD(model)
    })
    // add listeners
    .on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', () => console.log('Fastest is ' + suite.filter('fastest').map('name')))
    // run async
    .run({ 'async': true });
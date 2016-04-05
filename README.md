### object-to-string.js

Convert object to string.

*input*
```
{ 
    name: 'Dr. Chelsea Connelly',
    email: 'Haley.Kris35@hotmail.com',
    city: 'Bashirianshire' 
}
```

*output*
```
name:Dr. Chelsea Connelly;email:Haley.Kris35@hotmail.com;city:Bashirianshire;
```

*strategies*
   * A: `for`
   * B: `forEach`
   * C: `map + join`
   * D: `reduce`
   
*perf*
```
➜  benchmark-test ./node_modules/.bin/babel-node object-to-string.js
object-to-string.js
INPUT model { name: 'Dr. Chelsea Connelly',
  email: 'Haley.Kris35@hotmail.com',
  city: 'Bashirianshire' }
OUTPUT strategyA name:Dr. Chelsea Connelly;email:Haley.Kris35@hotmail.com;city:Bashirianshire;
OUTPUT strategyB name:Dr. Chelsea Connelly;email:Haley.Kris35@hotmail.com;city:Bashirianshire;
OUTPUT strategyC name:Dr. Chelsea Connelly;email:Haley.Kris35@hotmail.com;city:Bashirianshire;
OUTPUT strategyD name:Dr. Chelsea Connelly;email:Haley.Kris35@hotmail.com;city:Bashirianshire;
strategyA: for x 2,040,253 ops/sec ±1.10% (81 runs sampled)
strategyB: forEach x 1,238,320 ops/sec ±1.35% (86 runs sampled)
strategyC: map+join x 366,040 ops/sec ±3.25% (80 runs sampled)
strategyD: reduce x 1,119,072 ops/sec ±3.25% (76 runs sampled)

Fastest is strategyA: for
```
var fruits = [{name:'apple', colour:'green'},
              {name:'orange', colour:'orange'},
              {name:'strawberry', colour:'red'},
              {name:'banana', colour:'yellow'},
              {name:'blueberry', colour:'blue'}
            ];

var cars = [{model:'BMW', manufactured:2010},
            {model:'Toyota', manufactured:2007},
            {model:'Audi', manufactured:2001},
            {model:'Ford', manufactured:1999},
            {model:'Peugeot', manufactured:2014}
          ];

var cities = [{city:'Lincoln', county:'Lincolnshire'},
              {city:'Oxford', county:'Oxfordshire'},
              {city:'Birmingham', county:'West Midlands'},
              {city:'Stratford', county:'Warwickshire'},
              {city:'London', county:'Middlesex'}
            ];
var jumboArray = [fruits, cars, cities];

var flatArray = jumboArray.reduce(function(a, b)  {
     return a.concat(b);
   }
    );

console.log(flatArray);

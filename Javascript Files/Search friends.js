var friends = new Object();
//friends.bill = new Object();
//friends.steve = new Object();
//friends.martin = new Object();
//friends.sarah = new Object();

friends.bill =  {
    firstName: 'Bill',
    lastName: 'Gates',
    number: '111 1111',
    address: ['One Microsoft Way','Redmond','WA','98052']
    };

friends.steve =  {
    firstName: 'Steve',
    lastName: 'Jobs',
    number: '222 2222',
    address: ['2 Infinite Loop, Kansas']
    };

friends.martin =  {
    firstName: 'Martin',
    lastName: 'Dee',
    number: '333 3333',
    address: ['67 Featherstone Row']
    };

friends.sarah =  {
    firstName: 'Sarah',
    lastName: 'Gee',
    number: '444 4444',
    address: ['84 Tolger Row']
    };

var list = function (friends)  {
    for(firstName in friends)
    {
        console.log(firstName);
    }
}
var search = function(name)  {
    for(var key in friends)  {
        if(friends[key].firstName === name)
        {
            console.log (friends[key]);
            return (friends[key]);
        }
    }
}
//list(friends);
search('Martin');

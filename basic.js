const developer = [
    {
        status: 'success',
        data: [{
                name:'Parvin', Salary: 30000, position: 'Software Developer', address: {parmanent: 'Rangpur', present: 'Dhaka'}
            },
        
            { 
                name:'Rohul', Salary : 30000, position: 'Software Developer', address: {parmanent: 'Rangpur', present : 'Dhaka'}
            },
        
            {
                name:'Habiba', Salary: 30000, position: 'Software Developer', address: {parmanent: 'Rangpur', present: 'Dhaka'}
            }
        ]
    }
]

console.log(developer[0].data[0].address.present);
const locations=[
    {id:1, name:"Hyderbad"}, 
    {id:2, name:"Bangalore"},
    {id:3, name:"Chennai"}
];
const employees=[
    {id:101, name:"Divya", locationId:2},
    {id:102, name:"Chandana", locationId:1},
    {id:103, name:"Aadhvin", locationId:3},
    {id:104, name:"Meena", locationId:2}
];
employees.forEach((emp)=>{
    const location=locations.find(loc=>loc.id===emp.locationId);
    console.log(`${emp.name} works in ${location.name}`);
});
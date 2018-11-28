var company={
    name:"Digital Lync",
    place:"Khajaguda",
    number:"040102030",
    state:"Hyderabad",
    experience:"2-years",
    students:function(){
        console.log("Students learn the technologies");
    },
    trainers:function(){
        console.log("Trainers teach the students");
    }
}
console.log(company.name);
console.log(company.place);
console.log(company.number);
console.log(company.experience);
company.students();
company.trainers();
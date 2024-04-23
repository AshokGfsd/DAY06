class Person{
    constructor(name, age, gender,work,district, state, country){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.work=work;
        this.district=district;
        this.state = state;
        this.country = country;
    }
}

let person = new Person("A.Ashok Govindharasu", 23, "Male","FSD learning","Salem" ,"Tamil nadu", "India");
console.log(`
Name:${person.name}
Age:${person.age}
Gender:${person.gender}
Work:${person.work}
District:${person.district}
State:${person.state}
Country:${person.country}
`)
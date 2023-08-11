const {faker} = require('@faker-js/faker');

class UsersService{

    constructor(){
        this.users = [];
        this.generate();
    }

    
    generate(){
        
        for(let i = 0; i < 10; i++){
            this.users.push(
                {
                    id: faker.string.uuid(),
                    name: faker.person.fullName(),
                    age: this.generateRandomAge(1, 100),
                    job: faker.person.jobTitle()

                }
            );
        }
    }

    generateRandomAge(min, max){

        let minAge = Math.ceil(min);
        let maxAge = Math.floor(max);

        return Math.floor(Math.random() * (maxAge - minAge) + minAge)
    }

    find(){

        return this.users
    }


    findOne(id){

        let user = this.users.find((element)=>{
            return element.id = id;
        })

        return user;
    }

    create(body){

        this.users.push({
            id: faker.string.uuid(),
            ...body
        })

        return {
            message: 'created',
            newUser: body
        }
    }

    update(idToUpdate, body){

        let newListOfUsers = this.users.map((element)=>{
            if(element.id == idToUpdate){

                element.name = body.name || element.name;
                element.age = body.age || element.age;
                element.job = body.job || element.job;
            
            
            }

            return element
        });

        
        return {
            message: 'updated',
            newElement: newListOfUsers
        }

    


    }

    delete(idToDelete){

        let newList = this.users.filter((element)=>{
            return element.id != idToDelete
        });

        this.users = newList;

        return {
            message: "Deleted"
        }
    }
}

module.exports = UsersService
const {faker} = require('@faker-js/faker');

class CategoriesService{

    constructor(){
        this.categories = [];
        this.generate();
    }

    
    generate(){
        
        for(let i = 0; i < 10; i++){
            this.categories.push(
                {
                    id: faker.string.uuid(),
                    categoryName: faker.commerce.productMaterial(),
                    productsAvailable: faker.commerce.price()
                }
            );
        }
    }

    find(){

        return this.categories
    }


    findOne(id){

        let category = this.categories.find((element)=>{
            return element.id = id;
        })

        return category;
    }

    create(body){

        this.categories.push({
            id: faker.string.uuid(),
            ...body
        })

        return {
            message: 'created',
            newCategory: body
        }
    }

    update(idToUpdate, body){

        let newListOfCategories = this.categories.map((element)=>{
            if(element.id == idToUpdate){

                element.categoryName = body.categoryName || element.categoryName;
                element.productsAvailable = body.productsAvailable || element.productsAvailable;
            
            
            }

            return element
        });

        
        return {
            message: 'updated',
            newElement: newListOfCategories
        }

    


    }

    delete(idToDelete){

        let newList = this.categories.filter((element)=>{
            return element.id != idToDelete
        });

        this.categories = newList;

        return {
            message: "Deleted"
        }
    }
}

module.exports = CategoriesService
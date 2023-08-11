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

        return new Promise((resolve, reject)=>{

            setTimeout(()=>{
                resolve(this.categories)
            }, 4000)
        })
    }


    findOne(id){

        return new Promise((resolve, reject)=>{

            setTimeout(()=>{
                let isItEvenThere = this.categories.findIndex((element)=>{
                    return element.id == id;
                })
    
                if(isItEvenThere != -1){
                    let category = this.categories[isItEvenThere]
                    resolve(category);
    
                }else{
                    reject(new Error("no such category"))
                }
            }, 4000)

            
            
    
            
        })
        
    }

    create(body){

        return new Promise((resolve, reject)=>{

            setTimeout(()=>{

                this.categories.push({
                    id: faker.string.uuid(),
                    ...body
                })

                resolve({
                    message: "Created",
                    newCategory: body
                })
            }, 4000)

            
    
            
        })
        
    }

    update(idToUpdate, body){

        return new Promise((resolve, reject)=>{

            setTimeout(()=>{

                let isItEvenThere = this.categories.findIndex((element)=>{

                    return element.id == idToUpdate;
                });

                if(isItEvenThere != -1){

                    let newListOfCategories = this.categories.map((element)=>{
                        if(element.id == idToUpdate){
            
                            element.categoryName = body.categoryName || element.categoryName;
                            element.productsAvailable = body.productsAvailable || element.productsAvailable;
                        
                        
                        }
            
                        return element
                    });
            
                    
                    resolve({
                        message: 'updated',
                        newElement: newListOfCategories
                    })
                }else{

                    reject(new Error('Not found'))
                }

                

            }, 4000)

            
        })

        

    


    }

    delete(idToDelete){
        
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{

                let isItEvenThere = this.categories.findIndex((element)=>{
                    return element.id == idToDelete
                });

                if(isItEvenThere != -1){
                    let newList = this.categories.filter((element)=>{
                        return element.id != idToDelete
                    });
            
                    this.categories = newList;
            
                    resolve({
                        message: "Deleted"
                    })
                }else{

                    reject(new Error('No such category'))
                }
                
            }, 4000)
        })
        
    }
}

module.exports = CategoriesService
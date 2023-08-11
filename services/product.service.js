const {faker} = require('@faker-js/faker')

class ProductsService{

    constructor(){
        this.products = [];
        this.generate()
    }

    generate(){
        const limit = 10;

        for(let index = 0; index < limit; index++){
            this.products.push({
                
                id: faker.string.uuid(),
              name: faker.commerce.productName(),
              price: parseInt(faker.commerce.price(), 10),
              image: faker.image.url()
            })
        }
    }

    create(body){

        let newID = faker.string.uuid();
        let newProduct = {

            id: newID,
            name: body.name,
            price: body.price,
            image: body.image
        }

        this.products.push(newProduct);

        return {
            message: "Created",

            product: newProduct
        }

    }

    find(){
        
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(this.products);
            }, 5000);
        })
    }

    findOne(id){

        return this.products.find((item)=>{
            return item.id === id
        })
        

    }

    update(idToUpdate, body){


        let updatedList = this.products.map((element)=>{

            if(element.id == idToUpdate){
                element.name = body.name || element.name;
                element.price = body.price || element.price;
                element.image = body.image || element.image
            }

            return element
        });

        this.products = updatedList;

        return {
            message: "updated"
        }

    }

    delete(idDelete){

        
        let newListOfProducts = this.products.filter((product)=>{
            return product.id != idDelete;
        })

        this.products = newListOfProducts;

        

        return {
            message: "deleted"
        }


    }
}

module.exports = ProductsService
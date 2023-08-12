const {faker} = require('@faker-js/faker')
const boom = require('@hapi/boom')

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
              image: faker.image.url(),
              isBlocked: faker.datatype.boolean()
            })
        }
    }

    create(body){

      return new Promise((resolve, reject)=>{
        setTimeout(() => {

          if(body.name != 'Uwu'){
            let newID = faker.string.uuid();
            let newProduct = {

                id: newID,
                name: body.name,
                price: body.price,
                image: body.image
            }

            this.products.push(newProduct);

            resolve(this.products);

          }else{

            reject(boom.forbidden('Uwus are not allowed, you bitchless ass mf'));

          }

        }, 4000);
      })


    }

    find(){

        return new Promise((resolve, reject)=>{
            setTimeout(()=>{

                
                resolve(this.products);
            }, 5000);
        })
    }

    findOne(id){

        return new Promise((resolve, reject)=>{

          setTimeout(()=>{

            const findingProduct = this.products.findIndex((element)=>{
              return element.id === id;
            });

            if(findingProduct != -1){
              if(this.products[findingProduct].isBlocked){
                reject(boom.forbidden('Cant show you this product'))
              }else{
                resolve(this.products[findingProduct]);
              }
              

            }else{

              reject(boom.notFound('Product not found'));
            }

          }, 4000)


        })


    }

    update(idToUpdate, body){

      return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          let isItEvenThere = this.products.findIndex((element)=>{
            return element.id == idToUpdate;
          });

          if(this.products[isItEvenThere].isBlocked){

            reject(boom.forbidden("You can't update this product"));
          }else{

              if(isItEvenThere != -1){

                
                let updatedList = this.products.map((element)=>{

                  if(element.id == idToUpdate){
                      element.name = body.name || element.name;
                      element.price = body.price || element.price;
                      element.image = body.image || element.image
                  }

                  return element
                });

                this.products = updatedList;

                resolve({
                  message: "updated"
                });


            }else{

              reject(boom.notFound('Product not found'))
            }
          }
          

        }, 4000)
      })




    }

    delete(idDelete){


        return new Promise((resolve, reject)=>{
          setTimeout(() => {

              let isItEvenThere = this.products.findIndex((element)=>{
                return element.id == idDelete
              });

              if(isItEvenThere != -1){

                  let newListOfProducts = this.products.filter((product)=>{
                    return product.id != idDelete;
                  })

                  this.products = newListOfProducts;



                resolve({
                  message: "deleted"
                });

              }else{

                reject(boom.notFound('Product not found'));
              }

          }, 4000);
        })



    }
}

module.exports = ProductsService

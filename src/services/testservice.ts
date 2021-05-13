import Itest from './interface'

class testservice implements Itest {
    constructor(test : Itest){
        this.name = test.name,
        this.age = test.age
    }
    name: string
    age: number

}




export default testservice
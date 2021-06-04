

import Itest from './interface';

export default class testservice implements Itest {
    constructor(test: { name: any; age: any; }){
   
        this.name = test.name,
        this.age = test.age
    }
    name: string
    age: number

}


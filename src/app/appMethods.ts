import Itest from '../services/interface'
import testservice from '../services/testservice'


let appMethods = {
    testFun: function(){
        this.test = "Damian"
        console.log(this.test)

        this.test =  new testservice({name:"To jest moje imie gdy uzyje serwisu" , age:28}).name

        // this.test = {age: 34 , name:"Damian z interface"} as Itest

    }
}

export default appMethods
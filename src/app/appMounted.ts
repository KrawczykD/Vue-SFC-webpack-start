import testservice from "../services/testservice";



let appMounted = function(){
    console.log("Vue app is mounted")

    console.log(new testservice({age: 20 , name:"Test"}))

    this.testservice = testservice

}
export default appMounted
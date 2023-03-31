
type StringOrNum = string | number;

interface IsPerson {
    name: string,
    age: number,
    quote: StringOrNum
}

const TypescriptTest = () => {

    const logDetails = (uid: StringOrNum, item: string)=>{
        console.log(`${item} has a uid of ${uid}`);
    }

    const myPerson: IsPerson = {
        name: 'Geoff',
        age: 30,
        quote: 'You shall not pass!!!'
    }

    const greetPerson = (person: IsPerson)=>{
        console.log(`Hello ${myPerson.name}. You are ${myPerson.age} today!`)
    }

    return (<>
    <h1>Typescript Tests</h1>
    <h2>Type Alias & Interfaces</h2>
    <button onClick={(e)=>{logDetails('rics UID 123', 'uid 321')}}>Press Me</button>
    
    <h2>Type Interface</h2>
    <h3>{myPerson.name}</h3>
    <h3>{myPerson.age}</h3>
    <h3>{myPerson.quote}</h3>

    <button onClick={(e)=>{greetPerson(myPerson)}}>Press Me</button>    
    </>  );
}
 
export default TypescriptTest;
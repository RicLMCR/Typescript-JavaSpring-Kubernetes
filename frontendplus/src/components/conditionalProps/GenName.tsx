import GenButton from "./GenButton";

const GenName = () => {
const myName:string = 'Dave';
const message: string = `Hi ${myName}. Have a great day`;
  return (
    <div>
      <h1>Generate Name</h1>
      <GenButton name={myName} message={message}/>
    </div>
  );
};

export default GenName;

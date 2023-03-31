import GenButton from "./GenButton";

const GenName = () => {
  const myAge:number = 40;
  const message: string = `You are ${myAge} today!`;
  return (
    <div>
      <h1>Generate Age</h1>
      <GenButton age={myAge} message={message}/>
    </div>
  );
};

export default GenName;

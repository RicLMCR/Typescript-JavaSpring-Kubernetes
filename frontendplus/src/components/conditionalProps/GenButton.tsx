type CommonProps = {
  message: string;
};

type NameProps = CommonProps & {
  name?: string;
};

type AgeProps = CommonProps & {
  age?: number;
};

type Props = NameProps & AgeProps;

const GenButton = (props: Props) => {
  const { message, name, age } = props;

  const generateName = (nameProps: NameProps) => {
    console.log(`${nameProps.message}`);
  };

  const generateAge = (ageProps: AgeProps) => {
    console.log(`${ageProps.message}`);
  };

  return (
    <div>
      {props.name ? (
        <button onClick={(e) => generateName(props)}>{name}</button>
      ) : props.age ?(
        <button onClick={(e) => generateAge(props)}>{age}</button>
      ):<h2>No Props Passed</h2>}
    </div>
  );
};

export default GenButton;

import React from "react";

// interface for props objects
interface IProps {
  list: {
    name: string;
    key: number;
  }[];
}

// list functional component
const List: React.FC<IProps> = ({ list }) => {
  // map list of names
  const listNames = () => {
    return list.map((lists) => (
      <div className="listEntry" key={lists.key}>
        <li>{lists.name}</li>
      </div>
    ));
  };

  return (
    <div className="list">
      <h2>Sample List</h2>
      <ul>{listNames()}</ul>
    </div>
  );
};

export default List;

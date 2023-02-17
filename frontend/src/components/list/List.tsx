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
  return (
    <div className="list">
      <h2>Sample List</h2>

      {list.map((lists: any) => (
        <div className="listEntry" key={lists.key}>
          <ul>
            <li>{lists.name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default List;

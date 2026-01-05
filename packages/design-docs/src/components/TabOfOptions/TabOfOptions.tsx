import "./TabOfOptions.scss";

interface TabOfOptionsProps {
  options: {
    property: string;
    value: string;
    defaultValue: string;
    dependance: string;
  }[];
}

export const TabOfOptions = ({ options }: TabOfOptionsProps) => {
  return (
    <table className="rte-stories-table-options">
      <thead>
        <tr>
          <th scope="col">Property</th>
          <th scope="col">Value</th>
          <th scope="col">Default Value</th>
          <th scope="col">Dependance</th>
        </tr>
      </thead>
      <tbody>
        {options.map((option, index) => (
          <tr key={index}>
            <th scope="row">{option.property}</th>
            <td>{option.value}</td>
            <td>{option.defaultValue}</td>
            <td>{option.dependance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

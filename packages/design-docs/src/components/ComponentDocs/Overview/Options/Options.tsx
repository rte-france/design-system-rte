import React from "react";

import "./Options.scss";

interface OptionsProps {
  options: {
    property: string;
    value: string;
    defaultValue: string;
    dependance: string;
  }[];
}

const Options = ({ options }: OptionsProps) => {
  return (
    <table className="rte-options">
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

export default Options;

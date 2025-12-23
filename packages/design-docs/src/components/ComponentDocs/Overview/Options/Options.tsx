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
    <table className="rte-options sb-unstyled">
      <colgroup>
        <col className="rte-options-col-auto" />
        <col className="rte-options-col-flex" />
        <col className="rte-options-col-auto" />
        <col className="rte-options-col-auto" />
      </colgroup>
      <thead>
        <tr>
          <th scope="col">Property</th>
          <th scope="col">Value</th>
          <th scope="col" className="rte-options-header-no-wrap">
            Default Value
          </th>
          <th scope="col" className="rte-options-header-no-wrap">
            Dependance
          </th>
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

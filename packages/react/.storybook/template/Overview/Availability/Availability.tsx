import Icon from "../../../../src/components/icon/Icon";
import "./Availability.scss";
import angularLogo from "../../../asset/img/angular-logo.svg";
import figmaLogo from "../../../asset/img/figma-logo.svg";
import reactLogo from "../../../asset/img/react-logo.svg";
import storybookLogo from "../../../asset/img/storybook-logo.svg";

const Availability = () => {
  return (
    <>
      <div className="availability table-wrapper">
        <table>
          <thead>
            <tr>
              <th colSpan={2}>Design</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="item">
                  <img src={figmaLogo} alt="Figma logo" aria-hidden="true" />
                  <span>Figma</span>
                </div>
              </td>
              <Available />
            </tr>
            <tr>
              <td>
                <div className="item">
                  <img src={storybookLogo} alt="Storybook logo" aria-hidden="true" />
                  <span>Guidelines</span>
                </div>
              </td>
              <Available />
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan={2}>Code</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="item">
                  <img src={reactLogo} alt="React logo" aria-hidden="true" />
                  <span>React</span>
                </div>
              </td>
              <Available />
            </tr>
            <tr>
              <td>
                <div className="item">
                  <img src={angularLogo} alt="Angular logo" aria-hidden="true" />
                  <span>Angular</span>
                </div>
              </td>
              <Available />
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const Available = () => (
  <td className="status-available">
    <div className="item">
      <Icon name="check-circle" />
      <span>Disponible</span>
    </div>
  </td>
);

export default Availability;

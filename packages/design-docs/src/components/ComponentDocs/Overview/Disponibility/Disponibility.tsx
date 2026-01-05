import "./Disponibility.scss";
import angularLogo from "../../../../../../react/.storybook/asset/img/angular-logo.svg";
import figmaLogo from "../../../../../../react/.storybook/asset/img/figma-logo.svg";
import reactLogo from "../../../../../../react/.storybook/asset/img/react-logo.svg";
import storybookLogo from "../../../../../../react/.storybook/asset/img/storybook-logo.svg";
import Icon from "../../../../../../react/src/components/icon/Icon";

interface DisponibilityProps {
  design?: {
    figma?: boolean;
    guidelines?: boolean;
  };
  code?: {
    react?: boolean;
    angular?: boolean;
  };
}

const Disponibility = ({ design, code }: DisponibilityProps) => {
  return (
    <div className="rte-disponibility">
      <table>
        {design && (
          <>
            <thead>
              <tr>
                <th colSpan={2}>Design</th>
              </tr>
            </thead>
            <tbody>
              {design.figma !== undefined && (
                <tr>
                  <td>
                    <div className="rte-disponibility-item">
                      <img src={figmaLogo} alt="Figma logo" aria-hidden="true" />
                      <span>Figma</span>
                    </div>
                  </td>
                  <AvailabilityCell available={design.figma} />
                </tr>
              )}
              {design.guidelines !== undefined && (
                <tr>
                  <td>
                    <div className="rte-disponibility-item">
                      <img src={storybookLogo} alt="Storybook logo" aria-hidden="true" />
                      <span>Guidelines</span>
                    </div>
                  </td>
                  <AvailabilityCell available={design.guidelines} />
                </tr>
              )}
            </tbody>
          </>
        )}
        {code && (
          <>
            <thead>
              <tr>
                <th colSpan={2}>Code</th>
              </tr>
            </thead>
            <tbody>
              {code.react !== undefined && (
                <tr>
                  <td>
                    <div className="rte-disponibility-item">
                      <img src={reactLogo} alt="React logo" aria-hidden="true" />
                      <span>React</span>
                    </div>
                  </td>
                  <AvailabilityCell available={code.react} />
                </tr>
              )}
              {code.angular !== undefined && (
                <tr>
                  <td>
                    <div className="rte-disponibility-item">
                      <img src={angularLogo} alt="Angular logo" aria-hidden="true" />
                      <span>Angular</span>
                    </div>
                  </td>
                  <AvailabilityCell available={code.angular} />
                </tr>
              )}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
};

interface AvailabilityCellProps {
  available: boolean;
}

const AvailabilityCell = ({ available }: AvailabilityCellProps) => {
  if (!available) {
    return (
      <td className="rte-disponibility-status-unavailable">
        <div className="rte-disponibility-item">
          <span>Non disponible</span>
        </div>
      </td>
    );
  }

  return (
    <td className="rte-disponibility-status-available">
      <div className="rte-disponibility-item">
        <Icon name="check-circle" />
        <span>Disponible</span>
      </div>
    </td>
  );
};

export default Disponibility;

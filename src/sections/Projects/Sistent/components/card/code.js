import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/rocard
import { Button, SistentThemeProvider } from "@layer5/sistent";
import { CodeBlock } from "../button/code-block";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { SistentLayout } from "../../sistent-layout";
import TabButton from "../../../../../reusecore/Button";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

const codes = [
  `<SistentThemeProvider>
       <Button variant="contained">Filled</Button>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Button variant="outlined">Outlined</Button>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Button variant="text">Text</Button>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
       <Button variant="contained">48px Height</Button>
       <Button variant="contained">56px Height</Button>
  </SistentThemeProvider>`,
  `  <SistentThemeProvider>
      <Button
        variant="contained"
        size="medium"
        endIcon={<FaArrowRight size={12} />}
      >
        Next
      </Button>
  </SistentThemeProvider>`,
];

export const CardCode = () => {
  const location = useLocation();
  const { isDark } = useStyledDarkMode();

  return (
    <SistentLayout title="Button" >
      <div className="content">
        <a id="Identity">
          <h2>Button</h2>
        </a>
        <p>
          A button is an interactive element that triggers a specific action,
          takes users where they need to go, and points out what happens next in
          a given flow.
        </p>
        <div className="filterBtns">
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/card"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/components/card")}
            title="Overview"
          />
          <TabButton
            className={
              location.pathname ===
              "/projects/sistent/components/card/guidance"
                ? "active"
                : ""
            }
            onClick={() =>
              navigate("/projects/sistent/components/card/guidance")
            }
            title="Guidance"
          />
          <TabButton
            className={
              location.pathname === "/projects/sistent/components/card/code"
                ? "active"
                : ""
            }
            onClick={() => navigate("/projects/sistent/identity/color/code")}
            title="Code"
          />
        </div>
        <div className="main-content">
          <p>
          The Card component is a flexible and customizable UI element used to display content in a structured and visually appealing manner. 
          </p>
          <a id="Card Props">
            <h2>Card Props</h2>
          </a>
          
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="contained">Filled</Button>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="filled-button" code={codes[0]} />
          </div>
          <h3>Outlined Button</h3>
          <p>
            Can be used for both medium and sometimes high-emphasis actions.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="outlined">Outlined</Button>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="outlined-button" code={codes[1]} />
          </div>
          <h3>Text Button</h3>
          <p>
            Mostly used for less pronounced and very low emphasis actions. Can
            also be used for text links as well.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="text">Text</Button>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="text-button" code={codes[2]} />
          </div>
          <a id="Sizes">
            <h2>Sizes</h2>
          </a>
          <p>
            For now, two different sizes of buttons exist: 56px height and 48px
            height.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button variant="contained" size="medium">
                  48px Height
                </Button>
                <Button variant="contained" size="large">
                  56px Height
                </Button>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="button-sizes" code={codes[3]} />
          </div>
          <a id="Adding Icons">
            <h2>Adding Icons</h2>
          </a>
          <p>
            Icons are mostly added to filled and outlined buttons and they are
            used to better describe the information being passed across by the
            button’s label.
          </p>
          <div className="showcase">
            <div className="items">
              <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
                <Button
                  variant="contained"
                  size="medium"
                  endIcon={<FaArrowRight size={12} />}
                >
                  Next
                </Button>
              </SistentThemeProvider>
            </div>
            <CodeBlock name="adding-icons" code={codes[4]} />
          </div>
        </div>
      </div>
    </SistentLayout>
  );
};

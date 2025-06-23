// import React from "react";
// import Footer from "./Footer";
// import Header from "./Header";

// const Layout = ({ children }) => {
//   return (
//     <>
//       <Header />
//       <div className="content">{children}</div>
//       <Footer />
//     </>
//   );
// };

// export default Layout;

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout-wrapper">
        <Header />
        <div className="layout-body">{children}</div>
        <Footer />
      </div>

      <style>{`
        html, body, #root {
          height: 100%;
          margin: 0;
          padding: 0;
        }

        .layout-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .layout-body {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .layout-body > * {
          flex: 1;
        }

        .footer {
          margin-top: auto;
        }
      `}</style>
    </>
  );
};

export default Layout;




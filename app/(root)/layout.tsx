import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>NAVBAR</h1>
      {children}
    </div>
  );
};

export default layout;

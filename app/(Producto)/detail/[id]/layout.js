import Header from "@/Components/ui/Header/Header";
import { headerData } from "@/app/utils/headerUtils";
import React from "react";

const DetailLayout = ({ children }) => {
  return (
    <div>
      <Header data={headerData} />
      {children}
    </div>
  );
};

export default DetailLayout;

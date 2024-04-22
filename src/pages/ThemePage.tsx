import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ThemePage = () => {
   const {themeId} =  useParams();
   const [Component, setComponent] = useState<FC| null>(null);

   useEffect(()=> {

   })

   if(!Component) return
  return <></>;
};

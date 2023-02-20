import React from "react";
import { cv_list } from "../dummy/cv_list";

export const CvContext = React.createContext({
    cv_list : cv_list,
});


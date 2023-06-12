import React, { useContext } from "react";
import { StateContext } from '../contexts';

export const useStateValue = () => useContext(StateContext);
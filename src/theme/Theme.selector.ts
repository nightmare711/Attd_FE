import { createSelector } from "@reduxjs/toolkit";
import { IRootState } from "src/app/store";

const selfSelect = (state: IRootState) => state;
export const darkModeSelector = createSelector(
  selfSelect,
  (state: IRootState) => state.theme.darkMode
);

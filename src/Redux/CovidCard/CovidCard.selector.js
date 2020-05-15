import { createSelector } from "reselect";

const selectData = (state) => state.dataArray;

export const selectDataArray = createSelector(
  [selectData],
  (dataArray) => dataArray.data
);

import React from "react";
import SortingItem from "./sortingItem";

const Sorting = ({
  hideBlock,
  sortingList,
  conditionsApplied,
  setConditionsApplied,
}) => {
  const equalObjects = (obj1, obj2) => {
    return (
      JSON.stringify(Object.entries(obj1).sort()) ===
      JSON.stringify(Object.entries(obj2).sort())
    );
  };

  return (
    sortingList && (
      <ul>
        {sortingList.map((sortingItem) => (
          <SortingItem
            hideBlock={hideBlock}
            key={sortingItem.value}
            sortingItem={sortingItem}
            sortingList={sortingList}
            equalObjects={equalObjects}
            conditionsApplied={conditionsApplied}
            setConditionsApplied={setConditionsApplied}
          />
        ))}
      </ul>
    )
  );
};

export default Sorting;

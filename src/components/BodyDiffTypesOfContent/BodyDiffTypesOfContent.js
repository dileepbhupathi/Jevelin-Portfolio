import { Button } from "antd";
import React, { useState } from "react";
import { TypesOfCategoriesButtons } from "../../constants/TypesOfCategories";
import { BodyCategoriesList } from "../BodyCategoriesList/BodyCategoriesList";
import "./BodyDiffTypesOfContent.scss";
import {TypesOfCategoriesImagesList} from '../../constants/TypesOfCategoriesImagesList'


export const BodyDiffTypesOfContent = () => {

    const [isActive,setisActive] = useState(null)

    const [filteredData,setFilteredData] = useState(TypesOfCategoriesImagesList)

  const ParticularCategory = (each) => {
    console.log("category", each);
    if (each.name === 'All') {
      setFilteredData(TypesOfCategoriesImagesList)
      setisActive(each.id)
    }
    else if (isActive === each.id) {
      setisActive(null)
    }
    else {
      let updatedFilteredData = TypesOfCategoriesImagesList.filter ((element) => element.category === each.name.toUpperCase())
      setFilteredData(updatedFilteredData)
      console.log('filter',updatedFilteredData)
      setisActive(each.id)
    }
  };
  return (
    <div>
      <div className="categories-button-list">
        {TypesOfCategoriesButtons.map((each) => (
          <Button
          className={isActive === each.id? "active-button":'inactive-button'}
            key={each.id}
            onClick={() => {
              ParticularCategory(each);
            }}
          >
            {each.name}
          </Button>
        ))}
      </div>
      <BodyCategoriesList TypesOfCategoriesImagesList = {filteredData}/>
    </div>
  );
};

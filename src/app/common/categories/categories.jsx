import api from "../../api";
import s from "./categories.module.css";
import cancel from "../../img/cancel.svg";
import CategoriesList from "./categoriesList";
import arrowDown from "../../img/arrowDown.svg";
import React, { useEffect, useState } from "react";
import BtnDisplayCategories from "./btnDisplayCategories";

const Categories = ({ chooseCategory }) => {
  const [categories, setCategories] = useState([]);
  const [categoriesHidden, setCategoriesHidden] = useState(true);

  useEffect(() => {
    api.categoryList.fetchAll().then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    categories.length && setCategoriesHidden(false);
  }, [categories]);

  return (
    <nav className={s.categoriesNav}>
      {!categoriesHidden ? (
        <>
          <BtnDisplayCategories
            img={cancel}
            display={true}
            setCategoriesHidden={setCategoriesHidden}
          />

          <CategoriesList
            categories={categories}
            chooseCategory={chooseCategory}
          />
        </>
      ) : (
        <BtnDisplayCategories
          display={false}
          img={arrowDown}
          setCategoriesHidden={setCategoriesHidden}
        />
      )}
    </nav>
  );
};

export default Categories;

// {currentCategory === category.name && category.values && (
//   <ul className={s.categoriesList}>
//     {category.values.map((subCategory1) => (
//       <>
//         <li
//           className="btn"
//           id={s.category}
//           key={subCategory1.name}
//           onClick={() => chooseSubCategory(subCategory1)}
//         >
//           <p className={s.categoryName}>
//             {subCategory1.name}
//           </p>
//           {subCategory1.values && (
//             <img
//               className={s.imgArrowDown}
//               src={arrowDown}
//               alt=""
//             />
//           )}
//         </li>

//         {/*  */}
//       </>
//     ))}
//   </ul>
// )}

/* {currentSubCategory === subCategory1.name &&
                            subCategory1.values && (
                              <ul className={s.categoriesList}>
                                {subCategory1.values.map((subCategory2) => (
                                  <li
                                    className="btn"
                                    id={s.category}
                                    key={subCategory2.name}
                                    onClick={() =>
                                      chooseSubCategory(subCategory2)
                                    }
                                  >
                                    <p className={s.categoryName}>
                                      {subCategory2.name}
                                    </p>
                                    {subCategory2.values && (
                                      <img
                                        className={s.imgArrowDown}
                                        src={arrowDown}
                                        alt=""
                                      />
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )} */

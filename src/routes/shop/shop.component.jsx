import {Routes, Route} from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import {useEffect} from "react";
import {setCategories} from "../../store/categories/categories.action";
import {useDispatch} from "react-redux";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesArray = async () => {
      const categoriesArray = await getCategoriesAndDocuments()
      dispatch(setCategories(categoriesArray))
    }
    getCategoriesArray()
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path={":category"} element={<Category/>}/>
    </Routes>
  );
};

export default Shop;
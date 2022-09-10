import {createSelector} from 'reselect'
import {CategoryMap} from "./categories.types";
import {CategoriesState} from "./categories.reducer";
import {RootState} from "../store";

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories

const selectCategoriesArray = createSelector(
  [selectCategoryReducer],
  (categories) => categories.categoriesArray
)

export const selectCategoriesMap = createSelector(
  [selectCategoriesArray],
  (categoriesArray): CategoryMap =>
    categoriesArray.reduce((acc, category) => {
      const {title, items} = category
      acc[title.toLowerCase()] = items
      return acc
    }, {} as CategoryMap)
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categories) => categories.isLoading
)

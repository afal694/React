import { DISHES } from "../components/shared/dishes";
import { PROMOTIONS } from "../components/shared/promotions";
import { COMMENTS } from "../components/shared/comments";
import { LEADERS } from "../components/shared/leaders";

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
  return state;
};

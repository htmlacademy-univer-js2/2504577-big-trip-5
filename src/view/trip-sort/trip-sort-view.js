import AbstractView from "../../framework/view/abstract-view";
import { createSortTemplate } from "./trip-sort-template";

export default class TripSortView extends AbstractView {
  #handleSortTypeChange = null;

  constructor({ onSortTypeChange }) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;
    console.log(this.element.querySelector(".trip-sort__input"));
    this.element
      .querySelectorAll(".trip-sort__input")
      .forEach((sort) =>
        sort.addEventListener("click", this.#sortTypeChangeHandler)
      );
  }

  get template() {
    return createSortTemplate();
  }

  #sortTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}

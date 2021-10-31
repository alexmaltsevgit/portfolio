export class CatAPI {
  #url = "https://cataas.com/api/cats";
  #tags = [];
  #limit = 1;

  getCatsAsync = async () => {
    const url =
      this.#url + "?" + this.#buildTagsString() + "&" + this.#buildLimitString;

    const response = await fetch(url);
    return await response.json();
  };

  setTag = (tag) => {
    this.#tags.push(tag);
  };

  setLimit = (limit) => {
    this.#limit = limit;
  };

  static getImageUrlByID = (id) => {
    const imagesUrl = "https://cataas.com/cat/";
    return imagesUrl + id;
  };

  #buildTagsString = () => {
    if (this.#tags.length === 0) return "";

    let tagsString = "tags=";

    tagsString = this.#tags.reduce((acc, curr, index) => {
      const delim = index === this.#tags.length - 1 ? "" : ",";
      return acc + curr + delim;
    }, tagsString);

    return tagsString;
  };

  #buildLimitString = () => {
    return `limit=${this.#limit}`;
  };
}

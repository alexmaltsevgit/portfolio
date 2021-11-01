import { useEffect, useState } from "react";
import { CatAPI } from "../utils/CatAPI";
import { getRandomFromArray } from "../utils/utils";

const useCatImages = (count) => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const catAPI = new CatAPI();
    catAPI.setTag("cute");

    catAPI.getCatsAsync().then((cats) => {
      const images = [];
      for (let i = 0; i < count; i++) {
        const cat = getRandomFromArray(cats);
        images.push(CatAPI.getImageUrlByID(cat.id));
      }
      setUrls(images);
    });
  }, [count]);

  return urls;
};

export default useCatImages;

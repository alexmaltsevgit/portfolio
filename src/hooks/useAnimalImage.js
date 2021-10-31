import { useEffect, useState } from "react";
import { CatAPI } from "../utils/CatAPI";
import { getRandomFromArray } from "../utils/utils";

const useCatImage = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const catAPI = new CatAPI();
    catAPI.setTag("cute");

    catAPI.getCatsAsync().then((cats) => {
      const cat = getRandomFromArray(cats);
      const catUrl = CatAPI.getImageUrlByID(cat.id);
      setUrl(catUrl);
    });
  }, []);

  return url;
};

export default useCatImage;

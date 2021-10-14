import { categoryList } from "../astros";

export const getAstros = async () => {
    try {
        //const response = await fetch('link');
        //const json = await response.json();
        //setData(json);

        return categoryList;
    } catch (error) {
        console.error(error);
    }
}
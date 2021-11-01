import axios from "axios";
import { categoryList } from "../astros";
import { UserCoords } from "./getUserLocation";

const api = axios.create({
    // baseURL: "https://andromeda-api.com",
});

export const getAstros = async ({ latitude, longitude }: UserCoords) => {
    // await api.get('').catch((error) => {
    //     throw new Error(error);        
    // }).then((astros) => {
    //     return astros
    // });

    return categoryList;
}
import { UserCoords } from "./getUserLocation";

export const getAstros = async ({ latitude, longitude }: UserCoords) => {
  try {
    const response = await fetch(`https://staging-pi2-andromeda-server.herokuapp.com/astro_list?lat=${latitude}&long=${longitude}`, {
      method: 'GET'
    });
    const json = await response.json();
    const astros = json.astros;
    return astros;
  } catch (error) {
    console.error(error);
  }
};
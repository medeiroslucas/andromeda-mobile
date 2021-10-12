export const getAstros = async () => {
    try {
        //const response = await fetch('link');
        //const json = await response.json();
        //setData(json);

        const response: Record<string, string> = {
            "jupiter": "planet",
            "mars": "planet",
            "mercury": "planet",
            "moon": "satellite",
            "neptune": "planet",
            "saturn": "planet",
            "uranus": "planet",
            "venus": "planet"
        }

        var pList: string[] = [];
        var sList: string[] = [];

        for(const astro in response) {
            if(response[astro] === "planet") {
                pList.push(astro);
            }
            else {
                sList.push(astro);
            }
        }

        return [
            {
                name: 'Planetas',
                astros: pList
            },
            {
                name: 'Satélites',
                astros: sList
            }
        ];
    } catch (error) {
        console.error(error);
    }
}
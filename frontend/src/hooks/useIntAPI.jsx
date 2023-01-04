import { useState } from "react";

export const useIntAPI = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const fetchData = async () => {
        setIsLoading(true); // Set isLoading to true before making the API request
        setError(null);

        // Param min and max change due to JSON
        const response = await fetch(
            "https://www.random.org/integers/?num=4&min=1&max=8&col=4&base=10&format=plain&rnd=new"
        );

        // Turn API response into a single string
        const text = await response.text();
        const splitText = text.split("\t").join("");
        const json = JSON.parse(splitText).toString();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }

        if (response.ok) {
            return json;
        }
    };

    return { fetchData, error, isLoading, setIsLoading };
};

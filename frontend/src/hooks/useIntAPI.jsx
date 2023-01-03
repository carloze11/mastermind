import { useState } from "react";

export const useIntAPI = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
            "https://www.random.org/integers/?num=4&min=0&max=7&col=4&base=10&format=plain&rnd=new"
        );

        // Turn API response into a single string
        const text = await response.text();
        const splitText = text.split("\t").join("");
        const json = JSON.parse(splitText);

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }

        if (response.ok) {
            setData(json);
            setIsLoading(false);
        }

        setError(error);
        setIsLoading(false);
    };

    return { fetchData, data, error, isLoading };
};

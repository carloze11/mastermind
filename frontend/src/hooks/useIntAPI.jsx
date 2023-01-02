export const useIntAPI = async () => {
    const response = await fetch(
        "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new"
    );
    console.log(response);
    const json = await response.json();
    console.log(json);
};

const getDate = async (namn) => {

    const base = 'https://api.abalin.net/getdate';
    const query = `?name=${namn}&country=se`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data;
};






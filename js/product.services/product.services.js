const productList = () => {
    return fetch("http://localhost:3001/productos")
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const servicesProducts = {
    productList,
}
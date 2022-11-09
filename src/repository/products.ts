import api from "../service/api";

export async function getAllProducts(){
    const response = await api.get("/products");
    return response.data;
}

export async function getProduct(id: string){
    const response = await api.get(`/products/${id}`);
    return response.data;
}
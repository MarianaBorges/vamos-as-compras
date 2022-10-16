import api from "../service/api";

export async function getAllProducts(){
    try {
        const response = await api.get("/products");
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function getProduct(id: string){
    try{
        const response = await api.get(`/products/${id}`);
        return response.data;
    }catch (error){
        throw error;
    }
}
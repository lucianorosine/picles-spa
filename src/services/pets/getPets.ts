import { GetPetRequest, GetPetsRequest } from '../../interfaces/pets'
import httpClient from '../api/httpCliente'

export async function getPets(params: GetPetRequest): Promise<GetPetsRequest>{
    try{
    const response = await httpClient.get('/pet', {params})
    return response.data
    }
    catch(error){
        console.log('Erro ao buscar pet',error)
        throw error
    }
}
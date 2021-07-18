import {SiteClient } from 'datocms-client';

//BFF
export default async function recebedorDeRequest(request, response){
    
    if(request.method === 'POST'){
        const TOKEN = '9a74998057857587d4e491b24b32bf';
        const client = new SiteClient(TOKEN);
        
        const registro = await client.items.create({
            itemType: "972798",// hash do comunity
            ...request.body,
            //imageUrl:"https://github.com/gbyteinfo.png",
            //title:"Teste BFF",
            //creatorSlug:"Sluag",
        })

        console.log("server**", registro)
        response.json({
            dados: 'Novo registro criado!',
            registroCriado: registro,
        })
        return;
        }
        response.status(404).json({
            message: 'Apenas METHODS POST !',
        })
}
//http://"endereço"/api/grupos
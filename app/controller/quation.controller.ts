import { Request, Response } from "express";

interface IBaseFetchProxyBody{
    phpsessid:string
    tawkConnectionTime:number
    twk_uuid:{
        name:string
        value:string
    },
    baseUrlQuery:string
    params:string
}


export const getDocumentNumer = async (req: Request, res: Response) => {
    const {phpsessid,tawkConnectionTime,twk_uuid,baseUrlQuery, params} = req.body as IBaseFetchProxyBody
   
    const apiUrl = `${process.env.APPLICATION_API_URL}${baseUrlQuery}`

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${req.headers.authorization}`, // Si se necesita autorización
                cookie: `PHPSESSID=${phpsessid}; TawkConnectionTime=${tawkConnectionTime}; ${twk_uuid.name}=${twk_uuid.value}`,
            },
            body: params,
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error en la solicitud' });
    }
};
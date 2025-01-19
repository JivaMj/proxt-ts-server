import { Request, Response } from "express";

export const getDocumentNumer = async (req: Request, res: Response) => {
    const PHPSESSID = '16m2jg755rlecc8mmakrfmepr5';
    const TawkConnectionTime = 0;
    const twk_uuid_66f43959e5982d6c7bb43837 = '%7B%22uuid%22%3A%221.Sww0qkJp26YFAgCxXGIFTqL1LDXn61J9JvsTlRrBTWSY3IojGamd9UP7BIUJhY0Rh9YGIMem2N1jfpZLDA5DlcciAYACogqhF8h89bu1HEo79g8dKUWAX%22%2C%22version%22%3A3%2C%22domain%22%3A%22jointerp.com%22%2C%22ts%22%3A1737305695072%7D'

    const apiUrl = 'https://joint.jointerp.com/api.php?c=Helper&a=get_ApiFields';
    const params = 'api=DocumentNumbering%2FgetListDocumentType&method=GET&doctype=1';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${req.headers.authorization}`, // Si se necesita autorización
                cookie: `PHPSESSID=${PHPSESSID}; TawkConnectionTime=${TawkConnectionTime}; twk_uuid_66f43959e5982d6c7bb43837=${twk_uuid_66f43959e5982d6c7bb43837}`,
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
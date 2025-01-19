import { getDocumentNumer } from 'app/controller/quation.controller';
import { Application } from 'express';

const quationRoutes = (app: Application) => {
    app.get('/api/proxy/NumeroDeDocumento', getDocumentNumer);
}


export default quationRoutes;
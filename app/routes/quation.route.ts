import { getDocumentNumer } from 'app/controller/quation.controller';
import { Application } from 'express';

const quationRoutes = (app: Application) => {
    app.post('/api/proxy/NumeroDeDocumento', getDocumentNumer);
}


export default quationRoutes;
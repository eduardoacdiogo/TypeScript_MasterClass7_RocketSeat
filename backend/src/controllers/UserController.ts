import { Request, Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: "Eduardo", email: "eduardo@example.com" }
];

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },

    async create(req: Request, res: Response){
        const emailservice = new EmailService();
        emailservice.sendMail({
            to: {
                name: 'eduardo', 
                email: 'eduardo@example.com'
            }, 
            message: {
                subject: 'Teste', 
                body: 'Um texto qualquer.'
            }
        });
        return res.send();
    }
};


interface IMailTo{
    name: string;
    email: string;
}

interface IMailMessage{
    subject: string;
    body: string;
    attachment?: Array<string>; // string[];
}

interface IMessageDTO{
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailSercive{
    sendMail(request: IMessageDTO) : void;
}

class EmailService implements IEmailSercive{
    sendMail({to, message} : IMessageDTO){
        console.log('Email envidado para ${to.name}: ${message.subject}');
    }
}

export default EmailService;
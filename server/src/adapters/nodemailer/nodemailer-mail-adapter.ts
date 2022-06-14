import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "1ff7b7ea2a9d5f",
        pass: "833fccdfa510c4"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget<oi@feedget.com>",
            to: "Arthur Bamberg <bamberguisses@gmail.com>",
            subject,
            html: body
        });
    };
}
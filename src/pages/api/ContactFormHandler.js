// import prisma from '../../essentials/prisma';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        if (!validateText(name, 2, 50)) {
            return res.status(400).json({ error: 'The name should be a text with a length of 2 and 50 characters' });
        }

        //check if the email is valid
        if (!validateEmail(email)) {
            return res.status(400).json({ error: 'Invalid email address' });
        }

        if (!validateText(subject, 2, 50)) {
            return res.status(400).json({ error: 'The subject should be a text with a length of 2 and 50 characters' });
        }

        // save the email to the database
        try {
            console.log(name + " " + email + " " + subject + " " + message);
            // await prisma.contactUs.create({
            //     data: {
            //         name: name,
            //         email: email,
            //         subject: subject,
            //         message: message
            //     },
            // });

            //send a success response back to the client
            return res.status(200).json({ message: 'Thanks for getting in touch!' });
        } catch (error) {
            console.error(error);

            //send an error response back to the client
            return res.status(500).json({ error: 'Something went wrong while submitting the form' });
        } finally {
            // disconnect Prisma client
            // await prisma.$disconnect();
        }
    } else {
        // handle other HTTP methods here
        res.status(405).json({ error: 'Request Method Not Allowed' });
    }
}

function validateText(text, min, max) {
    // Check if the text is a string
    if (typeof text !== "string") {
        return false;
    }

    // Check if the min length is specified
    if ((min !== undefined) && (text.length < min)) {
        return false;
    }

    // Check if the max length is specified
    if ((max !== undefined) && (text.length > max)){
        return false;
    }

    // The text is valid
    return true;
}

function validateEmail(email) {
    // Check if the email address has a @ symbol
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/)) {
        return false;
    }

    // Return true if the email address is valid
    return true;
}
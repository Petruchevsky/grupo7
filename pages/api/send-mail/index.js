import nodemailer from "nodemailer";

async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).end();
	}

	const { email, asunto, msje } = req.body;

	let transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST, // Debes verificar el host correcto para tu dominio
		port: process.env.SMTP_PORT,
		secure: true,
		auth: {
			user: process.env.SMTP_USERNAME,
			pass: process.env.SMTP_PASSWORD,
		},
	});

	const mailOptions = {
		from: process.env.SMTP_USERNAME,
		to: process.env.GRUPO7_CONTACTO,
		subject: asunto,
		replyTo: email,
		html: `
    <div>
    
      <h2>${asunto}</h2>
      <h4><strong>${msje}</strong></h4>

      <br/><br/><br/><br/>
             
      <h5>Este mensaje fué enviado por ${email} através del formulario de contacto de Grupo7.CL</h5>
    </div>
    <img 
      src="https://res.cloudinary.com/dtqfrwjdm/image/upload/v1694029561/pie-mail-2_ymxuix.jpg" alt="imagen de pie de email" 
      style="width:100%; position:absolute; bottom:0; box-shadow:0 0 10px white; margin:0 auto"
    />
    `,
	};

	try {
		await transporter.sendMail(mailOptions);
		res.status(200).json({ message: "¡Correo enviado con éxito!" });
	} catch (error) {
		console.error("¡Oh no, el hechizo falló!", error);
		res.status(500).send("¡Oh no! Algo salió mal en el envío del correo");
	}
}

export default handler;

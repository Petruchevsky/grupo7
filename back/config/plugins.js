module.exports = ({ env }) => ({
  "file-system": {
    enabled: true,
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "mail.grupo7.cl"),
        port: env("SMTP_PORT", 465),
        auth: {
          user: env("SMTP_USERNAME", "respuesta-automatica@grupo7.cl"),
          pass: env("SMTP_PASSWORD", "Noreply###g7"),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: "respuesta-automatica@grupo7.cl",
        defaultReplyTo: "respuesta-automatica@grupo7.cl",
      },
    },
  },
});

import nodemailer from 'nodemailer'

const config = useRuntimeConfig()

/**
 * Send Confirmation Email
 *
 * @param  {Object}  data
 * @param  {number}  data.name
 * @param  {string}  data.email
 * @param  {string}  data.subject
 * @param  {string}  data.message
 * @return {void}
 */
export async function sendContactEmail(data) {
  /**
   * Create nodemailer transporter
   * https://docs.aws.amazon.com/ses/latest/DeveloperGuide/smtp-credentials.html
   *
   * @param {string} host      - This is the smtpEndpoint in SES, for example
   *                            'email-smtp.us-east-1.amazonaws.com'
   * @param {string} port      - Amazon SES requires 465, 587 or 25
   * @param {Object} auth
   * @param {string} auth.user - SMTP username: Generated in Amazon SES Console
   * @param {string} auth.pass - SMTP password: Generated in Amazon SES Console
   *                           - See 'Obtaining Amazon SES SMTP credentials
   *                             using the Amazon SES console'
   */
  let transporter = nodemailer.createTransport({
    host: config.AWS_SMTP_REGION,
    port: config.AWS_SMTP_PORT,
    auth: {
      user: config.AWS_SMTP_USERNAME,
      pass: config.AWS_SMTP_PASSWORD,
    },
  })

  // Send email to the user
  const [err, info] = await Try(
    transporter.sendMail({
      sender: data.name,
      from: `${data.name} <${config.ADMIN_EMAIL}>`,
      replyTo: data.email,
      to: config.WEBSITE_EMAIL,
      subject: data.subject,
      html: data.message,
    })
  )

  transporter.close()

  return [err, info]
}

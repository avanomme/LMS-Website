import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const formData = await req.json()

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  // Compose email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'linklettermusicschool@gmail.com',
    subject: 'New Lesson Sign Up',
    text: `
      Name: ${formData.name}
      Age: ${formData.age}
      Parent Name: ${formData.parentName}
      Contact Info: ${formData.contactInfo}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Lesson Type: ${formData.lessonType}
      Lesson Length: ${formData.lessonLength} minutes
      Agreed to Policy: ${formData.agreeToPolicy ? 'Yes' : 'No'}
    `,
  }

  try {
    // Send email
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
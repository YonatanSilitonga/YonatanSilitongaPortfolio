'use server'

import { Resend } from 'resend'
import { portfolioData } from '@/lib/portfolio-data'

const resend = new Resend(process.env.RESEND_API_KEY)

// Pastikan email ini adalah email yang akan menerima pesan
const myEmail = portfolioData.personal.email;

export const sendEmail = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const senderEmail = formData.get('email') as string;
  const message = formData.get('message') as string;

  // Validasi sederhana di server
  if (!name || !senderEmail || !message) {
    return {
      error: 'Semua kolom wajib diisi.',
    };
  }

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>', // Alamat ini wajib untuk akun gratis Resend
      to: myEmail, // Email Anda sebagai penerima
      subject: `Pesan baru dari ${name} via Portfolio`,
      reply_to: senderEmail, // Agar bisa langsung membalas ke email pengunjung
      text: `Pesan: ${message}\n\nDari: ${name}\nEmail: ${senderEmail}`,
    });

    return {
      data,
    };

  } catch (error) {
    return {
      error: 'Gagal mengirim pesan. Silakan coba lagi nanti.',
    };
  }
};
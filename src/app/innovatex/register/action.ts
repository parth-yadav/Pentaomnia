'use server'

import { createPool } from 'mysql2/promise'

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: true
  }
})

export async function registerParticipant(data: {
  name: string
  email: string
  yearOfPassing: number
  degree: string
}) {
  try {
    const connection = await pool.getConnection()
    
    try {
      await connection.execute(
        'INSERT INTO participants (name, email, year_of_passing, degree) VALUES (?, ?, ?, ?)',
        [data.name, data.email, data.yearOfPassing, data.degree]
      )
      
      return { success: true }
    } finally {
      connection.release()
    }
  } catch (error) {
    console.error('Error registering participant:', error)
    throw new Error('Failed to register participant')
  }
}


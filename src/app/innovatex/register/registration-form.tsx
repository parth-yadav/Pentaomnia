'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2 } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Toast, ToastProvider } from "@/components/ui/toast"
import { registerParticipant } from './action'

const currentYear = new Date().getFullYear()

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  yearOfPassing: z.number().int().min(currentYear, { message: "Year of passing must be current year or later." }).max(currentYear + 6, { message: "Year of passing must be within 6 years from now." }),
  degree: z.string().min(2, { message: "Degree must be at least 2 characters." }),
  agreeToRules: z.boolean().refine(val => val === true, { message: "You must agree to the rules to participate." })
})

type FormData = z.infer<typeof formSchema>

export default function RegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agreeToRules: false
    }
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      await registerParticipant(data)
      toast({
        title: "Registration Successful!",
        description: "You've successfully registered for the hackathon.",
        duration: 5000,
      })
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error registering. Please try again.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    
    <div>
      
    </div>
    
  )
}


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
    
    <motion.div
      className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

      
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
          <Input id="name" {...register("name")} className="w-full" />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
          <Input id="email" type="email" {...register("email")} className="w-full" />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="yearOfPassing" className="text-sm font-medium text-gray-700">Year of Passing</label>
          <Input id="yearOfPassing" type="number" {...register("yearOfPassing", { valueAsNumber: true })} className="w-full" />
          {errors.yearOfPassing && <p className="text-red-500 text-xs">{errors.yearOfPassing.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="degree" className="text-sm font-medium text-gray-700">Degree</label>
          <Input id="degree" {...register("degree")} className="w-full" />
          {errors.degree && <p className="text-red-500 text-xs">{errors.degree.message}</p>}
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox 
            id="agreeToRules" 
            onCheckedChange={(checked) => {
              setValue("agreeToRules", checked === true);
            }}
          />
          <label htmlFor="agreeToRules" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            I have read all the rules and agree to participate
          </label>
        </div>
        {errors.agreeToRules && <p className="text-red-500 text-xs">{errors.agreeToRules.message}</p>}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Registering...
            </>
          ) : (
            'Register'
          )}
        </Button>
      </form>
      <ToastProvider>
        <Toast />
      </ToastProvider>
    </motion.div>
    
  )
}


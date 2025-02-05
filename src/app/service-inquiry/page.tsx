import { ServiceInquiryForm } from "./service-inquiry-form"

export default function serviceinquiry() {
  return (
    <main className="px-6 text-center py-10 bg-gradient-to-r from-black to-primary">
      <h1 className="text-3xl text-white font-bold text-center mb-8">Service Inquiry Form</h1>
      <ServiceInquiryForm />
    </main>
  )
}


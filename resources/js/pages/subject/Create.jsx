import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { router, usePage } from "@inertiajs/react"
import SidebarLayout from "../../Layouts/SidebarLayout"

// ShadCN UI components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

//  Zod schema for validation
const subjectSchema = z.object({
  subject_name: z.string().min(1, "Subject name is required"),
  subject_code: z.string().min(1, "Subject code is required"),
})

export default function Create() {
  const { errors: serverErrors } = usePage().props

  //  Setup React Hook Form with Zod
  const form = useForm({
    resolver: zodResolver(subjectSchema),
    defaultValues: {
      subject_name: "",
      subject_code: "",
    },
  })

  // Submit handler
  const onSubmit = (values) => {
    router.post("/subject_store", values, {
      onSuccess: () => {
        form.reset() // <-- clears the form after success
      },
    })
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="bg-white rounded-sm border border-blue-200 shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 py-4 px-6">
          <h1 className="text-2xl font-bold text-white">Create Subject</h1>
        </div>

        {/*  ShadCN Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6">
            {/* Subject Name */}
            <FormField
              control={form.control}
              name="subject_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter subject name" {...field} />
                  </FormControl>
                  <FormMessage />
                  {serverErrors.subject_name && (
                    <p className="text-red-500 text-sm">
                      {serverErrors.subject_name}
                    </p>
                  )}
                </FormItem>
              )}
            />

            {/* Subject Code */}
            <FormField
              control={form.control}
              name="subject_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject Code *</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter subject code" {...field} />
                  </FormControl>
                  <FormMessage />
                  {serverErrors.subject_code && (
                    <p className="text-red-500 text-sm">
                      {serverErrors.subject_code}
                    </p>
                  )}
                </FormItem>
              )}
            />

            {/* Submit button */}
            <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

Create.layout = (page) => <SidebarLayout>{page}</SidebarLayout>

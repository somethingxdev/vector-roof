import { z } from 'astro/zod'

export const formSchema = z.object({
  fullName: z.string().min(3, 'Name must have at least 3 chars!'),
  email: z.string().email('Email not valid!'),
  message: z.string().min(10, 'Message must contain at least 10 chars!'),
});

export function validateForm(formData) {
  try {
    formSchema.parse(formData);
    return { success: true, errors: {} };
  } catch (error) {
    const fieldErrors = {};
    error.errors.forEach((err) => {
      const fieldName = err.path[0];
      fieldErrors[fieldName] = err.message;
    });
    return { success: false, errors: fieldErrors };
  }
}

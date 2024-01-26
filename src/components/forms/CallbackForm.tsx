import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
type FormInput = {
  name: string;
  email: string;
  message: string;
  file: string;
};

const SaleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormInput>();
  async function onSubmit(formData: FormInput, e) {
    try {
      e.preventDefault();
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev',
          to: 'a.s.yarmoluk@gmail.com',
          name: formData.name,
          email: formData.email,
          message: 'Подана заявка с формы',
        }),
      });
      if (!res.ok) {
        toast.error('Упс, что-то пошло не так Попробуйте ещё раз', {
          duration: 3000,
          position: 'bottom-center',
        });
      } else {
        toast.success('Письмо успешно отправлено!', {
          duration: 3000,
          position: 'bottom-center',
        });
      }
    } catch (error) {
      console.log(error);
    }
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="flex flex-col w-full gap-4 mb-5">
        <input
          type="text"
          {...register('name', { required: true, maxLength: 30 })}
          placeholder="Имя"
          className="input h-[52px] lg:h-[44px] focus:ring-1 focus:ring-[#7AD9A0] rounded border-none w-full"
        />
        <input
          type="email"
          {...register('email', {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
          placeholder="Email"
          className="input h-[52px] lg:h-[44px] focus:ring-1 focus:ring-[#7AD9A0] rounded border-none w-full"
        />
        <button className="button font-semibold  disabled:bg-gray-500 lg:py-2.5 lg:px-4 w-full lg:w-auto" disabled={isSubmitting}>
          Оставить заявку
        </button>
      </fieldset>
      <label className="flex items-center text-[#2E3037] gap-2 cursor-pointer">
        <input type="checkbox" required className="form-checkbox rounded focus:ring-0 border-gray-300 text-primary" />
        <span className="text-[12px] sm:text-sm">Я согласен с политикой конфиденциальности</span>
      </label>
      <Toaster />
    </form>
  );
};

export default SaleForm;

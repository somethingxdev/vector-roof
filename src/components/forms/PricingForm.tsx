import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
type FormInput = {
  name: string;
  email: string;
  message: string;
  file: File;
};
const SaleForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const [content, setContent] = useState(null);
  const [filename, setFilename] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();

  async function onSubmit(formData: FormInput, e) {
    try {
      let base64Content;
      e.preventDefault();
      if (content) {
        base64Content = content.split(',')[1];
      }

      const res = await fetch('/api/sendEmailFooter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          content: base64Content,
          filename,
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
    // reset();
  }

  const onAddFileAction = (e) => {
    const reader = new FileReader();
    const files = e.target.files;
    reader.onload = (r) => {
      setContent(r.target.result.toString());
      setFilename(files[0].name);
    };
    reader.readAsDataURL(files[0]);

    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <form className=" max-w-[750px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row items-end gap-5">
        <fieldset className="w-full mb-1">
          <div className="flex items-center gap-3 mb-2">
            <input
              type="text"
              required
              {...register('name', { required: true, maxLength: 30 })}
              placeholder="Имя"
              className={`input h-[52px] focus:ring-1 focus:ring-[#7AD9A0] lg:h-[44px] rounded border-none w-full ${
                errors.name && 'ring-1 ring-primary'
              }`}
            />
            <input
              type="email"
              required
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
              placeholder="Email"
              className={`input h-[52px] lg:h-[44px] focus:ring-[#7AD9A0] rounded border-none w-full 
              ${errors.email && 'ring-1 ring-primary'}`}
            />
          </div>
          <textarea
            placeholder="Краткое описание задачи"
            {...register('message', { maxLength: 300 })}
            className={`input resize-none h-[80px] focus:ring-1 focus:ring-[#7AD9A0] rounded border-none w-full `}></textarea>
        </fieldset>
      </div>
      <div className="flex-stack flex-col xs:flex-row gap-2 items-start mb-2">
        <label
          htmlFor="file"
          onClick={handleButtonClick}
          className={`flex relative items-center cursor-pointer  hover:text-primary transition-colors gap-2 text-sm text-[#585A5F]`}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.5132 18.7633L11.4854 19.7354L19.7354 11.4854C21.8982 9.32257 21.8982 5.8012 19.7354 3.63832C17.5711 1.47407 14.0525 1.47407 11.8882 3.63832L2.95074 12.5758C1.166 14.3606 1.166 17.2632 2.95074 19.0479C3.84174 19.9389 5.01462 20.3872 6.18749 20.3872C7.36037 20.3872 8.53187 19.9403 9.42424 19.0479L17.6742 10.7979C18.3549 10.1173 18.7289 9.21257 18.7289 8.25007C18.7289 7.28757 18.3549 6.38282 17.6729 5.70082C16.3116 4.33957 13.937 4.33957 12.5757 5.70082L5.01324 13.2633L5.98537 14.2354L13.5479 6.67295C14.388 5.83282 15.8606 5.83282 16.7007 6.67295C17.1215 7.0937 17.3539 7.65332 17.3539 8.25007C17.3539 8.84682 17.1215 9.40645 16.7007 9.82582L8.45074 18.0758C7.20224 19.3243 5.17137 19.3243 3.92287 18.0758C2.67437 16.8273 2.67437 14.7964 3.92287 13.5479L12.8604 4.61045C14.4884 2.98245 17.1352 2.98245 18.7632 4.61045C20.3912 6.23845 20.3912 8.88532 18.7632 10.5133L10.5132 18.7633Z"
              fill="currentColor"
            />
          </svg>
          <span>{selectedFile ? selectedFile.name : 'Прикрепить файл'}</span>
          <input
            id="file"
            ref={fileInputRef}
            className="opacity-0 absolute h-0 w-0"
            type="file"
            {...register('file')}
            onChange={onAddFileAction}
            accept="image/*"
          />
        </label>

        <button
          type="submit"
          className="button hover:bg-[#2E3037] disabled:bg-gray-500 w-full xs:w-auto px-2 sm:px-7 text-sm sm:text-base"
          disabled={isSubmitting}>
          Оставить заявку
        </button>
      </div>
      <label className="flex items-center text-[#585A5F] lg:text-white gap-2 cursor-pointer">
        <input type="checkbox" required className="form-checkbox  rounded-sm border border-[#D5D5D5] text-primary" />
        <span className="text-[12px] text-[#585A5F]">Я согласен с политикой конфиденциальности сайта</span>
      </label>
      <Toaster />
    </form>
  );
};

export default SaleForm;

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import CallbackForm from '../components/forms/CallbackForm'
export default function StartWork() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button type="button" onClick={openModal} className="button">
        начать работу
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-[473px] transform pt-[80px] pb-[60px] px-[50px] relative overflow-hidden bg-[#F4F3F4] p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-2xl lg:text-4xl  font-extrabold uppercase mb-1 text-center text-[#282E35]">
                    Оставить заявку
                  </Dialog.Title>

                  <p className="text-[#848896] lg:text-[18px] lg:leading-[21px] text-center mt-2 mb-5">
                    Оставьте ваши контакты и мы <br></br> свяжемся с вами в ближайшее время
                  </p>

                  <CallbackForm />

                  <button type="button" className="absolute right-5 top-5 hover:text-primary transition-colors " onClick={closeModal}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 2L22 22M22 2L2 22" stroke="currentColor" strokeWidth="3" />
                    </svg>
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

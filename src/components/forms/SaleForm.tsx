import React from 'react';

const SaleForm = () => {
  return (
    <form>
      <fieldset className="flex flex-col w-full lg:flex-row items-center gap-4 mb-5">
        <input type="text" placeholder="Имя" className="input h-[52px] lg:h-[44px] rounded border-none w-full lg:w-auto xl:w-[350px]" />
        <input type="email" placeholder="Email" className="input h-[52px] lg:h-[44px] rounded border-none w-full lg:w-auto  xl:w-[350px]" />
        <button className="button lg:bg-[#2E3037] py-4 lg:py-2.5 lg:px-4 w-full lg:w-auto">Оставить заявку</button>
      </fieldset>
      <label className="flex items-center text-[#585A5F] lg:text-white gap-2 cursor-pointer">
        <input type="checkbox" className="form-checkbox rounded border-none text-primary" />
        <span className="text-[12px] sm:text-base">Я согласен с политикой конфиденциальности сайта</span>
      </label>
    </form>
  );
};

export default SaleForm;

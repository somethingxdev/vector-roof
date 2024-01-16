import React from 'react';

const SaleForm = () => {
  return (
    <form>
      <div className="flex flex-col md:flex-row items-end gap-5 mb-3">
        <fieldset className=" w-full items-center h-full gap-3 max-w-[750px]">
          <div className="flex items-center gap-3 mb-5">
            <input type="text" placeholder="Имя" className="input h-[52px] lg:h-[44px] rounded border-none w-full" />
            <input type="email" placeholder="Email" className="input h-[52px] lg:h-[44px] rounded border-none w-full" />
          </div>
          <textarea placeholder="Краткое описание задачи" className="input  h-[78px]  rounded border-none w-full"></textarea>
        </fieldset>
        <button className="button hover:bg-[#2E3037] -translate-y-1 py-4 lg:py-2.5 lg:px-4 w-full lg:w-auto">Оставить заявку</button>
      </div>

      <label className="flex items-center text-[#585A5F] lg:text-white gap-2 cursor-pointer">
        <input type="checkbox" className="form-checkbox rounded border-none text-primary" />
        <span className="text-[12px] text-[#585A5F] sm:text-base">Я согласен с политикой конфиденциальности сайта</span>
      </label>
    </form>
  );
};

export default SaleForm;

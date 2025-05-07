import React from 'react';
import indianImg from '../../../assets/img/indian.webp';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Acoridon = () => {
  return (
    <div className="bg-primary3">
      <section className="container px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] sm:gap-[50px] pt-[40px] sm:pt-[50px]">
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="mb-[17px] hover:no-underline"
              >
                <AccordionTrigger className="text-white border-0 font-Roboto_Condensed text-[24px] sm:text-[36px] font-bold leading-[28px] sm:leading-[40px]">
                  What is film production?
                </AccordionTrigger>
                <AccordionContent className="text-primary4 border-0 text-base sm:text-lg font-normal leading-[20px] sm:leading-[24px] font-Inter">
                  Lorem ipsum dolor sit amet consectetur. Ipsum lectus
                  sollicitudin faucibus sodales proin neque tincidunt venenatis
                  vitae maecenas pulvinar sodales porta. Aliquet tincidunt
                  element risus risus cras ornare. Aenean vestibul platea
                  viverra nibh adipiscing porttitor morbi arcu sed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="mb-[17px]">
                <AccordionTrigger className="text-white border-0 font-Roboto_Condensed text-[24px] sm:text-[36px] font-bold leading-[28px] sm:leading-[40px]">
                  Who is involved in film production?
                </AccordionTrigger>
                <AccordionContent className="text-primary4 text-base sm:text-lg font-normal leading-[20px] sm:leading-[24px] font-Inter">
                  Lorem ipsum dolor sit amet consectetur. Ipsum lectus
                  sollicitudin faucibus sodales proin neque tincidunt venenatis
                  vitae maecenas pulvinar sodales porta. Aliquet tincidunt
                  element risus risus cras ornare. Aenean vestibulum platea
                  viverra nibh adipiscing porttitor morbi arcu sed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="mb-[17px]">
                <AccordionTrigger className="text-white border-0 font-Roboto_Condensed text-[24px] sm:text-[36px] font-bold leading-[28px] sm:leading-[40px]">
                  How long does it take to produce a movie?
                </AccordionTrigger>
                <AccordionContent className="text-primary4 text-base sm:text-lg font-normal leading-[20px] sm:leading-[24px] font-Inter">
                  Lorem ipsum dolor sit amet consectetur. Ipsum lectus
                  sollicitudin faucibus sodales proin neque tincidunt venenatis
                  vitae maecenas pulvinar sodales porta. Aliquet tincidunt
                  element risus risus cras ornare. Aenean vestibulum platea
                  viverra nibh adipiscing porttitor morbi arcu sed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="mb-[17px]">
                <AccordionTrigger className="text-white border-0 font-Roboto_Condensed text-[24px] sm:text-[36px] font-bold leading-[28px] sm:leading-[40px]">
                  What is pre-production?
                </AccordionTrigger>
                <AccordionContent className="text-primary4 text-base sm:text-lg font-normal leading-[20px] sm:leading-[24px] font-Inter">
                  Lorem ipsum dolor sit amet consectetur. Ipsum lectus
                  sollicitudin faucibus sodales proin neque tincidunt venenatis
                  vitae maecenas pulvinar sodales porta. Aliquet tincidunt
                  element risus risus cras ornare. Aenean vestibulum platea
                  viverra nibh adipiscing porttitor morbi arcu sed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="mb-[17px]">
                <AccordionTrigger className="text-white border-0 font-Roboto_Condensed text-[24px] sm:text-[36px] font-bold leading-[28px] sm:leading-[40px]">
                  What is production?
                </AccordionTrigger>
                <AccordionContent className="text-primary4 text-base sm:text-lg font-normal leading-[20px] sm:leading-[24px] font-Inter">
                  Lorem ipsum dolor sit amet consectetur. Ipsum lectus
                  sollicitudin faucibus sodales proin neque tincidunt venenatis
                  vitae maecenas pulvinar sodales porta. Aliquet tincidunt
                  element risus risus cras ornare. Aenean vestibulum platea
                  viverra nibh adipiscing porttitor morbi arcu sed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-full  sm:w-[470px] h-[472px] sm:h-[472px] rounded-[5px] overflow-hidden">
            <img
              src={indianImg}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Acoridon;


import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "Quanto tempo leva para produzir meu MeuMini?",
      answer: "O prazo de produção é de 7 a 15 dias úteis após confirmação do pagamento."
    },
    {
      question: "Posso personalizar a roupa e acessórios?",
      answer: "Sim! Na etapa de personalização você pode detalhar todas as preferências."
    },
    {
      question: "Qual material é usado para criar os MeuMinis?",
      answer: "Utilizamos impressão 3D em resina premium para alta durabilidade e riqueza de detalhes."
    },
    {
      question: "Vocês enviam para todo o Brasil?",
      answer: "Sim, realizamos envios para todas as regiões do Brasil com total segurança."
    },
    {
      question: "Posso pedir mais de um MeuMini no mesmo pedido?",
      answer: "Claro! E quanto mais unidades você pedir, maior o desconto aplicado automaticamente."
    }
  ];

  return (
    <section className="py-16 bg-meumini-dark" id="depoimentos">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-meumini-light-gray">Tire suas dúvidas sobre o MeuMini</p>
        </div>
        
        <Accordion type="single" collapsible className="bg-gray-800 rounded-xl overflow-hidden">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-b border-gray-700 last:border-0"
            >
              <AccordionTrigger className="px-6 py-4 text-white hover:text-meumini-orange hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-meumini-light-gray">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-10 text-center">
          <p className="text-meumini-light-gray mb-6">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <a 
            href="https://wa.me/5511987918168?text=Eu%20tenho%20uma%20dúvida%20sobre%20o%20MeuMini" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-gradient inline-block px-8 py-3 rounded-md font-medium text-white hover:scale-105 transition-transform"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

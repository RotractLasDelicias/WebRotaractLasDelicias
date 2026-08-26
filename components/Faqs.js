'use client';

import { ChevronDown, HelpCircle, Users, Calendar, Award, ShieldCheck } from "lucide-react";
import { Accordion, AccordionItem } from "@heroui/accordion";

const items = [
  {
    title: "¿Qué es Rotaract?",
    content: "Rotaract es una organización internacional de jóvenes dedicados al servicio comunitario, desarrollo de liderazgo y crecimiento personal a través de proyectos de impacto social, profesional y de amistad.",
    icon: <HelpCircle className="w-5 h-5 text-[#d41367]" />,
  },
  {
    title: "¿Cuáles son los requisitos y el rango de edad para unirse?",
    content: "Está dirigido principalmente a jóvenes a partir de los 18 años con ganas de servir a su comunidad y desarrollar sus habilidades de liderazgo. No necesitas experiencia previa, solo el compromiso de involucrarte.",
    icon: <Users className="w-5 h-5 text-[#d41367]" />,
  },
  {
    title: "¿Debo pagar alguna membresía?",
    content: "Al ingresar formalmente como socio del club se maneja una cuota de membresía simbólica destinada exclusivamente a gastos operativos internos y sostenibilidad de proyectos locales.",
    icon: <Award className="w-5 h-5 text-[#d41367]" />,
  },
  {
    title: "¿Con qué frecuencia se realizan las reuniones o proyectos?",
    content: "Nos reunimos de manera ordinaria de forma quincenal o semanal (según la agenda del club) y planificamos actividades o proyectos comunitarios a lo largo de cada mes.",
    icon: <Calendar className="w-5 h-5 text-[#d41367]" />,
  },
  {
    title: "¿Cómo puedo empezar mi proceso de reclutamiento o visita?",
    content: "Puedes contactarnos a través de nuestro formulario de contacto o redes sociales para asistir a nuestras reuniones en calidad de invitado y conocer de cerca al equipo antes de formalizar tu ingreso.",
    icon: <ShieldCheck className="w-5 h-5 text-[#d41367]" />,
  },
];

export function Faqs() {
  return (
    <Accordion 
      showDivider={false}
      className="w-full max-w-5xl mx-auto flex flex-col gap-4"
      indicator={
        <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300" />
      }
      itemClasses={{
        // 2. Quitamos cualquier border-b o divisor e imponemos nuestro borde gris claro
        base: "border border-gray-100 divide-y-0 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all px-4 sm:px-6 py-2 border-b-0 group-[.is-splitted]:border-b-0",
        title: "text-base sm:text-lg md:text-xl font-semibold text-gray-900",
        content: "text-sm sm:text-base text-gray-600 leading-relaxed pb-4 pt-1",
        indicator: "-rotate-90 data-[open=true]:rotate-0 transition-transform duration-300",
      }}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          aria-label={item.title}
          title={
            <div className="flex items-center gap-3 py-1">
              {item.icon && (
                <span className="shrink-0 p-1.5 rounded-lg bg-[#d41367]/10">
                  {item.icon}
                </span>
              )}
              <span>{item.title}</span>
            </div>
          }
        >
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Escritura de guión.js</li>
        <li>Edición de video</li>
        <li>Comprensión narrativa visual</li>
        <li>Habilidades de diseño gráfico</li>
        <li>Colaboración y trabajo en equipo</li>
        <li>Administración</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Comunicación Audiovisual en Toulouse Lautrec</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Adobe Affter Effects</li>
        <li>Adobe Premiere Pro</li>
        <li>Adobe Photoshop</li>
        <li>Adobe Illustrator</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Acerca de mí</h2>
          <p className="text-base lg:text-lg">
            Soy Viviana Estrada, estudiante de Comunicación Audiovisual. Mi
            fascinación por la cinematografía me impulsa a contar historias
            visualmente impactantes. A través de la combinación de imágenes,
            sonido y narrativa, busco transmitir emociones y conectar con la
            audiencia. Cada proyecto es una oportunidad para aprender y crecer,
            explorando la magia de la comunicación visual en este emocionante
            viaje creativo.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educación{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificaciones{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

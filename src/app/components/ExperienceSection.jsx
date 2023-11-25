import React from "react";

const ExperienceSection = () => {
  return (
    <section className="text-white" id="experience">
      <div className="py-16 px-4 xl:px-16">
        <h2 className="text-4xl font-bold mb-8">Experiencia Profesional</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full mr-4"></div>
            <div>
              <h3 className="text-xl font-semibold">Nombre de la Empresa</h3>
              <p className="text-gray-400">
                Cargo - Fecha de inicio/Fecha de finalización
              </p>
              <p className="text-base">
                Breve descripción de tus responsabilidades y logros.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-16 h-16 bg-red-500 rounded-full mr-4"></div>
            <div>
              <h3 className="text-xl font-semibold">Nombre de la Empresa</h3>
              <p className="text-gray-400">
                Cargo - Fecha de inicio/Fecha de finalización
              </p>
              <p className="text-base">
                Breve descripción de tus responsabilidades y logros.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-16 h-16 bg-amber-500 rounded-full mr-4"></div>
            <div>
              <h3 className="text-xl font-semibold">Nombre de la Empresa</h3>
              <p className="text-gray-400">
                Cargo - Fecha de inicio/Fecha de finalización
              </p>
              <p className="text-base">
                Breve descripción de tus responsabilidades y logros.
              </p>
            </div>
          </div>
          {/* Agrega más bloques de experiencia según sea necesario */}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

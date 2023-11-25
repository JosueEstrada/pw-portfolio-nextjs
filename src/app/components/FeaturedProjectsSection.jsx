import Image from "next/image";
import React from "react";

const FeaturedProjectsSection = () => {
  return (
    <section className="text-white" id="projects">
      <div className="py-16 px-4 xl:px-16">
        <h2 className="text-4xl font-bold mb-8">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mb-8">
            <Image
              src="/images/projects/1.png"
              width={400}
              height={300}
              alt=""
            />
            <h3 className="text-xl font-semibold mt-4">Nombre del Proyecto</h3>
            <p className="text-gray-400">Breve descripción del proyecto.</p>
          </div>
          {/* Agrega más bloques de proyectos según sea necesario */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;

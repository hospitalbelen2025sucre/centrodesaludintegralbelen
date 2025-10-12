import ServiceCard from "@/components/service-card";
import MedicalRegistrationForm from "@/components/medical-registration-form";
import MedicalCenterLogo from "@/components/medical-center-logo"; // Importa el componente del logo

const Navigation = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-primary">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <p className="text-lg font-bold text-white">
              CENTRO DE SALUD INTEGRAL {"BELEN"}
            </p>
          </div>
          <div className="hidden items-center space-x-8 sm:flex">
            <a
              href="#estadistica"
              className="text-sm font-medium text-white transition-colors hover:text-white/80"
            >
              ESTADISTICA
            </a>
            <a
              href="#servicios"
              className="text-sm font-medium text-white transition-colors hover:text-white/80"
            >
              SERVICIOS
            </a>
            <a
              href="#reclamos"
              className="text-sm font-medium text-white transition-colors hover:text-white/80"
            >
              RECLAMOS Y SUGERENCIAS
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default function HomePage() {
  const services = [
    {
      title: "ODONTOLOGIA",
      morning: "07:00 a 13:00",
      afternoon: "13:00 a 19:00",
      image: "/generated_images/tooth.png",
      doctor: "Dra. Sandra Espinoza",
    },
    {
      title: "VACUNAS PAI",
      morning: "07:00 a 13:00",
      afternoon: "13:00 a 19:00",
      image: "/generated_images/syringe.png",
      doctor: "Lic. Hortencia Zeballos",
    },
    {
      title: "URGENCIAS",
      morning: "ATENCIÓN LAS 24 HORAS",
      afternoon: null, // No hay turno de tarde
      image: "/generated_images/ambulance.png",
      doctor: "Dr. Carlos López",
    },
    {
      title: "CONSULTA EXTERNA",
      morning: "07:00 a 13:00",
      afternoon: "13:00 a 19:00",
      image: "/generated_images/stethoscope.png",
      doctor: "Dra. María Flores",
    },
    {
      title: "LABORATORIO",
      morning: "07:00 a 13:00",
      afternoon: "13:00 a 19:00",
      image: "/generated_images/test-tube.png",
      doctor: "Bioq. Pedro Gutiérrez",
    },
    {
      title: "GINECOLOGIA",
      morning: "08:00 a 11:00",
      afternoon: "13:00 a 15:00",
      image: "/generated_images/pregnant.png",
      doctor: "Dra. Laura Medina",
    },
    {
      title: "PEDIATRIA",
      morning: "08:00 a 11:00",
      afternoon: "14:00 a 17:00",
      image: "/generated_images/baby.png",
      doctor: "Dr. Pablo Suárez",
    },
    {
      title: "ECOGRAFIA",
      morning: "07:00 a 13:00",
      afternoon: "13:00 a 19:00",
      image: "/generated_images/ultrasound.png",
      doctor: "Dra. Silvia Vargas",
    },
  ];

  return (
    <main
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at top left, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 20%), radial-gradient(circle at bottom right, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 20%), linear-gradient(to bottom right, #dc2626, #991b1b)",
      }}
    >
      <Navigation />
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 overflow-hidden pt-24 pb-12 md:pt-20 lg:grid-cols-3 lg:pb-0">
        <div className="flex flex-col items-center px-4 py-10 sm:items-start md:px-8 md:py-0 lg:col-span-2">
          {/* Logo del Centro Médico */}
          <MedicalCenterLogo className="h-32 w-32 md:h-40 md:w-40" />
          <h1 className="mt-6 text-center text-4xl font-extrabold tracking-tight text-white sm:text-left sm:text-5xl lg:text-6xl">
            CENTRO DE SALUD INTEGRAL {"BELEN"}
          </h1>
          <p className="mt-6 max-w-2xl text-center text-lg text-white/90 sm:text-left md:text-xl">
            Atención las 24 horas
          </p>
        </div>
        <div className="relative flex w-full items-center justify-center px-4 md:justify-end">
          <MedicalRegistrationForm />
        </div>
      </div>
      {/* Sección de Estadística y Ubicación */}
      <section id="estadistica" className="mx-auto max-w-6xl py-16 px-4 md:px-0">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Estadística y Ubicación</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-lg bg-white/90 p-6 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-primary mb-2">1,250</h3>
            <p className="text-gray-700">Pacientes Atendidos/Mes</p>
          </div>
          <div className="rounded-lg bg-white/90 p-6 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-primary mb-2">98%</h3>
            <p className="text-gray-700">Satisfacción del Paciente</p>
          </div>
          <div className="rounded-lg bg-white/90 p-6 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-primary mb-2">15</h3>
            <p className="text-gray-700">Barrios de Cobertura</p>
          </div>
        </div>

        <div className="rounded-xl bg-white/90 p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-primary mb-4 text-center">
            Ubicación del Centro de Salud y Barrios de Cobertura
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-primary mb-3">Barrios Atendidos:</h4>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <span>Barrio Belén (Centro Principal)</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>Barrio San Antonio</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>Barrio La Merced</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>Barrio San Roque</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>Barrio El Carmen</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>Barrio San Pedro</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>Barrio Villa Fátima</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>Barrio Miraflores</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>Barrio Sopocachi</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>Barrio Rosario</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>Barrio San Sebastián</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>Barrio Santa Bárbara</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>Barrio Tembladerani</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>Barrio Villa Victoria</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span>Barrio Alto San Pedro</span>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-primary/10 p-3">
                <p className="text-xs text-gray-600">
                  <strong>Leyenda:</strong>
                  <br />
                  🔴 Centro de Salud Principal
                  <br />
                  🔵 Barrios de Cobertura
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="h-96 w-full overflow-hidden rounded-lg shadow-md lg:h-[500px]">
                {/* Reemplaza este src con tu URL de mapa real */}
                <iframe
                  title="Mapa de Ubicación Centro de Salud Belén y Barrios"
                  width="100%"
                  height="100%"
                  style={{ border: 0, width: "100%", height: "100%" }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.220140220977!2d-65.3013239241951!3d-19.04354878218155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9327f29a00000001%3A0xf6d6c97a29a0f00!2sCentro%20de%20Salud%20Bel%C3%A9n!5e0!3m2!1ses!2sbo!4v1701389476722!5m2!1ses!2sbo"
                ></iframe>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-600">
                  <strong>Dirección:</strong> Av. Belén, Zona Belén, La Paz -
                  Bolivia
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  El mapa muestra nuestra ubicación central y los barrios que
                  atendemos en un radio de cobertura
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-primary/5 p-4">
              <h4 className="mb-2 font-semibold text-primary">
                Horarios de Atención
              </h4>
              <ul className="space-y-1 text-sm">
                <li>• Emergencias: 24 horas</li>
                <li>• Consulta Externa: 07:00 - 19:00</li>
                <li>• Especialidades: 08:00 - 17:00</li>
              </ul>
            </div>
            <div className="rounded-lg bg-primary/5 p-4">
              <h4 className="mb-2 font-semibold text-primary">Contacto</h4>
              <ul className="space-y-1 text-sm">
                <li>• Teléfono: (591) 2-2345678</li>
                <li>• Emergencias: 911</li>
                <li>• WhatsApp: +591 70123456</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Sección de Servicios */}
      <section id="servicios" className="mx-auto my-8 max-w-5xl px-4 md:px-0">
        <h2
          className="mb-6 text-center text-2xl font-bold tracking-wide text-white md:text-4xl"
          style={{ textTransform: "uppercase" }}
        >
          ATENCIÓN DE SERVICIOS DE LUNES A VIERNES
        </h2>
        <div className="grid grid-cols-2 gap-4 rounded-xl bg-[#ededed] px-2 py-10 shadow-inner md:grid-cols-4 md:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index} // Importante para listas en React
              title={service.title}
              morningHours={service.morning}
              afternoonHours={service.afternoon}
              imageUrl={service.image}
              doctor={service.doctor}
            />
          ))}
        </div>
      </section>
      {/* Sección de Reclamos y Sugerencias */}
      <section id="reclamos" className="mx-auto my-8 max-w-3xl px-4 md:px-0">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Reclamos y Sugerencias
        </h2>
        <div className="rounded-lg bg-white/80 p-6 shadow-md">
          <p className="mb-4 text-gray-800">
            ¿Tienes algún reclamo o sugerencia? Por favor déjanos tu
            comentario:
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="nombreReclamo" className="sr-only">
                Nombre
              </label>
              <input
                type="text"
                id="nombreReclamo" // ID único para este formulario
                name="nombreReclamo"
                placeholder="Nombre (opcional)"
                className="w-full rounded border border-primary/20 bg-white px-4 py-2 text-gray-900 shadow-sm placeholder:text-gray-400"
              />
            </div>
            <div>
              <label htmlFor="sugerenciaText" className="sr-only">
                Sugerencia
              </label>
              <textarea
                id="sugerenciaText" // ID único para este formulario
                name="sugerenciaText"
                required
                placeholder="¿Cuál es tu reclamo o sugerencia?"
                rows={4}
                className="w-full rounded border border-primary/20 bg-white px-4 py-2 text-gray-900 shadow-sm placeholder:text-gray-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded bg-primary py-2 font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Enviar
            </button>
          </form>

          <div className="mt-8">
            <h3 className="mb-2 text-lg font-semibold text-primary">
              Ubicación del establecimiento
            </h3>
            <div className="h-72 w-full overflow-hidden rounded-lg shadow-md">
              {/* Reemplaza este src con tu URL de mapa real */}
              <iframe
                title="Ubicación Centro de Salud Belén"
                width="100%"
                height="100%"
                style={{ border: 0, width: "100%", height: "100%" }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.220140220977!2d-65.3013239241951!3d-19.04354878218155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9327f29a00000001%3A0xf6d6c97a29a0f00!2sCentro%20de%20Salud%20Bel%C3%A9n!5e0!3m2!1ses!2sbo!4v1701389476722!5m2!1ses!2sbo"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
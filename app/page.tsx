const RESEARCH_FORM_URL =
  "https://forms.gle/t7cmvioq3HJsrvuv9";

const capabilities = [
  {
    title: "Observación",
    description: "Satélites, drones, sensores y productores.",
    icon: "observation",
  },
  {
    title: "Diagnóstico",
    description:
      "Agentes especializados interpretan la información del territorio.",
    icon: "diagnosis",
  },
  {
    title: "Planeamiento",
    description:
      "Recomendaciones accionables para tomar mejores decisiones.",
    icon: "planning",
  },
];

function CapabilityIcon({ name }: { name: string }) {
  if (name === "diagnosis") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 80 80"
        className="size-14 text-sprout sm:size-10 lg:size-12"
        fill="none"
      >
        <path
          d="M20 36c0-9.4 7.6-17 17-17s17 7.6 17 17-7.6 17-17 17-17-7.6-17-17Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="m51 50 10 10"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M29 36h16M37 28v16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M14 61h18M14 19h8M58 19h8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeOpacity="0.45"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (name === "planning") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 80 80"
        className="size-14 text-sprout sm:size-10 lg:size-12"
        fill="none"
      >
        <path
          d="M17 58V18h46v40H17Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M25 48c8-17 19-17 30-5M25 29h30M25 38h12"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M48 22v-8M56 22v-8M24 66h32"
          stroke="currentColor"
          strokeLinecap="round"
          strokeOpacity="0.45"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 80 80"
      className="size-14 text-sprout sm:size-10 lg:size-12"
      fill="none"
    >
      <path
        d="M40 14v52M14 40h52"
        stroke="currentColor"
        strokeLinecap="round"
        strokeOpacity="0.45"
        strokeWidth="2"
      />
      <path
        d="M23 29c10-12 24-12 34 0-10 12-24 12-34 0ZM19 51c8-9 18-9 26 0-8 9-18 9-26 0Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M40 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM32 54a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background bg-[url('/brand/bg.png')] bg-cover bg-center text-foreground">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.74)_0%,rgba(0,0,0,0.5)_46%,rgba(0,0,0,0.14)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(0,0,0,0),rgba(0,0,0,0.34)_68%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.62))]" />
      <div className="relative min-h-screen">
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 sm:h-dvh sm:min-h-0 sm:px-8 lg:px-12">
          <header className="flex min-h-[23svh] items-end justify-center pb-4 sm:h-[10dvh] sm:min-h-0 sm:items-center sm:pb-0 lg:h-[15dvh] lg:items-end lg:pb-2">
            <picture className="flex items-center justify-center">
              <source
                media="(min-width: 640px)"
                srcSet="/brand/logo_web_mobile.png"
              />
              <img
                src="/brand/logo_web_mobile.png"
                alt="Cernunnos"
                width="416"
                height="153"
                fetchPriority="high"
                className="h-auto w-72 object-contain sm:w-40 lg:w-60"
              />
            </picture>
          </header>

          <section className="flex flex-1 flex-col sm:h-[80dvh] sm:flex-none lg:h-[75dvh]">
            <div className="flex min-h-[77svh] w-full flex-col items-center text-center sm:h-[50dvh] sm:min-h-0 sm:justify-center lg:h-[45dvh] lg:justify-start lg:pt-3">
              <div className="flex flex-col items-center">
                <p className="mb-6 inline-flex rounded-[1px] border border-sprout/30 bg-sprout/10 px-3 py-2 text-xs font-semibold tracking-[0.18em] text-sprout uppercase sm:mb-3 sm:px-2.5 sm:py-1.5 sm:text-[0.625rem] lg:mb-8">
                  Inteligencia agropecuaria
                </p>
                <h1 className="font-canela max-w-sm text-[3.78rem] leading-[0.98] font-bold tracking-normal text-white sm:max-w-3xl sm:text-5xl lg:max-w-none lg:text-[4rem] lg:whitespace-nowrap">
                  <span className="block sm:inline">Conectando</span>{" "}
                  <span className="block whitespace-nowrap sm:inline">
                    el territorio
                  </span>{" "}
                  <span className="block sm:inline">argentino</span>
                </h1>
                <p className="mt-6 max-w-sm text-[1.36rem] leading-8 text-white/78 sm:mt-4 sm:max-w-xl sm:text-base sm:leading-7 lg:mt-8 lg:text-[1.2rem] lg:leading-8">
                  Estamos construyendo una nueva generación de herramientas
                  para observación, diagnóstico y planificación agropecuaria.
                </p>
              </div>
              <div className="flex w-full flex-1 flex-col items-center sm:mt-5 sm:w-auto sm:flex-none lg:mt-6">
                <a
                  href={RESEARCH_FORM_URL}
                  className="mt-auto inline-flex min-h-14 w-full items-center justify-center rounded-[1px] border border-sprout bg-sprout px-6 py-3 text-lg font-bold tracking-[0.02em] text-background transition-colors hover:border-secondary hover:bg-secondary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sprout sm:mt-0 sm:min-h-10 sm:w-auto sm:px-5 sm:py-2 sm:text-sm sm:font-semibold sm:tracking-[0.04em]"
                >
                  Participar de la investigación
                </a>
                <a
                  href="#capacidades"
                  aria-label="Ver capacidades"
                  className="mt-auto mb-4 inline-flex size-8 items-center justify-center text-white transition-colors hover:text-sprout focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sprout sm:hidden"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-7"
                    fill="none"
                  >
                    <path
                      d="m5 9 7 7 7-7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div
              id="capacidades"
              className="mt-8 grid scroll-mt-5 gap-4 pb-10 sm:mt-0 sm:h-[30dvh] sm:grid-cols-3 sm:gap-3 sm:pb-4"
            >
              {capabilities.map((capability) => (
                <article
                  key={capability.title}
                  className="flex min-h-48 flex-col rounded-[1px] border border-white/14 bg-black/18 p-5 sm:min-h-0 sm:items-center sm:justify-center sm:p-4 sm:text-center"
                >
                  <CapabilityIcon name={capability.icon} />
                  <h2 className="font-canela mt-5 text-2xl leading-none font-bold text-white sm:mt-3 sm:text-lg">
                    {capability.title}
                  </h2>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/68 sm:mt-2 sm:text-[0.8125rem] sm:leading-5 lg:text-[0.975rem] lg:leading-6">
                    {capability.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <footer className="flex flex-col items-center gap-3 border-t border-white/12 py-6 text-center text-sm text-white/62 sm:grid sm:h-[10dvh] sm:grid-cols-3 sm:py-0 sm:text-xs">
            <p className="inline-flex items-center gap-2 sm:justify-self-start">
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-[#AB74F7] shadow-[0_0_10px_2px_rgba(171,116,247,0.55)]"
              />
              En proceso de desarrollo
            </p>
            <a
              href="https://estudioblanco.org"
              className="justify-self-center transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sprout"
            >
              © Cernunnos AI · Estudio Blanco
            </a>
            <p className="sm:justify-self-end">
              General Madariaga - Buenos Aires - Argentina
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}

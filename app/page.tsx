import Image from "next/image";

const GOOGLE_FORM_URL_PLACEHOLDER =
  "https://docs.google.com/forms/d/e/GOOGLE_FORM_ID_PLACEHOLDER/viewform";

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
        className="size-20 text-sprout"
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
        className="size-20 text-sprout"
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
      className="size-20 text-sprout"
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
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 sm:px-8 lg:px-12">
          <header className="flex items-center justify-between py-5 sm:py-6">
            <Image
              src="/brand/isologo.png"
              alt="Cernunnos"
              width={241}
              height={60}
              priority
              className="h-12 w-auto sm:h-14"
            />
          </header>

          <section className="flex flex-1 flex-col justify-center py-16 sm:py-20 lg:py-24">
            <div className="max-w-4xl">
              <p className="mb-8 inline-flex rounded-[1px] border border-sprout/30 bg-sprout/10 px-3 py-2 text-xs font-semibold tracking-[0.18em] text-sprout uppercase">
                Agricultural Intelligence
              </p>
              <h1 className="font-canela max-w-4xl text-5xl leading-[0.98] font-bold tracking-normal text-white sm:text-6xl lg:text-7xl">
                Conecta el Territorio
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl sm:leading-9">
                Estamos construyendo una nueva generación de herramientas para
                observación, diagnóstico y planificación agropecuaria.
              </p>
              <a
                href={GOOGLE_FORM_URL_PLACEHOLDER}
                className="mt-10 inline-flex min-h-14 items-center rounded-[1px] border border-sprout bg-sprout px-6 py-4 text-base font-semibold tracking-[0.04em] text-background transition-colors hover:border-secondary hover:bg-secondary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sprout"
              >
                Participar de la investigación
              </a>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-3 lg:mt-20">
              {capabilities.map((capability) => (
                <article
                  key={capability.title}
                  className="flex min-h-64 flex-col rounded-[1px] border border-white/14 bg-black/18 p-6 sm:p-7"
                >
                  <CapabilityIcon name={capability.icon} />
                  <h2 className="font-canela mt-8 text-2xl leading-none font-bold text-white">
                    {capability.title}
                  </h2>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/68">
                    {capability.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <footer className="flex flex-col gap-2 border-t border-white/12 py-6 text-sm text-white/62 sm:flex-row sm:items-center sm:justify-between">
            <p>Research in progress.</p>
            <p>© Cernunnos AI · Estudio Blanco</p>
          </footer>
        </div>
      </div>
    </main>
  );
}

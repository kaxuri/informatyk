import Image from "next/image";
export function AboutSection() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h2 className="text-3xl font-bold mb-6">O naszej platformie</h2>
          <p className="text-l mb-4">
            Nasza platforma została stworzona z myślą o uczniach i osobach przygotowujących się do egzaminów kwalifikacyjnych w zawodzie technik informatyk.
          </p>
          <p className="text-l">
            Oferujemy szeroki zakres pytań testowych, które pomogą Ci skutecznie przygotować się do egzaminów INF-03/EE.09 oraz INF-02/EE.08. Nasze testy są regularnie aktualizowane, aby odzwierciedlać najnowsze wymagania egzaminacyjne.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image src="/about.jpg" alt="O naszej platformie" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}


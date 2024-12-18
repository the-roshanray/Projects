import Head from "next/head";
import Image from "next/image";

export default function ValuablePartner() {
  return (
    <div>
      <Head>
        <title>Our Valuable Clients</title>
      </Head>
      <main>
        {/* Section: Our Valuable Clients */}
        <section className="bg-white py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Our Valuable Clients
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { src: "/cp.jpg", alt: "Build Home Infrastructure" },
                { src: "/build.jpg", alt: "InnovationM Technology Solutions" },
                { src: "/innova.jpg", alt: "Colgate-Palmolive" },
                { src: "/hero.jpg", alt: "Hero MotoCorp" },
                { src: "/feedex.jpg", alt: "FedEx" },
                { src: "/niit.jpg", alt: "NIIT" },
              ].map((client, index) => (
                <div key={index} className="group">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={150}
                    height={50}
                    className="mx-auto transform transition duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Are You an Employer? */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Are you an Employer?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Are you looking to hire an employee? Post your requirement on our
              portal and get a fast response on your job openings.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { count: "1.5 Lakhs+", label: "Registrations Per Month" },
                { count: "50 Lakhs+", label: "Active Job Seekers" },
                { count: "1000+", label: "Active Employers" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
                >
                  <h3 className="text-3xl font-semibold text-blue-600 mb-2 cursor-pointer">
                    {stat.count}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

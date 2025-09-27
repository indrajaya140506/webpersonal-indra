import React from 'react';
import DataImage from "./data";
import { listTools, listHobi, listPortofolio } from "./data";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";




function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
     {/* ===== HERO ===== */}
<section className="hero bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center pt-16 gap-10">
    {/* Text */}
    <div className="animate__animated animate__fadeInUp text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start gap-3 mb-6 bg-zinc-800 p-4 rounded-2xl shadow-md">
        <img src={DataImage.HeroImage} alt="Hero" className="w-10 rounded-md" />
        <q className="text-xl font-semibold text-white cursor-pointer transition-all duration-300 active:scale-90 active:text-pink-400">
          Success begins with the process.😇
        </q>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white relative cursor-pointer whitespace-nowrap animate-slideRightFast hover:scale-105 hover:tracking-wider hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] after:content-[''] after:absolute after:w-0 after:h-[3px] after:left-0 after:-bottom-2 after:bg-white after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
        Hello, I'm Indrajaya
      </h1>

      <p className="typing text-sm sm:text-base md:text-lg mb-6 text-zinc-300">
        Let me introduce myself, my real name is Komang Indrajaya Darmawiguna, usually called Indra. I was born in Karangasem on May 14, 2006. Want to know more about me? Let's take a look at this website.
      </p>

      <a
        href="#hoby"
        className="inline-block bg-violet-700 hover:bg-violet-600 px-6 py-3 rounded-2xl text-white transition"
      >
        Lihat Hoby <i className="ri-arrow-down-line ri-lg"></i>
      </a>

      {/* ===== Sosial Media ===== */}
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mt-6">
        <a href="https://github.com/indrajaya140506" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-violet-500 transition">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-violet-500 transition">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/indraaajdw" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-violet-500 transition">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@indrajayya" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-violet-500 transition">
          <SiTiktok />
        </a>
      </div>
    </div>

    {/* Image */}
    <div className="flex justify-center md:justify-end -mt-20 sm:-mt-28 md:-mt-40 lg:-mt-52">
      <img
        src={DataImage.HeroImage}
        alt="Hero"
        className="w-3/4 sm:w-2/3 md:w-full max-w-[500px] animate-floating"
        data-aos="fade-up"
      />
    </div>
  </div>
</section>


      {/* ===== TENTANG ===== */}
      <section id="tentang" className="mt-32 py-16 bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200">
        <div className="container mx-auto px-4 text-center">

          {/* ===== Timeline Pendidikan ===== */}
          <h2 className="text-3xl font-bold mb-12 text-zinc-900" data-aos="fade-down" data-aos-duration="1000">
            JOURNY
          </h2>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-violet-700"></div>
            {[ 
              { tahun: "2011 – 2012", sekolah: "TK Semara Giri Kusuma" },
              { tahun: "2012 – 2018", sekolah: "SD N 5 Muncan" },
              { tahun: "2018 – 2021", sekolah: "SMP N 1 Selat" },
              { tahun: "2021 – 2024", sekolah: "SMA N 1 Rendang-IPA" },
              { tahun: "2024 – Now", sekolah: "Undiksha-TRPL" },
            ].map((item, index) => (
              <div
                key={index}
                className="mb-12 w-full relative flex justify-between items-center"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="1000"
              >
                <div className={`w-1/2 pr-8 ${index % 2 !== 0 ? "invisible" : ""}`}>
                  {index % 2 === 0 && (
                    <div className="bg-white p-4 rounded-xl shadow-md border border-zinc-300 relative">
                      <h3 className="font-bold text-xl text-zinc-900">{item.tahun}</h3>
                      <p className="text-zinc-700 mt-1">{item.sekolah}</p>
                    </div>
                  )}
                </div>
                <div className="w-8 h-8 rounded-full bg-violet-700 border-4 border-white z-10"></div>
                <div className={`w-1/2 pl-8 ${index % 2 === 0 ? "invisible" : ""}`}>
                  {index % 2 !== 0 && (
                    <div className="bg-white p-4 rounded-xl shadow-md border border-zinc-300 relative">
                      <h3 className="font-bold text-xl text-zinc-900">{item.tahun}</h3>
                      <p className="text-zinc-700 mt-1">{item.sekolah}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ===== Tools ===== */}
          <h2
  className="text-3xl font-bold mt-20 mb-8 text-center"
  data-aos="fade-up"
>
  <span className="text-purple-500">Favorite</span>{" "}
  <span className="text-pink-500">Tools</span>
</h2>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {listTools.filter(tool => tool.nama !== "Lari" && tool.nama !== "Voly").map((tool, index) => (
              <div
                key={tool.id}
                className="flex items-center gap-3 p-4 rounded-xl shadow-lg transition transform hover:scale-105"
              style={{ background: "linear-gradient(135deg, rgba(30,30,30,0.9), rgba(60,60,60,0.9))" }}

                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <img
                  src={tool.gambar}
                  alt="tools"
                  className="w-14 p-2 rounded-md bg-white"
                />
                <div className="text-left text-white">
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="text-white/80">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* ===== PORTOFOLIO ===== */}
<section
  id="portofolio"
  className="mt-24 py-20 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 relative"
>
  <div className="container mx-auto px-6 text-center flex flex-col items-center">
    <h2
  className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide"
  data-aos="fade-down"
  data-aos-duration="1200"
>
  <span className="text-purple-500">My</span>{" "}
  <span className="text-pink-500">Portofolio</span>
</h2>

    <p
      className="text-zinc-300 mb-16 max-w-3xl text-lg md:text-xl leading-relaxed"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
     
    </p>

    <div className="flex flex-wrap justify-center gap-10">
      {listPortofolio.map((project, index) => (
        <div
          key={project.id}
          className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl transform transition duration-700 hover:scale-105 cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay={index * 200}
        >
          <img
            src={project.gambar}
            alt={project.nama}
            className="w-full h-full object-cover brightness-90 hover:brightness-75 transition duration-500"
          />
          {/* Overlay dengan animasi warna lembut */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/40 via-pink-500/20 to-transparent opacity-0 hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-center p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{project.nama}</h3>
            <p className="text-zinc-100 mb-4 text-sm md:text-base">{project.desk}</p>
            <div className="flex gap-4 mt-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white text-black flex justify-center items-center rounded-full hover:bg-violet-500 hover:text-white text-xl transition"
                >
                  🔗
                </a>
              )}
              {project.git && (
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white text-black flex justify-center items-center rounded-full hover:bg-violet-500 hover:text-white text-xl transition"
                >
                  🐱
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




    {/* ===== HOBY (SWIPER CAROUSEL) ===== */}
<section
  id="hoby"
  className="mt-32 py-16 bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 relative"
>
  <div className="relative container mx-auto px-4 text-center">
    <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
  Hoby
</h1>

    <p className="text-zinc-700 max-w-2xl mx-auto mb-12">
     Here are some documentations of my hobbies
    </p>

    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="!pb-8"
    >
      {listHobi.map((proyek) => (
        <SwiperSlide key={proyek.id}>
          <div className="bg-gradient-to-b from-zinc-100 via-zinc-200 to-zinc-100 p-4 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 cursor-pointer flex flex-col items-center border border-zinc-300">
            <div className="w-full h-64 overflow-hidden rounded-md mb-4 border-4 border-zinc-300">
              <img
                src={proyek.gambar}
                alt="Hoby"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-2 text-center">{proyek.nama}</h2>
            <p className="text-zinc-700 text-center">{proyek.desk}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  {/* Custom scrollbar untuk Swiper */}
  <style>
    {`
      .swiper-scrollbar {
        height: 14px !important;
        border-radius: 10px;
        background: rgba(0,0,0,0.1);
      }
      .swiper-scrollbar-drag {
        background: #7F00FF !important;
        border-radius: 12px;
        height: 14px !important;
      }
    `}
  </style>
</section>




   {/* ===== KONTAK ===== */}
<section
  id="kontak"
  className="mt-32 py-20 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 relative"
>
  <div className="container mx-auto px-4 text-center">
   <h1 className="text-4xl font-extrabold mb-4">
  <span className="text-purple-500">Contack</span>{" "}
  <span className="text-pink-500">me!</span>
</h1>

    <p className="text-zinc-300 mb-14 max-w-2xl mx-auto text-lg">
   Let's Connect with me via form, location, or WhatsApp
    </p>

    <div className="grid md:grid-cols-2 gap-10">
      {/* Formulir */}
<form
  action="https://formsubmit.co/ikomang856@gmail.com"
  method="POST"
  className="bg-gradient-to-b from-zinc-100 via-zinc-200 to-zinc-100 p-10 rounded-2xl shadow-xl flex flex-col gap-6"
>
  <div>
    <label className="font-semibold text-zinc-900">Full name</label>
    <input
      type="text"
      name="nama"
      placeholder="Masukan nama..."
      className="w-full p-3 mt-2 rounded-md border border-zinc-300 bg-white text-zinc-900 focus:ring-2 focus:ring-violet-500 outline-none transition"
      required
    />
  </div>
  <div>
    <label className="font-semibold text-zinc-900">Email</label>
    <input
      type="email"
      name="email"
      placeholder="Masukan email..."
      className="w-full p-3 mt-2 rounded-md border border-zinc-300 bg-white text-zinc-900 focus:ring-2 focus:ring-violet-500 outline-none transition"
      required
    />
  </div>
  <div>
    <label className="font-semibold text-zinc-900">Message</label>
    <textarea
      name="pesan"
      rows="6"
      placeholder="Pesan..."
      className="w-full p-3 mt-2 rounded-md border border-zinc-300 bg-white text-zinc-900 focus:ring-2 focus:ring-violet-500 outline-none transition"
      required
    ></textarea>
  </div>
  <button
    type="submit"
    className="w-full bg-violet-700 hover:bg-violet-600 py-3 rounded-xl text-white font-semibold transition shadow-md hover:shadow-lg"
  >
    Send message
  </button>
</form>

{/* Maps & WhatsApp */}
<div className="bg-gradient-to-b from-zinc-100 via-zinc-200 to-zinc-100 p-8 rounded-2xl shadow-xl flex flex-col gap-6 items-center">
  <h2 className="text-2xl font-bold text-zinc-900 mb-4">ADDRESS</h2>
  {/* Google Maps */}
  <div className="w-full h-64 rounded-xl overflow-hidden shadow-inner">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.123456789!2d115.500000!3d-8.400000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1abcdef123456%3A0xabcdef123456789!2sKarangasem%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1699999999999!5m2!1sen!2sid"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-xl"
    ></iframe>
  </div>

  {/* WhatsApp Icon */}
<div className="text-center mt-2">
  <a
    href="https://wa.me/6283142730107"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-500 text-5xl transition transform hover:scale-125"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-12 h-12"
    >
      <path d="M12 0C5.372 0 0 5.372 0 12c0 2.114.554 4.09 1.513 5.825L0 24l6.422-1.53A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.587 18.4c-1.61 0-3.155-.433-4.517-1.254l-.322-.188-3.806.908.992-3.704-.209-.336a9.268 9.268 0 01-1.375-4.967c0-5.106 4.152-9.258 9.258-9.258 2.476 0 4.802.967 6.545 2.721a9.21 9.21 0 012.708 6.536c0 5.105-4.152 9.257-9.257 9.257zm5.26-6.992c-.287-.144-1.7-.84-1.964-.937-.264-.097-.456-.144-.647.144-.191.287-.736.936-.9 1.128-.165.191-.33.216-.617.072-.287-.144-1.21-.447-2.306-1.423-.853-.761-1.428-1.7-1.597-1.987-.165-.287-.018-.442.126-.586.13-.129.288-.33.432-.495.144-.165.191-.287.287-.478.096-.191.048-.36-.024-.504-.072-.144-.648-1.56-.888-2.138-.234-.563-.474-.486-.647-.496l-.552-.01c-.191 0-.504.072-.768.36s-1.01.988-1.01 2.412 1.035 2.796 1.18 2.988c.144.191 2.035 3.1 4.932 4.35.689.297 1.225.474 1.643.607.69.218 1.317.187 1.812.114.552-.084 1.7-.694 1.941-1.364.241-.67.241-1.244.168-1.364-.072-.119-.263-.191-.552-.336z" />
    </svg>
  </a>
</div>

</div>

    </div>
  </div>
</section>
{/* ===== Footer ===== */}
<footer className="mt-12 py-6 bg-zinc-400 text-center text-zinc-900">
  <p>
    &copy; {new Date().getFullYear()} Copyright by Komang Indrajaya Darmawiguna
  </p>
</footer>



 </> ); } export default App;

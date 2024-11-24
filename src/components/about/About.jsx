import React from "react";
import "./about.css";
import about_2 from "../../assets/about-2.jpg";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_2} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>Tentang JSchool</h3>
        <h2>Bangun Masa Depanmu Bersama Kami</h2>
        <p>
        Mulailah perjalanan pendidikan yang transformatif dengan program pendidikan komprehensif dari sekolah kami. Kurikulum mutakhir kami dirancang untuk memberdayakan mahasiswa dengan pengetahuan, keterampilan, dan pengalaman yang dibutuhkan untuk unggul dalam bidang pendidikan yang dinamis.
        </p>
        <p>
        Dengan fokus pada inovasi, pembelajaran langsung, dan bimbingan pribadi, program kami mempersiapkan calon pendidik untuk memberikan dampak yang berarti di ruang kelas, sekolah, dan masyarakat.
        </p>
        <p>
        Baik Anda bercita-cita menjadi guru, administrator, konselor, atau pemimpin pendidikan, beragam program kami menawarkan jalur yang sempurna untuk mencapai tujuan Anda dan membuka potensi penuh Anda dalam membentuk masa depan pendidikan.
        </p>
      </div>
    </div>
  );
};

export default About;

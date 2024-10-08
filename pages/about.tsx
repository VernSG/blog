import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const About: NextPage = () => {
  return (
    <>
      <Page
        title="About"
        description="Ini adalah tentang Blog ini."
      >
        <Prose>
          <p>
          Haloo Sobat Mahasiswaa, Selamat datang di Blog UMKT! Kami adalah komunitas mahasiswa yang berkomitmen untuk berbagi informasi, pengalaman, dan inspirasi seputar dunia kampus dan kehidupan mahasiswa.
          Di sini, kamu akan menemukan berbagai artikel yang membahas topik-topik menarik, mulai dari tips akademik, cerita pengalaman pribadi, hingga panduan pengembangan diri yang relevan dengan kehidupan kampus.
          </p>
          <p>
          Blog UMKT ini didedikasikan untuk menjadi wadah bagi mahasiswa untuk saling berbagi pengetahuan, bertukar pikiran, dan memperluas wawasan. Kami percaya bahwa dengan berbagi, kita bisa belajar lebih banyak dan tumbuh bersama.
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;

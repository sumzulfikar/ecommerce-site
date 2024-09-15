import Image from "next/image";
import styles from "./page.module.css";
import Header from "./ui/Header";
// import Footer from "./ui/footer";
import NavBar from "./ui/NavBar";
import ProductCard from "./ui/ProductCard";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <NavBar></NavBar>
        <Header />

        <ProductCard />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

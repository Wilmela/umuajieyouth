import { useEffect } from "react";
import AOS from "aos";
import { Toaster } from "react-hot-toast";
import { Layout, Hero, About, Excos, Info, Contact } from "./components/";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Layout>
      <div className="w-full flex flex-col items-center">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              fontSize: "1rem",
            },
          }}
        />

        <Hero />
        <div className="px-4 md:px-8 lg:px-12 max-w-[1240px] flex flex-col items-center justify-center">
          <About />
          <Excos />
          <Info />
        </div>
        <div className="w-full bg-gray-300 flex flex-col items-center justify-center px-4 ">
          <Contact />
        </div>
      </div>
    </Layout>
  );
};

export default App;

import { Result } from "./components/Result";
import { Summary } from "./components/Summary";

function App() {
  return (
    <main className="w-full">
      <section className="md:flex md:w-full md:h-screen md:items-center md:justify-center relative">
        <div className="md:flex md:max-w-[628px] md:w-full md:shadow-3xl rounded-2xl">
          <Result />
          <Summary />
        </div>
      </section>
      <footer className="absolute bottom-[120px] w-full flex justify-center md:text-md text-xs">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV/hub"
          target="_blank"
          className="ml-1 text-[#3e52a3]"
        >
          Frontend Mentor
        </a>
        <p>. Coded by</p>
        <a
          href="https://github.com/pequenojoohn"
          className="ml-1 text-[#3e52a3]"
        >
          Jonathan Matos
        </a>
        .
      </footer>
    </main>
  );
}

export default App;

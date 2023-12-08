import TakeMeHome from "../components/TakeMeHome";
import PageWrapper from '../components/PageWrapper'

function FAQ() {
    return (
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">FAQ</h1>
        <TakeMeHome />
      </div>
    );
  }

  
  export default PageWrapper(FAQ);

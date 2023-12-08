import TakeMeHome from "../components/TakeMeHome";
import PageWrapper from '../components/PageWrapper'

function Error() {
    return (
      <div>
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Error</h2>
      <TakeMeHome />
      </div>
    );
  }

  
  export default PageWrapper(Error);
  ;

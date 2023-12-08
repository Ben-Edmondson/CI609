import Navigation from "../components/navigation";
import Weather from "../components/Weather";
import PageWrapper from '../components/PageWrapper'

function Home(){
    return(
        <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-900">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Mind: Mental Health Logger</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            This is the home page for the Mind-Application.
          </p>
        </div>
        <div className="mt-10">
          <Navigation />
          <Weather />
        </div>
      </div>
    );
}

export default Home;
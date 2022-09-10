import Cmpt from "./cmpt";
import Feature1 from "./feature1";
import Imgbig from "./imgbig";

const Home = () => {
  return (
    <>
      <div className="description">
        <div className="container">
          <div>
            <Cmpt />
          </div>
        </div>
        <Imgbig />
      </div>

      <Feature1 />
    </>
  );
};

export default Home;

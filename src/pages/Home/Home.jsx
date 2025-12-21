
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Banner from "./HomeComponents/Banner";


const Home = () => {

      // const {user} = use(AuthContext);
      // console.log(user)

      return (
            <div>
             <Banner/>   
            </div>
      );
};

export default Home;
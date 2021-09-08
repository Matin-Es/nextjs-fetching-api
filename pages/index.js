import axios from "axios";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return {
    props: { datas: data },
  };
};

const Home = ({ datas }) => {
  return (
    <div className={styles.container}>
      <div className="flex justify-center">
        {datas.map((data) => (
          <div>
            <h3>{data.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

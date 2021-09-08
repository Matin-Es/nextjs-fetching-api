import axios from "axios";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos",
    { params: { _limit: 10 } }
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
            <h3>{data.title}</h3>
            <div>
              <Image src={data.thumbnailUrl} width={200} height={200} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

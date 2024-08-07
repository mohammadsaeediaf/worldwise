import CityItem from "./CityItem";
import styles from "./CityList.module.css";

function CityList({ cities, isLoading }) {
  return <ul className={styles.cityList}></ul>;
}

export default CityList;

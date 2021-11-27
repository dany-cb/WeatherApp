import SearchBar from "./SearchBar";
import DateTime from "./DateTime";

function HomeScreen() {
  return (
    <div className="home">
      <SearchBar />
      <svg
        className="bg__wave"
        viewBox="0 0 1080 1920"
        xmlSpace="preserve"
        preserveAspectRatio="none"
      >
        <path
          d="M-3944-618v989.4c225.2 156.1 882.3 172.8 1204.2 0s576.9-237.9 1021 0 964 0 964 0C161 116 447.3 476 962.2 371.4c622.3-126.4 976.8 34 976.8 34s474.4 155.3 933.8 0c443.2-149.8 889.3-78.1 1116.7.9 146 50.7 762.5 205.8 1165.6-52.1l-.2-972.3"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#fff"
        />
      </svg>
      <DateTime />
    </div>
  );
}

export default HomeScreen;

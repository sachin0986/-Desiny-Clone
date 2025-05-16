import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import NewDisney from "./NewDesiny";
import Originals from "./Originals";
import Recommends from "./Recomends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../Database/firebase";
import { setMovies } from "../features/movies/movieSlice";
import { selectUserName } from "../features/users/userSlice";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    const unsubscribe = db.collection("movies").onSnapshot((snapshot) => {
      const recommends = [];
      const newDisneys = [];
      const originals = [];
      const trending = [];
  
      snapshot.docs.forEach((doc) => {
        const data = { id: doc.id, ...doc.data() };
  
        switch (doc.data().type) {
          case "recommend":
            recommends.push(data);
            break;
          case "new":
            newDisneys.push(data);
            break;
          case "original":
            originals.push(data);
            break;
          case "trending":
            trending.push(data);
            break;
        }
      });
  
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  
    return () => unsubscribe(); // ✅ Cleanup listener on unmount
  }, [userName]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
"use client";

import { Box, Container, Fab, Fade, Stack } from "@mui/material";
import HouseCard from "./components/houseCard";
import { Fragment, useEffect, useState } from "react";
import styles from "./houses.module.css";
import useHouses from "@/hooks/houses";
import Header from "./components/header";
import { useHeaderHeight } from "./hooks/useHeaderHeight";
import Loader from "@/components/loader";
import NavigationIcon from "@mui/icons-material/Navigation";
import { scrollToTop } from "@/utils";

export const HousesContainer = () => {
  const { headerHeight, headerRef } = useHeaderHeight();
  const { houses, fetchNextPage, isFetchingNextPage } = useHouses();
  const [ showButton, setShowButton ] = useState<Boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

       setShowButton(scrollTop > windowHeight)

      if (scrollTop + windowHeight >= documentHeight) {
        if (!isFetchingNextPage) fetchNextPage();
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFetchingNextPage, fetchNextPage]);

  return (
    <Container className={styles.container}>
      {showButton &&
      <Fade in={!!showButton}>
        <Fab
          variant="extended"
          style={{
            position: "fixed",
            bottom: 50,
            right: 50,
          }}
          onClick={() => scrollToTop()}
          >
          <NavigationIcon sx={{ mr: 1 }} />
          Back up
        </Fab> 
        </Fade>}
      <Header headerRef={headerRef} />
      <Stack spacing={3} style={{ minWidth: '60%', paddingTop: headerHeight + 20 }}>
          {houses?.pages.map((group, i) => (
            <Fragment key={i}>
              {group.map((house: any) => (
                <HouseCard key={house.url} {...house} />
              ))}
            </Fragment>
          ))}
          <Loader />
          <Box />
        </Stack>
    </Container>
  );
};

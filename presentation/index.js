// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  S,
  Link
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  bg: "#dddddd",
  regular: "#60b200",
  highlight: "#ef6a00",
  plain: "#222222"
}, {
  primary: "Rubik",
  secondary: "Helvetica"
});
const colors = theme.screen.colors;

const bottomRight = {
  position: "relative",
  bottom: "-20px"
};

export default class Presentation extends React.Component {
  render() {
    return (
    <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
      {/* ************************************  1  ************************************ */}
      <Slide transition={["zoom"]} bgColor="bg">
        <Heading size={1} fit caps lineHeight={1} textColor="highlight">
          WebAssembly
        </Heading>
        <Text margin="10px 0 0" textColor="regular" size={1} fit bold>
          Taking a look behind the hype
        </Text>
        <Text size={5} textAlign="center" style={bottomRight}>
          <S type="" style={{ color: colors.regular }}>@</S>
          <S type="" style={{ color: colors.highlight }}>Benedek</S>
          <S type="" style={{ color: colors.regular }}>Gagyi</S>
        </Text>
      </Slide>
      {/* ************************************  2  ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">
          <S type="" style={{ color: colors.regular }}>JavaScript</S>
          <S type="" style={{ color: colors.highlight }}> performance:</S>
          <S type="" style={{ color: colors.regular }}> why does it suck?</S>
        </Heading>
        <List type="A" textColor="regular">
          <ListItem>simplicity above everything else</ListItem>
          <ListItem>dynamic, weakly typed</ListItem>
          <ListItem>2008: just-in-time (JIT) compiling</ListItem>
          <ListItem>
            <Link textColor="highlight" href="https://hacks.mozilla.org/2017/02/a-cartoon-intro-to-webassembly/">
              For more info, check out Link Clark's work
            </Link>
          </ListItem>
        </List>
      </Slide>
      {/* ************************************  3  ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">
          <S type="" style={{ color: colors.regular }}>The first step:</S>
          <S type="" style={{ color: colors.highlight }}> asm</S>
          <S type="" style={{ color: colors.regular }}>.js</S>
        </Heading>
        <List type="A" textColor="regular">
          <ListItem>2013, Mozilla</ListItem>
          <ListItem>a subset of JS</ListItem>
          <ListItem>double vs. int 32</ListItem>
          <ListItem>i = i|0;</ListItem>
          <ListItem>
            <S type="" style={{ color: colors.highlight }}>not </S>
            a compile target (
            <S type="" style={{ color: colors.highlight }}>?</S>
            )
          </ListItem>
        </List>
      </Slide>
      {/* ************************************  4  ************************************ */}
      <Slide transition={["fade"]} bgColor="bg" textColor="plain">
        <Heading size={6} textColor="regular" caps>Standard List</Heading>
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>Item 4</ListItem>
        </List>
      </Slide>
      {/* ************************************  5  ************************************ */}
      <Slide transition={["fade"]} bgColor="bg" textColor="highlight">
        <BlockQuote>
        <Quote>Example Quote</Quote>
        <Cite>Author</Cite>
        </BlockQuote>
      </Slide>
    </Deck>
    );
  }
}

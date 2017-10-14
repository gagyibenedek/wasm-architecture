// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  S,
  Link,
  Image,
  BlockQuote,
  Quote,
  Cite,
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  wasmLogo: require("../assets/WebAssembly_Logo.png")
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
          It's not all about the performance
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
          <S type="" style={{ color: colors.regular }}>A significant step:</S>
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
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">
          <S type="" style={{ color: colors.highlight }}>Web</S>
          <S type="" style={{ color: colors.regular }}>Assembly</S>
        </Heading>
        <List type="A" textColor="regular">
          <ListItem>announced on 17 June 2015</ListItem>
          <ListItem>open standard: developed by W3C</ListItem>
          <ListItem>all the mayor players are behind it</ListItem>
          <ListItem>15 March 2016: MVP is demonstrated</ListItem>
        </List>
      </Slide>
      {/* ************************************  5  ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={1} textColor="regular">What is</Heading>
        <Image display="block" height="300" src={images.wasmLogo} />
        <Heading size={1} textColor="regular">?</Heading>
      </Slide>
      {/* ************************************  6  ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <BlockQuote>
          <Quote textSize={75} textColor="regular">
            WebAssembly is a way to run programming languages
            <S type="" style={{ color: colors.highlight }}> other </S>
            than JavaScript on web pages.
          </Quote>
          <Cite textSize={50} textColor="highlight">Lin Clark</Cite>
        </BlockQuote>
      </Slide>
      {/* ************************************  7  ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">Binary executable format</Heading>
        <CodePane
          lang="binary"
          source={require("raw-loader!../assets/add.wasm")}
          style={{ overflow: "auto", height: "75vh" }}
        />
      </Slide>
      {/* ************************************  8  ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">Text representation</Heading>
        <CodePane
          lang="lisp"
          source={require("raw-loader!../assets/add.wast")}
          style={{ overflow: "auto", height: "75vh" }}
          textSize="2.7vh"
        />
      </Slide>
      {/* ************************************  9  ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">Source written in C</Heading>
        <CodePane
          lang="C-like"
          source={require("raw-loader!../assets/add.c")}
          style={{ overflow: "auto", height: "75vh" }}
          textSize="4vh"
        />
      </Slide>

      {/* ************************************  END  ************************************ */}
    </Deck>
    );
  }
}

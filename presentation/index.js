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
  CodePane,
  Layout,
  Fill,
  Appear
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  wasmLogo: require("../assets/WebAssembly_Logo.png"),
  compile: require("../assets/compile.png"),
  hot: require("../assets/hot.jpg"),
  joinme: require("../assets/jm.svg"),
  lmi: require("../assets/lmi.svg"),
  android: require("../assets/android.svg"),
  emscripten: require("../assets/emscripten.png"),
  heart: require("../assets/heart.png"),
  win: require("../assets/win.png"),
  ios: require("../assets/ios.png"),
  html5: require("../assets/html5.png"),
  fast: require("../assets/fast.jpg"),
  slow: require("../assets/slow.jpg"),
  mac: require("../assets/mac.gif")
};

preloader(images);

const theme = createTheme({
  bg: "#dddddd",
  regular: "#60b200",
  highlight: "#ef6a00",
  plain: "#222222",
  white: "#fff"
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
      {/* ************************************    ************************************ */}
      <Slide transition={["zoom"]} bgColor="bg">
        <Heading size={1} fit caps lineHeight={1} textColor="highlight">
          WebAssembly
        </Heading>
        <Text margin="10px 0 0" textColor="regular" size={1} fit bold>
          It's all about the performance
        </Text>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["zoom"]} bgColor="highlight">
        <Image src={images.lmi} width="100%" />
        <Heading size={2} lineHeight={1} textColor="white">
          @BenedekGagyi
        </Heading>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular" margin=" 0 0 30px">
          <S type="" style={{ color: colors.regular }}>The state of the</S>
          <S type="" style={{ color: colors.highlight }}> web </S>
          <S type="" style={{ color: colors.regular }}> in 2017</S>
        </Heading>
        <Layout>
          <Fill>
            <Heading size={5} textColor="white" bgColor="regular" margin="10px" padding="0 10px" lineHeight="2em">
              JavaScript<br />Monopoly
            </Heading>
          </Fill>
          <Fill>
            <Heading size={5} textColor="white" bgColor="regular" margin="10px" padding="0 10px" lineHeight="4em">
              HW APIs
            </Heading>
          </Fill>
        </Layout>
        <Appear>
          <Heading size={5} textColor="white" bgColor="highlight" margin="10px" padding="0 10px" lineHeight="2em">
            Disappointing performance
          </Heading>
        </Appear>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular" margin=" 0 0 30px">
          <S type="" style={{ color: colors.regular }}>JS</S>
          <S type="" style={{ color: colors.highlight }}> performance:</S>
          <S type="" style={{ color: colors.regular }}> why does it suck?</S>
        </Heading>
        <List type="A" textColor="regular">
          <ListItem>simplicity above everything else</ListItem>
          <ListItem>dynamic, weakly typed</ListItem>
          <ListItem>2008: just-in-time (JIT) compiling</ListItem>
        </List>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular" margin=" 0 0 30px">
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
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg" margin=" 0 0 30px">
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
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={1} textColor="regular">What is</Heading>
        <Image display="block" height="300" src={images.wasmLogo} />
        <Heading size={1} textColor="regular">?</Heading>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">
          It's a
          <S type="" style={{ color: colors.highlight }}> binary </S>
          executable format
        </Heading>
        <CodePane
          lang="binary"
          source={require("raw-loader!../assets/add.wasm")}
          style={{ overflow: "auto", height: "65vh" }}
        />
      </Slide>
      {/* ************************************  7  ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">
          It has a
          <S type="" style={{ color: colors.highlight }}> text </S>
          representation
        </Heading>
        <CodePane
          lang="lisp"
          source={require("raw-loader!../assets/add.wast")}
          style={{ overflow: "auto", height: "75vh" }}
          textSize="2.7vh"
        />
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">Source written in C</Heading>
        <CodePane
          lang="C-like"
          source={require("raw-loader!../assets/add.c")}
          style={{ overflow: "auto", height: "75vh" }}
          textSize="7vh"
        />
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular" margin=" 0 0 30px">
          It's a compile
          <S type="" style={{ color: colors.highlight }}> target</S>
        </Heading>
        <Image display="block" height="500" src={images.compile} />
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular" margin=" 0 0 30px">
          asm.js
          <S type="" style={{ color: colors.highlight }}> vs. </S>
          WebAssembly
        </Heading>
        <List textColor="plain" margin={10} textAlign="center">
          <ListItem textSize="2rem">equivalent (for now, to support polyfilling)</ListItem>
        </List>
        <Layout>
          <Fill>
            <List textColor="highlight" margin={10} >
              <ListItem textSize="2rem">pushed by Mozilla</ListItem>
              <ListItem textSize="2rem">minify, zip / unzip</ListItem>
              <ListItem textSize="2rem">parsing</ListItem>
              <ListItem textSize="2rem">warm-up time</ListItem>
            </List>
          </Fill>
          <Fill>
            <List textColor="regular" margin={10}>
              <ListItem textSize="2rem">backed by all major players</ListItem>
              <ListItem textSize="2rem">inherently compressed</ListItem>
              <ListItem textSize="2rem">executable</ListItem>
              <ListItem textSize="2rem">consistent performance</ListItem>
            </List>
          </Fill>
        </Layout>
        <List textColor="plain" margin={10} textAlign="center">
          <ListItem textSize="2rem">can access DOM and other browser APIs</ListItem>
        </List>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg" bgImage={images.slow} align="flex-end flex-end" styleClass="noFluff">
        <Heading size={1} textColor="plain" textAlign="right" style={{ margin: "0", padding: "0" }}>asm.js</Heading>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg" bgImage={images.fast} align="flex-end flex-end">
        <Heading size={1} textColor="plain" textAlign="right">WASM</Heading>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg" margin=" 0 0 30px">
        <Heading size={4} textColor="highlight">
          <S type="" style={{ color: colors.regular }}>Speed is everything</S>
          <Appear><S type="">?</S></Appear>
        </Heading>
        <List type="A" textColor="regular">
          <ListItem>
            leverage compilers
            <S type="" style={{ color: colors.highlight }}> twice</S>
          </ListItem>
          <ListItem>10-20% smaller in gzipped form</ListItem>
          <ListItem>designed for fast parsing</ListItem>
          <ListItem>CPU features (int 64, popcount, copysign)</ListItem>
          <ListItem>predictable performance across browsers</ListItem>
          <ListItem>manual memory management</ListItem>
        </List>
      </Slide>
      {/* ************************************    ************************************ */}
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
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Image src={images.hot} height="90vh"/>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">
          The
          <S type="" style={{ color: colors.highlight }}> drawbacks </S>
          of cross-platform web development
        </Heading>
        <List type="A" textColor="regular">
          <ListItem>abstraction</ListItem>
          <ListItem>performance</ListItem>
          <ListItem>library vs. ecosystem</ListItem>
          <ListItem>patent misery</ListItem>
          <ListItem>(can be) and HR nightmare</ListItem>
        </List>
      </Slide>
      {/* ************************************  18  ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Layout>
          <Fill>
            <Image src={images.joinme} height="200px" />
          </Fill>
          <Fill>
            <S type="" textSize="170px" style={{ color: colors.highlight }}>+</S>
          </Fill>
          <Fill>
            <Image src={images.emscripten} height="200px" />
          </Fill>
          <Fill>
            <S type="" textSize="170px" style={{ color: colors.highlight }}>=</S>
          </Fill>
          <Fill>
            <Image src={images.heart} height="200px" />
          </Fill>
        </Layout>
      </Slide>
      {/* ************************************    ************************************ */}
      <Slide transition={["fade"]} bgColor="bg">
        <Heading size={4} textColor="regular">
          The evolution of
          <S type="" style={{ color: colors.highlight }}> join.</S>
          me
        </Heading>
        <Layout>
          <Fill>
            <Image src={images.win} height="200px" />
          </Fill>
          <Fill>
            <Appear><Image src={images.mac} height="200px" /></Appear>
          </Fill>
        </Layout>
        <Layout>
          <Fill>
            <Appear><Image src={images.android} height="200px" /></Appear>
          </Fill>
          <Fill>
            <Appear><Image src={images.ios} height="200px" /></Appear>
          </Fill>
        </Layout>
      </Slide>
       {/* ************************************    ************************************ */}
       <Slide transition={["fade"]} bgColor="bg">
        <Layout>
          <Fill>
            <Image src={images.win} height="200px" />
          </Fill>
          <Fill>
            <Image src={images.mac} height="200px" />
          </Fill>
          <Fill>
            <Image src={images.android} height="200px" />
          </Fill>
          <Fill>
            <Image src={images.ios} height="200px" />
          </Fill>
          <Fill>
            <Appear><Image src={images.html5} height="200px" /></Appear>
          </Fill>
        </Layout>
        <Heading size={4} textColor="white" bgColor="regular" margin="10px" padding="0 10px" lineHeight="2em">
          COMMON
        </Heading>
      </Slide>

       {/* ************************************    ************************************ */}
       <Slide transition={["fade"]} bgColor="bg">
        <Heading size={1} textColor="highlight">
          WaaAr
          <S type="" style={{ color: colors.regular, position: "relative", top: "-0.8em", fontSize: "50%" }}>TM</S>
        </Heading>
        <Heading size={4} textColor="regular" margin="15px">
          WebAssembly as an Architecture
        </Heading>
      </Slide>

      {/* ************************************  END  ************************************ */}
    </Deck>
    );
  }
}

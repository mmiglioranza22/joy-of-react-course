import React from "react";

import ButtonCensored from "./ButtonCensored";
import HitsCounter from "./HitsCounter";

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);


Approach: Slot pattern as wrapper
Client components that handle state need to be interactive and render in the client, should work a vessels to add "interactivity" to
server components that do not manage state -> only show content. This is, CC should not own SC. (The inverse is allowed)

*/

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>You are visitor number</p>{" "}
      <ButtonCensored>
        <HitsCounter />
      </ButtonCensored>
    </main>
  );
}

export default Home;

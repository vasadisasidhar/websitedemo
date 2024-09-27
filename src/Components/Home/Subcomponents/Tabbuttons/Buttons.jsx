import React, { Component, useState } from "react";
import { TabButtons } from "./TabButtons";
import "./Buttons.css";
import { EXAMPLES } from "./data";
import Submitenquiry from "./Forms/Submitenquiry";

const Buttons = () => {
  const [selectedTopic, setSelectedTopic] = useState("submit");

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <main>
      <section id="examples">
          <menu>
            <TabButtons isSelected={selectedTopic=="submit"} onSelect={() => handleClick("submit")}>SUBMIT ENQUIRY</TabButtons>
            <TabButtons isSelected={selectedTopic=="subscribe"} onSelect={() => handleClick("subscribe")}>SUBSCRIBE</TabButtons>
          </menu>
      </section>
        <div id="tab-content">
          {!selectedTopic === "submit" ? 
            <Submitenquiry/>:
            <div>
              <p>{EXAMPLES[selectedTopic]?.description}</p>  
            </div>
          }
        </div>
    </main>
  );
};

export default Buttons;

import SubSection from "./SubSection";
import React from "react";
import strings from "../strings.json";

const subSection = ({title, id, description, crest = null}) => (
  <SubSection id={id} key={id} title={title} crest={crest}> {description} </SubSection>);

const allSubSections = body => body.map(i => subSection(i));

export default ({name}) => {
  console.log(name);
  return <section>
    <a name={name}/>
    {allSubSections(strings[name])}
  </section>;
}

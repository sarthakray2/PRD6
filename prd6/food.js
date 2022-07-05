import { useState } from "react";
import styled from "styled-components";
import { Tabs, Tab, TabPanel } from "../../components/prd6/tabs/tabss";
import logo from "./111.jpg";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { MdBookmarkBorder, MdLens,MdCancel } from "react-icons/md";
import Chevron from "react-chevron";
const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;

const TabPanelContainer = styled.div`
  height: 100vh;
  margin-top: 4%;
`;

export default function Appk() {
  const [activeTab, setActiveTab] = useState(2);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };

  return (
    <div className="Akk">
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="Dashboard" value={0}></Tab>
          <Chevron className="chevrony" />
          <Tab label="Food Technology" value={1}></Tab>
          <Chevron className="chevrony" />
          <Tab label="Agriculture machinery" value={2}></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
       
        <TabPanel value={activeTab} selectedIndex={2}>
          <h1 className="tab31">Food Technology : Agriculture machinery</h1>
          <div className="bt01">
            <Button className="bt0"><MdBookmarkBorder className="oye100" />Bookmark</Button>
          </div>
          <img className="org" src={logo} alt="/"/>
          <p className="tab4">What will you learn ?</p>
          <p className="tab5">WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer
            nec odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi.
            Nbcnt per conubia nostra, per inceptos himenaeos. ante dapibus
            diam. WLorem ipsum dolor sit amet, consectetur ad ipiscing elit. Integer nec odio. Praesent libero Sed cursus ante dapibus diam. Sed nisi. Nbcnt per conubia nostra, per inceptos himenaeos. ante dapibus diam.</p>
          <p className="tab6"><MdLens className="tab7" />WLorem ipsum dolor sit amet, consectetur ad ipiscing elit.</p>
          <p className="tab8"><MdLens className="tab7" />WLorem ipsum dolor sit amet, consectetur ad ipiscing elit.</p>
          <p className="tab9"><MdLens className="tab7" />WLorem ipsum dolor sit amet, consectetur ad ipiscing elit.</p>
          <p className="tab10"><MdLens className="tab7" />WLorem ipsum dolor sit amet, consectetur ad ipiscing elit.</p>
          <div className="bt3">
            <Button className="bt4">Mark as Complete</Button>
            <Button className="bt5">Join the Discussion</Button>
         </div>
          <div id="small41">
            <Card className="card91">
              <div className="right">
                <Card.Body className="table41">
                  <MdCancel className="ok"/>
                  <Card.Title className="title41">Was this video helpful ?</Card.Title>
                  <div className="btnn11">
                    <Button className="bt111">Yes</Button>
                    <Button className="bt121">No</Button>
                  </div>
                </Card.Body>

              </div>
            </Card>
          </div>
        </TabPanel>
      </TabPanelContainer>
    </div>
   
  );
}

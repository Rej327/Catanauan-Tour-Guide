import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import All from "./Tabs/All";

const RestoBodyDesktop = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4 hidden md:block">
      <Tabs mx="auto" position="relative" variant="unstyled">
        <TabList justifyContent="space-evenly">
          <Tab>
            <p className="font-bold">All</p>
          </Tab>
          <Tab>
            <p className="font-bold">Restaurants</p>
          </Tab>
          <Tab>
            <p className="font-bold">Bar & Pub's</p>
          </Tab>
          <Tab>
            <p className="font-bold">Cafe's</p>
          </Tab>
          <Tab>
            <p className="font-bold">Food & Dring Tours</p>
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="orange.200"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <All />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>four !</p>
          </TabPanel>
          <TabPanel>
            <p>five !</p>
          </TabPanel>
          <TabPanel>
            <p>six !</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default RestoBodyDesktop;

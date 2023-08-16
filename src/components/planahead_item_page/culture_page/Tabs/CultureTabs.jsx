import React from "react";
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import FiestaContent from "./Fiesta/FiestaContent";
import FestivalContent from "./Festival/FestivalContent";
import ExcavationContent from "./Excavation/ExcavationContent";

const CultureTabs = () => {
  return (
    <div className="w-full">
      <Tabs position="relative" variant="unstyled">
        <TabList gap="1rem">
          <Tab>
            <p className="font-bold">Festival</p>
          </Tab>
          <Tab>
            <p className="font-bold">Fiesta</p>
          </Tab>
          <Tab>
            <p className="font-bold">Catanauan Excavations</p>
          </Tab>
        </TabList>
        <TabIndicator
          mt="2.5px"
          height="3px"
          bg="orange.200"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <FestivalContent />
          </TabPanel>
          <TabPanel>
            <FiestaContent />
          </TabPanel>
          <TabPanel>
            <ExcavationContent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default CultureTabs;

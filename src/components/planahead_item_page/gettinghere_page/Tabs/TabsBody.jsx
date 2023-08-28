import React from "react";
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import BusContent from "./Bus/BusContent";
import VanContent from "./Van/VanContent";

const TabsBody = () => {
  return (
    <div className="w-full">
      <Tabs position="relative" variant="unstyled">
        <TabList gap="1rem">
          <Tab>
            <p className="font-bold">Bus</p>
          </Tab>
          <Tab>
            <p className="font-bold">Van</p>
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
            <BusContent />
          </TabPanel>
          <TabPanel>
            <VanContent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TabsBody;

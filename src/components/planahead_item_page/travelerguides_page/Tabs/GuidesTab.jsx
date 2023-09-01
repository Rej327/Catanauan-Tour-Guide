import React from "react";
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import HistoryContent from "./History/HistoryContent";

const GuidesTab = () => {
  return (
    <div className="w-full">
      <Tabs position="relative" variant="unstyled">
        <TabList gap="1rem">
          <Tab>
            <p className="font-bold">History</p>
          </Tab>
          {/* <Tab>
            <p className="font-bold">Events</p>
          </Tab>
          <Tab>
            <p className="font-bold">Locals</p>
          </Tab> */}
        </TabList>
        <TabIndicator
          mt="2.5px"
          height="3px"
          bg="orange.200"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            {/* Tab 1 */}
            <HistoryContent />
          </TabPanel>
          {/* <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel> */}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default GuidesTab;

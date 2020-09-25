import React from "react";
import { Flex } from "@rebass/grid";
import { BrowserRouter as Router } from "react-router-dom";

const Routes = () => {
  return (
    <Flex width="100%" flexDirection="column" height="100%">
      <Router></Router>
    </Flex>
  );
};

export default Routes;

//  <MainNavigation>
//   {(setIsOpen) => (
//     <>
//       <DrawerOption onClick={() => setIsOpen(false)} to="/">
//         Home
//       </DrawerOption>
//       <DrawerOption onClick={() => setIsOpen(false)} to="/properties">
//         View properties
//       </DrawerOption>
//       <DrawerOption
//         onClick={() => setIsOpen(false)}
//         to="/create-property"
//       >
//         Add property
//       </DrawerOption>
//     </>
//   )}
// </MainNavigation>
// <Main>
//   {/* <Flex width="100%" flexDirection="row" height="100%"> */}
//   {/* <SideMenu>n</SideMenu> */}
//   <Switch>
//     <Route path={['/']} exact component={Home} />
//     <Route path={['/properties']} component={PropertyList} />
//     <Route path={['/create-property']} component={AddProperty} />
//     <Route path={['/auth']} component={Authentication} />
//     <Route render={() => <>Not Found</>} />
//   </Switch>
//   {/* </Flex> */}
// </Main>

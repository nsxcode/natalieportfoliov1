import React from "react";
import {SidebarContainer, SidebarWrapper, SidebarMenu, SidebarLink} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <SidebarWrapper >
                <SidebarMenu>
                    <SidebarLink to='skills' onClick={toggle}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to='contacts' onClick={toggle}>
                        Contacts
                    </SidebarLink>
                    <SidebarLink >
                        Change Theme
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};
export default Sidebar;

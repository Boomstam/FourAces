import React from 'react';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default ({ children }) => (
  <div>
        <Nav>

          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/calendar">Calendar</NavLink>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Media
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem  tag={Link} to="/audio">
                  Audio
                  </DropdownItem>
                  <DropdownItem  tag={Link} to="/video">
                  Video
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Cancel
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

        </Nav>
        {children}
      </div>
)
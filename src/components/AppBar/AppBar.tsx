import { useMemo } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuth } from '../../hooks/useAuth';
import { NAV_LINKS } from '../../utils/constants';
import { useAuth } from '../../hook/useAuth';
import { useEffect, useState } from 'react';
import useUserInfo from '../../hook/useUserInfo';

export default function AppBar() {
  const { user, signOutOfSession } = useAuth();

  const hasAuth = useMemo(() => !!user, [user]);

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">Hire-a-Patient</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="justify-content-end w-100">
            <Nav.Link href={NAV_LINKS.ABOUT}>About</Nav.Link>
            <Nav.Link href={NAV_LINKS.JOBS}>Jobs</Nav.Link>
            <Nav.Link href={NAV_LINKS.BLOG}>Blog</Nav.Link>
            {hasAuth ? (
              <NavDropdown title={user?.displayName || 'Anonymous'}>
                <NavDropdown.Item href={NAV_LINKS.PROFILE}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href={NAV_LINKS.JOBS_APPLIED}>
                  Job applications
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={signOutOfSession}>
                  Sign out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Button href={NAV_LINKS.LOGIN}>Sign in</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiFile2Line,
  RiGitMergeLine,
  RiInputMethodLine,
  RiSettings2Line,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Usuários</NavLink>
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine}>Formlários</NavLink>
          <NavLink icon={RiGitMergeLine}>Automação</NavLink>
        </NavSection>
        <NavSection title="ADMINISTRAÇÃO">
          <NavLink icon={RiSettings2Line}>Configurações</NavLink>
          <NavLink icon={RiFile2Line}>Relatórios</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}

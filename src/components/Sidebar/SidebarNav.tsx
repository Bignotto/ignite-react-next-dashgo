import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";
import {
  RiContactsLine,
  RiDashboardLine,
  RiFile2Line,
  RiGitMergeLine,
  RiInputMethodLine,
  RiSettings2Line,
} from "react-icons/ri";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink href="/users" icon={RiContactsLine}>
          Usuários
        </NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink href="/forms" icon={RiInputMethodLine}>
          Formlários
        </NavLink>
        <NavLink href="/automation" icon={RiGitMergeLine}>
          Automação
        </NavLink>
      </NavSection>
      <NavSection title="ADMINISTRAÇÃO">
        <NavLink href="/settings" icon={RiSettings2Line}>
          Configurações
        </NavLink>
        <NavLink href="/reports" icon={RiFile2Line}>
          Relatórios
        </NavLink>
      </NavSection>
    </Stack>
  );
}
